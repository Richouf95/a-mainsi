import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CTABanner from "@/app/components/ui/CTABanner";
import ProductHero from "@/app/components/produits/ProductHero";
import ProductHighlights from "@/app/components/produits/ProductHighlights";
import NutritionSection from "@/app/components/produits/NutritionSection";
import RelatedProducts from "@/app/components/produits/RelatedProducts";
import { allProducts } from "../data";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const prod = allProducts.find((p) => p.slug === slug);
  if (!prod) return {};

  return {
    title: prod.denomination,
    description: `${prod.mode_utilisation} — ${prod.quantite.join(", ")}. Produit artisanal A'mansi fabriqué à Niamey avec du lait local nigérien.`,
    openGraph: {
      title: `${prod.denomination} — A'mansi`,
      description: prod.mode_utilisation,
      url: `https://amansi.ne/produits/${prod.slug}`,
      ...(prod.image && {
        images: [{ url: prod.image, alt: prod.denomination }],
      }),
    },
  };
}

export default async function ProduitDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const prod = allProducts.find((p) => p.slug === slug);
  if (!prod) notFound();

  const related = allProducts
    .filter((p) => p.categorieSlug === prod.categorieSlug && p.slug !== slug)
    .slice(0, 3);

  return (
    <div className="min-h-screen max-w-460 mx-auto bg-[#F5F0E8]">
      <ProductHero prod={prod} />
      <ProductHighlights highlights={prod.highlights} />
      <NutritionSection prod={prod} />
      <RelatedProducts category={prod.categorie} products={related} />
      <CTABanner
        title="Envie de goûter nos produits ?"
        subtitle="Contactez-nous pour passer commande ou trouver le point de vente le plus proche."
        buttons={[
          { label: "Nous contacter", href: "/contact", variant: "primary" },
          { label: "Voir tous les produits", href: "/produits", variant: "outline" },
        ]}
      />
    </div>
  );
}
