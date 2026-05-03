"use client";

import { motion } from "motion/react";
import Image from "next/image";
import AppStoreButtons from "@/app/components/ui/AppStoreButtons";

export default function DownloadSection() {
  return (
    <section className="bg-[#0B1F14] py-20 px-8 md:px-12 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#C9A227]/10 rounded-full blur-[80px] translate-x-1/2 -translate-y-1/4" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#5A8C1A]/15 rounded-full blur-[60px] -translate-x-1/3 translate-y-1/3" />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 items-center gap-12">
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
          <h2 className="font-serif text-[32px] md:text-[42px] text-white leading-[1.15] mb-4">
            Rejoignez la filière <br />
            <em className="text-[#FAD060] not-italic">intelligente</em>
          </h2>
          <p className="text-[14px] text-white/55 leading-relaxed mb-8 max-w-lg">
            Téléchargez Proxilait gratuitement, créez votre profil selon votre rôle et commencez à transformer votre quotidien dans la filière laitière nigérienne.
          </p>

          <div className="mb-8">
            <AppStoreButtons dark />
          </div>

          <p className="text-[12px] text-white/30">Ou scannez le QR code →</p>
        </motion.div>

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
  );
}
