"use client";

import { useState, useEffect } from "react";
import { motion } from "motion/react";
import Image from "next/image";

const products = [
  {
    name: "Tchoukou fin",
    desc: "Fromage frais local au lait entier, texture crémeuse et riche en goût.",
    image: "/images/toukou-fin.png",
    bg: "#FFF8F0",
    badge: "Phare",
    badgeBg: "#E87020",
    meta: "Produit phare",
  },
  {
    name: "Fromage frais",
    desc: "Fromage frais doux et authentique au lait local, au goût naturel.",
    image: "/images/fromage-frais-sucre.png",
    bg: "#F0F8FF",
    meta: "Artisanal",
  },
  {
    name: "Lait frais sucré",
    desc: "Lait frais légèrement sucré, riche, naturel et très rafraîchissant.",
    image: "/images/lait-frais-entier.png",
    bg: "#FFFDF0",
    meta: "Naturel",
  },
];

export default function ProductsSection() {
  const [index, setIndex] = useState(0);

  const getCardStyle = (i: number) => {
    const total = products.length;
    const diff = (i - index + total) % total;
    if (diff === 0) return "translate-x-0 rotate-0 scale-100 opacity-100 z-30";
    if (diff === total - 1) return "-translate-x-7 -rotate-3 scale-[0.96] opacity-60 z-20";
    if (diff === 1) return "translate-x-7 rotate-3 scale-[0.96] opacity-60 z-10";
    return "opacity-0 pointer-events-none z-0";
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((p) => (p + 1) % products.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="produits" className="bg-[#F5F0E8] py-16 px-10">
      {/* En-tête */}
      <div className="flex items-end justify-center mb-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-[10px] text-center font-medium text-[#5A8C1A] tracking-[0.12em] uppercase mb-2">
            Nos produits
          </div>
          <h2 className="font-serif text-[28px] text-[#7B1C1C] leading-tight text-center mb-4">
            Une gamme issue du
            <br />
            meilleur lait nigérien
          </h2>
          <p className="text-[#7B1C1C]/50 max-w-sm text-center">
            Chaque produit est soigneusement sélectionné pour vous offrir une
            expérience authentique et raffinée.
          </p>
        </motion.div>
      </div>

      {/* Stack + description */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-20">
        {/* Stack de cartes */}
        <div className="relative w-70 h-100 lg:w-[320px] lg:h-115 shrink-0 mx-auto lg:mx-0">
          {products.map((p, i) => (
            <motion.div
              key={i}
              onClick={() => setIndex(i)}
              className={`absolute inset-0 cursor-pointer ${getCardStyle(i)}`}
              style={{ transition: "all 0.5s cubic-bezier(.34,1.56,.64,1)" }}
            >
              <div className="w-full h-full bg-white rounded-3xl overflow-hidden shadow-2xl border border-[#7B1C1C]/10">
                <div
                  className="h-[72%] lg:h-full flex items-center justify-center relative"
                  style={{ background: p.bg }}
                >
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover"
                  />
                  {p.badge && (
                    <span
                      className="absolute top-3 right-3 text-white text-[9px] font-medium rounded-full px-2.5 py-1 tracking-wide z-10"
                      style={{ background: p.badgeBg }}
                    >
                      {p.badge}
                    </span>
                  )}
                </div>
                <div className="p-4 lg:hidden">
                  <h3 className="font-serif text-base font-semibold text-[#7B1C1C]">{p.name}</h3>
                  <p className="text-xs text-[#7A5A4A] mt-1 leading-relaxed">{p.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Description desktop */}
        <div className="hidden lg:flex flex-col max-w-sm gap-4">
          <p className="text-[10px] font-medium text-[#7B1C1C]/45 tracking-[0.12em] uppercase">
            Produit {String(index + 1).padStart(2, "0")} /{" "}
            {String(products.length).padStart(2, "0")}
          </p>

          <h3 className="font-serif text-3xl text-[#7B1C1C] leading-tight">
            {products[index].name}
          </h3>

          <div className="w-8 h-px bg-[#7B1C1C]/25" />

          <p className="text-sm text-[#7A5A4A] leading-relaxed">{products[index].desc}</p>
          <p className="text-xs text-[#7B1C1C]/45 italic">{products[index].meta}</p>

          <div className="flex items-center gap-3 mt-2">
            <button
              onClick={() => setIndex((p) => (p - 1 + products.length) % products.length)}
              className="w-10 h-10 rounded-full border border-[#7B1C1C]/20 text-[#7B1C1C] flex items-center justify-center hover:bg-[#7B1C1C]/5 transition-colors"
            >
              ←
            </button>

            <div className="flex gap-1.5 items-center">
              {products.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`rounded-full transition-all duration-200 ${
                    i === index ? "w-2 h-2 bg-[#7B1C1C] scale-125" : "w-1.5 h-1.5 bg-[#7B1C1C]/20"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={() => setIndex((p) => (p + 1) % products.length)}
              className="w-10 h-10 rounded-full bg-[#7B1C1C] text-white flex items-center justify-center hover:bg-[#6a1717] transition-colors"
            >
              →
            </button>
          </div>
        </div>
      </div>

      <p className="text-center text-[11px] text-[#7B1C1C]/45 mt-8 tracking-wide">
        Cliquez sur une carte ou naviguez avec les flèches
      </p>

      <div className="flex justify-center mt-6">
        <a
          href="/produits"
          className="bg-[#7B1C1C] text-white px-6 py-3 rounded-lg text-[13px] font-medium hover:bg-[#6a1717] transition-colors"
        >
          Voir tous les produits
        </a>
      </div>
    </section>
  );
}
