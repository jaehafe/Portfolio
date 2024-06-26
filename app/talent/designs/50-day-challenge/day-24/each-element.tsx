import React, { useState } from "react";
import { FiEdit3 } from "react-icons/fi";
import useMeasure from "react-use-measure";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";

import { cn } from "@/utils";
import Date from "./date";

const buttons = [
  "open-card",
  "edit-label",
  "change-member",
  "change-cover",
  "edit-dates",
  "move",
  "copy",
  "archive",
];

export default function EachElement() {
  const [isOpen, setIsOpen] = useState(false);
  const [editDate, setEditDate] = useState(false);

  const onEditClickHandler = () => setIsOpen(!isOpen);
  const onEditDateClickHandler = () => setEditDate(!editDate);

  const [ref, { height }] = useMeasure();

  return (
    <>
      <MotionConfig transition={{ duration: 0.5, type: "spring", bounce: 0 }}>
        <motion.div
          animate={{
            zIndex: isOpen ? 30 : 0,
            transition: { zIndex: { delay: isOpen ? 0 : 0.4 } },
          }}
          className={cn("relative h-[110px]")}
        >
          <motion.div
            animate={{ height }}
            className="group absolute left-0 top-0 w-full overflow-hidden rounded-2xl bg-white"
          >
            <div ref={ref} className="p-6">
              <AnimatePresence mode="popLayout" initial={false}>
                {!editDate ? (
                  <motion.div
                    key={"difine"}
                    initial={{ x: "-120%" }}
                    animate={{ x: 0 }}
                    exit={{ x: "-120%" }}
                  >
                    <h2 className="font-bold">Define Requirements</h2>
                    <p
                      className={cn(
                        "mt-1 text-sm leading-[1.1rem] text-[#B0B0B2]",
                        isOpen && "mb-6"
                      )}
                    >
                      Gather and document all project specifications from
                      stakeholders.
                    </p>

                    <AnimatePresence mode="popLayout">
                      {isOpen && (
                        <motion.button
                          initial={{ y: 40 }}
                          animate={{ y: 0 }}
                          exit={{ y: 40 }}
                          className="h-12 w-full rounded-lg bg-gradient-to-b from-[#323434] to-black text-white"
                          onClick={onEditClickHandler}
                        >
                          Save
                        </motion.button>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ) : (
                  <motion.div
                    key={"edit-date"}
                    initial={{ x: "120%" }}
                    animate={{ x: 0 }}
                    exit={{ x: "120%" }}
                  >
                    <Date onCloseHandler={() => setEditDate(false)} />
                  </motion.div>
                )}
              </AnimatePresence>

              {!isOpen && (
                <button
                  className="absolute right-2 top-2 rounded-md p-1 opacity-0 duration-100 hover:bg-[#EAEAEA] group-hover:opacity-100"
                  onClick={onEditClickHandler}
                >
                  <FiEdit3 />
                </button>
              )}
            </div>
          </motion.div>

          {/* buttons */}
          <AnimatePresence>
            {isOpen && !editDate && (
              <motion.div
                initial={{ y: 10, x: "var(--x-initial)" }}
                animate={{ y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="absolute right-0 top-0 flex origin-bottom flex-col items-start [--x-initial:calc(100%+30px)]"
              >
                {buttons.map((button) => (
                  <button
                    key={button}
                    className="mb-2 h-10 rounded-lg border-t-[.8px] border-[#9A9A9E] bg-[#828286] px-4 text-lg capitalize text-white hover:bg-[#6a6a6e]"
                    onClick={onEditDateClickHandler}
                  >
                    {button.replaceAll("-", " ")}
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </MotionConfig>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute left-0 top-0 z-20 h-full w-full bg-black/70 backdrop-blur-sm"
            onClick={() => {
              if (!editDate) {
                onEditClickHandler();
              }
            }}
          ></motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
