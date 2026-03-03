import React from 'react';
import { motion } from 'motion/react';
import { Navbar } from '@/app/components/navbar';
import { Hero } from '@/app/components/hero';
import { AboutUs } from '@/app/components/about-us';
import { MissionVision } from '@/app/components/mission-vision';
import { Catalog } from '@/app/components/catalog';
import { MarketLines } from '@/app/components/market-lines';
import { Stats } from '@/app/components/stats';
import { Clients } from '@/app/components/clients';
import { MarketingServices } from '@/app/components/marketing-services';
import { CTA } from '@/app/components/cta';
import { Footer } from '@/app/components/footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white font-inter selection:bg-blue-100 selection:text-[#1a4b8c]">
      {/* Navigation */}
      <Navbar />
      
      <main>
        {/* Sections */}
        <Hero />
        
        <div id="about">
          <AboutUs />
        </div>
        
        <MissionVision />
        
        <Catalog />
        
        <MarketLines />
        
        <Stats />
        
        <Clients />
        
        <MarketingServices />

        <CTA />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}