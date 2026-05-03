"use client";

import { motion } from "motion/react";

const values = [
  {
    icon: "🌿",
    title: "Naturel & sain",
    desc: "Des produits laitiers purs, issus d'un lait frais collecté localement.",
  },
  {
    icon: "🤝",
    title: "Impact local",
    desc: "Nous renforçons les revenus des éleveurs et des acteurs de la filière.",
  },
  {
    icon: "🛡️",
    title: "Confiance",
    desc: "Traçabilité, hygiène et exigence qualité à chaque étape.",
  },
  {
    icon: "📱",
    title: "Innovation",
    desc: "Le numérique au service d'une filière moderne et connectée.",
  },
];

export default function MissionSection() {
  return (
    <section
      id="apropos"
      className="relative bg-[#FDF8F2] py-20 px-6 md:px-10 overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-32 h-32 bg-[#7B1C1C]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-[#5A8C1A]/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-xl"
        >
          <span className="inline-flex items-center gap-2 text-[11px] font-medium text-[#5A8C1A] tracking-[0.18em] uppercase mb-4 border border-[#5A8C1A] px-3 py-1 rounded-lg">
            <span className="w-2 h-2 rounded-full bg-[#5A8C1A]" />
            Notre vision
          </span>

          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#7B1C1C] leading-tight mb-6">
            Redonner sa juste valeur
            <br />
            au lait local nigérien
          </h2>

          <p className="text-base md:text-lg text-[#5A3A2A] leading-relaxed mb-8">
            A&apos;mansi construit une filière laitière plus équitable, plus
            moderne et plus durable. Nous collectons, transformons et
            valorisons le lait local pour offrir aux familles nigériennes des
            produits sains, naturels et de confiance.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-5"
        >
          {values.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.2 }}
              className="group bg-white/80 backdrop-blur-md border border-[#7B1C1C]/10 rounded-3xl p-6 shadow-sm hover:shadow-xl transition-all cursor-pointer"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#F5F0E8] flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold text-[#7B1C1C] mb-2">{item.title}</h3>
              <p className="text-sm text-[#7A5A4A] leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
