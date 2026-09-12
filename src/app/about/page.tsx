import FinalEnquiry from "@/components/home/FinalEnquiry";

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden bg-brand-green">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-overlay"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2000&auto=format&fit=crop')" }}
        ></div>
        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto pt-20">
          <p className="font-serif italic text-xl text-brand-gold mb-4">
            Our Story
          </p>
          <h1 className="text-4xl md:text-6xl font-light text-brand-ivory tracking-tight">
            Founded in Devotion
          </h1>
        </div>
      </section>

      {/* The Origin */}
      <section className="py-24 bg-brand-ivory px-6 md:px-12 lg:px-16 border-b border-brand-green/10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-light text-brand-green tracking-tight">
            A vision realized
          </h2>
          <div className="space-y-6 text-brand-green/80 text-lg leading-relaxed text-balance mx-auto">
            <p>
              Gold Mountain Wellness Resort was born from a deep connection to the teachings of Bhagavan Ramana Maharshi and the silent power of Arunachala. 
            </p>
            <p>
              Our founders envisioned a space where seekers, travelers, and wellness enthusiasts could find genuine rest, supported by nature and ancient healing traditions. We are not just a resort; we are caretakers of a peaceful environment.
            </p>
          </div>
        </div>
      </section>

      {/* The Team / Philosophy */}
      <section className="py-24 bg-brand-ivory px-6 md:px-12 lg:px-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          <div className="flex-1 w-full">
            <div className="aspect-square bg-brand-green/5 rounded-sm"></div>
          </div>
          <div className="flex-1 space-y-6">
            <h2 className="text-3xl md:text-4xl font-light text-brand-green">The People</h2>
            <p className="text-brand-green/80 text-lg leading-relaxed">
              Our dedicated team of Ayurvedic doctors, yoga practitioners, and local staff work together to maintain this sanctuary. Every member of our team is committed to providing genuine hospitality and ensuring that your stay is restorative and peaceful.
            </p>
          </div>
        </div>
      </section>

      <FinalEnquiry />
    </div>
  );
}
