'use client';

import React from 'react';
import { useApp } from '@/context/AppContext';
import { Compass, Lightbulb, ShieldCheck, Clock } from 'lucide-react';

export default function CorePrinciples() {
  const { corePrinciples, t } = useApp();
  const icons = [Compass, Lightbulb, ShieldCheck, Clock];

  return (
    <section id="principles" className="py-20 border-b border-[#D1CECA] bg-[#F5F2ED]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#D1CECA] pb-8 mb-12 gap-4">
          <div>
            <span className="block text-[10px] uppercase tracking-[0.25em] text-[#1A1A1A]/60 mb-2 font-bold font-mono">
              {t.principles.numLabel}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif italic font-bold text-[#1A1A1A]">
              {t.principles.heading}
            </h2>
          </div>
          <p className="text-sm text-[#1A1A1A]/70 max-w-md leading-relaxed font-sans">
            {t.principles.subheading}
          </p>
        </div>

        {/* Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {corePrinciples.map((principle, index) => {
            const Icon = icons[index % icons.length];
            return (
              <div
                key={principle.id}
                className="bg-[#EBE7E0] border border-[#D1CECA] p-6 hover:border-[#1A1A1A] transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-mono font-bold tracking-widest text-[#1A1A1A]/40 group-hover:text-[#1A1A1A] transition-colors">
                      {principle.number}
                    </span>
                    <div className="p-2 bg-[#F5F2ED] border border-[#D1CECA] group-hover:border-[#1A1A1A] transition-colors">
                      <Icon className="w-4 h-4 text-[#1A1A1A]" />
                    </div>
                  </div>

                  <h3 className="text-xl font-serif italic font-bold text-[#1A1A1A] mb-1 group-hover:underline">
                    {principle.title}
                  </h3>

                  <span className="block text-[11px] font-mono font-semibold text-[#1A1A1A]/60 mb-3">
                    {principle.subtitle}
                  </span>

                  <p className="text-xs text-[#1A1A1A]/80 leading-relaxed font-sans mb-6">
                    {principle.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#D1CECA]">
                  <span className="block text-[10px] uppercase tracking-widest text-[#1A1A1A]/50 font-semibold font-mono mb-1">
                    {t.principles.keyTakeaway}
                  </span>
                  <p className="text-[11px] font-serif italic text-[#1A1A1A]/90 font-medium leading-tight">
                    &ldquo;{principle.keyTakeaway}&rdquo;
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
