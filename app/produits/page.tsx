import CTABanner from "@/app/components/ui/CTABanner";
import HeroSection from "@/app/components/produits/HeroSection";
import CategoriesNav from "@/app/components/produits/CategoriesNav";
import ProductGrid from "@/app/components/produits/ProductGrid";
import QualiteSection from "@/app/components/produits/QualiteSection";
import PointsDeVenteSection from "@/app/components/produits/PointsDeVenteSection";
import { allProducts } from "./data";

export default function Produits() {
  const laitFrais = allProducts.filter((p) => p.categorySlug === "lait-frais");
  const yaourts = allProducts.filter((p) => p.categorySlug === "yaourts");
  const fromages = allProducts.filter((p) => p.categorySlug === "fromages");
  const derives = allProducts.filter((p) => p.categorySlug === "derives");

  return (
    <div className="min-h-screen max-w-460 mx-auto bg-[#F5F0E8]">
      <HeroSection />
      <CategoriesNav />
      <ProductGrid
        laitFrais={laitFrais}
        yaourts={yaourts}
        fromages={fromages}
        derives={derives}
      />
      <QualiteSection />
      <PointsDeVenteSection />
      <CTABanner
        title="Envie de goûter nos produits ?"
        subtitle="Contactez-nous pour passer commande ou trouver le point de vente le plus proche."
        buttons={[
          { label: "Nous contacter", href: "/contact", variant: "primary" },
          { label: "Trouver un point de vente", href: "/contact", variant: "outline" },
        ]}
      />
    </div>
  );
}
