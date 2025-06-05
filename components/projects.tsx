"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface ProjectCardProps {
  title: string;
  description: string;
  delay: number;
}

function ProjectCard({ title, description, delay }: ProjectCardProps) {
  return (
    <motion.div
      className="group relative overflow-hidden rounded-lg">
      <motion.div
        className="h-64 bg-muted/30 relative overflow-hidden rounded-lg"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, delay }}
        whileHover={{
          scale: 1.03,
          transition: { duration: 0.3 }
        }}
      >
        {/* Project image placeholder */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6 text-white">
          <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-300 transition-colors duration-300">{title}</h3>
          <p className="text-sm text-gray-200 mb-4">{description}</p>
          <motion.button
            className="w-fit px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Case Study
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const projects = [
    {
      title: "Miti Di Media", // Keeping the original first one as requested
      description: "Successfully delivered a comprehensive marketing campaign resulting in increased brand engagement and market reach for Miti Di Media.",
      delay: 0.1
    },
    {
      title: "Brahmaputra Innovations",
      description: "Developed a robust digital presence strategy and executed targeted regional campaigns, significantly boosting their market outreach in Assam.",
      delay: 0.2
    },
    {
      title: "VentureSpark Solutions",
      description: "Implemented a full-scale online marketing funnel, leading to a measurable increase in qualified lead generation and conversion rates for this dynamic startup.",
      delay: 0.3
    },
    {
      title: "Kaziranga Handlooms",
      description: "Crafted a compelling brand story and launched focused social media campaigns, significantly enhancing their e-commerce sales and brand recognition for unique handicrafts.",
      delay: 0.4
    },
    {
      title: "Apex Agri-Tech",
      description: "Executed a comprehensive content marketing and SEO strategy, improving their online visibility and organic traffic for innovative agricultural solutions.",
      delay: 0.5
    },
    {
      title: "NorthEast Connect Marketing",
      description: "Designed and implemented a full suite of marketing collaterals and localized advertising for this regional agency, strengthening their brand's market position.",
      delay: 0.6
    },
  ];

  return (
    <section id="projects" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <motion.div 
          ref={ref}
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore some of our successful projects that have helped businesses achieve their marketing and advertising goals.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              delay={project.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
}