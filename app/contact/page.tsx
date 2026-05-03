import HeroSection from "@/app/components/contact/HeroSection";
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
