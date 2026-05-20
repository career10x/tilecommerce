"use client";

import { motion } from "framer-motion";
import { ArrowRight, FileText, Users, Building2 } from "lucide-react";

export default function ArchitectsSection() {
  return (
    <section className="py-24 bg-light-gray relative">
      <div className="container mx-auto px-6">
        <div className="bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row">
          
          {/* Content Side */}
          <div className="w-full lg:w-1/2 p-12 lg:p-20 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h4 className="text-industrial-blue font-bold tracking-wider uppercase mb-3">B2B Portal</h4>
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-dark-navy mb-6">
                For Architects & Builders
              </h2>
              <p className="text-lg text-gray-600 mb-10">
                Partner with TileCommerce for your large-scale projects. Get access to exclusive designer collections, bulk pricing, and dedicated support.
              </p>

              <div className="space-y-6 mb-10">
                {[
                  { icon: FileText, title: "Special Pricing", desc: "Volume-based discounts for large projects." },
                  { icon: Users, title: "Dedicated Manager", desc: "A single point of contact for your requirements." },
                  { icon: Building2, title: "Sample Requests", desc: "Quick dispatch of samples to your site." },
                ].map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div key={i} className="flex gap-4 items-start">
                      <div className="w-12 h-12 rounded-full bg-light-gray flex items-center justify-center shrink-0">
                        <Icon className="w-6 h-6 text-industrial-blue" />
                      </div>
                      <div>
                        <h4 className="font-heading font-bold text-xl text-dark-navy">{item.title}</h4>
                        <p className="text-gray-600">{item.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <button className="bg-dark-navy text-white px-8 py-4 rounded-full font-semibold flex items-center gap-2 hover:bg-industrial-blue transition-colors w-fit">
                Join B2B Program <ArrowRight className="w-5 h-5" />
              </button>
            </motion.div>
          </div>

          {/* Image Side */}
          <div className="w-full lg:w-1/2 min-h-[400px] lg:min-h-full relative">
            <img 
              src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2069&auto=format&fit=crop" 
              alt="Architecture" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-industrial-blue/20 mix-blend-multiply" />
          </div>

        </div>
      </div>
    </section>
  );
}
