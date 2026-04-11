"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Home() {
  const [open, setOpen] = useState(false);
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
      <section id="produits" className="bg-[#F5F0E8] py-12 px-10">
        <div className="flex items-end justify-between mb-7">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-[10px] font-medium text-[#5A8C1A] tracking-[0.12em] uppercase mb-2">
              Nos produits
            </div>
            <h2
              style={{ fontFamily: "var(--font-serif)" }}
              className="text-[28px] text-[#7B1C1C] leading-tight"
            >
              Une gamme issue du
              <br />
              meilleur lait nigérien
            </h2>
          </motion.div>
          <span className="text-xs text-[#7B1C1C] font-medium border-b border-[#7B1C1C] pb-0.5 cursor-pointer hover:opacity-70 transition-opacity hidden md:inline-block">
            Voir toute la gamme →
          </span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
          {[
            {
              emoji: "🧀",
              name: "Tchoukou fin",
              desc: "Fromage frais local au lait entier, texture crémeuse",
              bg: "#FFF8F0",
              badge: "Phare",
              badgeBg: "#E87020",
            },
            {
              emoji: "🥛",
              name: "Yaourt nature",
              desc: "Yaourt au lait local, doux et naturellement fermenté",
              bg: "#F0F8FF",
            },
            {
              emoji: "🍶",
              name: "Hindirmou",
              desc: "Beurre de lait traditionnel nigérien, riche et savoureux",
              bg: "#FFFDF0",
              badge: "Nouveau",
              badgeBg: "#5A8C1A",
            },
            {
              emoji: "🫙",
              name: "Lait fermenté",
              desc: "Lait caillé naturel, riche en probiotiques locaux",
              bg: "#FFF5F5",
            },
          ].map((prod, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="bg-white rounded-xl overflow-hidden border border-[#7B1C1C]/10 cursor-pointer"
            >
              <div
                className="h-120 flex items-center justify-center text-[44px] relative"
                style={{ background: prod.bg }}
              >
                {prod.emoji}
                {prod.badge && (
                  <span
                    className="absolute top-2.5 right-2.5 text-white text-[9px] font-medium rounded-full px-2 py-1 tracking-wide"
                    style={{ background: prod.badgeBg }}
                  >
                    {prod.badge}
                  </span>
                )}
              </div>
              <div className="p-3.5">
                <div
                  style={{ fontFamily: "var(--font-serif)" }}
                  className="text-[15px] text-[#7B1C1C] font-semibold"
                >
                  {prod.name}
                </div>
                <div className="text-[11px] text-[#7a5a4a] mt-1 leading-snug">
                  {prod.desc}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Chaîne de valeur */}
      <section className="bg-[#7B1C1C] py-12 px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
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
          <p className="text-[13px] text-white/65 mb-9">
            Chaque maillon est suivi, valorisé et connecté grâce à Proxilait
          </p>
        </motion.div>
        <div className="flex items-center gap-0 overflow-x-auto pb-4">
          {[
            {
              emoji: "🐄",
              name: "Éleveurs",
              sub: "Collecte du lait brut",
              bg: "rgba(90,140,26,0.25)",
            },
            {
              emoji: "⚗️",
              name: "Transformation",
              sub: "Atelier A'mansi",
              bg: "rgba(232,112,32,0.25)",
            },
            {
              emoji: "✅",
              name: "Contrôle qualité",
              sub: "Normes locales",
              bg: "rgba(255,255,255,0.15)",
            },
            {
              emoji: "🚚",
              name: "Distribution",
              sub: "Niamey et régions",
              bg: "rgba(250,200,80,0.2)",
            },
            {
              emoji: "🏪",
              name: "Points de vente",
              sub: "Marchés, boutiques",
              bg: "rgba(255,255,255,0.15)",
            },
            {
              emoji: "😊",
              name: "Consommateurs",
              sub: "Familles nigériennes",
              bg: "rgba(90,140,26,0.25)",
            },
          ].map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex-1 text-center relative min-w-30"
            >
              {i < 5 && (
                <div className="absolute -right-3.5 top-1/2 -translate-y-3/4 text-white/40 text-xl pointer-events-none">
                  →
                </div>
              )}
              <div
                className="w-14 h-14 rounded-full mx-auto mb-3 flex items-center justify-center text-[22px] border-2 border-white/25"
                style={{ background: step.bg }}
              >
                {step.emoji}
              </div>
              <div className="text-xs font-medium text-white tracking-wide">
                {step.name}
              </div>
              <div className="text-[10px] text-white/55 mt-1">{step.sub}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Proxilait */}
      <section
        id="proxilait"
        className="bg-[#1A3A0A] py-12 px-10 relative overflow-hidden"
      >
        <div
          className="absolute -right-10 -top-10 w-50 h-50 rounded-full z-0"
          style={{ background: "rgba(90,140,26,0.18)" }}
        />
        <div
          className="absolute right-20 -bottom-15 w-37.5 h-37.5 rounded-full z-0"
          style={{ background: "rgba(90,140,26,0.12)" }}
        />

        <div className="relative z-1 flex gap-12 items-center flex-col lg:flex-row">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1"
          >
            <div className="inline-flex items-center gap-1.5 bg-[#5A8C1A]/30 border border-[#5A8C1A]/50 rounded-full px-3.5 py-1 mb-3.5">
              <div className="w-1.5 h-1.5 rounded-full bg-[#8DC63F]" />
              <span className="text-[10px] font-medium text-[#A8E060] tracking-widest uppercase">
                Bientôt disponible
              </span>
            </div>
            <h2
              style={{ fontFamily: "var(--font-serif)" }}
              className="text-[30px] text-white mb-3.5 leading-tight"
            >
              Proxilait —<br />
              la filière laitière
              <br />
              <span className="text-[#8DC63F] italic">numérisée</span>
            </h2>
            <p className="text-[13px] text-white/65 leading-relaxed mb-6">
              La première plateforme numérique dédiée au lait local nigérien.
              Éleveurs, transformateurs, distributeurs et consommateurs — tous
              connectés sur une seule solution. Traçabilité, commandes, prix du
              marché en temps réel.
            </p>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-[#5A8C1A] text-white border-none rounded-lg px-6 py-3 text-[13px] font-medium cursor-pointer"
            >
              Rejoindre la liste d'attente →
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-[320px] grid grid-cols-2 gap-2.5"
          >
            {[
              {
                emoji: "🐄",
                title: "Éleveurs",
                desc: "Suivi du cheptel, prix du lait, mise en relation directe",
              },
              {
                emoji: "⚗️",
                title: "Transformateurs",
                desc: "Gestion des collectes, traçabilité lot par lot",
              },
              {
                emoji: "🚚",
                title: "Distributeurs",
                desc: "Commandes, livraisons, stock en temps réel",
              },
              {
                emoji: "🛒",
                title: "Consommateurs",
                desc: "Scanner le produit, connaître son éleveur",
              },
            ].map((card, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="bg-white/7 border border-white/15 rounded-[10px] p-3.5"
              >
                <div className="text-xl mb-2">{card.emoji}</div>
                <div className="text-xs font-medium text-[#A8E060]">
                  {card.title}
                </div>
                <div className="text-[10px] text-white/50 mt-1 leading-snug">
                  {card.desc}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Témoignages */}
      <section className="bg-white py-12 px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-[10px] font-medium text-[#5A8C1A] tracking-[0.12em] uppercase">
            Ils nous font confiance
          </div>
          <h2
            style={{ fontFamily: "var(--font-serif)" }}
            className="text-[28px] text-[#7B1C1C] mt-2 mb-7"
          >
            La parole à notre communauté
          </h2>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            {
              text: "Depuis que je travaille avec A'mansi, mon lait est valorisé à sa juste valeur. Je suis fier que mon troupeau nourrisse les familles de Niamey.",
              name: "Adamou Moussa",
              role: "Éleveur, région de Tillabéri",
              avatar: "A",
              color: "#7B1C1C",
            },
            {
              text: "Le yaourt A'mansi est le seul que j'achète. On sent le vrai lait, sans additifs. Mes enfants adorent.",
              name: "Fatouma Issa",
              role: "Cliente, Niamey",
              avatar: "F",
              color: "#5A8C1A",
            },
            {
              text: "J'approvisionne mon épicerie en produits A'mansi depuis 2 ans. La qualité est constante et la livraison fiable.",
              name: "Mahamane Sani",
              role: "Distributeur, Marché de Katako",
              avatar: "M",
              color: "#E87020",
            },
          ].map((temo, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="bg-[#F5F0E8] rounded-xl p-5 border-b-[3px] border-[#7B1C1C]"
            >
              <p
                style={{ fontFamily: "var(--font-serif)" }}
                className="text-[14px] text-[#2C1A0E] leading-relaxed italic mb-3.5"
              >
                "{temo.text}"
              </p>
              <div className="flex items-center gap-2.5">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-[14px] font-semibold text-white"
                  style={{ background: temo.color }}
                >
                  {temo.avatar}
                </div>
                <div>
                  <div className="text-xs font-medium text-[#7B1C1C]">
                    {temo.name}
                  </div>
                  <div className="text-[10px] text-[#9a7a6a]">{temo.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Actualités */}
      <section className="bg-[#F5F0E8] py-12 px-10">
        <div className="flex items-end justify-between mb-7">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-[10px] font-medium text-[#5A8C1A] tracking-[0.12em] uppercase">
              Actualités
            </div>
            <h2
              style={{ fontFamily: "var(--font-serif)" }}
              className="text-[28px] text-[#7B1C1C] mt-2"
            >
              Dernières nouvelles
            </h2>
          </motion.div>
          <span className="text-xs text-[#7B1C1C] font-medium border-b border-[#7B1C1C] pb-0.5 cursor-pointer hover:opacity-70 transition-opacity hidden md:inline-block">
            Voir toutes les actualités →
          </span>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3.5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -4 }}
            className="bg-white rounded-xl overflow-hidden col-span-1 lg:col-span-2"
          >
            <div
              className="h-40 flex items-end p-4"
              style={{
                background: "linear-gradient(135deg, #C85010, #8B2810)",
              }}
            >
              <span className="bg-[#E87020] text-white text-[9px] font-medium rounded-full px-2.5 py-1 tracking-wide">
                Proxilait
              </span>
            </div>
            <div className="p-4">
              <h3
                style={{ fontFamily: "var(--font-serif)" }}
                className="text-base text-[#7B1C1C] leading-snug mb-2"
              >
                Proxilait : la plateforme qui va révolutionner la filière
                laitière au Niger
              </h3>
              <p className="text-xs text-[#7a5a4a] leading-relaxed mt-2">
                A'mansi lance sa solution numérique pour connecter toute la
                chaîne du lait, de l'éleveur au consommateur final.
              </p>
              <div className="text-[10px] text-[#9a7a6a] mt-2.5">
                12 mars 2025
              </div>
            </div>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3.5">
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
                className="bg-white rounded-xl p-4 flex flex-col justify-between"
              >
                <div>
                  <span
                    className="inline-block text-[9px] font-medium rounded-full px-2.5 py-1 mb-2"
                    style={{ background: news.tagBg, color: news.tagColor }}
                  >
                    {news.tag}
                  </span>
                  <div
                    style={{ fontFamily: "var(--font-serif)" }}
                    className="text-[14px] text-[#7B1C1C] leading-snug mb-auto"
                  >
                    {news.title}
                  </div>
                </div>
                <div className="text-[10px] text-[#9a7a6a] mt-2.5">
                  {news.date}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partenaires */}
      <section className="bg-white py-7 px-10 flex Fitems-center gap-8 overflow-x-auto">
        <span className="text-[10px] text-[#9a7a6a] font-medium tracking-wide uppercase whitespace-nowrap">
          Nos partenaires
        </span>
        <div className="w-px h-7 bg-black/10" />
        <div className="flex gap-6 items-center flex-wrap">
          {[
            "Ministère de l'Élevage",
            "FAO Niger",
            "AREN",
            "Chambre d'Agriculture",
            "PNUD Niger",
          ].map((partner, i) => (
            <span
              key={i}
              className="text-[11px] font-medium text-[#b0907a] tracking-wide bg-[#f5ece6] rounded-md px-3.5 py-1.5"
            >
              {partner}
            </span>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section
        id="contact"
        className="bg-[#E87020] py-12 px-10 flex items-center justify-between gap-8 flex-col md:flex-row"
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
            dans l'écosystème A'mansi.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex gap-3"
        >
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-white text-[#E87020] border-none rounded-lg px-6 py-3 text-[13px] font-medium cursor-pointer"
          >
            Commander nos produits
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-transparent text-white border-2 border-white/60 rounded-lg px-6 py-3 text-[13px] font-medium cursor-pointer"
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
