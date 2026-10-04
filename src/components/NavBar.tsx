'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
  { href: '/cv', label: 'CV' },
  { href: '/gallery', label: 'Gallery' },
];

export default function NavBar() {
  const pathname = usePathname();

  return (
    <header className="site-header">
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
    </header>
  );
}
