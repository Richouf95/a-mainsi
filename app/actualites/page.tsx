"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock } from "lucide-react";
import { articles } from "./data";

export default function ActualitesPage() {
  const [featured, ...rest] = articles;

  return (
    <div
      className="min-h-screen max-w-460 mx-auto bg-[#F5F0E8]"
      style={{ fontFamily: "var(--font-sans)" }}
    >
      {/* ── HERO ──────────────────────────────────────────────── */}
      <section className="relative pt-14 h-[44dvh] bg-[#2C1A0E] overflow-hidden flex items-end">
        <div className="absolute inset-0">
          <Image
            src="/images/a-mansi-hero.png"
            alt=""
            fill
            className="object-cover object-center opacity-20"
          />
        </div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#7B1C1C]/25 rounded-full blur-[100px] translate-x-1/3 -translate-y-1/4" />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 px-8 md:px-12 pb-14"
        >
          <span className="inline-flex items-center gap-2 text-[11px] font-medium text-white/60 tracking-[0.15em] uppercase border border-white/15 bg-white/6 px-3.5 py-1.5 rounded-full mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FAD060]" />
            Actualités
          </span>
          <h1
            style={{ fontFamily: "var(--font-serif)" }}
            className="text-[38px] md:text-[54px] text-white leading-[1.1]"
          >
            Dernières nouvelles
            <br />
            <em className="text-[#FAD060] not-italic">d'A&apos;mansi</em>
          </h1>
        </motion.div>
      </section>

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
                {/* Image */}
                <div className="relative h-64 lg:h-auto min-h-[260px] overflow-hidden">
                  {featured.image ? (
                    <Image
                      src={featured.image}
                      alt={featured.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-600"
                    />
                  ) : (
                    <div className="w-full h-full bg-[#F5F0E8] flex items-center justify-center text-5xl">
                      📰
                    </div>
                  )}
                  <div className="absolute inset-0 bg-linear-to-r from-black/20 to-transparent" />
                </div>

                {/* Contenu */}
                <div className="p-8 lg:p-10 flex flex-col justify-between">
                  <div>
                    <span
                      className="inline-block text-[11px] font-semibold px-3 py-1 rounded-full mb-4"
                      style={{ background: featured.tagBg, color: featured.tagColor }}
                    >
                      {featured.tag}
                    </span>
                    <h2
                      style={{ fontFamily: "var(--font-serif)" }}
                      className="text-[22px] md:text-[26px] text-[#2C1A0E] leading-snug mb-4"
                    >
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
                      <h3
                        style={{ fontFamily: "var(--font-serif)" }}
                        className="text-[14px] leading-snug text-[#2C1A0E] mb-1.5 line-clamp-2"
                      >
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

      {/* ── FOOTER ────────────────────────────────────────────── */}
      <footer className="bg-[#2C1A0E] py-10 px-8 md:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="relative w-16 h-11">
            <Image src="/images/logo.jpg" alt="A'mansi" fill className="rounded-md object-cover" />
          </div>
          <p className="text-[12px] text-white/35 text-center">
            © {new Date().getFullYear()} A&apos;mansi — Laiterie Fromagerie du Niger
          </p>
          <div className="flex gap-6">
            {[
              { label: "Produits", href: "/produits" },
              { label: "Contact", href: "/contact" },
            ].map((l) => (
              <Link key={l.label} href={l.href} className="text-xs text-white/40 hover:text-white/70 transition-colors">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
