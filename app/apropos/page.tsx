import type { Metadata } from "next";
import CTABanner from "@/app/components/ui/CTABanner";

export const metadata: Metadata = {
  title: "À propos",
  description: "Découvrez l'histoire d'A'mansi, laiterie-fromagerie nigérienne fondée pour valoriser le lait local, soutenir les éleveurs et proposer des produits artisanaux traçables.",
  openGraph: {
    title: "À propos de A'mansi",
    description: "Notre histoire, notre mission et nos valeurs. A'mansi construit une filière laitière équitable au Niger depuis ses débuts.",
    url: "https://amansi.ne/apropos",
  },
};
import HeroSection from "@/app/components/apropos/HeroSection";
import HistoireSection from "@/app/components/apropos/HistoireSection";
import MissionVisionSection from "@/app/components/apropos/MissionVisionSection";
import ValeursSection from "@/app/components/apropos/ValeursSection";
import ChaineSection from "@/app/components/apropos/ChaineSection";
import EquipeSection from "@/app/components/apropos/EquipeSection";

export default function AProposPage() {
  return (
    <div className="min-h-screen max-w-460 mx-auto bg-[#F5F0E8]">
      <HeroSection />
      <HistoireSection />
      <MissionVisionSection />
      <ValeursSection />
      <ChaineSection />
      <EquipeSection />
      <CTABanner
        bg="#7B1C1C"
        title="Rejoindre l'aventure A'mansi"
        subtitle="Partenaire, investisseur, distributeur ou éleveur — votre place est dans la filière."
        buttons={[
          { label: "Nous contacter", href: "/contact", variant: "primary" },
          { label: "Voir notre impact", href: "/impact", variant: "outline" },
        ]}
      />
    </div>
  );
}
