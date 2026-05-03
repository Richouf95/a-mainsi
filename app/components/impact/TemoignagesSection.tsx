"use client";

import { motion } from "motion/react";

const temoignages = [
  {
    text: "Depuis que je travaille avec A'mansi, mon lait est valorisé à sa juste valeur. Je suis fier que mon troupeau nourrisse les familles de Niamey.",
    name: "Adamou Moussa",
    role: "Éleveur — région de Tillabéri",
    avatar: "A",
    avatarBg: "#E87020",
  },
  {
    text: "A'mansi a changé notre façon de travailler. La traçabilité et les paiements ponctuels nous donnent confiance pour investir dans notre troupeau.",
    name: "Halima Maïga",
    role: "Éleveuse — région de Dosso",
    avatar: "H",
    avatarBg: "#5A8C1A",
  },
];

export default function TemoignagesSection() {
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
          Ils témoignent
        </div>
        <h2 className="font-serif text-[30px] md:text-[36px] text-[#7B1C1C] leading-snug">
          L'impact vu du terrain
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {temoignages.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bg-white rounded-3xl p-8 flex flex-col gap-5"
          >
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, s) => (
                <svg key={s} width="13" height="13" viewBox="0 0 24 24" fill="#E87020">
                  <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
                </svg>
              ))}
            </div>

            <p className="font-serif text-[15px] text-[#2C1A0E] leading-relaxed italic flex-1">
              "{t.text}"
            </p>

            <div className="flex items-center gap-3 pt-4 border-t border-[#7B1C1C]/8">
              <div
                className="w-9 h-9 rounded-full flex items-center justify-center text-[14px] font-medium text-white shrink-0"
                style={{ background: t.avatarBg }}
              >
                {t.avatar}
              </div>
              <div>
                <div className="text-[13px] font-medium text-[#7B1C1C]">{t.name}</div>
                <div className="text-[11px] text-[#9a7a6a] mt-0.5">{t.role}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
