"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import { useState } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Map = dynamic(() => import("./Map"), { ssr: false });

const roles = [
  { value: "eleveur", label: "Éleveur" },
  { value: "transformateur", label: "Transformateur" },
  { value: "distributeur", label: "Distributeur" },
  { value: "consommateur", label: "Consommateur" },
  { value: "partenaire", label: "Partenaire / Institution" },
  { value: "media", label: "Média / Presse" },
  { value: "autre", label: "Autre" },
];

const sujets = [
  { value: "commande", label: "Passer une commande" },
  { value: "proxilait", label: "Rejoindre Proxilait" },
  { value: "partenariat", label: "Proposition de partenariat" },
  { value: "recrutement", label: "Recrutement" },
  { value: "presse", label: "Demande presse" },
  { value: "autre", label: "Autre demande" },
];

const infos = [
  {
    icon: MapPin,
    label: "Adresse",
    value: "Niamey, Niger",
    sub: "Quartier Plateau",
    color: "#7B1C1C",
    colorBg: "rgba(123,28,28,0.07)",
  },
  {
    icon: Phone,
    label: "Téléphone",
    value: "+227 87 51 11 11",
    sub: "Lun – Sam, 8h – 18h",
    color: "#5A8C1A",
    colorBg: "rgba(90,140,26,0.07)",
  },
  {
    icon: Mail,
    label: "Email",
    value: "societeamansi@gmail.com",
    sub: "Réponse sous 24h",
    color: "#E87020",
    colorBg: "rgba(232,112,32,0.07)",
  },
  {
    icon: Clock,
    label: "Horaires",
    value: "Lun – Sam",
    sub: "8h00 – 18h00",
    color: "#C9A227",
    colorBg: "rgba(201,162,39,0.08)",
  },
];

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    nom: "",
    email: "",
    telephone: "",
    role: "",
    sujet: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  const inputClass =
    "w-full bg-[#F5F0E8] border border-[#7B1C1C]/12 rounded-xl px-4 py-3 text-[14px] text-[#2C1A0E] placeholder-[#9a7a6a] focus:outline-none focus:border-[#7B1C1C]/40 focus:bg-white transition-all duration-200";

  const labelClass = "block text-[11px] font-medium text-[#7B1C1C]/70 tracking-wide uppercase mb-1.5";

  return (
    <div
      className="min-h-screen max-w-460 mx-auto bg-[#F5F0E8]"
    >
      {/* ── HERO ──────────────────────────────────────────────── */}
      <section className="relative pt-14 h-[52dvh] bg-[#2C1A0E] overflow-hidden flex items-end">
        <div className="absolute inset-0">
          <Image src="/images/a-mansi-hero.png" alt="" fill sizes="100vw" priority className="object-cover object-center opacity-20" />
        </div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#7B1C1C]/30 rounded-full blur-[100px] -translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#E87020]/20 rounded-full blur-[80px] translate-x-1/4 translate-y-1/4" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 px-8 md:px-12 pb-12 w-full"
        >
          <span className="inline-flex items-center gap-2 text-[11px] font-medium text-white/60 tracking-[0.15em] uppercase border border-white/15 bg-white/6 px-3.5 py-1.5 rounded-full mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#A8E060]" />
            On vous répond sous 24h
          </span>
          <h1
            className="font-serif text-[44px] md:text-[58px] text-white leading-[1.08]"
          >
            Votre voix compte,{" "}
            <em className="text-[#FAD060] not-italic">parlez-nous</em>
          </h1>
        </motion.div>
      </section>

      {/* ── FORMULAIRE + INFOS ────────────────────────────────── */}
      <section className="bg-white py-16 px-8 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">

          {/* Formulaire — col 3 */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col items-center justify-center text-center py-16 gap-5"
              >
                <div className="w-16 h-16 rounded-full bg-[#5A8C1A]/10 flex items-center justify-center text-3xl">
                  ✅
                </div>
                <h3
                  className="font-serif text-[26px] text-[#7B1C1C]"
                >
                  Message envoyé !
                </h3>
                <p className="text-[14px] text-[#7a5a4a] leading-relaxed max-w-sm">
                  Merci pour votre message. Notre équipe vous répondra dans les 24 heures.
                </p>
                <button
                  onClick={() => { setSent(false); setForm({ nom: "", email: "", telephone: "", role: "", sujet: "", message: "" }); }}
                  className="text-[13px] text-[#7B1C1C] font-medium border-b border-[#7B1C1C]/30 pb-0.5 hover:border-[#7B1C1C] transition-colors cursor-pointer"
                >
                  Envoyer un autre message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div>
                  <div className="text-[10px] font-medium text-[#5A8C1A] tracking-[0.12em] uppercase mb-2">
                    Formulaire de contact
                  </div>
                  <h2
                    className="font-serif text-[28px] text-[#7B1C1C]"
                  >
                    Envoyez-nous un message
                  </h2>
                </div>

                {/* Nom + Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className={labelClass}>Nom complet *</label>
                    <input
                      required
                      type="text"
                      placeholder="Votre nom"
                      value={form.nom}
                      onChange={(e) => setForm({ ...form, nom: e.target.value })}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className={labelClass}>Email *</label>
                    <input
                      required
                      type="email"
                      placeholder="votre@email.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className={inputClass}
                    />
                  </div>
                </div>

                {/* Téléphone + Rôle */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className={labelClass}>Téléphone</label>
                    <input
                      type="tel"
                      placeholder="+227 00 00 00 00"
                      value={form.telephone}
                      onChange={(e) => setForm({ ...form, telephone: e.target.value })}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className={labelClass}>Vous êtes *</label>
                    <select
                      required
                      value={form.role}
                      onChange={(e) => setForm({ ...form, role: e.target.value })}
                      className={inputClass}
                    >
                      <option value="" disabled>Sélectionner…</option>
                      {roles.map((r) => (
                        <option key={r.value} value={r.value}>{r.label}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Sujet */}
                <div>
                  <label className={labelClass}>Sujet *</label>
                  <div className="flex flex-wrap gap-2">
                    {sujets.map((s) => (
                      <button
                        key={s.value}
                        type="button"
                        onClick={() => setForm({ ...form, sujet: s.value })}
                        className="px-4 py-2 rounded-full text-[12px] font-medium transition-all duration-200 cursor-pointer border"
                        style={
                          form.sujet === s.value
                            ? { background: "#7B1C1C", color: "#fff", borderColor: "#7B1C1C" }
                            : { background: "transparent", color: "#7B1C1C", borderColor: "rgba(123,28,28,0.2)" }
                        }
                      >
                        {s.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className={labelClass}>Message *</label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Décrivez votre demande…"
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className={`${inputClass} resize-none`}
                  />
                </div>

                {/* Submit */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full sm:w-auto self-start bg-[#7B1C1C] text-white rounded-xl px-8 py-3.5 text-[14px] font-medium cursor-pointer hover:bg-[#6a1717] transition-colors"
                >
                  Envoyer le message →
                </motion.button>

                <p className="text-[11px] text-[#9a7a6a]">
                  * Champs obligatoires. Vos données ne sont pas partagées avec des tiers.
                </p>
              </form>
            )}
          </motion.div>

          {/* Infos — col 2 */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-2 flex flex-col gap-4 lg:pt-16"
          >
            {infos.map((info, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex items-start gap-4 p-5 rounded-2xl border border-[#7B1C1C]/8 bg-[#F5F0E8]"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: info.colorBg }}
                >
                  <info.icon size={18} style={{ color: info.color }} />
                </div>
                <div>
                  <div className="text-[11px] font-medium text-[#9a7a6a] tracking-wide uppercase mb-0.5">
                    {info.label}
                  </div>
                  <div className="text-[14px] font-medium text-[#2C1A0E]">{info.value}</div>
                  <div className="text-[12px] text-[#9a7a6a] mt-0.5">{info.sub}</div>
                </div>
              </motion.div>
            ))}

          </motion.div>
        </div>
      </section>

      {/* ── CARTE ─────────────────────────────────────────────── */}
      <section className="bg-[#F5F0E8] py-16 px-8 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="text-[10px] font-medium text-[#5A8C1A] tracking-[0.12em] uppercase mb-2">
            Où nous trouver
          </div>
          <h2
            className="font-serif text-[28px] text-[#7B1C1C] mb-4"
          >
            Nos points de vente à Niamey
          </h2>

          {/* Légende */}
          <div className="flex flex-wrap gap-4">
            {[
              { color: "#7B1C1C", label: "Siège & atelier" },
              { color: "#E87020", label: "Points de vente" },
              { color: "#5A8C1A", label: "Supermarchés" },
            ].map((l) => (
              <div key={l.label} className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full shrink-0" style={{ background: l.color }} />
                <span className="text-[12px] text-[#7a5a4a]">{l.label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Carte */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="rounded-3xl overflow-hidden border border-[#7B1C1C]/10 shadow-sm"
          style={{ height: 460 }}
        >
          <Map />
        </motion.div>
      </section>

    </div>
  );
}
