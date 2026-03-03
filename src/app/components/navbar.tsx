import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import logo from "@/assets/logos/pcsmart-logo.png";
import smartecLogo from "@/assets/logos/smartec.png";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] =
    useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Inicio", href: "#" },
    { name: "Nosotros", href: "#about" },
    { name: "Misión y Visión", href: "#mission" },
    { name: "Catálogo", href: "#catalog" },
    { name: "Clientes", href: "#clients" },
    { name: "Marketing", href: "#marketing" },
    { name: "Contacto", href: "#contact" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 md:px-12 py-2",
        isScrolled
          ? "bg-white/80 backdrop-blur-md border-b border-gray-100 py-2 shadow-sm"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img src={logo} alt="PC Smart" className="h-24 md:h-28" />
          <div className="h-12 md:h-16 w-px bg-[#1a4b8c]" />
          <img
            src={smartecLogo}
            alt="Smartec"
            className="h-16 md:h-20 object-contain"
          />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-700 hover:text-[#1a4b8c] transition-colors"
            >
              {link.name}
            </a>
          ))}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#1a4b8c] text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-[#133a6e] transition-colors"
          >
            Ver Catálogo
          </motion.button>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-2 text-gray-700"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X size={24} />
          ) : (
            <Menu size={24} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white absolute top-full left-0 right-0 border-b border-gray-100 overflow-hidden shadow-xl"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium text-gray-800 flex items-center justify-between group"
                >
                  {link.name}
                  <ChevronRight
                    size={18}
                    className="text-gray-400 group-hover:text-[#1a4b8c] transition-colors"
                  />
                </a>
              ))}
              <button className="mt-4 bg-[#1a4b8c] text-white py-4 rounded-xl font-bold">
                Contáctanos
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};