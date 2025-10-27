"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fullPortfolioImages } from "@/constants/content";
import Navigation from "@/components/ui/Navigation";

export default function PortfolioPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      <main className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="font-javanese text-5xl md:text-7xl font-bold text-accent mb-6">
            Portfolio Completo
          </h1>
          <p className="font-humanist text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto">
            Todas nuestras obras de arte boudoir
          </p>
        </motion.div>

        {/* Masonry Grid - 3 columns */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 lg:gap-8">
          {fullPortfolioImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.05 }}
              className="break-inside-avoid mb-6 lg:mb-8 group relative overflow-hidden rounded-lg cursor-pointer"
              onClick={() => setSelectedImage(index)}
            >
              <div className="relative w-full bg-gray-100">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={800}
                  height={1000}
                  className="w-full h-auto group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors duration-300" />
              </div>
            </motion.div>
          ))}
        </div>
      </main>

      {/* Polaroid Modal */}
      {selectedImage !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-5 bg-black/80 backdrop-blur-sm overflow-y-auto"
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
            {/* Polaroid Image - Full size */}
            <div className="relative w-full bg-gray-100 pt-2 px-2 pb-8">
              <div className="relative w-full" style={{ minHeight: '500px' }}>
                <Image
                  src={fullPortfolioImages[selectedImage].src}
                  alt={fullPortfolioImages[selectedImage].alt}
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* Close button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-4 -right-4 w-10 h-10 bg-accent text-background rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform z-50"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}

