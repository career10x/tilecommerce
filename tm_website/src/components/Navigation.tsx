"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Heart, ShoppingCart, User, Menu, X, ChevronDown } from "lucide-react";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass shadow-sm py-4" : "bg-transparent py-6"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="font-heading font-bold text-2xl tracking-tighter text-industrial-blue">
            TILE<span className="text-bright-yellow">COMMERCE</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8 font-medium">
          <div className="relative group">
            <Link href="/categories" className="flex items-center gap-1 hover:text-industrial-blue transition-colors">
              Categories <ChevronDown className="w-4 h-4" />
            </Link>
            <div className="absolute top-full left-0 mt-4 w-48 bg-white shadow-xl rounded-2xl p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              <Link href="/shop?category=floor-tiles" className="block py-2 hover:text-industrial-blue">Floor Tiles</Link>
              <Link href="/shop?category=wall-tiles" className="block py-2 hover:text-industrial-blue">Wall Tiles</Link>
              <Link href="/shop?category=outdoor-tiles" className="block py-2 hover:text-industrial-blue">Outdoor</Link>
            </div>
          </div>
          <Link href="/shop" className="hover:text-industrial-blue transition-colors">Shop</Link>
          <Link href="/brands" className="hover:text-industrial-blue transition-colors">Brands</Link>
          <Link href="/about" className="hover:text-industrial-blue transition-colors">About Us</Link>
          <Link href="/blog" className="hover:text-industrial-blue transition-colors">Blog</Link>
        </nav>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-6">
          <Link href="/shop" className="hover:text-industrial-blue"><Search className="w-5 h-5" /></Link>
          <Link href="/wishlist" className="hover:text-industrial-blue"><Heart className="w-5 h-5" /></Link>
          <Link href="/cart" className="hover:text-industrial-blue relative">
            <ShoppingCart className="w-5 h-5" />
            <span className="absolute -top-2 -right-2 bg-bright-yellow text-dark-navy text-xs font-bold w-4 h-4 rounded-full flex items-center justify-center">2</span>
          </Link>
          <Link href="/contact" className="hover:text-industrial-blue"><User className="w-5 h-5" /></Link>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="absolute top-full left-0 right-0 bg-white shadow-lg p-6 flex flex-col gap-4 md:hidden"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <Link href="/categories" className="font-medium text-lg">Categories</Link>
            <Link href="/shop" className="font-medium text-lg">Shop</Link>
            <Link href="/brands" className="font-medium text-lg">Brands</Link>
            <Link href="/about" className="font-medium text-lg">About Us</Link>
            <Link href="/blog" className="font-medium text-lg">Blog</Link>
            <Link href="/contact" className="font-medium text-lg">Contact</Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
