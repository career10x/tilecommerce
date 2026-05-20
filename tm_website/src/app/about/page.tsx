"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <div className="bg-white">
        <Navigation />
      </div>

      <div className="flex-grow pt-32 pb-24">
        <div className="container mx-auto px-6">
          
          <div className="max-w-4xl mx-auto text-center mb-20">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-heading text-5xl md:text-6xl font-bold text-dark-navy mb-6"
            >
              Curating <span className="text-industrial-blue">Excellence</span> in Every Tile.
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-600 leading-relaxed"
            >
              At TileCommerce, we believe that the right surface can transform a house into a masterpiece. We are India's premier destination for luxury architectural materials.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2069&auto=format&fit=crop" 
                alt="Showroom" 
                className="w-full h-full object-cover"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="px-6"
            >
              <h2 className="font-heading text-4xl font-bold text-dark-navy mb-6">Our Legacy of Design</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Founded with a vision to bring global interior trends to local projects, TileCommerce has grown into a trusted partner for top architects, interior designers, and discerning homeowners.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We carefully source our collections from the world's finest manufacturers, ensuring every piece meets our stringent standards for quality, durability, and aesthetic brilliance.
              </p>
              <div className="grid grid-cols-2 gap-6 pt-6 border-t border-gray-100">
                <div>
                  <h4 className="font-heading text-4xl font-bold text-industrial-blue mb-2">15+</h4>
                  <p className="text-gray-500 font-medium">Years Experience</p>
                </div>
                <div>
                  <h4 className="font-heading text-4xl font-bold text-industrial-blue mb-2">50k+</h4>
                  <p className="text-gray-500 font-medium">Projects Delivered</p>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>

      <Footer />
    </main>
  );
}
