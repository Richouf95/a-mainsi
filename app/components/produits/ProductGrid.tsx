"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/app/produits/data";

function ProductCard({ prod, i }: { prod: Product; i: number }) {
  return (
    <Link href={`/produits/${prod.slug}`} className="block">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: i * 0.08 }}
        whileHover={{ y: -6 }}
        className="group bg-white rounded-3xl overflow-hidden cursor-pointer shadow-[0_2px_16px_rgba(123,28,28,0.06)] hover:shadow-[0_12px_40px_rgba(123,28,28,0.13)] transition-all duration-300"
      >
        <div className="relative h-52.5 overflow-hidden" style={{ background: prod.bg }}>
          {prod.image ? (
            <Image
              src={prod.image}
              alt={prod.name}
              fill
              sizes="(max-width: 1024px) 100vw, 33vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <span className="text-[64px] group-hover:scale-110 transition-transform duration-300">
                {prod.emoji}
              </span>
            </div>
          )}
          <div className="absolute inset-x-0 bottom-0 h-14 bg-linear-to-t from-black/15 to-transparent" />
          {prod.badge && (
            <span
              className="absolute top-3 left-3 text-white text-[10px] font-medium rounded-full px-3 py-1 tracking-wide z-10 backdrop-blur-sm"
              style={{ background: prod.badgeBg }}
            >
              {prod.badge}
            </span>
          )}
        </div>

        <div className="p-5">
          <div className="font-serif text-[17px] text-[#7B1C1C] font-semibold leading-snug mb-1.5">
            {prod.name}
          </div>
          <p className="text-[12px] text-[#7a5a4a] leading-relaxed mb-4">{prod.desc}</p>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#5A8C1A] shrink-0" />
              <span className="text-[11px] text-[#5A8C1A] font-medium tracking-wide">{prod.volume}</span>
            </div>
            <div className="w-7 h-7 rounded-full bg-[#F5F0E8] flex items-center justify-center text-[#7B1C1C] text-sm group-hover:bg-[#7B1C1C] group-hover:text-white transition-colors duration-200">
              →
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}

function SectionHeader({ tag, title, desc }: { tag: string; title: string; desc: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mb-8"
    >
      <div className="text-[10px] font-medium text-[#5A8C1A] tracking-[0.12em] uppercase mb-2">{tag}</div>
      <h2 className="font-serif text-[28px] text-[#7B1C1C] leading-tight">{title}</h2>
      <p className="text-[14px] text-[#5a3a2a] mt-3 max-w-2xl">{desc}</p>
    </motion.div>
  );
}

type Props = {
  laitFrais: Product[];
  yaourts: Product[];
  fromages: Product[];
  derives: Product[];
};

export default function ProductGrid({ laitFrais, yaourts, fromages, derives }: Props) {
  return (
    <>
      <section id="lait-frais" className="bg-white py-12 px-8 md:px-10">
        <SectionHeader
          tag="Lait frais"
          title="Lait frais pasteurisé"
          desc="Notre lait frais est collecté quotidiennement auprès de nos éleveurs partenaires et pasteurisé selon les normes les plus strictes pour garantir qualité et fraîcheur."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {laitFrais.map((prod, i) => <ProductCard key={prod.slug} prod={prod} i={i} />)}
        </div>
      </section>

      <section id="yaourts" className="bg-[#F5F0E8] py-12 px-8 md:px-10">
        <SectionHeader
          tag="Yaourts"
          title="Yaourts et produits fermentés"
          desc="Nos yaourts sont fabriqués avec du lait local et des ferments naturels. Disponibles nature ou aromatisés avec des saveurs locales authentiques."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {yaourts.map((prod, i) => <ProductCard key={prod.slug} prod={prod} i={i} />)}
        </div>
      </section>

      <section id="fromages" className="bg-white py-12 px-8 md:px-10">
        <SectionHeader
          tag="Fromages"
          title="Fromages traditionnels"
          desc="Nos fromages sont élaborés selon des recettes traditionnelles nigériennes, avec le savoir-faire transmis de génération en génération."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {fromages.map((prod, i) => <ProductCard key={prod.slug} prod={prod} i={i} />)}
        </div>
      </section>

      <section id="derives" className="bg-[#F5F0E8] py-12 px-8 md:px-10">
        <SectionHeader
          tag="Produits dérivés"
          title="Beurre et produits transformés"
          desc="Découvrez nos produits dérivés du lait : beurre traditionnel, crème fraîche et autres spécialités locales."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {derives.map((prod, i) => <ProductCard key={prod.slug} prod={prod} i={i} />)}
        </div>
      </section>
    </>
  );
}
