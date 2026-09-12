import Link from "next/link";

const STAY_PATTERNS = [
  {
    title: "Short Stay",
    duration: "1-3 Nights",
    description: "A quick reset in the presence of the mountain.",
    href: "/stay#short"
  },
  {
    title: "Wellness Stay",
    duration: "7-14 Nights",
    description: "Deep healing with guided Ayurvedic treatments.",
    href: "/stay#wellness"
  },
  {
    title: "Monthly Stay",
    duration: "30+ Nights",
    description: "Immersive living, ideal for seekers and long-term reflection.",
    href: "/stay#monthly"
  }
];

export default function Stay() {
  return (
    <section className="py-24 bg-brand-green text-brand-ivory px-6 md:px-12 lg:px-16 border-t border-brand-ivory/10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 md:gap-8 justify-between items-start md:items-center">
        
        <div className="md:w-1/3 space-y-4">
          <h2 className="text-3xl md:text-4xl font-light tracking-tight">
            How will you stay?
          </h2>
          <p className="text-brand-ivory/70 text-sm leading-relaxed max-w-sm">
            Whether for a weekend reset or a month-long immersion, we offer pathways suited for your journey.
          </p>
        </div>

        <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-3 gap-6 w-full">
          {STAY_PATTERNS.map((stay, idx) => (
            <Link 
              key={idx} 
              href={stay.href}
              className="group block border border-brand-ivory/20 p-6 hover:bg-brand-ivory/5 transition-colors duration-300"
            >
              <span className="text-brand-gold text-xs font-medium uppercase tracking-widest block mb-4">
                {stay.duration}
              </span>
              <h3 className="text-xl mb-2 group-hover:text-brand-gold transition-colors">
                {stay.title}
              </h3>
              <p className="text-brand-ivory/60 text-xs leading-relaxed">
                {stay.description}
              </p>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
