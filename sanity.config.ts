import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "./sanity/schema";

const config = defineConfig({
  projectId: "5oynddm2",
  dataset: "production",
  title: "Portfolio Page",
  apiVersion: "2023-06-07",
  basePath: "/admin",
  plugins: [deskTool()],
  schema: { types: schemas },
});

export default config;
