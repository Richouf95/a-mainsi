export type Article = {
  slug: string;
  tag: string;
  tagBg: string;
  tagColor: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image?: string;
  body: {
    lead: string;
    sections: { subtitle?: string; content: string }[];
    quote?: { text: string; author: string };
    keyFacts: { icon: string; label: string; value: string }[];
  };
};

export const articles: Article[] = [
  {
    slug: "gitex-africa-2025",
    tag: "Événement",
    tagBg: "#FFF0E0",
    tagColor: "#E87020",
    title: "A'mansi met en lumière l'innovation laitière africaine à GITEX Africa",
    excerpt:
      "Présente à GITEX Africa, A'mansi a dévoilé Proxilait, sa solution numérique conçue pour moderniser la filière laitière et connecter les acteurs du secteur.",
    date: "12 mars 2025",
    readTime: "4 min",
    image: "/images/gitex.jpg",
    body: {
      lead: "Du 3 au 5 mars 2025, A'mansi a participé à GITEX Africa à Marrakech, l'un des plus grands événements technologiques du continent. Une présence remarquée qui a permis de faire rayonner l'innovation laitière nigérienne à l'échelle internationale.",
      sections: [
        {
          subtitle: "Proxilait au cœur de la démonstration",
          content:
            "Sur son stand, l'équipe A'mansi a présenté Proxilait, la plateforme numérique qui connecte éleveurs, transformateurs, distributeurs et consommateurs au sein d'une même chaîne de valeur. Les visiteurs ont pu découvrir en direct les fonctionnalités de traçabilité, de gestion des collectes et de suivi des livraisons.",
        },
        {
          subtitle: "Des rencontres qui ouvrent des portes",
          content:
            "L'événement a été l'occasion de nouer des contacts avec des investisseurs, des partenaires institutionnels et des acteurs du secteur agri-tech africain. Plusieurs discussions sont en cours pour des partenariats techniques et financiers qui pourraient accélérer le déploiement de Proxilait dans d'autres pays de la région.",
        },
        {
          subtitle: "Une vitrine pour le Niger",
          content:
            "La participation d'A'mansi à GITEX Africa illustre la capacité des entrepreneurs nigériens à développer des solutions numériques adaptées aux réalités locales et exportables à l'échelle du continent. Une fierté pour toute la filière.",
        },
      ],
      quote: {
        text: "Proxilait n'est pas seulement une application. C'est une infrastructure pour toute la filière laitière nigérienne. GITEX nous a permis de montrer que l'innovation vient aussi du Sahel.",
        author: "Équipe A'mansi, GITEX Africa 2025",
      },
      keyFacts: [
        { icon: "🌍", label: "Lieu", value: "Marrakech, Maroc" },
        { icon: "📅", label: "Date", value: "3 – 5 mars 2025" },
        { icon: "🤝", label: "Contacts établis", value: "12+ partenaires" },
      ],
    },
  },
  {
    slug: "lancement-hindirmou",
    tag: "Produits",
    tagBg: "#EAF3DE",
    tagColor: "#3B6D11",
    title: "Lancement du Hindirmou — le beurre traditionnel nigérien en pot",
    excerpt:
      "A'mansi enrichit sa gamme avec le Hindirmou, beurre de lait traditionnel fabriqué selon la méthode ancestrale des femmes peules du Niger.",
    date: "28 fév. 2025",
    readTime: "3 min",
    image: "/images/kindirmou.png",
    body: {
      lead: "Après plusieurs mois de développement et de tests auprès de consommateurs, A'mansi lance officiellement le Hindirmou en pot — un beurre de lait traditionnel nigérien fabriqué selon les techniques ancestrales transmises par les femmes peules.",
      sections: [
        {
          subtitle: "Un produit ancré dans la tradition",
          content:
            "Le Hindirmou est obtenu par barattage du lait fermenté, une méthode utilisée depuis des générations dans les ménages peuls. Cette technique artisanale donne au beurre un goût intense et une texture unique, incomparables aux beurres industriels.",
        },
        {
          subtitle: "Une recette valorisée et modernisée",
          content:
            "A'mansi a travaillé en étroite collaboration avec des femmes productrices de la région de Tillabéri pour standardiser la recette tout en préservant son authenticité. Le produit est désormais conditionné dans des pots hermétiques qui garantissent une conservation optimale.",
        },
        {
          subtitle: "Disponible dès maintenant",
          content:
            "Le Hindirmou A'mansi est disponible en formats 250g et 500g dans nos points de vente habituels à Niamey. Il rejoindra prochainement le catalogue Proxilait pour une commande à domicile.",
        },
      ],
      quote: {
        text: "Le Hindirmou, c'est notre histoire dans un pot. Chaque cuillère rappelle les saveurs de l'enfance et le savoir-faire de nos mères.",
        author: "Productrice partenaire, Tillabéri",
      },
      keyFacts: [
        { icon: "🧈", label: "Formats", value: "250g & 500g" },
        { icon: "🏺", label: "Méthode", value: "Barattage traditionnel" },
        { icon: "📍", label: "Disponible", value: "Points de vente Niamey" },
      ],
    },
  },
  {
    slug: "accord-eleveurs-dosso",
    tag: "Partenariat",
    tagBg: "#FFF0E0",
    tagColor: "#854F0B",
    title: "A'mansi signe un accord avec 50 nouveaux éleveurs de la région de Dosso",
    excerpt:
      "A'mansi étend son réseau de collecte en signant un partenariat avec 50 éleveurs de la région de Dosso, renforçant ainsi sa capacité d'approvisionnement en lait local.",
    date: "14 jan. 2025",
    readTime: "3 min",
    body: {
      lead: "C'est une étape majeure dans le développement d'A'mansi. Le 14 janvier 2025, la laiterie nigérienne a officialisé un accord de partenariat avec 50 éleveurs de la région de Dosso, portant son réseau total à plus de 70 producteurs partenaires.",
      sections: [
        {
          subtitle: "Un réseau qui s'agrandit",
          content:
            "Jusqu'ici concentrée sur la région de Tillabéri, A'mansi élargit désormais sa zone de collecte vers Dosso, une région à fort potentiel laitier. Cet accord permettra d'augmenter significativement les volumes de lait collectés quotidiennement et de sécuriser l'approvisionnement en haute saison.",
        },
        {
          subtitle: "Des conditions équitables pour les éleveurs",
          content:
            "L'accord garantit aux éleveurs un prix d'achat juste et stable, un accompagnement technique régulier et un accès prioritaire à la plateforme Proxilait pour le suivi de leurs collectes et paiements. Une première dans la région.",
        },
        {
          subtitle: "Un impact direct sur les familles",
          content:
            "Ces 50 éleveurs représentent environ 200 familles dont les revenus seront directement améliorés grâce à ce partenariat. A'mansi s'engage à former chaque éleveur aux bonnes pratiques de collecte et d'hygiène du lait dans les six prochains mois.",
        },
      ],
      quote: {
        text: "Travailler avec A'mansi, c'est avoir la certitude d'être payé à temps et d'être respecté. Pour nous les éleveurs, c'est rare et précieux.",
        author: "Éleveur partenaire, région de Dosso",
      },
      keyFacts: [
        { icon: "🐄", label: "Nouveaux éleveurs", value: "50" },
        { icon: "👨‍👩‍👧‍👦", label: "Familles bénéficiaires", value: "~200" },
        { icon: "📍", label: "Région", value: "Dosso, Niger" },
      ],
    },
  },
];
