"use client";

import React, { ReactNode, useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

interface Props {
  children: ReactNode;
}

const Reveal = ({ children }: Props) => {
  const inViewRef = useRef(null);
  const inView = useInView(inViewRef, { amount: 0.7, once: true });
  const mainControls = useAnimation();
  const slideControls = useAnimation();
  useEffect(() => {
    if (inView) {
      mainControls.start("visible");
      slideControls.start("visible");
    }
  }, [inView]);
  return (
    <div ref={inViewRef} className="relative overflow-hidden">
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{
          duration: 0.5,
          delay: 0.25,
        }}
      >
        {children}
      </motion.div>
      <motion.div
        variants={{
          hidden: { left: 0 },
          visible: { left: "100%" },
        }}
        initial="hidden"
        animate={slideControls}
        transition={{ duration: 0.5, ease: "easeIn" }}
        style={{
          position: "absolute",
          top: 4,
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: "20",
          background:
            "linear-gradient(270deg, rgb(2,20,28) 30%, rgba(255,255,255,0) 100%)",
        }}
      />
    </div>
  );
};

export default Reveal;
