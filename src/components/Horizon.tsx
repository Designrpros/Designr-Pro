'use client';

import { useEffect, useRef } from 'react';

// The hero is a horizon at sunset: sky blue above, sand-lit sea below. As the
// page scrolls, the sun sinks and the sky warms.
export default function Horizon() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let frame = 0;
    const update = () => {
      frame = 0;
      const p = Math.min(1, Math.max(0, window.scrollY / (el.offsetHeight * 0.8)));
      el.style.setProperty('--sink', `${(p * 38).toFixed(2)}%`);
      el.style.setProperty('--warm', p.toFixed(3));
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section className="horizon" ref={ref} aria-label="Introduction">
      <div className="horizon-warm" />
      <div className="sun" />
      <div className="sea" />
      <div className="horizon-tag">
        <div className="wrap">
          <span>Designer &amp; developer</span>
          <span>Portfolio · {new Date().getFullYear()}</span>
        </div>
      </div>
      <div className="wrap horizon-copy">
        <h1 className="horizon-name" aria-label="Vegar Berentsen, designer and developer">
          <span>Vegar</span>{" "}
          <span className="last solid">Berentsen</span>
        </h1>
        <div className="horizon-meta">
          <p>
            I design and build apps, websites and tools from Østerås, Norway, and run{' '}
            <a href="https://www.berentsenlabs.no">Berentsen Labs</a>. <span className="script">Usually near water.</span>
          </p>
          <div className="horizon-actions">
            <a className="pill" href="#work">See the work ↓</a>
            <a className="pill ghost" href="/contact">Say hello</a>
          </div>
        </div>
      </div>
    </section>
  );
}
