
import type { Metadata } from "next";
import HeroSection from "@/app/components/contact/HeroSection";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contactez A'mansi pour passer une commande, rejoindre Proxilait, proposer un partenariat ou trouver un point de vente à Niamey. Réponse sous 24h.",
  openGraph: {
    title: "Contactez A'mansi",
    description: "Éleveur, partenaire, distributeur ou consommateur — notre équipe vous répond sous 24h.",
    url: "https://amansi.ne/contact",
  },
};
import ContactForm from "@/app/components/contact/ContactForm";
import MapSection from "@/app/components/contact/MapSection";

export default function ContactPage() {
  return (
    <div className="min-h-screen max-w-460 mx-auto bg-[#F5F0E8]">
      <HeroSection />
      <ContactForm />
      <MapSection />
    </div>
  );
}
