"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  delay: number;
}

function ServiceCard({ title, description, icon, delay }: ServiceCardProps) {
  return (
    <motion.div
      className="bg-card rounded-lg p-6 shadow-sm transition-all duration-300 border border-transparent flex flex-col items-start" // Added flex-col items-start for main card content
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, delay: delay }}
      whileHover={{
        y: -5,
        boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
        borderColor: "#3b82f6", // Blue-500
        zIndex: 10,
        transition: { duration: 0.3 }
      }}
    >
      {/* NEW: Wrapper for Icon and Title Box to place them on the same line */}
      <div className="flex items-center gap-4 mb-4"> {/* Added gap for spacing */}
        <motion.div 
          className="flex-shrink-0 flex items-center justify-center w-14 h-14 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300" // Decreased size for icon container
          animate={{ 
            rotate: [0, 5, 0, -5, 0]
          }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 5,
            delay: delay * 2,
          }}
        >
          <span className="text-2xl">{icon}</span> {/* Decreased icon size */}
        </motion.div>

        {/* NEW: Service Title inside a box with new color and smaller size */}
        <motion.div
          className="
            flex items-center justify-center
            px-4 py-2 // Decreased padding for smaller box
            rounded-md
            bg-blue-700 // Changed background color to a pleasing dark blue
            min-w-fit
            text-center // Ensure text is centered within its box
          "
          whileHover={{ y: -5 }} // Hover lift for the title box
        >
          <h3 className="text-md font-semibold text-white"> {/* Adjusted text size */}
            {title}
          </h3>
        </motion.div>
      </div>
      {/* END NEW: Icon and Title Box wrapper */}

      {/* Description and Underline now align to the start, below the icon/title line */}
      <p className="text-muted-foreground text-left mb-4">{description}</p> 

      <motion.div 
        className="w-12 h-1 bg-blue-500 rounded" // Removed mx-auto, aligned left
        initial={{ width: 0 }}
        whileInView={{ width: 48 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: delay + 0.3 }}
      />
    </motion.div>
  );
}

export function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const services = [
    {
      title: "Printing & Designing",
      description: "Transform your brand with premium printing and design that leaves a lasting impression.",
      icon: "🖨️",
      delay: 0.3
    },
    {
      title: "Outdoor Advertising",
      description: "Boost your brand's visibility with bold, eye-catching outdoor advertising solutions from design to installation",
      icon: "🏙️",
      delay: 0.4
    },
    {
      title: "Digital Marketing",
      description: "Smart marketing. Stronger impact.",
      icon: "📈",
      delay: 0.1
    },
    {
      title: "Profile Branding",
      description: "Craft a powerful brand story that captivates, connects, and sets you apart.",
      icon: "👤",
      delay: 1.0
    },
    {
      title: "Photography & Videography",
      description: "Show your brand's story through powerful photos and videos.",
      icon: "🎬",
      delay: 0.8
    },
    {
      title: "Content Writing",
      description: "Powerful words. Real results. ",
      icon: "✍️",
      delay: 1.2
    },
    {
      title: "Digital Classroom",
      description: "Learn better with interactive digital teaching.",
      icon: "🎓",
      delay: 0.1
    },
    {
      title: "Audio Video Advertising",
      description: "Catch attention with stunning promo videos and ads.",
      icon: "📹",
      delay: 0.7
    },
    {
      title: "Camera Rentals",
      description: "Rent pro camera gear, shoot like a pro.",
      icon: "🤝",
      delay: 0.9
    },
  ];

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div 
          ref={ref}
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Expert advertising and marketing services to boost your business
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              delay={service.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
}