"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function BlogPage() {
  const posts = [
    {
      id: 1,
      title: "10 Modern Bathroom Tile Ideas for 2026",
      category: "Design Trends",
      date: "May 15, 2026",
      image: "https://images.unsplash.com/photo-1620626011761-996317b8d101?q=80&w=2069&auto=format&fit=crop"
    },
    {
      id: 2,
      title: "How to Choose the Right Floor Tiles for High Traffic Areas",
      category: "Buying Guide",
      date: "May 10, 2026",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: 3,
      title: "The Ultimate Guide to Kitchen Backsplash Designs",
      category: "Inspiration",
      date: "May 5, 2026",
      image: "https://images.unsplash.com/photo-1556910103-1c02745a872f?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: 4,
      title: "Porcelain vs. Ceramic: Which is Right for Your Home?",
      category: "Education",
      date: "April 28, 2026",
      image: "https://images.unsplash.com/photo-1615873968403-89e068629265?q=80&w=2070&auto=format&fit=crop"
    }
  ];

  return (
    <main className="min-h-screen bg-light-gray flex flex-col">
      <div className="bg-white">
        <Navigation />
      </div>

      <div className="flex-grow pt-32 pb-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-dark-navy mb-4">
              Design Inspiration
            </h1>
            <p className="text-lg text-gray-600">
              Discover the latest trends, expert tips, and beautiful spaces to inspire your next project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {posts.map((post) => (
              <Link href={`/blog/${post.id}`} key={post.id}>
                <div className="group bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300">
                  <div className="relative h-72 overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur text-dark-navy text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                      {post.category}
                    </div>
                  </div>
                  <div className="p-8">
                    <p className="text-sm text-gray-500 mb-3">{post.date}</p>
                    <h3 className="font-heading text-2xl font-bold text-dark-navy mb-4 group-hover:text-industrial-blue transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <div className="text-industrial-blue font-semibold flex items-center text-sm">
                      Read Article <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
