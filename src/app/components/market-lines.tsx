import React from 'react';
import { motion } from 'motion/react';
import { Building2, Radio, Heart, Shield, Lightbulb } from 'lucide-react';
import microsoftLogo from '@/assets/logos/microsoft.png';
import intelLogo from '@/assets/logos/intel.png';
import googleLogo from '@/assets/logos/google.png';
import corsairLogo from '@/assets/logos/corsair.png';
import aocLogo from '@/assets/logos/aoc.png';
import wdLogo from '@/assets/logos/western-digital.png';
import foxconnLogo from '@/assets/logos/foxconn.png';
import lexmarkLogo from '@/assets/logos/lexmark.png';
import energyStarCert from '@/assets/logos/energy-star.png';
import ecoComputoCert from '@/assets/logos/eco-computo.png';
import sgsCert from '@/assets/logos/sgs.png';
import wifiCert from '@/assets/logos/wifi-cert.png';
import ceCert from '@/assets/logos/ce.png';
import rohsCert from '@/assets/logos/rohs.png';
import fcCert from '@/assets/logos/fc.png';
import ulCert from '@/assets/logos/ul.png';
import googleMobileCert from '@/assets/logos/google-mobile.png';
import crcCert from '@/assets/logos/crc.png';

const marketSectors = [
  {
    icon: <Building2 size={32} />,
    title: "Gobierno",
    description: "Soluciones tecnológicas para entidades públicas y gubernamentales"
  },
  {
    icon: <Radio size={32} />,
    title: "Telcos",
    description: "Infraestructura y equipamiento para telecomunicaciones"
  },
  {
    icon: <Heart size={32} />,
    title: "Salud",
    description: "Tecnología especializada para el sector salud"
  },
  {
    icon: <Shield size={32} />,
    title: "Defensa",
    description: "Soluciones tecnológicas de alto nivel de seguridad"
  }
];

const partnerLogos = [
  { src: microsoftLogo, alt: "Microsoft" },
  { src: intelLogo, alt: "Intel" },
  { src: googleLogo, alt: "Google Partner" },
  { src: corsairLogo, alt: "Corsair" },
  { src: aocLogo, alt: "AOC" },
  { src: wdLogo, alt: "Western Digital" },
  { src: foxconnLogo, alt: "Foxconn" },
  { src: lexmarkLogo, alt: "Lexmark" }
];

const certifications = [
  { src: energyStarCert, alt: "Energy Star" },
  { src: ecoComputoCert, alt: "Eco Cómputo" },
  { src: sgsCert, alt: "SGS ISO 9001" },
  { src: wifiCert, alt: "Wi-Fi Certified" },
  { src: ceCert, alt: "CE" },
  { src: rohsCert, alt: "RoHS" },
  { src: fcCert, alt: "FC" },
  { src: ulCert, alt: "UL" },
  { src: googleMobileCert, alt: "Google Mobile Service Certified" },
  { src: crcCert, alt: "CRC - Homologación Equipo Terminal" }
];

export const MarketLines = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-sm font-black text-[#1a4b8c] uppercase tracking-[0.2em] mb-4"
          >
            Sectores que Atendemos
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold text-slate-900 font-poppins"
          >
            Nuestras Líneas de Mercado
          </motion.h3>
        </div>

        {/* Market Sectors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {marketSectors.map((sector, i) => (
            <motion.div
              key={sector.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all border border-slate-100 group"
            >
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 text-[#1a4b8c] group-hover:bg-[#1a4b8c] group-hover:text-white transition-colors">
                {sector.icon}
              </div>
              <h4 className="text-2xl font-bold text-slate-900 mb-3 font-poppins">{sector.title}</h4>
              <p className="text-slate-600 leading-relaxed">{sector.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Innovation Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-br from-[#1a4b8c] to-blue-700 p-12 md:p-16 rounded-[2.5rem] mb-24 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
            <svg width="100%" height="100%" fill="none" viewBox="0 0 100 100" preserveAspectRatio="none">
              <pattern id="innovation-grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" stroke="white" strokeWidth="0.5"/>
              </pattern>
              <rect width="100%" height="100%" fill="url(#innovation-grid)" />
            </svg>
          </div>
          
          <div className="relative z-10 max-w-4xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center text-white">
                <Lightbulb size={32} />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-white font-poppins">
                Equipo de Innovación y Diseño
              </h3>
            </div>
            <p className="text-blue-50 text-lg leading-relaxed">
              Desde el año 2014 se han realizado varios proyectos de calidad internacional en la creación de nuevos productos diseñados para el área comercial y de gobierno. Actualmente el grupo trabaja de manera sincronizada con las nuevas necesidades del mercado.
            </p>
          </div>
        </motion.div>

        {/* Partner Logos Section */}
        <div className="text-center mb-12">
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-sm font-black text-[#1a4b8c] uppercase tracking-[0.2em] mb-4"
          >
            Nuestros Aliados
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-2xl md:text-3xl font-bold text-slate-900 font-poppins"
          >
            Trabajamos con las Mejores Marcas
          </motion.p>
        </div>

        {/* Partner Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24">
          {partnerLogos.map((logo, i) => (
            <motion.div
              key={logo.alt}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all border border-slate-100 flex items-center justify-center"
            >
              <img 
                src={logo.src} 
                alt={logo.alt} 
                className="max-w-full h-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                style={{ maxHeight: '60px' }}
              />
            </motion.div>
          ))}
        </div>

        {/* Certifications Section */}
        <div className="text-center mb-16">
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-sm font-black text-[#1a4b8c] uppercase tracking-[0.2em] mb-4"
          >
            Certificaciones
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-2xl md:text-3xl font-bold text-slate-900 font-poppins"
          >
            Calidad y Compromiso Certificados
          </motion.p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 md:gap-12">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.alt}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              whileHover={{ scale: 1.08, y: -8, transition: { duration: 0.3 } }}
              className="bg-white p-4 rounded-2xl shadow-lg hover:shadow-2xl transition-all border border-slate-100 flex items-center justify-center aspect-square"
            >
              <img 
                src={cert.src} 
                alt={cert.alt} 
                className="max-w-full h-auto object-contain"
                style={{ maxHeight: '110px', width: '100%' }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};