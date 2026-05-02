import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const BASE_URL = "https://amansi.ne";

export const metadata: Metadata = {
  title: {
    default: "A'mansi — Laiterie Fromagerie du Niger",
    template: "%s | A'mansi",
  },
  description:
    "A'mansi est une laiterie-fromagerie nigérienne qui transforme le lait local en produits artisanaux de qualité : Tchoukou, Hindirmou, yaourts et plus. Filière équitable, traçable et numérisée via Proxilait.",
  keywords: [
    "laiterie Niger",
    "fromagerie Niamey",
    "Tchoukou",
    "Hindirmou",
    "lait local Niger",
    "Proxilait",
    "filière laitière",
    "produits laitiers artisanaux",
  ],
  authors: [{ name: "A'mansi" }],
  creator: "A'mansi",
  metadataBase: new URL(BASE_URL),
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: BASE_URL,
    siteName: "A'mansi",
    title: "A'mansi — Laiterie Fromagerie du Niger",
    description:
      "Produits laitiers artisanaux nigériens — Tchoukou, Hindirmou, yaourts. Une filière équitable du troupeau à l'assiette.",
    images: [
      {
        url: "/images/a-mansi-logo-without-bg.png",
        width: 865,
        height: 288,
        alt: "A'mansi — Laiterie Fromagerie du Niger",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "A'mansi — Laiterie Fromagerie du Niger",
    description:
      "Produits laitiers artisanaux nigériens — Tchoukou, Hindirmou, yaourts. Une filière équitable du troupeau à l'assiette.",
    images: ["/images/a-mansi-logo-without-bg.png"],
  },
  icons: {
    icon: "/icon.jpg",
    apple: "/icon.jpg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="h-full">
      <body className="min-h-full">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}