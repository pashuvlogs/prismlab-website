import type { MetadataRoute } from "next";

// Marketing site: allow indexing, point crawlers at the sitemap.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://prismlab.app/sitemap.xml",
    host: "https://prismlab.app",
  };
}
