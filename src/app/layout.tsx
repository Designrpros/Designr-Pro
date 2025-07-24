import './globals.css';
import { Inter, Montserrat } from 'next/font/google';
import StyledComponentsRegistry from "./lib/registry"; // Ensure this path is correct
import NavBar from '../components/NavBar';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700', '800'],
  variable: '--font-montserrat',
});

export const metadata = {
  title: 'Designr.pro',
  description: 'App and Website Portfolio for Vegar Berentsen',
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
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-9Z5EH0V3ZQ"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-98HRKN6MFS');
            `,
          }}
        />
      </head>
      <body className={`${inter.variable} ${montserrat.variable}`}>
        <StyledComponentsRegistry>
        <NavBar />
        {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}