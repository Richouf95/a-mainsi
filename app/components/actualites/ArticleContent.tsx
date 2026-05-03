"use client";

import { motion } from "motion/react";
import type { Article } from "@/app/actualites/data";

export default function ArticleContent({ article }: { article: Article }) {
  return (
    <section className="bg-white py-14 px-8 md:px-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">

        {/* Corps de l'article — 2 col */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-2 order-last lg:order-first"
        >
          <p className="font-serif text-[18px] text-[#2C1A0E] leading-[1.8] mb-8 border-l-2 border-[#7B1C1C]/20 pl-5">
            {article.body.lead}
          </p>

          <div className="flex flex-col gap-8">
            {article.body.sections.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
              >
                {s.subtitle && (
                  <h2 className="font-serif text-[20px] text-[#7B1C1C] mb-3 leading-snug">
                    {s.subtitle}
                  </h2>
                )}
                <p className="text-[15px] text-[#5a3a2a] leading-[1.85]">{s.content}</p>
              </motion.div>
            ))}
          </div>

          {article.body.quote && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="my-10 bg-[#F5F0E8] rounded-3xl px-8 py-7 relative overflow-hidden"
            >
              <span className="font-serif absolute -top-2 left-5 text-[80px] text-[#7B1C1C]/8 leading-none select-none">
                "
              </span>
              <p className="font-serif text-[17px] text-[#2C1A0E] leading-relaxed italic relative z-10 mb-3">
                "{article.body.quote.text}"
              </p>
              <span className="text-[12px] text-[#9a7a6a] font-medium">
                — {article.body.quote.author}
              </span>
            </motion.div>
          )}
        </motion.div>

        {/* Sidebar — 1 col */}
        <motion.div
          initial={{ opacity: 0, x: 16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="flex flex-col gap-4 lg:sticky lg:top-20 order-first lg:order-last"
        >
          <div className="bg-[#F5F0E8] rounded-3xl p-6">
            <div className="text-[10px] font-medium text-[#5A8C1A] tracking-[0.12em] uppercase mb-4">
              En bref
            </div>
            <div className="flex flex-col divide-y divide-[#7B1C1C]/8">
              {article.body.keyFacts.map((f, i) => (
                <div key={i} className="flex items-center gap-4 py-3.5 first:pt-0 last:pb-0">
                  <span className="text-xl shrink-0">{f.icon}</span>
                  <div>
                    <div className="text-[11px] text-[#9a7a6a] mb-0.5">{f.label}</div>
                    <div className="text-[14px] font-medium text-[#2C1A0E]">{f.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#F5F0E8] rounded-3xl p-6 flex items-center gap-4">
            <span
              className="text-[12px] font-medium px-3 py-1.5 rounded-full shrink-0"
              style={{ background: article.tagBg, color: article.tagColor }}
            >
              {article.tag}
            </span>
            <span className="text-[13px] text-[#7a5a4a] leading-snug">
              {article.date} · {article.readTime} de lecture
            </span>
          </div>

          <div className="bg-[#7B1C1C] rounded-3xl p-6">
            <div className="text-[11px] font-medium text-white/50 tracking-wide uppercase mb-4">
              Partager
            </div>
            <div className="flex flex-col gap-2">
              {[
                { label: "Copier le lien", icon: "🔗" },
                { label: "WhatsApp", icon: "💬" },
                { label: "Facebook", icon: "📘" },
              ].map((s) => (
                <button
                  key={s.label}
                  className="flex items-center gap-3 text-[13px] text-white/70 hover:text-white transition-colors cursor-pointer py-1"
                >
                  <span>{s.icon}</span>
                  {s.label}
                </button>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
