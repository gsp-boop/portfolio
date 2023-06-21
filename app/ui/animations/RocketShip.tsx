"use client";

import React, { ReactElement, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { AiFillRocket } from "react-icons/ai";

const RocketShip = ({ children }: any) => {
  const rocketShipRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: rocketShipRef,
    offset: ["start end", "end start"],
  });
  //   const opacity = useTransform(scrollYProgress, [0.1, 0.2], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.1], [0, 2]);
  const x = useTransform(
    scrollYProgress,
    [0.1, 0.25, 0.5, 0.6, 0.7],
    ["0vw", "30vw", "20vw", "10vw", "0vw"]
  );
  const y = useTransform(
    scrollYProgress,
    [0.1, 0.25, 0.5, 0.6, 0.7],
    ["-10vh", "10vh", "10vh", "10vh", "10vh"]
  );
  const rotate = useTransform(
    scrollYProgress,
    [0.1, 0.25, 0.5, 0.6, 0.7],
    ["0deg", "180deg", "210deg", "180deg", "0deg"]
  );
  const color = useTransform(
    scrollYProgress,
    [0.1, 0.25, 0.5, 0.6, 0.7],
    ["#262525", "#6a6a6a", "#262525", "#6a6a6a", "#262525"]
  );

  const shot = useTransform(
    scrollYProgress,
    [0.1, 0.25, 0.5, 0.6, 0.7],
    ["0px", "0px", "-60vh", "-80vh", "-100vh"]
  );
  return (
    <motion.div
      style={{ opacity: 1 }}
      ref={rocketShipRef}
      className="h-[300vh] w-full"
    >
      <div className="sticky top-[10vh]">
        <div className="flex justify-center">
          <motion.div
            className="flex relative"
            style={{ scale, x, y, rotate, color }}
          >
            <span>
              <AiFillRocket size={50} />
            </span>
            <motion.span
              style={{
                height: "12px",
                width: "2px",
                borderRadius: "10px",
                background: "white",
                position: "absolute",
                left: 0,
                right: 0,
                margin: "0 auto",
                zIndex: -1,
                y: shot,
              }}
            ></motion.span>
          </motion.div>
        </div>
      </div>
      {children}
    </motion.div>
  );
};

export default RocketShip;
