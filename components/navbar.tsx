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
    { href: "#projects", label: "Projects" },
    { href: "#management", label: "Management" },
    { href: "#clients", label: "Our Clients" },
    { href: "#contact", label: "Contact Us" },
  ];

  return (
    <motion.header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white/95 backdrop-blur-md shadow-[0_10px_40px_rgba(15,23,42,0.08)]" : "bg-white"}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
    >
      <div className="border-b border-[#e7e0d7] bg-[#fffaf3]">
        <div className="container mx-auto px-4 md:px-6 py-2 md:py-3">
          <div className="flex flex-col gap-3 xl:flex-row xl:items-center xl:justify-between">
            <Link href="#hero" className="flex items-center gap-4">
              <Image
                src={finalLogo}
                alt="Swastik Advertising Logo"
                className="h-auto w-[120px] md:w-[150px] object-contain"
                style={{ mixBlendMode: 'screen', filter: 'brightness(1.05) contrast(1.03)' }}
                priority
              />
            </Link>

            <div className="grid gap-3 sm:grid-cols-3 xl:flex xl:items-center xl:justify-end">
              <div className="flex items-center gap-3 xl:gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f7b84b] text-white shadow-sm">
                  <Clock3 className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-base font-medium text-slate-900">Opening Time</p>
                  <p className="text-sm text-slate-600">Mon-Sat: 10.00-18.30</p>
                </div>
              </div>

              <a href="mailto:delta_publicity12@rediffmail.com" className="flex items-center gap-3 xl:gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#7b8c6b] text-white shadow-sm">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-base font-medium text-slate-900">Email Address</p>
                  <p className="text-sm text-slate-600">swastike945@gmail.com</p>
                </div>
              </a>

              <a href="tel:+916900110239" className="flex items-center gap-3 xl:gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#568ea3] text-white shadow-sm">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-base font-medium text-slate-900">Phone</p>
                  <p className="text-sm text-slate-600">+91 8751094364</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#2f2d2b]">
        <div className="container mx-auto flex items-center justify-between px-4 md:px-6">
          <nav className="hidden items-stretch gap-0 lg:flex">
            {navLinks.map((link) => (
              <motion.div key={link.href} whileHover={{ y: -1 }} whileTap={{ scale: 0.98 }}>
                <Link
                  href={link.href}
                  className={`relative flex items-center px-6 py-6 text-sm font-semibold uppercase tracking-wide transition ${link.href === "#hero" ? "bg-[#f7b84b] text-[#1f2328]" : "text-white hover:bg-white/10"}`}
                  onClick={(e) => {
                    e.preventDefault();
                    const elementId = link.href.replace('#', '');
                    const element = document.getElementById(elementId);
                    if (element) {
                      window.scrollTo({
                        top: element.getBoundingClientRect().top + window.scrollY - 110,
                        behavior: "smooth"
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
            <span className="text-sm font-semibold uppercase tracking-wide text-white">Menu</span>
            <span className="text-xs text-white/70">Home / About / Services / Contact</span>
          </div>
        </div>
      </div>
    </motion.header>
  );
}