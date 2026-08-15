'use client';

import React from 'react';
import { useApp } from '@/context/AppContext';

export default function CareerNarrative() {
  const { careerNarrative, t } = useApp();

  return (
    <section id="experience" className="py-20 border-b border-[#D1CECA] bg-[#F5F2ED]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#D1CECA] pb-8 mb-12 gap-4">
          <div>
            <span className="block text-[10px] uppercase tracking-[0.25em] text-[#1A1A1A]/60 mb-2 font-bold font-mono">
              {t.career.numLabel}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif italic font-bold text-[#1A1A1A]">
              {t.career.heading}
            </h2>
          </div>
          <p className="text-sm text-[#1A1A1A]/70 max-w-md leading-relaxed font-sans">
            {t.career.subheading}
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-8">
          <span className="block text-[10px] uppercase tracking-widest text-[#1A1A1A]/50 font-bold mb-4 font-mono">
            {t.career.listLabel}
          </span>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {careerNarrative.map((exp, idx) => (
              <div key={exp.id} className="bg-[#EBE7E0] border border-[#D1CECA] p-8 space-y-6 hover:border-[#1A1A1A] transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between border-b border-[#D1CECA] pb-4 mb-4">
                    <span className="text-[10px] font-mono font-bold uppercase text-[#1A1A1A]/50">
                      0{idx + 1} / {exp.period}
                    </span>
                    <span className="text-[10px] font-mono font-bold bg-[#F5F2ED] px-2 py-0.5 border border-[#D1CECA] text-[#1A1A1A]">
                      {exp.location}
                    </span>
                  </div>

                  <h3 className="text-xl font-serif italic font-bold text-[#1A1A1A] mb-1">
                    {exp.role}
                  </h3>

                  <div className="text-xs font-mono font-semibold text-[#1A1A1A]/70 mb-4">
                    {exp.organization}
                  </div>

                  <p className="text-xs text-[#1A1A1A]/80 leading-relaxed font-sans mb-6">
                    {exp.narrative}
                  </p>

                  {/* Key Milestones */}
                  <div className="space-y-2 mb-6">
                    <span className="block text-[10px] uppercase font-mono tracking-widest text-[#1A1A1A]/50 font-bold">
                      {t.career.milestonesLabel}
                    </span>
                    <ul className="space-y-1.5 text-xs text-[#1A1A1A]/90">
                      {exp.keyMilestones.map((ms, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="font-mono font-bold text-[#1A1A1A]">→</span>
                          <span>{ms}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Skills Applied Badges */}
                <div className="pt-4 border-t border-[#D1CECA]">
                  <div className="flex flex-wrap gap-1.5">
                    {exp.skillsApplied.map((skill) => (
                      <span key={skill} className="text-[10px] font-mono font-semibold bg-[#F5F2ED] text-[#1A1A1A] px-2 py-0.5 border border-[#D1CECA]">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            ))}
          </div>

          {/* Download CV Banner */}
          <div className="bg-[#1A1A1A] text-[#F5F2ED] p-8 flex flex-col sm:flex-row items-center justify-between gap-6 my-8">
            <div>
              <span className="block text-[10px] uppercase font-mono tracking-widest text-[#F5F2ED]/60 font-bold mb-1">
                {t.career.cvBadge}
              </span>
              <h3 className="text-xl sm:text-2xl font-serif italic font-bold">
                {t.career.cvHeading}
              </h3>
              <p className="text-xs text-[#F5F2ED]/70 font-sans mt-1">
                {t.career.cvSubtext}
              </p>
            </div>

            <button
              onClick={() => alert('Downloading CV Rakhawn (PDF)...')}
              className="px-8 py-3.5 bg-[#F5F2ED] text-[#1A1A1A] text-xs font-bold uppercase tracking-widest hover:bg-white transition-all shrink-0"
            >
              {t.career.cvBtn}
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
