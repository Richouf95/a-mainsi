export type Product = {
  slug: string;
  name: string;
  desc: string;
  volume: string;
  image?: string;
  emoji?: string;
  bg: string;
  badge?: string;
  badgeBg?: string;
  category: string;
  categorySlug: string;
  highlights: { icon: string; label: string }[];
};

export const allProducts: Product[] = [
  // — Lait frais —
  {
    slug: "lait-entier",
    name: "Lait entier",
    desc: "Lait frais pasteurisé, riche en matières grasses. Collecté quotidiennement auprès de nos éleveurs partenaires et conditionné dans les heures suivant la traite.",
    volume: "1L, 500ml",
    image: "/images/lait-frais-entier.png",
    bg: "#F0F8FF",
    category: "Lait frais",
    categorySlug: "lait-frais",
    highlights: [
      { icon: "🥛", label: "100% lait local" },
      { icon: "✅", label: "Pasteurisé" },
      { icon: "🌿", label: "Sans additifs" },
      { icon: "❄️", label: "Fraîcheur garantie" },
    ],
  },
  {
    slug: "lait-demi-ecreme",
    name: "Lait demi-écrémé",
    desc: "Lait frais pasteurisé, allégé en matières grasses. Idéal pour une consommation quotidienne équilibrée tout en conservant le goût authentique du lait local.",
    volume: "1L, 500ml",
    emoji: "🥛",
    bg: "#F5FCFF",
    category: "Lait frais",
    categorySlug: "lait-frais",
    highlights: [
      { icon: "⚖️", label: "Allégé en MG" },
      { icon: "✅", label: "Pasteurisé" },
      { icon: "🌿", label: "Sans additifs" },
      { icon: "💧", label: "Léger et digeste" },
    ],
  },
  {
    slug: "lait-caille",
    name: "Lait caillé",
    desc: "Lait fermenté naturellement, riche en probiotiques. Fabriqué selon la méthode traditionnelle nigérienne, il favorise une bonne digestion et une flore intestinale équilibrée.",
    volume: "500ml, 250ml",
    emoji: "🫙",
    bg: "#FFF5F5",
    category: "Lait frais",
    categorySlug: "lait-frais",
    highlights: [
      { icon: "🦠", label: "Riche en probiotiques" },
      { icon: "🌾", label: "Fermentation naturelle" },
      { icon: "💚", label: "Bon pour la digestion" },
      { icon: "🏺", label: "Recette traditionnelle" },
    ],
  },

  // — Yaourts —
  {
    slug: "yaourt-nature",
    name: "Yaourt nature",
    desc: "Yaourt au lait local, doux et naturellement fermenté. Notre produit phare, apprécié pour sa texture crémeuse et son goût authentique sans aucun arôme ajouté.",
    volume: "125g, 1kg",
    image: "/images/yaourt-sucre.png",
    bg: "#F0F8FF",
    badge: "Phare",
    badgeBg: "#E87020",
    category: "Yaourts",
    categorySlug: "yaourts",
    highlights: [
      { icon: "⭐", label: "Produit phare" },
      { icon: "🌿", label: "Sans arômes ajoutés" },
      { icon: "🥛", label: "Lait 100% local" },
      { icon: "🍶", label: "Texture crémeuse" },
    ],
  },
  {
    slug: "yaourt-vanille",
    name: "Yaourt vanille",
    desc: "Yaourt aromatisé à la vanille naturelle. Une douceur subtile et enveloppante issue de gousses de vanille, pour un plaisir simple et raffiné au quotidien.",
    volume: "125g",
    emoji: "🍦",
    bg: "#FFFDF0",
    category: "Yaourts",
    categorySlug: "yaourts",
    highlights: [
      { icon: "🌸", label: "Vanille naturelle" },
      { icon: "🥛", label: "Lait local" },
      { icon: "🍯", label: "Légèrement sucré" },
      { icon: "✨", label: "Onctueux" },
    ],
  },
  {
    slug: "yaourt-mangue",
    name: "Yaourt mangue",
    desc: "Yaourt aux fruits locaux, saveur mangue. Préparé avec des mangues fraîches de saison, ce yaourt allie la douceur du lait fermenté au fruité intense de la mangue nigérienne.",
    volume: "125g",
    emoji: "🥭",
    bg: "#FFF5E6",
    category: "Yaourts",
    categorySlug: "yaourts",
    highlights: [
      { icon: "🥭", label: "Mangue locale" },
      { icon: "🌿", label: "Fruits de saison" },
      { icon: "🥛", label: "Lait local" },
      { icon: "🎨", label: "Saveur intense" },
    ],
  },
  {
    slug: "yaourt-bissap",
    name: "Yaourt bissap",
    desc: "Yaourt à l'hibiscus, saveur traditionnelle. L'alliance inattendue du yaourt crémeux et de la fleur d'hibiscus séchée, pour une expérience gustative unique et rafraîchissante.",
    volume: "125g",
    emoji: "🌺",
    bg: "#FFF0F5",
    category: "Yaourts",
    categorySlug: "yaourts",
    highlights: [
      { icon: "🌺", label: "Fleur d'hibiscus" },
      { icon: "🏺", label: "Recette locale" },
      { icon: "🎯", label: "Saveur unique" },
      { icon: "💜", label: "Couleur naturelle" },
    ],
  },

  // — Fromages —
  {
    slug: "tchoukou-fin",
    name: "Tchoukou fin",
    desc: "Fromage frais local au lait entier, texture crémeuse et fondante. Le tchoukou est le fromage traditionnel nigérien par excellence, fabriqué selon des méthodes ancestrales transmises de génération en génération.",
    volume: "200g, 500g",
    image: "/images/toukou-fin.png",
    bg: "#FFF8F0",
    badge: "Phare",
    badgeBg: "#E87020",
    category: "Fromages",
    categorySlug: "fromages",
    highlights: [
      { icon: "⭐", label: "Produit phare" },
      { icon: "🧀", label: "Recette ancestrale" },
      { icon: "🥛", label: "Lait entier local" },
      { icon: "🍽️", label: "Texture fondante" },
    ],
  },
  {
    slug: "fromage-frais-sucre",
    name: "Fromage frais sucré",
    desc: "Fromage frais doux et authentique au lait local. Légèrement sucré, il se déguste nature ou accompagné de fruits pour un dessert simple et savoureux.",
    volume: "150g",
    image: "/images/fromage-frais-sucre.png",
    bg: "#FFFDF0",
    category: "Fromages",
    categorySlug: "fromages",
    highlights: [
      { icon: "🍯", label: "Légèrement sucré" },
      { icon: "🥛", label: "Lait local" },
      { icon: "✨", label: "Frais et doux" },
      { icon: "🍑", label: "Idéal en dessert" },
    ],
  },
  {
    slug: "fromage-pate-molle",
    name: "Fromage à pâte molle",
    desc: "Fromage affiné, saveur douce et fondante. Un fromage à affinage court qui développe des arômes délicats tout en conservant une texture souple et agréable en bouche.",
    volume: "250g",
    emoji: "🧀",
    bg: "#FFF8F0",
    category: "Fromages",
    categorySlug: "fromages",
    highlights: [
      { icon: "⏳", label: "Affiné court" },
      { icon: "🌡️", label: "Arômes délicats" },
      { icon: "🫶", label: "Fondant en bouche" },
      { icon: "🧀", label: "Pâte souple" },
    ],
  },

  // — Produits dérivés —
  {
    slug: "hindirmou",
    name: "Hindirmou",
    desc: "Beurre de lait traditionnel nigérien, riche et savoureux. Fabriqué par barattage du lait fermenté selon la méthode des femmes peules, le hindirmou est un incontournable de la cuisine nigérienne.",
    volume: "250g, 500g",
    image: "/images/kindirmou.png",
    bg: "#FFFDF0",
    badge: "Nouveau",
    badgeBg: "#5A8C1A",
    category: "Produits dérivés",
    categorySlug: "derives",
    highlights: [
      { icon: "🆕", label: "Nouveau produit" },
      { icon: "🏺", label: "Méthode peule" },
      { icon: "🧈", label: "Beurre artisanal" },
      { icon: "🍳", label: "Idéal en cuisine" },
    ],
  },
  {
    slug: "creme-fraiche",
    name: "Crème fraîche",
    desc: "Crème épaisse au lait local, idéale pour cuisiner. Obtenue par écrémage du lait entier frais, elle apporte onctuosité et richesse à toutes vos préparations culinaires.",
    volume: "200ml",
    emoji: "🥄",
    bg: "#FFF8F0",
    category: "Produits dérivés",
    categorySlug: "derives",
    highlights: [
      { icon: "🥄", label: "Épaisse et onctueuse" },
      { icon: "🍳", label: "Idéale en cuisine" },
      { icon: "🥛", label: "Lait local" },
      { icon: "✨", label: "Écrémage naturel" },
    ],
  },
  {
    slug: "beurre-clarifie",
    name: "Beurre clarifié",
    desc: "Beurre purifié traditionnel, longue conservation. Le beurre clarifié, ou ghee nigérien, est obtenu par fonte lente du beurre pour en éliminer l'eau et les protéines du lait.",
    volume: "500g",
    emoji: "🧈",
    bg: "#FFF5E6",
    category: "Produits dérivés",
    categorySlug: "derives",
    highlights: [
      { icon: "🧈", label: "Longue conservation" },
      { icon: "🔥", label: "Haute température" },
      { icon: "🏺", label: "Méthode traditionnelle" },
      { icon: "💛", label: "Goût intense" },
    ],
  },
];
