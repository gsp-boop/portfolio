import React, { ReactNode } from "react";
import { PortableText } from "@portabletext/react";
import { ContentSection } from "@/types/typedef";
import NasaData from "./serverComponents/NasaData";
interface Props {
  section: ContentSection;
}
interface Children {
  children?: ReactNode;
}
const Body = async ({ section }: Props) => {
  const components = {
    block: {
      h5: ({ children }: Children) => (
        <h5 className="text-xl lg:text-2xl text-base-200 font-thin">
          {children}
        </h5>
      ),
      h6: ({ children }: Children) => <h6 className="text-3xl">{children}</h6>,
      h4: ({ children }: Children) => <h4 className="text-2xl">{children}</h4>,
      h3: ({ children }: Children) => <h3 className="text-xl">{children}</h3>,
      h2: ({ children }: Children) => <h2 className="text-lg">{children}</h2>,
      h1: ({ children }: Children) => <h1 className="text-base">{children}</h1>,
    },
  };
  return (
    <div className="w-full h-screen my-40 flex items-center relative">
      <div className="md:w-1/2 p-12 mx-5  ">
        <div className="mx-auto md:ml-auto">
          <div className="">
            {section.title && (
              <div className="w-fit">
                <h3 className="text-5xl font-display font-medium scale-y-150 text-base-100">
                  {section.title}
                </h3>
                <p className="text-primary text-md text-right font-sans mt-1">Gabriel Pereira</p>
              </div>
            )}
            <div className="">
              <div className="text-neutral text-lg md:text-2xl font-body font-thin tracking-widest leading-relaxed mt-4 indent-28 uppercase">
                <PortableText components={components} value={section.content} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <NasaData />
    </div>
  );
};

export default Body;
