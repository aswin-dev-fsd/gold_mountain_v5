import Link from "next/link";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-green text-brand-ivory pt-20 pb-10 px-6 md:px-12 lg:px-16 mt-auto">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        
        {/* Brand & Story */}
        <div className="space-y-6 lg:col-span-1">
          <Link href="/" className="inline-block">
            <span className="font-serif italic text-3xl text-brand-gold">
              Gold Mountain
            </span>
          </Link>
          <p className="text-brand-ivory/80 text-sm leading-relaxed max-w-sm">
            A peaceful resort experience in the presence of Arunachala. Come for wellness. Stay for the experience.
          </p>
        </div>

        {/* Navigation */}
        <div className="space-y-6">
          <h4 className="text-brand-gold uppercase tracking-widest text-xs font-medium">Explore</h4>
          <nav className="flex flex-col space-y-3">
            <Link href="/wellness" className="text-brand-ivory/80 hover:text-brand-gold transition-colors text-sm">Wellness</Link>
            <Link href="/stay" className="text-brand-ivory/80 hover:text-brand-gold transition-colors text-sm">Stay</Link>
            <Link href="/experience" className="text-brand-ivory/80 hover:text-brand-gold transition-colors text-sm">Experience</Link>
            <Link href="/about" className="text-brand-ivory/80 hover:text-brand-gold transition-colors text-sm">About</Link>
            <Link href="/blog" className="text-brand-ivory/80 hover:text-brand-gold transition-colors text-sm">Blog</Link>
          </nav>
        </div>

        {/* Contact */}
        <div className="space-y-6">
          <h4 className="text-brand-gold uppercase tracking-widest text-xs font-medium">Contact</h4>
          <div className="flex flex-col space-y-3 text-sm text-brand-ivory/80">
            {/* C-022: Address Pending */}
            <p>Tiruvannamalai<br />Tamil Nadu, India</p>
            {/* C-020: Email Pending */}
            <a href="mailto:pending@example.com" className="hover:text-brand-gold transition-colors">enquiry@goldmountain.example</a>
            {/* C-019: Phone Pending */}
            <a href="tel:+910000000000" className="hover:text-brand-gold transition-colors">+91 [Number Pending]</a>
          </div>
        </div>

        {/* Action */}
        <div className="space-y-6">
          <h4 className="text-brand-gold uppercase tracking-widest text-xs font-medium">Enquiries</h4>
          <p className="text-sm text-brand-ivory/80">
            Reach out to our team to plan your peaceful stay and wellness journey.
          </p>
          <div className="flex flex-col space-y-4 pt-2">
            <Link
              href="/enquire"
              className="bg-brand-gold text-brand-green px-6 py-3 uppercase tracking-wider text-xs font-medium hover:bg-brand-ivory transition-colors duration-200 text-center inline-block"
            >
              Send an Enquiry
            </Link>
            <Link
              href="https://wa.me/pending"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 border border-brand-ivory/20 px-6 py-3 hover:bg-brand-ivory/10 transition-colors"
            >
              <WhatsAppIcon className="w-4 h-4" />
              <span className="uppercase tracking-wider text-xs font-medium">WhatsApp Us</span>
            </Link>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto border-t border-brand-ivory/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-brand-ivory/60">
        <p>&copy; {currentYear} Gold Mountain Wellness Resort. All rights reserved.</p>
        <div className="flex space-x-6">
          {/* C-023: Legal Pending */}
          <Link href="/privacy" className="hover:text-brand-gold transition-colors">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-brand-gold transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
