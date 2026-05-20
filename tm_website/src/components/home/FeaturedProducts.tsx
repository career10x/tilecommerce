"use client";

import { motion } from "framer-motion";
import { Heart, ShoppingCart, Eye, Star } from "lucide-react";
import Image from "next/image";

const products = [
  { id: 1, name: "Calacatta Gold Marble", category: "Floor Tile", price: "₹1,200/sq.ft", rating: 4.8, image: "https://images.unsplash.com/photo-1615873968403-89e068629265?q=80&w=2070&auto=format&fit=crop", label: "Bestseller" },
  { id: 2, name: "Matte Anthracite", category: "Bathroom Tile", price: "₹850/sq.ft", rating: 4.6, image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1974&auto=format&fit=crop", label: "New" },
  { id: 3, name: "Rustic Oak Wood", category: "Wooden Finish", price: "₹950/sq.ft", rating: 4.9, image: "https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee?q=80&w=2070&auto=format&fit=crop" },
  { id: 4, name: "Terrazzo Classic", category: "Floor Tile", price: "₹1,100/sq.ft", rating: 4.7, image: "https://images.unsplash.com/photo-1628147493722-1d5778848a28?q=80&w=1969&auto=format&fit=crop", label: "Trending" },
];

export default function FeaturedProducts() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-4xl md:text-5xl font-bold text-dark-navy mb-4"
          >
            Trending Collections
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-600"
          >
            Discover our most sought-after designer tiles. Handpicked for exceptional quality and stunning aesthetics.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white rounded-2xl p-4 border border-gray-100 hover:shadow-2xl hover:border-transparent transition-all duration-300"
            >
              {/* Image Container */}
              <div className="relative rounded-xl overflow-hidden aspect-square mb-4 bg-gray-50">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Labels */}
                {product.label && (
                  <div className="absolute top-3 left-3 bg-industrial-blue text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider z-10">
                    {product.label}
                  </div>
                )}
                
                {/* Hover Actions */}
                <div className="absolute inset-0 bg-dark-navy/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                  <button className="w-10 h-10 rounded-full bg-white text-dark-navy flex items-center justify-center hover:bg-bright-yellow hover:text-dark-navy transition-colors">
                    <Heart className="w-5 h-5" />
                  </button>
                  <button className="w-10 h-10 rounded-full bg-white text-dark-navy flex items-center justify-center hover:bg-bright-yellow hover:text-dark-navy transition-colors">
                    <Eye className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div>
                <p className="text-sm text-gray-500 mb-1">{product.category}</p>
                <h3 className="font-heading font-semibold text-xl text-dark-navy mb-2 truncate">
                  {product.name}
                </h3>
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
