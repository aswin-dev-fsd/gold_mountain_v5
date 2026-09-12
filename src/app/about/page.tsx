import Link from "next/link";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-brand-ivory pt-32 pb-24">
      {/* Hero Section */}
      <section className="px-6 md:px-12 lg:px-16 text-center max-w-4xl mx-auto space-y-6 mb-32">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-brand-green tracking-tight">
          A place created with purpose.
        </h1>
        <p className="text-brand-green/80 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto font-serif">
          Gold Mountain was founded on the belief that a return to nature and traditional hospitality can offer profound rest.
        </p>
      </section>

      {/* About Gold Mountain */}
      <section className="px-6 md:px-12 lg:px-16 mb-32 max-w-5xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-light text-brand-green mb-8">Our Story</h2>
        <p className="text-brand-green/80 text-lg leading-relaxed font-serif max-w-3xl mx-auto">
          We built this resort to serve as a quiet retreat at the base of Arunachala. Our aim has never been to create a conventional hotel, but rather a space that feels deeply connected to the land it stands on. We value simplicity, quietness, and the slow, deliberate pace of rural life in Tiruvannamalai.
        </p>
      </section>

      {/* Founder (Placeholder block) */}
      <section className="px-6 md:px-12 lg:px-16 mb-32 max-w-5xl mx-auto">
        <div className="border border-brand-green/20 p-12 lg:p-16 text-center space-y-6 bg-brand-green/5">
          <span className="text-xs font-medium uppercase tracking-widest text-brand-gold">Development Placeholder</span>
          <h2 className="text-2xl font-light text-brand-green">The Founder's Vision</h2>
          <div className="max-w-xl mx-auto space-y-4">
            <p className="text-brand-green/70 text-sm font-serif italic">
              "This section will feature the portrait, name, biography, and vision of the founder once supplied by the client. We are holding this space structurally until the confirmed story is ready."
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="bg-brand-green text-brand-ivory py-24 px-6 md:px-12 lg:px-16 mb-32 text-center">
        <div className="max-w-4xl mx-auto space-y-12">
          <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-12">Our Philosophy</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-y-12 gap-x-8">
            <div className="space-y-3">
              <h3 className="text-lg text-brand-gold uppercase tracking-wider text-xs font-medium">Nature</h3>
              <p className="font-serif text-brand-ivory/80 text-sm">Living in alignment with the rhythms of the earth.</p>
            </div>
            <div className="space-y-3">
              <h3 className="text-lg text-brand-gold uppercase tracking-wider text-xs font-medium">Wellness</h3>
              <p className="font-serif text-brand-ivory/80 text-sm">Approaching health holistically without medical claims.</p>
            </div>
            <div className="space-y-3">
              <h3 className="text-lg text-brand-gold uppercase tracking-wider text-xs font-medium">Food</h3>
              <p className="font-serif text-brand-ivory/80 text-sm">Nourishment sourced directly from our own soil.</p>
            </div>
            <div className="space-y-3">
              <h3 className="text-lg text-brand-gold uppercase tracking-wider text-xs font-medium">Tradition</h3>
              <p className="font-serif text-brand-ivory/80 text-sm">Honoring time-tested practices and indigenous wisdom.</p>
            </div>
            <div className="space-y-3">
              <h3 className="text-lg text-brand-gold uppercase tracking-wider text-xs font-medium">Hospitality</h3>
              <p className="font-serif text-brand-ivory/80 text-sm">Serving guests with quiet, unobtrusive care.</p>
            </div>
            <div className="space-y-3">
              <h3 className="text-lg text-brand-gold uppercase tracking-wider text-xs font-medium">Arunachala</h3>
              <p className="font-serif text-brand-ivory/80 text-sm">Respecting the spiritual gravity of the mountain.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Location / Landscape */}
      <section className="px-6 md:px-12 lg:px-16 mb-32 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-light text-brand-green">The Landscape of Tiruvannamalai</h2>
            <p className="text-brand-green/80 leading-relaxed font-serif">
              Tiruvannamalai is defined by Arunachala, a mountain that has drawn seekers and travelers for centuries. Gold Mountain is situated to offer a direct connection to this landscape. The air, the soil, and the quietness of the surrounding fields all contribute to the unique atmosphere of the property.
            </p>
          </div>
          <div className="relative aspect-[4/3] bg-brand-green/5 overflow-hidden">
            <Image 
              src="https://images.unsplash.com/photo-1518002054494-3a6f94352e9d?q=80&w=800&auto=format&fit=crop" 
              alt="The landscape of Tiruvannamalai" 
              fill 
              className="object-cover" 
            />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-6 md:px-12 lg:px-16 text-center max-w-3xl mx-auto space-y-8">
        <h2 className="text-3xl md:text-4xl font-light text-brand-green">
          Come experience Gold Mountain.
        </h2>
        <div className="pt-4">
          <Link 
            href="/stay" 
            className="inline-block bg-brand-green text-brand-ivory px-10 py-4 uppercase tracking-wider text-xs hover:bg-brand-gold hover:text-brand-ivory transition-colors duration-300"
          >
            Explore the Resort
          </Link>
        </div>
      </section>

    </div>
  );
}
