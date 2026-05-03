"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { Product } from "@/app/produits/data";

export default function ProductHero({ prod }: { prod: Product }) {
  return (
    <section
      className="relative pt-14 min-h-[92dvh] flex items-end overflow-hidden"
      style={{ background: prod.bg }}
    >
      {prod.image && (
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src={prod.image}
            alt=""
            fill
            sizes="100vw"
            className="object-cover opacity-10 scale-110 blur-2xl"
          />
        </div>
      )}

      <div className="relative z-10 w-full grid grid-cols-1 lg:grid-cols-2 items-stretch gap-0 min-h-[calc(92dvh-56px)]">
        {/* Colonne image */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative h-[50dvh] lg:h-full lg:min-h-[calc(92dvh-56px)]"
        >
          {prod.image ? (
            <Image
              src={prod.image}
              alt={prod.name}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center" style={{ background: prod.bg }}>
              <span className="text-[130px] drop-shadow-xl leading-none">{prod.emoji}</span>
            </div>
          )}
        </motion.div>

        {/* Colonne info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="bg-white/70 backdrop-blur-xl lg:min-h-[calc(92dvh-56px)] flex flex-col justify-end px-8 md:px-10 py-10 gap-6"
        >
          <Link
            href="/produits"
            className="flex items-center gap-2 text-[12px] text-[#7B1C1C]/50 hover:text-[#7B1C1C] transition-colors w-fit"
          >
            <ArrowLeft size={14} />
            Nos produits
          </Link>

          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-[11px] font-medium text-[#5A8C1A] tracking-[0.12em] uppercase border border-[#5A8C1A]/30 bg-[#5A8C1A]/8 px-3 py-1 rounded-full">
              {prod.category}
            </span>
            {prod.badge && (
              <span
                className="text-white text-[10px] font-medium rounded-full px-3 py-1 tracking-wide"
                style={{ background: prod.badgeBg }}
              >
                {prod.badge}
              </span>
            )}
          </div>

          <div>
            <h1 className="font-serif text-[40px] md:text-[52px] text-[#7B1C1C] leading-[1.1] mb-4">
              {prod.name}
            </h1>
            <p className="text-[15px] text-[#5a3a2a] leading-relaxed max-w-md">{prod.desc}</p>
          </div>

          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#5A8C1A] shrink-0" />
            <span className="text-[13px] text-[#5A8C1A] font-medium tracking-wide">{prod.volume}</span>
          </div>

          <div className="flex gap-3 flex-wrap">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full md:w-52 bg-[#7B1C1C] text-white rounded-xl px-6 py-3 text-[13px] font-medium cursor-pointer hover:bg-[#6a1717] transition-colors"
            >
              Commander
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full md:w-52 bg-transparent text-[#7B1C1C] border border-[#7B1C1C]/30 rounded-xl px-6 py-3 text-[13px] font-medium cursor-pointer hover:bg-[#7B1C1C]/5 transition-colors"
            >
              Trouver un point de vente
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
