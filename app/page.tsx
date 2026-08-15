'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import CorePrinciples from '@/components/CorePrinciples';
import StatementBanner from '@/components/StatementBanner';
import Methodology from '@/components/Methodology';
import SolutionsShowcase from '@/components/SolutionsShowcase';
import CaseStudies from '@/components/CaseStudies';
import ROICalculator from '@/components/ROICalculator';
import CareerNarrative from '@/components/CareerNarrative';
import ContactForm from '@/components/ContactForm';
import NotesSection from '@/components/NotesSection';
import Footer from '@/components/Footer';
import SectionWrapper from '@/components/SectionWrapper';
import CustomCursor from '@/components/CustomCursor';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F5F2ED] text-[#1A1A1A] selection:bg-[#1A1A1A] selection:text-[#F5F2ED]">
      <CustomCursor />
      <Navbar />
      <main id="main-content">
        <HeroSection />
        
        <SectionWrapper>
          <CorePrinciples />
        </SectionWrapper>

        <SectionWrapper>
          <StatementBanner />
        </SectionWrapper>

        <SectionWrapper>
          <Methodology />
        </SectionWrapper>

        <SectionWrapper>
          <SolutionsShowcase />
        </SectionWrapper>

        <SectionWrapper>
          <CaseStudies />
        </SectionWrapper>

        <SectionWrapper>
          <ROICalculator />
        </SectionWrapper>

        <SectionWrapper>
          <CareerNarrative />
        </SectionWrapper>

        <SectionWrapper>
          <ContactForm />
        </SectionWrapper>

        <SectionWrapper>
          <NotesSection />
        </SectionWrapper>
      </main>
      <Footer />
    </div>
  );
}

