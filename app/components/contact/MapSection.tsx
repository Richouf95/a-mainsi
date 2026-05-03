"use client";

import { motion } from "motion/react";
import dynamic from "next/dynamic";

const Map = dynamic(() => import("@/app/contact/Map"), { ssr: false });

export default function MapSection() {
  return (
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
        <h2 className="font-serif text-[28px] text-[#7B1C1C] mb-4">
          Nos points de vente à Niamey
        </h2>

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
  );
}
