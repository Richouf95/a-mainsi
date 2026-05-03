"use client";

import { motion } from "motion/react";

export default function MissionVisionSection() {
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
          Notre boussole
        </div>
        <h2 className="font-serif text-[30px] md:text-[36px] text-[#7B1C1C] leading-snug">
          Mission &amp; Vision
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-[#7B1C1C] rounded-3xl p-8 md:p-10"
        >
          <div className="text-[11px] font-semibold text-white/50 tracking-[0.15em] uppercase mb-4">
            Mission
          </div>
          <p className="font-serif text-[22px] text-white leading-[1.5]">
            Transformer le lait local nigérien en produits de qualité, valoriser le travail des éleveurs, et rendre la filière laitière plus équitable, traçable et durable.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-[#0B1F14] rounded-3xl p-8 md:p-10"
        >
          <div className="text-[11px] font-semibold text-white/50 tracking-[0.15em] uppercase mb-4">
            Vision
          </div>
          <p className="font-serif text-[22px] text-white leading-[1.5]">
            Devenir la référence de la transformation laitière en Afrique de l&apos;Ouest — en prouvant qu&apos;une filière locale, numérisée et respectueuse peut rivaliser avec les importations.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
