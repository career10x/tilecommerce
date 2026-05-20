"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Trash2, ShieldCheck, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function CartPage() {
  const [items, setItems] = useState([
    {
      id: 1,
      name: "Italian Statuario Marble",
      category: "Floor Tile",
      price: 1200,
      quantity: 5,
      image: "https://images.unsplash.com/photo-1615873968403-89e068629265?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: 2,
      name: "Matte Anthracite",
      category: "Bathroom Tile",
      price: 850,
      quantity: 2,
      image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1974&auto=format&fit=crop"
    }
  ]);

  const updateQty = (id: number, delta: number) => {
    setItems(items.map(item => {
      if (item.id === id) {
        return { ...item, quantity: Math.max(1, item.quantity + delta) };
      }
      return item;
    }));
  };

  const subtotal = items.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const tax = subtotal * 0.18; // 18% GST
  const total = subtotal + tax;

  return (
    <main className="min-h-screen bg-light-gray flex flex-col">
      <div className="bg-white">
        <Navigation />
      </div>

      <div className="flex-grow pt-32 pb-24">
        <div className="container mx-auto px-6 max-w-6xl">
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-dark-navy mb-8">Shopping Cart</h1>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Cart Items */}
            <div className="w-full lg:w-2/3">
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                
                {/* Headers */}
                <div className="hidden md:grid grid-cols-12 gap-4 pb-4 border-b border-gray-100 text-sm font-medium text-gray-500">
                  <div className="col-span-6">Product</div>
                  <div className="col-span-2 text-center">Quantity</div>
                  <div className="col-span-3 text-right">Total</div>
                  <div className="col-span-1"></div>
                </div>

                {/* Items */}
                <div className="divide-y divide-gray-100">
                  {items.map(item => (
                    <div key={item.id} className="py-6 grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                      <div className="col-span-1 md:col-span-6 flex items-center gap-4">
                        <div className="w-20 h-20 rounded-xl overflow-hidden shrink-0 border border-gray-100">
                          <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                        </div>
                        <div>
                          <p className="text-xs text-gray-500 mb-1">{item.category}</p>
                          <h3 className="font-bold text-dark-navy hover:text-industrial-blue transition-colors cursor-pointer">{item.name}</h3>
                          <p className="text-industrial-blue font-medium mt-1">₹{item.price} / box</p>
                        </div>
                      </div>
                      
                      <div className="col-span-1 md:col-span-2 flex items-center md:justify-center mt-4 md:mt-0">
                        <div className="flex items-center border border-gray-200 rounded-full w-24 h-10">
                          <button onClick={() => updateQty(item.id, -1)} className="w-1/3 flex items-center justify-center text-gray-500 hover:text-dark-navy">-</button>
                          <span className="w-1/3 text-center text-sm font-medium">{item.quantity}</span>
                          <button onClick={() => updateQty(item.id, 1)} className="w-1/3 flex items-center justify-center text-gray-500 hover:text-dark-navy">+</button>
                        </div>
                      </div>

                      <div className="col-span-1 md:col-span-3 text-left md:text-right font-bold text-lg text-dark-navy mt-2 md:mt-0">
                        ₹{(item.price * item.quantity).toLocaleString()}
                      </div>

                      <div className="col-span-1 flex justify-end">
                        <button className="w-10 h-10 rounded-full hover:bg-red-50 flex items-center justify-center text-gray-400 hover:text-red-500 transition-colors">
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Return to shop */}
                <div className="pt-6 border-t border-gray-100 mt-4">
                  <Link href="/shop" className="text-industrial-blue font-semibold hover:underline flex items-center gap-2 text-sm">
                    Continue Shopping
                  </Link>
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div className="w-full lg:w-1/3">
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sticky top-32">
                <h3 className="font-heading text-xl font-bold text-dark-navy mb-6">Order Summary</h3>
                
                <div className="space-y-4 text-gray-600 mb-6 pb-6 border-b border-gray-100">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span className="font-medium text-dark-navy">₹{subtotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Estimated Tax (18%)</span>
                    <span className="font-medium text-dark-navy">₹{tax.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span className="font-medium text-green-600">Free</span>
                  </div>
                </div>

                <div className="flex justify-between mb-8">
                  <span className="font-bold text-lg text-dark-navy">Total</span>
                  <span className="font-bold text-2xl text-industrial-blue">₹{total.toLocaleString()}</span>
                </div>

                <button className="w-full bg-industrial-blue text-white font-bold py-4 rounded-full flex items-center justify-center gap-2 hover:bg-dark-navy transition-colors mb-4">
                  Proceed to Checkout <ArrowRight className="w-5 h-5" />
                </button>

                <div className="flex items-center justify-center gap-2 text-sm text-gray-500 mt-6">
                  <ShieldCheck className="w-4 h-4 text-green-500" />
                  Secure SSL encrypted payment
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
