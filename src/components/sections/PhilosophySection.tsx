"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { philosophyStatements } from "@/constants/content";

export default function PhilosophySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="philosophy" ref={ref} className="py-24 px-6 bg-secondary/5 overflow-hidden relative">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 ">
        <div 
          className="absolute inset-0 bg-no-repeat bg-cover"
          style={{
            backgroundImage: "url('/images/portfolio/13.jpg')",
            backgroundPosition: 'right 50%',
            transform: 'translateX(-20%)'
          }}
        />
        <div className="absolute inset-0 bg-black/60" />
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to left, #0d0d0d 0%, #0d0d0d 80%, transparent 100%)'
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <h2 className="font-javanese text-4xl md:text-6xl font-bold text-accent mb-6">
            Filosofía
          </h2>
          <p className="font-humanist text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto">
            Somos amantes del extraordinario. Visionarios de historias sublimes. Diseñadores de Experiencias de Alta Gama.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
          {philosophyStatements.map((statement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, x: index % 2 === 0 ? -30 : 30 }}
              animate={isInView ? { opacity: 1, y: 0, x: 0 } : { opacity: 0, y: 50, x: index % 2 === 0 ? -30 : 30 }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.3,
                ease: "easeOut"
              }}
              className="group relative"
            >
              {/* Background Portrait Placeholder */}
              <div className="absolute inset-0 bg-linear-to-br from-accent/10 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10 p-8 lg:p-12">
                <motion.h3
                  className="font-javanese text-3xl md:text-4xl font-bold text-accent mb-6 group-hover:text-foreground transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  {statement.title}
                </motion.h3>
                
                <motion.p
                  className="font-humanist text-base md:text-lg text-foreground/80 leading-relaxed group-hover:text-foreground transition-colors duration-300"
                  whileHover={{ scale: 1.02 }}
                >
                  {statement.description}
                </motion.p>
              </div>

              {/* Decorative Border */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                transition={{ duration: 1, delay: index * 0.3 + 0.5 }}
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent origin-left"
              />
            </motion.div>
          ))}
        </div>

        {/* Bottom Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
          className="mt-20 text-center"
        >
          <div className="max-w-4xl mx-auto">
            <motion.p
              className="font-javanese text-2xl md:text-3xl text-foreground leading-relaxed"
              whileHover={{ scale: 1.02 }}
            >
              Poético, cinematográfico, elegante y rebelde.
            </motion.p>
          </div>
          <div className="max-w-4xl mx-auto">
            <motion.p
              className="font-javanese text-2xl md:text-3xl text-foreground leading-relaxed"
              whileHover={{ scale: 1.02 }}
            >
            Esa es nuestra visión.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
