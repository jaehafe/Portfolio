import React, { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

import { TESTIMONIAL_SERVICE } from "@/contents/Service";

import { AiFillStar } from "react-icons/ai";

type Props = {
  testimonial: TESTIMONIAL_SERVICE;
};

export default function Testimonial({ testimonial }: Props) {
  const [isClicked, setIsClicked] = useState(false);
  const [fullMessage, setFullMessage] = useState(false);

  return (
    <div
      className={`relative flex flex-col gap-3 p-4 overflow-hidden rounded-lg snap-start duration-200 ${
        isClicked ? "bg-primary" : "bg-white"
      }`}
    >
      {/* Client Details */}
      <div className="flex items-center gap-2">
        <Image
          src={testimonial.client_image}
          width={30}
          height={30}
          alt={`${testimonial.name} - image`}
          className="rounded-full"
        />
        <div className="flex flex-col text-sm">
          <h3 className="text-black">{testimonial.name}</h3>
          <small className="text-xs">{testimonial.headline}</small>
        </div>
      </div>
      {/* testimonial */}
      <div>
        <p className={`font-medium ${fullMessage ? "" : "line-clamp-6"}`}>
          {testimonial.message}
        </p>
        {testimonial.message.length > 300 && (
          <p
            onClick={() => setFullMessage(!fullMessage)}
            className="mt-2 text-xs cursor-pointer"
          >
            {fullMessage ? "Show Less" : "Show More"}
          </p>
        )}
      </div>
      {/* star */}
      <div className="flex items-center text-2xl text-yellow-500">
        {/* @ts-ignore */}
        {[...Array(testimonial.star).keys()].map((_, index) => (
          <AiFillStar key={index} />
        ))}
      </div>
      <button className="text-start" onClick={() => setIsClicked(true)}>
        See More
      </button>
      {/* Project Image */}
      <AnimatePresence>
        {isClicked && (
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "tween" }}
            className="absolute bottom-0 flex flex-col gap-4 p-3 overflow-y-auto bg-white rounded-t-lg inset-4 scroll-bar"
            onClick={() => setIsClicked(false)}
            title="click for closing"
          >
            {testimonial.project_review.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, type: "tween" }}
              >
                <Image
                  src={project.image}
                  width={300}
                  height={100}
                  alt={`${testimonial.name} - Project`}
                  className="w-full rounded-lg"
                />
                <div className="flex flex-col mt-1 -space-y-[2px]">
                  <small className="font-medium">{project.pageName}</small>
                  {project.note && (
                    <small className="mt-2 leading-4">{project.note}</small>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}