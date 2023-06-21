"use client";
import React, { ReactNode, useEffect, useState } from "react";
import { PortableText } from "@portabletext/react";
import { ContentSection } from "@/types/typedef";
import { motion } from "framer-motion";
import { FaCheckCircle, FaMoon, FaSun } from "react-icons/fa";
interface Props {
  section: ContentSection;
}
interface Children {
  children?: ReactNode;
}
const Hero = ({ section }: Props) => {
  const [date, setDate] = useState({ hour: "", day: "", month: "" });
  const components = {
    block: {
      p: ({ children }: Children) => <p>{children}</p>,
    },
    list: {
      bullet: ({ children }: Children) => <ul className="mt-8">{children}</ul>,
    },
    listItem: {
      bullet: ({ children }: Children) => (
        <li className=" mt-2 flex items-center">
          <div className="mr-3 text-accent">
            <FaCheckCircle size={20} />
          </div>
          <div className=" text-gray-400">{children}</div>
        </li>
      ),
    },
  };
  useEffect(() => {
    const month = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sept",
      "Oct",
      "Nov",
      "Dec",
    ];
    const today = new Date();
    const day = today.getDate();
    const hours = today.getHours();
    const currentMonth = month[today.getMonth()];
    console.log(Number(date.hour));
    setDate({
      hour: hours.toString(),
      day: day.toString(),
      month: currentMonth,
    });
  }, []);

  const getIcon = (hour: string) => {
    if (Number(hour) >= 6 && Number(hour) <= 19) {
      return <FaSun className="text-primary" size={40} />;
    }
    if (Number(hour) < 6 || Number(hour) >= 20) {
      return <FaMoon className="text-primary" size={40} />;
    }
  };

  return (
    <motion.div className="flex justify-end relative pt-9 md:pt-0 md:h-[75vh]">
      <div className="absolute top-12 right-8 md:flex md:justify-start md:w-1/2 md:top-32 md:right-8">
        <div className="flex">
          {getIcon(date.hour)}
          <div className="flex items-center">
            <span className="text-primary text-2xl md:text-8xl">
              {date.day}
            </span>
            <span className="text-primary text-xl">{date.month}</span>
          </div>
        </div>
      </div>
      <div className="flex items-end flex-col md:flex-row">
        <div className="w-full md:w-1/2">
          <div className="hero">
            <div className="hero-content text-center mr-auto md:mb-8 lg:mb-0">
              <div className="text-left">
                <h3 className="text-xl text-primary font-sans font-thin tracking-tighter">
                  {section.subtitle}
                </h3>
                <h1 className="text-6xl md:text-7xl lg:text-9xl text-neutral font-normal leading-[.8] font-display uppercase">
                  {section.title}
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full text-xl px-3 md:w-1/2 md:text-2xl lg:text-3xl md:text-left md:mr-6">
          <div className="text-neutral uppercase indent-24 tracking-tighter">
            <PortableText components={components} value={section.content} />
          </div>
          <div className="flex justify-center md:pl-2">
            <button className="btn btn-ghost text-accent hover:bg-primary uppercase mt-2">
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;
