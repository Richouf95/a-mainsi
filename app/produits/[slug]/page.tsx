"use client";

import { use } from "react";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { useState } from "react";
import { Menu, X, ArrowLeft } from "lucide-react";
import { allProducts } from "../data";

export default function ProduitDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const [open, setOpen] = useState(false);

  const prod = allProducts.find((p) => p.slug === slug);
  if (!prod) notFound();

  const related = allProducts
    .filter((p) => p.categorySlug === prod.categorySlug && p.slug !== slug)
    .slice(0, 3);

  return (
    <div
      className="min-h-screen max-w-460 mx-auto bg-[#F5F0E8]"
      style={{ fontFamily: "var(--font-sans)" }}
    >
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#7B1C1C]/75 backdrop-blur-lg flex items-center justify-between px-8 h-14 max-w-460 mx-auto shadow-[0_4px_20px_rgba(0,0,0,0.2)]">
        <Link href="/" className="flex items-center gap-3">
          <div className="relative w-14 h-10">
            <Image
              src="/images/logo.jpg"
              alt="Logo"
              fill
              className="rounded-md object-cover"
            />
          </div>
        </Link>
        <ul className="hidden md:flex gap-7 list-none">
          {[
            { label: "Nos produits", href: "/produits" },
            { label: "Proxilait", href: "/#proxilait" },
            { label: "Impact", href: "/#impact" },
            { label: "Contact", href: "/#contact" },
          ].map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                className="text-white/85 text-[13px] tracking-wide hover:text-white transition-colors"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <button className="hidden md:flex bg-[#90C528] text-white border-none rounded-md px-5 py-2 text-[13px] font-medium cursor-pointer hover:bg-[#3B6D11] transition-colors">
          Nous contacter
        </button>
        <button onClick={() => setOpen(true)} className="md:hidden text-white">
          <Menu size={24} />
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div
          className="fixed inset-0 z-50 bg-black/30 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        >
          <div
            className="absolute right-0 top-0 h-full w-72 bg-[#7B1C1C] p-6 flex flex-col gap-6 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button onClick={() => setOpen(false)} className="text-white self-end">
              <X size={24} />
            </button>
            <Link href="/produits" className="text-white text-base">Nos produits</Link>
            <Link href="/#proxilait" className="text-white text-base">Proxilait</Link>
            <Link href="/#impact" className="text-white text-base">Impact</Link>
            <Link href="/#contact" className="text-white text-base">Contact</Link>
            <button className="mt-auto bg-[#5A8C1A] text-white rounded-md py-2">
              Nous contacter
            </button>
          </div>
        </div>
      )}

      {/* Hero produit */}
      <section
        className="relative pt-14 min-h-[92dvh] flex items-end overflow-hidden"
        style={{ background: prod.bg }}
      >
        {/* Image de fond floue */}
        {prod.image && (
          <div className="absolute inset-0 overflow-hidden">
            <Image
              src={prod.image}
              alt=""
              fill
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
                className="object-cover"
              />
            ) : (
              <div
                className="w-full h-full flex items-center justify-center"
                style={{ background: prod.bg }}
              >
                <span className="text-[130px] drop-shadow-xl leading-none">
                  {prod.emoji}
                </span>
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
            {/* Fil d'Ariane */}
            <Link
              href="/produits"
              className="flex items-center gap-2 text-[12px] text-[#7B1C1C]/50 hover:text-[#7B1C1C] transition-colors w-fit"
            >
              <ArrowLeft size={14} />
              Nos produits
            </Link>

            {/* Tags */}
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

            {/* Nom */}
            <div>
              <h1
                style={{ fontFamily: "var(--font-serif)" }}
                className="text-[40px] md:text-[52px] text-[#7B1C1C] leading-[1.1] mb-4"
              >
                {prod.name}
              </h1>
              <p className="text-[15px] text-[#5a3a2a] leading-relaxed max-w-md">
                {prod.desc}
              </p>
            </div>

            {/* Format */}
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#5A8C1A] shrink-0" />
              <span className="text-[13px] text-[#5A8C1A] font-medium tracking-wide">
                {prod.volume}
              </span>
            </div>

            {/* CTA inline */}
            <div className="flex gap-3 flex-wrap">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-[#7B1C1C] text-white rounded-xl px-6 py-3 text-[13px] font-medium cursor-pointer hover:bg-[#6a1717] transition-colors"
              >
                Commander
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-transparent text-[#7B1C1C] border border-[#7B1C1C]/30 rounded-xl px-6 py-3 text-[13px] font-medium cursor-pointer hover:bg-[#7B1C1C]/5 transition-colors"
              >
                Trouver un point de vente
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Highlights */}
      <section className="bg-white py-14 px-8 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-center gap-8 md:gap-0"
        >
          {/* Titre à gauche */}
          <div className="md:w-56 shrink-0 md:border-r md:border-[#7B1C1C]/10 md:pr-10">
            <div className="text-[10px] font-medium text-[#5A8C1A] tracking-[0.12em] uppercase mb-2">
              Pourquoi ce produit
            </div>
            <h2
              style={{ fontFamily: "var(--font-serif)" }}
              className="text-[24px] text-[#7B1C1C] leading-snug"
            >
              Ce qui le rend unique
            </h2>
          </div>

          {/* Items à droite */}
          <div className="flex-1 grid grid-cols-2 md:grid-cols-4 md:divide-x md:divide-[#7B1C1C]/8">
            {prod.highlights.map((h, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="flex flex-col gap-3 m-1 px-6 py-4 md:py-0 border-b border-[#7B1C1C]/8 md:border-b-0 md:last:border-b-0"
              >
                <span className="text-2xl">{h.icon}</span>
                <span
                  style={{ fontFamily: "var(--font-serif)" }}
                  className="text-[15px] text-[#7B1C1C] leading-snug"
                >
                  {h.label}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Produits similaires */}
      {related.length > 0 && (
        <section className="bg-[#F5F0E8] py-14 px-8 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <div className="text-[10px] font-medium text-[#5A8C1A] tracking-[0.12em] uppercase mb-2">
              {prod.category}
            </div>
            <h2
              style={{ fontFamily: "var(--font-serif)" }}
              className="text-[26px] text-[#7B1C1C]"
            >
              Dans la même gamme
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {related.map((r, i) => (
              <motion.div
                key={r.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <Link href={`/produits/${r.slug}`} className="group block">
                  <div className="bg-white rounded-3xl overflow-hidden shadow-[0_2px_16px_rgba(123,28,28,0.06)] hover:shadow-[0_12px_40px_rgba(123,28,28,0.13)] transition-all duration-300 group-hover:-translate-y-1">
                    <div
                      className="relative h-48 overflow-hidden"
                      style={{ background: r.bg }}
                    >
                      {r.image ? (
                        <Image
                          src={r.image}
                          alt={r.name}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <span className="text-[56px] group-hover:scale-110 transition-transform duration-300">
                            {r.emoji}
                          </span>
                        </div>
                      )}
                      {r.badge && (
                        <span
                          className="absolute top-3 left-3 text-white text-[10px] font-medium rounded-full px-3 py-1 z-10"
                          style={{ background: r.badgeBg }}
                        >
                          {r.badge}
                        </span>
                      )}
                    </div>
                    <div className="p-5 flex items-center justify-between">
                      <div>
                        <div
                          style={{ fontFamily: "var(--font-serif)" }}
                          className="text-[16px] text-[#7B1C1C] font-semibold"
                        >
                          {r.name}
                        </div>
                        <div className="flex items-center gap-1.5 mt-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#5A8C1A]" />
                          <span className="text-[11px] text-[#5A8C1A] font-medium">
                            {r.volume}
                          </span>
                        </div>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-[#F5F0E8] flex items-center justify-center text-[#7B1C1C] group-hover:bg-[#7B1C1C] group-hover:text-white transition-colors duration-200 shrink-0">
                        →
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="bg-[#E87020] py-12 px-8 md:px-10 flex items-center justify-between gap-8 flex-col md:flex-row">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2
            style={{ fontFamily: "var(--font-serif)" }}
            className="text-[28px] text-white mb-2"
          >
            Envie de goûter nos produits ?
          </h2>
          <p className="text-[14px] text-white/80">
            Contactez-nous pour passer commande ou trouver le point de vente le
            plus proche.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-3 w-full md:w-auto"
        >
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full sm:w-52 bg-white text-[#E87020] rounded-lg px-6 py-3 text-[13px] font-medium cursor-pointer"
          >
            Nous contacter
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full sm:w-52 bg-transparent text-white border-2 border-white/60 rounded-lg px-6 py-3 text-[13px] font-medium cursor-pointer"
          >
            Voir tous les produits
          </motion.button>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2C1A0E] py-9 px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-7">
          <div>
            <div
              style={{ fontFamily: "var(--font-serif)" }}
              className="text-xl text-white mb-2"
            >
              A'mansi
            </div>
            <p className="text-xs text-white/45 leading-relaxed">
              Fromagerie nigérienne engagée dans la valorisation du lait local.
              Transformation, distribution et innovation numérique au service de
              la filière.
            </p>
          </div>
          <div>
            <div className="text-[11px] font-medium text-white/70 tracking-widest uppercase mb-3">
              Navigation
            </div>
            <div className="flex flex-col gap-1.5">
              {[
                { label: "À propos", href: "/#apropos" },
                { label: "Nos produits", href: "/produits" },
                { label: "Proxilait", href: "/#proxilait" },
                { label: "Impact", href: "/#impact" },
              ].map((l) => (
                <Link
                  key={l.label}
                  href={l.href}
                  className="text-xs text-white/40 hover:text-white/70 transition-colors"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <div className="text-[11px] font-medium text-white/70 tracking-widest uppercase mb-3">
              Proxilait
            </div>
            <div className="flex flex-col gap-1.5">
              {["Éleveurs", "Transformateurs", "Distributeurs", "Consommateurs"].map((l) => (
                <span
                  key={l}
                  className="text-xs text-white/40 hover:text-white/70 transition-colors cursor-pointer"
                >
                  {l}
                </span>
              ))}
            </div>
          </div>
          <div>
            <div className="text-[11px] font-medium text-white/70 tracking-widest uppercase mb-3">
              Contact
            </div>
            <div className="flex flex-col gap-1.5">
              {["Niamey, Niger", "societeamansi@gmail.com", "+227 87 51 11 11", "Recrutement"].map(
                (l) => (
                  <span
                    key={l}
                    className="text-xs text-white/40 hover:text-white/70 transition-colors cursor-pointer"
                  >
                    {l}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 pt-4 flex justify-center">
          <span className="text-[11px] text-white/30">
            © 2025 A'mansi Fromagerie. Tous droits réservés.
          </span>
        </div>
      </footer>
    </div>
  );
}
