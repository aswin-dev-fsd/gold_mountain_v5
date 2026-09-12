import Link from "next/link";

const EXPERIENCES = [
  {
    title: "Shiva Shakthi Darshan",
    description: "A profound spiritual experience with clear views of the sacred mountain.",
    image: "https://images.unsplash.com/photo-1514539079130-25950c84af65?q=80&w=800&auto=format&fit=crop" // Replace with A-006
  },
  {
    title: "Nature & Farm",
    description: "Engage with our farm, herbal garden, cow shelter, and fish pond.",
    image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=800&auto=format&fit=crop" // Replace with A-011
  },
  {
    title: "Five Elements",
    description: "Connect deeply with earth, water, fire, air, and space.",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=800&auto=format&fit=crop" // Replace with A-014
  }
];

export default function Experience() {
  return (
    <section className="py-24 md:py-32 bg-brand-ivory px-6 md:px-12 lg:px-16">
      <div className="max-w-7xl mx-auto space-y-16">
        
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light text-brand-green tracking-tight">
            Curated Experiences
          </h2>
          <p className="font-serif italic text-xl text-brand-gold">
            Beyond accommodation. A journey of connection.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-10">
          {EXPERIENCES.map((exp, idx) => (
            <div key={idx} className="group cursor-pointer">
              <div className="relative aspect-[4/5] overflow-hidden bg-brand-green/5 mb-6">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url('${exp.image}')` }}
                ></div>
                <div className="absolute inset-0 bg-brand-green/20 group-hover:bg-transparent transition-colors duration-500"></div>
              </div>
              <h3 className="text-xl font-medium text-brand-green mb-2">{exp.title}</h3>
              <p className="text-brand-green/70 text-sm leading-relaxed">{exp.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center pt-8">
          <Link
            href="/experience"
            className="inline-block border border-brand-green text-brand-green px-8 py-3 uppercase tracking-wider text-xs font-medium hover:bg-brand-green hover:text-brand-ivory transition-colors duration-300"
          >
            View All Experiences
          </Link>
        </div>
      </div>
    </section>
  );
}
