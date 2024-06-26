"use client";

import React, { useState } from "react";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";

import Wrapper from "@/components/designs/wrapper";
import IphoneSimulator from "@/components/iphone-simulator";
import { cn } from "@/utils";
import Checkbox from "@/components/checkbox";
import Hr from "@/components/hr";

export default function Day32() {
  const [isSlow, setIsSlow] = useState(false);

  const [expand, setExpand] = useState(false);

  const onClickHandler = () => setExpand(!expand);

  return (
    <Wrapper>
      <label className="mb-8 flex items-center gap-2">
        <Checkbox
          variant={"square"}
          onChange={({ target }) => setIsSlow(target.checked)}
        />
        make it slow
      </label>
      <IphoneSimulator
        mainClassName={`bg-[#F1F1F6] ${expand ? "pt-0" : ""}`}
        mixBlend={false}
        textColor="black"
      >
        <div>
          <MotionConfig
            transition={{
              duration: isSlow ? 2 : 0.4,
              type: "spring",
              bounce: 0.2,
            }}
          >
            <motion.button
              className={cn(
                "text-bue absolute z-30 rounded-full px-2",
                expand ? "top-[64px]" : ""
              )}
              initial={{ right: 0 }}
              animate={{
                right: expand ? 8 : 0,
                background: expand ? "rgba(255,112,0,1)" : "rgba(255,112,0,0)",
                color: expand ? "rgb(255, 255, 255)" : "rgb(59, 130, 246)",
              }}
            >
              Edit
            </motion.button>
            {/* Header */}
            <motion.header
              layout
              // animate={{
              //   height: expand ? 300 : "auto",
              // }}
              style={{ aspectRatio: expand ? "1/1" : "" }}
              className={cn(
                "relative isolate flex flex-col",
                expand
                  ? "mt-0 items-start justify-end p-4"
                  : "mt-4 items-center justify-center"
              )}
            >
              <motion.button
                layoutId="user-avatar"
                className="aspect-square w-16 overflow-hidden bg-red-800"
                onClick={onClickHandler}
                style={{
                  borderRadius: 34,
                }}
              >
                <img
                  src="https://pbs.twimg.com/profile_images/1774123575248830466/e0rbeSop_400x400.jpg"
                  className="pointer-events-none h-full w-full object-cover"
                />
              </motion.button>
              <motion.div
                className={`relative z-20 flex flex-col ${expand ? " items-start" : "items-center"}`}
              >
                <motion.h2
                  layout
                  className={`inline-block text-xl font-medium`}
                  animate={{
                    color: expand ? "#ffffff" : "#000000",
                  }}
                >
                  🇦🇫 Ali Reza 🤞
                </motion.h2>
                <motion.div
                  layout
                  className={`flex gap-1 text-xs`}
                  animate={{ color: expand ? "#ffffff" : "#8C8C93" }}
                >
                  <p className="tracking-tight">+1 971 923 2873</p>•
                  <p>@alisamadi__</p>
                </motion.div>
              </motion.div>

              <AnimatePresence>
                {expand && (
                  <motion.button
                    layoutId="user-avatar"
                    className="absolute inset-0 -z-10 aspect-square overflow-hidden bg-red-800"
                    style={{ borderRadius: 0 }}
                    onClick={onClickHandler}
                  >
                    <motion.img
                      src="https://pbs.twimg.com/profile_images/1774123575248830466/e0rbeSop_400x400.jpg"
                      className="pointer-events-none h-full w-full object-cover"
                    />

                    <motion.div
                      //   initial={{ opacity: 0 }}
                      //   animate={{}}
                      className="absolute bottom-0 left-0 h-24 w-full bg-gradient-to-t from-black/50 to-transparent"
                    ></motion.div>
                  </motion.button>
                )}
              </AnimatePresence>

              {/* Shadow
              {expand && (
              )} */}
            </motion.header>
            {/* Settings */}
            <motion.div layout className="mt-8 overflow-auto px-4">
              <div className="h-8 w-full rounded-lg bg-white"></div>
              <div className="my-4 h-8 w-full rounded-lg bg-white"></div>

              <div className="overflow-hidden rounded-lg bg-white">
                {Array.from({ length: 20 }).map((_, index) => (
                  <>
                    <div key={index} className="h-8 w-full"></div>
                    <Hr className="my-0 ml-12 bg-[#F1F1F6]" />
                  </>
                ))}
              </div>
            </motion.div>
          </MotionConfig>
        </div>
      </IphoneSimulator>
    </Wrapper>
  );
}
