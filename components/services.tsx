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
      title: "Printing & Designing",
      description: "Elevate your brand's image with our comprehensive printing and design services. From brochures to stationary, we create visually stunning and impactful materials.",
      icon: "🖨️",
      delay: 0.3
    },
    {
      title: "Outdoor Advertising",
      description: "Maximize your brand's visibility with impactful outdoor advertising, including signage and hoardings. From design to installation, we ensure your message stands out.",
      icon: "🏙️",
      delay: 0.4
    },
    {
      title: "Digital Marketing",
      description: "We provide comprehensive digital marketing strategies tailored to connect your brand with its target audience. Our focus is on data-driven campaigns that yield measurable results.",
      icon: "📈",
      delay: 0.1
    },
    {
      title: "Profile Branding",
      description: "Develop a compelling personal or corporate brand profile that resonates with your audience and stands out in the market.",
      icon: "👤",
      delay: 1.0
    },
    {
      title: "Photography & Videography",
      description: "Capture your brand's essence with professional photography and videography services for marketing content and corporate needs.",
      icon: "🎬",
      delay: 0.8
    },
    {
      title: "Content Writing",
      description: "Engage your audience with compelling and SEO-friendly content, including articles, blogs, website copy, and marketing materials.",
      icon: "✍️",
      delay: 1.2
    },
    {
      title: "Digital Classroom",
      description: "design and deliver interactive digital classes that engage your students and enhance their learning experience.",
      icon: "🎓",
      delay: 0.1
    },
    {
      title: "Audio Video Advertising",
      description: "Create captivating audio and video content for your marketing campaigns, including promotional videos and advertisements.",
      icon: "📹",
      delay: 0.7
    },
    {
      title: "Camera Rentals",
      description: "Access professional camera equipment for your projects with our flexible and affordable rental options.",
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