import CTABanner from "@/app/components/ui/CTABanner";
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
