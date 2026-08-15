'use client';

import React from 'react';
import { Quote } from 'lucide-react';
import { useApp } from '@/context/AppContext';

export default function StatementBanner() {
  const { t } = useApp();

  return (
    <section id="statement-banner" className="w-full bg-[#1A1A1A] text-[#F5F2ED] py-14 px-6 sm:px-12 my-8 border-y border-[#1A1A1A]">
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
        <Quote className="w-8 h-8 text-[#F5F2ED]/30 mb-4" />
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif italic tracking-tight leading-snug max-w-3xl mb-6">
          &ldquo;{t.statement.quote}&rdquo;
        </h2>
        <div className="flex items-center gap-3">
          <div className="h-px w-8 bg-[#F5F2ED]/30"></div>
          <span className="text-xs uppercase tracking-[0.25em] font-bold text-[#F5F2ED]/70 font-sans">
            {t.statement.author} — {t.statement.role}
          </span>
          <div className="h-px w-8 bg-[#F5F2ED]/30"></div>
        </div>
      </div>
    </section>
  );
}
