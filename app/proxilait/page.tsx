import CTABanner from "@/app/components/ui/CTABanner";
import HeroSection from "@/app/components/proxilait/HeroSection";
import RolesSection from "@/app/components/proxilait/RolesSection";
import FeaturesSection from "@/app/components/proxilait/FeaturesSection";
import DownloadSection from "@/app/components/proxilait/DownloadSection";

export default function ProxilaitPage() {
  return (
    <div className="min-h-screen max-w-460 mx-auto bg-[#F5F0E8]">
      <HeroSection />
      <RolesSection />
      <FeaturesSection />
      <DownloadSection />
      <CTABanner
        title="Des questions sur Proxilait ?"
        subtitle="Notre équipe est disponible pour vous accompagner dans votre intégration à la plateforme."
        buttons={[
          { label: "Nous contacter", href: "/contact", variant: "primary" },
          { label: "Voir nos produits", href: "/produits", variant: "outline" },
        ]}
      />
    </div>
  );
}
