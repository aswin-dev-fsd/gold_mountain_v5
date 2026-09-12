import Link from "next/link";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";

export default function FinalEnquiry() {
  return (
    <section className="py-32 bg-brand-green text-brand-ivory px-6 md:px-12 lg:px-16 text-center">
      <div className="max-w-3xl mx-auto space-y-10">
        
        <div className="space-y-6">
          <h2 className="text-4xl md:text-6xl font-light tracking-tight text-balance">
            Ready to find your peace?
          </h2>
          <p className="text-lg text-brand-ivory/80 max-w-xl mx-auto text-balance">
            Connect with our team to discuss your stay, wellness requirements, and travel arrangements to Gold Mountain.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
          <Link
            href="/enquire"
            className="bg-brand-gold text-brand-green px-10 py-4 uppercase tracking-wider text-sm font-medium hover:bg-brand-ivory transition-colors duration-300 w-full sm:w-auto"
          >
            Send an Enquiry
          </Link>
          <Link
            href="https://wa.me/pending"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 border border-brand-ivory/30 px-10 py-4 hover:bg-brand-ivory/10 transition-colors duration-300 w-full sm:w-auto"
          >
            <WhatsAppIcon className="w-5 h-5" />
            <span className="uppercase tracking-wider text-sm font-medium">WhatsApp Us</span>
          </Link>
        </div>

      </div>
    </section>
  );
}
