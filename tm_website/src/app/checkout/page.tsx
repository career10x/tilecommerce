"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ShieldCheck, Check } from "lucide-react";

export default function CheckoutPage() {
  return (
    <main className="min-h-screen bg-light-gray flex flex-col">
      <div className="bg-white">
        <Navigation />
      </div>

      <div className="flex-grow pt-32 pb-24">
        <div className="container mx-auto px-6 max-w-6xl">
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-dark-navy mb-8">Checkout</h1>

          <div className="flex flex-col lg:flex-row gap-8">
            
            {/* Form Section */}
            <div className="w-full lg:w-2/3 space-y-8">
              
              {/* Shipping Address */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                <h2 className="font-heading text-2xl font-bold text-dark-navy mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-industrial-blue text-white flex items-center justify-center text-sm">1</span> 
                  Shipping Address
                </h2>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                      <input type="text" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-industrial-blue focus:border-transparent outline-none transition-all" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                      <input type="text" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-industrial-blue focus:border-transparent outline-none transition-all" />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
                    <input type="text" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-industrial-blue focus:border-transparent outline-none transition-all" placeholder="Apartment, studio, or floor" />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">City</label>
                      <input type="text" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-industrial-blue focus:border-transparent outline-none transition-all" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">State</label>
                      <select className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-industrial-blue focus:border-transparent outline-none transition-all bg-white">
                        <option>Maharashtra</option>
                        <option>Delhi</option>
                        <option>Karnataka</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">PIN Code</label>
                      <input type="text" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-industrial-blue focus:border-transparent outline-none transition-all" />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                    <input type="tel" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-industrial-blue focus:border-transparent outline-none transition-all" />
                  </div>
                </form>
              </div>

              {/* Payment Method */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                <h2 className="font-heading text-2xl font-bold text-dark-navy mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-industrial-blue text-white flex items-center justify-center text-sm">2</span> 
                  Payment Method
                </h2>

                <div className="space-y-4">
                  <label className="flex items-center p-4 border border-industrial-blue bg-blue-50/50 rounded-xl cursor-pointer">
                    <input type="radio" name="payment" className="w-5 h-5 text-industrial-blue focus:ring-industrial-blue border-gray-300" defaultChecked />
                    <span className="ml-3 font-medium text-dark-navy flex-grow">Credit / Debit Card</span>
                    <div className="flex gap-2">
                      <div className="w-10 h-6 bg-white border rounded"></div>
                      <div className="w-10 h-6 bg-white border rounded"></div>
                    </div>
                  </label>
                  
                  <label className="flex items-center p-4 border border-gray-200 rounded-xl cursor-pointer hover:bg-gray-50 transition-colors">
                    <input type="radio" name="payment" className="w-5 h-5 text-industrial-blue focus:ring-industrial-blue border-gray-300" />
                    <span className="ml-3 font-medium text-gray-700">UPI / Netbanking</span>
                  </label>
                </div>
              </div>

            </div>

            {/* Order Summary */}
            <div className="w-full lg:w-1/3">
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sticky top-32">
                <h3 className="font-heading text-xl font-bold text-dark-navy mb-6">Your Order</h3>
                
                <div className="space-y-4 mb-6 pb-6 border-b border-gray-100">
                  {/* Item 1 */}
                  <div className="flex gap-4 items-center">
                    <div className="w-16 h-16 bg-gray-100 rounded-lg overflow-hidden shrink-0 border border-gray-200">
                      <img src="https://images.unsplash.com/photo-1615873968403-89e068629265?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover" alt="Tile" />
                    </div>
                    <div className="flex-grow">
                      <h4 className="text-sm font-bold text-dark-navy line-clamp-1">Italian Statuario Marble</h4>
                      <p className="text-xs text-gray-500">Qty: 5 Boxes</p>
                    </div>
                    <div className="font-bold text-sm text-dark-navy shrink-0">₹6,000</div>
                  </div>
                  {/* Item 2 */}
                  <div className="flex gap-4 items-center">
                    <div className="w-16 h-16 bg-gray-100 rounded-lg overflow-hidden shrink-0 border border-gray-200">
                      <img src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1974&auto=format&fit=crop" className="w-full h-full object-cover" alt="Tile" />
                    </div>
                    <div className="flex-grow">
                      <h4 className="text-sm font-bold text-dark-navy line-clamp-1">Matte Anthracite</h4>
                      <p className="text-xs text-gray-500">Qty: 2 Boxes</p>
                    </div>
                    <div className="font-bold text-sm text-dark-navy shrink-0">₹1,700</div>
                  </div>
                </div>

                <div className="space-y-3 text-gray-600 mb-6 pb-6 border-b border-gray-100 text-sm">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span className="font-medium text-dark-navy">₹7,700</span>
                  </div>
                  <div className="flex justify-between">
                    <span>GST (18%)</span>
                    <span className="font-medium text-dark-navy">₹1,386</span>
                  </div>
                  <div className="flex justify-between text-green-600">
                    <span>Shipping</span>
                    <span className="font-medium">Free</span>
                  </div>
                </div>

                <div className="flex justify-between mb-8">
                  <span className="font-bold text-lg text-dark-navy">Total</span>
                  <span className="font-bold text-2xl text-industrial-blue">₹9,086</span>
                </div>

                <button className="w-full bg-dark-navy text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-industrial-blue transition-colors mb-4">
                  <ShieldCheck className="w-5 h-5" /> Pay Securely
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
