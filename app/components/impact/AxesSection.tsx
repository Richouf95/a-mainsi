"use client";

import { useState } from "react";
import { motion } from "motion/react";

const axes = [
  {
    tag: "Économique",
    color: "#E87020",
    colorBg: "rgba(232,112,32,0.07)",
    colorBorder: "rgba(232,112,32,0.18)",
    emoji: "📈",
    title: "Créer de la valeur à chaque maillon",
    desc: "A'mansi rémunère les éleveurs au prix juste, réduit les intermédiaires et crée des emplois locaux directs et indirects dans la transformation et la distribution.",
    items: [
      "Rémunération équitable des éleveurs",
      "Création d'emplois locaux qualifiés",
      "Réduction des pertes post-collecte",
      "Accès à de nouveaux marchés pour les producteurs",
    ],
  },
  {
    tag: "Social",
    color: "#7B1C1C",
    colorBg: "rgba(123,28,28,0.06)",
    colorBorder: "rgba(123,28,28,0.15)",
    emoji: "🤝",
    title: "Renforcer les communautés rurales",
    desc: "En valorisant le lait local, A'mansi améliore les conditions de vie des familles d'éleveurs et garantit aux consommateurs des produits sains, traçables et abordables.",
    items: [
      "Amélioration des revenus des ménages ruraux",
      "Accès à des produits de qualité pour les familles",
      "Formation et accompagnement des éleveurs",
      "Inclusion des femmes dans la chaîne de valeur",
    ],
  },
  {
    tag: "Environnemental",
    color: "#5A8C1A",
    colorBg: "rgba(90,140,26,0.07)",
    colorBorder: "rgba(90,140,26,0.18)",
    emoji: "🌿",
    title: "Promouvoir une filière durable",
    desc: "Nos pratiques favorisent l'élevage extensif traditionnel, réduisent le gaspillage alimentaire et soutiennent des méthodes de transformation à faible empreinte écologique.",
    items: [
      "Soutien à l'élevage traditionnel extensif",
      "Réduction des pertes alimentaires",
      "Emballages responsables en cours de déploiement",
      "Traçabilité pour limiter les transports inutiles",
    ],
  },
  {
    tag: "Numérique",
    color: "#0B1F14",
    colorBg: "rgba(11,31,20,0.05)",
    colorBorder: "rgba(11,31,20,0.12)",
    emoji: "📱",
    title: "Digitaliser la filière laitière",
    desc: "Proxilait connecte tous les acteurs sur une seule plateforme. Éleveurs, transformateurs, distributeurs et consommateurs disposent enfin d'outils numériques adaptés à la réalité nigérienne.",
    items: [
      "Plateforme de traçabilité en temps réel",
      "Gestion numérique des collectes et paiements",
      "Accès aux données pour une meilleure décision",
      "Formation au numérique pour les éleveurs",
    ],
  },
];

export default function AxesSection() {
  const [activeAxe, setActiveAxe] = useState(0);

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
          Notre action
        </div>
        <h2 className="font-serif text-[30px] md:text-[36px] text-[#7B1C1C] leading-snug">
          Quatre axes d'impact
        </h2>
      </motion.div>

      <div className="flex gap-2 flex-wrap mb-8">
        {axes.map((a, i) => (
          <button
            key={a.tag}
            onClick={() => setActiveAxe(i)}
            className="flex items-center gap-2 px-4 py-2 rounded-full text-[13px] font-medium transition-all duration-200 cursor-pointer"
            style={
              activeAxe === i
                ? { background: a.color, color: "#fff" }
                : { background: "rgba(123,28,28,0.06)", color: "#7B1C1C" }
            }
          >
            <span>{a.emoji}</span>
            {a.tag}
          </button>
        ))}
      </div>

      {axes.map((a, i) => (
        <motion.div
          key={a.tag}
          initial={false}
          animate={{ opacity: activeAxe === i ? 1 : 0, y: activeAxe === i ? 0 : 10 }}
          transition={{ duration: 0.3 }}
          className={activeAxe === i ? "block" : "hidden"}
        >
          <div
            className="rounded-3xl p-8 md:p-10 border grid grid-cols-1 md:grid-cols-2 gap-8 items-start"
            style={{ background: a.colorBg, borderColor: a.colorBorder }}
          >
            <div>
              <div className="text-4xl mb-4">{a.emoji}</div>
              <h3 className="font-serif text-[26px] text-[#2C1A0E] mb-3 leading-snug">{a.title}</h3>
              <p className="text-[14px] text-[#5a3a2a] leading-relaxed">{a.desc}</p>
            </div>

            <div className="flex flex-col gap-3">
              {a.items.map((item, j) => (
                <motion.div
                  key={j}
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: j * 0.07 }}
                  className="flex items-start gap-3"
                >
                  <span
                    className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                    style={{ background: a.color }}
                  >
                    <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                      <path d="M2 6l3 3 5-5" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span className="text-[14px] text-[#3a2a1a] leading-snug">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      ))}
    </section>
  );
}
