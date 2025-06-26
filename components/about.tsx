"use client";

import { motion, AnimatePresence } from "framer-motion"; // Import AnimatePresence
import { useInView } from "framer-motion";
import { useRef, useState } from "react"; // Import useState

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8 }
    }
  };

  // --- Carousel State and Logic ---
  const images = [
    { src: "/1.jpg", alt: "Team and company culture event 1" },
    { src: "/3.jpg", alt: "Team and company culture event 2" },
    { src: "/4.jpg", alt: "Team and company culture event 3" },
    { src: "/10.jpg", alt: "Team and company culture event 4" },
    { src: "/5.jpg", alt: "Team and company culture event 5" },
    { src: "/9.jpg", alt: "Team and company culture event 6" },
    // { src: "/7.jpg", alt: "Team and company culture event 7" },
    // { src: "/12.jpg", alt: "Team and company culture event 8" },
    // { src: "/2.jpg", alt: "Team and company culture event 9" },
    // { src: "/8.jpg", alt: "Team and company culture event 10" },
    // { src: "/11.jpg", alt: "Team and company culture event 11" },
    // { src: "/6.jpg", alt: "Team and company culture event 12" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // 0: no change, 1: next, -1: prev

  const goToNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrevious = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };
  // --- End Carousel State and Logic ---

  return (
    <section id="about" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-6">
            Who We Are
          </motion.h2>
          
          {/* Our Vision, Our Mission, Our Values Boxes (unchanged) */}
          <motion.div
            variants={itemVariants}
            className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {/* Our Vision Box */}
            <motion.div 
              className="flex flex-col items-center justify-center p-8 rounded-lg bg-card shadow-lg h-64"
              whileHover={{ y: -5 }}
            >
              <div className="text-5xl mb-4">💡</div> {/* Placeholder for logo/icon */}
              <h4 className="text-xl font-semibold mb-2">Our Vision</h4>
              <p className="text-muted-foreground text-center">We envision a future where every brand, regardless of size, achieves its full potential through innovative and impactful advertising.</p>
            </motion.div>
            
            {/* Our Mission Box */}
            <motion.div 
              className="flex flex-col items-center justify-center p-8 rounded-lg bg-card shadow-lg h-64"
              whileHover={{ y: -5 }}
            >
              <div className="text-5xl mb-4">🎯</div> {/* Placeholder for logo/icon */}
              <h4 className="text-xl font-semibold mb-2">Our Mission</h4>
              <p className="text-muted-foreground text-center">To deliver exceptional advertising solutions that drive growth, enhance brand visibility, and foster lasting connections between businesses and their audiences.</p>
            </motion.div>
            
            {/* Our Values Box */}
            <motion.div 
              className="flex flex-col items-center justify-center p-8 rounded-lg bg-card shadow-lg h-64"
              whileHover={{ y: -5 }}
            >
              <div className="text-5xl mb-4">🤝</div> {/* Placeholder for logo/icon */}
              <h4 className="text-xl font-semibold mb-2">Our Values</h4>
              <p className="text-muted-foreground text-center">Creativity, integrity, collaboration, and client-centricity are at the core of everything we do.</p>
            </motion.div>
          </motion.div>

          {/* 10+ Years Experience, 100+ Happy Clients, 500+ Projects Boxes (unchanged) */}
          <motion.div
            variants={itemVariants}
            className="mt-10 flex flex-col md:flex-row justify-center gap-4 md:gap-8"
          >
            {/* Adjusted padding for increased length */}
            <motion.div 
              className="flex items-center gap-2 px-8 py-5 rounded-md bg-blue-50 dark:bg-blue-950 min-w-fit" // Increased px and py
              whileHover={{ y: -5 }}
            >
              <span className="text-blue-600 dark:text-blue-400 font-medium text-lg">10+</span> {/* Slightly larger text */}
              <span className="text-muted-foreground text-base">Years Experience</span> {/* Slightly larger text */}
            </motion.div>
            
            <motion.div 
              className="flex items-center gap-2 px-8 py-5 rounded-md bg-amber-50 dark:bg-amber-950 min-w-fit" // Increased px and py
              whileHover={{ y: -5 }}
            >
              <span className="text-amber-600 dark:text-amber-400 font-medium text-lg">100+</span> {/* Slightly larger text */}
              <span className="text-muted-foreground text-base">Happy Clients</span> {/* Slightly larger text */}
            </motion.div>
            
            <motion.div 
              className="flex items-center gap-2 px-8 py-5 rounded-md bg-purple-50 dark:bg-purple-950 min-w-fit" // Increased px and py
              whileHover={{ y: -5 }}
            >
              <span className="text-purple-600 dark:text-purple-400 font-medium text-lg">500+</span> {/* Slightly larger text */}
              <span className="text-muted-foreground text-base">Projects</span> {/* Slightly larger text */}
            </motion.div>
          </motion.div>

          {/* Photo Gallery - NOW A CAROUSEL */}
          <motion.div variants={itemVariants} className="mt-12 w-full">
            <h3 className="text-2xl md:text-3xl font-bold mb-8">
              Memorable Moments
            </h3>
            <div className="relative overflow-hidden rounded-lg shadow-lg aspect-video"> {/* Added aspect-video for consistent height */}
              <AnimatePresence initial={false} custom={direction}>
                <motion.img
                  key={currentIndex} // Key changes to re-trigger animation
                  src={images[currentIndex].src}
                  alt={images[currentIndex].alt}
                  className="absolute inset-0 w-full h-full object-cover" // Image covers the container
                  initial={{ opacity: 0, x: direction === 1 ? '100%' : direction === -1 ? '-100%' : 0 }}
                  animate={{ opacity: 1, x: '0%' }}
                  exit={{ opacity: 0, x: direction === 1 ? '-100%' : '100%' }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  custom={direction}
                />
              </AnimatePresence>

              {/* Navigation Buttons */}
              <button
                onClick={goToPrevious}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full z-10 hover:bg-opacity-75 transition-colors"
                aria-label="Previous image"
              >
                &larr;
              </button>
              <button
                onClick={goToNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full z-10 hover:bg-opacity-75 transition-colors"
                aria-label="Next image"
              >
                &rarr;
              </button>

              {/* Navigation Dots */}
              <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentIndex ? 'bg-blue-500' : 'bg-gray-400 hover:bg-gray-300'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  ></button>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}