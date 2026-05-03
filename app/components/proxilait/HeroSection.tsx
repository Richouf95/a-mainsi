"use client";

import { motion } from "motion/react";
import Image from "next/image";
import AppStoreButtons from "@/app/components/ui/AppStoreButtons";

export default function HeroSection() {
  return (
    <section className="relative pt-14 min-h-[96dvh] bg-[#0B1F14] overflow-hidden flex items-center">
      <div className="absolute top-0 left-0 w-125 h-125 bg-[#5A8C1A]/15 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/3" />
      <div className="absolute bottom-0 right-0 w-100 h-100 bg-[#C9A227]/10 rounded-full blur-[100px] translate-x-1/3 translate-y-1/3" />

      <div className="relative z-10 w-full grid grid-cols-1 lg:grid-cols-2 items-center gap-2 md:gap-12 px-8 md:px-12 py-16 pt-0 md:pt-16">
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

          <h1 className="font-serif text-[44px] md:text-[58px] text-white leading-[1.1] mb-5">
            La filière laitière{" "}
            <em className="text-[#FAD060] not-italic">connectée</em>,{" "}
            <br className="hidden md:block" />
            de l'éleveur au consommateur
          </h1>

          <p className="text-[15px] text-white/60 leading-relaxed mb-8 max-w-lg">
            Proxilait digitalise la chaîne de valeur du lait nigérien. Une application, quatre acteurs, un seul objectif : plus de transparence, plus d'efficacité, plus de valeur.
          </p>

          <div className="flex gap-8 mb-10">
            {[
              { val: "4", label: "Rôles utilisateurs" },
              { val: "20+", label: "Éleveurs connectés" },
              { val: "100%", label: "Traçabilité" },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-[#FAD060] text-[22px] font-bold leading-none">{s.val}</div>
                <div className="text-[11px] text-white/40 mt-1">{s.label}</div>
              </div>
            ))}
          </div>

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
            className="relative w-72 h-120 md:w-96 md:h-137.5"
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

      <div className="absolute bottom-0 inset-x-0 h-16 bg-linear-to-t from-[#F5F0E8] to-transparent" />
    </section>
  );
}
