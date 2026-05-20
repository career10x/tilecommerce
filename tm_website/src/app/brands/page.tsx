"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function BrandsPage() {
  const brands = [
    { name: "Kajaria", logo: "K", desc: "India's No. 1 Tile Company", color: "bg-red-50 text-red-600 border-red-100" },
    { name: "Somany", logo: "S", desc: "Crafting beautiful spaces", color: "bg-blue-50 text-blue-600 border-blue-100" },
    { name: "Nitco", logo: "N", desc: "Premium Italian designs", color: "bg-emerald-50 text-emerald-600 border-emerald-100" },
    { name: "Johnson", logo: "J", desc: "Heritage of quality", color: "bg-purple-50 text-purple-600 border-purple-100" },
    { name: "Asian Granito", logo: "A", desc: "Innovative surfaces", color: "bg-orange-50 text-orange-600 border-orange-100" },
    { name: "Simpolo", logo: "S", desc: "Ceramics & bathware", color: "bg-indigo-50 text-indigo-600 border-indigo-100" },
    { name: "Orientbell", logo: "O", desc: "Making tiles simple", color: "bg-pink-50 text-pink-600 border-pink-100" },
    { name: "RAK Ceramics", logo: "R", desc: "Global ceramic lifestyle", color: "bg-slate-50 text-slate-800 border-slate-200" },
  ];

  return (
    <main className="min-h-screen bg-light-gray flex flex-col">
      <div className="bg-white">
        <Navigation />
      </div>

      <div className="flex-grow pt-32 pb-24">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-dark-navy mb-4">
              Premium Brands
            </h1>
            <p className="text-lg text-gray-600">
              We partner with the world's most renowned manufacturers to bring you unparalleled quality and design.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {brands.map((brand, i) => (
              <div key={i} className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:border-transparent transition-all duration-300 group cursor-pointer flex flex-col items-center text-center">
                <div className={`w-20 h-20 rounded-2xl flex items-center justify-center font-heading font-bold text-3xl mb-6 border ${brand.color} group-hover:scale-110 transition-transform duration-300`}>
                  {brand.logo}
                </div>
                <h3 className="font-heading font-bold text-xl text-dark-navy mb-2 group-hover:text-industrial-blue transition-colors">{brand.name}</h3>
                <p className="text-sm text-gray-500 mb-6">{brand.desc}</p>
                <Link href={`/shop?brand=${brand.name.toLowerCase()}`} className="mt-auto flex items-center text-sm font-semibold text-industrial-blue opacity-0 group-hover:opacity-100 transition-opacity">
                  View Collection <ArrowUpRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            ))}
          </div>

        </div>
      </div>

      <Footer />
    </main>
  );
}
