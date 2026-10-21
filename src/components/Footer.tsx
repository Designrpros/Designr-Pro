import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <span>© {new Date().getFullYear()} Vegar Berentsen · Østerås, Norway</span>
        <nav aria-label="Footer">
          <Link href="/#work">Work</Link>
          <Link href="/about">About</Link>
          <Link href="/gallery">Gallery</Link>
          <a href="https://www.berentsenlabs.no">Berentsen Labs ↗</a>
          <a href="https://github.com/Designrpros">GitHub ↗</a>
          <Link href="/privacy-policy">Privacy</Link>
        </nav>
      </div>
    </footer>
  );
}
