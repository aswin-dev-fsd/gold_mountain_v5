import Link from "next/link";

const BLOG_POSTS = [
  {
    title: "Understanding the Five Elements in Ayurveda",
    category: "Wellness",
    image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "A Guide to the Girivalam Path",
    category: "Experience",
    image: "https://images.unsplash.com/photo-1600000000000-000000000000?q=80&w=800&auto=format&fit=crop" // Temporary broken placeholder for testing
  },
  {
    title: "The Benefits of Farm-to-Table Dining",
    category: "Food",
    image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=800&auto=format&fit=crop"
  }
];

export default function Blog() {
  return (
    <section className="py-24 bg-brand-ivory px-6 md:px-12 lg:px-16 border-t border-brand-green/10">
      <div className="max-w-7xl mx-auto space-y-16">
        
        <div className="flex flex-col md:flex-row justify-between items-end gap-6">
          <div className="space-y-4 max-w-xl">
            <h2 className="text-3xl md:text-4xl font-light text-brand-green tracking-tight">
              Journal & Insights
            </h2>
            <p className="font-serif italic text-lg text-brand-gold">
              Wisdom for living well.
            </p>
          </div>
          <Link
            href="/blog"
            className="hidden md:inline-block border-b border-brand-green pb-1 text-brand-green uppercase tracking-widest text-xs font-medium hover:text-brand-gold hover:border-brand-gold transition-colors"
          >
            Read the Journal
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post, idx) => (
            <Link key={idx} href={`/blog/${idx}`} className="group block">
              <div className="relative aspect-[4/3] overflow-hidden bg-brand-green/5 mb-6">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url('${post.image}')` }}
                ></div>
              </div>
              <span className="text-brand-gold text-xs font-medium uppercase tracking-widest block mb-2">
                {post.category}
              </span>
              <h3 className="text-xl font-medium text-brand-green group-hover:text-brand-gold transition-colors">
                {post.title}
              </h3>
            </Link>
          ))}
        </div>

        <div className="md:hidden pt-4 text-center">
          <Link
            href="/blog"
            className="inline-block border border-brand-green text-brand-green px-8 py-3 uppercase tracking-wider text-xs font-medium hover:bg-brand-green hover:text-brand-ivory transition-colors"
          >
            Read the Journal
          </Link>
        </div>
      </div>
    </section>
  );
}
