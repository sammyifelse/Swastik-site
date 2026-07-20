"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import finalLogo from "../logo final.png";

export function Hero() {
  const services = [
    { src: "/1.jpeg", label: "Photo 01" },
    { src: "/2.jpeg", label: "Photo 02" },
    { src: "/3.jpeg", label: "Photo 03" },
  ];

  return (
    <section id="hero" className="relative isolate overflow-hidden bg-[#0b0b0b] pt-[148px] pb-8 text-white md:pt-[156px]">
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_top_left,rgba(116,255,52,0.16)_0%,rgba(5,5,5,0)_32%),radial-gradient(circle_at_bottom_right,rgba(116,255,52,0.1)_0%,rgba(5,5,5,0)_36%)]" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(255,255,255,0.03)_0%,rgba(255,255,255,0)_24%,rgba(255,255,255,0.02)_100%)]" />
      <div className="absolute inset-0 -z-10 opacity-25 [background-image:linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:72px_72px]" />

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid items-start gap-8 lg:grid-cols-[1.05fr_1.35fr] lg:items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="relative lg:h-full"
          >
            <div className="relative flex items-center justify-center overflow-hidden rounded-[2.2rem] border border-white/10 bg-white/[0.03] p-6 shadow-[0_0_80px_rgba(0,0,0,0.45)] backdrop-blur-sm lg:h-full lg:py-8">
              <div className="absolute inset-y-0 right-0 w-24 bg-[linear-gradient(180deg,rgba(125,255,79,0.35)_0%,rgba(125,255,79,0)_100%)] blur-2xl" />
              <div className="relative flex items-center justify-center">
                <div className="absolute h-[26rem] w-[26rem] rounded-full border border-white/12" />
                <div className="absolute h-[21rem] w-[21rem] rounded-full border border-[#7dff4f]/35 shadow-[0_0_80px_rgba(125,255,79,0.15)]" />
                <div className="absolute h-[16rem] w-[16rem] rounded-full bg-[radial-gradient(circle,rgba(125,255,79,0.18)_0%,rgba(125,255,79,0)_70%)]" />
                <div className="relative flex h-[18rem] w-[18rem] items-center justify-center rounded-full border border-white/15 bg-black/40 shadow-[inset_0_0_40px_rgba(255,255,255,0.04)]">
                  <Image src={finalLogo} alt="Swastik Advertising logo" className="h-[11.5rem] w-[11.5rem] object-contain drop-shadow-[0_0_26px_rgba(125,255,79,0.32)]" priority />
                </div>
              </div>

              {/* <div className="relative mt-8 space-y-3 text-center">
                <p className="text-4xl font-black uppercase tracking-[0.18em] text-[#7dff4f] drop-shadow-[0_0_18px_rgba(125,255,79,0.35)]">Swastik</p>
                <p className="text-lg font-semibold uppercase tracking-[0.6em] text-white/80">Advertising</p>
                <p className="mx-auto max-w-xs border-t border-white/10 pt-4 text-sm uppercase tracking-[0.24em] text-white/70">We build your brand</p>
              </div> */}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="space-y-6"
          >
            <div className="text-center lg:text-left">
              <h1 className="text-[clamp(3rem,5vw,6.5rem)] font-black uppercase leading-[0.92] tracking-[-0.04em] whitespace-normal lg:whitespace-nowrap">
                <span className="text-[#7dff4f] drop-shadow-[0_0_24px_rgba(125,255,79,0.35)]">We</span>{" "}
                <span className="text-white">Build</span>{" "}
                <span className="text-white">Your</span>{" "}
                <span className="text-[#7dff4f]">Brand</span>{" "}
                <span className="text-[#7dff4f]">Identity</span>
              </h1>
              <p className="mt-4 text-base font-semibold text-white/80 lg:text-lg">
                From ideas to impact, we shape your brand presence.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 lg:justify-start">
              <a href="#services" onClick={(e) => { e.preventDefault(); const el = document.getElementById("services"); if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 110, behavior: "smooth" }); }} className="inline-flex items-center justify-center rounded-xl bg-[#7dff4f] px-7 py-4 text-sm font-semibold text-black shadow-[0_0_20px_rgba(125,255,79,0.28)] transition hover:bg-[#8cff5d]">
                Explore Services
              </a>
              <a href="#contact" onClick={(e) => { e.preventDefault(); const el = document.getElementById("contact"); if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 110, behavior: "smooth" }); }} className="inline-flex items-center justify-center rounded-xl border border-[#7dff4f]/55 bg-transparent px-7 py-4 text-sm font-semibold text-white transition hover:bg-white/5">
                Contact Us
              </a>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
              {services.map((service, index) => (
                <motion.div
                  key={service.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.08 }}
                  className="rounded-[1.6rem] border border-[#7dff4f]/30 bg-[linear-gradient(180deg,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0.03)_100%)] p-4 shadow-[0_0_36px_rgba(0,0,0,0.42)] backdrop-blur-sm"
                >
                  <div className="relative h-40 overflow-hidden rounded-2xl border border-[#7dff4f]/35 bg-black/35">
                    <Image
                      src={service.src}
                      alt={service.label}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.05)_0%,rgba(0,0,0,0.3)_100%)]" />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}