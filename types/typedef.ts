import { PortableTextBlock } from "sanity";

export type ContentSection = {
  _id: string;
  createAt: string;
  title: string;
  subtitle: string;
  order: number;
  image: string;
  content: PortableTextBlock[];
  images: string[];
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
