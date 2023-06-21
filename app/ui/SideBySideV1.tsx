"use client";
import { ContentSection } from "@/types/typedef";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import React, { ReactNode } from "react";
import { FaCheckCircle } from "react-icons/fa";

interface Props {
  section: ContentSection;
  sideA: boolean;
}
interface Children {
  children?: ReactNode;
}
const SideBySideV1 = ({ section, sideA }: Props) => {
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

  return (
    <div className="hero md:p-24">
      <div
        className={`hero-content flex-col ${
          sideA ? "lg:flex-row-reverse" : "lg:flex-row"
        }`}
      >
        <Image
          height={800}
          width={800}
          alt={section.title ?? ""}
          src={(section?.image as any) ?? ""}
          className="max-w-2xl"
        />
        <div className="glass-container p-5">
          <h1 className="text-5xl font-bold tracking-wide bg-gradient-to-tr from-neutral from-20% via-secondary to-accent bg-clip-text text-transparent">
            {section.title}
          </h1>
          <div className="text-neutral font-body font-thin tracking-widest leading-relaxed mt-4 ">
            <PortableText components={components} value={section.content} />
          </div>
          <div className="btn-container">
            <button className="cta-button-sbs">{section.cta}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBySideV1;
