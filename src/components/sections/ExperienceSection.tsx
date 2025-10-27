"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { experienceSteps } from "@/constants/content";

export default function ExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="experience" ref={ref} className="py-24 px-6 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <h2 className="font-javanese text-4xl md:text-6xl font-bold text-accent mb-6">
            La Experiencia
          </h2>
          <p className="font-humanist text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto">
            Un ritual de autodescubrimiento, un manifiesto en movimiento.
          </p>
        </motion.div>

        <div className="space-y-8">
          {experienceSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 100, rotateX: 15 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : { opacity: 0, y: 100, rotateX: 15 }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.2,
                ease: "easeOut"
              }}
              className={`relative group cursor-pointer ${
                hoveredIndex === index ? 'z-20' : 'z-10'
              }`}
              style={{
                transform: `translateY(${index * -20}px)`,
                zIndex: hoveredIndex === index ? 20 : 10 - index
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              whileHover={{ 
                scale: 1.02,
                y: -10,
                transition: { duration: 0.3 }
              }}
            >
              <motion.div
                className="bg-linear-to-r from-background via-background/95 to-background/90 border border-accent/20 rounded-lg p-8 lg:p-12 shadow-2xl backdrop-blur-sm"
                style={{
                  background: `linear-gradient(135deg, 
                    rgba(13, 13, 13, 0.95) 0%, 
                    rgba(13, 13, 13, 0.9) 50%, 
                    rgba(13, 13, 13, 0.85) 100%)`
                }}
              >
                <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8">
                  {/* Icon */}
                  <motion.div
                    className="shrink-0 w-16 h-16 lg:w-20 lg:h-20 bg-accent/10 rounded-full flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300"
                    whileHover={{ rotate: 5 }}
                  >
                    <div className="w-8 h-8 lg:w-10 lg:h-10 bg-accent rounded-full flex items-center justify-center">
                      <span className="text-background font-bold text-lg lg:text-xl">
                        {index + 1}
                      </span>
                    </div>
                  </motion.div>

                  {/* Content */}
                  <div className="flex-1">
                    <motion.h3
                      className="font-javanese text-2xl md:text-3xl lg:text-4xl font-bold text-accent mb-4 group-hover:text-foreground transition-colors duration-300"
                      whileHover={{ scale: 1.02 }}
                    >
                      {step.title}
                    </motion.h3>
                    
                    <motion.p
                      className="font-humanist text-base md:text-lg text-foreground/80 leading-relaxed group-hover:text-foreground transition-colors duration-300"
                      whileHover={{ scale: 1.01 }}
                    >
                      {step.description}
                    </motion.p>
                  </div>
                </div>

                {/* Hover Effect Overlay */}
                <motion.div
                  className="absolute inset-0 bg-linear-to-r from-accent/5 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                />
              </motion.div>

              {/* Connection Line */}
              {index < experienceSteps.length - 1 && (
                <motion.div
                  initial={{ scaleY: 0 }}
                  animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 + 0.5 }}
                  className="absolute left-8 top-full w-0.5 h-8 bg-accent/30 origin-top"
                />
              )}
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1.5, ease: "easeOut" }}
          className="mt-20 text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-8 py-4 border-2 border-accent text-accent font-medium transition-all duration-300 hover:bg-accent hover:text-background overflow-hidden"
          >
            <span className="relative z-10">Begin Your Journey</span>
            <motion.div
              className="absolute inset-0 bg-accent"
              initial={{ scaleX: 0, originX: 0 }}
              whileHover={{ scaleX: 1, originX: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            />
          </motion.button>
        </motion.div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl hidden lg:block" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl hidden lg:block" />
    </section>
  );
}
