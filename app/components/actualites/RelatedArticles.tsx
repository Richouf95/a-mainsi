"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import type { Article } from "@/app/actualites/data";

export default function RelatedArticles({ articles }: { articles: Article[] }) {
  if (articles.length === 0) return null;

  return (
    <section className="bg-[#F5F0E8] py-14 px-8 md:px-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-8"
      >
        <div className="text-[10px] font-medium text-[#5A8C1A] tracking-[0.12em] uppercase mb-2">
          Continuer à lire
        </div>
        <h2 className="font-serif text-[26px] text-[#7B1C1C]">Autres actualités</h2>
      </motion.div>

      <div className="flex flex-col gap-3">
        {articles.map((a, i) => (
          <motion.div
            key={a.slug}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
          >
            <Link href={`/actualites/${a.slug}`} className="group block">
              <div className="flex items-center gap-4 bg-white rounded-2xl p-4 hover:shadow-[0_8px_32px_rgba(123,28,28,0.10)] transition-all duration-300">
                <div className="relative w-20 h-20 shrink-0 rounded-xl overflow-hidden bg-[#F5F0E8]">
                  {a.image ? (
                    <Image
                      src={a.image}
                      alt={a.title}
                      fill
                      sizes="80px"
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-2xl">📰</div>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <span
                    className="inline-block text-[10px] font-semibold px-2.5 py-0.5 rounded-full mb-1.5"
                    style={{ background: a.tagBg, color: a.tagColor }}
                  >
                    {a.tag}
                  </span>
                  <h3 className="font-serif text-[14px] leading-snug text-[#2C1A0E] mb-1.5 line-clamp-2">
                    {a.title}
                  </h3>
                  <span className="text-[11px] text-[#9a7a6a]">{a.date} · {a.readTime}</span>
                </div>
                <div className="shrink-0 w-8 h-8 rounded-full border border-[#E8E0D8] flex items-center justify-center text-[#7B1C1C] group-hover:bg-[#7B1C1C] group-hover:border-[#7B1C1C] group-hover:text-white transition-all duration-200 text-[13px]">
                  →
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
