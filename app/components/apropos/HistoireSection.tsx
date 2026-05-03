"use client";

import { motion } from "motion/react";
import Image from "next/image";

export default function HistoireSection() {
  return (
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
          <h2 className="font-serif text-[30px] md:text-[36px] text-[#7B1C1C] leading-snug mb-6">
            D&apos;une frustration naît une entreprise
          </h2>
          <div className="flex flex-col gap-4 text-[14px] text-[#5a3a2a] leading-[1.85]">
            <p>
              A&apos;mansi est née d&apos;un constat : le Niger est un pays d&apos;éleveurs, riche en lait local, mais ses marchés sont inondés de poudre importée. Une aberration économique et culturelle que ses fondateurs ont décidé de corriger.
            </p>
            <p>
              En partant des savoir-faire ancestraux des femmes peules — le Tchoukou, le Hindirmou, le lait fermenté — l&apos;équipe a construit un atelier de transformation artisanale à Niamey, avec une exigence : chaque produit doit être traçable, abordable et fièrement nigérien.
            </p>
            <p>
              Aujourd&apos;hui, A&apos;mansi ne se contente plus de transformer. Elle structure toute une filière — de l&apos;éleveur au consommateur — grâce à des partenariats directs et à une plateforme numérique : Proxilait.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative h-95 rounded-3xl overflow-hidden"
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
              <p className="font-serif text-[14px] text-white italic leading-snug">
                &ldquo;Le bon goût local&rdquo; — pas un slogan. Une ligne de conduite.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
