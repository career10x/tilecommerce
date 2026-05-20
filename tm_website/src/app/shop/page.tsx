"use client";

import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Filter, ChevronDown, Star, ShoppingCart, Heart, Eye } from "lucide-react";

// Dummy data
const products = Array.from({ length: 12 }).map((_, i) => ({
  id: i + 1,
  name: `Premium Tile Collection ${i + 1}`,
  category: i % 2 === 0 ? "Floor Tile" : "Wall Tile",
  price: `₹${(Math.random() * 2000 + 500).toFixed(0)}/sq.ft`,
  rating: (Math.random() * 1 + 4).toFixed(1),
  image: i % 3 === 0 
    ? "https://images.unsplash.com/photo-1615873968403-89e068629265?q=80&w=2070&auto=format&fit=crop"
    : i % 3 === 1 
      ? "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1974&auto=format&fit=crop"
      : "https://images.unsplash.com/photo-1628147493722-1d5778848a28?q=80&w=1969&auto=format&fit=crop",
  label: i === 0 ? "Bestseller" : i === 2 ? "New" : null
}));

export default function ShopPage() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  return (
    <main className="min-h-screen bg-light-gray flex flex-col">
      <div className="bg-white">
        <Navigation />
      </div>

      <div className="flex-grow pt-32 pb-24">
        <div className="container mx-auto px-6">
          
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4 border-b border-gray-200 pb-6">
            <div>
              <h1 className="font-heading text-3xl font-bold text-dark-navy">All Products</h1>
              <p className="text-gray-500 text-sm mt-1">Showing 1-12 of 150 products</p>
            </div>
            <div className="flex gap-4 w-full md:w-auto">
              <button 
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className="md:hidden flex items-center justify-center gap-2 bg-white border border-gray-200 px-4 py-2 rounded-lg font-medium text-dark-navy w-full"
              >
                <Filter className="w-4 h-4" /> Filters
              </button>
              <div className="hidden md:flex items-center gap-2">
                <span className="text-sm font-medium text-gray-500">Sort by:</span>
                <button className="flex items-center gap-2 bg-white border border-gray-200 px-4 py-2 rounded-lg font-medium text-dark-navy">
                  Popularity <ChevronDown className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-8">
            {/* Sidebar Filters */}
            <aside className={`w-full md:w-64 shrink-0 ${isFilterOpen ? "block" : "hidden md:block"}`}>
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <div className="mb-6">
                  <h3 className="font-heading font-bold text-lg text-dark-navy mb-4 border-b pb-2">Categories</h3>
                  <div className="space-y-3">
                    {["Floor Tiles", "Wall Tiles", "Bathroom Tiles", "Kitchen Tiles", "Outdoor"].map(cat => (
                      <label key={cat} className="flex items-center gap-3 cursor-pointer group">
                        <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-industrial-blue focus:ring-industrial-blue" />
                        <span className="text-gray-600 group-hover:text-industrial-blue">{cat}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="font-heading font-bold text-lg text-dark-navy mb-4 border-b pb-2">Finish</h3>
                  <div className="space-y-3">
                    {["Glossy", "Matte", "Satin", "Rustic", "Polished"].map(finish => (
                      <label key={finish} className="flex items-center gap-3 cursor-pointer group">
                        <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-industrial-blue focus:ring-industrial-blue" />
                        <span className="text-gray-600 group-hover:text-industrial-blue">{finish}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-heading font-bold text-lg text-dark-navy mb-4 border-b pb-2">Price Range</h3>
                  <div className="flex items-center gap-2">
                    <input type="number" placeholder="Min" className="w-full border border-gray-200 rounded-lg p-2 text-sm" />
                    <span>-</span>
                    <input type="number" placeholder="Max" className="w-full border border-gray-200 rounded-lg p-2 text-sm" />
                  </div>
                </div>
              </div>
            </aside>

            {/* Product Grid */}
            <div className="flex-grow">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product) => (
                  <div key={product.id} className="group bg-white rounded-2xl p-4 border border-gray-100 hover:shadow-xl hover:border-transparent transition-all duration-300">
                    <Link href={`/product/${product.id}`}>
                      <div className="relative rounded-xl overflow-hidden aspect-square mb-4 bg-gray-50">
                        <img 
                          src={product.image} 
                          alt={product.name}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        {product.label && (
                          <div className="absolute top-3 left-3 bg-industrial-blue text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider z-10">
                            {product.label}
                          </div>
                        )}
                        <div className="absolute inset-0 bg-dark-navy/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                          <button className="w-10 h-10 rounded-full bg-white text-dark-navy flex items-center justify-center hover:bg-bright-yellow hover:text-dark-navy transition-colors" onClick={(e) => e.preventDefault()}>
                            <Heart className="w-5 h-5" />
                          </button>
                          <button className="w-10 h-10 rounded-full bg-white text-dark-navy flex items-center justify-center hover:bg-bright-yellow hover:text-dark-navy transition-colors" onClick={(e) => e.preventDefault()}>
                            <Eye className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                    </Link>

                    <div>
                      <p className="text-xs text-gray-500 mb-1 font-medium">{product.category}</p>
                      <Link href={`/product/${product.id}`}>
                        <h3 className="font-heading font-semibold text-lg text-dark-navy mb-2 truncate hover:text-industrial-blue transition-colors">
                          {product.name}
                        </h3>
                      </Link>
                      <div className="flex items-center gap-1 mb-3">
                        <Star className="w-4 h-4 fill-bright-yellow text-bright-yellow" />
                        <span className="text-sm font-medium text-gray-700">{product.rating}</span>
                      </div>
                      <div className="flex items-center justify-between mt-4">
                        <span className="font-bold text-lg text-industrial-blue">{product.price}</span>
                        <button className="flex items-center gap-2 bg-gray-100 hover:bg-industrial-blue hover:text-white px-4 py-2 rounded-full text-sm font-medium transition-colors">
                          <ShoppingCart className="w-4 h-4" /> Add
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Pagination */}
              <div className="mt-12 flex justify-center items-center gap-2">
                <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-100 text-gray-500">1</button>
                <button className="w-10 h-10 rounded-full bg-industrial-blue text-white flex items-center justify-center font-bold">2</button>
                <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-100 text-gray-500">3</button>
                <span className="text-gray-500">...</span>
                <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-100 text-gray-500">12</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
