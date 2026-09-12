"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import MobileNav from "./MobileNav";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "Wellness", href: "/wellness" },
  { name: "Stay", href: "/stay" },
  { name: "Experience", href: "/experience" },
  { name: "About", href: "/about" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-brand-ivory/95 backdrop-blur-sm shadow-sm py-4" : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 flex items-center justify-between">
          
          {/* Logo Placeholder */}
          <Link href="/" className="relative z-50 group">
            <span className="font-serif italic text-2xl md:text-3xl text-brand-green group-hover:text-brand-gold transition-colors">
              Gold Mountain
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm tracking-widest uppercase transition-colors ${
                  pathname === link.href ? "text-brand-gold" : "text-brand-green hover:text-brand-gold"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center space-x-6">
            <Link
              href="https://wa.me/pending"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-green hover:text-brand-gold transition-colors"
              aria-label="WhatsApp Us"
            >
              <WhatsAppIcon className="w-5 h-5" />
            </Link>
            <Link
              href="/enquire"
              className="bg-brand-green text-brand-ivory px-6 py-3 uppercase tracking-wider text-xs font-medium hover:bg-brand-green/90 transition-colors duration-200"
            >
              Enquire
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden relative z-50 p-2 text-brand-green hover:text-brand-gold transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className={`w-full h-[1px] bg-current transition-transform duration-300 origin-left ${isMobileMenuOpen ? "rotate-45" : ""}`}></span>
              <span className={`w-full h-[1px] bg-current transition-opacity duration-300 ${isMobileMenuOpen ? "opacity-0" : ""}`}></span>
              <span className={`w-full h-[1px] bg-current transition-transform duration-300 origin-left ${isMobileMenuOpen ? "-rotate-45" : ""}`}></span>
            </div>
          </button>

        </div>
      </header>

      <MobileNav isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </>
  );
}
