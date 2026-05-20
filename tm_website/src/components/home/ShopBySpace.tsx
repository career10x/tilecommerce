"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const spaces = [
  { id: "living", name: "Living Room", image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1974&auto=format&fit=crop" },
  { id: "bathroom", name: "Bathroom", image: "https://images.unsplash.com/photo-1620626011761-996317b8d101?q=80&w=2069&auto=format&fit=crop" },
  { id: "kitchen", name: "Kitchen", image: "https://images.unsplash.com/photo-1556910103-1c02745a872f?q=80&w=2070&auto=format&fit=crop" },
  { id: "outdoor", name: "Outdoor", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop" },
  { id: "commercial", name: "Commercial", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop" },
];

export default function ShopBySpace() {
  const [activeSpace, setActiveSpace] = useState(spaces[0]);

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
            Shop By Space
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-600"
          >
            Visualize how our premium tiles transform different areas of your home or project.
          </motion.p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Controls */}
          <div className="w-full lg:w-1/4 flex flex-col gap-2">
            {spaces.map((space) => (
              <button
                key={space.id}
                onClick={() => setActiveSpace(space)}
                className={`text-left px-6 py-4 rounded-xl font-heading text-xl font-medium transition-all duration-300 ${
                  activeSpace.id === space.id 
                    ? "bg-dark-navy text-white shadow-lg translate-x-2" 
                    : "bg-gray-50 text-gray-600 hover:bg-gray-100"
                }`}
              >
                {space.name}
              </button>
            ))}
          </div>

          {/* Visualizer Image Area */}
          <div className="w-full lg:w-3/4 h-[500px] md:h-[600px] relative rounded-3xl overflow-hidden shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSpace.id}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <img 
                  src={activeSpace.image} 
                  alt={activeSpace.name} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-navy/60 to-transparent" />
                
                {/* Hotspot example */}
                <div className="absolute bottom-[20%] left-[30%]">
                  <div className="relative group">
                    <span className="flex h-6 w-6 relative">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-bright-yellow opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-6 w-6 bg-bright-yellow cursor-pointer border-2 border-white"></span>
                    </span>
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 bg-white p-3 rounded-xl shadow-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                      <p className="text-xs font-bold text-gray-500 uppercase">Floor Tile</p>
                      <p className="font-heading font-semibold text-dark-navy">Italian Statuario</p>
                      <p className="text-industrial-blue font-bold mt-1">₹1,200/sq.ft</p>
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-8 left-8">
                  <h3 className="font-heading text-4xl text-white font-bold mb-2">{activeSpace.name} Ideas</h3>
                  <button className="bg-white text-dark-navy px-6 py-2 rounded-full font-semibold hover:bg-bright-yellow transition-colors">
                    Explore {activeSpace.name} Tiles
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
