"use client";

import { motion } from "motion/react";

const lieux = [
  { title: "Supermarchés", desc: "Casino, Sonichar, Leader Price", icon: "🏬" },
  { title: "Marchés locaux", desc: "Katako, Grand Marché, Wadata", icon: "🛒" },
  { title: "Boutiques partenaires", desc: "Épiceries et boutiques de quartier", icon: "🏪" },
];

export default function PointsDeVenteSection() {
  return (
    <section className="bg-white py-14 px-8 md:px-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10"
      >
        <div className="text-[10px] font-medium text-[#5A8C1A] tracking-[0.12em] uppercase mb-2">
          Points de vente
        </div>
        <h2 className="font-serif text-[28px] text-[#7B1C1C] mb-4">
          Où trouver nos produits
        </h2>
        <p className="text-[14px] text-[#5a3a2a] max-w-xl mx-auto leading-relaxed">
          Nos produits sont disponibles dans de nombreux points de vente à travers le Niger,
          notamment à Niamey et dans les principales régions.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-4xl mx-auto">
        {lieux.map((loc, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ y: -4 }}
            className="bg-[#F5F0E8] rounded-2xl p-6 text-center border border-[#7B1C1C]/10 cursor-pointer transition-shadow hover:shadow-md"
          >
            <div className="text-4xl mb-3">{loc.icon}</div>
            <div className="font-serif text-[18px] text-[#7B1C1C] font-semibold mb-2">{loc.title}</div>
            <div className="text-[13px] text-[#7a5a4a] leading-relaxed">{loc.desc}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
