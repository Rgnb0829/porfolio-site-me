import type { Metadata } from 'next';
import './globals.css';
import { AppProvider } from '@/context/AppContext';

export const metadata: Metadata = {
  title: 'Rakha.wn — Creative Director & Product Strategist',
  description: 'Editorial portfolio and design strategy of Rakhawn. Product Strategy, UI/UX Design, Web Development, ERP Systems & Brand Strategy.',
  openGraph: {
    title: 'Rakha.wn — Creative Director & Product Strategist',
    description: 'Editorial portfolio and design strategy of Rakhawn. Product Strategy, UI/UX Design, Web Development, ERP Systems & Brand Strategy.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rakha.wn — Creative Director & Product Strategist',
    description: 'Editorial portfolio and design strategy of Rakhawn.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className="bg-[#F5F2ED] text-[#1A1A1A] font-sans antialiased selection:bg-[#1A1A1A] selection:text-[#F5F2ED]" suppressHydrationWarning>
        <AppProvider>
          {children}
        </AppProvider>
      </body>
    </html>
  );
}
