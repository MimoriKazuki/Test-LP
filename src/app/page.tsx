'use client';

import './globals.css';
import Hero from '@/components/landing/Hero';
import Services from '@/components/landing/Services';
import Features from '@/components/landing/Features';
import ExpertSection from '@/components/landing/ExpertSection';
import Pricing from '@/components/landing/Pricing';
import CaseStudies from '@/components/landing/CaseStudies';
import FAQ from '@/components/landing/FAQ';
import Contact from '@/components/landing/Contact';
import Header from '@/components/landing/Header';
import Footer from '@/components/landing/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Services />
        <Features />
        <ExpertSection />
        <Pricing />
        <CaseStudies />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}