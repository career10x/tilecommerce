"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-light-gray flex flex-col">
      <div className="bg-white">
        <Navigation />
      </div>

      <div className="flex-grow pt-32 pb-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-dark-navy mb-4">Get in Touch</h1>
            <p className="text-lg text-gray-600">
              Have a question about our products or need help with a large project? Our design experts are here to assist you.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-12 bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 max-w-6xl mx-auto">
            
            {/* Contact Info */}
            <div className="w-full lg:w-1/3 bg-dark-navy text-white p-10 flex flex-col justify-between">
              <div>
                <h3 className="font-heading text-2xl font-bold mb-8">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-bright-yellow shrink-0 mt-1" />
                    <div>
                      <h5 className="font-bold mb-1">Experience Center</h5>
                      <p className="text-white/70">123 Design Avenue, Interior District, Mumbai 400001, India</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <Phone className="w-6 h-6 text-bright-yellow shrink-0 mt-1" />
                    <div>
                      <h5 className="font-bold mb-1">Phone</h5>
                      <p className="text-white/70">+91 98765 43210</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <Mail className="w-6 h-6 text-bright-yellow shrink-0 mt-1" />
                    <div>
                      <h5 className="font-bold mb-1">Email</h5>
                      <p className="text-white/70">hello@tilecommerce.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Clock className="w-6 h-6 text-bright-yellow shrink-0 mt-1" />
                    <div>
                      <h5 className="font-bold mb-1">Working Hours</h5>
                      <p className="text-white/70">Mon - Sat: 10:00 AM - 7:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative graphic */}
              <div className="mt-12 opacity-20">
                <svg viewBox="0 0 100 100" className="w-32 h-32 text-white fill-current">
                  <path d="M0 0 h100 v100 h-100 z" opacity="0.1"/>
                  <path d="M0 0 h50 v50 h-50 z" opacity="0.3"/>
                  <path d="M50 50 h50 v50 h-50 z" opacity="0.3"/>
                </svg>
              </div>
            </div>

            {/* Contact Form */}
            <div className="w-full lg:w-2/3 p-10 lg:p-16">
              <h3 className="font-heading text-2xl font-bold text-dark-navy mb-8">Send us a Message</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                    <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-industrial-blue" placeholder="John" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                    <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-industrial-blue" placeholder="Doe" />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                    <input type="email" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-industrial-blue" placeholder="john@example.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                    <input type="tel" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-industrial-blue" placeholder="+91 98765 43210" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea rows={4} className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-industrial-blue" placeholder="Tell us about your project..."></textarea>
                </div>

                <button type="button" className="bg-industrial-blue text-white font-bold py-4 px-8 rounded-full hover:bg-dark-navy transition-colors w-full md:w-auto">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
