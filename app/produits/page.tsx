import type { Metadata } from "next";
import CTABanner from "@/app/components/ui/CTABanner";

export const metadata: Metadata = {
  title: "Nos produits",
  description: "Découvrez la gamme complète de produits laitiers A'mansi : lait frais, yaourts, Tchoukou, Hindirmou, beurre clarifié. Fabriqués artisanalement à Niamey depuis du lait local nigérien.",
  openGraph: {
    title: "Nos produits laitiers — A'mansi",
    description: "Lait frais, yaourts, Tchoukou, Hindirmou et plus. Des produits artisanaux nigériens fabriqués avec du lait local de qualité.",
    url: "https://amansi.ne/produits",
  },
};
import HeroSection from "@/app/components/produits/HeroSection";
import CategoriesNav from "@/app/components/produits/CategoriesNav";
import ProductGrid from "@/app/components/produits/ProductGrid";
import QualiteSection from "@/app/components/produits/QualiteSection";
import PointsDeVenteSection from "@/app/components/produits/PointsDeVenteSection";
import { allProducts } from "./data";

export default function Produits() {
  const yaourts = allProducts.filter((p) => p.categorieSlug === "yaourts");
  const fromagesSecs = allProducts.filter((p) => p.categorieSlug === "fromages-secs");
  const fromagesFrais = allProducts.filter((p) => p.categorieSlug === "fromages-frais");
  const beurres = allProducts.filter((p) => p.categorieSlug === "beurres");

  return (
    <div className="min-h-screen max-w-460 mx-auto bg-[#F5F0E8]">
      <HeroSection />
      <CategoriesNav />
      <ProductGrid
        yaourts={yaourts}
        fromagesSecs={fromagesSecs}
        fromagesFrais={fromagesFrais}
        beurres={beurres}
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
