import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image Placeholder - Replace with A-002 / Arunachala hero image */}
      <div className="absolute inset-0 bg-brand-green/20 z-10"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2000&auto=format&fit=crop')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-brand-ivory/30 via-transparent to-brand-ivory/80"></div>
      </div>

      <div className="relative z-20 text-center px-6 max-w-4xl mx-auto mt-20">
        <p className="font-serif italic text-xl md:text-2xl text-brand-ivory mb-6 tracking-wide drop-shadow-md">
          Discover Gold Mountain
        </p>
        <h1 className="text-5xl md:text-7xl lg:text-[80px] font-light text-brand-ivory leading-tight mb-12 drop-shadow-lg">
          Heal. Reconnect. Renew.
        </h1>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link
            href="/wellness"
            className="bg-brand-gold text-brand-ivory px-8 py-4 uppercase tracking-wider text-sm font-medium hover:bg-brand-ivory hover:text-brand-green transition-colors duration-300 w-full sm:w-auto"
          >
            Explore Wellness
          </Link>
          <Link
            href="/stay"
            className="bg-transparent border border-brand-ivory text-brand-ivory px-8 py-4 uppercase tracking-wider text-sm font-medium hover:bg-brand-ivory hover:text-brand-green transition-colors duration-300 w-full sm:w-auto backdrop-blur-sm"
          >
            Plan Your Stay
          </Link>
        </div>
      </div>
    </section>
  );
}
