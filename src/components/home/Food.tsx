import Link from "next/link";

export default function Food() {
  return (
    <section className="py-24 md:py-32 bg-brand-ivory px-6 md:px-12 lg:px-16">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        
        {/* Image Side - Replace with A-007 */}
        <div className="flex-1 w-full">
          <div className="relative aspect-[4/3] w-full overflow-hidden bg-brand-green/5">
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-105"
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=1600&auto=format&fit=crop')" }}
            ></div>
          </div>
        </div>

        {/* Content Side */}
        <div className="flex-1 space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-light text-brand-green tracking-tight">
              Nourishment from the Earth
            </h2>
            <p className="font-serif italic text-xl text-brand-gold">
              Farm-grown ingredients and Ayurvedic principles.
            </p>
          </div>
          
          <div className="space-y-6 text-brand-green/80 text-base md:text-lg leading-relaxed max-w-xl">
            <p>
              Food is central to the healing journey. We cultivate fresh vegetables in our own farm and maintain a dedicated herbal garden to ensure every meal is deeply nourishing.
            </p>
            <p>
              Prepared according to holistic Ayurvedic principles, our dining experience is designed to restore vitality, support digestion, and bring joy to your stay.
            </p>
          </div>

          <div className="pt-4">
            <Link
              href="/experience#food"
              className="inline-block border-b border-brand-green pb-1 text-brand-green uppercase tracking-widest text-xs font-medium hover:text-brand-gold hover:border-brand-gold transition-colors duration-300"
            >
              Discover Dining
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
