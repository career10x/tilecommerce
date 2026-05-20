"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image & Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070&auto=format&fit=crop')" }}
      />
      <div className="absolute inset-0 z-0 bg-dark-navy/40" />

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="font-heading text-5xl md:text-7xl font-bold leading-tight mb-6">
            Transform Spaces with <br />
            <span className="text-bright-yellow">Premium Designer Tiles</span>
          </h1>
          <p className="text-lg md:text-2xl font-light text-white/90 mb-10 max-w-2xl mx-auto">
            Discover luxury ceramic, vitrified, porcelain, and designer tiles curated for modern interiors.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="#collection">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-bright-yellow text-dark-navy px-8 py-4 rounded-full font-semibold text-lg flex items-center gap-2 hover:shadow-xl transition-all"
              >
                Explore Collection <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
            <Link href="#consultation">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="glass text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/20 transition-all"
              >
                Book Consultation
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Floating Info Card */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="absolute bottom-10 right-10 glass-dark p-6 rounded-2xl hidden lg:flex items-center gap-4 text-white max-w-sm"
      >
        <div className="w-16 h-16 rounded-full overflow-hidden shrink-0">
          <img src="https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2069&auto=format&fit=crop" alt="Material" className="w-full h-full object-cover" />
        </div>
        <div>
          <h4 className="font-heading font-semibold text-lg text-bright-yellow">Italian Statuario</h4>
          <p className="text-sm text-white/80">Premium marble finish porcelain collection</p>
        </div>
      </motion.div>
    </section>
  );
}
