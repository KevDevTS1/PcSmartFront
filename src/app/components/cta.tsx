import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'motion/react';
import { Sparkles, ArrowRight, MapPin, Send, Zap, MousePointer2, ShieldCheck } from 'lucide-react';

export const CTA = () => {
  const containerRef = useRef<HTMLElement>(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.2 });
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.9]);
  const rotateX = useTransform(scrollYProgress, [0, 1], [5, -5]);

  return (
    <section ref={containerRef} id="contact" className="relative py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div 
          style={{ scale, rotateX }}
          className="bg-[#0a1e3b] rounded-[4.5rem] p-12 md:p-32 relative overflow-hidden shadow-[0_50px_100px_-20px_rgba(10,30,59,0.5)] border border-white/5"
        >
          {/* High-Dynamic Animated Background Mesh */}
          <div className="absolute inset-0 z-0">
            <motion.div 
              animate={{ 
                scale: [1, 1.4, 1],
                rotate: [0, 90, 0],
                x: [-150, 150, -150],
                y: [-100, 100, -100]
              }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute -top-1/2 -left-1/2 w-full h-full bg-blue-500/10 rounded-full blur-[140px]"
            />
            <motion.div 
              animate={{ 
                scale: [1.6, 1, 1.6],
                rotate: [90, 0, 90],
                x: [150, -150, 150],
                y: [100, -100, 100]
              }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-[#1a4b8c]/40 rounded-full blur-[140px]"
            />
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5 mix-blend-overlay" />
          </div>

          <div className="relative z-10 text-center max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-xl px-8 py-3 rounded-full text-blue-300 text-sm font-black uppercase tracking-[0.4em] mb-12 border border-white/10"
            >
              <Sparkles size={18} className="text-blue-400 animate-pulse" />
              Actualiza Tu Visión
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl md:text-9xl font-black text-white mb-12 font-poppins leading-[0.85] tracking-tighter"
            >
              ¿Listo para Actualizar <br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-200 to-white">
                Tu Empresa?
              </span>
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="text-blue-100/60 text-xl md:text-3xl mb-20 leading-relaxed max-w-3xl mx-auto font-medium"
            >
              Únete a cientos de empresas que confían en PC Smart para su infraestructura tecnológica. Contacta a nuestros especialistas hoy para una cotización personalizada.
            </motion.p>

            <div className="flex flex-col sm:flex-row gap-10 justify-center items-center">
              <motion.button
                whileHover={{ 
                  scale: 1.08,
                  boxShadow: "0 30px 60px rgba(0,0,0,0.4)"
                }}
                whileTap={{ scale: 0.95 }}
                className="group relative bg-white text-[#0a1e3b] px-16 py-8 rounded-[2.5rem] font-black text-2xl flex items-center gap-4 overflow-hidden transition-all"
              >
                <span className="relative z-10 flex items-center gap-4">
                  Contactar Ventas
                  <Send size={26} className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-500" />
                </span>
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-blue-100 to-white opacity-0 group-hover:opacity-100 transition-opacity"
                />
                <motion.div 
                  className="absolute -inset-2 bg-blue-400/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity"
                />
              </motion.button>

              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: "rgba(255,255,255,0.15)",
                  borderColor: "rgba(255,255,255,0.4)"
                }}
                whileTap={{ scale: 0.95 }}
                className="group flex items-center gap-4 bg-transparent text-white border-2 border-white/20 px-16 py-8 rounded-[2.5rem] font-black text-2xl backdrop-blur-md transition-all"
              >
                <MapPin size={26} className="text-blue-400 group-hover:animate-bounce" />
                Ver Ubicaciones
                <ArrowRight size={26} className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500" />
              </motion.button>
            </div>

            {/* Micro-interactions / Floating Badges */}
            <div className="mt-24 flex flex-wrap justify-center gap-12 opacity-40">
              <div className="flex items-center gap-3 grayscale hover:grayscale-0 transition-all">
                <ShieldCheck size={24} className="text-blue-400" />
                <span className="text-white font-bold text-sm tracking-widest uppercase">Seguridad Certificada</span>
              </div>
              <div className="flex items-center gap-3 grayscale hover:grayscale-0 transition-all">
                <Zap size={24} className="text-blue-400" />
                <span className="text-white font-bold text-sm tracking-widest uppercase">Despliegue Rápido</span>
              </div>
              <div className="flex items-center gap-3 grayscale hover:grayscale-0 transition-all">
                <MousePointer2 size={24} className="text-blue-400" />
                <span className="text-white font-bold text-sm tracking-widest uppercase">Soporte Directo</span>
              </div>
            </div>
          </div>

          {/* Abstract Floating Shapes */}
          <motion.div 
            animate={{ 
              y: [0, -30, 0],
              rotate: [0, 10, 0]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-20 -right-20 w-64 h-64 bg-white/5 border border-white/10 rounded-full blur-3xl"
          />
          <motion.div 
            animate={{ 
              y: [0, 40, 0],
              rotate: [0, -10, 0]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-20 -left-20 w-80 h-80 bg-[#1a4b8c]/20 rounded-full blur-3xl"
          />
        </motion.div>
      </div>
    </section>
  );
};