"use client";

import { useState } from "react";
import { motion } from "motion/react";

const roles = [
  {
    key: "eleveurs",
    label: "Éleveurs",
    emoji: "🐄",
    color: "#5A8C1A",
    colorBg: "rgba(90,140,26,0.08)",
    colorBorder: "rgba(90,140,26,0.2)",
    headline: "Valorisez chaque litre de lait",
    desc: "Proxilait vous connecte directement aux transformateurs. Déclarez vos collectes, suivez vos paiements et accédez à des formations pour améliorer la qualité de votre production.",
    features: [
      "Déclaration de collecte en temps réel",
      "Suivi des paiements et historique",
      "Alertes qualité et conseils vétérinaires",
      "Mise en relation avec les transformateurs",
    ],
  },
  {
    key: "transformateurs",
    label: "Transformateurs",
    emoji: "⚗️",
    color: "#E87020",
    colorBg: "rgba(232,112,32,0.08)",
    colorBorder: "rgba(232,112,32,0.2)",
    headline: "Pilotez votre production",
    desc: "Gérez vos approvisionnements en lait, planifiez votre production et assurez la traçabilité de chaque lot fabriqué jusqu'au point de vente.",
    features: [
      "Gestion des approvisionnements",
      "Planification et suivi de production",
      "Traçabilité lot par lot",
      "Tableaux de bord qualité",
    ],
  },
  {
    key: "distributeurs",
    label: "Distributeurs",
    emoji: "🚚",
    color: "#FAD060",
    colorBg: "rgba(250,208,96,0.1)",
    colorBorder: "rgba(250,208,96,0.3)",
    headline: "Optimisez vos livraisons",
    desc: "Recevez les commandes, organisez vos tournées de livraison et maintenez un stock optimal. Proxilait vous aide à livrer plus vite et mieux.",
    features: [
      "Réception et gestion des commandes",
      "Planification des tournées",
      "Suivi des stocks en temps réel",
      "Rapports de livraison automatiques",
    ],
  },
  {
    key: "consommateurs",
    label: "Consommateurs",
    emoji: "😊",
    color: "#7B1C1C",
    colorBg: "rgba(123,28,28,0.06)",
    colorBorder: "rgba(123,28,28,0.15)",
    headline: "Commandez, tracez, savourez",
    desc: "Passez commande depuis chez vous, suivez votre livraison en direct et scannez vos produits pour connaître leur origine exacte. La confiance, à portée de main.",
    features: [
      "Commande en ligne et livraison à domicile",
      "Suivi de livraison en temps réel",
      "Scanner QR pour tracer l'origine",
      "Programme de fidélité et offres exclusives",
    ],
  },
];

export default function RolesSection() {
  const [activeRole, setActiveRole] = useState(0);

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
          Conçu pour toute la filière
        </div>
        <h2 className="font-serif text-[30px] md:text-[36px] text-[#7B1C1C] leading-snug">
          Une plateforme, quatre acteurs
        </h2>
      </motion.div>

      <div className="flex gap-2 flex-wrap mb-8">
        {roles.map((r, i) => (
          <button
            key={r.key}
            onClick={() => setActiveRole(i)}
            className="flex items-center gap-2 px-4 py-2 rounded-full text-[13px] font-medium transition-all duration-200 cursor-pointer"
            style={
              activeRole === i
                ? { background: r.color, color: "#fff" }
                : { background: "rgba(123,28,28,0.06)", color: "#7B1C1C" }
            }
          >
            <span>{r.emoji}</span>
            {r.label}
          </button>
        ))}
      </div>

      {roles.map((r, i) => (
        <motion.div
          key={r.key}
          initial={false}
          animate={{ opacity: activeRole === i ? 1 : 0, y: activeRole === i ? 0 : 10 }}
          transition={{ duration: 0.3 }}
          className={`${activeRole === i ? "block" : "hidden"}`}
        >
          <div
            className="rounded-3xl p-8 md:p-10 border grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
            style={{ background: r.colorBg, borderColor: r.colorBorder }}
          >
            <div>
              <div className="text-4xl mb-4">{r.emoji}</div>
              <h3 className="font-serif text-[26px] text-[#2C1A0E] mb-3 leading-snug">
                {r.headline}
              </h3>
              <p className="text-[14px] text-[#5a3a2a] leading-relaxed mb-6">{r.desc}</p>
            </div>

            <div className="flex flex-col gap-3">
              {r.features.map((f, j) => (
                <motion.div
                  key={j}
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: j * 0.07 }}
                  className="flex items-start gap-3"
                >
                  <span
                    className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                    style={{ background: r.color }}
                  >
                    <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                      <path d="M2 6l3 3 5-5" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span className="text-[14px] text-[#3a2a1a] leading-snug">{f}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      ))}
    </section>
  );
}
