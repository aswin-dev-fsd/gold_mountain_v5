import Link from "next/link";
import FinalEnquiry from "@/components/home/FinalEnquiry";

export default function StayPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden bg-brand-green">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-overlay"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2000&auto=format&fit=crop')" }}
        ></div>
        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto pt-20">
          <p className="font-serif italic text-xl text-brand-gold mb-4">
            A space to breathe
          </p>
          <h1 className="text-4xl md:text-6xl font-light text-brand-ivory tracking-tight">
            Accommodations
          </h1>
        </div>
      </section>

      {/* The Environment */}
      <section className="py-24 bg-brand-ivory px-6 md:px-12 lg:px-16 border-b border-brand-green/10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-light text-brand-green tracking-tight">
            Designed for reflection
          </h2>
          <div className="space-y-6 text-brand-green/80 text-lg leading-relaxed text-balance mx-auto">
            <p>
              Our rooms are designed with simplicity and comfort in mind. We believe that true luxury lies in quietness, natural light, and a harmonious connection to the surrounding landscape.
            </p>
            <p>
              There are no televisions or loud distractions. Instead, we offer the sounds of nature and the silent presence of Arunachala.
            </p>
          </div>
        </div>
      </section>

      {/* Stay Patterns */}
      <section className="py-24 bg-brand-ivory px-6 md:px-12 lg:px-16">
        <div className="max-w-7xl mx-auto space-y-24">
          
          <div id="short" className="scroll-mt-32 flex flex-col md:flex-row items-start gap-12">
            <div className="md:w-1/3 sticky top-32">
              <span className="text-brand-gold text-sm font-medium uppercase tracking-widest block mb-4">1-3 Nights</span>
              <h3 className="text-3xl font-light text-brand-green mb-4">Short Stay</h3>
              <p className="font-serif italic text-brand-gold text-lg mb-6">A quick reset.</p>
              <Link href="/enquire" className="text-brand-green border-b border-brand-green pb-1 uppercase tracking-widest text-xs font-medium hover:text-brand-gold hover:border-brand-gold transition-colors">
                Enquire Now
              </Link>
            </div>
            <div className="md:w-2/3 space-y-6 text-brand-green/80 leading-relaxed">
              <div className="aspect-[16/9] bg-brand-green/5 mb-8 rounded-sm"></div>
              <p>Ideal for those seeking a weekend escape from the city or a short pilgrimage to Tiruvannamalai. Enjoy comfortable lodging, farm-fresh meals, and access to the serene resort grounds.</p>
            </div>
          </div>

          <div id="wellness" className="scroll-mt-32 flex flex-col md:flex-row items-start gap-12">
            <div className="md:w-1/3 sticky top-32">
              <span className="text-brand-gold text-sm font-medium uppercase tracking-widest block mb-4">7-14 Nights</span>
              <h3 className="text-3xl font-light text-brand-green mb-4">Wellness Stay</h3>
              <p className="font-serif italic text-brand-gold text-lg mb-6">Deep healing.</p>
              <Link href="/enquire" className="text-brand-green border-b border-brand-green pb-1 uppercase tracking-widest text-xs font-medium hover:text-brand-gold hover:border-brand-gold transition-colors">
                Enquire Now
              </Link>
            </div>
            <div className="md:w-2/3 space-y-6 text-brand-green/80 leading-relaxed">
              <div className="aspect-[16/9] bg-brand-green/5 mb-8 rounded-sm"></div>
              <p>Designed for guests undertaking Ayurvedic treatments or structured wellness retreats. This stay pattern includes daily consultations, scheduled therapies, and a curated diet plan to support your healing journey.</p>
            </div>
          </div>

          <div id="monthly" className="scroll-mt-32 flex flex-col md:flex-row items-start gap-12">
            <div className="md:w-1/3 sticky top-32">
              <span className="text-brand-gold text-sm font-medium uppercase tracking-widest block mb-4">30+ Nights</span>
              <h3 className="text-3xl font-light text-brand-green mb-4">Monthly Stay</h3>
              <p className="font-serif italic text-brand-gold text-lg mb-6">Immersive living.</p>
              <Link href="/enquire" className="text-brand-green border-b border-brand-green pb-1 uppercase tracking-widest text-xs font-medium hover:text-brand-gold hover:border-brand-gold transition-colors">
                Enquire Now
              </Link>
            </div>
            <div className="md:w-2/3 space-y-6 text-brand-green/80 leading-relaxed">
              <div className="aspect-[16/9] bg-brand-green/5 mb-8 rounded-sm"></div>
              <p>For spiritual seekers, writers, or those looking to deeply integrate the pace of ashram life. Monthly stays offer extended accommodation rates and the freedom to craft your own daily rhythm.</p>
            </div>
          </div>

        </div>
      </section>

      <FinalEnquiry />
    </div>
  );
}
