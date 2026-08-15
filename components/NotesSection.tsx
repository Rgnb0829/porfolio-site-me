'use client';

import React from 'react';
import { useApp } from '@/context/AppContext';
import { ArrowUpRight, BookOpen, MessageSquareQuote } from 'lucide-react';
import { motion } from 'motion/react';

export default function NotesSection() {
  const { recentNotes, t } = useApp();

  return (
    <section id="notes" className="py-20 border-b border-[#D1CECA] bg-[#EBE7E0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#D1CECA] pb-8 mb-12 gap-4">
          <div>
            <span className="block text-[10px] uppercase tracking-[0.25em] text-[#1A1A1A]/60 mb-2 font-bold font-mono">
              {t.notes.numLabel}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif italic font-bold text-[#1A1A1A]">
              {t.notes.heading}
            </h2>
          </div>
          <p className="text-sm text-[#1A1A1A]/70 max-w-md leading-relaxed font-sans">
            {t.notes.subheading}
          </p>
        </div>

        {/* Notes Grid Feed */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {recentNotes.map((note, idx) => (
            <motion.article
              key={note.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="bg-[#F5F2ED] border border-[#D1CECA] p-6 sm:p-8 hover:border-[#1A1A1A] transition-all flex flex-col justify-between group shadow-sm"
            >
              <div>
                <div className="flex items-center justify-between gap-4 mb-4 text-[11px] font-mono text-[#1A1A1A]/60 border-b border-[#D1CECA]/60 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 bg-[#EBE7E0] border border-[#D1CECA] font-semibold text-[#1A1A1A]">
                      {note.category}
                    </span>
                    <span>•</span>
                    <span>{note.date}</span>
                  </div>
                  <span className="text-[10px] uppercase tracking-wider font-semibold">
                    {note.readTime}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-serif italic font-bold text-[#1A1A1A] mb-3 group-hover:text-[#333333] transition-colors leading-snug">
                  {note.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#1A1A1A]/75 leading-relaxed font-sans mb-6">
                  {note.snippet}
                </p>
              </div>

              <div className="pt-4 border-t border-[#D1CECA]/60 flex items-center justify-between text-xs font-mono font-bold text-[#1A1A1A]">
                <span className="flex items-center gap-1.5 group-hover:translate-x-1 transition-transform">
                  <BookOpen className="w-3.5 h-3.5 text-[#1A1A1A]/70" />
                  <span>{t.notes.readBtn}</span>
                </span>
                <ArrowUpRight className="w-4 h-4 text-[#1A1A1A]/50 group-hover:text-[#1A1A1A] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </div>
            </motion.article>
          ))}
        </div>

        {/* Journal Substation Banner */}
        <div className="p-6 bg-[#1A1A1A] text-[#F5F2ED] flex flex-col sm:flex-row items-center justify-between gap-4 border border-[#1A1A1A]">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-[#F5F2ED]/10 border border-[#F5F2ED]/20 hidden sm:block">
              <MessageSquareQuote className="w-5 h-5 text-[#F5F2ED]" />
            </div>
            <div>
              <h4 className="text-sm font-serif italic font-bold">{t.notes.bannerHeading}</h4>
              <p className="text-xs text-[#F5F2ED]/70 font-sans">
                {t.notes.bannerSubtext}
              </p>
            </div>
          </div>
          <a
            href="mailto:creative.rakhawn@gmail.com?subject=Tanya%20Diskusi%20Catatan%20Produk"
            className="shrink-0 px-5 py-2.5 bg-[#F5F2ED] text-[#1A1A1A] text-xs font-mono font-bold uppercase tracking-wider hover:bg-[#EBE7E0] transition-colors"
          >
            {t.notes.bannerBtn}
          </a>
        </div>

      </div>
    </section>
  );
}
