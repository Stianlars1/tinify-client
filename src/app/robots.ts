import type { MetadataRoute } from "next";
import { HOST } from "@/utils/urls";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${HOST}/sitemap.xml`,
  };
}
