"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import finalLogo from "../Logo final.png";

export function Hero() {
  const phrases = ["Brand Identity", "Campaigns", "Outdoor Advertising", "Business Growth"];
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];
    const typingDelay = isDeleting ? 45 : 85;

    const timeout = window.setTimeout(() => {
      if (!isDeleting) {
        const nextText = currentPhrase.slice(0, typedText.length + 1);
        setTypedText(nextText);

        if (nextText === currentPhrase) {
          window.setTimeout(() => setIsDeleting(true), 1200);
        }
      } else {
        const nextText = currentPhrase.slice(0, typedText.length - 1);
        setTypedText(nextText);

        if (nextText.length === 0) {
          setIsDeleting(false);
          setPhraseIndex((current) => (current + 1) % phrases.length);
        }
      }
    }, typingDelay);

    return () => window.clearTimeout(timeout);
  }, [typedText, isDeleting, phraseIndex, phrases]);

  return (
    <section id="hero" className="relative min-h-[82vh] overflow-hidden pt-[170px]">
      <div className="absolute inset-0 -z-20">
        <Image src="/2.jpg" alt="Advertising background" fill className="object-cover object-center" priority />
      </div>
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_left,rgba(255,248,236,0.82)_0%,rgba(255,248,236,0.58)_42%,rgba(242,247,252,0.82)_100%)]" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#fff8ee]/90 via-[#fff8ee]/65 to-[#eef5fb]/35" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(255,255,255,0.28)_0%,rgba(255,255,255,0.1)_100%)]" />

      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl py-10 md:py-16"
        >
          <div className="inline-flex items-center gap-3 rounded-full border border-white/70 bg-white/70 px-4 py-2 shadow-sm backdrop-blur-sm">
            <Image src={finalLogo} alt="Swastik Advertising Logo" className="h-7 w-auto object-contain" />
            <span className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-700">Swastik Advertising</span>
          </div>

          <h1 className="mt-8 max-w-4xl text-5xl font-extrabold uppercase leading-[0.95] tracking-tight text-slate-900 sm:text-6xl lg:text-8xl">
            We create
            <span className="mt-3 block text-[#7b8c6b]" aria-live="polite">
              {typedText}
              <span className="ml-1 inline-block w-[2px] h-6 align-middle bg-current animate-pulse" />
            </span>
            <span className="mt-3 block">for your next business</span>
          </h1>

          <p className="mt-6 max-w-2xl text-base font-medium uppercase tracking-[0.16em] text-slate-700 sm:text-lg">
            Outdoor advertising, branding, and visual communication with a clean premium look.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById("projects");
                if (element) {
                  window.scrollTo({ top: element.getBoundingClientRect().top + window.scrollY - 110, behavior: "smooth" });
                }
              }}
              className="inline-flex items-center justify-center gap-2 rounded-none bg-[#f7b84b] px-6 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-[#1f2328] transition hover:bg-[#efab36]"
            >
              View Portfolio
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById("contact");
                if (element) {
                  window.scrollTo({ top: element.getBoundingClientRect().top + window.scrollY - 110, behavior: "smooth" });
                }
              }}
              className="inline-flex items-center justify-center rounded-none border border-slate-300 bg-white/65 px-6 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-slate-800 backdrop-blur-sm transition hover:bg-white"
            >
              Contact Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}