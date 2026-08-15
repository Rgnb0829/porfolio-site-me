import {
  CorePrinciple,
  MethodologyStep,
  ServiceItem,
  ProjectCaseStudy,
  CareerExperience,
  NoteItem,
} from '@/types';

export const PERSONAL_INFO = {
  name: 'Rakhawn',
  fullName: 'Rakhawn Arisya',
  title: 'Creative Director & Principal Product Strategist',
  roles: ['Creative Director', 'Brand Strategist', 'UX Writer', 'Product Designer'],
  location: 'Jakarta, Indonesia • Remote Global',
  status: 'Tersedia untuk Proyek Strategis Q3/Q4',
  tagline: 'Membangun Produk Digital Berkelas Editorial dengan Fondasi Arsitektur Sistem & Pertumbuhan Bisnis Terukur.',
  bio: `Saya percaya bahwa produk luar biasa lahir di persimpangan antara kejujuran brand, kejelasan narasi UX, dan presisi rekayasa visual. Lebih dari 8 tahun pengalaman memimpin transformasi pengalaman digital bagi brand finansial, platform enterprise, hingga startup SaaS berkecepatan tinggi.

Cara pikir saya tidak dimulai dari estetika visual semata, melainkan dari pembongkaran masalah bisnis mendasar: Mengapa pengguna menyerah? Di mana friksi operasional terjadi? Dan bagaimana desain dapat menjadi daya ungkit (leverage) paling efektif untuk profitabilitas perusahaan?`,
  email: 'creative.rakhawn@gmail.com',
  github: 'https://github.com',
  linkedin: 'https://linkedin.com',
  readcv: 'https://read.cv',
  stats: [
    { label: 'Tahun Pengalaman', value: '8+' },
    { label: 'Nilai Transaksi Sistem', value: '$120M+' },
    { label: 'Retensi Pengguna Rata-Rata', value: '+42%' },
    { label: 'Proyek Enterprise Selesai', value: '35+' },
  ],
};

export const CORE_PRINCIPLES: CorePrinciple[] = [
  {
    id: 'principle-1',
    number: '01',
    title: 'Clarity Over Noise',
    subtitle: 'Kejelasan Di Atas Kebisingan',
    description: 'Menghilangkan setiap elemen dekoratif yang tidak memiliki fungsi pesan atau fungsi interaksi. Desain yang hebat berbicara dengan tenang namun tegas.',
    keyTakeaway: 'Pengguna tidak membeli kompleksitas; mereka membeli kemudahan dalam mencapai tujuan mereka.',
    iconName: 'Compass',
  },
  {
    id: 'principle-2',
    number: '02',
    title: 'Business & User Empathy',
    subtitle: 'Simbiosis Bisnis & Pengguna',
    description: 'Desain yang indah tanpa konversi adalah seni tanpa tujuan. Kami merancang solusi yang memuaskan jiwa pengguna sekaligus memperkuat bottom-line bisnis.',
    keyTakeaway: 'Setiap komponen UI harus menjadi jawaban atas metrik bisnis terukur.',
    iconName: 'Scale',
  },
  {
    id: 'principle-3',
    number: '03',
    title: 'Design System As Infrastructure',
    subtitle: 'Sistem Desain Sebagai Infrastruktur',
    description: 'Bukan sekadar pustaka warna dan tombol, tetapi fondasi arsitektural yang mempercepat siklus rilis dan mengurangi dev debt hingga 60%.',
    keyTakeaway: 'Konsistensi menghasilkan kepercayaan; kecepatan iterasi menghasilkan kemenangan pasar.',
    iconName: 'Layers',
  },
  {
    id: 'principle-4',
    number: '04',
    title: 'Data-Informed, Craft-Driven',
    subtitle: 'Keputusan Data dengan Sentuhan Kriya Refined',
    description: 'Data kuantitatif memberi tahu kami "apa" yang terjadi, sementara intuisi kriya dan empati UX memberi tahu kami "mengapa" dan "bagaimana" menyelesaikannya.',
    keyTakeaway: 'Data menjadi arah navigasi, tetapi selera (taste) dan kriya menjadi keunggulan pembeda.',
    iconName: 'Sparkles',
  },
];

export const METHODOLOGY_STEPS: MethodologyStep[] = [
  {
    step: '01',
    phase: 'Business Insight & Framing',
    title: 'Memahami Tujuan Bisnis & Realitas Pasar',
    description: 'Melakukan analisis mendalam terhadap unit ekonomi, hambatan operasional, dan positioning brand. Kami menyelaraskan ekspektasi stakeholder sebelum menulis satu baris kode.',
    deliverables: ['Stakeholder Alignment Matrix', 'Competitive Advantage Audit', 'Target Impact KPIs'],
    mindset: 'Mendengar untuk memahami, bukan sekadar untuk merespons.',
  },
  {
    step: '02',
    phase: 'User Narrative & UX Writing',
    title: 'Menerjemahkan Kebutuhan Pengguna Menjadi Narasi',
    description: 'Mengolah rasa sakit pengguna (user pain points) menjadi alur intuitif dan UX writing yang manusiawi, menghapus bahasa birokratis yang membingungkan.',
    deliverables: ['User Mental Model Mapping', 'Editorial Copy Guidelines', 'Frictionless Wireframe Flow'],
    mindset: 'Bahasa yang jelas memangkas kognitif beban pengguna.',
  },
  {
    step: '03',
    phase: 'Technical Boundaries & System Architecture',
    title: 'Navigasi Batasan Teknis & Arsitektur',
    description: 'Bekerja berdampingan dengan tim rekayasa untuk memastikan ide desain realistis, dapat diskalakan, dan tidak memicu hambatan performa frontend.',
    deliverables: ['Design-Engineering Token Mapping', 'Component Hierarchy Specs', 'Feasibility Assessment'],
    mindset: 'Batasan teknis adalah katalisator kreativitas sejati.',
  },
  {
    step: '04',
    phase: 'High-Fidelity Polish & Continuous Evaluation',
    title: 'Eksplorasi Editorial & Evaluasi Dampak',
    description: 'Mengeksekusi visual berkelas tinggi dengan tipografi presisi, micro-interactions elegan, serta mengukur performa nyata pasca-peluncuran.',
    deliverables: ['Production Design Specs', 'Interactive Motion Prototypes', 'Post-Launch UX Audit'],
    mindset: 'Kualitas kriya terletak pada detail yang bahkan tidak disadari pengguna.',
  },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'product-strategy',
    title: 'Product Strategy & Vision',
    role: 'Strategist & Architect',
    tagline: 'Merumuskan arah kompas produk digital agar tepat sasaran di pasar.',
    description: 'Transformasi ide bisnis yang kompleks menjadi roadmap produk yang jelas, siap dieksekusi, dan terorientasi pada metrik keterserapan pasar (Product-Market Fit).',
    capabilities: [
      'Value Proposition & Positioning',
      'User Research & Behavioral Mapping',
      'Feature Prioritization Framework',
      'Product Roadmap & Growth Loops',
    ],
    idealFor: 'Founder & Eksekutif yang membutuhkan arah strategis jernih sebelum investasi pengembangan besar.',
    outcome: 'Kepastian arah pengembangan dan penghematan biaya re-work.',
  },
  {
    id: 'ui-ux-design',
    title: 'UI/UX Design & Design Systems',
    role: 'Product Designer',
    tagline: 'Pengalaman antarmuka intuitif yang memikat mata dan menenangkan pikiran.',
    description: 'Perancangan antarmuka berskala tinggi dari sketsa konseptual hingga design token siap pakai yang terintegrasi dengan tim developer.',
    capabilities: [
      'Editorial & Minimalist UI Design',
      'Design System Tokens (Figma to Code)',
      'Accessibility & Typography Systems',
      'Prototyping & Motion Micro-Interactions',
    ],
    idealFor: 'Aplikasi SaaS, E-Commerce, dan FinTech yang menginginkan tampilan kelas dunia seperti Apple/Linear.',
    outcome: 'Peningkatan adopsi pengguna dan konsistensi visual di seluruh touchpoint.',
  },
  {
    id: 'web-development',
    title: 'Web Development & Digital Experience',
    role: 'Frontend Experience Engineer',
    tagline: 'Website berperforma kilat dengan keindahan tipografi dan animasi halus.',
    description: 'Pengembangan website modern berbasis Next.js, React, Tailwind CSS, dan Motion dengan mengedepankan performa SEO, aksesibilitas, dan kelancaran 60fps.',
    capabilities: [
      'Next.js / React Modern Stack',
      'Smooth Motion & Interactive Storytelling',
      'Performance Optimization & Core Web Vitals',
      'Editorial Content Management Integration',
    ],
    idealFor: 'Brand premium, landing page konversi tinggi, dan situs korporat bereputasi tinggi.',
    outcome: 'Waktu muat instan (<1 detik) dan impresi brand yang tak terlupakan.',
  },
  {
    id: 'erp-enterprise',
    title: 'ERP & Enterprise System Redesign',
    role: 'Enterprise Systems Designer',
    tagline: 'Menyerhanakan alur kerja kompleks menjadi sistem yang menyenangkan digunakan.',
    description: 'Merombak perangkat lunak internal/ERP yang kaku dan usang menjadi dashboard ergonomis yang meningkatkan produktivitas tim operasional.',
    capabilities: [
      'Complex Workflow Simplification',
      'Data-Dense Table & Analytics UX',
      'Role-Based Access Control Interface',
      'Efficiency & Error Reduction Audit',
    ],
    idealFor: 'Perusahaan logistik, manufaktur, dan keuangan dengan alur kerja operasional padat.',
    outcome: 'Penurunan waktu pemrosesan tugas hingga 45% dan pengurangan kesalahan manusia.',
  },
  {
    id: 'brand-ux-writing',
    title: 'Brand Strategy & UX Writing',
    role: 'Brand Strategist & Writer',
    tagline: 'Menyusun narasi verbal yang membangun rasa percaya sejak detik pertama.',
    description: 'Perumusan klaim nilai (value claims), mikro-kopi UI yang hangat, serta panduan gaya narasi yang memperkuat posisi brand di mata pelanggan.',
    capabilities: [
      'Brand Narrative & Tone of Voice',
      'UI Microcopy & Onboarding Messaging',
      'Editorial Storytelling & Campaign Copy',
      'Product Terminology Standardization',
    ],
    idealFor: 'Perusahaan yang ingin mengubah bahasa teknis kaku menjadi percakapan yang ramah dan lugas.',
    outcome: 'Kejelasan pesan yang meningkatkan retensi dan pendaftaran pengguna.',
  },
];

export const FEATURED_PROJECTS: ProjectCaseStudy[] = [
  {
    id: 'aether-erp',
    slug: 'aether-erp-system',
    title: 'Aether Operations ERP',
    client: 'Aether Logistics Asia',
    year: '2025',
    category: 'ERP Redesign',
    tagline: 'Transformasi dashboard logistik enterprise dari 18 langkah menjadi 4 alur kerja intuitif.',
    coverImage: '/images/editorial_banner.jpg',
    summary: 'Aether memproses lebih dari 50.000 pengiriman harian tetapi terkendala sistem internal 2012 yang lambat. Kami merancang ulang seluruh arsitektur antarmuka menjadi konsol operasional modern.',
    problem: {
      overview: 'Operator lapangan menghabiskan rata-rata 14 menit per transaksi akibat tabel data yang padat, istilah membingungkan, dan navigasi yang terpisah di 6 tab terpisah.',
      keyPoints: [
        'Kognitif beban berlebih dengan 80+ kolom data ditampilkan bersamaan tanpa hierarki visual.',
        'Sering terjadi kesalahan input data manifes senilai ribuan dolar per minggu.',
        'Waktu pelatihan staf baru mencapai 3 minggu penuh.',
      ],
    },
    solution: {
      overview: 'Mengembangkan "Command Palette UX" dan tata letak modular berbasis tugas (task-centric layout) yang menyesuaikan tampilan dengan peran pengguna secara dinamis.',
      keyPoints: [
        'Arsitektur tabel modular dengan smart filters dan inspeksi instan via slide-over panel.',
        'Gaya tulisan mikro yang menghilangkan kode birokrasi menjadi aksi manusiawi.',
        'Sistem keyboard shortcut ala Power-User untuk operator tingkat lanjut.',
      ],
    },
    impact: {
      overview: 'Peluncuran sistem baru menghasilkan efisiensi operasional dramatis dan tingkat kepuasan tim internal mencapai 94%.',
      metrics: [
        { label: 'Waktu Input Manifes', value: '-62%', description: 'Turun dari 14 menit menjadi 5.2 menit' },
        { label: 'Kesalahan Input Data', value: '-88%', description: 'Penurunan signifikan pada klaim pengiriman' },
        { label: 'Onboarding Staf Baru', value: '3 Hari', description: 'Dipangkas dari 3 minggu pelatihan' },
        { label: 'NPS Operator Internal', value: '+78', description: 'Dari -12 pada sistem terdahulu' },
      ],
    },
    testimonial: {
      quote: 'Rakhawn tidak hanya mendesain antarmuka baru; ia merombak cara seluruh organisasi kami berpikir tentang efisiensi kerja harian.',
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
    tagline: 'Pengalaman manajemen portofolio aset mewah yang tenang, transparan, dan presisi.',
    coverImage: '/images/hero_portrait.jpg',
    summary: 'Aplikasi manajemen kekayaan untuk nasabah High-Net-Worth Individual (HNWI) yang membutuhkan visibilitas investasi real-time dengan estetika editorial ala majalah keuangan papan atas.',
    problem: {
      overview: 'Nasabah kelas atas merasa aplikasi perbankan tradisional terlalu sibuk dengan promosi yang tidak relevan dan laporan grafik yang sulit dipahami dalam sekejap.',
      keyPoints: [
        'Navigasi yang penuh gangguan iklan dan wawasan finansial yang tersembunyi.',
        'Visual grafik yang kaku dan tidak responsif di perangkat mobile/tablet.',
        'Rasa kurang aman karena penyampaian data yang terasa impersonal.',
      ],
    },
    solution: {
      overview: 'Menciptakan "Quiet Luxury Digital Space" — antarmuka minimalis dengan ruang bernapas luas, visualisasi grafik Recharts kustom, dan narasi performa mingguan yang ditulis otomatis.',
      keyPoints: [
        'Dashboard ringkasan aset dengan tipografi serif elegan dan mode proteksi privasi.',
        'Fitur "Executive Insights" yang mengubah angka mentah menjadi paragraf narasi ringkas.',
        'Alur persetujuan investasi satu-ketukan dengan keamanan biometrik terintegrasi.',
      ],
    },
    impact: {
      overview: 'Aplikasi memperoleh apresiasi tinggi dari nasabah prioritas dan meningkatkan dana kelolaan (AUM) digital secara signifikan.',
      metrics: [
        { label: 'Peningkatan Adopsi Digital', value: '+140%', description: 'Nasabah HNWI aktif menggunakan app harian' },
        { label: 'Rata-Rata Waktu Sesi', value: '+4.5 Min', description: 'Membaca laporan kustom mingguan' },
        { label: 'Peningkatan AUM Digital', value: '+$35M', description: 'Diinvestasikan melalui fitur ekspres baru' },
      ],
    },
    testimonial: {
      quote: 'Desain karya Rakhawn berhasil menangkap esensi eksklusivitas merek kami. Nasabah kami sangat menyukai ketenangan antarmukanya.',
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
    tagline: 'Pengalaman E-Commerce naratif dengan tingkat konversi checkout naik 34%.',
    coverImage: '/images/editorial_banner.jpg',
    summary: 'Penggabungan media publikasi gaya hidup dan platform belanja langsung (shoppable editorial) untuk brand perlengkapan rumah mewah.',
    problem: {
      overview: 'Toko online lama terpisah antara blog narasi produk dan halaman checkout, mengakibatkan hilangnya niat beli saat pembeli berpindah halaman.',
      keyPoints: [
        'Rasio pentalan (bounce rate) tinggi pada artikel editorial.',
        'Proses checkout 5 langkah yang menyebabkan penundaan keranjang (cart abandonment).',
      ],
    },
    solution: {
      overview: 'Pengalaman "Seamless Cart & Storytelling" tempat pengguna dapat membaca kisah pembuatan produk dan menambahkan barang ke keranjang tanpa pernah meninggalkan alur bacaan.',
      keyPoints: [
        'Shoppable hotspots langsung di dalam fotografi editorial.',
        'Checkout 1-halaman melayang yang responsif di seluruh tipe layar.',
      ],
    },
    impact: {
      overview: 'Pendapatan e-commerce meningkat dalam 60 hari pertama setelah rilis.',
      metrics: [
        { label: 'Kenaikan Konversi', value: '+34%', description: 'Dari pengunjung pembaca menjadi pembeli' },
        { label: 'Cart Abandonment', value: '-28%', description: 'Penurunan angka keranjang ditinggalkan' },
      ],
    },
    techStack: ['Next.js', 'Tailwind CSS', 'Shopify Storefront API', 'Motion'],
    featured: false,
  },
];

export const CAREER_NARRATIVE: CareerExperience[] = [
  {
    id: 'exp-1',
    period: '2023 — Sekarang',
    role: 'Principal Product Strategist & Creative Director',
    organization: 'Studio Rakhawn & Independent Practice',
    location: 'Jakarta & Remote',
    narrative: 'Memimpin konsultasi strategis tingkat tinggi untuk perusahaan teknologi, fintech, dan brand gaya hidup yang ingin merajut pengalaman produk dari level konsep bisnis hingga eksekusi visual editorial.',
    keyMilestones: [
      'Memimpin proyek perancangan ulang sistem ERP untuk logistik berskala nasional.',
      'Membimbing 12+ tim produk internal klien dalam mengadopsi Design System berbasis token.',
      'Merancang antarmuka aplikasi finansial dengan AUM gabungan melebihi $120M.',
    ],
    skillsApplied: ['Product Vision', 'System Design', 'Design Leadership', 'Executive Alignment'],
  },
  {
    id: 'exp-2',
    period: '2020 — 2023',
    role: 'Lead UX Architect & Brand Strategist',
    organization: 'Nexus Design Collective',
    location: 'Singapore / Remote',
    narrative: 'Menjawab kebutuhan produk SaaS multinasional untuk menyelaraskan narasi brand dengan interaksi UI secara konsisten di pasar Asia Tenggara.',
    keyMilestones: [
      'Membangun framework UX Writing yang diadopsi oleh 4 tim produk regional.',
      'Meningkatkan angka konversi registrasi rata-rata klien dari 2.1% menjadi 4.8%.',
      'Memenangkan penghargaan Regional Excellence for Digital Craft 2022.',
    ],
    skillsApplied: ['UX Writing', 'Design Systems', 'A/B Experimentation', 'Cross-functional Alignment'],
  },
  {
    id: 'exp-3',
    period: '2017 — 2020',
    role: 'Senior UI/UX Designer',
    organization: 'Kreatif Labs Indonesia',
    location: 'Jakarta',
    narrative: 'Awal perjalanan mendalam dalam membedah alur transaksi e-commerce, perbankan mobile, dan landing page performa tinggi.',
    keyMilestones: [
      'Mendesain ulang aplikasi mobile perbankan dengan 500k+ pengguna aktif bulanan.',
      'Menerapkan metodologi user research berbasis observasi langsung.',
    ],
    skillsApplied: ['User Research', 'Mobile App UI', 'Interaction Design', 'Prototyping'],
  },
];

export const FAQS = [
  {
    question: 'Bagaimana model keterlibatan kerja dengan Rakhawn?',
    answer: 'Saya menerima proyek berbasis Retainer Strategis (jangka panjang) maupun Project-Based Scope (skala khusus). Setiap kerja sama dimulai dengan Discovery Workshop untuk menyelaraskan ekspektasi.',
  },
  {
    question: 'Berapa lama estimasi waktu pengerjaan untuk proyek UI/UX & Strategy?',
    answer: 'Biasanya berkisar antara 4 hingga 12 minggu, tergantung pada kompleksitas sistem, jumlah riset pengguna yang dibutuhkan, dan kedalaman Design System.',
  },
  {
    question: 'Apakah Anda juga membantu sampai tahap pengerjaan koding frontend?',
    answer: 'Ya. Saya memimpin pengembangan frontend menggunakan Next.js, React, Tailwind CSS, dan Motion untuk memastikan hasil akhir 100% presisi dengan desain tanpa ada penurunan kualitas.',
  },
];

export const RECENT_NOTES: NoteItem[] = [
  {
    id: 'note-1',
    date: '12 Ags 2026',
    category: 'Design Systems',
    title: 'Sistem Desain Bukan Sekadar Library UI, Melainkan Kontrak Arsitektur Produk',
    snippet: 'Mengapa efisiensi tim engineering meningkat 60% ketika token desain dikelola sebagai dependensi kode yang ketat, bukan sekadar file Figma.',
    readTime: '3 min read',
    link: '#',
  },
  {
    id: 'note-2',
    date: '28 Jul 2026',
    category: 'UX Strategy',
    title: 'Empati Bisnis dalam UX Writing: Mengurangi Friksi Tanpa Memicu Fatigue',
    snippet: 'Cara merumuskan mikrokopi transaksional yang memberikan kejelasan instan pada pengguna sekaligus mendorong konversi yang bermakna.',
    readTime: '4 min read',
    link: '#',
  },
  {
    id: 'note-3',
    date: '15 Jun 2026',
    category: 'Product Leadership',
    title: 'Mengukur ROI Kriya Visual dalam Lanskap SaaS Enterprise B2B',
    snippet: 'Kriya visual berkelas editorial bukan sekadar masalah preferensi estetika—itu adalah daya pembeda utama di pasar yang jenuh.',
    readTime: '5 min read',
    link: '#',
  },
  {
    id: 'note-4',
    date: '02 Mei 2026',
    category: 'Micro-Interactions',
    title: 'Tiga Pola Animasi Umpan Balik yang Secara Langsung Meningkatkan Retensi',
    snippet: 'Refleksi mendalam tentang ritme transisi antarmuka yang memberi rasa ketahanan (*perceived speed*) tanpa mengorbankan performa.',
    readTime: '2 min read',
    link: '#',
  },
];

