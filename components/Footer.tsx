'use client';

import React from 'react';
import { useApp } from '@/context/AppContext';
import { ArrowUp } from 'lucide-react';
import SocialLinks from './SocialLinks';

export default function Footer() {
  const { personalInfo, t } = useApp();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="bg-[#1A1A1A] text-[#F5F2ED] pt-16 pb-12 border-t border-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-[#F5F2ED]/20">
          
          {/* Brand Col & Social Profiles */}
          <div className="md:col-span-2 space-y-4">
            <h2 className="text-3xl font-serif italic font-bold text-[#F5F2ED]">
              {personalInfo.name}.
            </h2>
            <p className="text-xs text-[#F5F2ED]/70 leading-relaxed max-w-sm font-sans">
              {t.footer.tagline}
            </p>
            
            {/* Accessible Social Links */}
            <div className="pt-2">
              <span className="block text-[10px] uppercase font-mono tracking-widest text-[#F5F2ED]/50 font-bold mb-2">
                Network & Profiles
              </span>
              <SocialLinks variant="footer" showLabels={true} />
            </div>
          </div>

          {/* Quick Nav */}
          <div>
            <span className="block text-[10px] uppercase font-mono tracking-widest text-[#F5F2ED]/40 font-bold mb-4">
              {t.footer.navHeader}
            </span>
            <ul className="space-y-2 text-xs font-sans text-[#F5F2ED]/80 font-medium">
              <li><a href="#principles" className="hover:text-white transition-colors">{t.nav.principles}</a></li>
              <li><a href="#methodology" className="hover:text-white transition-colors">{t.nav.methodology}</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">{t.nav.services}</a></li>
              <li><a href="#projects" className="hover:text-white transition-colors">{t.nav.projects}</a></li>
              <li><a href="#calculator" className="hover:text-white transition-colors">{t.nav.calculator}</a></li>
              <li><a href="#experience" className="hover:text-white transition-colors">{t.nav.experience}</a></li>
              <li><a href="#notes" className="hover:text-white transition-colors">{t.nav.notes}</a></li>
            </ul>
          </div>

          {/* Direct Contact */}
          <div>
            <span className="block text-[10px] uppercase font-mono tracking-widest text-[#F5F2ED]/40 font-bold mb-4">
              {t.footer.contactHeader}
            </span>
            <p className="text-xs text-[#F5F2ED]/80 leading-relaxed mb-4">
              {t.footer.contactText}
            </p>
            <a
              href={`mailto:${personalInfo.email}`}
              className="text-sm font-serif italic font-bold border-b border-[#F5F2ED] inline-block pb-0.5 hover:opacity-80"
            >
              {personalInfo.email}
            </a>
          </div>

        </div>

        {/* Bottom copyright & Scroll back to top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#F5F2ED]/50 font-mono gap-4">
          <div>
            © {new Date().getFullYear()} {personalInfo.name}. {t.footer.rights}
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 hover:text-[#F5F2ED] transition-colors bg-[#F5F2ED]/10 px-3 py-1.5 border border-[#F5F2ED]/20"
          >
            <span>{t.footer.backToTop}</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
