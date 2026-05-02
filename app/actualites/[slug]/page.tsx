"use client";

import { use } from "react";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { ArrowLeft, Clock, Calendar } from "lucide-react";
import { articles } from "../data";

export default function ArticleDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);

  const article = articles.find((a) => a.slug === slug);
  if (!article) notFound();

  const related = articles.filter((a) => a.slug !== slug).slice(0, 2);

  return (
    <div
      className="min-h-screen max-w-460 mx-auto bg-[#F5F0E8]"
      style={{ fontFamily: "var(--font-sans)" }}
    >
      {/* ── HERO ──────────────────────────────────────────────── */}
      <section className="relative pt-14 min-h-[70dvh] flex items-end overflow-hidden bg-[#2C1A0E]">
        {/* Image */}
        {article.image && (
          <div className="absolute inset-0">
            <Image
              src={article.image}
              alt={article.title}
              fill
              className="object-cover opacity-40"
            />
          </div>
        )}
        {/* Gradient bas */}
        <div className="absolute inset-0 bg-linear-to-t from-[#2C1A0E] via-[#2C1A0E]/60 to-transparent" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 w-full px-8 md:px-12 pb-12"
        >
          {/* Retour */}
          <Link
            href="/#actualites"
            className="inline-flex items-center gap-2 text-[12px] text-white/50 hover:text-white/80 transition-colors mb-6"
          >
            <ArrowLeft size={14} />
            Actualités
          </Link>

          {/* Tag + méta */}
          <div className="flex items-center gap-3 mb-4 flex-wrap">
            <span
              className="text-[11px] font-medium px-3 py-1 rounded-full"
              style={{ background: article.tagBg, color: article.tagColor }}
            >
              {article.tag}
            </span>
            <span className="flex items-center gap-1.5 text-[12px] text-white/45">
              <Calendar size={12} />
              {article.date}
            </span>
            <span className="flex items-center gap-1.5 text-[12px] text-white/45">
              <Clock size={12} />
              {article.readTime} de lecture
            </span>
          </div>

          {/* Titre */}
          <h1
            style={{ fontFamily: "var(--font-serif)" }}
            className="text-[32px] md:text-[46px] text-white leading-[1.12] max-w-3xl"
          >
            {article.title}
          </h1>
        </motion.div>
      </section>

      {/* ── CONTENU ───────────────────────────────────────────── */}
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
            {/* Lead */}
            <p
              style={{ fontFamily: "var(--font-serif)" }}
              className="text-[18px] text-[#2C1A0E] leading-[1.8] mb-8 border-l-2 border-[#7B1C1C]/20 pl-5"
            >
              {article.body.lead}
            </p>

            {/* Sections */}
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
                    <h2
                      style={{ fontFamily: "var(--font-serif)" }}
                      className="text-[20px] text-[#7B1C1C] mb-3 leading-snug"
                    >
                      {s.subtitle}
                    </h2>
                  )}
                  <p className="text-[15px] text-[#5a3a2a] leading-[1.85]">
                    {s.content}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Citation */}
            {article.body.quote && (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="my-10 bg-[#F5F0E8] rounded-3xl px-8 py-7 relative overflow-hidden"
              >
                <span
                  style={{ fontFamily: "var(--font-serif)" }}
                  className="absolute -top-2 left-5 text-[80px] text-[#7B1C1C]/8 leading-none select-none"
                >
                  "
                </span>
                <p
                  style={{ fontFamily: "var(--font-serif)" }}
                  className="text-[17px] text-[#2C1A0E] leading-relaxed italic relative z-10 mb-3"
                >
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
            {/* Chiffres clés */}
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

            {/* Tag */}
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

            {/* Partager */}
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

      {/* ── ARTICLES SIMILAIRES ───────────────────────────────── */}
      {related.length > 0 && (
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
            <h2
              style={{ fontFamily: "var(--font-serif)" }}
              className="text-[26px] text-[#7B1C1C]"
            >
              Autres actualités
            </h2>
          </motion.div>

          <div className="flex flex-col gap-3">
            {related.map((a, i) => (
              <motion.div
                key={a.slug}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <Link href={`/actualites/${a.slug}`} className="group block">
                  <div className="flex items-center gap-4 bg-white rounded-2xl p-4 hover:shadow-[0_8px_32px_rgba(123,28,28,0.10)] transition-all duration-300">
                    {/* Thumbnail */}
                    <div className="relative w-20 h-20 shrink-0 rounded-xl overflow-hidden bg-[#F5F0E8]">
                      {a.image ? (
                        <Image
                          src={a.image}
                          alt={a.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-2xl">
                          📰
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <span
                        className="inline-block text-[10px] font-semibold px-2.5 py-0.5 rounded-full mb-1.5"
                        style={{ background: a.tagBg, color: a.tagColor }}
                      >
                        {a.tag}
                      </span>
                      <h3
                        style={{ fontFamily: "var(--font-serif)" }}
                        className="text-[14px] leading-snug text-[#2C1A0E] mb-1.5 line-clamp-2"
                      >
                        {a.title}
                      </h3>
                      <span className="text-[11px] text-[#9a7a6a]">{a.date} · {a.readTime}</span>
                    </div>

                    {/* Arrow */}
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

      {/* ── CTA ───────────────────────────────────────────────── */}
      <section className="bg-[#E87020] py-12 px-8 md:px-12 flex items-center justify-between gap-8 flex-col md:flex-row">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 style={{ fontFamily: "var(--font-serif)" }} className="text-[28px] text-white mb-2">
            Envie d'en savoir plus ?
          </h2>
          <p className="text-[14px] text-white/80">
            Suivez l'actualité d'A'mansi et rejoignez la filière laitière nigérienne.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-3 w-full md:w-auto"
        >
          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-52 bg-white text-[#E87020] rounded-lg px-6 py-3 text-[13px] font-medium cursor-pointer"
            >
              Nous contacter
            </motion.button>
          </Link>
          <Link href="/proxilait">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-52 bg-transparent text-white border-2 border-white/60 rounded-lg px-6 py-3 text-[13px] font-medium cursor-pointer"
            >
              Découvrir Proxilait
            </motion.button>
          </Link>
        </motion.div>
      </section>

    </div>
  );
}
