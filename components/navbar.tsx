"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ThemeToggle } from "./theme-toggle";
import Image from "next/image";

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
    { href: "#management", label: "Our Management" },
    { href: "#clients", label: "Our Clients" },
    { href: "#contact", label: "Contact Us" },
  ];

  return (
    <motion.header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-background/95 backdrop-blur-sm shadow-md" : "bg-transparent"}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
    >
      <div className="container mx-auto px-4 md:px-6 py-4">
        {/* Using justify-between instead of gap-x for more direct control of spacing between two main groups */}
        <div className="flex items-center justify-between"> {/* Changed to justify-between */}
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-xl md:text-2xl font-bold flex items-center" // Ensure flex for image/text alignment
          >
            <Link href="#hero" className="flex items-center gap-4"> {/* Increased gap between image and text */}
              <Image
                src="/logo.png"
                alt="Swastik Advertising Logo"
                width={40} // Increased width of the logo image
                height={40} // Increased height of the logo image
                className="object-contain"
              />
              <span className="text-primary whitespace-nowrap">Swastik</span> {/* Added whitespace-nowrap */}
              <span className="text-primary/80 whitespace-nowrap">Advertising</span> {/* Added whitespace-nowrap */}
            </Link>
          </motion.div>

          {/* Desktop Navigation & Theme Toggle */}
          {/* Combined nav and theme toggle into one flex container */}
          <div className="flex items-center">
            {/* Further decreased space-x to 2 for less space between nav items */}
            <nav className="hidden md:flex items-center space-x-2 ml-auto"> {/* Changed from space-x-3 to space-x-2 and added ml-auto */}
              {navLinks.map((link) => (
                <motion.div
                  key={link.href}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href={link.href}
                    className="text-base font-medium hover:text-primary transition-colors whitespace-nowrap px-2 py-1 rounded-md" // Added padding and rounded corners for better hit area and visual
                    onClick={(e) => {
                      e.preventDefault();
                      const elementId = link.href.replace('#', '');
                      const element = document.getElementById(elementId);
                      if (element) {
                        window.scrollTo({
                          top: element.getBoundingClientRect().top + window.scrollY - 100,
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

            {/* Theme Toggle (adjusted its position for better flow) */}
            <motion.div
              className="ml-4 flex items-center" // Added ml-4 to separate from nav links
              whileTap={{ scale: 0.95 }}
            >
              <ThemeToggle />
              {/* Add mobile menu button here if needed */}
            </motion.div>
          </div>
        </div>
      </div>
    </motion.header>
  );
}