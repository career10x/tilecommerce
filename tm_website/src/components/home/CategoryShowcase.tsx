"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const categories = [
  { id: 1, name: "Floor Tiles", image: "https://images.unsplash.com/photo-1581428982868-e410dd981a90?q=80&w=1974&auto=format&fit=crop", span: "col-span-1 md:col-span-2 row-span-2" },
  { id: 2, name: "Wall Tiles", image: "https://images.unsplash.com/photo-1615529182904-14819c35db37?q=80&w=2080&auto=format&fit=crop", span: "col-span-1 row-span-1" },
  { id: 3, name: "Bathroom Tiles", image: "https://images.unsplash.com/photo-1620626011761-996317b8d101?q=80&w=2069&auto=format&fit=crop", span: "col-span-1 row-span-1" },
  { id: 4, name: "Kitchen Tiles", image: "https://images.unsplash.com/photo-1556910103-1c02745a872f?q=80&w=2070&auto=format&fit=crop", span: "col-span-1 md:col-span-2 row-span-1" },
  { id: 5, name: "Outdoor & Parking", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop", span: "col-span-1 row-span-1" },
  { id: 6, name: "Wooden Finish", image: "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?q=80&w=2070&auto=format&fit=crop", span: "col-span-1 row-span-1" },
];

export default function CategoryShowcase() {
  return (
    <section className="py-24 bg-light-gray" id="collection">
      <div className="container mx-auto px-6">
        <div className="mb-16 flex flex-col md:flex-row justify-between items-end gap-6">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-heading text-4xl md:text-5xl font-bold text-dark-navy mb-4"
            >
              Curated Collections
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-gray-600"
            >
              Explore our wide range of premium tiles categorized for your specific needs. From luxurious living rooms to durable outdoor spaces.
            </motion.p>
          </div>
          <Link href="/categories">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-industrial-blue font-semibold flex items-center gap-2 hover:text-bright-yellow transition-colors"
            >
              View All Categories <ArrowUpRight className="w-5 h-5" />
            </motion.button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-[minmax(250px,auto)] gap-6 auto-rows-[250px]">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative rounded-3xl overflow-hidden group cursor-pointer ${category.span}`}
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url('${category.image}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-navy/80 via-dark-navy/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="flex justify-between items-end">
                  <h3 className="font-heading text-2xl md:text-3xl font-bold text-white mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    {category.name}
                  </h3>
                  <div className="w-12 h-12 rounded-full bg-white text-dark-navy flex items-center justify-center opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    <ArrowUpRight className="w-6 h-6" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
