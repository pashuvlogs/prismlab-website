import type { MetadataRoute } from "next";

const BASE = "https://prismlab.app";

// The public marketing routes. Keep in sync when pages are added.
export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/security", "/privacy", "/terms"];
  return routes.map((path) => ({
    url: `${BASE}${path}`,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.6,
  }));
}
