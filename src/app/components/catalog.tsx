import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/lib/utils';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { Search, ChevronRight, Eye, ShoppingCart } from 'lucide-react';

const categories = ["Todos", "Estaciones de Trabajo", "Portátiles", "Periféricos", "Redes"];

const products = [
  {
    id: 1,
    name: "Torre Pro Empresarial",
    category: "Estaciones de Trabajo",
    price: "$1,299",
    image: "https://images.unsplash.com/photo-1591405351990-4726e331f141?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "BusinessBook X14",
    category: "Portátiles",
    price: "$899",
    image: "https://images.unsplash.com/photo-1611186871348-b1ec696e5204?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Mecánico Serie K",
    category: "Periféricos",
    price: "$129",
    image: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "Mouse Precision M3",
    category: "Periféricos",
    price: "$79",
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 5,
    name: "Rack de Servidor Alpha",
    category: "Redes",
    price: "$4,500",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc48?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 6,
    name: "Ultrabook Air",
    category: "Portátiles",
    price: "$1,099",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1000&auto=format&fit=crop",
  },
];

export const Catalog = () => {
  const [activeCategory, setActiveCategory] = useState("Todos");

  const filteredProducts = activeCategory === "Todos" 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <section id="catalog" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-sm font-black text-[#1a4b8c] uppercase tracking-[0.2em] mb-4">Nuestros Productos</h2>
            <h3 className="text-4xl font-bold text-slate-900 font-poppins">Catálogo Premium</h3>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "px-6 py-2 rounded-full text-sm font-bold transition-all",
                  activeCategory === cat 
                    ? "bg-[#1a4b8c] text-white shadow-md" 
                    : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode='popLayout'>
            {filteredProducts.map((product) => (
              <motion.div
                layout
                key={product.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-3xl overflow-hidden group border border-slate-100 hover:shadow-xl hover:shadow-blue-900/5 transition-all"
              >
                <div className="aspect-[4/3] relative overflow-hidden">
                  <ImageWithFallback
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-[#0a1e3b]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                    <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#1a4b8c] hover:scale-110 transition-transform">
                      <Eye size={20} />
                    </button>
                    <button className="w-12 h-12 bg-[#1a4b8c] rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform">
                      <ShoppingCart size={20} />
                    </button>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-xs font-bold text-blue-600 uppercase mb-2">{product.category}</p>
                  <h4 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-[#1a4b8c] transition-colors">{product.name}</h4>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-black text-slate-900">{product.price}</span>
                    <button className="text-sm font-bold text-slate-500 hover:text-[#1a4b8c] flex items-center gap-1 transition-colors">
                      Detalles <ChevronRight size={16} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
