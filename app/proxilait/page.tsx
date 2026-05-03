"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { useState } from "react";
import AppStoreButtons from "@/app/components/ui/AppStoreButtons";
import CTABanner from "@/app/components/ui/CTABanner";

const roles = [
  {
    key: "eleveurs",
    label: "Éleveurs",
    emoji: "🐄",
    color: "#5A8C1A",
    colorBg: "rgba(90,140,26,0.08)",
    colorBorder: "rgba(90,140,26,0.2)",
    headline: "Valorisez chaque litre de lait",
    desc: "Proxilait vous connecte directement aux transformateurs. Déclarez vos collectes, suivez vos paiements et accédez à des formations pour améliorer la qualité de votre production.",
    features: [
      "Déclaration de collecte en temps réel",
      "Suivi des paiements et historique",
      "Alertes qualité et conseils vétérinaires",
      "Mise en relation avec les transformateurs",
    ],
  },
  {
    key: "transformateurs",
    label: "Transformateurs",
    emoji: "⚗️",
    color: "#E87020",
    colorBg: "rgba(232,112,32,0.08)",
    colorBorder: "rgba(232,112,32,0.2)",
    headline: "Pilotez votre production",
    desc: "Gérez vos approvisionnements en lait, planifiez votre production et assurez la traçabilité de chaque lot fabriqué jusqu'au point de vente.",
    features: [
      "Gestion des approvisionnements",
      "Planification et suivi de production",
      "Traçabilité lot par lot",
      "Tableaux de bord qualité",
    ],
  },
  {
    key: "distributeurs",
    label: "Distributeurs",
    emoji: "🚚",
    color: "#FAD060",
    colorBg: "rgba(250,208,96,0.1)",
    colorBorder: "rgba(250,208,96,0.3)",
    headline: "Optimisez vos livraisons",
    desc: "Recevez les commandes, organisez vos tournées de livraison et maintenez un stock optimal. Proxilait vous aide à livrer plus vite et mieux.",
    features: [
      "Réception et gestion des commandes",
      "Planification des tournées",
      "Suivi des stocks en temps réel",
      "Rapports de livraison automatiques",
    ],
  },
  {
    key: "consommateurs",
    label: "Consommateurs",
    emoji: "😊",
    color: "#7B1C1C",
    colorBg: "rgba(123,28,28,0.06)",
    colorBorder: "rgba(123,28,28,0.15)",
    headline: "Commandez, tracez, savourez",
    desc: "Passez commande depuis chez vous, suivez votre livraison en direct et scannez vos produits pour connaître leur origine exacte. La confiance, à portée de main.",
    features: [
      "Commande en ligne et livraison à domicile",
      "Suivi de livraison en temps réel",
      "Scanner QR pour tracer l'origine",
      "Programme de fidélité et offres exclusives",
    ],
  },
];

const features = [
  {
    icon: "📍",
    title: "Traçabilité complète",
    desc: "Du troupeau à l'assiette, chaque produit est référencé et traçable via un QR code unique.",
  },
  {
    icon: "💬",
    title: "Communication directe",
    desc: "Éleveurs, transformateurs et distributeurs échangent en temps réel sans intermédiaire.",
  },
  {
    icon: "📊",
    title: "Tableaux de bord",
    desc: "Des données claires pour prendre les bonnes décisions, que vous soyez éleveur ou directeur d'usine.",
  },
  {
    icon: "🔔",
    title: "Alertes intelligentes",
    desc: "Notifications sur les collectes, livraisons, paiements et événements critiques de la chaîne.",
  },
  {
    icon: "🌐",
    title: "Accessible partout",
    desc: "Optimisé pour les connexions lentes, avec un mode hors-ligne pour les zones rurales.",
  },
  {
    icon: "🔒",
    title: "Données sécurisées",
    desc: "Vos informations et transactions sont chiffrées et protégées à chaque étape.",
  },
];

export default function ProxilaitPage() {
  const [activeRole, setActiveRole] = useState(0);

  return (
    <div
      className="min-h-screen max-w-460 mx-auto bg-[#F5F0E8]"
    >
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative pt-14 min-h-[96dvh] bg-[#0B1F14] overflow-hidden flex items-center">
        {/* Décor fond */}
        <div className="absolute top-0 left-0 w-125 h-125 bg-[#5A8C1A]/15 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/3" />
        <div className="absolute bottom-0 right-0 w-100 h-100 bg-[#C9A227]/10 rounded-full blur-[100px] translate-x-1/3 translate-y-1/3" />

        <div className="relative z-10 w-full grid grid-cols-1 lg:grid-cols-2 items-center gap-12 px-8 md:px-12 py-16">
          {/* Texte */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="order-2 lg:order-1"
          >
            <span className="inline-flex items-center gap-2 text-[11px] font-medium text-[#A8E060] tracking-[0.15em] uppercase border border-[#5A8C1A]/40 bg-[#5A8C1A]/10 px-3.5 py-1.5 rounded-full mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#A8E060] animate-pulse" />
              Application mobile
            </span>

            <h1
              className="font-serif text-[44px] md:text-[58px] text-white leading-[1.1] mb-5"
            >
              La filière laitière{" "}
              <em className="text-[#FAD060] not-italic">connectée</em>,{" "}
              <br className="hidden md:block" />
              de l'éleveur au consommateur
            </h1>

            <p className="text-[15px] text-white/60 leading-relaxed mb-8 max-w-lg">
              Proxilait digitalise la chaîne de valeur du lait nigérien. Une application, quatre acteurs, un seul objectif : plus de transparence, plus d'efficacité, plus de valeur.
            </p>

            {/* Stats */}
            <div className="flex gap-8 mb-10">
              {[
                { val: "4", label: "Rôles utilisateurs" },
                { val: "20+", label: "Éleveurs connectés" },
                { val: "100%", label: "Traçabilité" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="text-[#FAD060] text-[22px] font-bold leading-none">
                    {s.val}
                  </div>
                  <div className="text-[11px] text-white/40 mt-1">{s.label}</div>
                </div>
              ))}
            </div>

            {/* Boutons téléchargement */}
            <AppStoreButtons dark />
          </motion.div>

          {/* Téléphone */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-center items-center order-1 lg:order-2"
          >
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-56 h-120 md:w-64 md:h-137.5"
            >
              <Image
                src="/images/phone.png"
                alt="Application Proxilait"
                fill
                sizes="(max-width: 1024px) 80vw, 40vw"
                className="object-contain drop-shadow-[0_40px_80px_rgba(0,0,0,0.5)]"
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Vague de transition */}
        <div className="absolute bottom-0 inset-x-0 h-16 bg-linear-to-t from-[#F5F0E8] to-transparent" />
      </section>

      {/* ── POUR QUI ─────────────────────────────────────────── */}
      <section className="bg-[#F5F0E8] py-16 px-8 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <div className="text-[10px] font-medium text-[#5A8C1A] tracking-[0.12em] uppercase mb-2">
            Conçu pour toute la filière
          </div>
          <h2
            className="font-serif text-[30px] md:text-[36px] text-[#7B1C1C] leading-snug"
          >
            Une plateforme, quatre acteurs
          </h2>
        </motion.div>

        {/* Onglets rôles */}
        <div className="flex gap-2 flex-wrap mb-8">
          {roles.map((r, i) => (
            <button
              key={r.key}
              onClick={() => setActiveRole(i)}
              className="flex items-center gap-2 px-4 py-2 rounded-full text-[13px] font-medium transition-all duration-200 cursor-pointer"
              style={
                activeRole === i
                  ? { background: r.color, color: "#fff" }
                  : { background: "rgba(123,28,28,0.06)", color: "#7B1C1C" }
              }
            >
              <span>{r.emoji}</span>
              {r.label}
            </button>
          ))}
        </div>

        {/* Contenu rôle actif */}
        {roles.map((r, i) => (
          <motion.div
            key={r.key}
            initial={false}
            animate={{ opacity: activeRole === i ? 1 : 0, y: activeRole === i ? 0 : 10 }}
            transition={{ duration: 0.3 }}
            className={`${activeRole === i ? "block" : "hidden"}`}
          >
            <div
              className="rounded-3xl p-8 md:p-10 border grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
              style={{ background: r.colorBg, borderColor: r.colorBorder }}
            >
              {/* Gauche */}
              <div>
                <div className="text-4xl mb-4">{r.emoji}</div>
                <h3
                  className="font-serif text-[26px] text-[#2C1A0E] mb-3 leading-snug"
                >
                  {r.headline}
                </h3>
                <p className="text-[14px] text-[#5a3a2a] leading-relaxed mb-6">
                  {r.desc}
                </p>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="text-white rounded-xl px-6 py-3 text-[13px] font-medium cursor-pointer"
                  style={{ background: r.color }}
                >
                  Télécharger Proxilait
                </motion.button>
              </div>

              {/* Droite : liste features */}
              <div className="flex flex-col gap-3">
                {r.features.map((f, j) => (
                  <motion.div
                    key={j}
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: j * 0.07 }}
                    className="flex items-start gap-3"
                  >
                    <span
                      className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                      style={{ background: r.color }}
                    >
                      <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                        <path d="M2 6l3 3 5-5" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span className="text-[14px] text-[#3a2a1a] leading-snug">{f}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </section>

      {/* ── FONCTIONNALITÉS ──────────────────────────────────── */}
      <section className="bg-white py-16 px-8 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <div className="text-[10px] font-medium text-[#5A8C1A] tracking-[0.12em] uppercase mb-2">
            Ce que Proxilait offre
          </div>
          <h2
            className="font-serif text-[30px] md:text-[36px] text-[#7B1C1C] leading-snug"
          >
            Tout ce dont la filière a besoin
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="bg-[#F5F0E8] rounded-3xl p-8 flex items-center gap-6"
            >
              <div className="w-16 h-16 rounded-2xl bg-[#7B1C1C]/8 flex items-center justify-center text-3xl shrink-0">
                {f.icon}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-serif text-[18px] text-[#7B1C1C] mb-1">
                  {f.title}
                </h3>
                <p className="text-[13px] text-[#7a5a4a] leading-relaxed">{f.desc}</p>
              </div>
              <span className="text-[36px] font-bold text-[#7B1C1C]/6 shrink-0 hidden sm:block select-none leading-none">
                {String(i + 1).padStart(2, "0")}
              </span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── TÉLÉCHARGER ──────────────────────────────────────── */}
      <section className="bg-[#0B1F14] py-20 px-8 md:px-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#C9A227]/10 rounded-full blur-[80px] translate-x-1/2 -translate-y-1/4" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#5A8C1A]/15 rounded-full blur-[60px] -translate-x-1/3 translate-y-1/3" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 items-center gap-12">
          {/* Texte */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="text-[10px] font-medium text-[#A8E060] tracking-[0.15em] uppercase mb-3">
              Disponible maintenant
            </div>
            <h2
              className="font-serif text-[32px] md:text-[42px] text-white leading-[1.15] mb-4"
            >
              Rejoignez la filière <br />
              <em className="text-[#FAD060] not-italic">intelligente</em>
            </h2>
            <p className="text-[14px] text-white/55 leading-relaxed mb-8 max-w-lg">
              Téléchargez Proxilait gratuitement, créez votre profil selon votre rôle et commencez à transformer votre quotidien dans la filière laitière nigérienne.
            </p>

            <div className="mb-8">
              <AppStoreButtons dark />
            </div>

            <p className="text-[12px] text-white/30">
              Ou scannez le QR code →
            </p>
          </motion.div>

          {/* QR code */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col items-center gap-5"
          >
            <div className="bg-white p-4 rounded-3xl shadow-2xl">
              <div className="relative w-44 h-44">
                <Image
                  src="/images/qrcode_www.facebook.com.png"
                  alt="QR code Proxilait"
                  fill
                  sizes="200px"
                  className="object-contain rounded-2xl"
                />
              </div>
            </div>
            <div className="text-center">
              <p className="text-white/70 text-[12px] font-medium tracking-wide uppercase mb-1">
                Scannez pour télécharger
              </p>
              <p className="text-white/30 text-[11px]">iOS & Android</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <CTABanner
        title="Des questions sur Proxilait ?"
        subtitle="Notre équipe est disponible pour vous accompagner dans votre intégration à la plateforme."
        buttons={[
          { label: "Nous contacter", href: "/contact", variant: "primary" },
          { label: "Voir nos produits", href: "/produits", variant: "outline" },
        ]}
      />

    </div>
  );
}
