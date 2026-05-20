"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Truck, Clock, Gem, HeadphonesIcon, BadgePercent } from "lucide-react";

const features = [
  { icon: Gem, title: "Premium Quality", desc: "Top-grade materials sourced globally" },
  { icon: ShieldCheck, title: "Trusted Brands", desc: "Partnerships with leading manufacturers" },
  { icon: Truck, title: "Pan India Delivery", desc: "Safe and secure shipping across India" },
  { icon: HeadphonesIcon, title: "Expert Consultation", desc: "Free interior design advice" },
  { icon: Clock, title: "Fast Dispatch", desc: "Quick processing for your urgent needs" },
  { icon: BadgePercent, title: "Best Pricing", desc: "Competitive rates for premium products" },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-dark-navy text-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-industrial-blue rounded-full mix-blend-screen filter blur-[100px] opacity-50" />
        <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-bright-yellow rounded-full mix-blend-screen filter blur-[100px] opacity-20" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-4xl md:text-5xl font-bold mb-4"
          >
            Why Choose TileCommerce
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-white/70"
          >
            We deliver more than just tiles; we deliver the foundation of your dream spaces.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-dark p-8 rounded-2xl border border-white/10 hover:border-bright-yellow/50 transition-colors group"
              >
                <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-bright-yellow group-hover:text-dark-navy transition-colors">
                  <Icon className="w-7 h-7 text-bright-yellow group-hover:text-dark-navy transition-colors" />
                </div>
                <h3 className="font-heading text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-white/60 leading-relaxed">{feature.desc}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Stats */}
        <div className="mt-20 pt-10 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: "10K+", label: "Products" },
            { value: "50+", label: "Brands" },
            { value: "25K+", label: "Happy Clients" },
            { value: "15+", label: "Years Experience" },
          ].map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <h4 className="font-heading text-4xl md:text-5xl font-bold text-bright-yellow mb-2">{stat.value}</h4>
              <p className="text-sm uppercase tracking-wider text-white/60">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
