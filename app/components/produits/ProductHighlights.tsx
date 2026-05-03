"use client";

import { motion } from "motion/react";
import type { Product } from "@/app/produits/data";

export default function ProductHighlights({ highlights }: { highlights: Product["highlights"] }) {
  return (
    <section className="bg-white py-14 px-8 md:px-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-col md:flex-row md:items-center gap-8 md:gap-0"
      >
        <div className="md:w-56 shrink-0 md:border-r md:border-[#7B1C1C]/10 md:pr-10">
          <div className="text-[10px] font-medium text-[#5A8C1A] tracking-[0.12em] uppercase mb-2">
            Pourquoi ce produit
          </div>
          <h2 className="font-serif text-[24px] text-[#7B1C1C] leading-snug">
            Ce qui le rend unique
          </h2>
        </div>

        <div className="flex-1 grid grid-cols-2 md:grid-cols-4 md:divide-x md:divide-[#7B1C1C]/8">
          {highlights.map((h, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="flex flex-col gap-3 m-1 px-6 py-4 md:py-0 border-b border-[#7B1C1C]/8 md:border-b-0 md:last:border-b-0"
            >
              <span className="text-2xl">{h.icon}</span>
              <span className="font-serif text-[15px] text-[#7B1C1C] leading-snug">{h.label}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
