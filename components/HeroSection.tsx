'use client';

import React from 'react';
import { motion, Variants } from 'motion/react';
import { ArrowDownRight, Sparkles, Award } from 'lucide-react';
import { useApp } from '@/context/AppContext';

export default function HeroSection() {
  const { personalInfo, corePrinciples, t } = useApp();

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.215, 0.61, 0.355, 1],
      },
    },
  };

  return (
    <section id="hero-section" className="pt-28 pb-16 lg:pt-36 lg:pb-20 border-b border-[#D1CECA] bg-[#F5F2ED]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Top Status Bar */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="flex flex-col sm:flex-row justify-between items-start sm:items-baseline border-b border-[#D1CECA] pb-5 mb-10 text-xs font-semibold tracking-[0.2em] uppercase text-[#1A1A1A]/70 gap-2"
        >
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
            <span>{personalInfo.title}</span>
          </div>
          <div className="flex items-center gap-4 text-[11px] text-[#1A1A1A]/60">
            <span>{personalInfo.status}</span>
            <span className="hidden md:inline">•</span>
            <span className="hidden md:inline font-mono">{personalInfo.location}</span>
          </div>
        </motion.div>

        {/* Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-16">
          
          {/* Main Title & Bio (Left Column) */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1 bg-[#EBE7E0] border border-[#D1CECA] text-[10px] uppercase tracking-widest font-bold text-[#1A1A1A] mb-6">
              <Sparkles className="w-3.5 h-3.5 text-[#1A1A1A]" />
              <span>{t.hero.badge}</span>
            </motion.div>

            <motion.h1 variants={itemVariants} className="text-5xl sm:text-7xl lg:text-[84px] leading-[0.92] font-serif italic text-[#1A1A1A] mb-8 -ml-1 tracking-tight">
              {personalInfo.name}.
            </motion.h1>

            <motion.p variants={itemVariants} className="text-lg sm:text-xl leading-relaxed text-[#1A1A1A]/80 max-w-2xl font-sans mb-10 whitespace-pre-line">
              {personalInfo.bio}
            </motion.p>

            {/* CTAs */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4">
              <a
                id="hero-primary-cta"
                href="#contact"
                className="px-8 py-4 bg-[#1A1A1A] text-[#F5F2ED] text-xs uppercase tracking-[0.2em] font-bold hover:bg-[#333333] transition-all flex items-center gap-3 shadow-md"
              >
                <span>{t.hero.ctaPrimary}</span>
                <ArrowDownRight className="w-4 h-4" />
              </a>

              <a
                id="hero-secondary-cta"
                href="#projects"
                className="px-8 py-4 border border-[#1A1A1A] text-[#1A1A1A] text-xs uppercase tracking-[0.2em] font-bold hover:bg-[#1A1A1A] hover:text-[#F5F2ED] transition-all flex items-center gap-2"
              >
                <span>{t.hero.ctaSecondary}</span>
              </a>
            </motion.div>

            {/* Quick Metrics */}
            <motion.div variants={itemVariants} className="mt-12 pt-8 border-t border-[#D1CECA] grid grid-cols-2 sm:grid-cols-4 gap-6">
              {personalInfo.stats.map((stat, i) => (
                <div key={i}>
                  <span className="block text-3xl font-serif italic font-bold text-[#1A1A1A]">{stat.value}</span>
                  <span className="text-[10px] uppercase tracking-widest text-[#1A1A1A]/60 font-semibold">{stat.label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Core Principles Grid (Right Column) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
            className="lg:col-span-5 bg-[#EBE7E0] border border-[#D1CECA] p-8 space-y-8"
          >
            <div className="flex items-center justify-between border-b border-[#D1CECA] pb-4">
              <span className="text-[10px] uppercase tracking-widest text-[#1A1A1A]/60 font-bold">
                {t.hero.principlesHeading}
              </span>
              <Award className="w-4 h-4 text-[#1A1A1A]/60" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-8">
              {corePrinciples.map((principle) => (
                <div key={principle.id} className="group">
                  <span className="block text-[10px] uppercase tracking-widest text-[#1A1A1A]/40 mb-1.5 font-bold font-mono">
                    {principle.number}
                  </span>
                  <h3 className="text-base font-serif font-bold italic text-[#1A1A1A] mb-1 group-hover:underline">
                    {principle.title}
                  </h3>
                  <p className="text-[11px] leading-relaxed text-[#1A1A1A]/70 font-sans">
                    {principle.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Quick Badge */}
            <div className="pt-4 border-t border-[#D1CECA] flex items-center justify-between text-xs text-[#1A1A1A]/70">
              <span className="font-serif italic">Systematic Approach</span>
              <span className="font-mono text-[10px] uppercase tracking-wider font-semibold bg-[#F5F2ED] px-2 py-0.5 border border-[#D1CECA]">
                {t.hero.verified}
              </span>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}


