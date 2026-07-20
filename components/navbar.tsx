"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { Clock3, Mail, Phone } from "lucide-react";
import finalLogo from "../logo final.png";

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
    { href: "#about", label: "About Us" },
    { href: "#services", label: "Services" },
    { href: "#management", label: "Management" },
    { href: "#clients", label: "Our Clients" },
    { href: "#contact", label: "Contact Us" },
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
          <Link href="#hero" className="flex items-center gap-3 py-4 md:py-5">
            <Image src={finalLogo} alt="Swastik Advertising Logo" className="h-12 w-auto object-contain" priority />
            <div className="leading-tight">
              <p className="text-[15px] font-semibold text-white md:text-[18px]">Swastik Advertising</p>
              <p className="text-[11px] font-medium text-white/90 md:text-[13px]">Complete Advertising & Printing Solutions</p>
            </div>
          </Link>

          <nav className="hidden items-stretch gap-0 lg:flex">
            {navLinks.map((link) => (
              <motion.div key={link.href} whileHover={{ y: -1 }} whileTap={{ scale: 0.98 }}>
                <Link
                  href={link.href}
                  className={`relative flex items-center px-5 py-5 text-[13px] font-semibold uppercase tracking-[0.12em] transition ${link.href === "#hero" ? "text-[#d6ff87] after:absolute after:bottom-3 after:left-5 after:h-[2px] after:w-7 after:bg-[#d6ff87]" : "text-white hover:text-[#f3ffd0]"}`}
                  onClick={(e) => {
                    e.preventDefault();
                    const elementId = link.href.replace("#", "");
                    const element = document.getElementById(elementId);
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
              </motion.div>
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