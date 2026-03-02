import React from 'react';
import { motion } from 'motion/react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { ArrowRight, ShoppingCart } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-32 md:pt-36 overflow-hidden bg-gradient-to-br from-gray-50 to-white">
      {/* Abstract Background Elements */}
      <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-50/50 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-[-5%] left-[-5%] w-[30%] h-[30%] bg-blue-100/30 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-[#1a4b8c] text-sm font-bold mb-6 tracking-wide"
          >
            Hardware Tecnológico de Nueva Generación
          </motion.span>
          
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 leading-[1.1] mb-6 font-poppins">
            Potenciando Tu <br />
            <span className="text-[#1a4b8c] relative">
              Espacio de Trabajo Digital
              <svg className="absolute -bottom-2 left-0 w-full h-3 text-blue-100 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
              </svg>
            </span>
          </h1>
          
          <p className="text-lg text-slate-600 mb-10 max-w-lg leading-relaxed">
            Computadoras de alto rendimiento, periféricos premium y soluciones de hardware de nivel empresarial diseñadas para profesionales y empresas modernas.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-[#1a4b8c] text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-blue-900/20 transition-all hover:bg-[#133a6e]"
            >
              Explorar Soluciones
              <ArrowRight size={20} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-white text-slate-700 border border-slate-200 px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-slate-50 transition-all"
            >
              Ver Catálogo
            </motion.button>
          </div>

          <div className="mt-12 flex items-center gap-6">
            <div className="flex -space-x-3">
              {[
                "https://images.unsplash.com/photo-1758599543154-76ec1c4257df?q=80&w=150&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1584940120505-117038d90b05?q=80&w=150&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1655249481446-25d575f1c054?q=80&w=150&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1758876204244-930299843f07?q=80&w=150&auto=format&fit=crop"
              ].map((url, i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-100 overflow-hidden relative">
                   <ImageWithFallback src={url} alt={`Cliente ${i + 1}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            <p className="text-sm text-slate-500">
              Confianza de <span className="font-bold text-slate-900">+500</span> clientes corporativos
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative"
        >
          <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1547082299-de196ea013d6?q=80&w=2070&auto=format&fit=crop"
              alt="High-end Workstation"
              className="w-full h-auto object-cover"
            />
          </div>
          
          {/* Floating Card */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl z-20 flex items-center gap-4 border border-slate-100"
          >
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-green-600">
               <ShoppingCart size={24} />
            </div>
            <div>
              <p className="text-xs text-slate-500 uppercase font-bold tracking-wider">Más Vendido</p>
              <p className="font-bold text-slate-900">Workstation Pro M2</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};