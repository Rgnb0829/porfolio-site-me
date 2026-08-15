'use client';

import React, { useState } from 'react';
import { useApp } from '@/context/AppContext';
import { CheckCircle, ArrowRight } from 'lucide-react';

export default function Methodology() {
  const { methodologySteps, t } = useApp();
  const [activeStep, setActiveStep] = useState(0);

  // Safety check if active step is out of bounds on language change
  const currentStep = methodologySteps[activeStep] || methodologySteps[0];

  return (
    <section id="methodology" className="py-20 border-b border-[#D1CECA] bg-[#F5F2ED]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#D1CECA] pb-8 mb-12 gap-4">
          <div>
            <span className="block text-[10px] uppercase tracking-[0.25em] text-[#1A1A1A]/60 mb-2 font-bold font-mono">
              {t.methodology.numLabel}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif italic font-bold text-[#1A1A1A]">
              {t.methodology.heading}
            </h2>
          </div>
          <p className="text-sm text-[#1A1A1A]/70 max-w-md leading-relaxed font-sans">
            {t.methodology.subheading}
          </p>
        </div>

        {/* Methodology Interactive Workspace */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Timeline Selector (Left side) */}
          <div className="lg:col-span-5 space-y-3">
            <span className="block text-[10px] uppercase tracking-widest text-[#1A1A1A]/50 font-bold mb-4 font-mono">
              {t.methodology.stepSelectLabel}
            </span>

            {methodologySteps.map((stepItem, idx) => {
              const isActive = activeStep === idx;
              return (
                <button
                  key={stepItem.step || idx}
                  onClick={() => setActiveStep(idx)}
                  className={`w-full text-left p-5 transition-all flex items-start justify-between border ${
                    isActive
                      ? 'bg-[#1A1A1A] text-[#F5F2ED] border-[#1A1A1A] shadow-md'
                      : 'bg-[#EBE7E0] text-[#1A1A1A] border-[#D1CECA] hover:border-[#1A1A1A]'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <span className={`text-xs font-mono font-bold mt-0.5 ${isActive ? 'text-[#F5F2ED]/60' : 'text-[#1A1A1A]/40'}`}>
                      {stepItem.step}
                    </span>
                    <div>
                      <h3 className={`text-base font-serif italic font-bold ${isActive ? 'text-[#F5F2ED]' : 'text-[#1A1A1A]'}`}>
                        {stepItem.phase}
                      </h3>
                      <p className={`text-xs mt-1 line-clamp-1 font-sans ${isActive ? 'text-[#F5F2ED]/70' : 'text-[#1A1A1A]/70'}`}>
                        {stepItem.title}
                      </p>
                    </div>
                  </div>
                  <ArrowRight className={`w-4 h-4 mt-1 shrink-0 ${isActive ? 'text-[#F5F2ED]' : 'opacity-0'}`} />
                </button>
              );
            })}
          </div>

          {/* Detailed Content Display (Right side) */}
          <div className="lg:col-span-7 bg-[#EBE7E0] border border-[#D1CECA] p-8 sm:p-10 relative">
            
            <div className="flex items-center justify-between border-b border-[#D1CECA] pb-6 mb-8">
              <div className="flex items-center gap-3">
                <span className="text-xl sm:text-2xl font-serif italic font-bold text-[#1A1A1A]">
                  Phase {currentStep.step}: {currentStep.phase}
                </span>
              </div>
              <span className="text-xs font-mono font-bold bg-[#F5F2ED] px-3 py-1 border border-[#D1CECA] text-[#1A1A1A]">
                {t.methodology.structuredBadge}
              </span>
            </div>

            <p className="text-base text-[#1A1A1A]/80 leading-relaxed font-sans mb-8">
              {currentStep.description}
            </p>

            {/* Deliverables Checklist */}
            <div className="space-y-4 mb-8">
              <h4 className="text-xs uppercase tracking-widest font-bold text-[#1A1A1A] font-mono">
                {t.methodology.deliverablesLabel}
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {currentStep.deliverables.map((item, i) => (
                  <div key={i} className="flex items-center gap-3 bg-[#F5F2ED] p-3 border border-[#D1CECA]">
                    <CheckCircle className="w-4 h-4 text-[#1A1A1A] shrink-0" />
                    <span className="text-xs font-semibold text-[#1A1A1A] font-sans">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Mindset Quote Box */}
            <div className="border-l-2 border-[#1A1A1A] pl-4 py-2 bg-[#F5F2ED]/50">
              <span className="block text-[10px] uppercase tracking-widest font-bold text-[#1A1A1A]/60 font-mono">
                {t.methodology.mindsetLabel}
              </span>
              <p className="text-xs italic font-serif text-[#1A1A1A] mt-1 font-bold">
                &ldquo;{currentStep.mindset}&rdquo;
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
