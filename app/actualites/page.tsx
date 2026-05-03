import HeroSection from "@/app/components/actualites/HeroSection";
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
