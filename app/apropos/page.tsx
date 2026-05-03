import CTABanner from "@/app/components/ui/CTABanner";
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
