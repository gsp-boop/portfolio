"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export const StarryBg = ({ children }: any) => {
  const starryBg = useRef(null);

  const { scrollYProgress } = useScroll({
    target: starryBg,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0.7, 0.8], [1, 0]);

  return (
    <>
      <motion.div
        ref={starryBg}
        style={{
          position: "fixed",
          height: "100%",
          width: "100%",
          left: "0",
          top: "0",
          opacity,
        }}
      >
        <Image
          alt="starry night"
          fill
          sizes="100vw"
          style={{ objectPosition: "center", objectFit: "cover" }}
          className="-z-10 opacity-30"
          src={
            "https://images.unsplash.com/photo-1513628253939-010e64ac66cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
          }
        />
      </motion.div>
      {children}
    </>
  );
};
