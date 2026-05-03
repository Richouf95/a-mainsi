"use client";

import { motion } from "motion/react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative max-h-260 h-[calc(100dvh-0px)] flex items-end overflow-hidden">
      <Image
        src="/images/panier-table.png"
        alt=""
        fill
        sizes="100vw"
        priority
        className="object-cover object-center"
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-2 px-8 md:px-10 pb-12 max-w-7xl mx-auto w-full"
      >
        <div className="backdrop-blur-md bg-black/25 border border-white/10 rounded-2xl p-6 max-w-lg">
          <span className="inline-block bg-white/15 border border-white/30 text-white/90 text-[10px] font-medium tracking-[0.12em] uppercase rounded-full px-3.5 py-1 mb-4">
            Catalogue complet
          </span>
          <h1 className="font-serif text-[38px] md:text-[48px] font-semibold text-white leading-[1.15] mb-3">
            Nos <em className="text-[#FAD060] not-italic">produits</em> laitiers
          </h1>
          <p className="text-[14px] text-white/75 leading-relaxed max-w-120">
            Découvrez toute notre gamme de produits laitiers authentiques,
            fabriqués à partir du lait local nigérien de qualité supérieure.
          </p>
          <div className="flex gap-6 mt-6">
            {[
              { val: "13+", label: "Produits" },
              { val: "100%", label: "Lait local" },
              { val: "4", label: "Catégories" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-[#FAD060] text-lg font-bold leading-none">{stat.val}</div>
                <div className="text-[10px] text-white/55 mt-0.5">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
