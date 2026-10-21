'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { href: '/#work', label: 'Work' },
  { href: '/about', label: 'About' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/cv', label: 'CV' },
  { href: '/contact', label: 'Contact' },
];

export default function NavBar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // The header floats over the page; pages that do not leave room for it get a spacer.
  const needsSpacer = ['/blog', '/news', '/privacy-policy', '/terms-of-service'].some((p) => pathname?.startsWith(p));

  return (
    <>
    {needsSpacer && <div style={{ height: 76 }} aria-hidden="true" />}
    <header className={`site-header ${scrolled || needsSpacer ? 'is-scrolled' : ''}`}>
      <div className="wrap">
        <Link className="wordmark" href="/" aria-label="Designr.pro home">
          <span aria-hidden="true">dp</span>
        </Link>
        <nav className="site-nav" aria-label="Main navigation">
          {links.map(({ href, label }) => (
            <Link key={href} href={href} aria-current={pathname === href ? 'page' : undefined}>
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
    </>
  );
}
