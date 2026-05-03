"use client";

import { motion } from "motion/react";

const valeurs = [
  {
    icon: "🤝",
    title: "Équité",
    desc: "Chaque acteur de la filière — éleveur, transformateur, distributeur — mérite une rémunération juste et transparente. Nous refusons l'exploitation à n'importe quel maillon.",
    color: "#E87020",
    colorBg: "rgba(232,112,32,0.07)",
  },
  {
    icon: "🌱",
    title: "Ancrage local",
    desc: "Nos produits, nos recettes et nos méthodes sont nigériens. Nous valorisons le savoir-faire traditionnel plutôt que de l'importer ou de le remplacer.",
    color: "#5A8C1A",
    colorBg: "rgba(90,140,26,0.07)",
  },
  {
    icon: "🔬",
    title: "Rigueur",
    desc: "L'artisanat n'exclut pas l'exigence. Chaque produit respecte des standards stricts d'hygiène, de qualité et de traçabilité — du troupeau à l'assiette.",
    color: "#7B1C1C",
    colorBg: "rgba(123,28,28,0.06)",
  },
  {
    icon: "💡",
    title: "Innovation utile",
    desc: "La technologie ne vaut que si elle résout un vrai problème. Proxilait n'est pas un gadget — c'est une réponse concrète aux frictions que vivent les acteurs de la filière chaque jour.",
    color: "#854F0B",
    colorBg: "rgba(133,79,11,0.06)",
  },
];

export default function ValeursSection() {
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
          Ce qui nous guide
        </div>
        <h2 className="font-serif text-[30px] md:text-[36px] text-[#7B1C1C] leading-snug">
          Nos valeurs
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {valeurs.map((v, i) => (
          <motion.div
            key={v.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.07 }}
            className="rounded-3xl p-7 border"
            style={{ background: v.colorBg, borderColor: `${v.color}22` }}
          >
            <span className="text-3xl mb-4 block">{v.icon}</span>
            <h3 className="font-serif text-[20px] mb-2" style={{ color: v.color }}>
              {v.title}
            </h3>
            <p className="text-[13px] text-[#5a3a2a] leading-[1.8]">{v.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
