"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "Wellness", href: "/wellness" },
  { name: "Stay", href: "/stay" },
  { name: "Experience", href: "/experience" },
  { name: "About", href: "/about" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileNav({ isOpen, onClose }: MobileNavProps) {
  const pathname = usePathname();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-40 bg-brand-ivory flex flex-col pt-24 px-8 pb-8 overflow-y-auto">
      <nav className="flex flex-col space-y-6 text-center mt-8">
        {NAV_LINKS.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            onClick={onClose}
            className={`text-2xl font-serif italic transition-colors ${
              pathname === link.href ? "text-brand-gold" : "text-brand-green hover:text-brand-gold"
            }`}
          >
            {link.name}
          </Link>
        ))}
      </nav>

      <div className="mt-auto pt-12 flex flex-col items-center space-y-6">
        <Link
          href="/enquire"
          onClick={onClose}
          className="bg-brand-green text-brand-ivory px-8 py-4 uppercase tracking-wider text-sm font-medium hover:bg-brand-green/90 transition-colors duration-200 w-full text-center max-w-xs"
        >
          Enquire
        </Link>
        
        <Link
          href="https://wa.me/pending"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-brand-green hover:text-brand-gold transition-colors"
        >
          <WhatsAppIcon className="w-5 h-5" />
          <span className="text-sm tracking-wider uppercase font-medium">WhatsApp Us</span>
        </Link>
      </div>
    </div>
  );
}
