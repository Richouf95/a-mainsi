"use client";

import { motion } from "motion/react";

const objectifs = [
  {
    horizon: "2025",
    color: "#E87020",
    goals: [
      { label: "50 éleveurs partenaires", progress: 42 },
      { label: "1 000 L collectés / jour", progress: 55 },
      { label: "Lancement Proxilait v1.0", progress: 80 },
      { label: "Couverture de Niamey complète", progress: 70 },
    ],
  },
  {
    horizon: "2026",
    color: "#5A8C1A",
    goals: [
      { label: "100 éleveurs partenaires", progress: 20 },
      { label: "3 nouvelles régions couvertes", progress: 15 },
      { label: "Export vers les pays voisins", progress: 10 },
      { label: "Certification qualité internationale", progress: 25 },
    ],
  },
];

export default function ObjectifsSection() {
  return (
    <section className="bg-white py-16 px-8 md:px-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-10"
      >
        <div className="text-[10px] font-medium text-[#5A8C1A] tracking-[0.12em] uppercase mb-2">
          Nos ambitions
        </div>
        <h2 className="font-serif text-[30px] md:text-[36px] text-[#7B1C1C] leading-snug">
          Objectifs 2025 — 2026
        </h2>
        <p className="text-[14px] text-[#7a5a4a] mt-3 max-w-xl leading-relaxed">
          Chaque objectif est suivi et mesuré. Ces indicateurs nous permettent de rester alignés avec notre mission et de rendre compte à nos partenaires.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {objectifs.map((obj, i) => (
          <motion.div
            key={obj.horizon}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bg-[#F5F0E8] rounded-3xl p-8"
          >
            <div className="flex items-center gap-3 mb-7">
              <span
                className="text-[11px] font-semibold tracking-widest px-3 py-1 rounded-full text-white"
                style={{ background: obj.color }}
              >
                {obj.horizon}
              </span>
              <div className="h-px flex-1 bg-[#7B1C1C]/10" />
            </div>

            <div className="flex flex-col gap-6">
              {obj.goals.map((g, j) => (
                <motion.div
                  key={j}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: j * 0.08 }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[13px] text-[#3a2a1a] font-medium">{g.label}</span>
                    <span className="text-[12px] font-semibold" style={{ color: obj.color }}>
                      {g.progress}%
                    </span>
                  </div>
                  <div className="h-1.5 bg-[#7B1C1C]/8 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${g.progress}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: j * 0.1, ease: "easeOut" }}
                      className="h-full rounded-full"
                      style={{ background: obj.color }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
