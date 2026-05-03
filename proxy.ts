import { NextRequest, NextResponse } from "next/server";

// ── Bots et scrapers connus ──────────────────────────────────────────────────
const BAD_BOTS = [
  // Scrapers commerciaux
  "ahrefsbot", "semrushbot", "dotbot", "mj12bot", "blexbot", "majestic",
  "rogerbot", "exabot", "gigabot", "seznambot",
  // Outils d'attaque
  "sqlmap", "nikto", "nmap", "masscan", "zgrab", "nuclei",
  // Clients HTTP bruts souvent utilisés pour le scraping/attaques
  "python-requests", "python-urllib", "go-http-client", "java/",
  "libwww-perl", "lwp-trivial",
];

// ── Chemins d'exploitation courants ─────────────────────────────────────────
const EXPLOIT_PATHS = [
  "/wp-admin", "/wp-login", "/wp-content", "/xmlrpc.php",  // WordPress
  "/.env", "/.git", "/.htaccess", "/config.php",           // Fichiers sensibles
  "/admin", "/phpmyadmin", "/cgi-bin",                     // Panneaux d'admin
  "/etc/passwd", "/proc/self",                              // Path traversal
];

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const ua = request.headers.get("user-agent")?.toLowerCase() ?? "";

  // 1. Bloquer les requêtes sans user-agent (bots automatisés bruts)
  if (!ua) {
    return new NextResponse("Forbidden", { status: 403 });
  }

  // 2. Bloquer les bots malveillants identifiés
  if (BAD_BOTS.some((bot) => ua.includes(bot))) {
    return new NextResponse("Forbidden", { status: 403 });
  }

  // 3. Bloquer les tentatives d'exploitation de chemins connus
  const lowerPath = pathname.toLowerCase();
  if (EXPLOIT_PATHS.some((p) => lowerPath.startsWith(p))) {
    return new NextResponse("Not Found", { status: 404 });
  }

  // 4. Bloquer les tentatives d'injection dans l'URL (encodées et brutes)
  const rawUrl = request.url;
  const decodedUrl = (() => {
    try { return decodeURIComponent(rawUrl); } catch { return rawUrl; }
  })();
  const urlToCheck = rawUrl + " " + decodedUrl;
  if (
    urlToCheck.includes("../") ||
    urlToCheck.includes("<script") ||
    /SELECT\s/i.test(urlToCheck) ||
    /UNION\s/i.test(urlToCheck) ||
    urlToCheck.includes("eval(") ||
    urlToCheck.includes("base64_decode")
  ) {
    return new NextResponse("Bad Request", { status: 400 });
  }

  return NextResponse.next();
}

export const config = {
  // S'applique à toutes les routes sauf les assets statiques Next.js
  matcher: "/((?!_next/static|_next/image|favicon.ico|images/).*)",
};
