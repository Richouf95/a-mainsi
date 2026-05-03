import Image from "next/image";
import Link from "next/link";
import { navLinks, CONTACT } from "@/app/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-[#2C1A0E] py-9 px-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-7">
        {/* Marque */}
        <div className="flex flex-col gap-y-3">
          <div className="mt-4 relative w-14 h-10">
            <Image
              src="/images/logo.jpg"
              alt="A'mansi"
              fill
              sizes="56px"
              className="rounded-md object-cover opacity-60"
            />
          </div>
          <p className="text-xs text-white/45 leading-relaxed">
            Fromagerie nigérienne engagée dans la valorisation du lait local.
            Transformation, distribution et innovation numérique au service de
            la filière.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <div className="text-[11px] font-medium text-white/70 tracking-widest uppercase mb-3">
            Navigation
          </div>
          <div className="flex flex-col gap-1.5">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-xs text-white/40 hover:text-white/70 transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Proxilait */}
        <div>
          <div className="text-[11px] font-medium text-white/70 tracking-widest uppercase mb-3">
            Proxilait
          </div>
          <div className="flex flex-col gap-1.5">
            {["Éleveurs", "Transformateurs", "Distributeurs", "Consommateurs"].map((l) => (
              <Link
                key={l}
                href="/proxilait"
                className="text-xs text-white/40 hover:text-white/70 transition-colors"
              >
                {l}
              </Link>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div>
          <div className="text-[11px] font-medium text-white/70 tracking-widest uppercase mb-3">
            Contact
          </div>
          <div className="flex flex-col gap-1.5">
            <span className="text-xs text-white/40">{CONTACT.address}</span>
            <a
              href={`mailto:${CONTACT.email}`}
              className="text-xs text-white/40 hover:text-white/70 transition-colors"
            >
              {CONTACT.email}
            </a>
            <a
              href={`tel:${CONTACT.phone.replace(/\s/g, '')}`}
              className="text-xs text-white/40 hover:text-white/70 transition-colors"
            >
              {CONTACT.phone}
            </a>
            <Link
              href="/contact"
              className="text-xs text-white/40 hover:text-white/70 transition-colors"
            >
              Nous contacter
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 pt-4 flex justify-center items-center">
        <span className="text-[11px] text-white/30 text-center">
          © {new Date().getFullYear()} {' '} A&apos;mansi Fromagerie. <br /> Tous droits réservés.
        </span>
      </div>
    </footer>
  );
}
