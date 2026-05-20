"use client";

import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Star, Heart, Share2, Truck, ShieldCheck, Ruler, Check } from "lucide-react";
import Image from "next/image";

export default function ProductPage() {
  const [activeImage, setActiveImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("description");

  const images = [
    "https://images.unsplash.com/photo-1615873968403-89e068629265?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1974&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1620626011761-996317b8d101?q=80&w=2069&auto=format&fit=crop"
  ];

  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Navigation />

      <div className="flex-grow pt-32 pb-24">
        <div className="container mx-auto px-6">
          
          {/* Breadcrumbs */}
          <div className="text-sm text-gray-500 mb-8 flex items-center gap-2">
            <span>Home</span> &gt; <span>Shop</span> &gt; <span>Floor Tiles</span> &gt; <span className="text-dark-navy font-medium">Italian Statuario Marble</span>
          </div>

          <div className="flex flex-col lg:flex-row gap-12 mb-16">
            
            {/* Image Gallery */}
            <div className="w-full lg:w-1/2 flex flex-col-reverse md:flex-row gap-4">
              {/* Thumbnails */}
              <div className="flex md:flex-col gap-4 overflow-x-auto md:w-24 shrink-0">
                {images.map((img, i) => (
                  <div 
                    key={i} 
                    onClick={() => setActiveImage(i)}
                    className={`w-20 md:w-full aspect-square rounded-xl overflow-hidden cursor-pointer border-2 transition-all shrink-0 ${activeImage === i ? "border-industrial-blue opacity-100" : "border-transparent opacity-60 hover:opacity-100"}`}
                  >
                    <img src={img} alt={`Thumbnail ${i}`} className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
              
              {/* Main Image */}
              <div className="w-full bg-gray-50 rounded-2xl overflow-hidden aspect-[4/3] relative">
                <img 
                  src={images[activeImage]} 
                  alt="Product" 
                  className="w-full h-full object-cover transition-all duration-500"
                />
                <div className="absolute top-4 left-4 bg-bright-yellow text-dark-navy text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  Bestseller
                </div>
              </div>
            </div>

            {/* Product Details */}
            <div className="w-full lg:w-1/2">
              <div className="mb-2 text-industrial-blue font-medium text-sm">Floor Tile • Glossy Finish</div>
              <h1 className="font-heading text-4xl font-bold text-dark-navy mb-4">Italian Statuario Marble</h1>
              
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-1">
                  <Star className="w-5 h-5 fill-bright-yellow text-bright-yellow" />
                  <Star className="w-5 h-5 fill-bright-yellow text-bright-yellow" />
                  <Star className="w-5 h-5 fill-bright-yellow text-bright-yellow" />
                  <Star className="w-5 h-5 fill-bright-yellow text-bright-yellow" />
                  <Star className="w-5 h-5 text-gray-300" />
                </div>
                <span className="text-gray-500 text-sm underline cursor-pointer">4.8 (124 Reviews)</span>
              </div>

              <div className="text-3xl font-bold text-dark-navy mb-6">
                ₹1,200 <span className="text-lg text-gray-500 font-normal">/ sq.ft</span>
              </div>

              <p className="text-gray-600 mb-8 leading-relaxed">
                Bring the timeless elegance of Italian marble to your home with our Statuario premium porcelain tiles. Featuring striking grey veining on a pristine white background with a highly reflective glossy finish.
              </p>

              {/* Calculator / Variant */}
              <div className="bg-light-gray p-6 rounded-2xl mb-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-medium text-dark-navy">Box Covers:</span>
                  <span className="font-bold">14.4 sq.ft (4 Pieces)</span>
                </div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-medium text-dark-navy">Size:</span>
                  <span className="flex items-center gap-2"><Ruler className="w-4 h-4 text-gray-400"/> 600 x 600 mm</span>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 items-end">
                  <div className="w-full sm:w-auto">
                    <label className="block text-sm text-gray-500 mb-2">Quantity (Boxes)</label>
                    <div className="flex items-center border border-gray-300 rounded-full bg-white h-12 w-32">
                      <button className="w-1/3 flex items-center justify-center text-gray-500 hover:text-dark-navy" onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
                      <input type="number" value={quantity} readOnly className="w-1/3 text-center bg-transparent font-medium focus:outline-none" />
                      <button className="w-1/3 flex items-center justify-center text-gray-500 hover:text-dark-navy" onClick={() => setQuantity(quantity + 1)}>+</button>
                    </div>
                  </div>
                  <div className="flex-grow flex gap-3">
                    <button className="flex-grow bg-industrial-blue text-white rounded-full h-12 font-bold hover:bg-dark-navy transition-colors">
                      Add to Cart
                    </button>
                    <button className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:text-industrial-blue hover:border-industrial-blue transition-colors">
                      <Heart className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Features */}
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <Truck className="w-5 h-5 text-industrial-blue" />
                  <span>Ships in 24-48 hours</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <ShieldCheck className="w-5 h-5 text-industrial-blue" />
                  <span>10 Year Warranty</span>
                </div>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="mb-16">
            <div className="flex gap-8 border-b border-gray-200 mb-8 overflow-x-auto pb-2">
              {["description", "specifications", "reviews"].map(tab => (
                <button 
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`capitalize font-heading font-bold text-lg pb-2 whitespace-nowrap ${activeTab === tab ? "text-industrial-blue border-b-2 border-industrial-blue" : "text-gray-400 hover:text-gray-600"}`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="max-w-4xl text-gray-600 leading-relaxed">
              {activeTab === "description" && (
                <div>
                  <p className="mb-4">
                    Statuario marble is one of the most precious marbles in the world. Its characteristic features are a white background with striking grey veins that make it uniquely elegant. Our porcelain tiles recreate this natural beauty with cutting-edge digital printing technology.
                  </p>
                  <p className="mb-4">
                    Perfect for creating luxurious living spaces, highly reflective floors, and statement walls. The glossy finish not only enhances the depth of the marble pattern but also brightens up the room by reflecting light.
                  </p>
                  <ul className="space-y-2 mt-6">
                    <li className="flex items-center gap-2"><Check className="w-5 h-5 text-green-500"/> Highly durable porcelain material</li>
                    <li className="flex items-center gap-2"><Check className="w-5 h-5 text-green-500"/> Stain and scratch resistant</li>
                    <li className="flex items-center gap-2"><Check className="w-5 h-5 text-green-500"/> Zero maintenance required compared to natural marble</li>
                    <li className="flex items-center gap-2"><Check className="w-5 h-5 text-green-500"/> Precision cut rectified edges for minimal grout lines</li>
                  </ul>
                </div>
              )}
              {activeTab === "specifications" && (
                <table className="w-full text-sm">
                  <tbody>
                    {[
                      ["Material", "Porcelain"],
                      ["Finish", "High Gloss"],
                      ["Size", "600 x 600 mm (2x2 ft)"],
                      ["Thickness", "9.5 mm"],
                      ["Application", "Floor & Wall"],
                      ["Water Absorption", "< 0.05%"],
                      ["Origin", "India"]
                    ].map((row, i) => (
                      <tr key={i} className="border-b border-gray-100">
                        <td className="py-4 font-medium text-dark-navy w-1/3">{row[0]}</td>
                        <td className="py-4">{row[1]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
              {activeTab === "reviews" && (
                <div className="text-center py-10">
                  <Star className="w-12 h-12 fill-bright-yellow text-bright-yellow mx-auto mb-4" />
                  <h3 className="font-heading font-bold text-2xl text-dark-navy mb-2">4.8 out of 5</h3>
                  <p className="mb-6">Based on 124 reviews</p>
                  <button className="border-2 border-industrial-blue text-industrial-blue font-bold px-6 py-2 rounded-full hover:bg-industrial-blue hover:text-white transition-colors">
                    Write a Review
                  </button>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>

      <Footer />
    </main>
  );
}
