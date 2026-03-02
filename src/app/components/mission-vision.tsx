import React from 'react';
import { motion } from 'motion/react';
import { Target, Eye, Lightbulb, Users, HandshakeIcon, TrendingUp, Shield, HeartHandshake, UsersRound, Sparkles } from 'lucide-react';

const missionCards = [
  {
    icon: <Target size={32} />,
    title: "Misión",
    description: "Brindar soluciones tecnológicas integrales en informática, software y desarrollo tecnológico, accesibles, innovadoras y de alta calidad, que impulsen la transformación digital de personas, empresas e instituciones a nivel nacional e internacional. Trabajamos con compromiso, excelencia y un equipo humano altamente calificado para garantizar resultados confiables, sostenibles y alineados con las necesidades reales de nuestros clientes.",
    color: "blue"
  },
  {
    icon: <Eye size={32} />,
    title: "Visión",
    description: "Ser una marca líder en soluciones tecnológicas a nivel nacional e internacional, reconocida por su compromiso con la inclusión digital, la innovación constante y la generación de valor para nuestros clientes y aliados estratégicos. Proyectamos consolidarnos como un referente en transformación tecnológica, ampliando nuestra presencia a nuevos mercados y fortaleciendo nuestro impacto en el desarrollo digital del país.",
    color: "blue"
  }
];

const principles = [
  {
    icon: <Users size={24} />,
    title: "Inclusión tecnológica",
    description: "Creemos que la tecnología debe estar al alcance de todos. Trabajamos para reducir brechas digitales y facilitar el acceso a soluciones innovadoras sin barreras económicas."
  },
  {
    icon: <Sparkles size={24} />,
    title: "Innovación constante",
    description: "Evolucionamos junto con la tecnología. Nos mantenemos actualizados para ofrecer soluciones modernas, eficientes y alineadas con las tendencias del mercado."
  },
  {
    icon: <Shield size={24} />,
    title: "Integridad y transparencia",
    description: "Construimos relaciones basadas en la confianza, la ética y el cumplimiento de nuestros compromisos."
  },
  {
    icon: <HeartHandshake size={24} />,
    title: "Orientación al cliente",
    description: "Escuchamos, entendemos y diseñamos soluciones a la medida de cada necesidad, acompañando a nuestros clientes en todo su proceso de transformación tecnológica."
  },
  {
    icon: <UsersRound size={24} />,
    title: "Trabajo en equipo",
    description: "Creemos en el talento humano como motor del crecimiento. Fomentamos la colaboración, el respeto y el desarrollo profesional continuo."
  },
  {
    icon: <TrendingUp size={24} />,
    title: "Responsabilidad social",
    description: "Entendemos nuestro papel en el desarrollo del país y trabajamos para generar impacto positivo a través de la tecnología."
  }
];

export const MissionVision = () => {
  return (
    <section id="mission" className="py-24 bg-slate-900 text-white overflow-hidden relative">
      {/* Background patterns */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
        <svg width="100%" height="100%" fill="none" viewBox="0 0 100 100" preserveAspectRatio="none">
          <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
            <path d="M 10 0 L 0 0 0 10" stroke="white" strokeWidth="0.5"/>
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-sm font-black text-blue-400 uppercase tracking-[0.2em] mb-4"
          >
            Nuestro Propósito
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold font-poppins mb-6"
          >
            Impulsando la Transformación Digital
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {missionCards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.3 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 p-12 rounded-[2.5rem] hover:bg-white/10 transition-colors group"
            >
              <div className="w-16 h-16 bg-[#1a4b8c] rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                {card.icon}
              </div>
              <h4 className="text-3xl font-bold mb-6 font-poppins">{card.title}</h4>
              <p className="text-slate-400 text-lg leading-relaxed">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Principios Section */}
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-sm font-black text-blue-400 uppercase tracking-[0.2em] mb-4"
          >
            Nuestros Valores
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold font-poppins"
          >
            Principios que nos Guían
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {principles.map((principle, i) => (
            <motion.div
              key={principle.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors group"
            >
              <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-500/30 transition-colors">
                {principle.icon}
              </div>
              <h4 className="text-xl font-bold mb-3 font-poppins">{principle.title}</h4>
              <p className="text-slate-400 leading-relaxed">
                {principle.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};