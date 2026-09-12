import Link from "next/link";

export default function Resort() {
  return (
    <section className="py-24 md:py-32 bg-brand-green text-brand-ivory px-6 md:px-12 lg:px-16">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        
        {/* Content Side */}
        <div className="flex-1 space-y-8 order-2 lg:order-1">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-light tracking-tight">
              A Space to Breathe
            </h2>
            <p className="font-serif italic text-xl text-brand-gold">
              Comfortable accommodation in harmony with nature.
            </p>
          </div>
          
          <div className="space-y-6 text-brand-ivory/80 text-base md:text-lg leading-relaxed max-w-xl">
            <p>
              Gold Mountain is designed to be a peaceful sanctuary. Our accommodations offer simple luxury and quiet comfort, giving you the space you need to reflect and rest.
            </p>
            <p>
              Surrounded by natural landscapes and supported by our dedicated team, every aspect of the resort is crafted to enhance your wellness journey and provide genuine hospitality.
            </p>
          </div>

          <div className="pt-4">
            <Link
              href="/stay"
              className="inline-block border-b border-brand-gold pb-1 text-brand-gold uppercase tracking-widest text-xs font-medium hover:text-brand-ivory hover:border-brand-ivory transition-colors duration-300"
            >
              Explore the Resort
            </Link>
          </div>
        </div>

        {/* Image Side - Replace with A-004 */}
        <div className="flex-1 w-full order-1 lg:order-2">
          <div className="relative aspect-square w-full overflow-hidden bg-brand-ivory/5 rounded-sm">
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-105"
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1600&auto=format&fit=crop')" }}
            ></div>
          </div>
        </div>

      </div>
    </section>
  );
}
