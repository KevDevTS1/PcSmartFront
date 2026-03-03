import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/lib/utils';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { Search, ChevronRight, Eye, ShoppingCart } from 'lucide-react';

const categories = ["Todos", "Portátiles", "Celulares","Tablets"];

const products = [
  {
    id: 1,
    name: "Celular 4G Quicktab",
    category: "Celulares",
    price: "$499.000",
    image: "https://scontent.fbog2-4.fna.fbcdn.net/v/t1.6435-9/39442445_1662554963872783_1580941749004533760_n.png?stp=dst-jpg_tt6&_nc_cat=104&ccb=1-7&_nc_sid=13d280&_nc_ohc=IIYvZkSmqrMQ7kNvwFmprt4&_nc_oc=Adn293oxGtzXrm0SUj4fqr_8dqfoUTUTrqDakRj0jyRaYCsXIcrDiTbYy1b4Oo6KjTM&_nc_zt=23&_nc_ht=scontent.fbog2-4.fna&_nc_gid=jcFbmqGNMtE_3bsBHBDdMQ&_nc_ss=8&oh=00_AfzYivMxTz-dxrN60oAwTGB4oORchxLDhcA7GJbZNZ7oAA&oe=69CE7E67",
  },
  {
    id: 2,
    name: "Phablet Touch Smart Quicktab",
    category: "Tablets",
    price: "$490.000",
    image: "https://scontent.fbog2-4.fna.fbcdn.net/v/t1.6435-9/32926053_1541407039320910_7059838804739227648_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=13d280&_nc_ohc=NeDWc3W9s5EQ7kNvwEd_-_A&_nc_oc=AdkW5_M7128Kt3xBj7kVC8SVLRE2eYxVQXeeIyiO3IPx0xgJSiDAmtCUKt49IgH6tjA&_nc_zt=23&_nc_ht=scontent.fbog2-4.fna&_nc_gid=dapV7oysE_x2wQLxrRzl7w&_nc_ss=8&oh=00_AfymfNGxMGk39ADFgM3Yv9Q-bjoxGhKGCXNvNI74fBXfvA&oe=69CE8DC7",
  },
  {
    id: 3,
    name: "Celular Krone 4.5 ",
    category: "Celulares",
    price: "$499.900",
    image: "https://scontent.fbog2-4.fna.fbcdn.net/v/t39.30808-6/508176117_9695318997262966_8915332317308483502_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=0327a3&_nc_ohc=9TOkZYd7p9IQ7kNvwGmll9o&_nc_oc=AdmWU5EpPWIAFZfxNJAKLJ1egQHa3n3BX_Singoe3N0p1ap-sVxggyoFW7xivRJADI8&_nc_zt=23&_nc_ht=scontent.fbog2-4.fna&_nc_gid=lswU87-hw8cFjCuoQ53HwQ&_nc_ss=8&oh=00_AfwYcFbitQXGAnL5E7QIekYe06bkDOL6pWVux-j-0H7xCA&oe=69AD0982",
  },
  {
    id: 4,
    name: "Portatil 2 en 1 Touchsmart 360",
    category: "Portátiles",
    price: "$499.900",
    image: "https://scontent.fbog2-4.fna.fbcdn.net/v/t39.30808-6/508952910_9714384098689789_1980292592150919736_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=13d280&_nc_ohc=JC0ZhpDw-sUQ7kNvwEs1OkP&_nc_oc=AdkT_SfNsiIQx8fi0ptUOqqs-0gmofCBsRZ31ZwvVEPL3AeKwR_C0Cz4JBcfXODRox0&_nc_zt=23&_nc_ht=scontent.fbog2-4.fna&_nc_gid=_Awqp6E_J29nSxr9Cq8IIA&_nc_ss=8&oh=00_AfxqCXET4NpZHIa7dgmKJ-ynrpWIyk1I1yfIF9qfa-4EXQ&oe=69ACE24C",
  },
  {
    id: 5,
    name: "Portatil Airnote serie platinum",
    category: "Portátiles",
    price: "$999,000",
    image: "https://scontent.fbog2-4.fna.fbcdn.net/v/t39.30808-6/499039251_9713334318794767_1044177032346396282_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=13d280&_nc_ohc=q4WTsSsSOVgQ7kNvwHg8iei&_nc_oc=Adkq-ufE53YMAbI0BHdAhohCSEx6iR1-VYbkGw09SO5crVl22BaPz8gqfWlRh8WUpKs&_nc_zt=23&_nc_ht=scontent.fbog2-4.fna&_nc_gid=JcTCRHMUHjkJ9vN_E9lDlQ&_nc_ss=8&oh=00_Afy-8OlnH-0FuBccPtU6pN6SnnXBPPReiCud2hFMOWzdsg&oe=69AD0824",
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
