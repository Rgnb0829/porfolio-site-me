'use client';

import React from 'react';
import { Linkedin, Github, FileText, Globe, Mail, ExternalLink, Send } from 'lucide-react';
import { useApp } from '@/context/AppContext';

export interface SocialLinkItem {
  id: string;
  name: string;
  url: string;
  handle: string;
  label: string;
  icon: React.ComponentType<{ className?: string; 'aria-hidden'?: boolean | 'true' | 'false' }>;
  type: 'external' | 'email';
  networkCategory: string;
}

interface SocialLinksProps {
  variant?: 'footer' | 'expanded' | 'compact' | 'pill';
  showLabels?: boolean;
  className?: string;
}

export default function SocialLinks({
  variant = 'footer',
  showLabels = true,
  className = '',
}: SocialLinksProps) {
  const { personalInfo, lang } = useApp();

  const socialLinks: SocialLinkItem[] = [
    {
      id: 'linkedin',
      name: 'LinkedIn',
      url: personalInfo.linkedin || 'https://linkedin.com',
      handle: '/in/rakhawn',
      label: lang === 'ID' 
        ? 'Profil Profesional & Jaringan LinkedIn (terbuka di tab baru)' 
        : 'Professional Profile & Network on LinkedIn (opens in new tab)',
      icon: Linkedin,
      type: 'external',
      networkCategory: lang === 'ID' ? 'Jaringan Bisnis' : 'Professional Network',
    },
    {
      id: 'github',
      name: 'GitHub',
      url: personalInfo.github || 'https://github.com',
      handle: '@rakhawn',
      label: lang === 'ID' 
        ? 'Repositori Proyek & Kode Sumber GitHub (terbuka di tab baru)' 
        : 'Open Source & Code Repositories on GitHub (opens in new tab)',
      icon: Github,
      type: 'external',
      networkCategory: lang === 'ID' ? 'Kode & Arsitektur' : 'Code & Architecture',
    },
    {
      id: 'readcv',
      name: 'Read.cv',
      url: personalInfo.readcv || 'https://read.cv',
      handle: '@rakhawn',
      label: lang === 'ID' 
        ? 'Dossier Karier & Rekam Jejak Read.cv (terbuka di tab baru)' 
        : 'Career Dossier & Verified Track Record on Read.cv (opens in new tab)',
      icon: FileText,
      type: 'external',
      networkCategory: lang === 'ID' ? 'CV Eksekutif' : 'Executive Dossier',
    },
    {
      id: 'email',
      name: 'Direct Email',
      url: `mailto:${personalInfo.email}`,
      handle: personalInfo.email,
      label: lang === 'ID' 
        ? `Kirim Email Langsung ke ${personalInfo.email}` 
        : `Send Direct Inquiry to ${personalInfo.email}`,
      icon: Mail,
      type: 'email',
      networkCategory: lang === 'ID' ? 'Inquiry Kemitraan' : 'Direct Inquiries',
    },
  ];

  if (variant === 'expanded') {
    return (
      <nav 
        id="social-links-expanded"
        aria-label={lang === 'ID' ? 'Tautan Jaringan Profesional & Sosial' : 'Professional & Social Network Links'}
        className={`w-full ${className}`}
      >
        <ul role="list" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {socialLinks.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.id}>
                <a
                  id={`social-link-${item.id}`}
                  href={item.url}
                  target={item.type === 'external' ? '_blank' : undefined}
                  rel={item.type === 'external' ? 'noopener noreferrer' : undefined}
                  aria-label={item.label}
                  title={`${item.name} — ${item.handle}`}
                  className="group flex flex-col p-4 border border-[#F5F2ED]/20 bg-[#F5F2ED]/5 hover:bg-[#F5F2ED]/10 hover:border-[#F5F2ED]/40 transition-all duration-200 focus-visible:ring-2 focus-visible:ring-[#F5F2ED] focus-visible:outline-none"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="p-2 bg-[#F5F2ED]/10 text-[#F5F2ED] group-hover:bg-[#F5F2ED] group-hover:text-[#1A1A1A] transition-colors">
                      <Icon className="w-4 h-4" aria-hidden="true" />
                    </div>
                    {item.type === 'external' ? (
                      <ExternalLink className="w-3.5 h-3.5 text-[#F5F2ED]/40 group-hover:text-[#F5F2ED] transition-colors" aria-hidden="true" />
                    ) : (
                      <Send className="w-3.5 h-3.5 text-[#F5F2ED]/40 group-hover:text-[#F5F2ED] transition-colors" aria-hidden="true" />
                    )}
                  </div>
                  <span className="text-[10px] uppercase font-mono tracking-widest text-[#F5F2ED]/50 mb-0.5">
                    {item.networkCategory}
                  </span>
                  <span className="text-sm font-serif font-bold text-[#F5F2ED] group-hover:underline underline-offset-2">
                    {item.name}
                  </span>
                  <span className="text-xs text-[#F5F2ED]/70 font-mono mt-0.5 truncate">
                    {item.handle}
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }

  if (variant === 'pill') {
    return (
      <nav 
        id="social-links-pills"
        aria-label={lang === 'ID' ? 'Tautan Jaringan Sosial' : 'Social Network Links'}
        className={`flex flex-wrap gap-2.5 ${className}`}
      >
        <ul role="list" className="flex flex-wrap gap-2.5">
          {socialLinks.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.id}>
                <a
                  id={`social-link-pill-${item.id}`}
                  href={item.url}
                  target={item.type === 'external' ? '_blank' : undefined}
                  rel={item.type === 'external' ? 'noopener noreferrer' : undefined}
                  aria-label={item.label}
                  title={`${item.name} (${item.handle})`}
                  className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-mono tracking-wider uppercase border border-[#F5F2ED]/25 bg-[#F5F2ED]/5 text-[#F5F2ED] hover:bg-[#F5F2ED] hover:text-[#1A1A1A] transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-[#F5F2ED] focus-visible:outline-none"
                >
                  <Icon className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                  <span>{item.name}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }

  // Default 'footer' variant: refined, accessible inline list with icons & tooltips
  return (
    <nav
      id="footer-social-links"
      aria-label={lang === 'ID' ? 'Tautan Media Sosial dan Profil Profesional' : 'Social Media and Professional Profile Links'}
      className={className}
    >
      <ul role="list" className="flex flex-wrap items-center gap-3 pt-2">
        {socialLinks.map((item) => {
          const Icon = item.icon;
          return (
            <li key={item.id}>
              <a
                id={`footer-social-${item.id}`}
                href={item.url}
                target={item.type === 'external' ? '_blank' : undefined}
                rel={item.type === 'external' ? 'noopener noreferrer' : undefined}
                aria-label={item.label}
                title={`${item.name} (${item.handle}) — ${item.networkCategory}`}
                className="group inline-flex items-center gap-2 px-3 py-1.5 border border-[#F5F2ED]/20 bg-[#F5F2ED]/5 hover:bg-[#F5F2ED]/15 hover:border-[#F5F2ED]/50 text-[#F5F2ED]/90 hover:text-white transition-all duration-200 focus-visible:ring-2 focus-visible:ring-[#F5F2ED] focus-visible:outline-none rounded-none"
              >
                <Icon 
                  className="w-3.5 h-3.5 text-[#F5F2ED]/70 group-hover:text-[#F5F2ED] transition-colors" 
                  aria-hidden="true" 
                />
                {showLabels && (
                  <span className="text-xs font-mono uppercase tracking-wider font-semibold">
                    {item.name}
                  </span>
                )}
                {item.type === 'external' && (
                  <ExternalLink 
                    className="w-2.5 h-2.5 text-[#F5F2ED]/40 group-hover:text-[#F5F2ED] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" 
                    aria-hidden="true" 
                  />
                )}
                <span className="sr-only">({item.label})</span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
