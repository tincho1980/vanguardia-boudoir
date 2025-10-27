export const siteConfig = {
  name: "Vanguardia by Negrovski",
  title: "Vanguardia by Negrovski, expertos en Boudoir.",
  tagline: "Expertos en Arte Boudoir.",
  description: "Expertos en arte Boudoir. Una experiencia web para el Movimiento de Arte Boudoir en Argentina.",
  email: "vanguardiabynegrovski@gmail.com",
  social: {
    instagram: "https://www.instagram.com/vanguardia.boudoir.oficial/",
    facebook: "https://www.facebook.com/people/Vanguardia-By-Negrovski/100065102696965/",
  }
};

export const manifestoText = [
  "Vanguardia es la Revolución.",
  "Somos amantes de lo extraordinario.",
  "Tenemos el foco en tiempos futuros,",
  "por eso evocamos hostorias sublimes.",
  'Enimigos radicales del "arte" mediocre y vulgar.',
  "El Boudoir no cosifica, no devalúa, no estandaríza.",
  "El Boudoir humaniza, enaltece y se inspira en tu singularidad.",
  "Te desafiamos a una experiencia estética, sensorial y emocional de alto valor."
];

export const philosophyStatements = [
  {
    title: "Humanizar",
    description: "Elevamos el arte de retratar el cuerpo a través de la luz, la emoción y el simbolismo."
  },
  {
    title: "Elevar",
    description: "Cada sesión es un ritual de autodescubrimiento, un manifiesto en movimiento."
  },
  {
    title: "Dignificar",
    description: "Poético, cinematográfico, elegante y rebelde—esa es nuestra visión."
  }
];

export const experienceSteps = [
  {
    title: "Entrevista",
    description: "Comenzamos entendiendo tu historia, tu visión y tus sueños. Esta conversación íntima da forma a todo lo que sigue.",
    icon: "conversation"
  },
  {
    title: "Co-Producción",
    description: "Juntos creamos tu narrativa. No sos solo el sujeto: también sos co-creador/a de este viaje artístico.",
    icon: "collaboration"
  },
  {
    title: "Dirección",
    description: "Cada pose, cada mirada, cada movimiento es cuidadosamente dirigido para revelar tu versión más auténtica.",
    icon: "direction"
  },
  {
    title: "Estilismo",
    description: "Desde el vestuario hasta el maquillaje, cada detalle es seleccionado para realzar tu belleza natural y contar tu historia única.",
    icon: "styling"
  },
  {
    title: "Locación",
    description: "Elegimos espacios que resuenan con tu energía: íntimos, elegantes y perfectamente alineados a tu visión.",
    icon: "location"
  }
];

export const portfolioImages = [
  {
    src: "/images/portfolio/2.jpg",
    alt: "Retrato Boudoir Artístico",
    category: "artístico"
  },
  {
    src: "/images/portfolio/7.jpg", 
    alt: "Boudoir Cinematográfico",
    category: "cinematográfico"
  },
  {
    src: "/images/portfolio/12.jpg",
    alt: "Retrato Íntimo",
    category: "íntimo"
  },
  {
    src: "/images/portfolio/18.jpg",
    alt: "Boudoir Elegante",
    category: "elegante"
  },
  {
    src: "/images/portfolio/24.jpg",
    alt: "Retrato Artístico",
    category: "artístico"
  },
  {
    src: "/images/portfolio/28.jpg",
    alt: "Arte Sensual",
    category: "sensual"
  }
];

export const fullPortfolioImages = Array.from({ length: 30 }, (_, i) => ({
  src: `/images/portfolio/${i + 1}.jpg`,
  alt: `Retrato Boudoir ${i + 1}`,
  category: ["artístico", "cinematográfico", "íntimo", "elegante", "sensual"][i % 5]
}));

export const navigationItems = [
  { name: "Manifesto", href: "#manifesto" },
  { name: "Philosophy", href: "#philosophy" },
  { name: "Experience", href: "#experience" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Contact", href: "#contact" }
];
