'use client';

import React, { useState } from 'react';
import { useApp } from '@/context/AppContext';
import { ArrowUpRight, ChevronRight, Quote } from 'lucide-react';

export default function CaseStudies() {
  const { featuredProjects, t } = useApp();
  const [selectedProjectId, setSelectedProjectId] = useState<string>(featuredProjects[0].id);

  const activeProject = featuredProjects.find(p => p.id === selectedProjectId) || featuredProjects[0];

  return (
    <section id="projects" className="py-20 border-b border-[#D1CECA] bg-[#F5F2ED]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#D1CECA] pb-8 mb-12 gap-4">
          <div>
            <span className="block text-[10px] uppercase tracking-[0.25em] text-[#1A1A1A]/60 mb-2 font-bold font-mono">
              {t.projects.numLabel}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif italic font-bold text-[#1A1A1A]">
              {t.projects.heading}
            </h2>
          </div>
          <p className="text-sm text-[#1A1A1A]/70 max-w-md leading-relaxed font-sans">
            {t.projects.subheading}
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Project List (Left) */}
          <div className="lg:col-span-5 space-y-4">
            <span className="block text-[10px] uppercase tracking-widest text-[#1A1A1A]/50 font-bold mb-4 font-mono">
              {t.projects.listLabel}
            </span>

            {featuredProjects.map((project, idx) => {
              const isSelected = selectedProjectId === project.id;
              return (
                <div
                  key={project.id}
                  onClick={() => setSelectedProjectId(project.id)}
                  className={`cursor-pointer p-6 transition-all border ${
                    isSelected
                      ? 'bg-[#1A1A1A] text-[#F5F2ED] border-[#1A1A1A] shadow-lg'
                      : 'bg-[#EBE7E0] text-[#1A1A1A] border-[#D1CECA] hover:border-[#1A1A1A]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className={`text-[10px] font-mono font-bold uppercase tracking-widest ${isSelected ? 'text-[#F5F2ED]/60' : 'text-[#1A1A1A]/50'}`}>
                      PROJECT 0{idx + 1} — {project.category}
                    </span>
                    <span className={`text-[10px] font-mono font-bold px-2 py-0.5 border ${
                      isSelected ? 'border-[#F5F2ED]/30 text-[#F5F2ED]' : 'border-[#D1CECA] bg-[#F5F2ED] text-[#1A1A1A]'
                    }`}>
                      {project.year}
                    </span>
                  </div>

                  <h3 className={`text-xl font-serif italic font-bold mb-2 ${isSelected ? 'text-[#F5F2ED]' : 'text-[#1A1A1A]'}`}>
                    {project.title}
                  </h3>

                  <p className={`text-xs line-clamp-2 leading-relaxed mb-4 ${isSelected ? 'text-[#F5F2ED]/80' : 'text-[#1A1A1A]/70'}`}>
                    {project.tagline}
                  </p>

                  <div className={`pt-3 border-t flex items-center justify-between text-[11px] font-semibold ${
                    isSelected ? 'border-[#F5F2ED]/20 text-[#F5F2ED]' : 'border-[#D1CECA] text-[#1A1A1A]'
                  }`}>
                    <span className="font-serif italic font-bold">Client: {project.client}</span>
                    <ChevronRight className={`w-4 h-4 ${isSelected ? 'text-[#F5F2ED]' : 'text-[#1A1A1A]'}`} />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Active Project View (Right) */}
          <div className="lg:col-span-7 bg-[#EBE7E0] border border-[#D1CECA] p-8 sm:p-10 space-y-8">
            
            {/* Header */}
            <div className="border-b border-[#D1CECA] pb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#1A1A1A]/60">
                  {activeProject.client} ({activeProject.year})
                </span>
                <span className="text-xs font-mono font-bold bg-[#1A1A1A] text-[#F5F2ED] px-3 py-1">
                  {activeProject.category}
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-serif italic font-bold text-[#1A1A1A] mb-3">
                {activeProject.title}
              </h2>

              <p className="text-sm text-[#1A1A1A]/80 leading-relaxed font-sans">
                {activeProject.summary}
              </p>
            </div>

            {/* Impact Metrics Banner */}
            <div className="bg-[#1A1A1A] text-[#F5F2ED] p-6 space-y-4">
              <span className="block text-[10px] uppercase tracking-widest text-[#F5F2ED]/60 font-mono font-bold">
                {t.projects.metricsLabel}
              </span>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {activeProject.impact.metrics.map((m, i) => (
                  <div key={i} className="border-l border-[#F5F2ED]/30 pl-3">
                    <span className="block text-2xl font-serif italic font-bold text-[#F5F2ED]">
                      {m.value}
                    </span>
                    <span className="text-[10px] uppercase font-sans text-[#F5F2ED]/80 font-semibold block">
                      {m.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Problem & Solution */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-[#F5F2ED] p-5 border border-[#D1CECA]">
                <span className="block text-[10px] uppercase tracking-widest font-bold text-[#1A1A1A]/60 font-mono mb-2">
                  {t.projects.problemLabel}
                </span>
                <p className="text-xs text-[#1A1A1A]/80 leading-relaxed mb-3">
                  {activeProject.problem.overview}
                </p>
                <ul className="space-y-1 text-[11px] text-[#1A1A1A]/70">
                  {activeProject.problem.keyPoints.map((pt, i) => (
                    <li key={i}>• {pt}</li>
                  ))}
                </ul>
              </div>

              <div className="bg-[#F5F2ED] p-5 border border-[#D1CECA]">
                <span className="block text-[10px] uppercase tracking-widest font-bold text-[#1A1A1A]/60 font-mono mb-2">
                  {t.projects.solutionLabel}
                </span>
                <p className="text-xs text-[#1A1A1A]/80 leading-relaxed mb-3">
                  {activeProject.solution.overview}
                </p>
                <ul className="space-y-1 text-[11px] text-[#1A1A1A]/70">
                  {activeProject.solution.keyPoints.map((pt, i) => (
                    <li key={i}>• {pt}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Testimonial if available */}
            {activeProject.testimonial && (
              <div className="border-l-2 border-[#1A1A1A] pl-4 py-3 bg-[#F5F2ED]/60">
                <Quote className="w-4 h-4 text-[#1A1A1A]/40 mb-1" />
                <p className="text-xs italic font-serif text-[#1A1A1A] font-bold">
                  &ldquo;{activeProject.testimonial.quote}&rdquo;
                </p>
                <span className="block text-[10px] font-mono text-[#1A1A1A]/60 mt-2 font-bold">
                  — {activeProject.testimonial.author}, {activeProject.testimonial.title} ({activeProject.testimonial.company})
                </span>
              </div>
            )}

            {/* Tech Stack & Action */}
            <div className="pt-4 border-t border-[#D1CECA] flex flex-wrap items-center justify-between gap-4">
              <div>
                <span className="block text-[10px] uppercase tracking-widest text-[#1A1A1A]/50 font-bold mb-2 font-mono">
                  {t.projects.techStackLabel}
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {activeProject.techStack.map((tech) => (
                    <span key={tech} className="text-[10px] font-mono font-semibold bg-[#F5F2ED] text-[#1A1A1A] px-2.5 py-0.5 border border-[#D1CECA]">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <a
                href="#contact"
                className="px-6 py-3 bg-[#1A1A1A] text-[#F5F2ED] text-xs font-bold uppercase tracking-widest hover:bg-[#333333] transition-all flex items-center gap-2"
              >
                <span>{t.nav.contactBtn}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
