import Link from "next/link";

export default function Wellness() {
  return (
    <section className="py-24 md:py-32 bg-brand-ivory px-6 md:px-12 lg:px-16">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        
        {/* Content Side */}
        <div className="flex-1 space-y-8 order-2 lg:order-1">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-light text-brand-green tracking-tight">
              A Return to Balance
            </h2>
            <p className="font-serif italic text-xl text-brand-gold">
              Ayurveda, Yoga, and natural healing as a way of living.
            </p>
          </div>
          
          <div className="space-y-6 text-brand-green/80 text-base md:text-lg leading-relaxed max-w-xl">
            <p>
              Wellness at Gold Mountain is not merely a treatment, but an immersive environment. Here, traditional therapies meet the quiet rhythm of nature to help you heal, rest, and rediscover yourself.
            </p>
            <p>
              Through authentic Ayurveda, guided meditation, and deeply nourishing lifestyle practices, we support your body’s innate ability to find equilibrium.
            </p>
          </div>

          <div className="pt-4">
            <Link
              href="/wellness"
              className="inline-block border-b border-brand-green pb-1 text-brand-green uppercase tracking-widest text-xs font-medium hover:text-brand-gold hover:border-brand-gold transition-colors duration-300"
            >
              Explore Our Wellness Philosophy
            </Link>
          </div>
        </div>

        {/* Image Side - Replace with A-003 */}
        <div className="flex-1 w-full order-1 lg:order-2">
          <div className="relative aspect-[4/5] md:aspect-[3/4] w-full overflow-hidden bg-brand-green/5">
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-105"
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=1600&auto=format&fit=crop')" }}
            ></div>
          </div>
        </div>

      </div>
    </section>
  );
}
