"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

export default function Home() {
  const [open, setOpen] = useState(false);

  const [index, setIndex] = useState(0);

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

  const getCardStyle = (i: number) => {
    const total = products.length;
    const diff = (i - index + total) % total;
    if (diff === 0) return "translate-x-0 rotate-0 scale-100 opacity-100 z-30";
    if (diff === total - 1)
      return "-translate-x-7 -rotate-3 scale-[0.96] opacity-60 z-20";
    if (diff === 1)
      return "translate-x-7 rotate-3 scale-[0.96] opacity-60 z-10";
    return "opacity-0 pointer-events-none z-0";
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((p) => (p + 1) % products.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [products.length]);

  return (
    <div
      className="min-h-screen max-w-460 mx-auto bg-[#F5F0E8]"
      style={{ fontFamily: "var(--font-sans)" }}
    >
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#7B1C1C]/75 backdrop-blur-lg flex items-center justify-between px-8 h-14 max-w-460 mx-auto shadow-[0_4px_20px_rgba(0,0,0,0.2)]">
        <div className="flex items-center gap-3">
          <div className="relative w-14 h-10">
            <Image
              src="/images/logo.jpg"
              alt="Logo"
              fill
              className="rounded-md"
            />
          </div>
        </div>
        <ul className="hidden md:flex gap-7 list-none">
          <li>
            <a
              href="#produits"
              className="text-white/85 text-[13px] tracking-wide hover:text-white transition-colors"
            >
              Nos produits
            </a>
          </li>
          <li>
            <a
              href="#proxilait"
              className="text-white/85 text-[13px] tracking-wide hover:text-white transition-colors"
            >
              Proxilait
            </a>
          </li>
          <li>
            <a
              href="#impact"
              className="text-white/85 text-[13px] tracking-wide hover:text-white transition-colors"
            >
              Impact
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="text-white/85 text-[13px] tracking-wide hover:text-white transition-colors"
            >
              Contact
            </a>
          </li>
        </ul>
        <button className="hidden md:flex bg-[#90C528] text-white border-none rounded-md px-5 py-2 text-[13px] font-medium cursor-pointer hover:bg-[#3B6D11] transition-colors">
          Nous contacter
        </button>
        <button onClick={() => setOpen(true)} className="md:hidden text-white">
          <Menu size={24} />
        </button>
      </nav>

      {open && (
        <div
          className="fixed inset-0 z-50 bg-black/30 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        >
          {/* panel */}
          <div
            className="absolute right-0 top-0 h-full w-72 bg-[#7B1C1C] p-6 flex flex-col gap-6 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* close */}
            <button
              onClick={() => setOpen(false)}
              className="text-white self-end"
            >
              <X size={24} />
            </button>

            {/* links */}
            <a href="#produits" className="text-white text-base">
              Nos produits
            </a>
            <a href="#proxilait" className="text-white text-base">
              Proxilait
            </a>
            <a href="#impact" className="text-white text-base">
              Impact
            </a>
            <a href="#contact" className="text-white text-base">
              Contact
            </a>

            {/* CTA */}
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
          src="/images/a-mansi-hero.png"
          alt="Hero"
          fill
          className="object-cover object-[50%_70%]"
        />

        {/* Overlay simple pour lisibilité */}
        <div className="absolute inset-0 bg-black/55" />

        {/* Content */}
        <div className="relative z-10 px-10 pb-12 w-full lg:max-w-170 text-white">
          <span className="inline-block bg-white/20 rounded-full px-3 py-1 text-[10px] sm:text-xs uppercase mb-4">
            Laiterie Fromagerie
          </span>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.1] mb-3">
            Le bon goût local
            <br />
            <strong className="text-yellow-300 font-pumpkin">A'mansi</strong>
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-white/80 mb-6 max-w-105">
            Transformation et commercialisation de produits laitiers nigériens
            100% naturels, directement issus des éleveurs locaux.
          </p>

          <div className="flex gap-3 flex-wrap sm:flex-nowrap">
            <button
              className="
                w-full md:w-1/2 bg-white/75 text-black rounded-lg px-6 py-3 text-[13px]
                transition-all duration-200
                hover:bg-white
                active:scale-95 cursor-pointer
              "
            >
              Découvrir nos produits
            </button>

            <button
              className="
                w-full md:w-1/2 bg-[#7B1C1C]/75 text-white
                rounded-lg px-6 py-3 text-[13px]
                transition-all duration-200
                hover:bg-[#7B1C1C]
                active:scale-95 cursor-pointer
              "
            >
              Découvrir Proxilait
            </button>
          </div>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
            {/* Label */}
            <div className="flex items-center justify-center md:justify-end text-xs sm:text-sm md:text-base text-white/70 text-center md:text-right">
              Disponible bientôt sur
            </div>

            {/* Store buttons */}
            <div className="flex justify-center items-center gap-3 w-full">
              {/* App Store */}
              <div className="w-full flex items-center gap-2 bg-white/10 hover:bg-white/20 transition px-3 py-2 rounded-lg cursor-pointer">
                <div className="relative w-6 h-6 shrink-0">
                  <Image
                    src="/images/appstore.png"
                    alt="App Store"
                    fill
                    className=""
                  />
                </div>

                <div className="flex flex-col leading-none">
                  <span className="text-[9px] text-white/60">Download on</span>
                  <span className="text-xs text-white font-medium">
                    App Store
                  </span>
                </div>
              </div>

              {/* Google Play */}
              <div className="w-full flex items-center gap-2 bg-white/10 hover:bg-white/20 transition px-3 py-2 rounded-lg cursor-pointer">
                <div className="relative w-6 h-6 shrink-0">
                  <Image
                    src="/images/play-store.png"
                    alt="Google Play"
                    fill
                    className="object-contain"
                  />
                </div>

                <div className="flex flex-col leading-none">
                  <span className="text-[9px] text-white/60">Get it on</span>
                  <span className="text-xs text-white font-medium">
                    Google Play
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Cards */}
        <div className="hidden lg:flex absolute right-10 bottom-12 z-10 flex-col gap-3">
          <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-xl px-5 py-3 text-center shadow-lg w-52">
            <div className="text-yellow-300 text-2xl font-bold leading-none">
              20+
            </div>
            <div className="text-xs text-white/90 mt-1 font-medium">
              Fournisseurs
            </div>
          </div>

          <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-xl px-5 py-3 text-center shadow-lg w-52">
            <div className="text-yellow-300 text-xl font-semibold">8</div>
            <div className="text-xs text-white/80">Produits dérivés</div>
          </div>

          <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-xl px-5 py-3 text-center shadow-lg w-52">
            <div className="text-yellow-300 text-xl font-semibold">100%</div>
            <div className="text-xs text-white/80">Lait local</div>
          </div>
        </div>

        <div className="lg:hidden absolute top-20 right-4 z-10 flex flex-col gap-2">
          <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-full px-3 py-1 text-center">
            <span className="text-yellow-300 text-sm font-bold">20+</span>
            <span className="text-[10px] text-white/90 ml-1">Fournisseurs</span>
          </div>

          <div className="bg-white/15 backdrop-blur-sm border border-white/20 rounded-full px-3 py-1 text-center">
            <span className="text-yellow-300 text-sm font-bold">8</span>
            <span className="text-[10px] text-white/80 ml-1">Produits</span>
          </div>

          <div className="bg-white/15 backdrop-blur-sm border border-white/20 rounded-full px-3 py-1 text-center">
            <span className="text-yellow-300 text-sm font-bold">100%</span>
            <span className="text-[10px] text-white/80 ml-1">Local</span>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section
        id="apropos"
        className="relative bg-[#FDF8F2] py-20 px-6 md:px-10 overflow-hidden"
      >
        {/* décor fond */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-[#7B1C1C]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-[#5A8C1A]/10 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Texte */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-xl"
          >
            <span className="inline-flex items-center gap-2 text-[11px] font-medium text-[#5A8C1A] tracking-[0.18em] uppercase mb-4 border border-[#5A8C1A] px-3 py-1 rounded-lg">
              <span className="w-2 h-2 rounded-full bg-[#5A8C1A]" />
              Notre vision
            </span>

            <h2
              style={{ fontFamily: "var(--font-serif)" }}
              className="text-3xl md:text-4xl lg:text-5xl text-[#7B1C1C] leading-tight mb-6"
            >
              Redonner sa juste valeur
              <br />
              au lait local nigérien
            </h2>

            <p className="text-base md:text-lg text-[#5A3A2A] leading-relaxed mb-8">
              A’mansi construit une filière laitière plus équitable, plus
              moderne et plus durable. Nous collectons, transformons et
              valorisons le lait local pour offrir aux familles nigériennes des
              produits sains, naturels et de confiance.
            </p>
          </motion.div>

          {/* cartes valeurs */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-5"
          >
            {[
              {
                icon: "🌿",
                title: "Naturel & sain",
                desc: "Des produits laitiers purs, issus d’un lait frais collecté localement.",
              },
              {
                icon: "🤝",
                title: "Impact local",
                desc: "Nous renforçons les revenus des éleveurs et des acteurs de la filière.",
              },
              {
                icon: "🛡️",
                title: "Confiance",
                desc: "Traçabilité, hygiène et exigence qualité à chaque étape.",
              },
              {
                icon: "📱",
                title: "Innovation",
                desc: "Le numérique au service d’une filière moderne et connectée.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.2 }}
                className="group bg-white/80 backdrop-blur-md border border-[#7B1C1C]/10 rounded-3xl p-6 shadow-sm hover:shadow-xl transition-all cursor-pointer"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#F5F0E8] flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>

                <h3 className="text-lg font-semibold text-[#7B1C1C] mb-2">
                  {item.title}
                </h3>

                <p className="text-sm text-[#7A5A4A] leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Produits */}
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
            <h2
              style={{ fontFamily: "var(--font-serif)" }}
              className="text-[28px] text-[#7B1C1C] leading-tight text-center mb-4"
            >
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

        {/* Contenu principal : stack + description */}
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
                  {/* Contenu visible sur mobile uniquement */}
                  <div className="p-4 lg:hidden">
                    <h3
                      style={{ fontFamily: "var(--font-serif)" }}
                      className="text-base font-semibold text-[#7B1C1C]"
                    >
                      {p.name}
                    </h3>
                    <p className="text-xs text-[#7A5A4A] mt-1 leading-relaxed">
                      {p.desc}
                    </p>
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

            <h3
              style={{ fontFamily: "var(--font-serif)" }}
              className="text-3xl text-[#7B1C1C] leading-tight"
            >
              {products[index].name}
            </h3>

            <div className="w-8 h-px bg-[#7B1C1C]/25" />

            <p className="text-sm text-[#7A5A4A] leading-relaxed">
              {products[index].desc}
            </p>

            <p className="text-xs text-[#7B1C1C]/45 italic">
              {products[index].meta}
            </p>

            {/* Navigation */}
            <div className="flex items-center gap-3 mt-2">
              <button
                onClick={() =>
                  setIndex((p) => (p - 1 + products.length) % products.length)
                }
                className="w-10 h-10 rounded-full border border-[#7B1C1C]/20 text-[#7B1C1C] flex items-center justify-center hover:bg-[#7B1C1C]/5 transition-colors"
              >
                ←
              </button>

              {/* Dots */}
              <div className="flex gap-1.5 items-center">
                {products.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setIndex(i)}
                    className={`rounded-full transition-all duration-200 ${
                      i === index
                        ? "w-2 h-2 bg-[#7B1C1C] scale-125"
                        : "w-1.5 h-1.5 bg-[#7B1C1C]/20"
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

        {/* Hint */}
        <p className="text-center text-[11px] text-[#7B1C1C]/45 mt-8 tracking-wide">
          Cliquez sur une carte ou naviguez avec les flèches
        </p>

        <div className="flex justify-center mt-6">
          <a
            href="#tous-produits"
            className="bg-[#7B1C1C] text-white px-6 py-3 rounded-lg text-[13px] font-medium hover:bg-[#6a1717] transition-colors"
          >
            Voir tous les produits
          </a>
        </div>
      </section>

      {/* Chaîne de valeur */}
      <section className="bg-[#7B1C1C] py-12 px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-9 text-center max-w-2xl mx-auto"
        >
          <div className="text-[10px] font-medium text-white/50 tracking-[0.12em] uppercase mb-2">
            De la source à la table
          </div>
          <h2
            style={{ fontFamily: "var(--font-serif)" }}
            className="text-[28px] text-white mb-1.5"
          >
            Une chaîne de valeur intégrée
          </h2>
          <p className="text-[13px] text-white/65">
            Chaque maillon est suivi, valorisé et connecté grâce à Proxilait
          </p>
        </motion.div>

        {(() => {
          const chainSteps = [
            {
              emoji: "🐄",
              name: "Éleveurs",
              sub: "Collecte du lait brut",
              iconBg: "rgba(90,140,26,0.4)",
              badge: "Origine",
              badgeBg: "rgba(90,140,26,0.35)",
              badgeColor: "#A8E060",
              detail:
                "20+ éleveurs partenaires dans les régions de Tillabéri et Dosso. Collecte quotidienne avec suivi qualité sur Proxilait.",
            },
            {
              emoji: "⚗️",
              name: "Transformation",
              sub: "Atelier A'mansi",
              iconBg: "rgba(232,112,32,0.4)",
              badge: "Production",
              badgeBg: "rgba(232,112,32,0.3)",
              badgeColor: "#F4A460",
              detail:
                "Transformation artisanale en fromage, yaourt, hindirmou et lait fermenté selon les normes sanitaires locales.",
            },
            {
              emoji: "✅",
              name: "Contrôle qualité",
              sub: "Traçabilité & normes",
              iconBg: "rgba(255,255,255,0.12)",
              badge: "Qualité",
              badgeBg: "rgba(255,255,255,0.1)",
              badgeColor: "rgba(255,255,255,0.75)",
              detail:
                "Chaque lot est référencé. Les consommateurs peuvent scanner le produit pour tracer son origine.",
            },
            {
              emoji: "🚚",
              name: "Distribution",
              sub: "Niamey et régions",
              iconBg: "rgba(250,200,80,0.25)",
              badge: "Logistique",
              badgeBg: "rgba(250,200,80,0.2)",
              badgeColor: "#FAD060",
              detail:
                "Livraisons planifiées via Proxilait. Couverture de Niamey et des régions environnantes.",
            },
            {
              emoji: "🏪",
              name: "Points de vente",
              sub: "Marchés & épiceries",
              iconBg: "rgba(255,255,255,0.12)",
              badge: "Retail",
              badgeBg: "rgba(255,255,255,0.1)",
              badgeColor: "rgba(255,255,255,0.75)",
              detail:
                "Présence dans les principaux marchés de Niamey et les épiceries de proximité.",
            },
            {
              emoji: "😊",
              name: "Consommateurs",
              sub: "Familles nigériennes",
              iconBg: "rgba(90,140,26,0.4)",
              badge: "Impact",
              badgeBg: "rgba(90,140,26,0.35)",
              badgeColor: "#A8E060",
              detail:
                "Des familles qui accèdent à des produits laitiers naturels, tracés et de qualité, à prix juste.",
            },
          ];

          return (
            <div className="relative">
              {/* ligne centrale (desktop only) */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-white/10" />

              <div className="flex flex-col gap-10">
                {chainSteps.map((s, i) => {
                  const isLeft = i % 2 === 0;

                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.08 }}
                      className={`relative flex items-center w-full max-w-240 mx-auto ${
                        isLeft ? "md:justify-start" : "md:justify-end"
                      }`}
                    >
                      {/* connecteur point central */}
                      <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-white/30 shadow-[0_0_0_4px_rgba(255,255,255,0.08)]" />

                      {/* card */}
                      <div
                        className={`w-full md:w-[48%] bg-white/7 border border-white/12 rounded-2xl p-5 cursor-pointer
                        hover:bg-white/10 hover:border-white/25 transition-all duration-300
                        ${isLeft ? "md:mr-auto" : "md:ml-auto"}`}
                      >
                        <div className="flex items-start justify-between mb-3">
                          <div
                            className="w-11 h-11 rounded-xl flex items-center justify-center text-xl border border-white/20"
                            style={{ background: s.iconBg }}
                          >
                            {s.emoji}
                          </div>

                          <span className="text-[10px] text-white/30 font-medium">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                        </div>

                        <div className="text-[15px] font-medium text-white">
                          {s.name}
                        </div>

                        <div className="text-[11px] text-white/55 mt-1">
                          {s.sub}
                        </div>

                        <span
                          className="inline-block mt-3 text-[10px] px-2 py-0.5 rounded-full"
                          style={{
                            background: s.badgeBg,
                            color: s.badgeColor,
                          }}
                        >
                          {s.badge}
                        </span>

                        <p className="text-[11px] text-white/50 mt-3 leading-relaxed">
                          {s.detail}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          );
        })()}
      </section>

      {/* Proxilait */}
      <section
        id="proxilait"
        className="relative bg-[#FDF8F2] py-10 overflow-hidden"
      >
        {/* fond décoratif */}
        <div className="absolute top-0 left-0 w-40 h-40 bg-[#5A8C1A]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-52 h-52 bg-[#7B1C1C]/10 rounded-full blur-3xl" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative z-10"
        >
          {/* titre */}
          <div className="text-center mb-12">
            <h2
              style={{ fontFamily: "var(--font-serif)" }}
              className="text-3xl md:text-4xl lg:text-5xl text-[#7B1C1C] leading-tight"
            >
              Proxilait dans votre poche
            </h2>
          </div>

          {/* bannière style image */}
          <div className="relative overflow-hidden">
            {/* liserés or */}
            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[52%] bg-linear-to-r from-[#C9A227]/95 via-[#C9A227]/95 to-[#C9A227]/90 rotate-1 w-[150%] -ml-5 " />
            {/* bande verte */}
            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[52%] bg-linear-to-r from-[#0E5B44]/95 via-[#0B6B4F]/95 to-[#0A5A44]/90 -rotate-1 w-[150%] -ml-5" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 items-center gap-10 px-8 md:px-12 md:py-16">
              {/* gauche : texte */}
              <div className="drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]">
                <h3 className="text-2xl md:text-3xl font-bold uppercase leading-tight mb-6 text-[#5A3A2A] lg:text-white">
                  Votre laiterie préférée,
                  <br />
                  partout avec vous.
                </h3>

                <ul className="space-y-3 text-sm md:text-base text-[#5A3A2A] lg:text-white">
                  <li>- Commandes instantanées</li>
                  <li>- Suivi de livraison en temps réel</li>
                  <li>- Offres exclusives et fidélité</li>
                </ul>
              </div>

              {/* centre : téléphone */}
              <div className="relative flex justify-center">
                <motion.div
                  whileHover={{ y: -8, rotate: -2 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ duration: 0.3 }}
                  className="relative w-52 h-107.5 md:w-60 md:h-125 scale-170 md:scale-150 origin-center"
                >
                  <Image
                    src="/images/phone.png"
                    alt="Application Proxilait"
                    fill
                    className="object-contain"
                    loading="lazy"
                  />
                </motion.div>
              </div>

              {/* droite : QR */}
              <div className="flex flex-col items-center text-center mt-5 md:mt-0">
                <span className="text-xs uppercase tracking-widest lg:text-white text-[#7B1C1C] mb-2">
                  Disponible sur mobile
                </span>
                <div className="bg-white rounded-3xl shadow-xl border border-[#7B1C1C]/10">
                  <div className="relative w-44 h-44 md:w-44 md:h-44">
                    <Image
                      src="/images/qrcode_www.facebook.com.png"
                      alt="QR code Proxilait"
                      fill
                      className="object-contain rounded-3xl"
                      loading="lazy"
                    />
                  </div>
                </div>

                <p className="mt-6 lg:text-white text-[#7B1C1C] font-bold text-lg md:text-xl uppercase leading-tight tracking-[0.15em]">
                  Scannez pour
                  <br />
                  télécharger
                  <br />
                  maintenant
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Témoignages */}
      <section className="bg-white py-14 px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h2
            style={{ fontFamily: "var(--font-serif)" }}
            className="text-[28px] md:text-[32px] text-[#7B1C1C] leading-tight"
          >
            La parole à notre communauté
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            {
              text: "Depuis que je travaille avec A'mansi, mon lait est valorisé à sa juste valeur. Je suis fier que mon troupeau nourrisse les familles de Niamey.",
              name: "Adamou Moussa",
              role: "Éleveur — région de Tillabéri",
              avatar: "A",
              avatarBg: "#E87020",
              featured: true,
            },
            {
              text: "Le yaourt A'mansi est le seul que j'achète. On sent le vrai lait, sans additifs. Mes enfants adorent.",
              name: "Fatouma Issa",
              role: "Cliente — Niamey",
              avatar: "F",
              avatarBg: "#5A8C1A",
              featured: false,
            },
            {
              text: "J'approvisionne mon épicerie en produits A'mansi depuis 2 ans. La qualité est constante et la livraison fiable.",
              name: "Mahamane Sani",
              role: "Distributeur — Marché de Katako",
              avatar: "M",
              avatarBg: "#7B1C1C",
              featured: false,
            },
          ].map((temo, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className={`relative rounded-[20px] p-6 flex flex-col ${
                temo.featured
                  ? "bg-[#7B1C1C] border-transparent"
                  : "bg-[#FDF8F2] border border-[#7B1C1C]/10"
              }`}
            >
              {/* Guillemet décoratif */}
              <span
                style={{ fontFamily: "var(--font-serif)" }}
                className={`text-[56px] leading-none mb-[-12px] block ${
                  temo.featured ? "text-white/20" : "text-[#7B1C1C]/12"
                }`}
              >
                "
              </span>

              {/* Étoiles */}
              <div className="flex gap-1 mb-3">
                {Array.from({ length: 5 }).map((_, s) => (
                  <svg
                    key={s}
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill={temo.featured ? "#FAD060" : "#E87020"}
                  >
                    <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
                  </svg>
                ))}
              </div>

              {/* Citation */}
              <p
                style={{ fontFamily: "var(--font-serif)" }}
                className={`text-[14px] leading-[1.75] italic mb-5 flex-1 ${
                  temo.featured ? "text-white/90" : "text-[#2C1A0E]"
                }`}
              >
                "{temo.text}"
              </p>

              {/* Séparateur */}
              <div
                className={`w-8 h-px mb-4 ${
                  temo.featured ? "bg-white/25" : "bg-[#7B1C1C]/20"
                }`}
              />

              {/* Auteur */}
              <div className="flex items-center gap-2.5">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-[14px] font-medium text-white shrink-0"
                  style={{ background: temo.avatarBg }}
                >
                  {temo.avatar}
                </div>
                <div>
                  <div
                    className={`text-xs font-medium ${
                      temo.featured ? "text-[#FAD060]" : "text-[#7B1C1C]"
                    }`}
                  >
                    {temo.name}
                  </div>
                  <div
                    className={`text-[10px] mt-0.5 ${
                      temo.featured ? "text-white/55" : "text-[#9a7a6a]"
                    }`}
                  >
                    {temo.role}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Barre de confiance */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 flex items-center justify-center gap-5 flex-wrap"
        >
          <div className="flex items-center gap-2">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, s) => (
                <svg
                  key={s}
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="#E87020"
                >
                  <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
                </svg>
              ))}
            </div>
            <span className="text-[13px] font-medium text-[#7B1C1C]">
              4.9 / 5
            </span>
          </div>
          <div className="w-px h-4 bg-[#7B1C1C]/15" />
          <span className="text-xs text-[#9a7a6a]">
            Basé sur 120+ avis clients
          </span>
        </motion.div>
      </section>

      {/* Actualités */}
      <section className="bg-[#F5F0E8] py-12 px-6 md:px-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="flex items-end justify-between mb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2
                style={{ fontFamily: "var(--font-serif)" }}
                className="text-[28px] md:text-[30px] text-[#7B1C1C] leading-tight"
              >
                Dernières nouvelles
              </h2>
            </motion.div>

            <span className="hidden md:inline-block text-xs text-[#7B1C1C] font-medium border-b border-[#7B1C1C] pb-0.5 cursor-pointer hover:opacity-70 transition-opacity whitespace-nowrap">
              Voir toutes les actualités →
            </span>
          </div>

          {/* GRID 2 COLONNES MAX */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Carte principale */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -4 }}
              className="bg-white rounded-[20px] overflow-hidden border border-[#7B1C1C]/8 cursor-pointer"
            >
              {/* Thumbnail avec image */}
              <div className="relative h-52 overflow-hidden">
                <Image
                  src="/images/gitex.jpg"
                  alt="Participation de A'mansi à GITEX Africa"
                  fill
                  className="object-cover"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-[#7B1C1C]/40" />

                {/* Motif */}
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(45deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 1px, transparent 1px, transparent 12px)",
                  }}
                />

                {/* Infos haut */}
                <div className="relative z-10 flex items-center justify-between p-5">
                  <span className="bg-[#E87020] text-white text-[10px] font-medium rounded-full px-3 py-1">
                    Événement
                  </span>
                  <span className="text-[11px] text-white/80">
                    12 mars 2025
                  </span>
                </div>

                {/* Numéro */}
                <span className="absolute bottom-3 right-5 text-[52px] text-white/10 select-none">
                  01
                </span>
              </div>

              {/* Body */}
              <div className="p-5">
                <h3
                  style={{ fontFamily: "var(--font-serif)" }}
                  className="text-base md:text-[17px] text-[#7B1C1C] mb-2 leading-snug"
                >
                  A&apos;mansi met en lumière l’innovation laitière africaine à
                  GITEX Africa
                </h3>

                <p className="text-xs text-[#7a5a4a] leading-relaxed">
                  Présente à GITEX Africa, A&apos;mansi a dévoilé Proxilait, sa
                  solution numérique conçue pour moderniser la filière laitière
                  et connecter les acteurs du secteur.
                </p>

                <div className="flex items-center justify-between mt-4 pt-3 border-t border-[#7B1C1C]/10">
                  <span className="text-[11px] text-[#9a7a6a]">
                    12 mars 2025
                  </span>

                  <div className="w-7 h-7 rounded-full bg-[#F5F0E8] flex items-center justify-center text-[#7B1C1C]">
                    →
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Petites cartes */}
            <div className="flex flex-col gap-6">
              {[
                {
                  tag: "Produits",
                  tagBg: "#EAF3DE",
                  tagColor: "#3B6D11",
                  title:
                    "Lancement du Hindirmou — le beurre traditionnel nigérien en pot",
                  date: "28 fév. 2025",
                },
                {
                  tag: "Partenariat",
                  tagBg: "#FFF0E0",
                  tagColor: "#854F0B",
                  title:
                    "A'mansi signe un accord avec 50 nouveaux éleveurs de la région de Dosso",
                  date: "14 jan. 2025",
                },
              ].map((news, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="bg-white rounded-[20px] p-5 border border-[#7B1C1C]/8 cursor-pointer"
                >
                  <div>
                    <span
                      className="inline-block text-[10px] font-medium rounded-full px-3 py-1 mb-2.5"
                      style={{ background: news.tagBg, color: news.tagColor }}
                    >
                      {news.tag}
                    </span>

                    <p
                      style={{ fontFamily: "var(--font-serif)" }}
                      className="text-[14px] text-[#7B1C1C] leading-snug"
                    >
                      {news.title}
                    </p>
                  </div>

                  <div className="flex items-center justify-between mt-4 pt-3 border-t border-[#7B1C1C]/10">
                    <span className="text-[11px] text-[#9a7a6a]">
                      {news.date}
                    </span>

                    <div className="w-7 h-7 rounded-full bg-[#F5F0E8] flex items-center justify-center text-[#7B1C1C]">
                      →
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partenaires */}
      <section className="bg-white py-14 overflow-hidden">
        {/* Header */}
        <div className="flex items-end justify-between px-6 md:px-10 mb-10">
          <div>
            <div className="flex items-center gap-2 text-[11px] font-medium text-[#5A8C1A] tracking-[0.18em] uppercase mb-2">
              <span className="w-2 h-2 rounded-full bg-[#5A8C1A]" />
              Nos partenaires
            </div>
            <h2
              style={{ fontFamily: "var(--font-serif)" }}
              className="text-[28px] text-[#7B1C1C] leading-tight"
            >
              Ils nous font confiance
            </h2>
          </div>
          <span className="text-xs text-[#9a7a6a] hidden sm:block">
            5 organisations
          </span>
        </div>

        {/* Marquee */}
        <div
          className="relative overflow-hidden"
          style={{
            maskImage:
              "linear-gradient(to right, transparent 0%, black 100px, black calc(100% - 100px), transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent 0%, black 100px, black calc(100% - 100px), transparent 100%)",
          }}
        >
          <div className="flex w-max gap-4 py-4 marquee-track">
            {[
              {
                initials: "ME",
                label: "Ministère de l'Élevage",
                type: "Gouvernement",
                color: "#7B1C1C",
              },
              {
                initials: "FAO",
                label: "FAO Niger",
                type: "Organisation internationale",
                color: "#2E6B3E",
              },
              {
                initials: "AR",
                label: "AREN",
                type: "Réseau éleveurs",
                color: "#C26010",
              },
              {
                initials: "CA",
                label: "Chambre d'Agriculture",
                type: "Institution",
                color: "#5A3A2A",
              },
              {
                initials: "UN",
                label: "PNUD Niger",
                type: "Nations Unies",
                color: "#1A5276",
              },
              /* --- duplication pour boucle infinie --- */
              {
                initials: "ME",
                label: "Ministère de l'Élevage",
                type: "Gouvernement",
                color: "#7B1C1C",
              },
              {
                initials: "FAO",
                label: "FAO Niger",
                type: "Organisation internationale",
                color: "#2E6B3E",
              },
              {
                initials: "AR",
                label: "AREN",
                type: "Réseau éleveurs",
                color: "#C26010",
              },
              {
                initials: "CA",
                label: "Chambre d'Agriculture",
                type: "Institution",
                color: "#5A3A2A",
              },
              {
                initials: "UN",
                label: "PNUD Niger",
                type: "Nations Unies",
                color: "#1A5276",
              },
              {
                initials: "ME",
                label: "Ministère de l'Élevage",
                type: "Gouvernement",
                color: "#7B1C1C",
              },
              {
                initials: "FAO",
                label: "FAO Niger",
                type: "Organisation internationale",
                color: "#2E6B3E",
              },
              {
                initials: "AR",
                label: "AREN",
                type: "Réseau éleveurs",
                color: "#C26010",
              },
              {
                initials: "CA",
                label: "Chambre d'Agriculture",
                type: "Institution",
                color: "#5A3A2A",
              },
              {
                initials: "UN",
                label: "PNUD Niger",
                type: "Nations Unies",
                color: "#1A5276",
              },
              {
                initials: "ME",
                label: "Ministère de l'Élevage",
                type: "Gouvernement",
                color: "#7B1C1C",
              },
              {
                initials: "FAO",
                label: "FAO Niger",
                type: "Organisation internationale",
                color: "#2E6B3E",
              },
              {
                initials: "AR",
                label: "AREN",
                type: "Réseau éleveurs",
                color: "#C26010",
              },
              {
                initials: "CA",
                label: "Chambre d'Agriculture",
                type: "Institution",
                color: "#5A3A2A",
              },
              {
                initials: "UN",
                label: "PNUD Niger",
                type: "Nations Unies",
                color: "#1A5276",
              },
            ].map((p, i) => (
              <div
                key={i}
                className="w-44 shrink-0 rounded-[20px] overflow-hidden border border-[#7B1C1C]/8 bg-white cursor-default transition-all duration-200 hover:-translate-y-1.5"
                style={{
                  boxShadow:
                    "0 2px 10px rgba(123,28,28,0.05), 0 1px 2px rgba(0,0,0,0.03)",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLDivElement).style.boxShadow =
                    "0 20px 48px rgba(123,28,28,0.12), 0 4px 12px rgba(0,0,0,0.06)")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLDivElement).style.boxShadow =
                    "0 2px 10px rgba(123,28,28,0.05), 0 1px 2px rgba(0,0,0,0.03)")
                }
              >
                {/* Zone logo */}
                <div
                  className="w-full h-28 flex items-center justify-center relative"
                  style={{ background: p.color }}
                >
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage:
                        "repeating-linear-gradient(135deg, rgba(255,255,255,0.04) 0px, rgba(255,255,255,0.04) 1px, transparent 1px, transparent 14px)",
                    }}
                  />
                  {/* Remplacer par <Image src={p.logo} fill className="object-contain p-4" alt={p.label} /> */}
                  <span className="relative z-10 text-[20px] font-semibold text-white/90 tracking-wide">
                    {p.initials}
                  </span>
                </div>

                {/* Corps */}
                <div className="px-3.5 py-3 border-t border-[#7B1C1C]/6">
                  <p className="text-[11px] font-medium text-[#3A1A0A] leading-snug">
                    {p.label}
                  </p>
                  <p className="text-[10px] text-[#b09080] mt-0.5 tracking-wide">
                    {p.type}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        id="contact"
        className="bg-[#E87020] py-12 px-8 flex items-center justify-between gap-8 flex-col md:flex-row"
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
            Prêt à rejoindre la filière ?
          </h2>

          <p className="text-[14px] text-white/80">
            Éleveur, distributeur ou consommateur — il y a une place pour vous
            dans l&apos;écosystème A&apos;mansi.
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
            className="w-full sm:w-[220px] bg-white text-[#E87020] rounded-lg px-6 py-3 text-[13px] font-medium cursor-pointer text-center"
          >
            Commander nos produits
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full sm:w-[220px] bg-transparent text-white border-2 border-white/60 rounded-lg px-6 py-3 text-[13px] font-medium cursor-pointer text-center"
          >
            Rejoindre Proxilait
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
              <a
                href="#apropos"
                className="text-xs text-white/40 hover:text-white/70 transition-colors"
              >
                À propos
              </a>
              <a
                href="#produits"
                className="text-xs text-white/40 hover:text-white/70 transition-colors"
              >
                Nos produits
              </a>
              <a
                href="#proxilait"
                className="text-xs text-white/40 hover:text-white/70 transition-colors"
              >
                Proxilait
              </a>
              <a
                href="#impact"
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
              <a className="text-xs text-white/40 hover:text-white/70 transition-colors cursor-pointer">
                Éleveurs
              </a>
              <a className="text-xs text-white/40 hover:text-white/70 transition-colors cursor-pointer">
                Transformateurs
              </a>
              <a className="text-xs text-white/40 hover:text-white/70 transition-colors cursor-pointer">
                Distributeurs
              </a>
              <a className="text-xs text-white/40 hover:text-white/70 transition-colors cursor-pointer">
                Consommateurs
              </a>
            </div>
          </div>
          <div>
            <div className="text-[11px] font-medium text-white/70 tracking-widest uppercase mb-3">
              Contact
            </div>
            <div className="flex flex-col gap-1.5">
              <a className="text-xs text-white/40 hover:text-white/70 transition-colors cursor-pointer">
                Niamey, Niger
              </a>
              <a className="text-xs text-white/40 hover:text-white/70 transition-colors cursor-pointer">
                contact@amansi.ne
              </a>
              <a className="text-xs text-white/40 hover:text-white/70 transition-colors cursor-pointer">
                +227 00 00 00 00
              </a>
              <a className="text-xs text-white/40 hover:text-white/70 transition-colors cursor-pointer">
                Recrutement
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 pt-4 flex justify-between items-center flex-col sm:flex-row gap-4">
          <span className="text-[11px] text-white/30">
            © 2025 A'mansi Fromagerie. Tous droits réservés.
          </span>
          <div className="flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-[#8DC63F]" />
            <span className="text-[11px] text-white/40">
              Powered by Proxilait
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
