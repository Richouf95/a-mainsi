"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar } from "lucide-react";
import type { Article } from "@/app/actualites/data";

export default function ArticleHero({ article }: { article: Article }) {
  return (
    <section className="relative pt-14 min-h-[70dvh] flex items-end overflow-hidden bg-[#2C1A0E]">
      {article.image && (
        <div className="absolute inset-0">
          <Image
            src={article.image}
            alt={article.title}
            fill
            sizes="100vw"
            className="object-cover opacity-40"
          />
        </div>
      )}
      <div className="absolute inset-0 bg-linear-to-t from-[#2C1A0E] via-[#2C1A0E]/60 to-transparent" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 w-full px-8 md:px-12 pb-12"
      >
        <Link
          href="/#actualites"
          className="inline-flex items-center gap-2 text-[12px] text-white/50 hover:text-white/80 transition-colors mb-6"
        >
          <ArrowLeft size={14} />
          Actualités
        </Link>

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

        <h1 className="font-serif text-[32px] md:text-[46px] text-white leading-[1.12] max-w-3xl">
          {article.title}
        </h1>
      </motion.div>
    </section>
  );
}
