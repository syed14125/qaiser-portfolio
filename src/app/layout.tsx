import type { Metadata, Viewport } from 'next';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/ui';
import { profile } from '@/data/portfolio';
import './globals.css';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '');
export const metadata: Metadata = {
  ...(siteUrl ? { metadataBase: new URL(siteUrl), alternates: { canonical: '/' } } : {}),
  title: { default: `${profile.name} | Machine Learning Engineer`, template: `%s | ${profile.shortName}` },
  description: 'Machine Learning Engineer and MPhil AI researcher in Bahawalpur, Pakistan. Explore projects in LLMs, RAG, NLP, computer vision and local AI agents.',
  authors: [{ name: profile.name }],
  keywords: ['Machine Learning Engineer', 'Qaiser Bukhari', 'LLMs', 'NLP', 'Computer Vision', 'RAG', 'Pakistan'],
  openGraph: { type: 'website', locale: 'en_GB', title: `${profile.name} | Machine Learning Engineer`, description: 'Research-minded. Application-focused. Explore my work in LLMs, NLP and computer vision.', siteName: `${profile.shortName} · AI / ML`, ...(siteUrl ? { url: '/', images: [{ url: '/artwork/social.jpg', width: 1200, height: 630, alt: 'Qaiser Bukhari — Machine Learning Engineer' }] } : {}) },
  twitter: { card: siteUrl ? 'summary_large_image' : 'summary', title: `${profile.shortName} | Machine Learning Engineer`, description: 'LLMs, NLP, computer vision and practical AI.', ...(siteUrl ? { images: ['/artwork/social.jpg'] } : {}) },
  icons: { icon: '/icon.svg' },
};
export const viewport: Viewport = { themeColor: '#091322', colorScheme: 'dark' };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en-GB"><body id="top"><a href="#main" className="skip-link">Skip to content</a><Navigation />{children}<Footer /></body></html>;
}
