import Image from "next/image";
import Link from "next/link";
import { navLinks } from "@/app/lib/constants";
import NavActiveLink from "./NavActiveLink";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#7B1C1C]/75 backdrop-blur-lg flex items-center justify-between px-8 h-14 max-w-460 mx-auto shadow-[0_4px_20px_rgba(0,0,0,0.2)]">
      {/* Logo */}
      <Link href="/" className="flex items-center gap-3 shrink-0">
        <div className="relative w-14 h-10">
          <Image
            src="/images/logo.jpg"
            alt="A'mansi"
            fill
            sizes="56px"
            priority
            className="rounded-md object-cover"
          />
        </div>
      </Link>

      {/* Desktop links */}
      <ul className="hidden md:flex gap-7 list-none">
        {navLinks.map((item) => (
          <li key={item.href}>
            <NavActiveLink href={item.href} label={item.label} />
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

      {/* Mobile menu */}
      <MobileMenu />
    </nav>
  );
}
