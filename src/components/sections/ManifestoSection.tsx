"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { manifestoText } from "@/constants/content";

export default function ManifestoSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="manifesto" ref={ref} className="py-24 px-6 bg-background overflow-hidden ">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-linear-to-br from-accent/10 via-transparent to-accent/5" />
      </div>

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="font-javanese text-4xl md:text-6xl font-bold text-accent mb-6">
            Manifesto
          </h2>
          <div className="w-24 h-0.5 bg-accent mx-auto" />
        </motion.div>

        <div className="space-y-4 md:space-y-6">
          {manifestoText.map((line, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, rotateX: 15 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : { opacity: 0, y: 30, rotateX: 15 }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.2,
                ease: "easeOut"
              }}
              className="group relative"
            >
              <motion.p
                className="font-javanese text-xl md:text-3xl lg:text-4xl text-foreground text-center leading-snug group-hover:text-accent transition-colors duration-500"
                whileHover={{ scale: 1.02 }}
              >
                {line}
              </motion.p>
              
              {/* Decorative line for each stanza */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                transition={{ duration: 1, delay: index * 0.2 + 0.5 }}
                className="w-16 h-0.5 bg-accent/30 mx-auto mt-2"
              />
            </motion.div>
          ))}
        </div>

        {/* Bottom Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1.5, ease: "easeOut" }}
          className="mt-20 text-center"
        >
          <blockquote className="font-humanist text-lg md:text-xl text-foreground/70 italic max-w-4xl mx-auto leading-relaxed">
            "Somos un equipo interdisciplinario de artistas profesionales. Tenemos un método de trabajo serio y efectivo. Creamos un ambiente agradable, seguro y cuidado. Producimos contenido de alto valor artístico"
          </blockquote>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-2 h-32 bg-accent/20 hidden lg:block" />
      <div className="absolute bottom-20 left-10 w-2 h-24 bg-accent/20 hidden lg:block" />
    </section>
  );
}
