import { DOMAIN } from "@/utils/urls";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes: MetadataRoute.Sitemap = [
    "",
    "compress",
    "resize",
    "crop",
    "about",
    "blog",
    "blog/what-is-compression",
    "blog/what-is-resizing",
    "blog/what-is-cropping",
  ].map((route) => ({
    url: `${DOMAIN}/${route}`,
    lastModified: new Date().toISOString(),
    priority: 1,
    changeFrequency: "weekly",
  }));

  return [...staticRoutes];
}
