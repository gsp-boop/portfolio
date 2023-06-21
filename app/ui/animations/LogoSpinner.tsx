"use client";

import Image from "next/image";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const LogoSpinner = () => {
  const logoSpinnerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: logoSpinnerRef,
    offset: ["start end", "end start"],
  });

  const rotate = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <motion.span
      className="-mt-4 md:-mt-2"
      style={{ rotate, width: "fit-content" }}
      ref={logoSpinnerRef}
    >
      <Image alt="logo" height={200} width={200} src="/logo-dev.png" />
    </motion.span>
  );
};

export default LogoSpinner;
