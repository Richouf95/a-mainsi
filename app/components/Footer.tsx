import Image from "next/image";
import Link from "next/link";

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
            {[
              { label: "Accueil", href: "/" },
              { label: "Nos produits", href: "/produits" },
              { label: "Proxilait", href: "/proxilait" },
              { label: "À propos", href: "/apropos" },
              { label: "Impact", href: "/impact" },
              { label: "Actualités", href: "/actualites" },
            ].map((l) => (
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
            <span className="text-xs text-white/40">Niamey, Niger</span>
            <a
              href="mailto:societeamansi@gmail.com"
              className="text-xs text-white/40 hover:text-white/70 transition-colors"
            >
              societeamansi@gmail.com
            </a>
            <a
              href="tel:+22787511111"
              className="text-xs text-white/40 hover:text-white/70 transition-colors"
            >
              +227 87 51 11 11
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
