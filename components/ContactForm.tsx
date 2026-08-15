'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactFormSchema, ContactFormData } from '@/lib/validations';
import { useApp } from '@/context/AppContext';
import { Send, CheckCircle2, Copy, Check, Mail, MapPin, Calendar } from 'lucide-react';

export default function ContactForm() {
  const { personalInfo, t } = useApp();
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      company: '',
      projectType: 'Product Strategy',
      budgetRange: '$10k - $25k (Proyek Strategis Menengah)',
      timeline: '1-2 Bulan',
      message: '',
      agreeToTerms: true,
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log('Form Submitted:', data);
    setSubmitted(true);
    reset();
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-20 border-b border-[#D1CECA] bg-[#F5F2ED]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#D1CECA] pb-8 mb-12 gap-4">
          <div>
            <span className="block text-[10px] uppercase tracking-[0.25em] text-[#1A1A1A]/60 mb-2 font-bold font-mono">
              {t.contact.numLabel}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif italic font-bold text-[#1A1A1A]">
              {t.contact.heading}
            </h2>
          </div>
          <p className="text-sm text-[#1A1A1A]/70 max-w-md leading-relaxed font-sans">
            {t.contact.subheading}
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Direct Info & Calendar Booking (Left) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-[#EBE7E0] border border-[#D1CECA] p-8 space-y-6">
              <span className="block text-[10px] uppercase tracking-widest text-[#1A1A1A]/50 font-bold font-mono">
                {t.contact.directContactLabel}
              </span>

              <div className="space-y-4">
                <div className="flex items-start gap-4 pb-4 border-b border-[#D1CECA]">
                  <Mail className="w-5 h-5 text-[#1A1A1A] mt-0.5" />
                  <div>
                    <span className="block text-[10px] uppercase font-mono text-[#1A1A1A]/50 font-bold">{t.contact.emailLabel}</span>
                    <button
                      onClick={handleCopyEmail}
                      className="text-sm font-serif italic font-bold text-[#1A1A1A] hover:underline flex items-center gap-2 mt-0.5"
                    >
                      <span>{personalInfo.email}</span>
                      {copied ? <Check className="w-3.5 h-3.5 text-emerald-700" /> : <Copy className="w-3 h-3 text-[#1A1A1A]/50" />}
                    </button>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-[#1A1A1A] mt-0.5" />
                  <div>
                    <span className="block text-[10px] uppercase font-mono text-[#1A1A1A]/50 font-bold">{t.contact.locationLabel}</span>
                    <span className="text-sm font-serif italic font-bold text-[#1A1A1A] block mt-0.5">
                      {personalInfo.location}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Consultation Booking Card */}
            <div className="bg-[#1A1A1A] text-[#F5F2ED] p-8 space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-[#F5F2ED]/60">
                <Calendar className="w-4 h-4 text-[#F5F2ED]" />
                <span>{t.contact.quickCallLabel}</span>
              </div>
              <h3 className="text-xl font-serif italic font-bold">
                {t.contact.quickCallHeading}
              </h3>
              <p className="text-xs text-[#F5F2ED]/80 leading-relaxed font-sans">
                {t.contact.quickCallText}
              </p>
              <button
                onClick={() => alert('Opening Consultation Calendar...')}
                className="w-full py-3 bg-[#F5F2ED] text-[#1A1A1A] text-xs font-bold uppercase tracking-widest hover:bg-white transition-all text-center"
              >
                {t.contact.quickCallBtn}
              </button>
            </div>
          </div>

          {/* Contact Form (Right) */}
          <div className="lg:col-span-7 bg-[#EBE7E0] border border-[#D1CECA] p-8 sm:p-10">
            {submitted ? (
              <div className="py-12 text-center space-y-6">
                <div className="w-16 h-16 bg-[#1A1A1A] text-[#F5F2ED] rounded-full mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8 text-emerald-400" />
                </div>
                <h3 className="text-2xl font-serif italic font-bold text-[#1A1A1A]">
                  {t.contact.successHeading}
                </h3>
                <p className="text-xs text-[#1A1A1A]/80 max-w-md mx-auto leading-relaxed">
                  {t.contact.successText}
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 bg-[#1A1A1A] text-[#F5F2ED] text-xs uppercase tracking-widest font-bold hover:bg-[#333333] transition-all"
                >
                  {t.contact.sendAnotherBtn}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="flex items-center justify-between border-b border-[#D1CECA] pb-4">
                  <span className="text-xs uppercase font-mono tracking-widest font-bold text-[#1A1A1A]">
                    {t.contact.formHeading}
                  </span>
                  <span className="text-[10px] font-mono text-[#1A1A1A]/50">* Required</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-mono font-bold uppercase text-[#1A1A1A] mb-2">
                      {t.contact.nameLabel} *
                    </label>
                    <input
                      type="text"
                      {...register('name')}
                      placeholder="e.g. Budi Santoso"
                      className="w-full bg-[#F5F2ED] border border-[#D1CECA] px-4 py-3 text-xs text-[#1A1A1A] focus:outline-none focus:border-[#1A1A1A] font-sans"
                    />
                    {errors.name && (
                      <p className="text-[10px] font-mono text-red-600 mt-1">{errors.name.message}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-mono font-bold uppercase text-[#1A1A1A] mb-2">
                      {t.contact.emailInputLabel} *
                    </label>
                    <input
                      type="email"
                      {...register('email')}
                      placeholder="e.g. budi@perusahaan.com"
                      className="w-full bg-[#F5F2ED] border border-[#D1CECA] px-4 py-3 text-xs text-[#1A1A1A] focus:outline-none focus:border-[#1A1A1A] font-sans"
                    />
                    {errors.email && (
                      <p className="text-[10px] font-mono text-red-600 mt-1">{errors.email.message}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Company */}
                  <div>
                    <label className="block text-xs font-mono font-bold uppercase text-[#1A1A1A] mb-2">
                      {t.contact.companyLabel}
                    </label>
                    <input
                      type="text"
                      {...register('company')}
                      placeholder="e.g. PT Maju Bersama"
                      className="w-full bg-[#F5F2ED] border border-[#D1CECA] px-4 py-3 text-xs text-[#1A1A1A] focus:outline-none focus:border-[#1A1A1A] font-sans"
                    />
                  </div>

                  {/* Project Type */}
                  <div>
                    <label className="block text-xs font-mono font-bold uppercase text-[#1A1A1A] mb-2">
                      {t.contact.projectTypeLabel} *
                    </label>
                    <select
                      {...register('projectType')}
                      className="w-full bg-[#F5F2ED] border border-[#D1CECA] px-4 py-3 text-xs text-[#1A1A1A] focus:outline-none focus:border-[#1A1A1A] font-sans"
                    >
                      <option value="Product Strategy">Product Strategy</option>
                      <option value="UI/UX Redesign">UI/UX Redesign</option>
                      <option value="Web Experience">Web Experience</option>
                      <option value="ERP & Enterprise System">ERP & Enterprise System</option>
                      <option value="Design System & Mentorship">Design System & Mentorship</option>
                      <option value="Other / General Inquiry">Other / General Inquiry</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Budget Range */}
                  <div>
                    <label className="block text-xs font-mono font-bold uppercase text-[#1A1A1A] mb-2">
                      {t.contact.budgetLabel} *
                    </label>
                    <select
                      {...register('budgetRange')}
                      className="w-full bg-[#F5F2ED] border border-[#D1CECA] px-4 py-3 text-xs text-[#1A1A1A] focus:outline-none focus:border-[#1A1A1A] font-sans"
                    >
                      <option value="<$10k (MVP / Small Project)">&lt;$10k (MVP / Small Project)</option>
                      <option value="$10k - $25k (Medium Strategic Project)">$10k - $25k (Medium Strategic Project)</option>
                      <option value="$25k - $50k (Full Digital Transformation)">$25k - $50k (Full Digital Transformation)</option>
                      <option value=">$50k (Enterprise / Complex System)">&gt;$50k (Enterprise / Complex System)</option>
                      <option value="Flexible / Need Initial Discussion">Flexible / Need Initial Discussion</option>
                    </select>
                  </div>

                  {/* Timeline */}
                  <div>
                    <label className="block text-xs font-mono font-bold uppercase text-[#1A1A1A] mb-2">
                      {t.contact.timelineLabel} *
                    </label>
                    <input
                      type="text"
                      {...register('timeline')}
                      placeholder="e.g. 1-2 Months"
                      className="w-full bg-[#F5F2ED] border border-[#D1CECA] px-4 py-3 text-xs text-[#1A1A1A] focus:outline-none focus:border-[#1A1A1A] font-sans"
                    />
                    {errors.timeline && (
                      <p className="text-[10px] font-mono text-red-600 mt-1">{errors.timeline.message}</p>
                    )}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-mono font-bold uppercase text-[#1A1A1A] mb-2">
                    {t.contact.messageLabel} *
                  </label>
                  <textarea
                    rows={4}
                    {...register('message')}
                    placeholder="Tell us about your project context, goals, and expectations..."
                    className="w-full bg-[#F5F2ED] border border-[#D1CECA] px-4 py-3 text-xs text-[#1A1A1A] focus:outline-none focus:border-[#1A1A1A] font-sans"
                  ></textarea>
                  {errors.message && (
                    <p className="text-[10px] font-mono text-red-600 mt-1">{errors.message.message}</p>
                  )}
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-[#1A1A1A] text-[#F5F2ED] text-xs font-bold uppercase tracking-[0.2em] hover:bg-[#333333] transition-all flex items-center justify-center gap-3 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>{t.contact.sendingBtn}</span>
                  ) : (
                    <>
                      <span>{t.contact.submitBtn}</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
