"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import HeroForm from "../HeroForm";

const GlassForm = () => {
  const [sentForm, setSendForm] = useState(false);

  const sendForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSendForm(!sentForm);
  };

  const buttonFadeIn = {
    visible: {
      opacity: 1,
    },
    hidden: {
      opacity: 0,
    },
  };

  return (
    <div className="relative my-96 overflow-x-clip">
      <motion.div
        animate={{ height: sentForm ? "4.5rem" : "24rem" }}
        className="glass-container absolute md:w-96 md:h-96 right-0 left-0 top-0 bottom-0 mx-auto my-auto overflow-y-hidden"
      >
        <div className=" p-2">
          <div className="typewriter">
            <p className="text-neutral text-5xl">
              {sentForm ? "Talk Soon!" : "Let's Chat"}
            </p>
          </div>
          <form
            onSubmit={(e: FormEvent<HTMLFormElement>) => sendForm(e)}
            className="relative z-[99999]"
          >
            <HeroForm />
            <div className="flex justify-center">
              <motion.button
                variants={buttonFadeIn}
                initial="hidden"
                animate="visible"
                className="btn btn-primary mx-auto"
              >
                SEND
              </motion.button>
            </div>
          </form>
        </div>
      </motion.div>
      <div className="relative mx-auto -z-10 orb-container grid grid-rows-2 grid-cols-2 gap-3 max-w-2xl rotate-12">
        <div className="orb h-60 w-60 bg-accent rounded-full blur-3xl"></div>
        <div className="orb h-60 w-60 bg-primary rounded-full blur-3xl"></div>
        <div className="orb h-60 w-60 bg-primary rounded-full blur-3xl"></div>
        <div className="orb h-60 w-60 bg-accent rounded-full blur-3xl"></div>
      </div>
    </div>
  );
};

export default GlassForm;
