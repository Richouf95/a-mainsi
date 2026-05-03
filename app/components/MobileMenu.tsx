"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/app/lib/constants";
import { motion } from "motion/react";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(href + "/");

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="md:hidden text-white"
        aria-label="Ouvrir le menu"
      >
        <Menu size={24} />
      </button>

      {open && (
        <div
          className="fixed w-dvw h-dvh inset-0 z-50 bg-black/30"
          onClick={() => setOpen(false)}
        >
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.1 }}
            className="absolute right-0 top-0 h-full w-72 bg-[#7B1C1C] p-6 flex flex-col gap-6 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setOpen(false)}
              className="text-white self-end"
              aria-label="Fermer le menu"
            >
              <X size={24} />
            </button>

            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`text-base transition-colors ${
                  isActive(item.href)
                    ? "text-white font-semibold border-b-2 border-white"
                    : "text-white/80 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            ))}

            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-auto bg-[#5A8C1A] text-white rounded-md py-2 text-center text-[14px] font-medium"
            >
              Nous contacter
            </Link>
          </motion.div>
        </div>
      )}
    </>
  );
}
