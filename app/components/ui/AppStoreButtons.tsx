"use client";

import { motion } from "motion/react";
import Image from "next/image";

type AppStoreButtonsProps = {
  /** Thème sombre (fond sombre, bouton Play transparent) ou clair */
  dark?: boolean;
};

export default function AppStoreButtons({ dark = false }: AppStoreButtonsProps) {
  return (
    <div className="flex gap-3 flex-wrap items-center justify-center">
      {/* App Store */}
      <motion.div
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        className={`flex items-center min-w-52 gap-3 rounded-xl px-5 py-3 cursor-pointer shadow-lg ${
          dark ? "bg-white text-[#0B1F14]" : "bg-[#0B1F14] text-white"
        }`}
      >
        <div className="relative w-6 h-6 shrink-0">
          <Image
            src="/images/appstore.png"
            alt="App Store"
            fill
            sizes="24px"
            className="object-contain"
          />
        </div>
        <div className="flex flex-col leading-none">
          <span className={`text-[9px] ${dark ? "text-black/50" : "text-white/50"}`}>
            Download on
          </span>
          <span className="text-[13px] font-semibold">App Store</span>
        </div>
      </motion.div>

      {/* Google Play */}
      <motion.div
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        className={`flex items-center min-w-52 gap-3 rounded-xl px-5 py-3 cursor-pointer ${
          dark
            ? "bg-white/10 border border-white/20 text-white"
            : "bg-white/10 border border-[#0B1F14]/20 text-[#0B1F14]"
        }`}
      >
        <div className="relative w-6 h-6 shrink-0">
          <Image
            src="/images/play-store.png"
            alt="Google Play"
            fill
            sizes="24px"
            className="object-contain"
          />
        </div>
        <div className="flex flex-col leading-none">
          <span className={`text-[9px] ${dark ? "text-white/50" : "text-black/50"}`}>
            Get it on
          </span>
          <span className="text-[13px] font-semibold">Google Play</span>
        </div>
      </motion.div>
    </div>
  );
}
