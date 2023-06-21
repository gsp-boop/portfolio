import { PortableTextBlock } from "sanity";

type Images = {
  url: string;
  alt: string;
};
export type ContentSection = {
  _id: string;
  createAt: string;
  title: string;
  subtitle: string;
  order: number;
  image: string;
  content: PortableTextBlock[];
  images: Images[];
  cta: string;
  slug: string;
  contentType: string;
};
type Card = {
  alt: string;
  caption: string;
  body: string;
  link: string;
};

export type Cards = {
  _id: string;
  createdAt: string;
  image: string;
  alt: string;
  caption: string;
  order: number;
  cards: Card[];
};
