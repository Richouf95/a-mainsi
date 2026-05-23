export type NutritionalValues = {
  pour: string;
  calories?: string;
  proteines?: string;
  lipides?: {
    total?: string | null;
    satures?: string | null;
  };
  glucides?: string;
  sucres?: string;
  fibres?: string;
  sodium?: string;
  calcium?: string;
  fer?: string;
  vitamine_A?: string;
  vitamine_D?: string;
  vitamines?: string[];
};

export type Product = {
  slug: string;
  denomination: string;
  categorie: string;
  categorieSlug: string;
  ingredients: string;
  valeurs_nutritionnelles: NutritionalValues;
  quantite: string[];
  date_limite_consommation: string | null;
  forme_emballage: string;
  mode_utilisation: string;
  image?: string;
  emoji?: string;
  bg: string;
  badge?: string;
  badgeBg?: string;
  highlights: { icon: string; label: string }[];
};

export const allProducts: Product[] = [
  // — Yaourts —
  {
    slug: "yaourt-nature",
    denomination: "Yaourt nature",
    categorie: "Yaourts",
    categorieSlug: "yaourts",
    ingredients: "Lait entier de vache, ferments lactiques",
    valeurs_nutritionnelles: {
      pour: "100g",
      calories: "60-80 kcal",
      proteines: "3,5-4,5g",
      lipides: { total: "3-4g", satures: "1,5-2,5g" },
      glucides: "4-6g",
      sucres: "4-6g",
      fibres: "0g",
      sodium: "40-60mg",
      calcium: "120-150mg",
    },
    quantite: ["33cl", "50cl", "1 litre"],
    date_limite_consommation: null,
    forme_emballage: "Bidon",
    mode_utilisation:
      "Riche en probiotiques, il améliore la digestion, renforce l'immunité et favorise la flore intestinale. Peut être utilisé en marinade pour attendrir la viande, dans les gâteaux pour plus de moelleux, ou en boisson (lassi, smoothie), etc.",
    emoji: "🥛",
    bg: "#F0F8FF",
    badge: "Phare",
    badgeBg: "#E87020",
    highlights: [
      { icon: "🦠", label: "Riche en probiotiques" },
      { icon: "🥛", label: "Lait entier local" },
      { icon: "🌿", label: "Sans additifs" },
      { icon: "💚", label: "Bon pour la digestion" },
    ],
  },
  {
    slug: "yaourt-sucre",
    denomination: "Yaourt sucré",
    categorie: "Yaourts",
    categorieSlug: "yaourts",
    ingredients: "Lait entier de vache, ferments lactiques, sucre",
    valeurs_nutritionnelles: {
      pour: "100g",
      calories: "90-110 kcal",
      proteines: "3,5-4,5g",
      lipides: { total: "3-4g", satures: "1,5-2,5g" },
      glucides: "12-15g",
      sucres: "11-14g",
      fibres: "0g",
      sodium: "40-60mg",
      calcium: "120-150mg",
    },
    quantite: ["33cl", "50cl", "1 litre"],
    date_limite_consommation: null,
    forme_emballage: "Bidon",
    mode_utilisation:
      "Peut se consommer nature ou accompagné de fruits, céréales ou noix. Sert aussi à préparer des smoothies, des desserts comme les verrines et des sauces sucrées. Apporte du moelleux aux gâteaux.",
    image: "/images/yaourt-sucre.png",
    bg: "#F5FCFF",
    highlights: [
      { icon: "🥛", label: "Lait entier local" },
      { icon: "🍯", label: "Légèrement sucré" },
      { icon: "🦠", label: "Ferments lactiques" },
      { icon: "🍓", label: "Idéal avec des fruits" },
    ],
  },
  {
    slug: "degue-thiakry",
    denomination: "Dégué (Thiakry)",
    categorie: "Yaourts",
    categorieSlug: "yaourts",
    ingredients: "Yaourt au lait entier de vache, semoule de mil précuit, sucre",
    valeurs_nutritionnelles: {
      pour: "100g",
      calories: "160-180 kcal",
      proteines: "4-5g",
      lipides: { total: "4-6g", satures: null },
      glucides: "24-28g",
      sucres: "10-12g",
      fibres: "0,8-1,5g",
      fer: "0,8-1,5mg",
      calcium: "130-180mg",
      vitamines: ["A", "B1", "B2", "B12", "D"],
    },
    quantite: ["33cl", "50cl", "1 litre"],
    date_limite_consommation: null,
    forme_emballage: "Bidon",
    mode_utilisation:
      "À consommer frais au petit déjeuner ou en dessert. Ajoutez des fruits secs, raisins, noix, miel.",
    emoji: "🍮",
    bg: "#FFF8F0",
    highlights: [
      { icon: "🌾", label: "Semoule de mil" },
      { icon: "🥛", label: "Lait local" },
      { icon: "💪", label: "Vitamines A, B, D" },
      { icon: "🏺", label: "Recette traditionnelle" },
    ],
  },
  {
    slug: "lait-frais-pasteurise",
    denomination: "Lait frais pasteurisé",
    categorie: "Yaourts",
    categorieSlug: "yaourts",
    ingredients: "Lait entier de vache",
    valeurs_nutritionnelles: {
      pour: "100g",
      calories: "60-70 kcal",
      proteines: "3-3,5g",
      lipides: { total: "3-4g", satures: null },
      glucides: "4-5g",
      calcium: "100-120mg",
      vitamines: ["A", "D", "B2", "B12"],
    },
    quantite: ["50cl", "1 litre"],
    date_limite_consommation: null,
    forme_emballage: "Bidon",
    mode_utilisation:
      "Peut être bu nature, chaud ou froid. Sert à préparer du café, du thé, des smoothies et des céréales. En cuisine dans les sauces, purées, crêpes et pâtisseries.",
    image: "/images/lait-frais-entier.png",
    bg: "#F0F8FF",
    highlights: [
      { icon: "✅", label: "Pasteurisé" },
      { icon: "🥛", label: "100% lait local" },
      { icon: "🌿", label: "Sans additifs" },
      { icon: "💧", label: "100% naturel" },
    ],
  },
  {
    slug: "kindirmou-nature",
    denomination: "Kindirmou nature",
    categorie: "Yaourts",
    categorieSlug: "yaourts",
    ingredients: "Lait entier de vache fermenté",
    valeurs_nutritionnelles: {
      pour: "100g",
      calories: "60-80 kcal",
      proteines: "3,5-4,5g",
      lipides: { total: "3-4g", satures: "1,5-2,5g" },
      glucides: "4-6g",
      sucres: "4-6g",
      fibres: "0g",
      sodium: "40-60mg",
      calcium: "120-150mg",
    },
    quantite: ["500g", "1kg"],
    date_limite_consommation: null,
    forme_emballage: "Pot circulaire",
    mode_utilisation:
      "Idéal pour vos Labdourou, Toukoudi, bouillie ou vos desserts. À consommer nature ou avec du miel ou sucre selon votre goût.",
    image: "/images/kindirmou.png",
    bg: "#FFF5F5",
    highlights: [
      { icon: "🫙", label: "Pot circulaire" },
      { icon: "🦠", label: "Lait fermenté naturellement" },
      { icon: "🏺", label: "Recette traditionnelle" },
      { icon: "💚", label: "Riche en probiotiques" },
    ],
  },

  // — Fromages secs —
  {
    slug: "tchoukou-fin-nature",
    denomination: "Tchoukou fin nature",
    categorie: "Fromages secs",
    categorieSlug: "fromages-secs",
    ingredients: "Lait entier de vache, présure",
    valeurs_nutritionnelles: {
      pour: "50g",
      calories: "200-225 kcal",
      proteines: "20-25g",
      lipides: { total: "10-15g", satures: "6-9g" },
      glucides: "1-2,5g",
      fer: "0,5-1mg",
      calcium: "300-450mg",
      vitamines: ["A", "B2", "B12", "D"],
    },
    quantite: ["50g"],
    date_limite_consommation: null,
    forme_emballage: "Sachet plastique",
    mode_utilisation: "Idéal pour le grignotage ou en apéro.",
    image: "/images/toukou-fin.png",
    bg: "#FFF8F0",
    badge: "Phare",
    badgeBg: "#E87020",
    highlights: [
      { icon: "⭐", label: "Produit phare" },
      { icon: "💪", label: "Riche en protéines" },
      { icon: "🦴", label: "Riche en calcium" },
      { icon: "🧀", label: "Recette ancestrale" },
    ],
  },
  {
    slug: "tchoukou-fin-sucre",
    denomination: "Tchoukou fin sucré",
    categorie: "Fromages secs",
    categorieSlug: "fromages-secs",
    ingredients: "Lait entier de vache, présure, sucre",
    valeurs_nutritionnelles: {
      pour: "50g",
      calories: "220-250 kcal",
      proteines: "20-25g",
      lipides: { total: "10-15g", satures: "6-9g" },
      glucides: "6-8g",
      sucres: "5g",
      fer: "0,5mg",
      calcium: "300-450mg",
      vitamines: ["A", "B2", "B12", "D"],
    },
    quantite: ["50g"],
    date_limite_consommation: null,
    forme_emballage: "Sachet plastique",
    mode_utilisation:
      "Idéal pour le grignotage ou en apéro, exquis avec le thé ou tisanes.",
    emoji: "🧀",
    bg: "#FFFDF0",
    highlights: [
      { icon: "🍯", label: "Légèrement sucré" },
      { icon: "🍵", label: "Exquis avec le thé" },
      { icon: "💪", label: "Riche en protéines" },
      { icon: "🦴", label: "Riche en calcium" },
    ],
  },
  {
    slug: "tchoukou-epais",
    denomination: "Tchoukou épais",
    categorie: "Fromages secs",
    categorieSlug: "fromages-secs",
    ingredients: "Lait entier de vache, présure",
    valeurs_nutritionnelles: {
      pour: "100g",
      calories: "400-450 kcal",
      proteines: "40-50g",
      lipides: { total: "20-30g", satures: "12-18g" },
      glucides: "2-5g",
      fer: "1-2mg",
      calcium: "600-900mg",
    },
    quantite: ["150g"],
    date_limite_consommation: null,
    forme_emballage: "Sachet plastique",
    mode_utilisation:
      "Idéal pour le grignotage ou en apéro, dans vos bouillies, la préparation du Toukoudi ou Labdourou.",
    emoji: "🧀",
    bg: "#FFF5E6",
    highlights: [
      { icon: "💪", label: "Très riche en protéines" },
      { icon: "🦴", label: "Très riche en calcium" },
      { icon: "🍲", label: "Idéal en cuisine" },
      { icon: "🏺", label: "Méthode traditionnelle" },
    ],
  },

  // — Fromages frais —
  {
    slug: "fromage-frais-nature",
    denomination: "Fromage frais nature",
    categorie: "Fromages frais",
    categorieSlug: "fromages-frais",
    ingredients: "Lait entier de vache, coagulant",
    valeurs_nutritionnelles: {
      pour: "100g",
      calories: "120-150 kcal",
      proteines: "6-7g",
      lipides: { total: "8-10g", satures: "5-7g" },
      glucides: "2-4g",
      sucres: "2-3g",
      fibres: "0g",
      sodium: "40-50mg",
      calcium: "150-200mg",
    },
    quantite: ["200g", "400g", "1kg"],
    date_limite_consommation: null,
    forme_emballage: "Plastique",
    mode_utilisation:
      "Se consomme nature, en tartine, dans des salades ou sauces. Peut être intégré dans des sandwichs, aux plats chauds comme les gratins, ou aux desserts. Accompagne aussi les fruits et légumes pour un repas sain et léger.",
    emoji: "🧀",
    bg: "#F0F8FF",
    highlights: [
      { icon: "🧀", label: "Texture crémeuse" },
      { icon: "🥛", label: "Lait local" },
      { icon: "🌿", label: "Sans additifs" },
      { icon: "🥗", label: "Polyvalent" },
    ],
  },
  {
    slug: "fromage-frais-sucre",
    denomination: "Fromage frais sucré",
    categorie: "Fromages frais",
    categorieSlug: "fromages-frais",
    ingredients: "Lait entier de vache, coagulant, sucre",
    valeurs_nutritionnelles: {
      pour: "100g",
      calories: "160-190 kcal",
      proteines: "4-5g",
      lipides: { total: "9-11g", satures: "5-7g" },
      glucides: "12-15g",
      sucres: "11-14g",
      fibres: "0g",
      sodium: "50-75mg",
      calcium: "125-150mg",
    },
    quantite: ["200g", "400g", "1kg"],
    date_limite_consommation: null,
    forme_emballage: "Plastique",
    mode_utilisation:
      "Se consomme nature, en tartine, dans des salades ou sauces. Peut être intégré aux plateaux de fromages en desserts ou apéro. Accompagne aussi les fruits et légumes pour un repas sain et léger.",
    image: "/images/fromage-frais-sucre.png",
    bg: "#FFFDF0",
    highlights: [
      { icon: "🍯", label: "Légèrement sucré" },
      { icon: "🧀", label: "Texture crémeuse" },
      { icon: "🍑", label: "Idéal en dessert" },
      { icon: "🥛", label: "Lait local" },
    ],
  },
  {
    slug: "fromage-frais-sale",
    denomination: "Fromage frais salé",
    categorie: "Fromages frais",
    categorieSlug: "fromages-frais",
    ingredients: "Lait entier de vache, coagulant, sel",
    valeurs_nutritionnelles: {
      pour: "100g",
      calories: "150-180 kcal",
      proteines: "6-8g",
      lipides: { total: "10-12g", satures: "6-8g" },
      glucides: "2-3g",
      sucres: "1-2g",
      fibres: "0g",
      sodium: "200-300mg",
      calcium: "200-250mg",
    },
    quantite: ["200g", "400g", "1kg"],
    date_limite_consommation: null,
    forme_emballage: "Plastique",
    mode_utilisation:
      "Se consomme nature, en tartine, dans des salades ou sauces. Peut être intégré dans des sandwichs, aux plats chauds comme les gratins. Accompagne aussi les fruits et légumes pour un repas sain et léger.",
    emoji: "🧂",
    bg: "#F5FCFF",
    highlights: [
      { icon: "🧂", label: "Saveur salée" },
      { icon: "🧀", label: "Texture crémeuse" },
      { icon: "🥗", label: "Idéal en cuisine" },
      { icon: "🦴", label: "Riche en calcium" },
    ],
  },
  {
    slug: "fromage-herbes-ail",
    denomination: "Fromage herbes & Ail (Moringa)",
    categorie: "Fromages frais",
    categorieSlug: "fromages-frais",
    ingredients: "Lait entier de vache, coagulant, sel, persil, ail, céleri, basilic",
    valeurs_nutritionnelles: {
      pour: "100g",
      calories: "180-220 kcal",
      proteines: "12-15g",
      lipides: { total: "12-16g", satures: "7-10g" },
      glucides: "3-5g",
      sucres: "1-2g",
      fibres: "1-2g",
      calcium: "150-220mg",
    },
    quantite: ["200g", "400g", "1kg"],
    date_limite_consommation: null,
    forme_emballage: "Sachet plastique",
    mode_utilisation:
      "Se consomme nature, en tartine, dans des salades ou sauces. Peut être intégré dans des sandwichs, aux plats chauds comme les gratins, ou aux desserts. Accompagne aussi les fruits et légumes pour un repas sain et léger.",
    emoji: "🌿",
    bg: "#F0FFF0",
    badge: "Nouveau",
    badgeBg: "#5A8C1A",
    highlights: [
      { icon: "🌿", label: "Herbes fraîches & Ail" },
      { icon: "🌱", label: "Enrichi au Moringa" },
      { icon: "✨", label: "Saveur unique" },
      { icon: "💪", label: "Riche en protéines" },
    ],
  },
  {
    slug: "fromage-colore-sorgho",
    denomination: "Fromage coloré au sorgho",
    categorie: "Fromages frais",
    categorieSlug: "fromages-frais",
    ingredients:
      "Lait entier de vache, coagulant, colorant extrait des feuilles de sorgho",
    valeurs_nutritionnelles: {
      pour: "100g",
    },
    quantite: ["200g", "400g", "1kg"],
    date_limite_consommation: null,
    forme_emballage: "Plastique sachet",
    mode_utilisation:
      "Se consomme nature, en tartine, dans des salades ou sauces. Peut être intégré dans des sandwichs, aux plats chauds comme les gratins, ou aux desserts. Accompagne aussi les fruits et légumes pour un repas sain et léger.",
    emoji: "🔴",
    bg: "#FFF5F5",
    badge: "Nouveau",
    badgeBg: "#5A8C1A",
    highlights: [
      { icon: "🎨", label: "Colorant naturel sorgho" },
      { icon: "🌿", label: "100% naturel" },
      { icon: "🧀", label: "Texture crémeuse" },
      { icon: "🥛", label: "Lait local" },
    ],
  },

  // — Beurres —
  {
    slug: "doungole",
    denomination: "Doungoulé",
    categorie: "Beurres",
    categorieSlug: "beurres",
    ingredients: "Beurre extrait du lait de vache",
    valeurs_nutritionnelles: {
      pour: "100g",
      calories: "720-750 kcal",
      proteines: "0,5-1g",
      lipides: { total: "80-83g", satures: "50-55g" },
      glucides: "0-1g",
      vitamine_A: "600-800µg",
      vitamine_D: "1-2µg",
      calcium: "10-20mg",
    },
    quantite: ["250g", "1kg"],
    date_limite_consommation: null,
    forme_emballage: "Boite",
    mode_utilisation:
      "Le beurre brut s'utilise en cuisson, en pâtisserie, en cosmétique, ou pour frire et sauter les aliments.",
    emoji: "🧈",
    bg: "#FFFDF0",
    highlights: [
      { icon: "🧈", label: "Beurre brut" },
      { icon: "🍳", label: "Cuisson & pâtisserie" },
      { icon: "💄", label: "Usage cosmétique" },
      { icon: "🥛", label: "Lait de vache local" },
    ],
  },
  {
    slug: "manshanou",
    denomination: "Manshanou (Ghee) — L'or liquide",
    categorie: "Beurres",
    categorieSlug: "beurres",
    ingredients: "Beurre extrait du lait de vache, sel, épices",
    valeurs_nutritionnelles: {
      pour: "100g",
      calories: "720-750 kcal",
      proteines: "0,5-1g",
      lipides: { total: "80-83g", satures: "50-55g" },
      glucides: "0-1g",
      vitamine_A: "600-800µg",
      vitamine_D: "1-2µg",
      calcium: "10-20mg",
    },
    quantite: ["33cl", "50cl", "1 litre"],
    date_limite_consommation: null,
    forme_emballage: "Bidon",
    mode_utilisation:
      "S'utilise pour cuire, frire et mijoter. Parfait pour les sauces noires, rouges à l'Africaine, le Zazahé et pour réchauffer la pâte pour un goût plus appétissant.",
    emoji: "🫙",
    bg: "#FFF5E6",
    badge: "Phare",
    badgeBg: "#E87020",
    highlights: [
      { icon: "✨", label: "L'or liquide" },
      { icon: "🔥", label: "Haute température" },
      { icon: "🍲", label: "Sauces africaines" },
      { icon: "🏺", label: "Méthode traditionnelle" },
    ],
  },
];
