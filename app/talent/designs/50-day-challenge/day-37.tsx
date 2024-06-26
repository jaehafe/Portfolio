"use client";

import React, { useEffect, useState } from "react";
import { AnimatePresence, motion, useAnimate } from "framer-motion";

import Wrapper from "@/components/designs/wrapper";
import IphoneSimulator from "@/components/iphone-simulator";
import Image from "next/image";

const images = [
  {
    id: 1,
    url: "https://cdn.jim-nielsen.com/macos/256/font-file-browser-2023-11-02.png?rf=1024",
    name: "Font File Browser",
  },
  {
    id: 2,
    url: "https://cdn.jim-nielsen.com/macos/256/photos-2021-05-28.png?rf=1024",
    name: "Photos",
  },
  {
    id: 3,
    url: "https://cdn.jim-nielsen.com/macos/256/calendar-2021-04-29.png?rf=1024",
    name: "Calendar",
  },
  {
    id: 4,
    url: "https://cdn.jim-nielsen.com/macos/256/macos-ventura-2024-04-23.png?rf=1024",
    name: "macOS Ventura",
  },
  {
    id: 5,
    url: "https://cdn.jim-nielsen.com/macos/256/raycast-2023-02-14.png?rf=1024",
    name: "Raycast",
  },
  {
    id: 6,
    url: "https://cdn.jim-nielsen.com/macos/256/microsoft-word-2022-08-02.png?rf=1024",
    name: "Microsoft Word",
  },
  {
    id: 7,
    url: "https://cdn.jim-nielsen.com/macos/256/road-rush-cars-crossy-race-2022-10-04.png?rf=1024",
    name: "Road Rush Cars Crossy Race",
  },
  {
    id: 8,
    url: "https://cdn.jim-nielsen.com/macos/256/hep-html-editor-pro-2022-01-25.png?rf=1024",
    name: "HEP HTML Editor Pro",
  },
  {
    id: 9,
    url: "https://cdn.jim-nielsen.com/macos/256/legends-of-kingdom-rush-rpg-2021-09-22.png?rf=1024",
    name: "Legends of Kingdom Rush RPG",
  },
  {
    id: 10,
    url: "https://cdn.jim-nielsen.com/macos/256/stock-market-rates-tracker-2021-05-19.png?rf=1024",
    name: "Stock Market Rates Tracker",
  },
  {
    id: 11,
    url: "https://cdn.jim-nielsen.com/macos/256/music-2021-05-25.png?rf=1024",
    name: "Music",
  },
  {
    id: 12,
    url: "https://cdn.jim-nielsen.com/macos/256/maps-2021-05-25.png?rf=1024",
    name: "Maps",
  },
  {
    id: 13,
    url: "https://cdn.jim-nielsen.com/macos/256/quill-chat-2021-03-18.png?rf=1024",
    name: "Quill Chat",
  },
  {
    id: 14,
    url: "https://cdn.jim-nielsen.com/macos/256/altos-odyssey-2020-02-19.png?rf=1024",
    name: "Altos Odyssey",
  },
];

export default function Day37() {
  const [iconOpen, setIconOpen] = useState(0);

  console.log(iconOpen);

  return (
    <Wrapper>
      <IphoneSimulator>
        <img
          src="https://9to5mac.com/wp-content/uploads/sites/6/2023/09/iPhone-15-Pro-White-wallpaper-5.jpeg?quality=82&strip=all"
          className="absolute left-0 top-0 -z-10 h-full w-full"
        />
        <ul className="grid grid-cols-4 gap-4 p-4">
          {images.map((image) => (
            <EachIcon
              key={image.id}
              data={image}
              iconOpen={iconOpen}
              setIconOpen={setIconOpen}
            />
          ))}
        </ul>
      </IphoneSimulator>
    </Wrapper>
  );
}

function EachIcon({
  data,
  iconOpen,
  setIconOpen,
}: {
  data: { id: number; url: string; name: string };
  iconOpen: number;
  setIconOpen: (a: number) => void;
}) {
  const [isPressed, setIsPressed] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const [scope, animate] = useAnimate();

  useEffect(() => {
    if (isPressed) {
      const timeout = setTimeout(() => {
        setIsOpen(true);
        setIconOpen(data.id);
      }, 300);

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [isPressed]);

  const onPressHandler = async () => {
    setIsPressed(true);
    animate("button", { filter: "grayscale(100%)" }, { duration: 0 });
    await new Promise((resolve) => setTimeout(resolve, 200));
    animate(
      "button",
      { transform: "scale(1.2)", zIndex: 30 },
      { duration: 0.5, type: "spring", bounce: 0.2 }
    );
    animate(
      "button",
      { filter: "grayscale(0%)" },
      { duration: 0.4, delay: 0.2 }
    );
  };

  const onReleaseHandler = async () => {
    setIsPressed(false);

    if (!isOpen) {
      animate("button", { filter: "grayscale(0%)" }, { duration: 0.3 });
      animate(
        "button",
        { transform: "scale(1)", zIndex: 0 },
        { duration: 0.3 }
      );
    }
  };

  const onBackgroundHandler = () => {
    setIsOpen(false);
    setIconOpen(0);

    animate("button", { filter: "grayscale(0%)" }, { duration: 0.3 });
    animate(
      "button",
      { transform: "scale(1)", zIndex: 0 },
      { duration: 0.2, zIndex: { delay: 0.5 } }
    );
  };

  return (
    <li
      ref={scope}
      className={`flex origin-top flex-col justify-center duration-200 ${iconOpen !== 0 && iconOpen !== data.id ? "scale-90" : ""}`}
    >
      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="absolute left-0 top-0 z-20 h-full w-full rounded-[53px] bg-black/20 backdrop-blur-md"
            onClick={onBackgroundHandler}
          ></motion.div>
        ) : null}
      </AnimatePresence>
      <motion.button
        onMouseDown={onPressHandler}
        onMouseUp={onReleaseHandler}
        onTouchStart={onPressHandler}
        onTouchEnd={onReleaseHandler}
        initial={{ transform: "scale(1)" }}
        className={`${isOpen ? "relative" : ""}`}
      >
        <Image src={data.url} width={100} height={100} alt="" />

        {isOpen ? (
          <motion.div
            initial={{ scale: 0, height: 0 }}
            animate={{ scale: 1, height: 140 }}
            transition={{ duration: 0.4, type: "spring", bounce: 0.2 }}
            className="absolute right-2 flex h-48 w-48 origin-top-right items-center justify-center rounded-xl bg-white/70 text-black"
          >
            Links
          </motion.div>
        ) : null}
      </motion.button>
      <small className="truncate whitespace-nowrap text-center">
        {data.name}
      </small>
    </li>
  );
}
