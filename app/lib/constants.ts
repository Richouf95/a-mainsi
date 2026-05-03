// ── Navigation ─────────────────────────────────────────────────────────────

export const navLinks = [
  { label: "Accueil", href: "/" },
  { label: "À propos", href: "/apropos" },
  { label: "Nos produits", href: "/produits" },
  { label: "Proxilait", href: "/proxilait" },
  { label: "Impact", href: "/impact" },
  { label: "Actualités", href: "/actualites" },
] as const;

// ── Brand colors ────────────────────────────────────────────────────────────
// Source of truth — correspond aux variables CSS dans globals.css

export const COLORS = {
  bordeaux: "#7B1C1C",
  green: "#5A8C1A",
  orange: "#E87020",
  yellow: "#FAD060",
  cream: "#F5F0E8",
  dark: "#2C1A0E",
  darkBrown: "#854F0B",
  darkGreen: "#0B1F14",
} as const;

// ── Contact ─────────────────────────────────────────────────────────────────

export const CONTACT = {
  email: "societeamansi@gmail.com",
  phone: "+227 87 51 11 11",
  address: "Niamey, Niger",
} as const;

// ── Site ────────────────────────────────────────────────────────────────────

export const SITE = {
  name: "A'mansi",
  tagline: "Le bon goût local",
  baseUrl: "https://amansi.ne",
} as const;
