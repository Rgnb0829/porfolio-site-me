'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import {
  PERSONAL_INFO,
  CORE_PRINCIPLES,
  METHODOLOGY_STEPS,
  SERVICES,
  FEATURED_PROJECTS,
  CAREER_NARRATIVE,
  FAQS,
  RECENT_NOTES,
} from '@/lib/data';

import {
  PERSONAL_INFO_EN,
  CORE_PRINCIPLES_EN,
  METHODOLOGY_STEPS_EN,
  SERVICES_EN,
  FEATURED_PROJECTS_EN,
  CAREER_NARRATIVE_EN,
  FAQS_EN,
  RECENT_NOTES_EN,
} from '@/lib/data-en';

export type ThemeMode = 'cream' | 'dark';
export type LanguageMode = 'ID' | 'EN';

export interface UIStrings {
  nav: {
    principles: string;
    methodology: string;
    services: string;
    projects: string;
    calculator: string;
    experience: string;
    notes: string;
    contactBtn: string;
    statusBadge: string;
  };
  hero: {
    badge: string;
    ctaPrimary: string;
    ctaSecondary: string;
    principlesHeading: string;
    verified: string;
  };
  principles: {
    numLabel: string;
    heading: string;
    subheading: string;
    keyTakeaway: string;
  };
  statement: {
    quote: string;
    author: string;
    role: string;
  };
  methodology: {
    numLabel: string;
    heading: string;
    subheading: string;
    stepSelectLabel: string;
    deliverablesLabel: string;
    mindsetLabel: string;
    structuredBadge: string;
  };
  services: {
    numLabel: string;
    heading: string;
    subheading: string;
    capabilitiesLabel: string;
    idealForLabel: string;
    outcomeLabel: string;
  };
  projects: {
    numLabel: string;
    heading: string;
    subheading: string;
    listLabel: string;
    metricsLabel: string;
    filterAll: string;
    problemLabel: string;
    solutionLabel: string;
    impactLabel: string;
    techStackLabel: string;
    featuredBadge: string;
  };
  calculator: {
    numLabel: string;
    heading: string;
    subheading: string;
    inputsHeading: string;
    mauLabel: string;
    convLabel: string;
    ltvLabel: string;
    bottleneckLabel: string;
    resultsHeading: string;
    revGainLabel: string;
    projectedUplift: string;
    timeSavedLabel: string;
    efficiencyGainLabel: string;
    paybackPeriodLabel: string;
    userSatisfactionLabel: string;
    disclaimer: string;
    ctaBtn: string;
  };
  career: {
    numLabel: string;
    heading: string;
    subheading: string;
    listLabel: string;
    milestonesLabel: string;
    keyMilestonesLabel: string;
    skillsLabel: string;
    faqsHeading: string;
    cvBadge: string;
    cvHeading: string;
    cvSubtext: string;
    cvBtn: string;
  };
  notes: {
    numLabel: string;
    heading: string;
    subheading: string;
    readNote: string;
    readBtn: string;
    bannerHeading: string;
    bannerSubtext: string;
    bannerBtn: string;
    discussHeading: string;
    discussDesc: string;
    discussBtn: string;
  };
  contact: {
    numLabel: string;
    heading: string;
    subheading: string;
    directContactLabel: string;
    emailLabel: string;
    emailInputLabel: string;
    locationLabel: string;
    quickCallLabel: string;
    quickCallHeading: string;
    quickCallText: string;
    quickCallBtn: string;
    successHeading: string;
    successText: string;
    sendAnotherBtn: string;
    formHeading: string;
    nameLabel: string;
    namePlaceholder: string;
    companyLabel: string;
    companyPlaceholder: string;
    projectTypeLabel: string;
    projectTypePlaceholder: string;
    budgetLabel: string;
    budgetPlaceholder: string;
    timelineLabel: string;
    timelinePlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    termsLabel: string;
    submitBtn: string;
    sendingBtn: string;
    submittingBtn: string;
    successMessage: string;
  };
  footer: {
    tagline: string;
    navHeader: string;
    navHeading: string;
    contactHeader: string;
    contactHeading: string;
    contactText: string;
    contactSub: string;
    rights: string;
    copyright: string;
    backToTop: string;
  };
}

const uiStringsID: UIStrings = {
  nav: {
    principles: 'Prinsip',
    methodology: 'Metodologi',
    services: 'Layanan',
    projects: 'Studi Kasus',
    calculator: 'Kalkulator ROI',
    experience: 'Pengalaman',
    notes: 'Catatan',
    contactBtn: 'Konsultasi',
    statusBadge: 'Tersedia Q3/Q4',
  },
  hero: {
    badge: 'Desain Intentional & Strategi Produk',
    ctaPrimary: 'Mulai Konsultasi',
    ctaSecondary: 'Lihat Studi Kasus',
    principlesHeading: '04 Pilar Filosofi',
    verified: 'Verified',
  },
  principles: {
    numLabel: '01 / Fondasi Kerja',
    heading: 'Prinsip Desain & Strategi.',
    subheading: 'Empat pilar utama yang membimbing setiap pengambilan keputusan estetis, fungsional, dan arsitektural dalam setiap proyek.',
    keyTakeaway: 'Key Takeaway:',
  },
  statement: {
    quote: 'Desain luar biasa bukan tentang seberapa banyak elemen yang Anda tambahkan, melainkan seberapa jernih pesan yang tersisa ketika seluruh kebisingan disingkirkan.',
    author: 'Rakhawn Arisya',
    role: 'Principal Product Strategist & Creative Director',
  },
  methodology: {
    numLabel: '02 / Alur Kerja Terstruktur',
    heading: 'Metodologi Eksekusi.',
    subheading: 'Proses 4 tahap dari riset awal hingga peluncuran & evaluasi dampak berkelanjutan.',
    stepSelectLabel: 'Pilih Tahapan Produk:',
    deliverablesLabel: 'Key Deliverables & Luaran Produk:',
    mindsetLabel: 'Prinsip Kunci Fase Ini',
    structuredBadge: 'Terstruktur',
  },
  services: {
    numLabel: '03 / Kapabilitas & Solusi',
    heading: 'Layanan & Solusi Terstruktur.',
    subheading: 'Pendekatan komprehensif untuk membantu organisasi Anda membangun pengalaman produk digital kelas dunia.',
    capabilitiesLabel: 'Kapabilitas Utama:',
    idealForLabel: 'Sangat Cocok Untuk:',
    outcomeLabel: 'Hasil Akhir Terukur:',
  },
  projects: {
    numLabel: '04 / Bukti Nyata Eksekusi',
    heading: 'Studi Kasus & Transformasi.',
    subheading: 'Showcase proyek pilihan yang mendemonstrasikan dampak nyata bagi efisiensi operasional dan pertumbuhan bisnis.',
    listLabel: 'Daftar Studi Kasus:',
    metricsLabel: 'Dampak & Metrik Kunci:',
    filterAll: 'Semua Proyek',
    problemLabel: 'Tantangan Bisnis',
    solutionLabel: 'Solusi Strategis',
    impactLabel: 'Dampak Terukur',
    techStackLabel: 'Teknologi & Tools:',
    featuredBadge: 'Featured Study',
  },
  calculator: {
    numLabel: '05 / Model Prediksi Dampak',
    heading: 'Kalkulator Potensi ROI.',
    subheading: 'Simulasikan estimasi penghematan biaya operasional dan peningkatan potensi pendapatan dengan perbaikan desain sistem.',
    inputsHeading: 'Parameter Variabel Bisnis',
    mauLabel: 'Monthly Active Users (MAU)',
    convLabel: 'Tingkat Konversi Saat Ini (%)',
    ltvLabel: 'Nilai Pelanggan (LTV) ($)',
    bottleneckLabel: 'Lama Hambatan Dev/Design (Hari)',
    resultsHeading: 'Proyeksi Dampak Finansial & Efisiensi',
    revGainLabel: 'Estimasi Peningkatan Pendapatan Tahunan',
    projectedUplift: 'Proyeksi Kenaikan Konversi',
    timeSavedLabel: 'Efisiensi Siklus Rilis',
    efficiencyGainLabel: 'Peningkatan Efisiensi Design System',
    paybackPeriodLabel: 'Estimasi Pengembalian Modal (Payback)',
    userSatisfactionLabel: 'Tingkat Kepuasan & Retensi Pengguna',
    disclaimer: '*Model simulasi ini berbasis estimasi benchmark industri dan histori optimasi proyek terdahulu.',
    ctaBtn: 'Jadwalkan Konsultasi Hasil ROI',
  },
  career: {
    numLabel: '06 / Rekam Jejak & Pengalaman',
    heading: 'Perjalanan Profesional.',
    subheading: 'Rekam jejak kepemimpinan desain, strategi produk, dan transformasi sistem di berbagai industri.',
    listLabel: 'Jejak Rekam Profesional Terpilih:',
    milestonesLabel: 'Pencapaian Utama:',
    keyMilestonesLabel: 'Pencapaian Kunci:',
    skillsLabel: 'Keahlian Teraplikasi:',
    faqsHeading: 'Pertanyaan Umum (FAQ)',
    cvBadge: 'Portofolio & Resume Terperinci',
    cvHeading: 'Membutuhkan Salinan Kurikulum Vitae (CV) Formal?',
    cvSubtext: 'Dokumen menyajikan riwayat proyek lengkap, sertifikasi, dan daftar referensi profesional.',
    cvBtn: 'Unduh CV PDF',
  },
  notes: {
    numLabel: '07 / Jurnal & Catatan Strategis',
    heading: 'Pemikiran & Catatan Singkat.',
    subheading: 'Kumpulan esai ringkas, refleksi arsitektur sistem, dan wawasan kriya desain produk terbaru.',
    readNote: 'Baca Catatan',
    readBtn: 'Baca Catatan',
    bannerHeading: 'Tertarik Berdiskusi Lebih Lanjut?',
    bannerSubtext: 'Refleksi mingguan seputar desain editorial, UX writing, dan arsitektur SaaS dikirim secara langsung.',
    bannerBtn: 'Kirim Pertanyaan',
    discussHeading: 'Tertarik Berdiskusi Lebih Lanjut?',
    discussDesc: 'Refleksi mingguan seputar desain editorial, UX writing, dan arsitektur SaaS dikirim secara langsung.',
    discussBtn: 'Kirim Pertanyaan',
  },
  contact: {
    numLabel: '08 / Mulai Kolaborasi',
    heading: 'Jadwalkan Konsultasi.',
    subheading: 'Sampaikan kebutuhan proyek atau pertanyaan Anda. Kami akan merespons dalam waktu kurang dari 24 jam.',
    directContactLabel: 'Kontak Langsung:',
    emailLabel: 'Email Formal',
    emailInputLabel: 'Alamat Email',
    locationLabel: 'Lokasi Utama',
    quickCallLabel: 'Konsultasi Cepat (30 Menit)',
    quickCallHeading: 'Butuh Sesi Diskusi Langsung?',
    quickCallText: 'Pilih jadwal di kalender untuk sesi eksplorasi strategi awal tanpa biaya komitmen.',
    quickCallBtn: 'Pilih Jadwal Konsultasi',
    successHeading: 'Pesan Anda Berhasil Terkirim!',
    successText: 'Terima kasih telah menghubungi. Proposal awal dan konfirmasi pertemuan akan dikirimkan ke alamat email Anda dalam waktu 24 jam.',
    sendAnotherBtn: 'Kirim Pesan Lain',
    formHeading: 'Formulir Inisiasi Proyek',
    nameLabel: 'Nama Lengkap',
    namePlaceholder: 'contoh: Budi Santoso',
    companyLabel: 'Nama Perusahaan / Organisasi',
    companyPlaceholder: 'contoh: PT Maju Bersama',
    projectTypeLabel: 'Jenis Proyek',
    projectTypePlaceholder: 'Pilih jenis proyek...',
    budgetLabel: 'Estimasi Anggaran',
    budgetPlaceholder: 'Pilih anggaran...',
    timelineLabel: 'Target Garis Waktu',
    timelinePlaceholder: 'contoh: 1-2 Bulan',
    messageLabel: 'Ringkasan Tantangan & Kebutuhan Proyek',
    messagePlaceholder: 'Ceritakan konteks bisnis, masalah utama, dan ekspektasi hasil yang diinginkan...',
    termsLabel: 'Saya setuju untuk dihubungi via email terkait diskusi proyek ini.',
    submitBtn: 'Kirimkan Inisiasi Proyek',
    sendingBtn: 'Mengirimkan Pesan...',
    submittingBtn: 'Mengirim Pesan...',
    successMessage: 'Pesan Anda telah berhasil terkirim! Saya akan merespons dalam 24 jam kerja.',
  },
  footer: {
    tagline: 'Menciptakan warisan digital melalui desain intentional dan penceritaan strategis. Menghubungkan logika bisnis dengan empati manusia.',
    navHeader: 'Navigasi Halaman',
    navHeading: 'Navigasi Halaman',
    contactHeader: 'Kontak & Kolaborasi',
    contactHeading: 'Kontak & Kolaborasi',
    contactText: 'Tersedia untuk proyek konsultasi, pembicara seminar, dan proyek strategis.',
    contactSub: 'Tersedia untuk proyek konsultasi, pembicara seminar, dan proyek strategis.',
    rights: 'Hak Cipta Dilindungi Undang-Undang.',
    copyright: 'Hak Cipta Dilindungi Undang-Undang.',
    backToTop: 'Kembali ke Atas',
  },
};

const uiStringsEN: UIStrings = {
  nav: {
    principles: 'Principles',
    methodology: 'Methodology',
    services: 'Services',
    projects: 'Case Studies',
    calculator: 'ROI Calculator',
    experience: 'Experience',
    notes: 'Notes',
    contactBtn: 'Consultation',
    statusBadge: 'Available Q3/Q4',
  },
  hero: {
    badge: 'Intentional Design & Product Strategy',
    ctaPrimary: 'Start Consultation',
    ctaSecondary: 'View Case Studies',
    principlesHeading: '04 Core Pillars',
    verified: 'Verified',
  },
  principles: {
    numLabel: '01 / Working Foundations',
    heading: 'Design & Strategy Principles.',
    subheading: 'Four primary pillars guiding aesthetic, functional, and architectural decisions across every engagement.',
    keyTakeaway: 'Key Takeaway:',
  },
  statement: {
    quote: 'Extraordinary design is not about how much you can add, but how clear the essential message remains when all noise is stripped away.',
    author: 'Rakhawn Arisya',
    role: 'Principal Product Strategist & Creative Director',
  },
  methodology: {
    numLabel: '02 / Structured Methodology',
    heading: 'Execution Methodology.',
    subheading: 'A 4-phase structured journey from discovery research to launch & continuous impact evaluation.',
    stepSelectLabel: 'Select Product Phase:',
    deliverablesLabel: 'Key Deliverables & Output Specs:',
    mindsetLabel: 'Key Phase Mindset',
    structuredBadge: 'Structured',
  },
  services: {
    numLabel: '03 / Services & Solutions',
    heading: 'Structured Solutions & Offerings.',
    subheading: 'Comprehensive capabilities engineered to build world-class digital product experiences for your organization.',
    capabilitiesLabel: 'Core Capabilities:',
    idealForLabel: 'Ideal Target:',
    outcomeLabel: 'Measurable Outcome:',
  },
  projects: {
    numLabel: '04 / Proof of Execution',
    heading: 'Case Studies & Transformations.',
    subheading: 'Selected engagements demonstrating tangible impact on operational throughput and enterprise growth.',
    listLabel: 'Selected Case Studies:',
    metricsLabel: 'Key Impact & Metrics:',
    filterAll: 'All Projects',
    problemLabel: 'The Business Problem',
    solutionLabel: 'Strategic Solution',
    impactLabel: 'Measured Impact',
    techStackLabel: 'Tech & Tooling Stack:',
    featuredBadge: 'Featured Study',
  },
  calculator: {
    numLabel: '05 / Impact Projection Model',
    heading: 'Potential ROI Calculator.',
    subheading: 'Simulate operational cost savings and revenue lift through system design optimizations.',
    inputsHeading: 'Business Variable Parameters',
    mauLabel: 'Monthly Active Users (MAU)',
    convLabel: 'Current Conversion Rate (%)',
    ltvLabel: 'Customer Lifetime Value (LTV) ($)',
    bottleneckLabel: 'Dev/Design Bottleneck (Days)',
    resultsHeading: 'Financial & Efficiency Impact Projection',
    revGainLabel: 'Estimated Annual Revenue Uplift',
    projectedUplift: 'Projected Conversion Lift',
    timeSavedLabel: 'Release Cycle Acceleration',
    efficiencyGainLabel: 'Design System Efficiency Gain',
    paybackPeriodLabel: 'Estimated Payback Period',
    userSatisfactionLabel: 'User Satisfaction & Retention',
    disclaimer: '*This simulation model is based on industry benchmark estimates and past project optimization history.',
    ctaBtn: 'Schedule ROI Projection Review',
  },
  career: {
    numLabel: '06 / Track Record & Experience',
    heading: 'Professional Career Track.',
    subheading: 'A history of design leadership, product strategy, and system transformation across global industries.',
    listLabel: 'Selected Professional Record:',
    milestonesLabel: 'Key Milestones:',
    keyMilestonesLabel: 'Key Milestones:',
    skillsLabel: 'Skills Applied:',
    faqsHeading: 'Frequently Asked Questions (FAQ)',
    cvBadge: 'Detailed Portfolio & Resume',
    cvHeading: 'Need a Formal Copy of Curriculum Vitae (CV)?',
    cvSubtext: 'Document outlines full project history, certifications, and professional reference list.',
    cvBtn: 'Download CV PDF',
  },
  notes: {
    numLabel: '07 / Strategic Journal & Notes',
    heading: 'Thoughts & Brief Notes.',
    subheading: 'A collection of concise essays, system design reflections, and product craft insights.',
    readNote: 'Read Note',
    readBtn: 'Read Note',
    bannerHeading: 'Interested in Further Discussion?',
    bannerSubtext: 'Weekly reflections on editorial design, UX writing, and SaaS architecture delivered directly.',
    bannerBtn: 'Submit Inquiry',
    discussHeading: 'Interested in Further Discussion?',
    discussDesc: 'Weekly reflections on editorial design, UX writing, and SaaS architecture delivered directly.',
    discussBtn: 'Submit Inquiry',
  },
  contact: {
    numLabel: '08 / Initiate Collaboration',
    heading: 'Schedule Advisory Session.',
    subheading: 'Share your project context or advisory needs. We respond within 24 business hours.',
    directContactLabel: 'Direct Contact:',
    emailLabel: 'Formal Email',
    emailInputLabel: 'Email Address',
    locationLabel: 'Primary Location',
    quickCallLabel: 'Quick Call (30 Mins)',
    quickCallHeading: 'Need a Direct Session?',
    quickCallText: 'Select a calendar slot for an initial exploratory strategy call without commitment.',
    quickCallBtn: 'Choose Calendar Slot',
    successHeading: 'Your Message Has Been Delivered!',
    successText: 'Thank you for reaching out. Initial proposal and call confirmation will be sent to your email within 24 hours.',
    sendAnotherBtn: 'Send Another Inquiry',
    formHeading: 'Project Initiation Form',
    nameLabel: 'Full Name',
    namePlaceholder: 'e.g. Alexandra Smith',
    companyLabel: 'Company / Organization Name',
    companyPlaceholder: 'e.g. Nexus Digital Inc.',
    projectTypeLabel: 'Project Category',
    projectTypePlaceholder: 'Select project category...',
    budgetLabel: 'Budget Estimate',
    budgetPlaceholder: 'Select budget range...',
    timelineLabel: 'Target Timeline',
    timelinePlaceholder: 'e.g. 1-2 Months',
    messageLabel: 'Summary of Challenges & Project Needs',
    messagePlaceholder: 'Describe business context, primary friction points, and expected outcomes...',
    termsLabel: 'I agree to be contacted via email regarding this project inquiry.',
    submitBtn: 'Submit Project Inquiry',
    sendingBtn: 'Sending Message...',
    submittingBtn: 'Sending Message...',
    successMessage: 'Your message has been sent successfully! I will respond within 24 business hours.',
  },
  footer: {
    tagline: 'Forging digital legacies through intentional design and strategic narrative. Bridging business logic with human empathy.',
    navHeader: 'Page Navigation',
    navHeading: 'Page Navigation',
    contactHeader: 'Contact & Collaboration',
    contactHeading: 'Contact & Collaboration',
    contactText: 'Available for strategic advisory, keynote speaking, and project engagements.',
    contactSub: 'Available for strategic advisory, keynote speaking, and project engagements.',
    rights: 'All Rights Reserved.',
    copyright: 'All Rights Reserved.',
    backToTop: 'Back to Top',
  },
};

interface AppContextType {
  theme: ThemeMode;
  toggleTheme: () => void;
  lang: LanguageMode;
  setLang: (lang: LanguageMode) => void;
  toggleLang: () => void;
  t: UIStrings;
  personalInfo: typeof PERSONAL_INFO;
  corePrinciples: typeof CORE_PRINCIPLES;
  methodologySteps: typeof METHODOLOGY_STEPS;
  services: typeof SERVICES;
  featuredProjects: typeof FEATURED_PROJECTS;
  careerNarrative: typeof CAREER_NARRATIVE;
  faqs: typeof FAQS;
  recentNotes: typeof RECENT_NOTES;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<ThemeMode>('cream');
  const [lang, setLang] = useState<LanguageMode>('ID');

  // Sync theme attribute on document root element
  useEffect(() => {
    if (typeof document !== 'undefined') {
      const root = document.documentElement;
      if (theme === 'dark') {
        root.setAttribute('data-theme', 'dark');
      } else {
        root.removeAttribute('data-theme');
      }
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'cream' ? 'dark' : 'cream'));
  };

  const toggleLang = () => {
    setLang((prev) => (prev === 'ID' ? 'EN' : 'ID'));
  };

  const isEN = lang === 'EN';

  const value: AppContextType = {
    theme,
    toggleTheme,
    lang,
    setLang,
    toggleLang,
    t: isEN ? uiStringsEN : uiStringsID,
    personalInfo: isEN ? PERSONAL_INFO_EN : PERSONAL_INFO,
    corePrinciples: isEN ? CORE_PRINCIPLES_EN : CORE_PRINCIPLES,
    methodologySteps: isEN ? METHODOLOGY_STEPS_EN : METHODOLOGY_STEPS,
    services: isEN ? SERVICES_EN : SERVICES,
    featuredProjects: isEN ? FEATURED_PROJECTS_EN : FEATURED_PROJECTS,
    careerNarrative: isEN ? CAREER_NARRATIVE_EN : CAREER_NARRATIVE,
    faqs: isEN ? FAQS_EN : FAQS,
    recentNotes: isEN ? RECENT_NOTES_EN : RECENT_NOTES,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}
