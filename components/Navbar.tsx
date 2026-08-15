'use client';

import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Menu, X, Check, Moon, Sun, Globe } from 'lucide-react';
import { useApp } from '@/context/AppContext';

export default function Navbar() {
  const { theme, toggleTheme, lang, toggleLang, t, personalInfo } = useApp();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const navLinks = [
    { name: t.nav.principles, href: '#principles' },
    { name: t.nav.methodology, href: '#methodology' },
    { name: t.nav.services, href: '#services' },
    { name: t.nav.projects, href: '#projects' },
    { name: t.nav.calculator, href: '#calculator' },
    { name: t.nav.experience, href: '#experience' },
    { name: t.nav.notes, href: '#notes' },
  ];

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#F5F2ED]/90 backdrop-blur-md border-b border-[#D1CECA] py-3 shadow-sm'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between border-b border-[#D1CECA] pb-4">
          
          {/* Brand Mark */}
          <a
            href="#"
            id="nav-brand-logo"
            className="flex items-center gap-3 group text-[#1A1A1A] hover:opacity-80 transition-opacity"
          >
            <div className="w-9 h-9 rounded-full bg-[#1A1A1A] text-[#F5F2ED] flex items-center justify-center font-serif text-lg font-bold">
              R
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg tracking-tight font-bold text-[#1A1A1A]">
                {personalInfo.name}
              </span>
              <span className="text-[10px] tracking-[0.2em] uppercase font-semibold text-[#1A1A1A]/60 font-sans">
                Creative Director
              </span>
            </div>
          </a>

          {/* Desktop Links */}
          <nav id="desktop-nav-links" className="hidden lg:flex items-center gap-1 bg-[#EBE7E0] p-1.5 rounded-full border border-[#D1CECA]">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-1.5 text-xs uppercase tracking-wider font-bold text-[#1A1A1A]/70 hover:text-[#1A1A1A] hover:bg-[#F5F2ED] rounded-full transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Actions & Switchers */}
          <div className="hidden md:flex items-center gap-2 sm:gap-3">
            
            {/* Language Switcher (Discreet ID/EN Pill) */}
            <button
              id="lang-switcher-btn"
              onClick={toggleLang}
              className="px-2.5 py-1.5 bg-[#EBE7E0] border border-[#D1CECA] hover:border-[#1A1A1A] text-[#1A1A1A] text-xs font-mono font-bold flex items-center gap-1.5 transition-all"
              title={`Switch language to ${lang === 'ID' ? 'English' : 'Bahasa Indonesia'}`}
            >
              <Globe className="w-3.5 h-3.5 text-[#1A1A1A]/60" />
              <div className="flex items-center text-[11px] font-mono">
                <span className={lang === 'ID' ? 'text-[#1A1A1A] font-bold' : 'text-[#1A1A1A]/40'}>ID</span>
                <span className="text-[#1A1A1A]/30 mx-0.5">/</span>
                <span className={lang === 'EN' ? 'text-[#1A1A1A] font-bold' : 'text-[#1A1A1A]/40'}>EN</span>
              </div>
            </button>

            {/* Subtle Theme Switcher (Cream vs Midnight) */}
            <button
              id="theme-switcher-btn"
              onClick={toggleTheme}
              className="p-2 bg-[#EBE7E0] border border-[#D1CECA] hover:border-[#1A1A1A] text-[#1A1A1A] transition-all flex items-center justify-center"
              title={theme === 'cream' ? 'Switch to Midnight Dark Mode' : 'Switch to Editorial Cream Mode'}
              aria-label="Toggle Theme"
            >
              {theme === 'cream' ? (
                <Moon className="w-4 h-4 text-[#1A1A1A]/80 hover:text-[#1A1A1A]" />
              ) : (
                <Sun className="w-4 h-4 text-[#F5F2ED] hover:text-amber-300" />
              )}
            </button>

            <button
              id="copy-email-nav-btn"
              onClick={handleCopyEmail}
              className="hidden xl:flex text-xs text-[#1A1A1A]/70 hover:text-[#1A1A1A] px-3 py-2 rounded-none border border-[#1A1A1A]/20 hover:border-[#1A1A1A] transition-all items-center gap-1.5 bg-transparent"
              title="Salin alamat email"
            >
              {copiedEmail ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-700" />
                  <span className="text-emerald-800 font-bold font-mono text-[11px]">Tersalin!</span>
                </>
              ) : (
                <span className="font-mono text-[11px] font-semibold">{personalInfo.email}</span>
              )}
            </button>

            <a
              id="nav-cta-contact"
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-4 py-2 text-xs font-bold uppercase tracking-widest text-[#F5F2ED] bg-[#1A1A1A] hover:bg-[#333333] transition-all shadow-sm shrink-0"
            >
              <span>{t.nav.contactBtn}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Actions & Menu Toggle */}
          <div className="flex md:hidden items-center gap-2">
            {/* Language Toggle Mobile */}
            <button
              onClick={toggleLang}
              className="px-2 py-1.5 bg-[#EBE7E0] border border-[#D1CECA] text-[#1A1A1A] text-[11px] font-mono font-bold"
            >
              {lang}
            </button>

            {/* Theme Toggle Mobile */}
            <button
              onClick={toggleTheme}
              className="p-1.5 bg-[#EBE7E0] border border-[#D1CECA] text-[#1A1A1A]"
            >
              {theme === 'cream' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
            </button>

            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#1A1A1A] rounded-none bg-[#EBE7E0] border border-[#D1CECA]"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div id="mobile-nav-drawer" className="lg:hidden bg-[#F5F2ED] border-b border-[#D1CECA] px-6 py-6 space-y-4 shadow-lg animate-in slide-in-from-top-2">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 px-3 text-xs uppercase tracking-widest font-bold text-[#1A1A1A] hover:bg-[#EBE7E0] transition-colors flex items-center justify-between"
              >
                <span>{link.name}</span>
                <span className="text-[#1A1A1A]/40">→</span>
              </a>
            ))}
          </div>
          <div className="pt-4 border-t border-[#D1CECA] flex flex-col gap-3">
            <button
              onClick={handleCopyEmail}
              className="w-full py-2.5 px-3 text-xs text-[#1A1A1A] bg-[#EBE7E0] border border-[#D1CECA] flex items-center justify-between font-mono font-semibold"
            >
              <span>{personalInfo.email}</span>
              {copiedEmail ? <Check className="w-4 h-4 text-emerald-700" /> : <span className="text-[#1A1A1A]/60">Salin</span>}
            </button>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-3 text-xs font-bold uppercase tracking-widest text-[#F5F2ED] bg-[#1A1A1A]"
            >
              {t.nav.contactBtn}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
