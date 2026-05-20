import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const allCategories = [
  { id: "floor-tiles", name: "Floor Tiles", count: "1,200+ Products", image: "https://images.unsplash.com/photo-1581428982868-e410dd981a90?q=80&w=1974&auto=format&fit=crop" },
  { id: "wall-tiles", name: "Wall Tiles", count: "850+ Products", image: "https://images.unsplash.com/photo-1615529182904-14819c35db37?q=80&w=2080&auto=format&fit=crop" },
  { id: "bathroom-tiles", name: "Bathroom Tiles", count: "600+ Products", image: "https://images.unsplash.com/photo-1620626011761-996317b8d101?q=80&w=2069&auto=format&fit=crop" },
  { id: "kitchen-tiles", name: "Kitchen Tiles", count: "450+ Products", image: "https://images.unsplash.com/photo-1556910103-1c02745a872f?q=80&w=2070&auto=format&fit=crop" },
  { id: "outdoor-tiles", name: "Outdoor & Parking", count: "300+ Products", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop" },
  { id: "wooden-tiles", name: "Wooden Finish", count: "250+ Products", image: "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?q=80&w=2070&auto=format&fit=crop" },
  { id: "marble-tiles", name: "Marble Finish", count: "500+ Products", image: "https://images.unsplash.com/photo-1615873968403-89e068629265?q=80&w=2070&auto=format&fit=crop" },
  { id: "elevation-tiles", name: "Elevation Tiles", count: "150+ Products", image: "https://images.unsplash.com/photo-1628147493722-1d5778848a28?q=80&w=1969&auto=format&fit=crop" },
];

export default function CategoriesPage() {
  return (
    <main className="min-h-screen bg-light-gray flex flex-col">
      <div className="bg-white">
        <Navigation />
      </div>

      <div className="flex-grow pt-32 pb-24">
        <div className="container mx-auto px-6">
          <div className="mb-12 text-center max-w-3xl mx-auto">
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-dark-navy mb-4">
              Explore All Categories
            </h1>
            <p className="text-lg text-gray-600">
              Browse our extensive collection of premium tiles designed for every space, style, and requirement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {allCategories.map((category) => (
              <Link href={`/shop?category=${category.id}`} key={category.id}>
                <div className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 h-full flex flex-col">
                  <div className="relative h-64 overflow-hidden">
                    <div 
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                      style={{ backgroundImage: `url('${category.image}')` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-navy/60 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                  </div>
                  <div className="p-6 flex-grow flex flex-col justify-between bg-white relative z-10 -mt-6 rounded-t-3xl transition-transform duration-300 group-hover:-translate-y-2">
                    <div>
                      <h3 className="font-heading text-2xl font-bold text-dark-navy mb-1 group-hover:text-industrial-blue transition-colors">
                        {category.name}
                      </h3>
                      <p className="text-sm text-gray-500 mb-4">{category.count}</p>
                    </div>
                    <div className="flex items-center text-industrial-blue font-semibold text-sm">
                      View Collection <ArrowUpRight className="w-4 h-4 ml-1" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
