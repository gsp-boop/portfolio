import {
  getCards,
  getContentSection,
  getProjects,
} from "@/sanity/sanity-utils";
import Link from "next/link";

export default async function Home() {
  const projects = await getProjects();
  const cards = await getCards();
  const contentSection = await getContentSection();
  return (
    <div>
      <div className="flex justify-end mt-14">
        <div className="relative">
          <div className="glass-container absolute h-96 w-96 right-0 left-0 top-0 bottom-0 mx-auto my-auto">
            <div className=" p-2">
              <div className="typewriter">
                <p className="text-neutral text-6xl">WELCOME,</p>
              </div>
            </div>
          </div>
          <div className="orb-container grid grid-rows-2 grid-cols-2 gap-3 max-w-2xl rotate-12">
            <div className="orb h-60 w-60 bg-accent rounded-full blur-3xl"></div>
            <div className="orb h-60 w-60 bg-primary rounded-full blur-3xl"></div>
            <div className="orb h-60 w-60 bg-primary rounded-full blur-3xl"></div>
            <div className="orb h-60 w-60 bg-accent rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
 