"use client";

import { motion } from "motion/react";

const partenaires = [
  { emoji: "🏛️", label: "Ministère de l'Élevage", type: "Institutionnel" },
  { emoji: "🌍", label: "FAO Niger", type: "International" },
  { emoji: "🤝", label: "AREN", type: "Réseau éleveurs" },
  { emoji: "🏗️", label: "PNUD Niger", type: "Nations Unies" },
];

export default function PartenairesSection() {
  return (
    <section className="bg-[#7B1C1C] py-16 px-8 md:px-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-[10px] font-medium text-white/50 tracking-[0.12em] uppercase mb-3">
            Transparence & redevabilité
          </div>
          <h2 className="font-serif text-[28px] md:text-[34px] text-white leading-snug mb-4">
            Nous rendons compte à nos partenaires
          </h2>
          <p className="text-[14px] text-white/60 leading-relaxed mb-7">
            Chaque année, A'mansi publie un rapport d'impact détaillé à destination de ses partenaires institutionnels, financiers et communautaires. La confiance se construit dans la durée.
          </p>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-2 bg-[#FAD060] text-[#2C1A0E] rounded-xl px-6 py-3 text-[13px] font-semibold cursor-pointer"
          >
            Télécharger le rapport 2024
            <span>↓</span>
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="grid grid-cols-2 gap-3"
        >
          {partenaires.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="bg-white/7 border border-white/10 rounded-2xl p-5 flex flex-col gap-2"
            >
              <span className="text-2xl">{p.emoji}</span>
              <span className="text-[13px] font-medium text-white leading-snug">{p.label}</span>
              <span className="text-[11px] text-white/40">{p.type}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
