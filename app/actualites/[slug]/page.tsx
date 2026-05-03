import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CTABanner from "@/app/components/ui/CTABanner";
import ArticleHero from "@/app/components/actualites/ArticleHero";
import ArticleContent from "@/app/components/actualites/ArticleContent";
import RelatedArticles from "@/app/components/actualites/RelatedArticles";
import { articles } from "../data";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) return {};

  return {
    title: article.title,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      url: `https://amansi.ne/actualites/${article.slug}`,
      type: "article",
      ...(article.image && {
        images: [{ url: article.image, alt: article.title }],
      }),
    },
  };
}

export default async function ArticleDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) notFound();

  const related = articles.filter((a) => a.slug !== slug).slice(0, 2);

  return (
    <div className="min-h-screen max-w-460 mx-auto bg-[#F5F0E8]">
      <ArticleHero article={article} />
      <ArticleContent article={article} />
      <RelatedArticles articles={related} />
      <CTABanner
        title="Envie d'en savoir plus ?"
        subtitle="Suivez l'actualité d'A'mansi et rejoignez la filière laitière nigérienne."
        buttons={[
          { label: "Nous contacter", href: "/contact", variant: "primary" },
          { label: "Découvrir Proxilait", href: "/proxilait", variant: "outline" },
        ]}
      />
    </div>
  );
}
