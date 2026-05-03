"use client";

import { motion } from "motion/react";
import Link from "next/link";

type CTAButton = {
  label: string;
  href: string;
  variant: "primary" | "outline";
};

type CTABannerProps = {
  title: string;
  subtitle: string;
  buttons: CTAButton[];
  /** Couleur de fond hex (default: #E87020 orange) */
  bg?: string;
};

export default function CTABanner({
  title,
  subtitle,
  buttons,
  bg = "#E87020",
}: CTABannerProps) {
  return (
    <section
      className="py-12 px-8 md:px-12 flex items-center justify-between gap-8 flex-col md:flex-row"
      style={{ background: bg }}
    >
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-serif text-[28px] text-white mb-2">{title}</h2>
        <p className="text-[14px] text-white/80">{subtitle}</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-col sm:flex-row gap-3 w-full md:w-auto"
      >
        {buttons.map((btn) => (
          <Link key={btn.label} href={btn.href}>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`w-full sm:w-52 rounded-lg px-6 py-3 text-[13px] font-medium cursor-pointer transition-colors ${
                btn.variant === "primary"
                  ? "bg-white text-[#E87020]"
                  : "bg-transparent border border-white/30 text-white hover:bg-white/10"
              }`}
              style={
                btn.variant === "primary" ? { color: bg } : undefined
              }
            >
              {btn.label}
            </motion.button>
          </Link>
        ))}
      </motion.div>
    </section>
  );
}
