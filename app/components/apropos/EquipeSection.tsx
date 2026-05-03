"use client";

import { motion } from "motion/react";

const equipe = [
  {
    nom: "Équipe fondatrice",
    role: "Direction générale",
    desc: "Portée par une conviction : le lait local nigérien peut nourrir sainement des millions de familles, à condition d'organiser la filière différemment.",
    initiale: "A",
    bg: "#7B1C1C",
  },
  {
    nom: "Pôle production",
    role: "Transformation & qualité",
    desc: "Des professionnels de la transformation laitière qui allient méthodes traditionnelles et standards modernes d'hygiène alimentaire.",
    initiale: "P",
    bg: "#5A8C1A",
  },
  {
    nom: "Pôle numérique",
    role: "Tech & Proxilait",
    desc: "Une équipe tech locale qui développe et maintient Proxilait — pensée pour les réalités du terrain, pas pour un manuel de Silicon Valley.",
    initiale: "N",
    bg: "#E87020",
  },
];

export default function EquipeSection() {
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
          Les personnes
        </div>
        <h2 className="font-serif text-[30px] md:text-[36px] text-[#7B1C1C] leading-snug">
          Ceux qui font A&apos;mansi
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {equipe.map((e, i) => (
          <motion.div
            key={e.nom}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="bg-[#F5F0E8] rounded-3xl p-7"
          >
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center text-white text-[18px] font-semibold mb-5"
              style={{ background: e.bg }}
            >
              {e.initiale}
            </div>
            <div className="font-serif text-[17px] text-[#2C1A0E] mb-1">{e.nom}</div>
            <div className="text-[11px] text-[#9a7a6a] font-medium uppercase tracking-wide mb-3">
              {e.role}
            </div>
            <p className="text-[13px] text-[#5a3a2a] leading-[1.8]">{e.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
