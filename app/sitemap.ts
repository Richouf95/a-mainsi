import type { MetadataRoute } from "next";
import { SITE } from "@/app/lib/constants";
import { allProducts } from "@/app/produits/data";
import { articles } from "@/app/actualites/data";

const base = SITE.baseUrl;

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: base, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${base}/apropos`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/produits`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/proxilait`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/impact`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/actualites`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/contact`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.6 },
  ];

  const productRoutes: MetadataRoute.Sitemap = allProducts.map((p) => ({
    url: `${base}/produits/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const articleRoutes: MetadataRoute.Sitemap = articles.map((a) => ({
    url: `${base}/actualites/${a.slug}`,
    lastModified: new Date(),
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...productRoutes, ...articleRoutes];
}
