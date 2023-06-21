"use client";

import React, { useState } from "react";
import { BsFillChatRightFill, BsFillPencilFill } from "react-icons/bs";
import { AiFillMail, AiFillMessage } from "react-icons/ai";
import { motion } from "framer-motion";
const HeroForm = () => {
  return (
    <motion.div variants={drop} initial="hidden" animate="visible">
      <motion.div
        variants={dropUp}
        className="flex items-center my-4 overflow-y-hidden"
      >
        <BsFillPencilFill size={30} />
        <input
          type="text"
          placeholder="Type here"
          className="input input-ghost w-full max-w-xs ml-2"
        />
      </motion.div>
      <motion.div
        variants={dropUp}
        className="flex items-center my-4 overflow-y-hidden"
      >
        <AiFillMail size={30} />
        <input
          type="text"
          placeholder="Type here"
          className="input input-ghost w-full max-w-xs ml-2"
        />
      </motion.div>
      <motion.div
        variants={dropUp}
        className="flex items-center my-4 overflow-y-hidden"
      >
        <BsFillChatRightFill size={30} />
        <textarea
          className="textarea textarea-ghost w-full max-w-xs ml-2"
          placeholder="What's up?"
        ></textarea>
      </motion.div>
    </motion.div>
  );
};

export default HeroForm;

const dropUp = {
  hidden: {
    y: 100,
    opacity: 0,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      mass: 0.3,
      // remove delay: 0.3,
    },
  },
};
const drop = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0, // this will set a delay before the children start animating
      staggerChildren: 0.3, // this will set the time inbetween children animation
    },
  },
};
