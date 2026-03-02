import React from 'react';
import { motion } from 'motion/react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { CheckCircle2 } from 'lucide-react';

export const AboutUs = () => {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070&auto=format&fit=crop"
                alt="Nuestra Oficina"
                className="w-full h-auto object-cover aspect-[4/3] hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="absolute -z-10 top-12 -left-12 w-full h-full border-2 border-blue-50 rounded-[2.5rem]" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          >
            <h2 className="text-sm font-black text-[#1a4b8c] uppercase tracking-[0.2em] mb-4">Acerca de Nosotros</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 font-poppins leading-tight">
              Tecnología al Alcance de Todos
            </h3>
            <p className="text-slate-600 mb-6 leading-relaxed text-lg">
              En PC Smart creemos que la tecnología tiene el poder de transformar realidades. Desde hace más de veinte años asumimos el compromiso de ofrecer soluciones tecnológicas "al alcance de todos", convencidos de que la innovación debe ser inclusiva y accesible.
            </p>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Hemos trabajado con pasión por la inclusión digital en Colombia, acercando herramientas de informática, software y desarrollo tecnológico que fortalecen a personas, empresas e instituciones, sin importar su contexto económico.
            </p>
            <p className="text-slate-600 mb-8 leading-relaxed">
              La confianza y satisfacción de nuestros clientes en todo el país son nuestro mayor logro y la motivación que nos impulsa a seguir creciendo. En PC Smart no solo entregamos tecnología; creamos oportunidades, construimos confianza y acompañamos el desarrollo de quienes creen en el poder de la innovación.
            </p>
            
            <div className="space-y-4">
              {[
                "Tecnología de punta",
                "Equipo humano altamente calificado y certificado",
                "Alianzas estratégicas sólidas",
                "Experiencia en múltiples sectores a nivel nacional"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 size={22} className="text-[#1a4b8c] shrink-0" />
                  <span className="text-slate-700 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Quiénes Somos Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mt-24 bg-gradient-to-br from-blue-50 to-white p-12 md:p-16 rounded-[2.5rem] border border-blue-100"
        >
          <h2 className="text-sm font-black text-[#1a4b8c] uppercase tracking-[0.2em] mb-4">Quiénes Somos</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 font-poppins">
            Más de 20 Años Impulsando la Inclusión Digital
          </h3>
          <p className="text-slate-600 leading-relaxed text-lg mb-6">
            PC Smart es una marca colombiana con más de veinte años de trayectoria en el sector tecnológico. Nacimos con la convicción de que la tecnología no debe ser un privilegio, sino una herramienta de progreso accesible para todos.
          </p>
          <p className="text-slate-600 leading-relaxed text-lg">
            A lo largo de nuestra historia, hemos trabajado para impulsar la inclusión digital en el país, ofreciendo soluciones integrales en informática, software y desarrollo tecnológico que responden a las necesidades reales de personas, empresas e instituciones. Más que proveedores, somos aliados estratégicos que acompañan el crecimiento y la transformación tecnológica de nuestros clientes.
          </p>
        </motion.div>
      </div>
    </section>
  );
};