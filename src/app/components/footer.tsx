import React from 'react';
import { motion } from 'motion/react';
import logo from "@/assets/logos/pcsmart-logo.png";
import smartecLogo from "@/assets/logos/smartec.png";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer id="contact" className="bg-white pt-24 pb-12 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-16 mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-1"
          >
            <div className="flex items-center gap-4 mb-8">
              <motion.img 
                src={logo} 
                alt="PC Smart" 
                className="h-20 w-auto object-contain"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
              <div className="h-10 md:h-12 w-px bg-[#1a4b8c]" />
              <motion.img 
                src={smartecLogo} 
                alt="Smartec" 
                className="h-16 w-auto object-contain"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
            </div>
            <p className="text-gray-600 mb-8 max-w-xs leading-relaxed">
              Elevando el potencial empresarial a través de soluciones de computación avanzadas e infraestructura de hardware premium.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, idx) => (
                <motion.a
                  key={idx}
                  href="#"
                  initial={{ opacity: 0, scale: 0, color: "#9ca3af" }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + (idx * 0.1) }}
                  whileHover={{ scale: 1.2, color: "#1a4b8c" }}
                  className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center hover:bg-blue-50 transition-colors"
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <div>
            <h4 className="font-bold text-[#0a1e3b] mb-8 font-poppins">Enlaces Rápidos</h4>
            <ul className="space-y-4">
              {['Inicio', 'Nosotros', 'Catálogo', 'Servicios', 'Clientes'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-600 hover:text-[#1a4b8c] transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-[#0a1e3b] mb-8 font-poppins">Soluciones</h4>
            <ul className="space-y-4">
              {['Estaciones de Trabajo', 'Servidores', 'Redes', 'Periféricos', 'Consultoría TI'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-600 hover:text-[#1a4b8c] transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-[#0a1e3b] mb-8 font-poppins">Contáctanos</h4>
            <ul className="space-y-6">
              <li className="flex gap-4 items-start">
                <MapPin className="text-[#1a4b8c] shrink-0" size={20} />
                <span className="text-gray-600">Carrea 12 # 96 - 81 ( Piso 6) Bogotá, Colombia</span>
              </li>
              <li className="flex gap-4 items-center">
                <Phone className="text-[#1a4b8c] shrink-0" size={20} />
                <span className="text-gray-600">+(57) 312 471 89 95</span>
              </li>
              <li className="flex gap-4 items-center">
                <Mail className="text-[#1a4b8c] shrink-0" size={20} />
                <span className="text-gray-600">comercial@pcsmart.com.co</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-gray-500">
          <p>© 2026 PC Smart. Todos los derechos reservados.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-[#1a4b8c]">Política de Privacidad</a>
            <a href="#" className="hover:text-[#1a4b8c]">Términos de Servicio</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
