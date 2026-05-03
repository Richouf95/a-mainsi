import { notFound } from "next/navigation";
import CTABanner from "@/app/components/ui/CTABanner";
import ProductHero from "@/app/components/produits/ProductHero";
import ProductHighlights from "@/app/components/produits/ProductHighlights";
import RelatedProducts from "@/app/components/produits/RelatedProducts";
import { allProducts } from "../data";

export default async function ProduitDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const prod = allProducts.find((p) => p.slug === slug);
  if (!prod) notFound();

  const related = allProducts
    .filter((p) => p.categorySlug === prod.categorySlug && p.slug !== slug)
    .slice(0, 3);

  return (
    <div className="min-h-screen max-w-460 mx-auto bg-[#F5F0E8]">
      <ProductHero prod={prod} />
      <ProductHighlights highlights={prod.highlights} />
      <RelatedProducts category={prod.category} products={related} />
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
