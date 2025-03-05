import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.hthanhlong97.ca",
      lastModified: new Date(),
    },
    {
      url: "https://www.hthanhlong97.ca/sitemap.xml",
      lastModified: new Date(),
    },
  ];
}
