"use client";

import { motion } from "motion/react";
import Image from "next/image";

export default function HeroSection() {
  return (
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
        <h1 className="font-serif text-[42px] md:text-[58px] text-white leading-[1.08] mb-6">
          Nés au Niger,
          <br />
          <em className="text-[#FAD060] not-italic">engagés pour sa filière</em>
        </h1>
        <p className="text-[16px] text-white/60 leading-relaxed max-w-xl">
          A&apos;mansi est une laiterie-fromagerie nigérienne fondée sur une conviction simple : le lait produit localement mérite d&apos;être valorisé localement — par des mains locales, pour des familles locales.
        </p>
      </motion.div>
    </section>
  );
}
