"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Produits() {
  const [open, setOpen] = useState(false);

  const products = {
    laitFrais: [
      {
        name: "Lait entier",
        desc: "Lait frais pasteurisé, riche en matières grasses",
        volume: "1L, 500ml",
        image: "/images/lait-frais-entier.png",
        bg: "#F0F8FF",
      },
      {
        name: "Lait demi-écrémé",
        desc: "Lait frais pasteurisé, allégé en matières grasses",
        volume: "1L, 500ml",
        emoji: "🥛",
        bg: "#F5FCFF",
      },
      {
        name: "Lait caillé",
        desc: "Lait fermenté naturellement, riche en probiotiques",
        volume: "500ml, 250ml",
        emoji: "🫙",
        bg: "#FFF5F5",
      },
    ],
    yaourts: [
      {
        name: "Yaourt nature",
        desc: "Yaourt au lait local, doux et naturellement fermenté",
        volume: "125g, 1kg",
        image: "/images/yaourt-sucre.png",
        bg: "#F0F8FF",
        badge: "Phare",
        badgeBg: "#E87020",
      },
      {
        name: "Yaourt vanille",
        desc: "Yaourt aromatisé à la vanille naturelle",
        volume: "125g",
        emoji: "🍦",
        bg: "#FFFDF0",
      },
      {
        name: "Yaourt mangue",
        desc: "Yaourt aux fruits locaux, saveur mangue",
        volume: "125g",
        emoji: "🥭",
        bg: "#FFF5E6",
      },
      {
        name: "Yaourt bissap",
        desc: "Yaourt à l'hibiscus, saveur traditionnelle",
        volume: "125g",
        emoji: "🌺",
        bg: "#FFF0F5",
      },
    ],
    fromages: [
      {
        name: "Tchoukou fin",
        desc: "Fromage frais local au lait entier, texture crémeuse",
        volume: "200g, 500g",
        image: "/images/toukou-fin.png",
        bg: "#FFF8F0",
        badge: "Phare",
        badgeBg: "#E87020",
      },
      {
        name: "Fromage frais sucré",
        desc: "Fromage frais doux et authentique au lait local",
        volume: "150g",
        image: "/images/fromage-frais-sucre.png",
        bg: "#FFFDF0",
      },
      {
        name: "Fromage à pâte molle",
        desc: "Fromage affiné, saveur douce et fondante",
        volume: "250g",
        emoji: "🧀",
        bg: "#FFF8F0",
      },
    ],
    derives: [
      {
        name: "Hindirmou",
        desc: "Beurre de lait traditionnel nigérien, riche et savoureux",
        volume: "250g, 500g",
        image: "/images/kindirmou.png",
        bg: "#FFFDF0",
        badge: "Nouveau",
        badgeBg: "#5A8C1A",
      },
      {
        name: "Crème fraîche",
        desc: "Crème épaisse au lait local, idéale pour cuisiner",
        volume: "200ml",
        emoji: "🥄",
        bg: "#FFF8F0",
      },
      {
        name: "Beurre clarifié",
        desc: "Beurre purifié traditionnel, longue conservation",
        volume: "500g",
        emoji: "🧈",
        bg: "#FFF5E6",
      },
    ],
  };

  type Product = {
    name: string;
    desc: string;
    volume: string;
    image?: string;
    emoji?: string;
    bg: string;
    badge?: string;
    badgeBg?: string;
  };

  const ProductCard = ({ prod, i }: { prod: Product; i: number }) => (
    <motion.div
      key={i}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: i * 0.1 }}
      whileHover={{ y: -4 }}
      className="bg-white rounded-2xl overflow-hidden border border-[#7B1C1C]/10 cursor-pointer shadow-sm hover:shadow-md transition-shadow"
    >
      <div
        className="h-[160px] flex items-center justify-center text-[50px] relative overflow-hidden"
        style={{ background: prod.bg }}
      >
        {prod.image ? (
          <Image
            src={prod.image}
            alt={prod.name}
            fill
            className="object-cover"
          />
        ) : (
          <span className="text-[50px]">{prod.emoji}</span>
        )}
        {prod.badge && (
          <span
            className="absolute top-2.5 right-2.5 text-white text-[9px] font-medium rounded-full px-2.5 py-1 tracking-wide z-10"
            style={{ background: prod.badgeBg }}
          >
            {prod.badge}
          </span>
        )}
      </div>
      <div className="p-4">
        <div
          style={{ fontFamily: "var(--font-serif)" }}
          className="text-[16px] text-[#7B1C1C] font-semibold mb-1"
        >
          {prod.name}
        </div>
        <div className="text-[11px] text-[#7a5a4a] leading-snug mb-3">
          {prod.desc}
        </div>
        <div className="text-[10px] text-[#5A8C1A] font-medium tracking-wide">
          Format : {prod.volume}
        </div>
      </div>
    </motion.div>
  );

  const SectionHeader = ({
    tag,
    title,
    desc,
  }: {
    tag: string;
    title: string;
    desc: string;
  }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mb-8"
    >
      <div className="text-[10px] font-medium text-[#5A8C1A] tracking-[0.12em] uppercase mb-2">
        {tag}
      </div>
      <h2
        style={{ fontFamily: "var(--font-serif)" }}
        className="text-[28px] text-[#7B1C1C] leading-tight"
      >
        {title}
      </h2>
      <p className="text-[14px] text-[#5a3a2a] mt-3 max-w-2xl">{desc}</p>
    </motion.div>
  );

  return (
    <div
      className="min-h-screen max-w-460 mx-auto bg-[#F5F0E8]"
      style={{ fontFamily: "var(--font-sans)" }}
    >
      {/* Navigation — identique à la page d'accueil */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#7B1C1C]/75 backdrop-blur-lg flex items-center justify-between px-8 h-14 max-w-460 mx-auto shadow-[0_4px_20px_rgba(0,0,0,0.2)]">
        <a href="/" className="flex items-center gap-3">
          <div className="relative w-14 h-10">
            <Image
              src="/images/logo.jpg"
              alt="Logo"
              fill
              className="rounded-md object-cover"
            />
          </div>
        </a>
        <ul className="hidden md:flex gap-7 list-none">
          {[
            { label: "Nos produits", href: "/produits" },
            { label: "Proxilait", href: "/#proxilait" },
            { label: "Impact", href: "/#impact" },
            { label: "Contact", href: "/#contact" },
          ].map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="text-white/85 text-[13px] tracking-wide hover:text-white transition-colors"
              >
                {item.label}
              </a>
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
            <button
              onClick={() => setOpen(false)}
              className="text-white self-end"
            >
              <X size={24} />
            </button>
            <a href="/produits" className="text-white text-base">
              Nos produits
            </a>
            <a href="/#proxilait" className="text-white text-base">
              Proxilait
            </a>
            <a href="/#impact" className="text-white text-base">
              Impact
            </a>
            <a href="/#contact" className="text-white text-base">
              Contact
            </a>
            <button className="mt-auto bg-[#5A8C1A] text-white rounded-md py-2">
              Nous contacter
            </button>
          </div>
        </div>
      )}

      {/* Hero */}
      <section className="relative max-h-260 h-[calc(100dvh-0px)] flex items-end overflow-hidden">
        {/* Background image */}
        <Image
          src="/images/panier-table.png"
          alt=""
          fill
          className="object-cover object-center"
        />

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-[2] px-8 md:px-10 pb-12 max-w-7xl mx-auto w-full"
        >
          <div className="backdrop-blur-md bg-black/25 border border-white/10 rounded-2xl p-6 max-w-lg">
            <span className="inline-block bg-white/15 border border-white/30 text-white/90 text-[10px] font-medium tracking-[0.12em] uppercase rounded-full px-3.5 py-1 mb-4">
              Catalogue complet
            </span>
            <h1
              style={{ fontFamily: "var(--font-serif)" }}
              className="text-[38px] md:text-[48px] font-semibold text-white leading-[1.15] mb-3"
            >
              Nos <em className="text-[#FAD060] not-italic">produits</em>{" "}
              laitiers
            </h1>
            <p className="text-[14px] text-white/75 leading-relaxed max-w-[480px]">
              Découvrez toute notre gamme de produits laitiers authentiques,
              fabriqués à partir du lait local nigérien de qualité supérieure.
            </p>

            {/* Compteurs rapides */}
            <div className="flex gap-6 mt-6">
              {[
                { val: "13+", label: "Produits" },
                { val: "100%", label: "Lait local" },
                { val: "4", label: "Catégories" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-[#FAD060] text-lg font-bold leading-none">
                    {stat.val}
                  </div>
                  <div className="text-[10px] text-white/55 mt-0.5">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Ancres navigation catégories */}
      <div className="bg-white border-b border-[#7B1C1C]/10 sticky top-14 z-40">
        <div className="flex gap-0 overflow-x-auto scrollbar-none px-8 md:px-10">
          {[
            { label: "Lait frais", href: "#lait-frais" },
            { label: "Yaourts", href: "#yaourts" },
            { label: "Fromages", href: "#fromages" },
            { label: "Produits dérivés", href: "#derives" },
          ].map((cat) => (
            <a
              key={cat.label}
              href={cat.href}
              className="shrink-0 px-5 py-3.5 text-[12px] font-medium text-[#7B1C1C]/60 hover:text-[#7B1C1C] border-b-2 border-transparent hover:border-[#7B1C1C] transition-all whitespace-nowrap"
            >
              {cat.label}
            </a>
          ))}
        </div>
      </div>

      {/* Lait Frais */}
      <section id="lait-frais" className="bg-white py-12 px-8 md:px-10">
        <SectionHeader
          tag="Lait frais"
          title="Lait frais pasteurisé"
          desc="Notre lait frais est collecté quotidiennement auprès de nos éleveurs partenaires et pasteurisé selon les normes les plus strictes pour garantir qualité et fraîcheur."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.laitFrais.map((prod, i) => (
            <ProductCard key={i} prod={prod} i={i} />
          ))}
        </div>
      </section>

      {/* Yaourts */}
      <section id="yaourts" className="bg-[#F5F0E8] py-12 px-8 md:px-10">
        <SectionHeader
          tag="Yaourts"
          title="Yaourts et produits fermentés"
          desc="Nos yaourts sont fabriqués avec du lait local et des ferments naturels. Disponibles nature ou aromatisés avec des saveurs locales authentiques."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {products.yaourts.map((prod, i) => (
            <ProductCard key={i} prod={prod} i={i} />
          ))}
        </div>
      </section>

      {/* Fromages */}
      <section id="fromages" className="bg-white py-12 px-8 md:px-10">
        <SectionHeader
          tag="Fromages"
          title="Fromages traditionnels"
          desc="Nos fromages sont élaborés selon des recettes traditionnelles nigériennes, avec le savoir-faire transmis de génération en génération."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.fromages.map((prod, i) => (
            <ProductCard key={i} prod={prod} i={i} />
          ))}
        </div>
      </section>

      {/* Produits dérivés */}
      <section id="derives" className="bg-[#F5F0E8] py-12 px-8 md:px-10">
        <SectionHeader
          tag="Produits dérivés"
          title="Beurre et produits transformés"
          desc="Découvrez nos produits dérivés du lait : beurre traditionnel, crème fraîche et autres spécialités locales."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.derives.map((prod, i) => (
            <ProductCard key={i} prod={prod} i={i} />
          ))}
        </div>
      </section>

      {/* Qualité & Processus */}
      <section className="bg-[#7B1C1C] py-14 px-8 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <div className="text-[10px] font-medium text-white/50 tracking-[0.12em] uppercase mb-2">
            Notre engagement qualité
          </div>
          <h2
            style={{ fontFamily: "var(--font-serif)" }}
            className="text-[28px] md:text-[32px] text-white"
          >
            Du lait à votre table : un processus maîtrisé
          </h2>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {[
            {
              num: "01",
              title: "Collecte",
              desc: "Collecte quotidienne du lait frais auprès de nos éleveurs partenaires certifiés",
              emoji: "🐄",
            },
            {
              num: "02",
              title: "Contrôle",
              desc: "Analyse et contrôle qualité à chaque étape de la production",
              emoji: "🔬",
            },
            {
              num: "03",
              title: "Transformation",
              desc: "Transformation selon des processus rigoureux et des recettes traditionnelles",
              emoji: "⚗️",
            },
            {
              num: "04",
              title: "Distribution",
              desc: "Livraison rapide pour garantir la fraîcheur jusqu'au consommateur",
              emoji: "🚚",
            },
          ].map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <div className="w-14 h-14 rounded-full bg-white/10 border border-white/20 mx-auto mb-4 flex items-center justify-center text-2xl">
                {step.emoji}
              </div>
              <div
                style={{ fontFamily: "var(--font-serif)" }}
                className="text-[#FAD060] text-[11px] font-medium tracking-[0.12em] mb-1"
              >
                {step.num}
              </div>
              <div
                style={{ fontFamily: "var(--font-serif)" }}
                className="text-white text-[17px] mb-2"
              >
                {step.title}
              </div>
              <p className="text-[12px] text-white/60 leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Où trouver nos produits */}
      <section className="bg-white py-14 px-8 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <div className="text-[10px] font-medium text-[#5A8C1A] tracking-[0.12em] uppercase mb-2">
            Points de vente
          </div>
          <h2
            style={{ fontFamily: "var(--font-serif)" }}
            className="text-[28px] text-[#7B1C1C] mb-4"
          >
            Où trouver nos produits
          </h2>
          <p className="text-[14px] text-[#5a3a2a] max-w-xl mx-auto leading-relaxed">
            Nos produits sont disponibles dans de nombreux points de vente à
            travers le Niger, notamment à Niamey et dans les principales
            régions.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-4xl mx-auto">
          {[
            {
              title: "Supermarchés",
              desc: "Casino, Sonichar, Leader Price",
              icon: "🏬",
            },
            {
              title: "Marchés locaux",
              desc: "Katako, Grand Marché, Wadata",
              icon: "🛒",
            },
            {
              title: "Boutiques partenaires",
              desc: "Épiceries et boutiques de quartier",
              icon: "🏪",
            },
          ].map((loc, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="bg-[#F5F0E8] rounded-2xl p-6 text-center border border-[#7B1C1C]/10 cursor-pointer transition-shadow hover:shadow-md"
            >
              <div className="text-4xl mb-3">{loc.icon}</div>
              <div
                style={{ fontFamily: "var(--font-serif)" }}
                className="text-[18px] text-[#7B1C1C] font-semibold mb-2"
              >
                {loc.title}
              </div>
              <div className="text-[13px] text-[#7a5a4a] leading-relaxed">
                {loc.desc}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section
        id="contact"
        className="bg-[#E87020] py-12 px-8 md:px-10 flex items-center justify-between gap-8 flex-col md:flex-row"
      >
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
            Trouver un point de vente
          </motion.button>
        </motion.div>
      </section>

      {/* Footer — identique à la page d'accueil */}
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
              <a
                href="/#apropos"
                className="text-xs text-white/40 hover:text-white/70 transition-colors"
              >
                À propos
              </a>
              <a
                href="/produits"
                className="text-xs text-white hover:text-white/70 transition-colors"
              >
                Nos produits
              </a>
              <a
                href="/#proxilait"
                className="text-xs text-white/40 hover:text-white/70 transition-colors"
              >
                Proxilait
              </a>
              <a
                href="/#impact"
                className="text-xs text-white/40 hover:text-white/70 transition-colors"
              >
                Impact
              </a>
            </div>
          </div>
          <div>
            <div className="text-[11px] font-medium text-white/70 tracking-widest uppercase mb-3">
              Proxilait
            </div>
            <div className="flex flex-col gap-1.5">
              {[
                "Éleveurs",
                "Transformateurs",
                "Distributeurs",
                "Consommateurs",
              ].map((l) => (
                <a
                  key={l}
                  className="text-xs text-white/40 hover:text-white/70 transition-colors cursor-pointer"
                >
                  {l}
                </a>
              ))}
            </div>
          </div>
          <div>
            <div className="text-[11px] font-medium text-white/70 tracking-widest uppercase mb-3">
              Contact
            </div>
            <div className="flex flex-col gap-1.5">
              {[
                "Niamey, Niger",
                "societeamansi@gmail.com",
                "+227 87 51 11 11",
                "Recrutement",
              ].map((l) => (
                <a
                  key={l}
                  className="text-xs text-white/40 hover:text-white/70 transition-colors cursor-pointer"
                >
                  {l}
                </a>
              ))}
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
