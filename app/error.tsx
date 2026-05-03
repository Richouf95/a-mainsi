"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-[#F5F0E8] flex items-center justify-center px-8">
      <div className="text-center max-w-md">
        <div className="font-serif text-[120px] text-[#7B1C1C]/10 leading-none select-none mb-4">
          500
        </div>
        <h1 className="font-serif text-[32px] text-[#7B1C1C] mb-3 leading-snug">
          Une erreur est survenue
        </h1>
        <p className="text-[15px] text-[#7a5a4a] leading-relaxed mb-8">
          Quelque chose s'est mal passé. Vous pouvez réessayer ou revenir à l'accueil.
        </p>
        <div className="flex gap-3 justify-center flex-wrap">
          <button
            onClick={reset}
            className="bg-[#7B1C1C] text-white rounded-xl px-6 py-3 text-[13px] font-medium hover:bg-[#6a1717] transition-colors cursor-pointer"
          >
            Réessayer
          </button>
          <Link
            href="/"
            className="bg-transparent text-[#7B1C1C] border border-[#7B1C1C]/30 rounded-xl px-6 py-3 text-[13px] font-medium hover:bg-[#7B1C1C]/5 transition-colors"
          >
            Retour à l'accueil
          </Link>
        </div>
      </div>
    </div>
  );
}
