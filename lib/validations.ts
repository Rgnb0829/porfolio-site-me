import { z } from 'zod';

export const contactFormSchema = z.object({
  name: z.string().min(2, { message: 'Nama harus diisi minimal 2 karakter' }),
  email: z.string().email({ message: 'Alamat email tidak valid' }),
  company: z.string().optional(),
  projectType: z.enum([
    'Product Strategy',
    'UI/UX Redesign',
    'Web Experience',
    'ERP & Enterprise System',
    'Design System & Mentorship',
    'Lainnya / Pertanyaan Umum',
  ], {
    message: 'Pilih jenis proyek yang ingin dibahas',
  }),
  budgetRange: z.enum([
    '<$10k (Skala UMKM/MVP Minimal)',
    '$10k - $25k (Proyek Strategis Menengah)',
    '$25k - $50k (Transformasi Digital Lengkap)',
    '>$50k (Enterprise / Sistem Kompleks)',
    'Fleksibel / Perlu Konsultasi Awal',
  ], {
    message: 'Pilih estimasi anggaran proyek',
  }),
  timeline: z.string().min(1, { message: 'Tentukan target garis waktu Anda' }),
  message: z.string().min(10, { message: 'Mohon jelaskan konteks atau tantangan proyek minimal 10 karakter' }),
  agreeToTerms: z.boolean().optional(),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

export const roiCalculatorSchema = z.object({
  currentMonthlyActiveUsers: z.number().min(100, 'Minimal 100 MAU').max(10000000, 'Maksimal 10.000.000 MAU'),
  avgConversionRate: z.number().min(0.1, 'Minimal 0.1%').max(50, 'Maksimal 50%'),
  avgCustomerLifetimeValue: z.number().min(5, 'Minimal $5').max(50000, 'Maksimal $50,000'),
  currentDevDesignBottleneckDays: z.number().min(1, 'Minimal 1 hari').max(90, 'Maksimal 90 hari'),
  teamSize: z.number().min(1, 'Minimal 1 anggota').max(500, 'Maksimal 500 anggota'),
});

export type ROICalculatorData = z.infer<typeof roiCalculatorSchema>;
