"use client";

import Image from "next/image"; // Import Image component
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface TeamMemberProps {
  name: string;
  title: string;
  bio: string;
  delay: number;
  imageSrc: string; 
}

function TeamMember({ name, title, bio, delay, imageSrc }: TeamMemberProps) {
  return (
    <motion.div
      className="flex flex-col items-center text-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay }}
    >
      <motion.div 
        className="w-40 h-40 rounded-full bg-muted/30 mb-6 overflow-hidden shadow-md"
        whileHover={{ scale: 1.05, transition: { duration: 0.3 }, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" }} // Added shadow and enhanced hover for 3D effect
      >
        <Image 
          src={imageSrc} 
          alt={name} 
          width={160} // w-40 = 160px
          height={160} // h-40 = 160px
          className="object-cover w-full h-full rounded-full" // Ensure image fills circular container
        />
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
      title: "Managing Director",
      bio: " I am a young enterpreneur and a visionery known for my dynamism and enterpreneural skills.If you choose me as your working partner, I promise you will get excellent service, expertise, hard work,responsiveness",
      delay: 0.1,
      imageSrc: "/tridip1.jpg" 
    },
    {
      name: "Mrs. Archita Duarah ",
      title: "Creative Director",
      bio: "I bring extensive expertise in creative strategy and brand development. My passion for impactful design shapes the unique solutions Swastik Advertising delivers.",
      delay: 0.2,
      imageSrc: "/Archita.jpg" 
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Management</h2>
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
              imageSrc={member.imageSrc}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
