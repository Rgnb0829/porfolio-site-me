export interface CorePrinciple {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  keyTakeaway: string;
  iconName: string;
}

export interface MethodologyStep {
  step: string;
  phase: string;
  title: string;
  description: string;
  deliverables: string[];
  mindset: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  role: string;
  tagline: string;
  description: string;
  capabilities: string[];
  idealFor: string;
  outcome: string;
}

export interface MetricImpact {
  label: string;
  value: string;
  description: string;
  changeType?: 'positive' | 'neutral';
}

export interface ProjectCaseStudy {
  id: string;
  slug: string;
  title: string;
  client: string;
  year: string;
  category: 'Product Strategy' | 'UI/UX Design' | 'Web Development' | 'ERP Redesign' | 'Digital Experience';
  tagline: string;
  coverImage: string;
  summary: string;
  problem: {
    overview: string;
    keyPoints: string[];
  };
  solution: {
    overview: string;
    keyPoints: string[];
  };
  impact: {
    overview: string;
    metrics: MetricImpact[];
  };
  testimonial?: {
    quote: string;
    author: string;
    title: string;
    company: string;
  };
  techStack: string[];
  featured: boolean;
}

export interface CareerExperience {
  id: string;
  period: string;
  role: string;
  organization: string;
  location: string;
  narrative: string;
  keyMilestones: string[];
  skillsApplied: string[];
}

export interface ROICalculatorInput {
  currentMonthlyActiveUsers: number;
  avgConversionRate: number; // in percentage e.g. 2.5
  avgCustomerLifetimeValue: number; // in USD or IDR
  currentDevDesignBottleneckDays: number; // e.g. 14 days delay
  teamSize: number;
}

export interface ROICalculatorResult {
  projectedConversionUplift: number; // e.g. +35%
  estimatedRevenueGain: number; // calculated annualized increase
  timeToMarketSavedDays: number; // e.g. 8 days saved per sprint
  designSystemEfficiencyGain: number; // percentage reduction in dev debt
  paybackPeriodMonths: number;
}

export interface ContactFormInput {
  name: string;
  email: string;
  company?: string;
  projectType: string;
  budgetRange: string;
  timeline: string;
  message: string;
  agreeToTerms?: boolean;
}

export interface NoteItem {
  id: string;
  date: string;
  category: string;
  title: string;
  snippet: string;
  readTime: string;
  link?: string;
}

