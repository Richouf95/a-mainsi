"use client";

import { motion } from "motion/react";

const testimonials = [
  {
    text: "Depuis que je travaille avec A'mansi, mon lait est valorisé à sa juste valeur. Je suis fier que mon troupeau nourrisse les familles de Niamey.",
    name: "Adamou Moussa",
    role: "Éleveur — région de Tillabéri",
    avatar: "A",
    avatarBg: "#E87020",
    featured: true,
  },
  {
    text: "Le yaourt A'mansi est le seul que j'achète. On sent le vrai lait, sans additifs. Mes enfants adorent.",
    name: "Fatouma Issa",
    role: "Cliente — Niamey",
    avatar: "F",
    avatarBg: "#5A8C1A",
    featured: false,
  },
  {
    text: "J'approvisionne mon épicerie en produits A'mansi depuis 2 ans. La qualité est constante et la livraison fiable.",
    name: "Mahamane Sani",
    role: "Distributeur — Marché de Katako",
    avatar: "M",
    avatarBg: "#7B1C1C",
    featured: false,
  },
];

export default function TestimonialsSection() {
  return (
    <section className="bg-white py-14 px-6 md:px-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-8"
      >
        <h2 className="font-serif text-[28px] md:text-[32px] text-[#7B1C1C] leading-tight">
          La parole à notre communauté
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {testimonials.map((temo, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ y: -5 }}
            className={`relative rounded-[20px] p-6 flex flex-col ${
              temo.featured
                ? "bg-[#7B1C1C] border-transparent"
                : "bg-[#FDF8F2] border border-[#7B1C1C]/10"
            }`}
          >
            <span
              className={`font-serif text-[56px] leading-none -mb-3 block ${
                temo.featured ? "text-white/20" : "text-[#7B1C1C]/12"
              }`}
            >
              &quot;
            </span>

            <div className="flex gap-1 mb-3">
              {Array.from({ length: 5 }).map((_, s) => (
                <svg key={s} width="13" height="13" viewBox="0 0 24 24" fill={temo.featured ? "#FAD060" : "#E87020"}>
                  <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
                </svg>
              ))}
            </div>

            <p className={`font-serif text-[14px] leading-[1.75] italic mb-5 flex-1 ${
              temo.featured ? "text-white/90" : "text-[#2C1A0E]"
            }`}>
              &ldquo;{temo.text}&rdquo;
            </p>

            <div className={`w-8 h-px mb-4 ${temo.featured ? "bg-white/25" : "bg-[#7B1C1C]/20"}`} />

            <div className="flex items-center gap-2.5">
              <div
                className="w-9 h-9 rounded-full flex items-center justify-center text-[14px] font-medium text-white shrink-0"
                style={{ background: temo.avatarBg }}
              >
                {temo.avatar}
              </div>
              <div>
                <div className={`text-xs font-medium ${temo.featured ? "text-[#FAD060]" : "text-[#7B1C1C]"}`}>
                  {temo.name}
                </div>
                <div className={`text-[10px] mt-0.5 ${temo.featured ? "text-white/55" : "text-[#9a7a6a]"}`}>
                  {temo.role}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-8 flex items-center justify-center gap-5 flex-wrap"
      >
        <div className="flex items-center gap-2">
          <div className="flex gap-0.5">
            {Array.from({ length: 5 }).map((_, s) => (
              <svg key={s} width="13" height="13" viewBox="0 0 24 24" fill="#E87020">
                <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
              </svg>
            ))}
          </div>
          <span className="text-[13px] font-medium text-[#7B1C1C]">4.9 / 5</span>
        </div>
        <div className="w-px h-4 bg-[#7B1C1C]/15" />
        <span className="text-xs text-[#9a7a6a]">Basé sur 120+ avis clients</span>
      </motion.div>
    </section>
  );
}
