import './globals.css';
import { Inter, Montserrat } from 'next/font/google';
import NavBar from '../components/NavBar'; // Import the NavBar component

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700', '800'],
  variable: '--font-montserrat',
});

export const metadata = {
  title: 'Designr.pro',
  description: 'Unleash your vivid imagination with Designr.pro',
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
      </head>
      <body className={`${inter.variable} ${montserrat.variable}`}>
        <NavBar /> {/* Add the NavBar here */}
        {children}
      </body>
    </html>
  );
}