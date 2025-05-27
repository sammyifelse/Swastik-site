"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface ClientLogoProps {
  name: string;
  delay: number;
}

function ClientLogo({ name, delay }: ClientLogoProps) {
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
        <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">{name}</h3>
      </motion.div>
    </motion.div>
  );
}

export function Clients() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const clients = [
    { name: "BELVED", delay: 0.1 },
    { name: "airtel", delay: 0.15 },
    { name: "SAMSUNG", delay: 0.2 },
    { name: "LG", delay: 0.25 },
    { name: "SONY", delay: 0.3 },
    { name: "ASUS", delay: 0.35 },
    { name: "3M", delay: 0.4 },
    { name: "Cheil", delay: 0.45 },
    { name: "ALVON", delay: 0.5 },
    { name: "starflex", delay: 0.55 },
  ];

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
            />
          ))}
        </div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <p className="text-muted-foreground italic">
            "Swastika Advertising helped us increase our brand visibility by 200% within just 3 months."
          </p>
          <p className="text-sm font-medium mt-2">— Marketing Director, BELVED</p>
        </motion.div>
      </div>
    </section>
  );
}
