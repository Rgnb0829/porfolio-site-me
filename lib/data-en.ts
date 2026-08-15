import {
  CorePrinciple,
  MethodologyStep,
  ServiceItem,
  ProjectCaseStudy,
  CareerExperience,
  NoteItem,
} from '@/types';

export const PERSONAL_INFO_EN = {
  name: 'Rakhawn',
  fullName: 'Rakhawn Arisya',
  title: 'Creative Director & Principal Product Strategist',
  roles: ['Creative Director', 'Brand Strategist', 'UX Writer', 'Product Designer'],
  location: 'Jakarta, Indonesia • Remote Global',
  status: 'Available for Q3/Q4 Strategic Projects',
  tagline: 'Building Editorial-Grade Digital Products Grounded in System Architecture & Measurable Business Growth.',
  bio: `I believe extraordinary digital products are forged at the intersection of brand integrity, UX clarity, and visual engineering precision. Over 8+ years leading experience transformations for financial brands, enterprise platforms, and high-velocity SaaS scale-ups.

My strategic approach doesn't begin with surface aesthetics—it starts by dissecting core business bottlenecks: Why do users drop off? Where does operational friction occur? And how can design serve as the ultimate leverage for enterprise profitability?`,
  email: 'creative.rakhawn@gmail.com',
  github: 'https://github.com',
  linkedin: 'https://linkedin.com',
  readcv: 'https://read.cv',
  stats: [
    { label: 'Years Experience', value: '8+' },
    { label: 'System Volume Processed', value: '$120M+' },
    { label: 'Avg User Retention Gain', value: '+42%' },
    { label: 'Enterprise Projects Delivered', value: '35+' },
  ],
};

export const CORE_PRINCIPLES_EN: CorePrinciple[] = [
  {
    id: 'principle-1',
    number: '01',
    title: 'Clarity Over Noise',
    subtitle: 'Kejelasan Di Atas Kebisingan',
    description: 'Eliminating every decorative element that serves no communication or interaction function. Exceptional design speaks with quiet authority.',
    keyTakeaway: 'Users don\'t buy complexity; they buy ease in achieving their goals.',
    iconName: 'Compass',
  },
  {
    id: 'principle-2',
    number: '02',
    title: 'Business & User Empathy',
    subtitle: 'Simbiosis Bisnis & Pengguna',
    description: 'Beautiful design without conversion is art without purpose. We architect solutions that satisfy user intent while compounding bottom-line growth.',
    keyTakeaway: 'Every UI component must serve as a answer to a measurable business KPI.',
    iconName: 'Scale',
  },
  {
    id: 'principle-3',
    number: '03',
    title: 'Design System As Infrastructure',
    subtitle: 'Sistem Desain Sebagai Infrastruktur',
    description: 'Far beyond a color & button library—an architectural foundation that accelerates release cycles and slashes design debt by 60%.',
    keyTakeaway: 'Consistency breeds trust; speed of iteration secures market capture.',
    iconName: 'Layers',
  },
  {
    id: 'principle-4',
    number: '04',
    title: 'Data-Informed, Craft-Driven',
    subtitle: 'Keputusan Data dengan Sentuhan Kriya Refined',
    description: 'Quantitative data reveals "what" is happening, while craft intuition and UX empathy illuminate "why" and "how" to solve it.',
    keyTakeaway: 'Data sets the vector, but taste and craft deliver the market edge.',
    iconName: 'Sparkles',
  },
];

export const METHODOLOGY_STEPS_EN: MethodologyStep[] = [
  {
    step: '01',
    phase: 'Business Insight & Framing',
    title: 'Decoding Business Goals & Market Realities',
    description: 'Conducting deep-dive analysis on unit economics, operational hurdles, and brand positioning. We align stakeholder expectations before writing a single line of code.',
    deliverables: ['Stakeholder Alignment Matrix', 'Competitive Advantage Audit', 'Target Impact KPIs'],
    mindset: 'Listen to comprehend, not merely to respond.',
  },
  {
    step: '02',
    phase: 'User Narrative & UX Writing',
    title: 'Translating Human Pain Points into Intuitive Flows',
    description: 'Converting user friction into seamless paths and human-centered UX copy, stripping away confusing bureaucratic jargon.',
    deliverables: ['User Mental Model Mapping', 'Editorial Copy Guidelines', 'Frictionless Wireframe Flow'],
    mindset: 'Precise language directly reduces cognitive overhead.',
  },
  {
    step: '03',
    phase: 'Technical Boundaries & System Architecture',
    title: 'Navigating Tech Constraints & System Design',
    description: 'Working side-by-side with engineering leads to ensure design ideas are realistic, scalable, and zero-compromise on frontend performance.',
    deliverables: ['Design-Engineering Token Mapping', 'Component Hierarchy Specs', 'Feasibility Assessment'],
    mindset: 'Technical constraints are the catalyst for genuine innovation.',
  },
  {
    step: '04',
    phase: 'High-Fidelity Polish & Continuous Evaluation',
    title: 'Editorial Execution & Impact Measurement',
    description: 'Executing high-grade visuals with precision typography, tasteful motion micro-interactions, and tracking real post-launch performance metrics.',
    deliverables: ['Production Design Specs', 'Interactive Motion Prototypes', 'Post-Launch UX Audit'],
    mindset: 'Craft quality lives in the nuances users appreciate unconsciously.',
  },
];

export const SERVICES_EN: ServiceItem[] = [
  {
    id: 'product-strategy',
    title: 'Product Strategy & Vision',
    role: 'Strategist & Architect',
    tagline: 'Formulating the strategic compass for market-leading digital products.',
    description: 'Transforming complex business ideas into clear, executable product roadmaps oriented around product-market fit metrics.',
    capabilities: [
      'Value Proposition & Positioning',
      'User Research & Behavioral Mapping',
      'Feature Prioritization Framework',
      'Product Roadmap & Growth Loops',
    ],
    idealFor: 'Founders & Executives needing clear strategic direction prior to heavy capital investment.',
    outcome: 'Elimination of re-work overhead and bulletproof product trajectory.',
  },
  {
    id: 'ui-ux-design',
    title: 'UI/UX Design & Design Systems',
    role: 'Product Designer',
    tagline: 'Intuitive interface experiences that captivate visually and reduce cognitive load.',
    description: 'High-scale interface engineering from conceptual wireframes to production token libraries integrated directly with developer pipelines.',
    capabilities: [
      'Editorial & Minimalist UI Design',
      'Design System Tokens (Figma to Code)',
      'Accessibility & Typography Systems',
      'Prototyping & Motion Micro-Interactions',
    ],
    idealFor: 'SaaS, E-Commerce, and FinTech platforms striving for world-class design standard.',
    outcome: 'Accelerated user adoption and absolute visual coherence across touchpoints.',
  },
  {
    id: 'web-development',
    title: 'Web Development & Digital Experience',
    role: 'Frontend Experience Engineer',
    tagline: 'Blazing-fast websites with editorial typography and fluid 60fps motion.',
    description: 'Modern frontend engineering using Next.js, React, Tailwind CSS, and Motion, prioritizing SEO performance, accessibility, and sub-second load times.',
    capabilities: [
      'Next.js / React Modern Stack',
      'Smooth Motion & Interactive Storytelling',
      'Performance Optimization & Core Web Vitals',
      'Editorial Content Management Integration',
    ],
    idealFor: 'Premium brands, high-converting launch pages, and enterprise web experiences.',
    outcome: 'Sub-second load speeds and an unforgettable editorial brand impression.',
  },
  {
    id: 'erp-enterprise',
    title: 'ERP & Enterprise System Redesign',
    role: 'Enterprise Systems Designer',
    tagline: 'Simplifying complex enterprise workflows into ergonomic operational tools.',
    description: 'Overhauling legacy, cluttered ERP software into intuitive dashboards that multiply team productivity and eliminate human errors.',
    capabilities: [
      'Complex Workflow Simplification',
      'Data-Dense Table & Analytics UX',
      'Role-Based Access Control Interface',
      'Efficiency & Error Reduction Audit',
    ],
    idealFor: 'Logistics, manufacturing, and financial institutions with high-density operational flows.',
    outcome: 'Up to 45% reduction in task processing duration and drastic error elimination.',
  },
  {
    id: 'brand-ux-writing',
    title: 'Brand Strategy & UX Writing',
    role: 'Brand Strategist & Writer',
    tagline: 'Crafting compelling verbal narratives that cultivate trust from second one.',
    description: 'Formulating strategic value claims, warm transactional microcopy, and editorial tone-of-voice frameworks that solidify brand authority.',
    capabilities: [
      'Brand Narrative & Tone of Voice',
      'UI Microcopy & Onboarding Messaging',
      'Editorial Storytelling & Campaign Copy',
      'Product Terminology Standardization',
    ],
    idealFor: 'Companies seeking to transform rigid technical speak into approachable, confident dialogue.',
    outcome: 'Message clarity that elevates signup conversion and long-term user retention.',
  },
];

export const FEATURED_PROJECTS_EN: ProjectCaseStudy[] = [
  {
    id: 'aether-erp',
    slug: 'aether-erp-system',
    title: 'Aether Operations ERP',
    client: 'Aether Logistics Asia',
    year: '2025',
    category: 'ERP Redesign',
    tagline: 'Transforming an enterprise logistics dashboard from 18 steps to 4 intuitive workflows.',
    coverImage: '/images/editorial_banner.jpg',
    summary: 'Aether handles over 50,000 daily shipments but suffered under a sluggish 2012 internal portal. We rebuilt their entire interface architecture into a modern operational console.',
    problem: {
      overview: 'Field operators spent an average of 14 minutes per entry due to cluttered data tables, cryptic codes, and fractured navigation across 6 disparate tabs.',
      keyPoints: [
        'Cognitive overload with 80+ simultaneous unorganized data columns.',
        'Frequent data entry mistakes causing thousands in weekly manifest discrepancies.',
        'New operator onboarding required 3 full weeks of intensive training.',
      ],
    },
    solution: {
      overview: 'Engineered a "Command Palette UX" and modular task-centric layout that dynamically adjusts views based on user role.',
      keyPoints: [
        'Modular table architecture featuring smart filters and instant slide-over inspection.',
        'UX microcopy overhaul transforming bureaucratic jargon into human actions.',
        'Power-user keyboard shortcut system for high-velocity dispatchers.',
      ],
    },
    impact: {
      overview: 'The new system deployment yielded dramatic operational throughput and a 94% team satisfaction rating.',
      metrics: [
        { label: 'Manifest Entry Duration', value: '-62%', description: 'Slashed from 14 mins to 5.2 mins' },
        { label: 'Data Entry Error Rate', value: '-88%', description: 'Drastic reduction in shipment claims' },
        { label: 'New Staff Onboarding', value: '3 Days', description: 'Reduced from 3 weeks training' },
        { label: 'Internal Operator NPS', value: '+78', description: 'Up from -12 on legacy platform' },
      ],
    },
    testimonial: {
      quote: 'Rakhawn didn\'t just redesign an interface; he overhauled how our entire enterprise thinks about daily operational efficiency.',
      author: 'Hendrik Pratama',
      title: 'Chief Operating Officer',
      company: 'Aether Logistics',
    },
    techStack: ['Next.js 15', 'Tailwind CSS', 'Framer Motion', 'Zustand', 'Shadcn UI'],
    featured: true,
  },
  {
    id: 'luminary-wealth',
    slug: 'luminary-wealth-app',
    title: 'Luminary Wealth Platform',
    client: 'Luminary Private Capital',
    year: '2025',
    category: 'UI/UX Design',
    tagline: 'A calm, transparent, and precise asset management experience for HNWI clients.',
    coverImage: '/images/hero_portrait.jpg',
    summary: 'A luxury wealth management suite for High-Net-Worth Individuals requiring real-time portfolio visibility paired with high-end editorial aesthetics.',
    problem: {
      overview: 'Affluent clients found traditional banking apps cluttered with irrelevant cross-sell promotions and incomprehensible chart walls.',
      keyPoints: [
        'Ad-cluttered navigation hiding core financial health metrics.',
        'Rigid, non-responsive chart visualizations on mobile and tablet screens.',
        'Lack of trust stemming from cold, impersonal data presentation.',
      ],
    },
    solution: {
      overview: 'Curated a "Quiet Luxury Digital Space"—a minimalist interface with generous breathing room, custom Recharts visualizations, and automated executive digests.',
      keyPoints: [
        'Asset summary dashboard featuring elegant serif typography and privacy shield mode.',
        'Executive Insights feature converting raw balances into concise written narratives.',
        'One-tap investment approval flow with biometric security.',
      ],
    },
    impact: {
      overview: 'The platform earned exceptional client acclaim and drove significant growth in digital Assets Under Management (AUM).',
      metrics: [
        { label: 'Digital Adoption Boost', value: '+140%', description: 'HNWI clients actively engaging daily' },
        { label: 'Avg Session Duration', value: '+4.5 Min', description: 'Reading weekly custom summaries' },
        { label: 'Digital AUM Growth', value: '+$35M', description: 'Invested via new express feature' },
      ],
    },
    testimonial: {
      quote: 'Rakhawn\'s design captured the exact essence of our brand\'s exclusivity. Our clients praise the serene clarity of the interface.',
      author: 'Clara Sastro',
      title: 'Head of Digital Private Banking',
      company: 'Luminary Wealth',
    },
    techStack: ['React', 'TypeScript', 'Recharts', 'Tailwind CSS', 'Radix UI'],
    featured: true,
  },
  {
    id: 'vanguard-commerce',
    slug: 'vanguard-editorial-checkout',
    title: 'Vanguard Lifestyle Commerce',
    client: 'Vanguard Goods Co.',
    year: '2024',
    category: 'Digital Experience',
    tagline: 'Editorial shoppable commerce experience lifting checkout conversion by 34%.',
    coverImage: '/images/editorial_banner.jpg',
    summary: 'Harmonizing luxury lifestyle publishing with a direct shoppable editorial platform for a heritage home goods manufacturer.',
    problem: {
      overview: 'The legacy online store was fractured between editorial blog stories and the checkout catalog, dropping purchase intent during page transitions.',
      keyPoints: [
        'High bounce rate on editorial journal stories.',
        'Clunky 5-step checkout flow driving severe cart abandonment.',
      ],
    },
    solution: {
      overview: 'Engineered a "Seamless Cart & Storytelling" experience where users explore product origin stories and add items without breaking reading momentum.',
      keyPoints: [
        'Shoppable hotspots embedded within editorial photography.',
        'Floating single-page checkout optimized across mobile devices.',
      ],
    },
    impact: {
      overview: 'E-commerce revenue surged within the first 60 days following launch.',
      metrics: [
        { label: 'Conversion Lift', value: '+34%', description: 'Transitioning readers into buyers' },
        { label: 'Cart Abandonment', value: '-28%', description: 'Reduction in abandoned checkouts' },
      ],
    },
    techStack: ['Next.js', 'Tailwind CSS', 'Shopify Storefront API', 'Motion'],
    featured: false,
  },
];

export const CAREER_NARRATIVE_EN: CareerExperience[] = [
  {
    id: 'exp-1',
    period: '2023 — Present',
    role: 'Principal Product Strategist & Creative Director',
    organization: 'Studio Rakhawn & Independent Practice',
    location: 'Jakarta & Remote',
    narrative: 'Leading high-level strategic advisory for tech enterprises, fintechs, and lifestyle brands seeking to weave product experiences from core business concepts to editorial visual execution.',
    keyMilestones: [
      'Led the ERP system overhaul for a nationwide logistics enterprise.',
      'Mentored 12+ client product teams in adopting tokenized Design Systems.',
      'Architected financial platform interfaces with combined AUM exceeding $120M.',
    ],
    skillsApplied: ['Product Vision', 'System Design', 'Design Leadership', 'Executive Alignment'],
  },
  {
    id: 'exp-2',
    period: '2020 — 2023',
    role: 'Lead UX Architect & Brand Strategist',
    organization: 'Nexus Design Collective',
    location: 'Singapore / Remote',
    narrative: 'Addressing multinational SaaS needs by aligning brand story with UI interaction patterns across Southeast Asian markets.',
    keyMilestones: [
      'Engineered a UX Writing framework adopted across 4 regional product squads.',
      'Increased client average signup conversion from 2.1% to 4.8%.',
      'Awarded Regional Excellence for Digital Craft 2022.',
    ],
    skillsApplied: ['UX Writing', 'Design Systems', 'A/B Experimentation', 'Cross-functional Alignment'],
  },
  {
    id: 'exp-3',
    period: '2017 — 2020',
    role: 'Senior UI/UX Designer',
    organization: 'Kreatif Labs Indonesia',
    location: 'Jakarta',
    narrative: 'Foundation of deep research into e-commerce transaction flows, mobile banking, and high-performance launch pages.',
    keyMilestones: [
      'Redesigned mobile banking app serving 500k+ monthly active users.',
      'Implemented observational user research methodology.',
    ],
    skillsApplied: ['User Research', 'Mobile App UI', 'Interaction Design', 'Prototyping'],
  },
];

export const FAQS_EN = [
  {
    question: 'What is the engagement model with Rakhawn?',
    answer: 'I engage via Strategic Retainers (long-term advisory) and Project-Based Scope (targeted scale). Every engagement begins with a Discovery Workshop to align metrics and outcomes.',
  },
  {
    question: 'What is the typical timeline for UI/UX & Strategy projects?',
    answer: 'Timelines typically span 4 to 12 weeks depending on system complexity, depth of user research required, and Design System scope.',
  },
  {
    question: 'Do you also handle frontend development implementation?',
    answer: 'Yes. I lead frontend engineering using Next.js, React, Tailwind CSS, and Motion to guarantee 100% fidelity to the design spec with zero compromise.',
  },
];

export const RECENT_NOTES_EN: NoteItem[] = [
  {
    id: 'note-1',
    date: 'Aug 12, 2026',
    category: 'Design Systems',
    title: 'Design Systems Are Product Architecture Contracts, Not Just UI Libraries',
    snippet: 'Why engineering team velocity jumps by 60% when design tokens are treated as strict code dependencies rather than static Figma files.',
    readTime: '3 min read',
    link: '#',
  },
  {
    id: 'note-2',
    date: 'Jul 28, 2026',
    category: 'UX Strategy',
    title: 'Business Empathy in UX Writing: Mitigating Friction Without Causing Fatigue',
    snippet: 'How to craft transactional microcopy that delivers instant user clarity while driving meaningful conversion momentum.',
    readTime: '4 min read',
    link: '#',
  },
  {
    id: 'note-3',
    date: 'Jun 15, 2026',
    category: 'Product Leadership',
    title: 'Measuring the ROI of Visual Craft in B2B Enterprise SaaS',
    snippet: 'Editorial-grade visual craft isn\'t an aesthetic luxury—it is the defining brand differentiator in saturated software markets.',
    readTime: '5 min read',
    link: '#',
  },
  {
    id: 'note-4',
    date: 'May 02, 2026',
    category: 'Micro-Interactions',
    title: 'Three Feedback Animation Patterns That Directly Elevate Retention',
    snippet: 'Reflections on interface transition rhythms that enhance perceived speed without sacrificing execution performance.',
    readTime: '2 min read',
    link: '#',
  },
];
