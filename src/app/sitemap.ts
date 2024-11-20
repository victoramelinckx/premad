import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.opencode.cl",
      lastModified: new Date(),
    },
  ];
}
