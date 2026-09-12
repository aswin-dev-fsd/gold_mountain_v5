import Link from "next/link";
import Image from "next/image";

export default function BlogPage() {
  // Temporary articles - for visual development only. Tracked in REPLACEMENTS.md.
  const tempArticles = [
    {
      id: "1",
      category: "Nature",
      title: "The Quiet Rhythm of Tiruvannamalai",
      excerpt: "Understanding the slow pace that governs life at the base of Arunachala.",
      image: "https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: "2",
      category: "Wellness",
      title: "Rest as a Necessity",
      excerpt: "Why the modern approach to wellness often misses the fundamental need for deep, unstructured rest.",
      image: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: "3",
      category: "Food",
      title: "From Our Herbal Garden",
      excerpt: "How traditional local plants are integrated into our daily meals and wellness practices.",
      image: "https://images.unsplash.com/photo-1595858102148-18e388ee09bb?q=80&w=600&auto=format&fit=crop"
    },
    {
      id: "4",
      category: "Ayurveda",
      title: "Understanding Your Constitution",
      excerpt: "A simple introduction to the doshas and how they inform a balanced approach to living.",
      image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=800&auto=format&fit=crop"
    }
  ];

  const categories = [
    "All",
    "Wellness",
    "Ayurveda",
    "Food",
    "Nature",
    "Arunachala",
    "Life at Gold Mountain"
  ];

  return (
    <div className="min-h-screen bg-brand-ivory pt-32 pb-24">
      {/* Hero Section */}
      <section className="px-6 md:px-12 lg:px-16 text-center max-w-4xl mx-auto space-y-6 mb-24">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-brand-green tracking-tight">
          Stories from Gold Mountain.
        </h1>
        <p className="text-brand-green/80 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto font-serif">
          Thoughts on wellness, nature, food, Ayurveda and life around Arunachala.
        </p>
      </section>

      {/* Categories (Visual filter) */}
      <section className="px-6 md:px-12 lg:px-16 mb-16">
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category, idx) => (
            <button 
              key={category} 
              className={`text-xs uppercase tracking-widest px-4 py-2 border transition-colors ${idx === 0 ? 'border-brand-green text-brand-green' : 'border-transparent text-brand-green/60 hover:text-brand-green'}`}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* Article Grid */}
      <section className="px-6 md:px-12 lg:px-16 mb-32 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-12 gap-y-16">
          {tempArticles.map(article => (
            <article key={article.id} className="group cursor-pointer">
              <div className="relative aspect-[4/3] bg-brand-green/5 overflow-hidden mb-6">
                <Image 
                  src={article.image} 
                  alt={article.title} 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-105" 
                />
              </div>
              <div className="space-y-4">
                <span className="text-xs font-medium uppercase tracking-widest text-brand-gold">
                  {article.category}
                </span>
                <h2 className="text-2xl font-light text-brand-green group-hover:text-brand-gold transition-colors">
                  {article.title}
                </h2>
                <p className="text-brand-green/80 font-serif leading-relaxed line-clamp-2">
                  {article.excerpt}
                </p>
                <div className="pt-2">
                  <span className="inline-block border-b border-brand-green text-sm text-brand-green group-hover:text-brand-gold group-hover:border-brand-gold transition-colors pb-1">
                    Read article
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

    </div>
  );
}
