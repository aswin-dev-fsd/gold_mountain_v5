import Link from "next/link";
import Image from "next/image";

export default function StayPage() {
  // Temporary room data - to be verified
  const placeholderRooms = [
    {
      id: "premium-villa",
      name: "Premium Villa",
      description: "A spacious and serene villa offering panoramic views, designed for deep rest and quiet reflection.",
      capacity: "Up to 2 Guests",
      price: "Pricing pending confirmation",
      amenities: ["Air conditioning", "High-speed Wi-Fi", "Room service"],
      image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: "garden-suite",
      name: "Garden Suite",
      description: "Tucked away in the greenery, providing direct access to the natural surroundings and a private sit-out.",
      capacity: "Up to 2 Guests",
      price: "Pricing pending confirmation",
      amenities: ["Air conditioning", "High-speed Wi-Fi"],
      image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=800&auto=format&fit=crop"
    }
  ];

  const propertyAmenities = [
    "Room service",
    "Dining area",
    "Free parking",
    "Air conditioning",
    "High-speed Wi-Fi",
    "CCTV",
    "24-hour front desk"
  ];

  return (
    <div className="min-h-screen bg-brand-ivory pt-32 pb-24">
      {/* Hero Section */}
      <section className="px-6 md:px-12 lg:px-16 text-center max-w-4xl mx-auto space-y-6 mb-32">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-brand-green tracking-tight">
          A peaceful place to stay.
        </h1>
        <p className="text-brand-green/80 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto font-serif">
          Comfortable spaces surrounded by nature, created for rest and reconnection.
        </p>
      </section>

      {/* Rooms Section */}
      <section className="px-6 md:px-12 lg:px-16 mb-32 max-w-6xl mx-auto">
        <div className="space-y-24">
          {placeholderRooms.map((room) => (
            <div key={room.id} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="relative aspect-[4/3] bg-brand-green/5 overflow-hidden">
                <Image 
                  src={room.image} 
                  alt={room.name} 
                  fill 
                  className="object-cover" 
                />
              </div>
              <div className="space-y-8">
                <div className="space-y-4">
                  <h2 className="text-3xl font-light text-brand-green">{room.name}</h2>
                  <p className="text-brand-green/80 text-lg font-serif leading-relaxed">
                    {room.description}
                  </p>
                </div>
                
                <div className="grid grid-cols-2 gap-6 pt-4 border-t border-brand-green/10">
                  <div>
                    <span className="block text-xs uppercase tracking-widest text-brand-green/60 mb-1">Capacity</span>
                    <span className="text-sm text-brand-green">{room.capacity}</span>
                  </div>
                  <div>
                    <span className="block text-xs uppercase tracking-widest text-brand-green/60 mb-1">Rate</span>
                    <span className="text-sm text-brand-green">{room.price}</span>
                  </div>
                </div>

                <div className="pt-2">
                  <span className="block text-xs uppercase tracking-widest text-brand-green/60 mb-2">Amenities</span>
                  <div className="flex flex-wrap gap-2">
                    {room.amenities.map(amenity => (
                      <span key={amenity} className="text-xs text-brand-green border border-brand-green/20 px-3 py-1">
                        {amenity}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-6">
                  <Link 
                    href={`/enquire?interest=stay&room=${room.id}`} 
                    className="inline-block bg-brand-green text-brand-ivory px-8 py-4 uppercase tracking-wider text-xs hover:bg-brand-gold hover:text-brand-ivory transition-colors duration-300"
                  >
                    Enquire About This Room
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Monthly Stays Section */}
      <section className="bg-brand-green text-brand-ivory py-24 px-6 md:px-12 lg:px-16 mb-32 text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-3xl md:text-4xl font-light tracking-tight">
            Stay a little longer.
          </h2>
          <p className="text-brand-ivory/80 text-lg leading-relaxed font-serif">
            For those seeking deeper restoration or a quiet environment to live and work, we offer extended monthly stays. Terms and specific arrangements are customized to your needs.
          </p>
          <div className="pt-8">
            <Link 
              href="/enquire?interest=monthly" 
              className="inline-block border border-brand-gold text-brand-gold px-8 py-3 uppercase tracking-wider text-xs hover:bg-brand-gold hover:text-brand-green transition-colors duration-300"
            >
              Ask About Monthly Stay
            </Link>
          </div>
        </div>
      </section>

      {/* Property Amenities */}
      <section className="px-6 md:px-12 lg:px-16 mb-32 max-w-4xl mx-auto text-center">
        <h3 className="text-2xl font-light text-brand-green mb-10">Property Amenities</h3>
        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
          {propertyAmenities.map((amenity) => (
            <span key={amenity} className="text-brand-green font-serif">
              {amenity}
            </span>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-6 md:px-12 lg:px-16 text-center max-w-3xl mx-auto space-y-8">
        <h2 className="text-3xl md:text-4xl font-light text-brand-green">
          Plan your stay at Gold Mountain.
        </h2>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Link 
            href="https://wa.me/message/TEMP" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-brand-green text-brand-ivory px-8 py-4 uppercase tracking-wider text-xs hover:bg-brand-gold hover:text-brand-ivory transition-colors duration-300"
          >
            WhatsApp
          </Link>
          <Link 
            href="mailto:hello@goldmountain.com" 
            className="w-full sm:w-auto border border-brand-green text-brand-green px-8 py-4 uppercase tracking-wider text-xs hover:bg-brand-green hover:text-brand-ivory transition-colors duration-300"
          >
            Email
          </Link>
        </div>
      </section>

    </div>
  );
}
