import './globals.css';
import type { Metadata, Viewport } from 'next';
import { Inter, Fraunces, Italianno } from 'next/font/google';
import StyledComponentsRegistry from './lib/registry';
import NavBar from '../components/NavBar';
import { defaultDescription, ogImage, personJsonLd, siteName, siteUrl, websiteJsonLd } from './seo';

const italianno = Italianno({ weight: '400', subsets: ['latin'], variable: '--font-italianno' });
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const fraunces = Fraunces({ subsets: ['latin'], style: ['normal', 'italic'], axes: ['opsz', 'SOFT'], variable: '--font-fraunces' });

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: siteName,
  title: { default: 'Designr.pro - Vegar Berentsen', template: `%s | ${siteName}` },
  description: defaultDescription,
  alternates: { canonical: '/' },
  icons: {
    icon: [{ url: '/dp-Designr.Pro.png', type: 'image/png', sizes: '201x163' }],
    shortcut: '/dp-Designr.Pro.png',
    apple: '/dp-Designr.Pro.png',
  },
  openGraph: {
    title: 'Designr.pro - Vegar Berentsen',
    description: defaultDescription,
    url: '/',
    siteName,
    images: [ogImage],
    locale: 'en_US',
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Designr.pro - Vegar Berentsen', description: defaultDescription, images: [ogImage.url] },
  category: 'portfolio',
};

export const viewport: Viewport = { themeColor: '#cad9e4' };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable} ${italianno.variable}`}>
      <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-BNHYEQRBJM" />
        <script dangerouslySetInnerHTML={{ __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','G-BNHYEQRBJM');` }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([websiteJsonLd, personJsonLd]) }} />
      </head>
      <body>
        <StyledComponentsRegistry>
          <NavBar />
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
