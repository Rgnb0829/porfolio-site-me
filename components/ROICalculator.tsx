'use client';

import React, { useState, useMemo } from 'react';
import { ROICalculatorInput, ROICalculatorResult } from '@/types';
import { Calculator, ArrowRight } from 'lucide-react';
import { useApp } from '@/context/AppContext';

export default function ROICalculator() {
  const { t } = useApp();
  const [inputs, setInputs] = useState<ROICalculatorInput>({
    currentMonthlyActiveUsers: 25000,
    avgConversionRate: 2.0,
    avgCustomerLifetimeValue: 150, // in USD
    currentDevDesignBottleneckDays: 14,
    teamSize: 8,
  });

  const result: ROICalculatorResult = useMemo(() => {
    const projectedConversionUplift = 35; // +35% improvement from UX optimization
    const newConversionRate = inputs.avgConversionRate * (1 + projectedConversionUplift / 100);
    const monthlyConversionsCurrent = (inputs.currentMonthlyActiveUsers * inputs.avgConversionRate) / 100;
    const monthlyConversionsNew = (inputs.currentMonthlyActiveUsers * newConversionRate) / 100;
    const additionalConversionsMonthly = monthlyConversionsNew - monthlyConversionsCurrent;
    const estimatedRevenueGain = Math.round(additionalConversionsMonthly * inputs.avgCustomerLifetimeValue * 12);
    
    const timeToMarketSavedDays = Math.round(inputs.currentDevDesignBottleneckDays * 0.6); // 60% reduction in delay
    const designSystemEfficiencyGain = 45; // 45% reduction in dev debt
    const paybackPeriodMonths = Math.max(1.2, parseFloat((18000 / (estimatedRevenueGain / 12 || 1)).toFixed(1)));

    return {
      projectedConversionUplift,
      estimatedRevenueGain,
      timeToMarketSavedDays,
      designSystemEfficiencyGain,
      paybackPeriodMonths,
    };
  }, [inputs]);

  const formatUSD = (val: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(val);
  };

  return (
    <section id="calculator" className="py-20 border-b border-[#D1CECA] bg-[#F5F2ED]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#D1CECA] pb-8 mb-12 gap-4">
          <div>
            <span className="block text-[10px] uppercase tracking-[0.25em] text-[#1A1A1A]/60 mb-2 font-bold font-mono">
              {t.calculator.numLabel}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif italic font-bold text-[#1A1A1A]">
              {t.calculator.heading}
            </h2>
          </div>
          <p className="text-sm text-[#1A1A1A]/70 max-w-md leading-relaxed font-sans">
            {t.calculator.subheading}
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Inputs Panel (Left) */}
          <div className="lg:col-span-6 bg-[#EBE7E0] border border-[#D1CECA] p-8 space-y-6">
            <div className="flex items-center justify-between border-b border-[#D1CECA] pb-4">
              <span className="text-xs uppercase font-mono tracking-widest font-bold text-[#1A1A1A]">
                {t.calculator.inputsHeading}
              </span>
              <Calculator className="w-4 h-4 text-[#1A1A1A]" />
            </div>

            {/* Slider 1: Monthly Active Users */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs uppercase font-bold text-[#1A1A1A]/80 tracking-wider font-mono">
                  {t.calculator.mauLabel}
                </label>
                <span className="text-sm font-mono font-bold text-[#1A1A1A] bg-[#F5F2ED] px-3 py-1 border border-[#D1CECA]">
                  {inputs.currentMonthlyActiveUsers.toLocaleString('en-US')} MAU
                </span>
              </div>
              <input
                type="range"
                min="1000"
                max="250000"
                step="1000"
                value={inputs.currentMonthlyActiveUsers}
                onChange={(e) => setInputs({ ...inputs, currentMonthlyActiveUsers: Number(e.target.value) })}
                className="w-full accent-[#1A1A1A] cursor-pointer h-2 bg-[#D1CECA] rounded-none"
              />
              <div className="flex justify-between text-[10px] font-mono text-[#1A1A1A]/50 mt-1">
                <span>1,000</span>
                <span>250,000+</span>
              </div>
            </div>

            {/* Slider 2: Conversion Rate */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs uppercase font-bold text-[#1A1A1A]/80 tracking-wider font-mono">
                  {t.calculator.convLabel}
                </label>
                <span className="text-sm font-mono font-bold text-[#1A1A1A] bg-[#F5F2ED] px-3 py-1 border border-[#D1CECA]">
                  {inputs.avgConversionRate.toFixed(1)}%
                </span>
              </div>
              <input
                type="range"
                min="0.5"
                max="10.0"
                step="0.1"
                value={inputs.avgConversionRate}
                onChange={(e) => setInputs({ ...inputs, avgConversionRate: Number(e.target.value) })}
                className="w-full accent-[#1A1A1A] cursor-pointer h-2 bg-[#D1CECA] rounded-none"
              />
              <div className="flex justify-between text-[10px] font-mono text-[#1A1A1A]/50 mt-1">
                <span>0.5%</span>
                <span>10.0%</span>
              </div>
            </div>

            {/* Slider 3: Customer LTV */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs uppercase font-bold text-[#1A1A1A]/80 tracking-wider font-mono">
                  {t.calculator.ltvLabel}
                </label>
                <span className="text-sm font-mono font-bold text-[#1A1A1A] bg-[#F5F2ED] px-3 py-1 border border-[#D1CECA]">
                  ${inputs.avgCustomerLifetimeValue}
                </span>
              </div>
              <input
                type="range"
                min="10"
                max="1000"
                step="10"
                value={inputs.avgCustomerLifetimeValue}
                onChange={(e) => setInputs({ ...inputs, avgCustomerLifetimeValue: Number(e.target.value) })}
                className="w-full accent-[#1A1A1A] cursor-pointer h-2 bg-[#D1CECA] rounded-none"
              />
              <div className="flex justify-between text-[10px] font-mono text-[#1A1A1A]/50 mt-1">
                <span>$10</span>
                <span>$1,000+</span>
              </div>
            </div>

            {/* Slider 4: Bottleneck Days */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs uppercase font-bold text-[#1A1A1A]/80 tracking-wider font-mono">
                  {t.calculator.bottleneckLabel}
                </label>
                <span className="text-sm font-mono font-bold text-[#1A1A1A] bg-[#F5F2ED] px-3 py-1 border border-[#D1CECA]">
                  {inputs.currentDevDesignBottleneckDays} Days
                </span>
              </div>
              <input
                type="range"
                min="2"
                max="30"
                step="1"
                value={inputs.currentDevDesignBottleneckDays}
                onChange={(e) => setInputs({ ...inputs, currentDevDesignBottleneckDays: Number(e.target.value) })}
                className="w-full accent-[#1A1A1A] cursor-pointer h-2 bg-[#D1CECA] rounded-none"
              />
              <div className="flex justify-between text-[10px] font-mono text-[#1A1A1A]/50 mt-1">
                <span>2 Days</span>
                <span>30 Days</span>
              </div>
            </div>

          </div>

          {/* Results Output (Right) */}
          <div className="lg:col-span-6 bg-[#1A1A1A] text-[#F5F2ED] p-8 sm:p-10 flex flex-col justify-between shadow-xl">
            <div>
              <div className="flex items-center justify-between border-b border-[#F5F2ED]/20 pb-4 mb-8">
                <span className="text-xs uppercase font-mono tracking-widest font-bold text-[#F5F2ED]/60">
                  {t.calculator.resultsHeading}
                </span>
                <span className="text-xs font-mono font-bold bg-[#F5F2ED] text-[#1A1A1A] px-2.5 py-0.5">
                  UX Model
                </span>
              </div>

              {/* Big Metric Display */}
              <div className="mb-8">
                <span className="block text-[11px] uppercase tracking-widest text-[#F5F2ED]/60 font-mono mb-1 font-bold">
                  {t.calculator.revGainLabel}
                </span>
                <div className="text-4xl sm:text-5xl font-serif italic font-bold text-[#F5F2ED] tracking-tight">
                  +{formatUSD(result.estimatedRevenueGain)}
                </div>
                <div className="mt-2 text-xs font-mono text-[#F5F2ED]/80 flex items-center gap-2">
                  <span className="inline-block w-2 h-2 rounded-full bg-emerald-400"></span>
                  <span>{t.calculator.projectedUplift} +{result.projectedConversionUplift}%</span>
                </div>
              </div>

              {/* Metric Breakdown Cards */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-[#F5F2ED]/10 p-4 border border-[#F5F2ED]/20">
                  <span className="block text-[10px] uppercase font-mono tracking-widest text-[#F5F2ED]/60 mb-1">
                    {t.calculator.timeSavedLabel}
                  </span>
                  <span className="text-2xl font-serif italic font-bold text-[#F5F2ED]">
                    -{result.timeToMarketSavedDays} Days
                  </span>
                </div>

                <div className="bg-[#F5F2ED]/10 p-4 border border-[#F5F2ED]/20">
                  <span className="block text-[10px] uppercase font-mono tracking-widest text-[#F5F2ED]/60 mb-1">
                    {t.calculator.efficiencyGainLabel}
                  </span>
                  <span className="text-2xl font-serif italic font-bold text-[#F5F2ED]">
                    +{result.designSystemEfficiencyGain}%
                  </span>
                </div>

                <div className="bg-[#F5F2ED]/10 p-4 border border-[#F5F2ED]/20">
                  <span className="block text-[10px] uppercase font-mono tracking-widest text-[#F5F2ED]/60 mb-1">
                    {t.calculator.paybackPeriodLabel}
                  </span>
                  <span className="text-2xl font-serif italic font-bold text-[#F5F2ED]">
                    ~{result.paybackPeriodMonths} Months
                  </span>
                </div>

                <div className="bg-[#F5F2ED]/10 p-4 border border-[#F5F2ED]/20">
                  <span className="block text-[10px] uppercase font-mono tracking-widest text-[#F5F2ED]/60 mb-1">
                    {t.calculator.userSatisfactionLabel}
                  </span>
                  <span className="text-2xl font-serif italic font-bold text-emerald-400">
                    High Impact
                  </span>
                </div>
              </div>

            </div>

            {/* Bottom Action */}
            <div className="pt-6 border-t border-[#F5F2ED]/20 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-[11px] text-[#F5F2ED]/70 font-sans">
                {t.calculator.disclaimer}
              </p>
              <a
                href="#contact"
                className="w-full sm:w-auto px-6 py-3 bg-[#F5F2ED] text-[#1A1A1A] text-xs font-bold uppercase tracking-widest hover:bg-white transition-all text-center flex items-center justify-center gap-2 shrink-0"
              >
                <span>{t.calculator.ctaBtn}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
