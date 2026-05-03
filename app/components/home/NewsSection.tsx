"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

const smallNews = [
  {
    slug: "lancement-hindirmou",
    tag: "Produits",
    tagBg: "#EAF3DE",
    tagColor: "#3B6D11",
    title: "Lancement du Hindirmou — le beurre traditionnel nigérien en pot",
    date: "28 fév. 2025",
  },
  {
    slug: "accord-eleveurs-dosso",
    tag: "Partenariat",
    tagBg: "#FFF0E0",
    tagColor: "#854F0B",
    title: "A'mansi signe un accord avec 50 nouveaux éleveurs de la région de Dosso",
    date: "14 jan. 2025",
  },
];

export default function NewsSection() {
  return (
    <section className="bg-[#F5F0E8] py-12 px-6 md:px-10">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-end justify-between mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif text-[28px] md:text-[30px] text-[#7B1C1C] leading-tight">
              Dernières nouvelles
            </h2>
          </motion.div>

          <Link
            href="/actualites"
            className="hidden md:inline-block text-xs text-[#7B1C1C] font-medium border-b border-[#7B1C1C] pb-0.5 hover:opacity-70 transition-opacity whitespace-nowrap"
          >
            Voir toutes les actualités →
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Carte principale */}
          <Link href="/actualites/gitex-africa-2025">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -4 }}
              className="bg-white rounded-[20px] overflow-hidden border border-[#7B1C1C]/8 cursor-pointer"
            >
              <div className="relative h-52 overflow-hidden">
                <Image
                  src="/images/gitex.jpg"
                  alt="Participation de A'mansi à GITEX Africa"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-[#7B1C1C]/40" />
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(45deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 1px, transparent 1px, transparent 12px)",
                  }}
                />
                <div className="relative z-10 flex items-center justify-between p-5">
                  <span className="bg-[#E87020] text-white text-[10px] font-medium rounded-full px-3 py-1">
                    Événement
                  </span>
                  <span className="text-[11px] text-white/80">12 mars 2025</span>
                </div>
                <span className="absolute bottom-3 right-5 text-[52px] text-white/10 select-none">01</span>
              </div>

              <div className="p-5">
                <h3 className="font-serif text-base md:text-[17px] text-[#7B1C1C] mb-2 leading-snug">
                  A&apos;mansi met en lumière l&apos;innovation laitière africaine à GITEX Africa
                </h3>
                <p className="text-xs text-[#7a5a4a] leading-relaxed">
                  Présente à GITEX Africa, A&apos;mansi a dévoilé Proxilait, sa solution numérique
                  conçue pour moderniser la filière laitière et connecter les acteurs du secteur.
                </p>
                <div className="flex items-center justify-between mt-4 pt-3 border-t border-[#7B1C1C]/10">
                  <span className="text-[11px] text-[#9a7a6a]">12 mars 2025</span>
                  <div className="w-7 h-7 rounded-full bg-[#F5F0E8] flex items-center justify-center text-[#7B1C1C]">
                    →
                  </div>
                </div>
              </div>
            </motion.div>
          </Link>

          {/* Petites cartes */}
          <div className="flex flex-col gap-6">
            {smallNews.map((news, i) => (
              <Link key={i} href={`/actualites/${news.slug}`}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="bg-white rounded-[20px] p-5 border border-[#7B1C1C]/8 cursor-pointer"
                >
                  <span
                    className="inline-block text-[10px] font-medium rounded-full px-3 py-1 mb-2.5"
                    style={{ background: news.tagBg, color: news.tagColor }}
                  >
                    {news.tag}
                  </span>
                  <p className="font-serif text-[14px] text-[#7B1C1C] leading-snug">{news.title}</p>
                  <div className="flex items-center justify-between mt-4 pt-3 border-t border-[#7B1C1C]/10">
                    <span className="text-[11px] text-[#9a7a6a]">{news.date}</span>
                    <div className="w-7 h-7 rounded-full bg-[#F5F0E8] flex items-center justify-center text-[#7B1C1C]">
                      →
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
