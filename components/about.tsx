"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

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

  return (
    <section id="about" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto text-center">
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-6">
            Who We Are
          </motion.h2>
          
          {/* Our Vision, Our Mission, Our Values Boxes */}
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

          {/* Moved: 10+ Years Experience, 100+ Happy Clients, 500+ Projects Boxes */}
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
        </motion.div>
      </div>
    </section>
  );
}