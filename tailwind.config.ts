import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0d0d0d",
        foreground: "#f7f1e7",
        accent: "#b89a67",
        secondary: "#e6cbb2",
        shadow: "#2c2a28",
        "deep-black": "#0d0d0d",
        "warm-cream": "#f7f1e7",
        "muted-gold": "#b89a67",
        "sepia-shadow": "#2c2a28",
        "warm-beige": "#e6cbb2",
        "soft-copper": "#c5a572",
        "elegant-gray": "#8b8b8b",
      },
      fontFamily: {
        javanese: ["var(--font-javanese)", "serif"],
        humanist: ["var(--font-humanist)", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 20px rgba(197,165,114,0.25)",
        deep: "0 15px 40px rgba(0,0,0,0.5)",
        soft: "0 4px 20px rgba(0,0,0,0.2)",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.4, 0, 0.2, 1)",
        dramatic: "cubic-bezier(0.77, 0, 0.175, 1)",
      },
      animation: {
        "fade-up": "fadeUp 0.8s ease-out forwards",
        "fade-in": "fadeIn 1s ease-out forwards",
        "slide-up": "slideUp 0.6s ease-out forwards",
        "glow-in": "glowIn 1.5s ease-in-out forwards",
        "parallax-fade": "parallaxFade 2s ease-out forwards",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(50px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        glowIn: {
          "0%": { opacity: "0", filter: "blur(10px)" },
          "100%": { opacity: "1", filter: "blur(0)" },
        },
        parallaxFade: {
          "0%": { opacity: "0", transform: "translateY(80px) scale(1.05)" },
          "100%": { opacity: "1", transform: "translateY(0) scale(1)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;