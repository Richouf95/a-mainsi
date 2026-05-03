"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  href: string;
  label: string;
};

export default function NavActiveLink({ href, label }: Props) {
  const pathname = usePathname();
  const isActive = pathname === href || pathname.startsWith(href + "/");

  return (
    <Link
      href={href}
      className={`text-[13px] tracking-wide transition-colors ${
        isActive
          ? "text-white font-medium underline underline-offset-4 decoration-white/40"
          : "text-white/80 hover:text-white"
      }`}
    >
      {label}
    </Link>
  );
}
