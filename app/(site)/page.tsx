import {
  getCards,
  getContentSection,
  getProjects,
} from "@/sanity/sanity-utils";
import Link from "next/link";
import InView from "../ui/animations/InView";
import Image from "next/image";
import GlassForm from "../ui/animations/GlassForm";
import RocketShip from "../ui/animations/RocketShip";
import SideBySideV1 from "../ui/SideBySideV1";
import BodyCta from "../ui/BodyCta";
import { ContentSection } from "@/types/typedef";
import Body from "../ui/Body";
import LogoSpinner from "../ui/animations/LogoSpinner";
import Hero from "../ui/Hero";

export default async function Home() {
  const projects = await getProjects();
  const cards = await getCards();
  const contentSection = await getContentSection();

  function renderUi(type: string, section: ContentSection) {
    switch (type) {
      case "body-cta":
        return <BodyCta section={section} />;
      // case "carousel":
      //   return <Carousel section={section} />;
      case "body":
        return <Body section={section} />;
      // case "card":
      //   return <Card section={section} />;
      // case "side-by-side-1":
      //   return <SideBySideV1 sideA={false} section={section} />;
      // case "side-by-side-1a":
      //   return <SideBySideV1 sideA={true} section={section} />;
      case "hero":
        return <Hero section={section} />;
      default:
        break;
    }
  }
  return (
    <div className="">
      <div className="flex flex-col">
        {contentSection.map((section) => {
          return (
            <div className="" style={{ order: section.order }}>
              <InView>{renderUi(section.contentType, section)}</InView>
            </div>
          );
        })}
        <LogoSpinner />
      </div>
      <GlassForm />
    </div>
  );
}
