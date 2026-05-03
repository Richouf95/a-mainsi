import type { NextConfig } from "next";

const csp = [
  "default-src 'self'",
  // Next.js a besoin de 'unsafe-inline' et 'unsafe-eval' pour son runtime (hydration)
  "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
  // Tailwind et motion génèrent des styles inline
  "style-src 'self' 'unsafe-inline'",
  // Images locales + tuiles OpenStreetMap + icônes Leaflet (unpkg)
  "img-src 'self' data: blob: *.tile.openstreetmap.org unpkg.com",
  // Requêtes réseau : API carte OpenStreetMap uniquement
  "connect-src 'self' *.tile.openstreetmap.org",
  // Polices locales uniquement
  "font-src 'self' data:",
  // Aucune iframe externe autorisée
  "frame-src 'none'",
  "frame-ancestors 'self'",
  // Aucun plugin (Flash, etc.)
  "object-src 'none'",
  // Empêche la redéfinition de base URL via <base>
  "base-uri 'self'",
  // Les formulaires ne peuvent soumettre que vers ce site
  "form-action 'self'",
  // Force le navigateur à upgrader HTTP → HTTPS automatiquement
  "upgrade-insecure-requests",
].join("; ");

const securityHeaders = [
  // Force HTTPS pendant 2 ans, inclut les sous-domaines, éligible preload
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  { key: "X-DNS-Prefetch-Control", value: "on" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-XSS-Protection", value: "1; mode=block" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
  { key: "Content-Security-Policy", value: csp },
];

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
  logging: {
    fetches: {
      fullUrl: false,
    },
  },
};

export default nextConfig;
