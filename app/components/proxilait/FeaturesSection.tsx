"use client";

import { motion } from "motion/react";

const features = [
  {
    icon: "📍",
    title: "Traçabilité complète",
    desc: "Du troupeau à l'assiette, chaque produit est référencé et traçable via un QR code unique.",
  },
  {
    icon: "💬",
    title: "Communication directe",
    desc: "Éleveurs, transformateurs et distributeurs échangent en temps réel sans intermédiaire.",
  },
  {
    icon: "📊",
    title: "Tableaux de bord",
    desc: "Des données claires pour prendre les bonnes décisions, que vous soyez éleveur ou directeur d'usine.",
  },
  {
    icon: "🔔",
    title: "Alertes intelligentes",
    desc: "Notifications sur les collectes, livraisons, paiements et événements critiques de la chaîne.",
  },
  {
    icon: "🌐",
    title: "Accessible partout",
    desc: "Optimisé pour les connexions lentes, avec un mode hors-ligne pour les zones rurales.",
  },
  {
    icon: "🔒",
    title: "Données sécurisées",
    desc: "Vos informations et transactions sont chiffrées et protégées à chaque étape.",
  },
];

export default function FeaturesSection() {
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
          Ce que Proxilait offre
        </div>
        <h2 className="font-serif text-[30px] md:text-[36px] text-[#7B1C1C] leading-snug">
          Tout ce dont la filière a besoin
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {features.map((f, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            className="bg-[#F5F0E8] rounded-3xl p-8 flex items-center gap-6"
          >
            <div className="w-16 h-16 rounded-2xl bg-[#7B1C1C]/8 flex items-center justify-center text-3xl shrink-0">
              {f.icon}
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-serif text-[18px] text-[#7B1C1C] mb-1">{f.title}</h3>
              <p className="text-[13px] text-[#7a5a4a] leading-relaxed">{f.desc}</p>
            </div>
            <span className="text-[36px] font-bold text-[#7B1C1C]/6 shrink-0 hidden sm:block select-none leading-none">
              {String(i + 1).padStart(2, "0")}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
