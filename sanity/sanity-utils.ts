import clientConfig from "./config/client-config";
import { Project } from "@/types/projects";
import { createClient, groq } from "next-sanity";
import { Cards, ContentSection } from "@/types/typedef";

export async function getProjects(): Promise<Project[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "project"]{
            _id,
            createdAt,
            name,
            "slug": slug.current,
            "image": image.asset->url,
            url,
            contect,
        }`
  );
}

export async function getProject(slug: string): Promise<Project> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "project" && slug.current == $slug][0]{
                _id,
                createdAt,
                name,
                "slug": slug.current,
                "image": image.asset->url,
                url,
                content,
            }`,
    { slug }
  );
}

export async function getPage(slug: string = "") {
  return createClient(clientConfig).fetch(
    groq`
    *[_type == "page" && slug.current == $slug][0]{
      _id,
      _createdAt,
      title,
      content,
      "image": image->asset.url
    }
    `,
    { slug }
  );
}

export async function getPages() {
  return createClient(clientConfig).fetch(
    groq`
      *[_type == "page"]{
        _id,
        _createdAt,
        title,
        "slug": slug.current,
        content,
        "image": image.asset->url,
      }
    `
  );
}

export async function getCards(): Promise<Cards[]> {
  return createClient(clientConfig).fetch(
    groq`
      *[_type == "card"]{
        title,
        _id,
        order,
        _createdAt,
        "contentType": _type,
        card[] {
          _key,
          body,
          alt,
          caption,
          link,
          "url": asset->url,
        }
      }
    `
  );
}

export async function getContentSection(): Promise<ContentSection[]> {
  return createClient(clientConfig).fetch(
    groq`
      *[_type == "baseContentSection"]{
        _id,
        _createdAt,
        title,
        subtitle,
        contentType,
        order,
        "image": image.asset->url,
        content,
        "images": images[]{
          alt,
          "url": asset->url,
        },
        cta,
        "slug": slug.current,
      } 
    `
  );
}
