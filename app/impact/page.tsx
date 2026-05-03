"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import CTABanner from "@/app/components/ui/CTABanner";

// ── Données ────────────────────────────────────────────────────────────────

const stats = [
  { val: "20+", label: "Éleveurs partenaires", sub: "Tillabéri & Dosso" },
  { val: "500L", label: "Collectés / jour", sub: "En moyenne" },
  { val: "13+", label: "Produits fabriqués", sub: "Lait, fromage, beurre…" },
  { val: "3", label: "Régions couvertes", sub: "Et en expansion" },
];

const axes = [
  {
    tag: "Économique",
    color: "#E87020",
    colorBg: "rgba(232,112,32,0.07)",
    colorBorder: "rgba(232,112,32,0.18)",
    emoji: "📈",
    title: "Créer de la valeur à chaque maillon",
    desc: "A'mansi rémunère les éleveurs au prix juste, réduit les intermédiaires et crée des emplois locaux directs et indirects dans la transformation et la distribution.",
    items: [
      "Rémunération équitable des éleveurs",
      "Création d'emplois locaux qualifiés",
      "Réduction des pertes post-collecte",
      "Accès à de nouveaux marchés pour les producteurs",
    ],
  },
  {
    tag: "Social",
    color: "#7B1C1C",
    colorBg: "rgba(123,28,28,0.06)",
    colorBorder: "rgba(123,28,28,0.15)",
    emoji: "🤝",
    title: "Renforcer les communautés rurales",
    desc: "En valorisant le lait local, A'mansi améliore les conditions de vie des familles d'éleveurs et garantit aux consommateurs des produits sains, traçables et abordables.",
    items: [
      "Amélioration des revenus des ménages ruraux",
      "Accès à des produits de qualité pour les familles",
      "Formation et accompagnement des éleveurs",
      "Inclusion des femmes dans la chaîne de valeur",
    ],
  },
  {
    tag: "Environnemental",
    color: "#5A8C1A",
    colorBg: "rgba(90,140,26,0.07)",
    colorBorder: "rgba(90,140,26,0.18)",
    emoji: "🌿",
    title: "Promouvoir une filière durable",
    desc: "Nos pratiques favorisent l'élevage extensif traditionnel, réduisent le gaspillage alimentaire et soutiennent des méthodes de transformation à faible empreinte écologique.",
    items: [
      "Soutien à l'élevage traditionnel extensif",
      "Réduction des pertes alimentaires",
      "Emballages responsables en cours de déploiement",
      "Traçabilité pour limiter les transports inutiles",
    ],
  },
  {
    tag: "Numérique",
    color: "#0B1F14",
    colorBg: "rgba(11,31,20,0.05)",
    colorBorder: "rgba(11,31,20,0.12)",
    emoji: "📱",
    title: "Digitaliser la filière laitière",
    desc: "Proxilait connecte tous les acteurs sur une seule plateforme. Éleveurs, transformateurs, distributeurs et consommateurs disposent enfin d'outils numériques adaptés à la réalité nigérienne.",
    items: [
      "Plateforme de traçabilité en temps réel",
      "Gestion numérique des collectes et paiements",
      "Accès aux données pour une meilleure décision",
      "Formation au numérique pour les éleveurs",
    ],
  },
];

const objectifs = [
  {
    horizon: "2025",
    color: "#E87020",
    goals: [
      { label: "50 éleveurs partenaires", progress: 42 },
      { label: "1 000 L collectés / jour", progress: 55 },
      { label: "Lancement Proxilait v1.0", progress: 80 },
      { label: "Couverture de Niamey complète", progress: 70 },
    ],
  },
  {
    horizon: "2026",
    color: "#5A8C1A",
    goals: [
      { label: "100 éleveurs partenaires", progress: 20 },
      { label: "3 nouvelles régions couvertes", progress: 15 },
      { label: "Export vers les pays voisins", progress: 10 },
      { label: "Certification qualité internationale", progress: 25 },
    ],
  },
];

const temoignages = [
  {
    text: "Depuis que je travaille avec A'mansi, mon lait est valorisé à sa juste valeur. Je suis fier que mon troupeau nourrisse les familles de Niamey.",
    name: "Adamou Moussa",
    role: "Éleveur — région de Tillabéri",
    avatar: "A",
    avatarBg: "#E87020",
  },
  {
    text: "A'mansi a changé notre façon de travailler. La traçabilité et les paiements ponctuels nous donnent confiance pour investir dans notre troupeau.",
    name: "Halima Maïga",
    role: "Éleveuse — région de Dosso",
    avatar: "H",
    avatarBg: "#5A8C1A",
  },
];

// ── Composant ──────────────────────────────────────────────────────────────

export default function ImpactPage() {
  const [activeAxe, setActiveAxe] = useState(0);

  return (
    <div
      className="min-h-screen max-w-460 mx-auto bg-[#F5F0E8]"
    >
      {/* ── HERO ──────────────────────────────────────────────── */}
      <section className="relative pt-14 min-h-[75dvh] bg-[#7B1C1C] overflow-hidden flex items-end">
        {/* Décor */}
        <div className="absolute inset-0 overflow-hidden">
          <Image src="/images/a-mansi-hero.png" alt="" fill sizes="100vw" priority className="object-cover object-center opacity-15" />
        </div>
        <div className="absolute top-0 right-0 w-[420px] h-[420px] bg-[#E87020]/20 rounded-full blur-[100px] translate-x-1/3 -translate-y-1/4" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#5A8C1A]/20 rounded-full blur-[80px] -translate-x-1/3 translate-y-1/4" />

        <div className="relative z-10 w-full px-8 md:px-12 pb-16 pt-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl"
          >
            <span className="inline-flex items-center gap-2 text-[11px] font-medium text-white/70 tracking-[0.15em] uppercase border border-white/20 bg-white/8 px-3.5 py-1.5 rounded-full mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#A8E060]" />
              Réalisations & objectifs
            </span>

            <h1
              className="font-serif text-[46px] md:text-[62px] text-white leading-[1.08] mb-5"
            >
              Un impact réel,{" "}
              <em className="text-[#FAD060] not-italic">mesurable</em>
              <br className="hidden md:block" /> et humain
            </h1>

            <p className="text-[15px] text-white/60 leading-relaxed max-w-xl">
              A'mansi construit une filière laitière plus équitable au Niger. Voici ce que nous avons accompli, ce que nous visons, et pourquoi chaque litre de lait compte.
            </p>
          </motion.div>

          {/* Stats rapides */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-12"
          >
            {stats.map((s, i) => (
              <div
                key={i}
                className="bg-white/8 border border-white/12 rounded-2xl px-5 py-4 backdrop-blur-sm"
              >
                <div className="text-[#FAD060] text-[28px] font-bold leading-none mb-1">
                  {s.val}
                </div>
                <div className="text-white text-[13px] font-medium leading-snug">
                  {s.label}
                </div>
                <div className="text-white/40 text-[11px] mt-0.5">{s.sub}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── AXES D'IMPACT ─────────────────────────────────────── */}
      <section className="bg-[#F5F0E8] py-16 px-8 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <div className="text-[10px] font-medium text-[#5A8C1A] tracking-[0.12em] uppercase mb-2">
            Notre action
          </div>
          <h2
            className="font-serif text-[30px] md:text-[36px] text-[#7B1C1C] leading-snug"
          >
            Quatre axes d'impact
          </h2>
        </motion.div>

        {/* Onglets */}
        <div className="flex gap-2 flex-wrap mb-8">
          {axes.map((a, i) => (
            <button
              key={a.tag}
              onClick={() => setActiveAxe(i)}
              className="flex items-center gap-2 px-4 py-2 rounded-full text-[13px] font-medium transition-all duration-200 cursor-pointer"
              style={
                activeAxe === i
                  ? { background: a.color, color: "#fff" }
                  : { background: "rgba(123,28,28,0.06)", color: "#7B1C1C" }
              }
            >
              <span>{a.emoji}</span>
              {a.tag}
            </button>
          ))}
        </div>

        {/* Contenu axe actif */}
        {axes.map((a, i) => (
          <motion.div
            key={a.tag}
            initial={false}
            animate={{ opacity: activeAxe === i ? 1 : 0, y: activeAxe === i ? 0 : 10 }}
            transition={{ duration: 0.3 }}
            className={activeAxe === i ? "block" : "hidden"}
          >
            <div
              className="rounded-3xl p-8 md:p-10 border grid grid-cols-1 md:grid-cols-2 gap-8 items-start"
              style={{ background: a.colorBg, borderColor: a.colorBorder }}
            >
              <div>
                <div className="text-4xl mb-4">{a.emoji}</div>
                <h3
                  className="font-serif text-[26px] text-[#2C1A0E] mb-3 leading-snug"
                >
                  {a.title}
                </h3>
                <p className="text-[14px] text-[#5a3a2a] leading-relaxed">
                  {a.desc}
                </p>
              </div>

              <div className="flex flex-col gap-3">
                {a.items.map((item, j) => (
                  <motion.div
                    key={j}
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: j * 0.07 }}
                    className="flex items-start gap-3"
                  >
                    <span
                      className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                      style={{ background: a.color }}
                    >
                      <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                        <path d="M2 6l3 3 5-5" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span className="text-[14px] text-[#3a2a1a] leading-snug">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </section>

      {/* ── OBJECTIFS ─────────────────────────────────────────── */}
      <section className="bg-white py-16 px-8 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <div className="text-[10px] font-medium text-[#5A8C1A] tracking-[0.12em] uppercase mb-2">
            Nos ambitions
          </div>
          <h2
            className="font-serif text-[30px] md:text-[36px] text-[#7B1C1C] leading-snug"
          >
            Objectifs 2025 — 2026
          </h2>
          <p className="text-[14px] text-[#7a5a4a] mt-3 max-w-xl leading-relaxed">
            Chaque objectif est suivi et mesuré. Ces indicateurs nous permettent de rester alignés avec notre mission et de rendre compte à nos partenaires.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {objectifs.map((obj, i) => (
            <motion.div
              key={obj.horizon}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-[#F5F0E8] rounded-3xl p-8"
            >
              {/* Horizon */}
              <div className="flex items-center gap-3 mb-7">
                <span
                  className="text-[11px] font-semibold tracking-widest px-3 py-1 rounded-full text-white"
                  style={{ background: obj.color }}
                >
                  {obj.horizon}
                </span>
                <div className="h-px flex-1 bg-[#7B1C1C]/10" />
              </div>

              <div className="flex flex-col gap-6">
                {obj.goals.map((g, j) => (
                  <motion.div
                    key={j}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: j * 0.08 }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[13px] text-[#3a2a1a] font-medium">{g.label}</span>
                      <span
                        className="text-[12px] font-semibold"
                        style={{ color: obj.color }}
                      >
                        {g.progress}%
                      </span>
                    </div>
                    {/* Barre de progression */}
                    <div className="h-1.5 bg-[#7B1C1C]/8 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${g.progress}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: j * 0.1, ease: "easeOut" }}
                        className="h-full rounded-full"
                        style={{ background: obj.color }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── TÉMOIGNAGES ───────────────────────────────────────── */}
      <section className="bg-[#F5F0E8] py-16 px-8 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <div className="text-[10px] font-medium text-[#5A8C1A] tracking-[0.12em] uppercase mb-2">
            Ils témoignent
          </div>
          <h2
            className="font-serif text-[30px] md:text-[36px] text-[#7B1C1C] leading-snug"
          >
            L'impact vu du terrain
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {temoignages.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-3xl p-8 flex flex-col gap-5"
            >
              {/* Étoiles */}
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, s) => (
                  <svg key={s} width="13" height="13" viewBox="0 0 24 24" fill="#E87020">
                    <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
                  </svg>
                ))}
              </div>

              <p
                className="font-serif text-[15px] text-[#2C1A0E] leading-relaxed italic flex-1"
              >
                "{t.text}"
              </p>

              <div className="flex items-center gap-3 pt-4 border-t border-[#7B1C1C]/8">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-[14px] font-medium text-white shrink-0"
                  style={{ background: t.avatarBg }}
                >
                  {t.avatar}
                </div>
                <div>
                  <div className="text-[13px] font-medium text-[#7B1C1C]">{t.name}</div>
                  <div className="text-[11px] text-[#9a7a6a] mt-0.5">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── RAPPORT / PARTENAIRES ─────────────────────────────── */}
      <section className="bg-[#7B1C1C] py-16 px-8 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-[10px] font-medium text-white/50 tracking-[0.12em] uppercase mb-3">
              Transparence & redevabilité
            </div>
            <h2
              className="font-serif text-[28px] md:text-[34px] text-white leading-snug mb-4"
            >
              Nous rendons compte à nos partenaires
            </h2>
            <p className="text-[14px] text-white/60 leading-relaxed mb-7">
              Chaque année, A'mansi publie un rapport d'impact détaillé à destination de ses partenaires institutionnels, financiers et communautaires. La confiance se construit dans la durée.
            </p>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-2 bg-[#FAD060] text-[#2C1A0E] rounded-xl px-6 py-3 text-[13px] font-semibold cursor-pointer"
            >
              Télécharger le rapport 2024
              <span>↓</span>
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="grid grid-cols-2 gap-3"
          >
            {[
              { emoji: "🏛️", label: "Ministère de l'Élevage", type: "Institutionnel" },
              { emoji: "🌍", label: "FAO Niger", type: "International" },
              { emoji: "🤝", label: "AREN", type: "Réseau éleveurs" },
              { emoji: "🏗️", label: "PNUD Niger", type: "Nations Unies" },
            ].map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="bg-white/7 border border-white/10 rounded-2xl p-5 flex flex-col gap-2"
              >
                <span className="text-2xl">{p.emoji}</span>
                <span className="text-[13px] font-medium text-white leading-snug">{p.label}</span>
                <span className="text-[11px] text-white/40">{p.type}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <CTABanner
        title="Rejoignez le mouvement"
        subtitle="Éleveur, partenaire ou investisseur — construisons ensemble une filière laitière digne du Niger."
        buttons={[
          { label: "Nous contacter", href: "/contact", variant: "primary" },
          { label: "Découvrir Proxilait", href: "/proxilait", variant: "outline" },
        ]}
      />

    </div>
  );
}
