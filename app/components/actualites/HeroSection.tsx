"use client";

import { motion } from "motion/react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative pt-14 h-[44dvh] bg-[#2C1A0E] overflow-hidden flex items-end">
      <div className="absolute inset-0">
        <Image
          src="/images/a-mansi-hero.png"
          alt=""
          fill
          sizes="100vw"
          priority
          className="object-cover object-center opacity-20"
        />
      </div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#7B1C1C]/25 rounded-full blur-[100px] translate-x-1/3 -translate-y-1/4" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 px-8 md:px-12 pb-14"
      >
        <span className="inline-flex items-center gap-2 text-[11px] font-medium text-white/60 tracking-[0.15em] uppercase border border-white/15 bg-white/6 px-3.5 py-1.5 rounded-full mb-5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#FAD060]" />
          Actualités
        </span>
        <h1 className="font-serif text-[38px] md:text-[54px] text-white leading-[1.1]">
          Dernières nouvelles
          <br />
          <em className="text-[#FAD060] not-italic">d&apos;A&apos;mansi</em>
        </h1>
      </motion.div>
    </section>
  );
}
