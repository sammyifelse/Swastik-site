"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Smile, Users, Briefcase, Trophy, Phone } from "lucide-react";

// Helper component for decorative dot grids
function DotGrid({ className, cols = 4, rows = 7 }: { className?: string; cols?: number; rows?: number }) {
  return (
    <div
      className={`grid gap-[8px] ${className}`}
      style={{ gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))` }}
    >
      {Array.from({ length: cols * rows }).map((_, i) => (
        <div key={i} className="h-[3px] w-[3px] rounded-full bg-white/20" />
      ))}
    </div>
  );
}

export function Hero() {
  return (
    <section id="hero" className="relative isolate overflow-visible bg-[#0b0b0b] pt-[130px] pb-32 text-white md:pt-[150px]">
      {/* Background gradients and grid */}
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_top_left,rgba(105,184,31,0.12)_0%,rgba(5,5,5,0)_40%),radial-gradient(circle_at_bottom_right,rgba(105,184,31,0.08)_0%,rgba(5,5,5,0)_40%)]" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(255,255,255,0.02)_0%,rgba(255,255,255,0)_24%,rgba(255,255,255,0.01)_100%)]" />

      {/* Ambient glowing wave at bottom-left */}
      <div className="absolute left-0 bottom-0 -z-10 w-[350px] h-[350px] overflow-hidden pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0,100 Q40,65 0,10 Z" fill="url(#green-radial)" opacity="0.35" className="blur-xl" />
          <path d="M-10,95 C20,78 30,55 0,5" stroke="#69b81f" strokeWidth="1.8" fill="none" opacity="0.65" className="blur-[1px]" />
          <path d="M-10,95 C20,78 30,55 0,5" stroke="#9cee3c" strokeWidth="0.6" fill="none" opacity="0.8" />
          <defs>
            <radialGradient id="green-radial" cx="0%" cy="100%" r="100%">
              <stop offset="0%" stopColor="#69b81f" />
              <stop offset="60%" stopColor="#69b81f" stopOpacity="0.25" />
              <stop offset="100%" stopColor="transparent" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid items-center gap-8 grid-cols-1 lg:grid-cols-[1fr_1.4fr_0.7fr] lg:items-stretch">
          
          {/* Column 1: Logo Visual */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="relative flex items-center justify-center lg:h-full py-6"
          >
            {/* Left Dot Grid Decoration */}
            <DotGrid className="absolute left-[-10px] top-[15%] hidden xl:grid" cols={4} rows={7} />

            <div className="relative flex items-center justify-center">
              {/* Glow Behind Logo */}
              <div className="absolute h-[280px] w-[280px] md:h-[350px] md:w-[350px] rounded-full bg-[#69b81f]/10 blur-[70px]" />
              
              {/* Outer decorative ring */}
              <div className="absolute h-[330px] w-[330px] rounded-full border border-[#69b81f]/15" />
              {/* Inner decorative ring */}
              <div className="absolute h-[280px] w-[280px] rounded-full border border-[#69b81f]/10" />
              
              {/* Logo Image */}
              <div className="relative h-[260px] w-[260px] md:h-[320px] md:w-[320px] flex items-center justify-center">
                <Image 
                  src="/logo_transparent.png" 
                  alt="Swastik Advertising Logo" 
                  fill 
                  className="object-contain drop-shadow-[0_0_35px_rgba(105,184,31,0.3)]" 
                  priority 
                />
              </div>
            </div>
          </motion.div>

          {/* Column 2: Content (Headline, Description, Buttons) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="flex flex-col justify-center space-y-7 text-center lg:text-left z-10"
          >
            <div>
              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[54px] xl:text-[64px] font-bold leading-[1.08] tracking-tight">
                <span className="block">
                  <span className="text-[#65b91b]">We</span>{" "}
                  <span className="text-white">Build</span>
                </span>
                <span className="block mt-1 whitespace-nowrap">
                  <span className="text-white">Your</span>{" "}
                  <span className="text-[#65b91b]">Brand Identity</span>
                </span>
              </h1>
              <p className="mt-4 md:mt-5 font-serif text-[17px] sm:text-[18px] md:text-[19px] lg:text-[20px] font-normal text-zinc-300 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                From ideas to impact, we shape your brand presence.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-5 lg:justify-start pt-1">
              <a 
                href="#services" 
                onClick={(e) => { 
                  e.preventDefault(); 
                  const el = document.getElementById("services"); 
                  if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 110, behavior: "smooth" }); 
                }} 
                className="inline-flex items-center justify-center rounded-lg bg-[#65b91b] px-7 py-3.5 text-[15px] font-medium text-white shadow-[0_4px_18px_rgba(101,185,27,0.3)] transition-all hover:bg-[#5ba817] hover:shadow-[0_6px_24px_rgba(101,185,27,0.45)] hover:scale-[1.02] active:scale-[0.98] gap-1.5"
              >
                <span>Explore Services</span>
                <span className="text-lg leading-none font-normal">→</span>
              </a>
              
              <a 
                href="#contact" 
                onClick={(e) => { 
                  e.preventDefault(); 
                  const el = document.getElementById("contact"); 
                  if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 110, behavior: "smooth" }); 
                }} 
                className="inline-flex items-center justify-center rounded-lg border border-[#65b91b]/50 bg-black/40 px-7 py-3.5 text-[15px] font-medium text-white backdrop-blur-sm transition-all hover:bg-[#65b91b]/15 hover:border-[#65b91b] hover:scale-[1.02] active:scale-[0.98] gap-2.5"
              >
                <Phone className="h-4 w-4 text-[#65b91b]" />
                <span>Contact Us</span>
              </a>
            </div>
          </motion.div>

          {/* Column 3: Potted Plant */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative flex items-end justify-center lg:justify-end self-end lg:h-full py-6"
          >
            {/* Right Dot Grid Decoration */}
            <DotGrid className="absolute right-[-10px] top-[10%] hidden xl:grid" cols={4} rows={7} />

            {/* Glowing Green Light Behind Plant */}
            <div className="absolute bottom-[10%] right-[10%] -z-10 h-[180px] w-[180px] rounded-full bg-[#69b81f]/15 blur-[60px]" />

            <div className="relative w-[180px] h-[250px] md:w-[220px] md:h-[310px]">
              <Image 
                src="/hero_plant.png" 
                alt="Potted plant on pedestal" 
                fill 
                className="object-contain drop-shadow-2xl [mask-image:linear-gradient(to_bottom,black_60%,transparent_100%)]" 
                priority 
              />
            </div>
          </motion.div>

        </div>
      </div>

      {/* Stats bar (overlay) */}
      <div className="absolute left-0 right-0 bottom-[-48px]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="-mt-6 rounded-2xl border border-white/10 bg-[#0d0d0d]/85 py-6 px-8 shadow-[0_20px_50px_rgba(0,0,0,0.85)] backdrop-blur-md relative overflow-hidden">
            
            {/* Stats Dot Grid on far right */}
            <div className="absolute right-6 top-[25%] hidden xl:block pointer-events-none">
              <DotGrid cols={4} rows={5} />
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
              
              {/* Stat 1 */}
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0b0b0b] border border-[#69b81f]/45 text-white shadow-[0_0_15px_rgba(105,184,31,0.15)]">
                  <Smile className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-2xl font-extrabold text-white">12+</p>
                  <p className="text-xs text-neutral-400">Years of Experience</p>
                </div>
              </div>

              {/* Stat 2 */}
              <div className="flex items-center gap-4 sm:pl-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0b0b0b] border border-[#69b81f]/45 text-white shadow-[0_0_15px_rgba(105,184,31,0.15)]">
                  <Users className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-2xl font-extrabold text-white">500+</p>
                  <p className="text-xs text-neutral-400">Happy Clients</p>
                </div>
              </div>

              {/* Stat 3 */}
              <div className="flex items-center gap-4 sm:pl-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0b0b0b] border border-[#69b81f]/45 text-white shadow-[0_0_15px_rgba(105,184,31,0.15)]">
                  <Briefcase className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-2xl font-extrabold text-white">1000+</p>
                  <p className="text-xs text-neutral-400">Projects Completed</p>
                </div>
              </div>

              {/* Stat 4 */}
              <div className="flex items-center gap-4 sm:pl-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0b0b0b] border border-[#69b81f]/45 text-white shadow-[0_0_15px_rgba(105,184,31,0.15)]">
                  <Trophy className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-2xl font-extrabold text-white">15+</p>
                  <p className="text-xs text-neutral-400">Awards Won</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}