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
      className="bg-card rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-transparent hover:border-blue-200 dark:hover:border-blue-800"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, delay: delay }}
      whileHover={{ 
        y: -10, 
        backgroundColor: "hsl(var(--card)/0.8)",
        transition: { duration: 0.3 } 
      }}
    >
      <motion.div 
        className="mb-6 flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300"
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
        <span className="text-3xl">{icon}</span>
      </motion.div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-muted-foreground">{description}</p>

      <motion.div 
        className="mt-4 w-12 h-1 bg-blue-500 rounded"
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
      title: "Marketing",
      description: "We provide comprehensive marketing strategies tailored to connect your brand with its target audience. Our focus is on data-driven campaigns that yield measurable results.",
      icon: "📈",
      delay: 0.1
    },
    {
      title: "Outdoor Signage & Hoardings",
      description: "Maximize your brand's visibility with impactful outdoor signage and hoardings. From design to installation, we ensure your message stands out.",
      icon: "🏙️",
      delay: 0.2
    },
    {
      title: "Shop Boards & In-Store Branding",
      description: "Create immersive brand experiences right at the point of sale. Our in-store branding solutions enhance customer engagement and sales.",
      icon: "🏪",
      delay: 0.3
    },
    {
      title: "Social Media Management",
      description: "Harness the power of social platforms. We manage your social media presence, curate engaging content, and build a vibrant online community.",
      icon: "📱",
      delay: 0.4
    },
    {
      title: "Graphic Design & Branding",
      description: "From captivating logos to complete brand identities, our graphic design services ensure your brand looks professional and memorable across all mediums.",
      icon: "🎨",
      delay: 0.5
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
            We offer a comprehensive range of advertising and marketing services to help your business thrive in today's competitive market.
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
