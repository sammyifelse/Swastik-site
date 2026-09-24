"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { Clock3, Mail, Phone } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#hero", label: "Home" },
    { href: "#about", label: "About Swastik" },
    { href: "#services", label: "Services" },
    { href: "#clients", label: "Our Happy Clients" },
    { href: "#portfolio", label: "Our Portfolio" },
    { href: "#management", label: "Team Management" },
  ];

  return (
    <motion.header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-[#69b81f]/95 backdrop-blur-md shadow-[0_10px_40px_rgba(0,0,0,0.25)]" : "bg-[#69b81f]"}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
    >
      <div className="border-b border-black/10 bg-[#69b81f]">
        <div className="container mx-auto flex items-center justify-between px-4 md:px-6">
          <Link href="#hero" className="flex items-center gap-3 py-3.5">
            <div className="flex h-10 w-10 items-center justify-center md:h-11 md:w-11">
              <Image src="/logo_transparent.png" alt="Swastik Advertising Logo" width={44} height={44} className="h-full w-full object-contain" priority />
            </div>
            <div className="leading-tight">
              <p className="text-[17px] md:text-[19px] font-bold text-white tracking-wide">Swastik Advertising</p>
              <p className="text-[11px] md:text-[12px] font-normal text-white/90 tracking-normal">Complete Advertising & Printing Solutions</p>
            </div>
          </Link>

          <nav className="hidden items-center gap-1 xl:gap-2 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative flex items-center px-3.5 py-4 text-[13.5px] md:text-[14px] font-medium transition ${
                  link.href === "#hero" 
                    ? "text-[#d8ff9e] after:absolute after:bottom-2.5 after:left-[calc(50%-10px)] after:h-[2px] after:w-[20px] after:rounded-full after:bg-[#d8ff9e]" 
                    : "text-white hover:text-[#e8ffc2]"
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  const targetId = link.href === "#portfolio" ? "services" : link.href.replace("#", "");
                  const element = document.getElementById(targetId);
                  if (element) {
                    window.scrollTo({
                      top: element.getBoundingClientRect().top + window.scrollY - 110,
                      behavior: "smooth",
                    });
                  }
                }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex w-full items-center justify-between py-4 lg:hidden">
            <span className="text-sm font-semibold uppercase tracking-[0.24em] text-white">Menu</span>
            <span className="text-xs text-white/85">Home / About / Services / Contact</span>
          </div>
        </div>
      </div>
    </motion.header>
  );
}