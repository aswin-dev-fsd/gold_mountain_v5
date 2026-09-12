import Link from "next/link";
import Image from "next/image";

export default function ExperiencePage() {
  return (
    <div className="min-h-screen bg-brand-ivory pt-32 pb-24">
      {/* Hero Section */}
      <section className="px-6 md:px-12 lg:px-16 text-center max-w-4xl mx-auto space-y-6 mb-32">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-brand-green tracking-tight">
          Experience the place beyond the stay.
        </h1>
        <p className="text-brand-green/80 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto font-serif">
          Gold Mountain is defined by its environment—the quiet presence of Arunachala and the land that sustains us.
        </p>
      </section>

      {/* Shiva Shakthi Darshanam */}
      <section className="px-6 md:px-12 lg:px-16 mb-32 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-square bg-brand-green/5 overflow-hidden">
            <Image 
              src="https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=800&auto=format&fit=crop" 
              alt="Shiva Shakthi Darshanam view" 
              fill 
              className="object-cover" 
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-light text-brand-green">Shiva Shakthi Darshanam</h2>
            {/* Tracked placeholder: Pending client-approved description */}
            <p className="text-brand-green/80 leading-relaxed font-serif">
              Our location provides a unique vantage point of the sacred mountain, Arunachala. This specific view, known as Shiva Shakthi Darshanam, is a central part of the quiet, contemplative atmosphere at Gold Mountain. Guests often spend their mornings here, sitting in silent observation as the light changes over the peak.
            </p>
          </div>
        </div>
      </section>

      {/* The Five Element Philosophy */}
      <section className="bg-brand-green text-brand-ivory py-24 px-6 md:px-12 lg:px-16 mb-32 text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-3xl md:text-4xl font-light tracking-tight">
            Five Element Philosophy
          </h2>
          <p className="text-brand-ivory/80 text-lg leading-relaxed font-serif">
            The design and daily rhythms of Gold Mountain are quietly guided by the five elements—Earth, Water, Fire, Air, and Space. We believe that spending time in environments where these elements are balanced helps to restore a natural sense of equilibrium in ourselves.
          </p>
        </div>
      </section>

      {/* Property Features (Grid) */}
      <section className="px-6 md:px-12 lg:px-16 mb-32 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* From Our Land */}
          <div className="space-y-6">
            <div className="relative aspect-[4/3] bg-brand-green/5 overflow-hidden">
              <Image 
                src="https://images.unsplash.com/photo-1517498779691-37d363f85b88?q=80&w=600&auto=format&fit=crop" 
                alt="From Our Land" 
                fill 
                className="object-cover" 
              />
            </div>
            <h3 className="text-2xl font-light text-brand-green">From Our Land</h3>
            <p className="text-brand-green/80 font-serif leading-relaxed">
              We maintain a deep connection to the soil. Our herbal garden and farm-grown vegetables supply our kitchen, ensuring that the food you eat is fresh, seasonal, and rooted in the landscape around you.
            </p>
          </div>

          {/* The Cow Shelter */}
          <div className="space-y-6">
            <div className="relative aspect-[4/3] bg-brand-green/5 overflow-hidden">
              <Image 
                src="https://images.unsplash.com/photo-1527153857715-3908f2bae5e8?q=80&w=600&auto=format&fit=crop"
                alt="The Cow Shelter" 
                fill 
                className="object-cover" 
              />
            </div>
            <h3 className="text-2xl font-light text-brand-green">The Cow Shelter</h3>
            <p className="text-brand-green/80 font-serif leading-relaxed">
              Following traditional Indian agrarian practices, our resort includes a cow shelter (Goshala). The cows are cared for respectfully and form an integral part of the organic cycle of our farm and gardens.
            </p>
          </div>

          {/* The Fish Pond */}
          <div className="space-y-6">
            <div className="relative aspect-[4/3] bg-brand-green/5 overflow-hidden">
              <Image 
                src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=600&auto=format&fit=crop"
                alt="The Fish Pond" 
                fill 
                className="object-cover" 
              />
            </div>
            <h3 className="text-2xl font-light text-brand-green">The Fish Pond</h3>
            <p className="text-brand-green/80 font-serif leading-relaxed">
              Our central fish pond contributes to the microclimate of the property, offering a cool, reflective space for guests to sit beside during the warmer hours of the day.
            </p>
          </div>

        </div>
      </section>

      {/* Final CTA */}
      <section className="px-6 md:px-12 lg:px-16 text-center max-w-3xl mx-auto space-y-8">
        <h2 className="text-3xl md:text-4xl font-light text-brand-green">
          There is more to discover here.
        </h2>
        <div className="pt-4">
          <Link 
            href="/stay" 
            className="inline-block bg-brand-green text-brand-ivory px-10 py-4 uppercase tracking-wider text-xs hover:bg-brand-gold hover:text-brand-ivory transition-colors duration-300"
          >
            Plan Your Stay
          </Link>
        </div>
      </section>

    </div>
  );
}
