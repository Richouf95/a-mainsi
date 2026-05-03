"use client";

import { motion } from "motion/react";
import Image from "next/image";

export default function HeroSection() {
  return (
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
        <h1 className="font-serif text-[44px] md:text-[58px] text-white leading-[1.08]">
          Votre voix compte,{" "}
          <em className="text-[#FAD060] not-italic">parlez-nous</em>
        </h1>
      </motion.div>
    </section>
  );
}
