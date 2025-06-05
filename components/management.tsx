"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface TeamMemberProps {
  name: string;
  title: string;
  bio: string;
  delay: number;
}

function TeamMember({ name, title, bio, delay }: TeamMemberProps) {
  return (
    <motion.div
      className="flex flex-col items-center text-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay }}
    >
      <motion.div 
        className="w-40 h-40 rounded-full bg-muted/30 mb-6 overflow-hidden"
        whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
      >
        {/* Placeholder for team member photo */}
        <div className="w-full h-full flex items-center justify-center text-muted-foreground">
          <span className="text-5xl">👤</span>
        </div>
      </motion.div>
      <h3 className="text-xl font-semibold mb-1">{name}</h3>
      <p className="text-blue-600 dark:text-blue-400 mb-3">{title}</p>
      <p className="text-muted-foreground">{bio}</p>
    </motion.div>
  );
}

export function Management() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const team = [
    {
      name: "Mr.Tridip Saikia",
      title: "Founder & CEO",
      bio: "Mr. Tridip Saikia is a visionary leader with 15 years of experience in the advertising industry. He is dedicated to driving innovation and client success at Swastik Advertising.",
      delay: 0.1
    },
    {
      name: "Mrs. Archita Duarah ",
      title: "Co-Founder & Creative Director",
      bio: "Mrs. Archita Duarah  brings extensive expertise in creative strategy and brand development. Her passion for impactful design shapes the unique solutions Swastik Advertising delivers.",
      delay: 0.2
    },
  ];

  return (
    <section id="management" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div 
          ref={ref}
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Management</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Meet the experienced professionals behind Swastik Advertising's success and innovation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {team.map((member, index) => (
            <TeamMember
              key={index}
              name={member.name}
              title={member.title}
              bio={member.bio}
              delay={member.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
