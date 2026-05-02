"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Accueil", href: "/" },
  { label: "Nos produits", href: "/produits" },
  { label: "Proxilait", href: "/proxilait" },
  { label: "Impact", href: "/impact" },
  { label: "Actualités", href: "/actualites" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(href + "/");

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#7B1C1C]/75 backdrop-blur-lg flex items-center justify-between px-8 h-14 max-w-460 mx-auto shadow-[0_4px_20px_rgba(0,0,0,0.2)]">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <div className="relative w-14 h-10">
            <Image
              src="/images/logo.jpg"
              alt="A'mansi"
              fill
              className="rounded-md object-cover"
            />
          </div>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-7 list-none">
          {navLinks.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`text-[13px] tracking-wide transition-colors ${
                  isActive(item.href)
                    ? "text-white font-medium underline underline-offset-4 decoration-white/40"
                    : "text-white/80 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <Link
          href="/contact"
          className="hidden md:flex bg-[#90C528] text-white rounded-md px-5 py-2 text-[13px] font-medium hover:bg-[#3B6D11] transition-colors"
        >
          Nous contacter
        </Link>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(true)}
          className="md:hidden text-white"
          aria-label="Ouvrir le menu"
        >
          <Menu size={24} />
        </button>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div
          className="fixed inset-0 z-50 bg-black/30 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        >
          <div
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
                    ? "text-white font-semibold"
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
          </div>
        </div>
      )}
    </>
  );
}
