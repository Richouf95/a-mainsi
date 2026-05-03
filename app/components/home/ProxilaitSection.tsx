"use client";

import { motion } from "motion/react";
import Image from "next/image";

export default function ProxilaitSection() {
  return (
    <section id="proxilait" className="relative bg-[#FDF8F2] py-10 overflow-hidden">
      <div className="absolute top-0 left-0 w-40 h-40 bg-[#5A8C1A]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-52 h-52 bg-[#7B1C1C]/10 rounded-full blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative z-10"
      >
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#7B1C1C] leading-tight">
            Proxilait dans votre poche
          </h2>
        </div>

        <div className="relative overflow-hidden">
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[52%] bg-linear-to-r from-[#C9A227]/95 via-[#C9A227]/95 to-[#C9A227]/90 rotate-1 w-[150%] -ml-5" />
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[52%] bg-linear-to-r from-[#0E5B44]/95 via-[#0B6B4F]/95 to-[#0A5A44]/90 -rotate-1 w-[150%] -ml-5" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 items-center gap-10 px-8 md:px-12 md:py-16">
            <div className="drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]">
              <h3 className="text-2xl md:text-3xl font-bold uppercase leading-tight mb-6 text-[#5A3A2A] lg:text-white">
                Votre laiterie préférée,
                <br />
                partout avec vous.
              </h3>
              <ul className="space-y-3 text-sm md:text-base text-[#5A3A2A] lg:text-white">
                <li>- Commandes instantanées</li>
                <li>- Suivi de livraison en temps réel</li>
                <li>- Offres exclusives et fidélité</li>
              </ul>
            </div>

            <div className="relative flex justify-center">
              <motion.div
                whileHover={{ y: -8, rotate: -2 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.3 }}
                className="relative w-52 h-107.5 md:w-60 md:h-125 scale-170 md:scale-150 origin-center"
              >
                <Image
                  src="/images/phone.png"
                  alt="Application Proxilait"
                  fill
                  sizes="(max-width: 1024px) 80vw, 40vw"
                  className="object-contain"
                  loading="lazy"
                />
              </motion.div>
            </div>

            <div className="flex flex-col items-center text-center mt-5 md:mt-0">
              <span className="text-xs uppercase tracking-widest lg:text-white text-[#7B1C1C] mb-2">
                Disponible sur mobile
              </span>
              <div className="bg-white rounded-3xl shadow-xl border border-[#7B1C1C]/10">
                <div className="relative w-44 h-44">
                  <Image
                    src="/images/qrcode_www.facebook.com.png"
                    alt="QR code Proxilait"
                    fill
                    sizes="200px"
                    className="object-contain rounded-3xl"
                    loading="lazy"
                  />
                </div>
              </div>
              <p className="mt-6 lg:text-white text-[#7B1C1C] font-bold text-lg md:text-xl uppercase leading-tight tracking-[0.15em]">
                Scannez pour
                <br />
                télécharger
                <br />
                maintenant
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
