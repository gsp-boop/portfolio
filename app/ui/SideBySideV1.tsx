import { PortableText } from "@portabletext/react";
import { PortableTextBlock } from "@portabletext/types";
import Image from "next/image";
import React, { ReactNode } from "react";
import { FaCheckCircle } from "react-icons/fa";

type Props = {
  section: {
    title: string;
    image: string;
    cta: string;
  };
  sideA: boolean;
  children?: React.ReactNode;
};

const SideBySideV1 = ({ section, sideA }) => {
  const components: PortableTextBlock & any = {
    block: {
      p: ({ children }: Props) => <p>{children}</p>,
    },
    list: {
      bullet: ({ children }: Props) => <ul className="mt-8">{children}</ul>,
    },
    listItem: {
      bullet: ({ children }: Props) => (
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
    <div className="hero py-20 bg-base-200">
      <div
        className={`hero-content flex-col ${
          sideA ? "lg:flex-row-reverse" : "lg:flex-row"
        }`}
      >
        <Image
          height={800}
          width={800}
          alt={section.title ?? ""}
          src={section.image as any}
          className="max-w-2xl rounded-2xl shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold tracking-wide bg-gradient-to-tr from-neutral from-20% via-secondary to-accent bg-clip-text text-transparent">
            {section.title}
          </h1>
          <div className="pt-6 pb-4 text-neutral text-lg">
            <PortableText
              components={components}
              value={section.content as any}
            />
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
