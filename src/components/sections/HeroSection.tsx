"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { siteConfig } from "@/constants/content";

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center overflow-hidden cinematic-grain ">
      {/* Background Video/Image Placeholder */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('/images/portfolio/6.jpg')] bg-cover bg-center bg-no-repeat" />
        <div className="absolute inset-0 bg-black/70" />
        <div className="absolute inset-0 bg-linear-to-t from-background via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-linear-to-t from-background via-background/80 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-2 bg-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="space-y-8"
        >
          {/* Logo - Hidden h1 for SEO */}
          <h1 className="sr-only">{siteConfig.title}</h1>
          
          {/* Main Logo Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
            className="flex justify-center"
          >
            <Image
              src="/images/logo_vanguardia_baseline_rectangular.png"
              alt={siteConfig.title}
              width={800}
              height={300}
              priority
              className="w-auto h-32 md:h-40 lg:h-48"
            />
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
            className="font-humanist text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed"
          >
            {siteConfig.tagline}
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.6, ease: "easeOut" }}
            className="pt-8"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-8 py-4 border-2 border-accent text-accent font-medium transition-all duration-300 hover:bg-accent hover:text-background overflow-hidden"
            >
              <span className="relative z-10">Quien es Negrovski?</span>
              <motion.div
                className="absolute inset-0 bg-accent"
                initial={{ scaleX: 0, originX: 0 }}
                whileHover={{ scaleX: 1, originX: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-accent/50 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-3 bg-accent rounded-full mt-2"
          />
        </motion.div>
      </motion.div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-8 w-32 h-32 border border-accent/20 rotate-45 hidden lg:block" />
      <div className="absolute bottom-1/4 right-8 w-24 h-24 border border-accent/20 rotate-12 hidden lg:block" />
    </section>
  );
}
