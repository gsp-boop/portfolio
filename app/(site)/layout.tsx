import Link from "next/link";
import "../globals.css";
import { getPages } from "@/sanity/sanity-utils";
import { WiStars } from "react-icons/wi";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pages = await getPages();

  return (
    <html data-theme="customTheme" lang="en">
      <body>
        <nav className="flex items-center">
          <div className="text-neutral mr-auto animate-pulse ease-in-out duration-200">
            <WiStars size={150} />
          </div>
          <div className="mr-5 font-display font-thin uppercase text-5xl">
            {pages.map((item: any, i: number) => {
              return (
                <Link
                  className={`link link-hover hover:text-accent mx-1`}
                  href={"/"}
                >
                  {item.title}
                </Link>
              );
            })}
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
