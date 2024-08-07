"use client";

import React, { useState } from "react";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";

import Wrapper from "@/components/designs/wrapper";
import IphoneSimulator from "@/components/iphone-simulator";
import { FaPlus } from "react-icons/fa6";

export default function Day48() {
  const [isOpen, setIsOpen] = useState(false);

  const onClickHandler = () => setIsOpen(!isOpen);

  return (
    <Wrapper>
      <IphoneSimulator textColor="black">
        <div className="absolute inset-0 -z-10 bg-white" />

        <MotionConfig
          transition={{
            duration: 0.7,
            type: "spring",
            bounce: isOpen ? 0.4 : 0.2,
          }}
        >
          <div className="flex h-full flex-col">
            <div className="grow"></div>
            <div className="flex w-full gap-2 px-2 text-black">
              <button
                className="relative isolate flex h-8 w-8 flex-col items-center justify-center text-[#807F83]"
                onClick={onClickHandler}
              >
                <motion.div
                  layoutId="background-wrapper"
                  className="absolute inset-0 -z-10"
                  style={{ borderRadius: 20, background: "#EAEAED" }}
                />
                <motion.div
                  layoutId="wrapper"
                  className="absolute inset-0 -z-10"
                  style={{ borderRadius: 20 }}
                />

                <motion.span
                  layoutId="plus-icon"
                  className="absolute inline-block"
                >
                  <FaPlus />
                </motion.span>
              </button>
              <input
                type="text"
                placeholder="iMessage"
                className="grow rounded-full border px-2 outline-none"
              />
            </div>
          </div>

          <AnimatePresence mode="popLayout">
            {isOpen ? (
              <div
                className="absolute inset-0 isolate flex flex-col justify-end px-6 py-12"
                onClick={onClickHandler}
              >
                <motion.span
                  layoutId="plus-icon"
                  className="pointer-events-none absolute inline-block text-[#fff]"
                >
                  <FaPlus />
                </motion.span>
                <motion.div
                  layoutId="background-wrapper"
                  className="absolute bottom-0 left-0 -z-10 h-1/2 w-1/2"
                  style={{ background: "#fff" }}
                />
                <motion.div layoutId="wrapper">
                  {Array.from({ length: 6 }).map((_, index) => (
                    <motion.div
                      key={index}
                      initial={{ filter: "blur(4px)" }}
                      animate={{ filter: "blur(0px)" }}
                      transition={{ delay: 0.1 }}
                      className="h-12 text-xl"
                    >
                      Button
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            ) : null}
          </AnimatePresence>
        </MotionConfig>
      </IphoneSimulator>
    </Wrapper>
  );
}
