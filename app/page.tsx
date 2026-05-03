import CTABanner from "@/app/components/ui/CTABanner";
import HeroSection from "@/app/components/home/HeroSection";
import MissionSection from "@/app/components/home/MissionSection";
import ProductsSection from "@/app/components/home/ProductsSection";
import ValueChainSection from "@/app/components/home/ValueChainSection";
import ProxilaitSection from "@/app/components/home/ProxilaitSection";
import TestimonialsSection from "@/app/components/home/TestimonialsSection";
import NewsSection from "@/app/components/home/NewsSection";
import PartnersSection from "@/app/components/home/PartnersSection";

export default function Home() {
  return (
    <div className="min-h-screen max-w-460 mx-auto bg-[#F5F0E8]">
      <HeroSection />
      <MissionSection />
      <ProductsSection />
      <ValueChainSection />
      <ProxilaitSection />
      <TestimonialsSection />
      <NewsSection />
      <PartnersSection />
      <CTABanner
        title="Prêt à rejoindre la filière ?"
        subtitle="Éleveur, distributeur ou consommateur — il y a une place pour vous dans l'écosystème A'mansi."
        buttons={[
          { label: "Commander nos produits", href: "/produits", variant: "primary" },
          { label: "Rejoindre Proxilait", href: "/proxilait", variant: "outline" },
        ]}
      />
    </div>
  );
}
