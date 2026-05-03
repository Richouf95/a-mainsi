import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page introuvable",
  description: "La page que vous cherchez n'existe pas ou a été déplacée.",
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#F5F0E8] flex items-center justify-center px-8">
      <div className="text-center max-w-md">
        <div className="font-serif text-[120px] text-[#7B1C1C]/10 leading-none select-none mb-4">
          404
        </div>
        <h1 className="font-serif text-[32px] text-[#7B1C1C] mb-3 leading-snug">
          Page introuvable
        </h1>
        <p className="text-[15px] text-[#7a5a4a] leading-relaxed mb-8">
          La page que vous cherchez n'existe pas ou a été déplacée.
        </p>
        <div className="flex gap-3 justify-center flex-wrap">
          <Link
            href="/"
            className="bg-[#7B1C1C] text-white rounded-xl px-6 py-3 text-[13px] font-medium hover:bg-[#6a1717] transition-colors"
          >
            Retour à l'accueil
          </Link>
          <Link
            href="/produits"
            className="bg-transparent text-[#7B1C1C] border border-[#7B1C1C]/30 rounded-xl px-6 py-3 text-[13px] font-medium hover:bg-[#7B1C1C]/5 transition-colors"
          >
            Voir nos produits
          </Link>
        </div>
      </div>
    </div>
  );
}
