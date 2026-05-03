"use client";

import { motion } from "motion/react";

const steps = [
  { num: "01", title: "Collecte", desc: "Collecte quotidienne du lait frais auprès de nos éleveurs partenaires certifiés", emoji: "🐄" },
  { num: "02", title: "Contrôle", desc: "Analyse et contrôle qualité à chaque étape de la production", emoji: "🔬" },
  { num: "03", title: "Transformation", desc: "Transformation selon des processus rigoureux et des recettes traditionnelles", emoji: "⚗️" },
  { num: "04", title: "Distribution", desc: "Livraison rapide pour garantir la fraîcheur jusqu'au consommateur", emoji: "🚚" },
];

export default function QualiteSection() {
  return (
    <section className="bg-[#7B1C1C] py-14 px-8 md:px-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-10"
      >
        <div className="text-[10px] font-medium text-white/50 tracking-[0.12em] uppercase mb-2">
          Notre engagement qualité
        </div>
        <h2 className="font-serif text-[28px] md:text-[32px] text-white">
          Du lait à votre table : un processus maîtrisé
        </h2>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
        {steps.map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="text-center"
          >
            <div className="w-14 h-14 rounded-full bg-white/10 border border-white/20 mx-auto mb-4 flex items-center justify-center text-2xl">
              {step.emoji}
            </div>
            <div className="font-serif text-[#FAD060] text-[11px] font-medium tracking-[0.12em] mb-1">{step.num}</div>
            <div className="font-serif text-white text-[17px] mb-2">{step.title}</div>
            <p className="text-[12px] text-white/60 leading-relaxed">{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
