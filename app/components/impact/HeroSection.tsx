"use client";

import { motion } from "motion/react";
import Image from "next/image";

const stats = [
  { val: "20+", label: "Éleveurs partenaires", sub: "Tillabéri & Dosso" },
  { val: "500L", label: "Collectés / jour", sub: "En moyenne" },
  { val: "13+", label: "Produits fabriqués", sub: "Lait, fromage, beurre…" },
  { val: "3", label: "Régions couvertes", sub: "Et en expansion" },
];

export default function HeroSection() {
  return (
    <section className="relative pt-14 min-h-[75dvh] bg-[#7B1C1C] overflow-hidden flex items-end">
      <div className="absolute inset-0 overflow-hidden">
        <Image src="/images/a-mansi-hero.png" alt="" fill sizes="100vw" priority className="object-cover object-center opacity-15" />
      </div>
      <div className="absolute top-0 right-0 w-[420px] h-[420px] bg-[#E87020]/20 rounded-full blur-[100px] translate-x-1/3 -translate-y-1/4" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#5A8C1A]/20 rounded-full blur-[80px] -translate-x-1/3 translate-y-1/4" />

      <div className="relative z-10 w-full px-8 md:px-12 pb-16 pt-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <span className="inline-flex items-center gap-2 text-[11px] font-medium text-white/70 tracking-[0.15em] uppercase border border-white/20 bg-white/8 px-3.5 py-1.5 rounded-full mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#A8E060]" />
            Réalisations & objectifs
          </span>

          <h1 className="font-serif text-[46px] md:text-[62px] text-white leading-[1.08] mb-5">
            Un impact réel,{" "}
            <em className="text-[#FAD060] not-italic">mesurable</em>
            <br className="hidden md:block" /> et humain
          </h1>

          <p className="text-[15px] text-white/60 leading-relaxed max-w-xl">
            A'mansi construit une filière laitière plus équitable au Niger. Voici ce que nous avons accompli, ce que nous visons, et pourquoi chaque litre de lait compte.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-12"
        >
          {stats.map((s, i) => (
            <div
              key={i}
              className="bg-white/8 border border-white/12 rounded-2xl px-5 py-4 backdrop-blur-sm"
            >
              <div className="text-[#FAD060] text-[28px] font-bold leading-none mb-1">{s.val}</div>
              <div className="text-white text-[13px] font-medium leading-snug">{s.label}</div>
              <div className="text-white/40 text-[11px] mt-0.5">{s.sub}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
