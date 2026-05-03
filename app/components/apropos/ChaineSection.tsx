"use client";

import { motion } from "motion/react";
import Link from "next/link";

const maillons = [
  { label: "Éleveurs", desc: "Collecte quotidienne du lait frais", icon: "🐄" },
  { label: "Transformation", desc: "Fabrication artisanale à l'atelier", icon: "🏺" },
  { label: "Distribution", desc: "Livraison aux points de vente", icon: "🚚" },
  { label: "Consommateurs", desc: "Produits frais, locaux, traçables", icon: "🧑‍🍳" },
];

export default function ChaineSection() {
  return (
    <section className="bg-[#F5F0E8] py-16 px-8 md:px-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-10"
      >
        <div className="text-[10px] font-medium text-[#5A8C1A] tracking-[0.12em] uppercase mb-2">
          Comment ça marche
        </div>
        <h2 className="font-serif text-[30px] md:text-[36px] text-[#7B1C1C] leading-snug">
          Notre modèle de bout en bout
        </h2>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {maillons.map((m, i) => (
          <motion.div
            key={m.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="relative"
          >
            <div className="bg-white rounded-2xl p-5 text-center h-full flex flex-col items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-[#F5F0E8] flex items-center justify-center text-2xl">
                {m.icon}
              </div>
              <div>
                <div className="font-serif text-[15px] text-[#7B1C1C] font-medium mb-1">
                  {m.label}
                </div>
                <div className="text-[11px] text-[#9a7a6a] leading-snug">{m.desc}</div>
              </div>
              {i < maillons.length - 1 && (
                <div className="hidden md:flex absolute -right-2 top-1/2 -translate-y-1/2 z-10 w-4 h-4 items-center justify-center text-[#7B1C1C]/30 text-lg">
                  →
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-6 bg-white/60 rounded-2xl px-6 py-4 flex items-center gap-3"
      >
        <span className="text-xl">📱</span>
        <p className="text-[13px] text-[#5a3a2a] leading-snug">
          Proxilait connecte chaque maillon en temps réel — collectes, paiements, livraisons et traçabilité sur une seule plateforme.{" "}
          <Link href="/proxilait" className="text-[#5A8C1A] font-medium hover:underline">
            En savoir plus →
          </Link>
        </p>
      </motion.div>
    </section>
  );
}
