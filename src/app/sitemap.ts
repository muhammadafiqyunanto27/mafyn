import type { MetadataRoute } from "next";
import { site } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${site.url}/en`,
      changeFrequency: "monthly",
      priority: 1,
      alternates: {
        languages: {
          en: `${site.url}/en`,
          id: `${site.url}/id`,
        },
      },
    },
    {
      url: `${site.url}/id`,
      changeFrequency: "monthly",
      priority: 1,
      alternates: {
        languages: {
          en: `${site.url}/en`,
          id: `${site.url}/id`,
        },
      },
    },
  ];
}
