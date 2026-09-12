import Link from "next/link";
import FinalEnquiry from "@/components/home/FinalEnquiry";

export default function WellnessPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden bg-brand-green">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-overlay"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=2000&auto=format&fit=crop')" }}
        ></div>
        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto pt-20">
          <p className="font-serif italic text-xl text-brand-gold mb-4">
            A return to balance
          </p>
          <h1 className="text-4xl md:text-6xl font-light text-brand-ivory tracking-tight">
            Wellness Philosophy
          </h1>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24 bg-brand-ivory px-6 md:px-12 lg:px-16">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-light text-brand-green tracking-tight">
            Healing as a way of living
          </h2>
          <div className="space-y-6 text-brand-green/80 text-lg leading-relaxed text-balance mx-auto">
            <p>
              At Gold Mountain, wellness is not just a treatment you receive—it is the environment you inhabit. We believe that true healing occurs when the body and mind are supported by nature, guided by ancient wisdom, and given the space to rest.
            </p>
            <p>
              Our approach integrates traditional Ayurveda, Yoga, and Meditation into a holistic lifestyle. We don't just treat symptoms; we help you rediscover your natural equilibrium.
            </p>
          </div>
        </div>
      </section>

      {/* Core Modalities */}
      <section className="py-24 bg-brand-green text-brand-ivory px-6 md:px-12 lg:px-16">
        <div className="max-w-7xl mx-auto space-y-20">
          
          {/* Ayurveda */}
          <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
            <div className="flex-1 space-y-6">
              <h3 className="text-3xl font-light">Traditional Ayurveda</h3>
              <p className="font-serif italic text-brand-gold text-lg">The science of life.</p>
              <p className="text-brand-ivory/80 leading-relaxed">
                Our resident Ayurvedic doctors provide personalized consultations to understand your unique constitution (Prakriti). We offer traditional therapies, detoxifications (Panchakarma), and dietary guidance to address the root cause of imbalances.
              </p>
            </div>
            <div className="flex-1 w-full">
              <div className="aspect-[4/3] bg-brand-ivory/10 rounded-sm"></div>
            </div>
          </div>

          {/* Yoga & Meditation */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-12 lg:gap-20">
            <div className="flex-1 space-y-6">
              <h3 className="text-3xl font-light">Yoga & Meditation</h3>
              <p className="font-serif italic text-brand-gold text-lg">Stillness in motion.</p>
              <p className="text-brand-ivory/80 leading-relaxed">
                Guided practices in our dedicated shala help you reconnect with your breath and body. In the silent presence of Arunachala, meditation becomes a natural state rather than a forced practice.
              </p>
            </div>
            <div className="flex-1 w-full">
              <div className="aspect-[4/3] bg-brand-ivory/10 rounded-sm"></div>
            </div>
          </div>

        </div>
      </section>

      <FinalEnquiry />
    </div>
  );
}
