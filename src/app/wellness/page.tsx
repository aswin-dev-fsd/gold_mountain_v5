import Link from "next/link";
import Image from "next/image";

export default function WellnessPage() {
  return (
    <div className="min-h-screen bg-brand-ivory pt-32 pb-24">
      {/* Hero Section */}
      <section className="px-6 md:px-12 lg:px-16 text-center max-w-4xl mx-auto space-y-8 mb-32">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-brand-green tracking-tight">
          A slower way back to yourself.
        </h1>
        <p className="text-brand-green/80 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto font-serif">
          Traditional wellness practices, nourishing food and quiet spaces that support reconnection with body and mind.
        </p>
        <div className="pt-4">
          <Link 
            href="#approach" 
            className="inline-block bg-brand-green text-brand-ivory px-8 py-3 uppercase tracking-wider text-xs hover:bg-brand-gold hover:text-brand-ivory transition-colors duration-300"
          >
            Explore Our Wellness
          </Link>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="px-6 md:px-12 lg:px-16 mb-32 max-w-5xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-light text-brand-green mb-8">A Way of Living</h2>
        <p className="text-brand-green/80 text-lg leading-relaxed font-serif">
          At Gold Mountain, wellness is not a schedule you endure; it is a way of living that brings together traditional practices, nature, nourishment, movement, meditation, rest and lifestyle. We provide the environment and the expertise to help you rediscover your natural balance.
        </p>
      </section>

      {/* Wellness Approach (Editorial Composition instead of Icon Grid) */}
      <section id="approach" className="px-6 md:px-12 lg:px-16 mb-32 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
          <div className="relative aspect-[4/5] bg-brand-green/5 overflow-hidden">
            <Image 
              src="https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=800&auto=format&fit=crop" 
              alt="Yoga and movement" 
              fill 
              className="object-cover" 
            />
          </div>
          <div className="space-y-6">
            <h3 className="text-2xl font-light text-brand-green">Yoga, Meditation & Movement</h3>
            <p className="text-brand-green/80 leading-relaxed font-serif">
              Our spaces are designed to encourage stillness and conscious movement. Whether it is guided meditation in the quiet of the morning or a gentle yoga flow overlooking the landscape, the focus is on reconnecting with the breath and the present moment.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24 md:flex-row-reverse">
          <div className="space-y-6 md:order-1">
            <h3 className="text-2xl font-light text-brand-green">Nourishment & Nature</h3>
            <p className="text-brand-green/80 leading-relaxed font-serif">
              We believe that true health begins with what we consume and how we spend our time. Healthy food drawn from our land, and days spent moving thoughtfully through nature form the foundation of the lifestyle here. Rest is treated as a necessity, not an indulgence.
            </p>
          </div>
          <div className="relative aspect-[4/5] bg-brand-green/5 overflow-hidden">
            <Image 
              src="https://images.unsplash.com/photo-1490818387583-1b5ba459740f?q=80&w=800&auto=format&fit=crop" 
              alt="Healthy food" 
              fill 
              className="object-cover" 
            />
          </div>
        </div>
      </section>

      {/* Ayurveda Section */}
      <section className="bg-brand-green text-brand-ivory py-24 px-6 md:px-12 lg:px-16 mb-32 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-3xl md:text-4xl font-light tracking-tight">
            Traditional wisdom, thoughtfully experienced.
          </h2>
          <p className="text-brand-ivory/80 text-lg leading-relaxed font-serif max-w-2xl mx-auto">
            Ayurveda at Gold Mountain is rooted in ancient Indian knowledge, adapted for the modern traveler seeking lasting balance. It is an approach to healing that considers the whole person — body, mind, and spirit — using time-tested therapies to restore natural vitality.
          </p>
          <div className="pt-8">
            <Link 
              href="#programmes" 
              className="inline-block border border-brand-gold text-brand-gold px-8 py-3 uppercase tracking-wider text-xs hover:bg-brand-gold hover:text-brand-green transition-colors duration-300"
            >
              Explore Ayurveda
            </Link>
          </div>
        </div>
      </section>

      {/* Programmes / Packages (Placeholder block) */}
      <section id="programmes" className="px-6 md:px-12 lg:px-16 mb-32 max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-light text-brand-green mb-4">Wellness Programmes</h2>
          <p className="text-brand-green/80 font-serif">Carefully structured stays for deeper restoration.</p>
        </div>
        
        {/* Tracked placeholder: Packages not yet confirmed */}
        <div className="border border-brand-green/20 p-12 text-center space-y-4">
          <span className="text-xs font-medium uppercase tracking-widest text-brand-gold">Coming Soon</span>
          <h3 className="text-xl font-light text-brand-green">Curated Packages</h3>
          <p className="text-brand-green/70 text-sm font-serif max-w-md mx-auto">
            Our wellness and Ayurvedic packages (including duration, pricing, and specific inclusions) are currently being finalized by our practitioners. 
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-6 md:px-12 lg:px-16 text-center max-w-3xl mx-auto space-y-8">
        <h2 className="text-3xl md:text-4xl font-light text-brand-green">
          Find the kind of wellness that suits your stay.
        </h2>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Link 
            href="https://wa.me/message/TEMP" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-brand-green text-brand-ivory px-8 py-4 uppercase tracking-wider text-xs hover:bg-brand-gold hover:text-brand-ivory transition-colors duration-300"
          >
            Enquire on WhatsApp
          </Link>
          <Link 
            href="mailto:hello@goldmountain.com" 
            className="w-full sm:w-auto border border-brand-green text-brand-green px-8 py-4 uppercase tracking-wider text-xs hover:bg-brand-green hover:text-brand-ivory transition-colors duration-300"
          >
            Send an Email
          </Link>
        </div>
      </section>

    </div>
  );
}
