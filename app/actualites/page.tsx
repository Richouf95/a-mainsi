import type { Metadata } from "next";
import HeroSection from "@/app/components/actualites/HeroSection";

export const metadata: Metadata = {
  title: "Actualités",
  description: "Suivez les dernières nouvelles d'A'mansi : événements, nouveaux produits, partenariats et avancées de la filière laitière nigérienne.",
  openGraph: {
    title: "Actualités — A'mansi",
    description: "Les dernières nouvelles d'A'mansi : GITEX Africa, nouveaux produits, accords avec les éleveurs et bien plus.",
    url: "https://amansi.ne/actualites",
  },
};
import ArticlesGrid from "@/app/components/actualites/ArticlesGrid";
import { articles } from "./data";

export default function ActualitesPage() {
  return (
    <div className="min-h-screen max-w-460 mx-auto bg-[#F5F0E8]">
      <HeroSection />
      <ArticlesGrid articles={articles} />
    </div>
  );
}
