"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/app/produits/data";

export default function RelatedProducts({
  category,
  products,
}: {
  category: string;
  products: Product[];
}) {
  if (products.length === 0) return null;

  return (
    <section className="bg-white py-14 px-8 md:px-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-8"
      >
        <div className="text-[10px] font-medium text-[#5A8C1A] tracking-[0.12em] uppercase mb-2">
          {category}
        </div>
        <h2 className="font-serif text-[26px] text-[#7B1C1C]">Dans la même gamme</h2>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((r, i) => (
          <motion.div
            key={r.slug}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
          >
            <Link href={`/produits/${r.slug}`} className="group block">
              <div className="bg-white rounded-3xl overflow-hidden shadow-[0_2px_16px_rgba(123,28,28,0.06)] hover:shadow-[0_12px_40px_rgba(123,28,28,0.13)] transition-all duration-300 group-hover:-translate-y-1">
                <div className="relative h-48 overflow-hidden" style={{ background: r.bg }}>
                  {r.image ? (
                    <Image
                      src={r.image}
                      alt={r.denomination}
                      fill
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="text-[56px] group-hover:scale-110 transition-transform duration-300">
                        {r.emoji}
                      </span>
                    </div>
                  )}
                  {r.badge && (
                    <span
                      className="absolute top-3 left-3 text-white text-[10px] font-medium rounded-full px-3 py-1 z-10"
                      style={{ background: r.badgeBg }}
                    >
                      {r.badge}
                    </span>
                  )}
                </div>
                <div className="p-5 flex items-center justify-between">
                  <div>
                    <div className="font-serif text-[16px] text-[#7B1C1C] font-semibold">{r.denomination}</div>
                    <div className="flex items-center gap-1.5 mt-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#5A8C1A]" />
                      <span className="text-[11px] text-[#5A8C1A] font-medium">{r.quantite.join(", ")}</span>
                    </div>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-[#F5F0E8] flex items-center justify-center text-[#7B1C1C] group-hover:bg-[#7B1C1C] group-hover:text-white transition-colors duration-200 shrink-0">
                    →
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
