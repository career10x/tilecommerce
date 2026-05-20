"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ShoppingCart, Trash2 } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function WishlistPage() {
  const [items, setItems] = useState([
    {
      id: 1,
      name: "Calacatta Gold Marble",
      category: "Floor Tile",
      price: "₹1,200/sq.ft",
      image: "https://images.unsplash.com/photo-1615873968403-89e068629265?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: 2,
      name: "Terrazzo Classic",
      category: "Floor Tile",
      price: "₹1,100/sq.ft",
      image: "https://images.unsplash.com/photo-1628147493722-1d5778848a28?q=80&w=1969&auto=format&fit=crop"
    }
  ]);

  const removeItem = (id: number) => {
    setItems(items.filter(item => item.id !== id));
  };

  return (
    <main className="min-h-screen bg-light-gray flex flex-col">
      <div className="bg-white">
        <Navigation />
      </div>

      <div className="flex-grow pt-32 pb-24">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="flex items-center justify-between mb-8">
            <h1 className="font-heading text-3xl md:text-4xl font-bold text-dark-navy">My Wishlist</h1>
            <span className="text-gray-500 bg-gray-100 px-4 py-2 rounded-full font-medium">{items.length} Items</span>
          </div>

          {items.length === 0 ? (
            <div className="bg-white rounded-3xl p-16 text-center shadow-sm border border-gray-100">
              <div className="w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <ShoppingCart className="w-10 h-10 text-gray-300" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-dark-navy mb-4">Your wishlist is empty</h3>
              <p className="text-gray-500 mb-8 max-w-md mx-auto">Explore our premium collections and add your favorite tiles here to save them for later.</p>
              <Link href="/shop" className="inline-block bg-industrial-blue text-white font-bold px-8 py-4 rounded-full hover:bg-dark-navy transition-colors">
                Start Exploring
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {items.map(product => (
                <div key={product.id} className="group bg-white rounded-2xl p-4 border border-gray-100 hover:shadow-xl hover:border-transparent transition-all duration-300 relative">
                  <button 
                    onClick={() => removeItem(product.id)}
                    className="absolute top-6 right-6 z-10 w-8 h-8 bg-white rounded-full flex items-center justify-center text-gray-400 hover:text-red-500 shadow-sm transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                  <Link href={`/product/${product.id}`}>
                    <div className="relative rounded-xl overflow-hidden aspect-square mb-4 bg-gray-50">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                  </Link>
                  <div>
                    <p className="text-xs text-gray-500 mb-1 font-medium">{product.category}</p>
                    <Link href={`/product/${product.id}`}>
                      <h3 className="font-heading font-semibold text-lg text-dark-navy mb-2 truncate hover:text-industrial-blue transition-colors">
                        {product.name}
                      </h3>
                    </Link>
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
          )}
        </div>
      </div>

      <Footer />
    </main>
  );
}
