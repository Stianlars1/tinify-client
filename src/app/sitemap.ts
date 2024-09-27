import { MetadataRoute } from "next";

export const DOMAIN = "https://tinify.dev";
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes: MetadataRoute.Sitemap = [
    "",
    "resize",
    "crop",
    "about",
    "faq",
  ].map((route) => ({
    url: `${DOMAIN}/${route}`,
    lastModified: new Date().toISOString(),
    priority: 1,
    changeFrequency: "weekly",
  }));

  return [...staticRoutes];
}
