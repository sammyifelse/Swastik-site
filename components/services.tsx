"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Camera, ChartColumn, Clapperboard, GraduationCap, ImageIcon, Megaphone, PenTool, Printer, Video } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ElementType;
  delay: number;
}

function ServiceCard({ title, description, icon: Icon, delay }: ServiceCardProps) {
  return (
    <motion.div
      className="group relative min-h-[290px] overflow-hidden rounded-[1.75rem] border border-[#67d82a] bg-[#050505] p-8 text-white shadow-[0_0_0_1px_rgba(103,216,42,0.08),0_24px_60px_rgba(0,0,0,0.45)] transition-transform duration-300 hover:-translate-y-1"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.22 }}
      transition={{ duration: 0.7, delay }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(103,216,42,0.08)_0%,rgba(0,0,0,0)_55%)] opacity-90" />
      <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:54px_54px]" />

      <div className="relative inline-flex items-center gap-4">
        <span className="flex h-10 w-10 items-center justify-center rounded-[0.7rem] border border-[#67d82a]/40 bg-[#67d82a]/12 text-white shadow-[0_0_16px_rgba(103,216,42,0.12)]">
          <Icon className="h-5 w-5" />
        </span>
        <h3 className="text-[1rem] font-semibold leading-none text-white md:text-[1.08rem]">
          {title}
        </h3>
      </div>

      <p className="relative mt-8 max-w-sm text-[1.02rem] leading-[1.65] text-white/72 md:text-[1.08rem]">
        {description}
      </p>

      <motion.div
        className="relative mt-8 h-1 w-16 rounded-full bg-[#4f89ff]"
        initial={{ width: 0 }}
        whileInView={{ width: 64 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: delay + 0.2 }}
      />
    </motion.div>
  );
}

export function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.12 });

  const services = [
    {
      title: "Printing & Designing",
      description: "Transform your brand with premium printing and design that leaves a lasting impression.",
      icon: Printer,
      delay: 0.1,
    },
    {
      title: "Outdoor Advertising",
      description: "Boost your brand's visibility with bold, eye-catching outdoor advertising solutions from design to installation.",
      icon: Megaphone,
      delay: 0.2,
    },
    {
      title: "Digital Marketing",
      description: "Smart marketing. Stronger impact.",
      icon: ChartColumn,
      delay: 0.3,
    },
    {
      title: "Profile Branding",
      description: "Craft a powerful brand story that captivates, connects, and sets you apart.",
      icon: ImageIcon,
      delay: 0.4,
    },
    {
      title: "Photography & Videography",
      description: "Show your brand's story through powerful photos and videos.",
      icon: Camera,
      delay: 0.5,
    },
    {
      title: "Content Writing",
      description: "Powerful words. Real results.",
      icon: PenTool,
      delay: 0.6,
    },
    {
      title: "Digital Classroom",
      description: "Learn better with interactive digital teaching.",
      icon: GraduationCap,
      delay: 0.7,
    },
    {
      title: "Audio Video Advertising",
      description: "Catch attention with stunning promo videos and ads.",
      icon: Video,
      delay: 0.8,
    },
    {
      title: "Camera Rentals",
      description: "Rent pro camera gear, shoot like a pro.",
      icon: Camera,
      delay: 0.9,
    },
  ];

  return (
    <section id="services" className="bg-[#050505] py-20 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          ref={ref}
          className="mb-14 text-center"
          initial={{ opacity: 0, y: 18 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-8">
            Our Services
          </h2>
          <p className="mx-auto mt-8 max-w-3xl text-lg text-white/70 md:text-xl">
            Expert advertising and marketing services to boost your business.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
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