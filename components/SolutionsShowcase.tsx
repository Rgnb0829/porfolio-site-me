'use client';

import React, { useState } from 'react';
import { useApp } from '@/context/AppContext';
import { Check, ArrowRight } from 'lucide-react';

export default function SolutionsShowcase() {
  const { services, t } = useApp();
  const [selectedService, setSelectedService] = useState<string>(services[0].id);

  const activeService = services.find(s => s.id === selectedService) || services[0];

  return (
    <section id="services" className="py-20 border-b border-[#D1CECA] bg-[#F5F2ED]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#D1CECA] pb-8 mb-12 gap-4">
          <div>
            <span className="block text-[10px] uppercase tracking-[0.25em] text-[#1A1A1A]/60 mb-2 font-bold font-mono">
              {t.services.numLabel}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif italic font-bold text-[#1A1A1A]">
              {t.services.heading}
            </h2>
          </div>
          <p className="text-sm text-[#1A1A1A]/70 max-w-md leading-relaxed font-sans">
            {t.services.subheading}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Services Selector (Left) */}
          <div className="lg:col-span-5 space-y-3">
            <span className="block text-[10px] uppercase tracking-widest text-[#1A1A1A]/50 font-bold mb-4 font-mono">
              Service Pillars:
            </span>

            {services.map((service, index) => {
              const isSelected = selectedService === service.id;
              return (
                <button
                  key={service.id}
                  onClick={() => setSelectedService(service.id)}
                  className={`w-full text-left p-5 transition-all border flex items-center justify-between ${
                    isSelected
                      ? 'bg-[#1A1A1A] text-[#F5F2ED] border-[#1A1A1A] shadow-md'
                      : 'bg-[#EBE7E0] text-[#1A1A1A] border-[#D1CECA] hover:border-[#1A1A1A]'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className={`text-xs font-mono font-bold ${isSelected ? 'text-[#F5F2ED]/60' : 'text-[#1A1A1A]/40'}`}>
                      0{index + 1}
                    </span>
                    <div>
                      <h3 className={`text-base font-serif italic font-bold ${isSelected ? 'text-[#F5F2ED]' : 'text-[#1A1A1A]'}`}>
                        {service.title}
                      </h3>
                      <span className={`text-[10px] uppercase font-mono tracking-wider ${isSelected ? 'text-[#F5F2ED]/70' : 'text-[#1A1A1A]/60'}`}>
                        Role: {service.role}
                      </span>
                    </div>
                  </div>
                  <ArrowRight className={`w-4 h-4 ${isSelected ? 'text-[#F5F2ED]' : 'opacity-0'}`} />
                </button>
              );
            })}
          </div>

          {/* Service Detailed View (Right) */}
          <div className="lg:col-span-7 bg-[#EBE7E0] border border-[#D1CECA] p-8 sm:p-10 space-y-8">
            <div className="border-b border-[#D1CECA] pb-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2 gap-2">
                <span className="text-[10px] uppercase font-mono font-bold bg-[#F5F2ED] text-[#1A1A1A] px-3 py-1 border border-[#D1CECA] shrink-0">
                  {activeService.role}
                </span>
                <span className="text-xs font-mono text-[#1A1A1A]/60">
                  {t.services.outcomeLabel} {activeService.outcome}
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-serif italic font-bold text-[#1A1A1A] mb-3">
                {activeService.title}
              </h2>

              <p className="text-sm text-[#1A1A1A]/80 leading-relaxed font-sans">
                {activeService.description}
              </p>
            </div>

            {/* Capabilities List */}
            <div>
              <span className="block text-[10px] uppercase tracking-widest text-[#1A1A1A]/50 font-bold mb-4 font-mono">
                {t.services.capabilitiesLabel}
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {activeService.capabilities.map((cap, idx) => (
                  <div key={idx} className="flex items-center gap-3 bg-[#F5F2ED] p-3.5 border border-[#D1CECA]">
                    <Check className="w-4 h-4 text-[#1A1A1A] shrink-0" />
                    <span className="text-xs font-semibold text-[#1A1A1A] font-sans">{cap}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Ideal For Callout */}
            <div className="border-l-2 border-[#1A1A1A] pl-4 py-3 bg-[#F5F2ED]">
              <span className="block text-[10px] uppercase tracking-widest font-bold text-[#1A1A1A]/60 font-mono">
                {t.services.idealForLabel}
              </span>
              <p className="text-xs font-serif italic text-[#1A1A1A] mt-1 font-bold">
                {activeService.idealFor}
              </p>
            </div>

            {/* CTA */}
            <div className="pt-4 border-t border-[#D1CECA] flex justify-end">
              <a
                href="#contact"
                className="px-6 py-3 bg-[#1A1A1A] text-[#F5F2ED] text-xs font-bold uppercase tracking-widest hover:bg-[#333333] transition-all flex items-center gap-2"
              >
                <span>{t.nav.contactBtn}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
