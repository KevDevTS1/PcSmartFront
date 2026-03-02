import React from 'react';
import { motion } from 'motion/react';
import minSaludLogo from '@/assets/logos/minsalud.png';
import minTicLogo from '@/assets/logos/mintic.png';
import minEducacionLogo from '@/assets/logos/mineducacion.png';
import minDefensaLogo from '@/assets/logos/mindefensa.png';
import computadoresEducarLogo from '@/assets/logos/computadores-educar.png';
import gobCundinamarcaLogo from '@/assets/logos/gob-cundinamarca.png';
import gobCordobaLogo from '@/assets/logos/gob-cordoba.png';
import fiscaliaLogo from '@/assets/logos/fiscalia.png';
import alcaldiaBogotaLogo from '@/assets/logos/alcaldia-bogota.png';
import policiaNacionalLogo from '@/assets/logos/policia-nacional.png';
import senaLogo from '@/assets/logos/sena.png';
import panamericanaLogo from '@/assets/logos/panamericana.png';
import ktronixLogo from '@/assets/logos/ktronix.png';
import exitoLogo from '@/assets/logos/exito.png';
import falabellaLogo from '@/assets/logos/falabella.png';
import jumboMetroLogo from '@/assets/logos/jumbo-metro.png';
import alkostoLogo from '@/assets/logos/alkosto.png';
import flamingoLogo from '@/assets/logos/flamingo.png';
import alkomprarLogo from '@/assets/logos/alkomprar.png';
import laPolarLogo from '@/assets/logos/la-polar.png';
import s10Logo from '@/assets/logos/s10.png';
import officeDepotLogo from '@/assets/logos/office-depot.png';

const governmentClients = [
  { src: minSaludLogo, alt: "Ministerio de Salud y Protección Social" },
  { src: minTicLogo, alt: "Ministerio de Tecnologías de la Información y las Comunicaciones" },
  { src: minEducacionLogo, alt: "Ministerio de Educación Nacional" },
  { src: minDefensaLogo, alt: "Ministerio de Defensa Nacional" },
  { src: computadoresEducarLogo, alt: "Computadores para Educar" },
  { src: gobCundinamarcaLogo, alt: "Gobernación de Cundinamarca" },
  { src: gobCordobaLogo, alt: "Gobernación de Córdoba" },
  { src: fiscaliaLogo, alt: "Fiscalía General de la Nación" },
  { src: alcaldiaBogotaLogo, alt: "Alcaldía Mayor de Bogotá D.C." },
  { src: policiaNacionalLogo, alt: "Policía Nacional de Colombia" },
  { src: senaLogo, alt: "SENA - Servicio Nacional de Aprendizaje" }
];

const retailClients = [
  { src: panamericanaLogo, alt: "Panamericana" },
  { src: ktronixLogo, alt: "Ktronix" },
  { src: exitoLogo, alt: "Éxito" },
  { src: falabellaLogo, alt: "Falabella" },
  { src: jumboMetroLogo, alt: "Jumbo y Metro" },
  { src: alkostoLogo, alt: "Alkosto" },
  { src: flamingoLogo, alt: "Flamingo" },
  { src: alkomprarLogo, alt: "Alkomprar" },
  { src: laPolarLogo, alt: "La Polar" },
  { src: s10Logo, alt: "S10" },
  { src: officeDepotLogo, alt: "Office Depot" }
];

export const Clients = () => {
  return (
    <section id="clients" className="py-24 bg-white overflow-hidden">
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
            Nuestros Clientes
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold text-slate-900 font-poppins"
          >
            Confianza que Trasciende
          </motion.h3>
        </div>

        {/* Government Sector */}
        <div className="mb-12">
          <motion.h4 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl font-bold text-slate-900 mb-8 font-poppins"
          >
            Gobierno
          </motion.h4>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {governmentClients.map((client, i) => (
              <motion.div
                key={client.alt}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all border border-slate-100 flex items-center justify-center aspect-[3/2]"
              >
                <img 
                  src={client.src} 
                  alt={client.alt} 
                  className="max-w-full h-auto object-contain"
                  style={{ maxHeight: '120px' }}
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Retail Sector */}
        <div className="mb-12">
          <motion.h4 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl font-bold text-slate-900 mb-8 font-poppins"
          >
            Grandes Superficies
          </motion.h4>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {retailClients.map((client, i) => (
              <motion.div
                key={client.alt}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all border border-slate-100 flex items-center justify-center aspect-[3/2]"
              >
                <img 
                  src={client.src} 
                  alt={client.alt} 
                  className="max-w-full h-auto object-contain"
                  style={{ maxHeight: '120px' }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};