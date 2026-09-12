import FinalEnquiry from "@/components/home/FinalEnquiry";

export default function ExperiencePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden bg-brand-green">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-overlay"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1514539079130-25950c84af65?q=80&w=2000&auto=format&fit=crop')" }}
        ></div>
        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto pt-20">
          <p className="font-serif italic text-xl text-brand-gold mb-4">
            Beyond accommodation
          </p>
          <h1 className="text-4xl md:text-6xl font-light text-brand-ivory tracking-tight">
            The Experience
          </h1>
        </div>
      </section>

      {/* Grid of Experiences */}
      <section className="py-24 bg-brand-ivory px-6 md:px-12 lg:px-16">
        <div className="max-w-7xl mx-auto space-y-24">
          
          {/* Darshan */}
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="flex-1 space-y-6">
              <h2 className="text-3xl md:text-4xl font-light text-brand-green">Shiva Shakthi Darshan</h2>
              <p className="text-brand-green/80 text-lg leading-relaxed">
                The most profound aspect of Gold Mountain is its uninterrupted view of Arunachala. Our property is oriented to allow guests to experience Darshan directly from the grounds, offering a quiet space for reverence and connection.
              </p>
            </div>
            <div className="flex-1 w-full">
              <div className="aspect-[4/3] bg-brand-green/5 rounded-sm"></div>
            </div>
          </div>

          {/* Elements */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-20">
            <div className="flex-1 space-y-6">
              <h2 className="text-3xl md:text-4xl font-light text-brand-green">The Five Elements</h2>
              <p className="text-brand-green/80 text-lg leading-relaxed">
                Our landscape is designed to bring you into contact with Earth, Water, Fire, Air, and Space. Walk barefoot on natural paths, listen to the movement of water, and experience the vast sky of Tiruvannamalai.
              </p>
            </div>
            <div className="flex-1 w-full">
              <div className="aspect-[4/3] bg-brand-green/5 rounded-sm"></div>
            </div>
          </div>

          {/* Farm & Nature */}
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="flex-1 space-y-6">
              <h2 className="text-3xl md:text-4xl font-light text-brand-green">Farm & Surroundings</h2>
              <p className="text-brand-green/80 text-lg leading-relaxed">
                Engage with the land through our herbal garden, cow shelter, and fish pond. These areas are not just features, but living ecosystems that supply our kitchen and support the natural balance of the resort.
              </p>
            </div>
            <div className="flex-1 w-full">
              <div className="aspect-[4/3] bg-brand-green/5 rounded-sm"></div>
            </div>
          </div>

        </div>
      </section>

      <FinalEnquiry />
    </div>
  );
}
