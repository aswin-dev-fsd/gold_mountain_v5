export default function Home() {
  return (
    <main className="min-h-screen py-24 px-8 md:px-16 lg:px-32 max-w-7xl mx-auto">
      {/* Design System Test View */}
      <div className="space-y-16">
        
        <header className="space-y-4 border-b border-brand-gold/30 pb-8">
          <p className="text-brand-gold font-sans uppercase tracking-widest text-sm font-medium">Stage 2: Design System</p>
          <h1 className="text-5xl md:text-6xl text-brand-green font-light tracking-tight">Gold Mountain Wellness Resort</h1>
          <p className="text-xl md:text-2xl text-brand-green/80 font-serif italic max-w-2xl">
            A peaceful resort experience in the presence of Arunachala. Come for wellness. Stay for the experience.
          </p>
        </header>

        <section className="space-y-8">
          <h2 className="text-3xl text-brand-green border-b border-brand-green/10 pb-4">Typography (Outfit & The Seasons)</h2>
          
          <div className="space-y-6">
            <div>
              <p className="text-sm text-brand-green/60 mb-1">Heading 1 (45-60px)</p>
              <h1 className="text-4xl md:text-[60px] leading-tight text-brand-green">Discover Gold Mountain</h1>
            </div>
            <div>
              <p className="text-sm text-brand-green/60 mb-1">Heading 2 (35-40px)</p>
              <h2 className="text-[35px] md:text-[40px] leading-tight text-brand-green">Heal. Reconnect. Renew.</h2>
            </div>
            <div>
              <p className="text-sm text-brand-green/60 mb-1">Heading 3 (25-30px)</p>
              <h3 className="text-[25px] md:text-[30px] leading-tight text-brand-green">The Wellness Journey</h3>
            </div>
            <div>
              <p className="text-sm text-brand-green/60 mb-1">Body (16-24px)</p>
              <p className="text-base md:text-[18px] leading-[24px] text-brand-green/90 max-w-3xl">
                The resort is the destination and the environment for the stay. Wellness is the strongest proposition, not the entire identity. Ayurveda and traditional therapies are important parts of wellness, but they must not visually or strategically dominate the entire site.
              </p>
            </div>
            <div>
              <p className="text-sm text-brand-green/60 mb-1">Secondary / Emphasis (The Seasons)</p>
              <p className="font-serif text-2xl italic text-brand-gold">Nourish the body and quiet the mind in the presence of Arunachala.</p>
            </div>
          </div>
        </section>

        <section className="space-y-8">
          <h2 className="text-3xl text-brand-green border-b border-brand-green/10 pb-4">Color Palette</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="space-y-2">
              <div className="h-24 rounded bg-brand-ivory border border-brand-green/10"></div>
              <p className="text-sm font-medium">Warm Ivory</p>
              <p className="text-xs text-brand-green/60">#F7F3EA (50%)</p>
            </div>
            <div className="space-y-2">
              <div className="h-24 rounded bg-brand-green"></div>
              <p className="text-sm font-medium">Forest Green</p>
              <p className="text-xs text-brand-green/60">#214D33 (25%)</p>
            </div>
            <div className="space-y-2">
              <div className="h-24 rounded bg-brand-gold"></div>
              <p className="text-sm font-medium">Gold</p>
              <p className="text-xs text-brand-green/60">#C49A3A (15%)</p>
            </div>
            <div className="space-y-2">
              <div className="h-24 rounded bg-brand-red"></div>
              <p className="text-sm font-medium">Deep Red</p>
              <p className="text-xs text-brand-green/60">#8F2D24 (10%)</p>
            </div>
          </div>
        </section>

        <section className="space-y-8">
          <h2 className="text-3xl text-brand-green border-b border-brand-green/10 pb-4">Buttons & Actions</h2>
          
          <div className="flex flex-wrap gap-6 items-center">
            <button className="bg-brand-green text-brand-ivory px-8 py-4 uppercase tracking-wider text-sm font-medium hover:bg-brand-green/90 transition-colors duration-200">
              Enquire
            </button>
            <button className="bg-brand-gold text-brand-ivory px-8 py-4 uppercase tracking-wider text-sm font-medium hover:bg-brand-gold/90 transition-colors duration-200">
              Explore Wellness
            </button>
            <button className="border border-brand-green text-brand-green px-8 py-4 uppercase tracking-wider text-sm font-medium hover:bg-brand-green hover:text-brand-ivory transition-colors duration-200">
              Plan Your Stay
            </button>
          </div>
        </section>

      </div>
    </main>
  );
}
