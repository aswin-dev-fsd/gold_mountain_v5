import Link from "next/link";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-brand-ivory pt-32 pb-24 px-6 md:px-12 lg:px-16">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24">
        
        {/* Contact Info */}
        <div className="flex-1 space-y-12">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-light text-brand-green tracking-tight">
              Get in Touch
            </h1>
            <p className="font-serif italic text-xl text-brand-gold">
              We look forward to welcoming you.
            </p>
          </div>

          <div className="space-y-8 text-brand-green/80">
            <div className="space-y-2">
              <h3 className="text-sm font-medium uppercase tracking-widest text-brand-gold">Address</h3>
              <p>Gold Mountain Wellness Resort<br />Tiruvannamalai<br />Tamil Nadu, India</p>
            </div>
            
            <div className="space-y-2">
              <h3 className="text-sm font-medium uppercase tracking-widest text-brand-gold">Email</h3>
              <a href="mailto:pending@example.com" className="hover:text-brand-gold transition-colors">enquiry@goldmountain.example</a>
            </div>

            <div className="space-y-2">
              <h3 className="text-sm font-medium uppercase tracking-widest text-brand-gold">Phone</h3>
              <a href="tel:+910000000000" className="hover:text-brand-gold transition-colors">+91 [Number Pending]</a>
            </div>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row gap-4">
            <Link
              href="/enquire"
              className="bg-brand-green text-brand-ivory px-8 py-4 uppercase tracking-wider text-xs font-medium hover:bg-brand-green/90 transition-colors duration-200 text-center"
            >
              Send an Enquiry
            </Link>
            <Link
              href="https://wa.me/pending"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 border border-brand-green/20 text-brand-green px-8 py-4 hover:bg-brand-green/5 transition-colors"
            >
              <WhatsAppIcon className="w-4 h-4" />
              <span className="uppercase tracking-wider text-xs font-medium">WhatsApp Us</span>
            </Link>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="flex-1 w-full">
          <div className="aspect-square w-full bg-brand-green/10 flex items-center justify-center">
            <p className="text-brand-green/50 uppercase tracking-widest text-sm font-medium">Google Maps Integration Pending</p>
          </div>
        </div>

      </div>
    </div>
  );
}
