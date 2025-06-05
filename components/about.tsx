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
          
          <motion.h3 variants={itemVariants} className="text-xl md:text-2xl text-primary mb-8">
            "Swastik enterprise” Swastik is a multi-creative advertising agency, who delivers strong branding identity through various communications across all media.
          </motion.h3>
          
          <motion.p variants={itemVariants} className="text-lg mb-6 text-muted-foreground">
            Swastik Enterprise is a top creative advertising  agency in Northeastern India. We specialize in branding and media promotion. We offer creative solutions that work both online and offline. Our goal is to provide the best advertising solutions for our clients, whether individual, small businesses, or big companies. We tailor our services to meet the unique needs of each client.
          </motion.p>
          
          <motion.p variants={itemVariants} className="text-lg mb-6 text-muted-foreground">
            Our focus is on clean strategies, collaborative environments, and leveraging innovative solutions to solve real-world marketing challenges for businesses of all sizes.
          </motion.p>
          
          <motion.p variants={itemVariants} className="text-lg mb-6 text-muted-foreground">
            We are a committed group of people who believes in flexibility, hard-work, on-time schedule, client commitment and teamwork as the basis of a healthy work culture.
          </motion.p>
          <motion.p variants={itemVariants} className="text-lg mb-6 text-muted-foreground">
            We are committed to our clients and consider their choices and wants as our topmost priority. We consider their needs and issues with utmost care and believe in providing a holistic approach through creative solutions.
          </motion.p>
          
          <motion.div 
            variants={itemVariants}
            className="mt-10 flex justify-center gap-4"
          >
            <motion.div 
              className="flex items-center gap-2 px-6 py-3 rounded-md bg-blue-50 dark:bg-blue-950"
              whileHover={{ y: -5 }}
            >
              <span className="text-blue-600 dark:text-blue-400 font-medium">10+</span>
              <span className="text-muted-foreground text-sm">Years Experience</span>
            </motion.div>
            
            <motion.div 
              className="flex items-center gap-2 px-6 py-3 rounded-md bg-amber-50 dark:bg-amber-950"
              whileHover={{ y: -5 }}
            >
              <span className="text-amber-600 dark:text-amber-400 font-medium">100+</span>
              <span className="text-muted-foreground text-sm">Happy Clients</span>
            </motion.div>
            
            <motion.div 
              className="flex items-center gap-2 px-6 py-3 rounded-md bg-purple-50 dark:bg-purple-950"
              whileHover={{ y: -5 }}
            >
              <span className="text-purple-600 dark:text-purple-400 font-medium">500+</span>
              <span className="text-muted-foreground text-sm">Projects</span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
