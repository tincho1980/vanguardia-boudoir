"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import { portfolioImages } from "@/constants/content";

export default function PortfolioSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <section id="portfolio" ref={ref} className="py-24 px-6 bg-secondary/5 overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <h2 className="font-javanese text-4xl md:text-6xl font-bold text-accent mb-6">
            Portfolio
          </h2>
          <p className="font-humanist text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto">
            Galería cinematográfica de historias sublimes y momentos extraordinarios.
          </p>
        </motion.div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {portfolioImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.1,
                ease: "easeOut"
              }}
              className="group relative overflow-hidden rounded-lg cursor-pointer"
              onClick={() => setSelectedImage(index)}
              whileHover={{ y: -5 }}
            >
              {/* Image Container */}
              <div className="relative w-full aspect-[4/5] overflow-hidden">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-linear-to-t from-background/20 to-transparent" />

                {/* Hover Overlay */}
                <motion.div
                  className="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20"
                  initial={false}
                />

                {/* Hover Content */}
                <motion.div
                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30"
                  initial={false}
                >
                  <div className="text-center">
                    <motion.div
                      className="w-12 h-12 bg-background/90 rounded-full flex items-center justify-center mb-3 mx-auto"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </motion.div>
                    <p className="text-background font-medium">Ver Detalles</p>
                  </div>
                </motion.div>
              </div>

              {/* Image Info */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-linear-to-t from-background/90 to-transparent z-40">
                <p className="text-foreground font-medium text-sm">{image.alt}</p>
                <p className="text-accent/70 text-xs uppercase tracking-wider">{image.category}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
          className="mt-16 text-center"
        >
          <motion.a
            href="/portfolio"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-8 py-4 border-2 border-accent text-accent font-medium transition-all duration-300 hover:bg-accent hover:text-background overflow-hidden inline-block"
          >
            <span className="relative z-10">Ver Portfolio Completo</span>
            <motion.div
              className="absolute inset-0 bg-accent"
              initial={{ scaleX: 0, originX: 0 }}
              whileHover={{ scaleX: 1, originX: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            />
          </motion.a>
        </motion.div>
      </div>

      {/* Polaroid Modal */}
      {selectedImage !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center py-5 px-4 bg-black/80 backdrop-blur-sm overflow-y-auto"
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            initial={{ scale: 0.5, rotate: -5 }}
            animate={{ scale: 1, rotate: 0 }}
            exit={{ scale: 0.5, rotate: 5 }}
            transition={{ type: "spring", damping: 20 }}
            className="relative bg-white shadow-2xl max-w-2xl w-full my-5"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-2 right-2 w-10 h-10 bg-accent text-background rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform z-50"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Polaroid Image */}
            <div className="relative w-full bg-gray-100 pt-5 px-5 pb-[50px]">
              <div className="relative w-full aspect-[4/5] max-h-[calc(100vh-300px)]">
                <Image
                  src={portfolioImages[selectedImage].src}
                  alt={portfolioImages[selectedImage].alt}
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* Polaroid bottom caption area */}
            <div className="bg-white py-4 px-4 text-center">
              <p className="text-gray-800 font-javanese text-lg">
                {portfolioImages[selectedImage].alt}
              </p>
              <p className="text-gray-600 text-sm uppercase tracking-wider mt-2">
                {portfolioImages[selectedImage].category}
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Background Elements */}
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl hidden lg:block" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl hidden lg:block" />
    </section>
  );
}
