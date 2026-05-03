import type { Metadata } from "next";
import CTABanner from "@/app/components/ui/CTABanner";

export const metadata: Metadata = {
  title: "Notre impact",
  description: "A'mansi mesure son impact économique, social, environnemental et numérique. Découvrez nos réalisations, nos objectifs 2025-2026 et les témoignages des éleveurs partenaires.",
  openGraph: {
    title: "Notre impact — A'mansi",
    description: "20+ éleveurs partenaires, 500L collectés par jour, 3 régions couvertes. Un impact réel, mesurable et humain au Niger.",
    url: "https://amansi.ne/impact",
  },
};
import HeroSection from "@/app/components/impact/HeroSection";
import AxesSection from "@/app/components/impact/AxesSection";
import ObjectifsSection from "@/app/components/impact/ObjectifsSection";
import TemoignagesSection from "@/app/components/impact/TemoignagesSection";
import PartenairesSection from "@/app/components/impact/PartenairesSection";

export default function ImpactPage() {
  return (
    <div className="min-h-screen max-w-460 mx-auto bg-[#F5F0E8]">
      <HeroSection />
      <AxesSection />
      <ObjectifsSection />
      <TemoignagesSection />
      <PartenairesSection />
      <CTABanner
        title="Rejoignez le mouvement"
        subtitle="Éleveur, partenaire ou investisseur — construisons ensemble une filière laitière digne du Niger."
        buttons={[
          { label: "Nous contacter", href: "/contact", variant: "primary" },
          { label: "Découvrir Proxilait", href: "/proxilait", variant: "outline" },
        ]}
      />
    </div>
  );
}
