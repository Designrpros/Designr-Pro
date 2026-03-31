import './globals.css';
import { Inter, Montserrat, Italianno } from 'next/font/google';
import StyledComponentsRegistry from "./lib/registry"; // Ensure this path is correct
import NavBar from '../components/NavBar';

const italianno = Italianno({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-italianno',
});

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700', '800'],
  variable: '--font-montserrat',
});

export const metadata = {
  title: 'Designr.pro - Vegar Berentsen',
  description: 'App and Website Portfolio for Vegar Berentsen. Designer & Developer based in Østerås, Norway.',
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    title: 'Designr.pro - Vegar Berentsen',
    description: 'App and Website Portfolio for Vegar Berentsen. Designer & Developer based in Østerås, Norway.',
    url: 'https://designr.pro',
    siteName: 'Designr.pro',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Designr.pro - Vegar Berentsen',
    description: 'App and Website Portfolio for Vegar Berentsen. Designer & Developer based in Østerås, Norway.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {/* Google Analytics Script */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-BNHYEQRBJM"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-BNHYEQRBJM');
            `,
          }}
        />
      </head>
      <body className={`${inter.variable} ${montserrat.variable} ${italianno.variable}`}>
        <StyledComponentsRegistry>
        <NavBar />
        {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}