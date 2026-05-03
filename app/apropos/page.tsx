"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

const valeurs = [
  {
    icon: "🤝",
    title: "Équité",
    desc: "Chaque acteur de la filière — éleveur, transformateur, distributeur — mérite une rémunération juste et transparente. Nous refusons l'exploitation à n'importe quel maillon.",
    color: "#E87020",
    colorBg: "rgba(232,112,32,0.07)",
  },
  {
    icon: "🌱",
    title: "Ancrage local",
    desc: "Nos produits, nos recettes et nos méthodes sont nigériens. Nous valorisons le savoir-faire traditionnel plutôt que de l'importer ou de le remplacer.",
    color: "#5A8C1A",
    colorBg: "rgba(90,140,26,0.07)",
  },
  {
    icon: "🔬",
    title: "Rigueur",
    desc: "L'artisanat n'exclut pas l'exigence. Chaque produit respecte des standards stricts d'hygiène, de qualité et de traçabilité — du troupeau à l'assiette.",
    color: "#7B1C1C",
    colorBg: "rgba(123,28,28,0.06)",
  },
  {
    icon: "💡",
    title: "Innovation utile",
    desc: "La technologie ne vaut que si elle résout un vrai problème. Proxilait n'est pas un gadget — c'est une réponse concrète aux frictions que vivent les acteurs de la filière chaque jour.",
    color: "#854F0B",
    colorBg: "rgba(133,79,11,0.06)",
  },
];

const equipe = [
  {
    nom: "Équipe fondatrice",
    role: "Direction générale",
    desc: "Portée par une conviction : le lait local nigérien peut nourrir sainement des millions de familles, à condition d'organiser la filière différemment.",
    initiale: "A",
    bg: "#7B1C1C",
  },
  {
    nom: "Pôle production",
    role: "Transformation & qualité",
    desc: "Des professionnels de la transformation laitière qui allient méthodes traditionnelles et standards modernes d'hygiène alimentaire.",
    initiale: "P",
    bg: "#5A8C1A",
  },
  {
    nom: "Pôle numérique",
    role: "Tech & Proxilait",
    desc: "Une équipe tech locale qui développe et maintient Proxilait — pensée pour les réalités du terrain, pas pour un manuel de Silicon Valley.",
    initiale: "N",
    bg: "#E87020",
  },
];

const chaineMaillons = [
  { label: "Éleveurs", desc: "Collecte quotidienne du lait frais", icon: "🐄" },
  { label: "Transformation", desc: "Fabrication artisanale à l'atelier", icon: "🏺" },
  { label: "Distribution", desc: "Livraison aux points de vente", icon: "🚚" },
  { label: "Consommateurs", desc: "Produits frais, locaux, traçables", icon: "🧑‍🍳" },
];

export default function AProposPage() {
  return (
    <div
      className="min-h-screen max-w-460 mx-auto bg-[#F5F0E8]"
    >
      {/* ── HERO ──────────────────────────────────────────────── */}
      <section className="relative pt-14 min-h-[80dvh] bg-[#2C1A0E] overflow-hidden flex items-end">
        <div className="absolute inset-0">
          <Image
            src="/images/a-mansi-hero.png"
            alt=""
            fill
            sizes="100vw"
            priority
            className="object-cover object-[50%_40%] opacity-25"
          />
        </div>
        <div className="absolute inset-0 bg-linear-to-t from-[#2C1A0E] via-[#2C1A0E]/60 to-transparent" />
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#7B1C1C]/20 rounded-full blur-[140px] -translate-x-1/2 -translate-y-1/3" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 px-8 md:px-12 pb-16 pt-10 max-w-3xl"
        >
          <span className="inline-flex items-center gap-2 text-[11px] font-medium text-white/60 tracking-[0.15em] uppercase border border-white/15 bg-white/6 px-3.5 py-1.5 rounded-full mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FAD060]" />
            Notre histoire
          </span>
          <h1
            className="font-serif text-[42px] md:text-[58px] text-white leading-[1.08] mb-6"
          >
            Nés au Niger,
            <br />
            <em className="text-[#FAD060] not-italic">engagés pour sa filière</em>
          </h1>
          <p className="text-[16px] text-white/60 leading-relaxed max-w-xl">
            A'mansi est une laiterie-fromagerie nigérienne fondée sur une conviction simple : le lait produit localement mérite d'être valorisé localement — par des mains locales, pour des familles locales.
          </p>
        </motion.div>
      </section>

      {/* ── NOTRE HISTOIRE ────────────────────────────────────── */}
      <section className="bg-white py-16 px-8 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="text-[10px] font-medium text-[#5A8C1A] tracking-[0.12em] uppercase mb-3">
              Nos origines
            </div>
            <h2
              className="font-serif text-[30px] md:text-[36px] text-[#7B1C1C] leading-snug mb-6"
            >
              D'une frustration naît une entreprise
            </h2>
            <div className="flex flex-col gap-4 text-[14px] text-[#5a3a2a] leading-[1.85]">
              <p>
                A'mansi est née d'un constat : le Niger est un pays d'éleveurs, riche en lait local, mais ses marchés sont inondés de poudre importée. Une aberration économique et culturelle que ses fondateurs ont décidé de corriger.
              </p>
              <p>
                En partant des savoir-faire ancestraux des femmes peules — le Tchoukou, le Hindirmou, le lait fermenté — l'équipe a construit un atelier de transformation artisanale à Niamey, avec une exigence : chaque produit doit être traçable, abordable et fièrement nigérien.
              </p>
              <p>
                Aujourd'hui, A'mansi ne se contente plus de transformer. Elle structure toute une filière — de l'éleveur au consommateur — grâce à des partenariats directs et à une plateforme numérique : Proxilait.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative h-[380px] rounded-3xl overflow-hidden"
          >
            <Image
              src="/images/a-mansi-hero.png"
              alt="Atelier A'mansi"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-linear-to-t from-[#2C1A0E]/40 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-5 py-4">
                <p
                  className="font-serif text-[14px] text-white italic leading-snug"
                >
                  "Le bon goût local" — pas un slogan. Une ligne de conduite.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── MISSION / VISION ──────────────────────────────────── */}
      <section className="bg-[#F5F0E8] py-16 px-8 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <div className="text-[10px] font-medium text-[#5A8C1A] tracking-[0.12em] uppercase mb-2">
            Notre boussole
          </div>
          <h2
            className="font-serif text-[30px] md:text-[36px] text-[#7B1C1C] leading-snug"
          >
            Mission & Vision
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-[#7B1C1C] rounded-3xl p-8 md:p-10"
          >
            <div className="text-[11px] font-semibold text-white/50 tracking-[0.15em] uppercase mb-4">
              Mission
            </div>
            <p
              className="font-serif text-[22px] text-white leading-[1.5]"
            >
              Transformer le lait local nigérien en produits de qualité, valoriser le travail des éleveurs, et rendre la filière laitière plus équitable, traçable et durable.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-[#0B1F14] rounded-3xl p-8 md:p-10"
          >
            <div className="text-[11px] font-semibold text-white/50 tracking-[0.15em] uppercase mb-4">
              Vision
            </div>
            <p
              className="font-serif text-[22px] text-white leading-[1.5]"
            >
              Devenir la référence de la transformation laitière en Afrique de l'Ouest — en prouvant qu'une filière locale, numérisée et respectueuse peut rivaliser avec les importations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── VALEURS ───────────────────────────────────────────── */}
      <section className="bg-white py-16 px-8 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <div className="text-[10px] font-medium text-[#5A8C1A] tracking-[0.12em] uppercase mb-2">
            Ce qui nous guide
          </div>
          <h2
            className="font-serif text-[30px] md:text-[36px] text-[#7B1C1C] leading-snug"
          >
            Nos valeurs
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {valeurs.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="rounded-3xl p-7 border"
              style={{ background: v.colorBg, borderColor: `${v.color}22` }}
            >
              <span className="text-3xl mb-4 block">{v.icon}</span>
              <h3
                style={{ color: v.color }}
                className="font-serif text-[20px] mb-2"
              >
                {v.title}
              </h3>
              <p className="text-[13px] text-[#5a3a2a] leading-[1.8]">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── CHAÎNE DE VALEUR ──────────────────────────────────── */}
      <section className="bg-[#F5F0E8] py-16 px-8 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <div className="text-[10px] font-medium text-[#5A8C1A] tracking-[0.12em] uppercase mb-2">
            Comment ça marche
          </div>
          <h2
            className="font-serif text-[30px] md:text-[36px] text-[#7B1C1C] leading-snug"
          >
            Notre modèle de bout en bout
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {chaineMaillons.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="relative"
            >
              <div className="bg-white rounded-2xl p-5 text-center h-full flex flex-col items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-[#F5F0E8] flex items-center justify-center text-2xl">
                  {m.icon}
                </div>
                <div>
                  <div
                    className="font-serif text-[15px] text-[#7B1C1C] font-medium mb-1"
                  >
                    {m.label}
                  </div>
                  <div className="text-[11px] text-[#9a7a6a] leading-snug">{m.desc}</div>
                </div>
                {/* Flèche entre les maillons */}
                {i < chaineMaillons.length - 1 && (
                  <div className="hidden md:flex absolute -right-2 top-1/2 -translate-y-1/2 z-10 w-4 h-4 items-center justify-center text-[#7B1C1C]/30 text-lg">
                    →
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-6 bg-white/60 rounded-2xl px-6 py-4 flex items-center gap-3"
        >
          <span className="text-xl">📱</span>
          <p className="text-[13px] text-[#5a3a2a] leading-snug">
            Proxilait connecte chaque maillon en temps réel — collectes, paiements, livraisons et traçabilité sur une seule plateforme.{" "}
            <Link href="/proxilait" className="text-[#5A8C1A] font-medium hover:underline">
              En savoir plus →
            </Link>
          </p>
        </motion.div>
      </section>

      {/* ── ÉQUIPE ────────────────────────────────────────────── */}
      <section className="bg-white py-16 px-8 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <div className="text-[10px] font-medium text-[#5A8C1A] tracking-[0.12em] uppercase mb-2">
            Les personnes
          </div>
          <h2
            className="font-serif text-[30px] md:text-[36px] text-[#7B1C1C] leading-snug"
          >
            Ceux qui font A'mansi
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {equipe.map((e, i) => (
            <motion.div
              key={e.nom}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="bg-[#F5F0E8] rounded-3xl p-7"
            >
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center text-white text-[18px] font-semibold mb-5"
                style={{ background: e.bg }}
              >
                {e.initiale}
              </div>
              <div
                className="font-serif text-[17px] text-[#2C1A0E] mb-1"
              >
                {e.nom}
              </div>
              <div className="text-[11px] text-[#9a7a6a] font-medium uppercase tracking-wide mb-3">
                {e.role}
              </div>
              <p className="text-[13px] text-[#5a3a2a] leading-[1.8]">{e.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────── */}
      <section className="bg-[#7B1C1C] py-14 px-8 md:px-12 flex items-center justify-between gap-8 flex-col md:flex-row">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2
            className="font-serif text-[28px] text-white mb-2"
          >
            Rejoindre l'aventure A'mansi
          </h2>
          <p className="text-[14px] text-white/70">
            Partenaire, investisseur, distributeur ou éleveur — votre place est dans la filière.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-3 w-full md:w-auto"
        >
          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-52 bg-white text-[#7B1C1C] rounded-lg px-6 py-3 text-[13px] font-medium cursor-pointer"
            >
              Nous contacter
            </motion.button>
          </Link>
          <Link href="/impact">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-52 bg-transparent border border-white/30 text-white rounded-lg px-6 py-3 text-[13px] font-medium cursor-pointer hover:bg-white/10 transition-colors"
            >
              Voir notre impact
            </motion.button>
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
