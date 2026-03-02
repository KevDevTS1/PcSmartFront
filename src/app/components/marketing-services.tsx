import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { Target, BarChart3, Globe, ShieldCheck, ArrowRight, Zap, Layers, Cpu } from 'lucide-react';
import { cn } from '@/lib/utils';

const services = [
  {
    title: "Estrategia de Marca",
    description: "Desarrollamos identidades de marca integrales que resuenan con el mercado tecnológico.",
    icon: <Target size={28} />,
    color: "from-blue-600 to-indigo-600",
    bg: "bg-blue-50/50",
    shadow: "shadow-blue-500/20"
  },
  {
    title: "Marketing de Rendimiento",
    description: "Campañas basadas en datos enfocadas en ROI y adquisición de clientes de alta intención.",
    icon: <BarChart3 size={28} />,
    color: "from-emerald-600 to-teal-600",
    bg: "bg-emerald-50/50",
    shadow: "shadow-emerald-500/20"
  },
  {
    title: "Presencia Digital",
    description: "Experiencias web modernas diseñadas para exhibir hardware tecnológico efectivamente.",
    icon: <Globe size={28} />,
    color: "from-orange-600 to-amber-600",
    bg: "bg-orange-50/50",
    shadow: "shadow-orange-500/20"
  },
  {
    title: "Protección de Mercado",
    description: "Aseguramos la consistencia de marca e integridad del mercado para distribuidores autorizados.",
    icon: <ShieldCheck size={28} />,
    color: "from-purple-600 to-pink-600",
    bg: "bg-purple-50/50",
    shadow: "shadow-purple-500/20"
  }
];

export const MarketingServices = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const rotate = useTransform(scrollYProgress, [0, 1], [0, 15]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section ref={containerRef} id="marketing" className="relative py-32 bg-white overflow-hidden">
      {/* Dynamic Animated Background */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] bg-blue-100/30 rounded-full blur-[140px]"
        />
        <motion.div 
          animate={{ 
            scale: [1.2, 1, 1.2],
            x: [0, -120, 0],
            y: [0, 80, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-[20%] -right-[10%] w-[60%] h-[60%] bg-indigo-100/30 rounded-full blur-[140px]"
        />
        
        {/* Floating Particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -100, 0],
              opacity: [0.1, 0.3, 0.1],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              delay: i * 1.5,
            }}
            className="absolute bg-[#1a4b8c]/10 rounded-full blur-xl"
            style={{
              width: `${Math.random() * 200 + 100}px`,
              height: `${Math.random() * 200 + 100}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          
          {/* Left Side: Sticky Content */}
          <div className="lg:sticky lg:top-32 self-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="h-[2px] w-12 bg-[#1a4b8c]" />
                <span className="text-sm font-black text-[#1a4b8c] uppercase tracking-[0.4em]">Ecosistema</span>
              </div>
              
              <h2 className="text-5xl md:text-7xl font-bold text-slate-900 mb-8 font-poppins leading-[1] tracking-tighter">
                Más que Solo <br /> 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1a4b8c] via-blue-500 to-indigo-600">
                  Distribución de Hardware
                </span>
              </h2>

              <p className="text-slate-600 text-xl mb-12 leading-relaxed max-w-xl">
                Proporcionamos un conjunto completo de servicios para garantizar que nuestros socios y clientes tengan éxito en un panorama digital competitivo. Desde logística hasta posicionamiento estratégico de mercado.
              </p>

              <motion.button
                whileHover={{ scale: 1.05, x: 10 }}
                whileTap={{ scale: 0.95 }}
                className="group flex items-center gap-4 bg-slate-900 text-white px-10 py-6 rounded-2xl font-black text-lg transition-all hover:bg-[#1a4b8c] shadow-2xl shadow-slate-900/20"
              >
                Conoce Nuestras Alianzas
                <ArrowRight className="group-hover:translate-x-2 transition-transform" />
              </motion.button>

              {/* Decorative Stats/Badges */}
              <div className="mt-16 flex gap-12 border-t border-slate-100 pt-12">
                <div>
                  <p className="text-3xl font-black text-slate-900 font-poppins">100%</p>
                  <p className="text-sm text-slate-500 font-bold uppercase tracking-wider">Confiabilidad</p>
                </div>
                <div>
                  <p className="text-3xl font-black text-slate-900 font-poppins">24/7</p>
                  <p className="text-sm text-slate-500 font-bold uppercase tracking-wider">Soporte Experto</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Side: Animated Cards Grid */}
          <div className="grid grid-cols-1 gap-8 relative">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ 
                  duration: 0.7, 
                  delay: i * 0.2,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  scale: 1.02,
                  rotate: i % 2 === 0 ? 1 : -1,
                  y: -10
                }}
                className={cn(
                  "p-8 md:p-12 rounded-[3.5rem] bg-white border border-slate-100 transition-all duration-500 relative group overflow-hidden",
                  "shadow-[0_20px_50px_rgba(0,0,0,0.05)] hover:shadow-[0_40px_80px_rgba(26,75,140,0.1)]"
                )}
              >
                {/* Background Accent Gradient */}
                <div className={cn(
                  "absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-500",
                  service.color
                )} />

                <div className="flex flex-col md:flex-row gap-8 items-start relative z-10">
                  <motion.div 
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className={cn(
                      "w-20 h-20 shrink-0 rounded-[2rem] flex items-center justify-center text-white bg-gradient-to-br shadow-xl",
                      service.color,
                      service.shadow
                    )}
                  >
                    {service.icon}
                  </motion.div>

                  <div className="flex-grow">
                    <h4 className="text-3xl font-bold text-slate-900 mb-4 font-poppins group-hover:text-[#1a4b8c] transition-colors">
                      {service.title}
                    </h4>
                    <p className="text-slate-500 text-lg leading-relaxed group-hover:text-slate-700 transition-colors">
                      {service.description}
                    </p>
                  </div>

                  <motion.div 
                    className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 transition-all"
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1.2 }}
                  >
                    <div className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center">
                      <Zap className="text-[#1a4b8c]" size={20} />
                    </div>
                  </motion.div>
                </div>

                {/* Animated Bottom Line */}
                <motion.div 
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 1, delay: i * 0.2 + 0.5 }}
                  className={cn(
                    "absolute bottom-0 left-0 h-2 bg-gradient-to-r origin-left",
                    service.color
                  )}
                  style={{ width: '30%' }}
                />
              </motion.div>
            ))}
            
            {/* Visual connector lines (decorative) */}
            <div className="absolute -left-12 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-slate-100 to-transparent hidden lg:block" />
          </div>
        </div>
      </div>
    </section>
  );
};