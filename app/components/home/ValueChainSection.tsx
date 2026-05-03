"use client";

import { motion } from "motion/react";

const chainSteps = [
  {
    emoji: "🐄",
    name: "Éleveurs",
    sub: "Collecte du lait brut",
    iconBg: "rgba(90,140,26,0.4)",
    badge: "Origine",
    badgeBg: "rgba(90,140,26,0.35)",
    badgeColor: "#A8E060",
    detail: "20+ éleveurs partenaires dans les régions de Tillabéri et Dosso. Collecte quotidienne avec suivi qualité sur Proxilait.",
  },
  {
    emoji: "⚗️",
    name: "Transformation",
    sub: "Atelier A'mansi",
    iconBg: "rgba(232,112,32,0.4)",
    badge: "Production",
    badgeBg: "rgba(232,112,32,0.3)",
    badgeColor: "#F4A460",
    detail: "Transformation artisanale en fromage, yaourt, hindirmou et lait fermenté selon les normes sanitaires locales.",
  },
  {
    emoji: "✅",
    name: "Contrôle qualité",
    sub: "Traçabilité & normes",
    iconBg: "rgba(255,255,255,0.12)",
    badge: "Qualité",
    badgeBg: "rgba(255,255,255,0.1)",
    badgeColor: "rgba(255,255,255,0.75)",
    detail: "Chaque lot est référencé. Les consommateurs peuvent scanner le produit pour tracer son origine.",
  },
  {
    emoji: "🚚",
    name: "Distribution",
    sub: "Niamey et régions",
    iconBg: "rgba(250,200,80,0.25)",
    badge: "Logistique",
    badgeBg: "rgba(250,200,80,0.2)",
    badgeColor: "#FAD060",
    detail: "Livraisons planifiées via Proxilait. Couverture de Niamey et des régions environnantes.",
  },
  {
    emoji: "🏪",
    name: "Points de vente",
    sub: "Marchés & épiceries",
    iconBg: "rgba(255,255,255,0.12)",
    badge: "Retail",
    badgeBg: "rgba(255,255,255,0.1)",
    badgeColor: "rgba(255,255,255,0.75)",
    detail: "Présence dans les principaux marchés de Niamey et les épiceries de proximité.",
  },
  {
    emoji: "😊",
    name: "Consommateurs",
    sub: "Familles nigériennes",
    iconBg: "rgba(90,140,26,0.4)",
    badge: "Impact",
    badgeBg: "rgba(90,140,26,0.35)",
    badgeColor: "#A8E060",
    detail: "Des familles qui accèdent à des produits laitiers naturels, tracés et de qualité, à prix juste.",
  },
];

export default function ValueChainSection() {
  return (
    <section className="bg-[#7B1C1C] py-12 px-6 md:px-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-9 text-center max-w-2xl mx-auto"
      >
        <div className="text-[10px] font-medium text-white/50 tracking-[0.12em] uppercase mb-2">
          De la source à la table
        </div>
        <h2 className="font-serif text-[28px] text-white mb-1.5">
          Une chaîne de valeur intégrée
        </h2>
        <p className="text-[13px] text-white/65">
          Chaque maillon est suivi, valorisé et connecté grâce à Proxilait
        </p>
      </motion.div>

      <div className="relative">
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-white/10" />
        <div className="flex flex-col gap-10">
          {chainSteps.map((s, i) => {
            const isLeft = i % 2 === 0;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={`relative flex items-center w-full max-w-240 mx-auto ${
                  isLeft ? "md:justify-start" : "md:justify-end"
                }`}
              >
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-white/30 shadow-[0_0_0_4px_rgba(255,255,255,0.08)]" />
                <div
                  className={`w-full md:w-[48%] bg-white/7 border border-white/12 rounded-2xl p-5 cursor-pointer hover:bg-white/10 hover:border-white/25 transition-all duration-300 ${
                    isLeft ? "md:mr-auto" : "md:ml-auto"
                  }`}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center text-xl border border-white/20"
                      style={{ background: s.iconBg }}
                    >
                      {s.emoji}
                    </div>
                    <span className="text-[10px] text-white/30 font-medium">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="text-[15px] font-medium text-white">{s.name}</div>
                  <div className="text-[11px] text-white/55 mt-1">{s.sub}</div>
                  <span
                    className="inline-block mt-3 text-[10px] px-2 py-0.5 rounded-full"
                    style={{ background: s.badgeBg, color: s.badgeColor }}
                  >
                    {s.badge}
                  </span>
                  <p className="text-[11px] text-white/50 mt-3 leading-relaxed">{s.detail}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
