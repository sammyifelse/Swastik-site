"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Image from 'next/image'; // Import Next.js Image component for optimized images

interface ClientLogoProps {
  name: string;
  delay: number;
  imageSrc?: string; // Add optional imageSrc prop
}

function ClientLogo({ name, delay, imageSrc }: ClientLogoProps) {
  return (
    <motion.div
      className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm flex items-center justify-center h-32 relative overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay }}
      whileHover={{
        y: -10,
        rotate: 1,
        boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
        transition: { duration: 0.3 }
      }}
    >
      {/* Add subtle animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50 via-white to-amber-50 dark:from-blue-900/20 dark:via-gray-800 dark:to-amber-900/20 opacity-50 animate-gradient"></div>

      <motion.div
        className="relative z-10"
        animate={{
          scale: [1, 1.05, 1]
        }}
        transition={{
          repeat: Infinity,
          repeatType: "reverse",
          duration: 4,
          delay: delay * 2,
        }}
      >
        {imageSrc ? (
          // If imageSrc is provided, render the Next.js Image component
          <Image
            src={imageSrc}
            alt={name}
            width={120} // Adjust width as needed for your logos
            height={60} // Adjust height as needed for your logos
            layout="intrinsic" // or "contain", "fill", "responsive" based on desired behavior
            objectFit="contain" // Ensures the image fits within its container
            className="max-h-full max-w-full" // Ensure image doesn't overflow
          />
        ) : (
          // Otherwise, render the text name
          <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">{name}</h3>
        )}
      </motion.div>
    </motion.div>
  );
}

export function Clients() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const clients = [
    { name: "South Indian Bank", delay: 0.1, imageSrc: "/south.jpg" }, // Added imageSrc
    { name: "Assam State Rural Livelihood ", delay: 0.15, imageSrc: "/Assam.jpg" }, // Added imageSrc
    { name: "Kaziranga Automobiles", delay: 0.2 },
    { name: "Prag News", delay: 0.25 },
    { name: "NE Taxi", delay: 0.3 },
    { name: "Akshar Foundation", delay: 0.35 },
    { name: "Mohan Motors", delay: 0.4 },
    { name: "Nezone Tubes", delay: 0.45 },
    { name: "Kanha Group", delay: 0.5 },
    { name: "Assam Carbon Products", delay: 0.55 },
  ];

  const testimonials = [
    {
      quote: "Swastik Advertising helped us increase our brand visibility by 200% within just 3 months.",
      author: "Marketing Director, BELVED",
    },
    {
      quote: "Our online engagement soared after collaborating with Swastik Advertising. Truly remarkable results!",
      author: "CEO, Tech Solutions Inc.",
    },
    {
      quote: "The team at Swastik Advertising delivered an outstanding campaign that exceeded all our expectations.",
      author: "Founder, Creative Minds Co.",
    },
  ];

  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonialIndex((prevIndex) =>
        (prevIndex + 1) % testimonials.length
      );
    }, 6000); // Change testimonial every 6 seconds (adjust as needed)

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section id="clients" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">We are Trusted By</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            These industry leaders have trusted us with their advertising and marketing needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {clients.map((client, index) => (
            <ClientLogo
              key={index}
              name={client.name}
              delay={client.delay}
              imageSrc={client.imageSrc} // Pass the new imageSrc prop
            />
          ))}
        </div>

        <div className="mt-12 text-center h-24 flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonialIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-muted-foreground italic">
                "{testimonials[currentTestimonialIndex].quote}"
              </p>
              <p className="text-sm font-medium mt-2">
                — {testimonials[currentTestimonialIndex].author}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}