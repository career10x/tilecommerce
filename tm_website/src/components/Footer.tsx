import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-dark-navy text-white pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <span className="font-heading font-bold text-3xl tracking-tighter text-white">
                TILE<span className="text-bright-yellow">COMMERCE</span>
              </span>
            </Link>
            <p className="text-white/60 mb-8 max-w-sm">
              Premium designer tiles for modern interiors. Transform your spaces with our luxury collections of ceramic, vitrified, and porcelain tiles.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-bright-yellow hover:text-dark-navy transition-colors font-bold text-sm">
                FB
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-bright-yellow hover:text-dark-navy transition-colors font-bold text-sm">
                IG
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-bright-yellow hover:text-dark-navy transition-colors font-bold text-sm">
                X
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-bright-yellow hover:text-dark-navy transition-colors font-bold text-sm">
                IN
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-heading font-bold text-lg mb-6">Categories</h4>
            <ul className="space-y-4 text-white/60">
              <li><Link href="#" className="hover:text-bright-yellow transition-colors">Floor Tiles</Link></li>
              <li><Link href="#" className="hover:text-bright-yellow transition-colors">Wall Tiles</Link></li>
              <li><Link href="#" className="hover:text-bright-yellow transition-colors">Bathroom Tiles</Link></li>
              <li><Link href="#" className="hover:text-bright-yellow transition-colors">Kitchen Tiles</Link></li>
              <li><Link href="#" className="hover:text-bright-yellow transition-colors">Outdoor Tiles</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-lg mb-6">Company</h4>
            <ul className="space-y-4 text-white/60">
              <li><Link href="#" className="hover:text-bright-yellow transition-colors">About Us</Link></li>
              <li><Link href="#" className="hover:text-bright-yellow transition-colors">Contact Us</Link></li>
              <li><Link href="#" className="hover:text-bright-yellow transition-colors">Careers</Link></li>
              <li><Link href="#" className="hover:text-bright-yellow transition-colors">B2B Portal</Link></li>
              <li><Link href="#" className="hover:text-bright-yellow transition-colors">Blog</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-lg mb-6">Contact</h4>
            <ul className="space-y-4 text-white/60">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-bright-yellow shrink-0 mt-1" />
                <span>123 Design Avenue, Interior District, Mumbai 400001</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-bright-yellow shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-bright-yellow shrink-0" />
                <span>hello@tilecommerce.com</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-white/40 text-sm">
          <p>&copy; {new Date().getFullYear()} TileCommerce. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
