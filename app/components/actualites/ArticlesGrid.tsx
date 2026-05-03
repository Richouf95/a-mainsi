"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock } from "lucide-react";
import type { Article } from "@/app/actualites/data";

export default function ArticlesGrid({ articles }: { articles: Article[] }) {
  const [featured, ...rest] = articles;

  return (
    <>
      {/* ── ARTICLE À LA UNE ──────────────────────────────────── */}
      {featured && (
        <section className="px-8 md:px-12 py-12">
          <div className="text-[10px] font-medium text-[#5A8C1A] tracking-[0.12em] uppercase mb-6">
            À la une
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Link href={`/actualites/${featured.slug}`} className="group block">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 bg-white rounded-3xl overflow-hidden shadow-[0_4px_24px_rgba(123,28,28,0.08)] hover:shadow-[0_16px_48px_rgba(123,28,28,0.14)] transition-all duration-400">
                <div className="relative h-64 lg:h-auto min-h-[260px] overflow-hidden">
                  {featured.image ? (
                    <Image
                      src={featured.image}
                      alt={featured.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-600"
                    />
                  ) : (
                    <div className="w-full h-full bg-[#F5F0E8] flex items-center justify-center text-5xl">
                      📰
                    </div>
                  )}
                  <div className="absolute inset-0 bg-linear-to-r from-black/20 to-transparent" />
                </div>

                <div className="p-8 lg:p-10 flex flex-col justify-between">
                  <div>
                    <span
                      className="inline-block text-[11px] font-semibold px-3 py-1 rounded-full mb-4"
                      style={{ background: featured.tagBg, color: featured.tagColor }}
                    >
                      {featured.tag}
                    </span>
                    <h2 className="font-serif text-[22px] md:text-[26px] text-[#2C1A0E] leading-snug mb-4">
                      {featured.title}
                    </h2>
                    <p className="text-[14px] text-[#7a5a4a] leading-relaxed line-clamp-3">
                      {featured.excerpt}
                    </p>
                  </div>
                  <div className="flex items-center justify-between mt-8">
                    <div className="flex items-center gap-4 text-[12px] text-[#9a7a6a]">
                      <span className="flex items-center gap-1.5">
                        <Calendar size={12} />
                        {featured.date}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock size={12} />
                        {featured.readTime}
                      </span>
                    </div>
                    <div className="w-9 h-9 rounded-full bg-[#F5F0E8] flex items-center justify-center text-[#7B1C1C] group-hover:bg-[#7B1C1C] group-hover:text-white transition-all duration-200 text-[15px]">
                      →
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        </section>
      )}

      {/* ── AUTRES ARTICLES ───────────────────────────────────── */}
      {rest.length > 0 && (
        <section className="px-8 md:px-12 pb-16">
          <div className="text-[10px] font-medium text-[#5A8C1A] tracking-[0.12em] uppercase mb-6">
            Tous les articles
          </div>
          <div className="flex flex-col gap-3">
            {rest.map((a, i) => (
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
                        <div className="w-full h-full flex items-center justify-center text-2xl">
                          📰
                        </div>
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
                      <span className="text-[11px] text-[#9a7a6a]">
                        {a.date} · {a.readTime}
                      </span>
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
      )}
    </>
  );
}
