"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center py-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0 opacity-10 dark:opacity-5">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl"></div>
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-amber-300 rounded-full mix-blend-multiply filter blur-xl"></div>
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl"></div>
      </div>

      <div className="container mx-auto px-4 pt-12 relative z-10">
        {/*
          Changed md:flex-row-reverse to keep the logo on the left (as per your site image)
          Changed items-center to md:items-start to align content to the top on medium+ screens.
        */}
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-12">
          {/* Logo/Image Column (Left Side) */}
          <motion.div
            // Increased max-width for larger image. Adjust these values as needed.
            className="flex-1 w-full max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl"
            initial={{ opacity: 0, x: -20 }} // Changed x to -20 since it's now on the left
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="rounded-2xl bg-gradient-to-br from-blue-500/20 to-amber-500/20 p-1">
              <div className="bg-card rounded-xl overflow-hidden aspect-video relative">
                <Image
                  src="/logo.png" // Ensure this path is correct for your main logo
                  alt="Swastik Advertising Logo"
                  fill
                  className="object-contain p-4" // Keep padding for internal spacing
                  priority
                />
              </div>
            </div>
          </motion.div>

          {/* Text Content Column (Right Side) */}
          <motion.div
            className="flex-1 text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              // Increased text size and bottom margin
              className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 md:mb-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Welcome To Swastik Advertising
            </motion.h1>

            <motion.h2
              className="text-xl md:text-2xl font-medium text-muted-foreground mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Why Choose Us?
            </motion.h2>

            <motion.p
              className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl md:mx-0 mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              Creativity sparks ideas, but it's relentless action that brings brands to life.
            </motion.p>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <a
                href="#about"
                className="inline-flex items-center justify-center rounded-md bg-blue-600 px-6 py-3 text-sm font-medium text-white shadow transition-colors hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-1"
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.querySelector('#about');
                  if (element) {
                    window.scrollTo({
                      top: element.getBoundingClientRect().top + window.scrollY - 100,
                      behavior: "smooth"
                    });
                  }
                }}
              >
                Learn More 
              </a>
            </motion.div>

            {/* New section for three image boxes */}
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8"> {/* Added sm:grid-cols-2 for better small screen layout, increased gap */}
              {/* Image Box 1 */}
              <motion.div
                className="rounded-2xl bg-gradient-to-br from-blue-500/20 to-amber-500/20 p-1"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.0 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="bg-card rounded-xl overflow-hidden relative h-40 md:h-48 flex items-center justify-center"> {/* Adjusted height */}
                  <Image
                    src="/tridip1.jpg" // IMPORTANT: Replace with your actual image path (e.g., /images/event1.jpg)
                    alt="Event Image 1"
                    fill
                    className="object-cover" // Changed to object-cover to ensure images fill the box
                  />
                </div>
              </motion.div>

              {/* Image Box 2 */}
              <motion.div
                className="rounded-2xl bg-gradient-to-br from-blue-500/20 to-amber-500/20 p-1"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="bg-card rounded-xl overflow-hidden relative h-40 md:h-48 flex items-center justify-center">
                  <Image
                    src="/Archita.jpg" // IMPORTANT: Replace with your actual image path
                    alt="Event Image 2"
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>

              {/* Image Box 3 */}
              <motion.div
                className="rounded-2xl bg-gradient-to-br from-blue-500/20 to-amber-500/20 p-1"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.4 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="bg-card rounded-xl overflow-hidden relative h-40 md:h-48 flex items-center justify-center">
                  <Image
                    src="/3.jpg" // IMPORTANT: Replace with your actual image path
                    alt="Event Image 3"
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}