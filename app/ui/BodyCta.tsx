import { ContentSection } from "@/types/typedef";
import Image from "next/image";
import Link from "next/link";
import React, { ReactNode } from "react";
interface Props {
  section: ContentSection;
}
const BodyCta = ({ section }: Props) => {
  return (
    <div
      className="hero relative min-h-screen bg-black bg-opacity-40 py-24 lg:py-32 "
      style={{ backgroundImage: "url('/hero-img.svg')" }}
    >
      <div className="absolute -top-16">
        <Image alt={"logo"} height={250} width={300} src={"/lals-logo.png"} />
      </div>
      <div className="absolute bottom-0 w-full h-44 bg-gradient-to-t from-primary"></div>
      <div className="hero-content text-center">
        <div className="relative max-w-lg">
          <h1 className="body-cta-title text-5xl font-bold text-neutral first-line:uppercase">
            {section.title}
          </h1>
          <p className="py-6 text-neutral text-2xl">{section.subtitle}</p>
          <div className="btn-container pt-5">
            <Link
              href={section.slug || "/contact"}
              className="cta-button-sbs bg-black bg-opacity-40"
            >
              Let&apos;s Chat
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BodyCta;
