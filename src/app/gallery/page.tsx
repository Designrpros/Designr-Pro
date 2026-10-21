'use client';

import { useEffect, useState } from 'react';
import Footer from '../../components/Footer';

const images = Array.from({ length: 56 }, (_, index) => `/gallery/IMG${index + 1}.jpeg`);

export default function Gallery() {
  const [selected, setSelected] = useState<number | null>(null);
  const step = (by: number) => setSelected((current) => (current === null ? null : (current + images.length + by) % images.length));

  useEffect(() => {
    if (selected === null) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setSelected(null);
      if (event.key === 'ArrowLeft') step(-1);
      if (event.key === 'ArrowRight') step(1);
    };
    document.addEventListener('keydown', onKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
    };
  }, [selected]);

  return (
    <>
      <main className="wrap subpage">
        <p className="kicker">A collection of moments</p>
        <h1>
          Light &amp; <em>water.</em>
        </h1>
        <p className="lead">Waves, waterfalls, long roads and a great many sunsets. {images.length} photographs.</p>
        <div className="photo-grid" aria-label="Photo gallery">
          {images.map((src, index) => (
            <button className="gallery-photo-button" key={src} type="button" onClick={() => setSelected(index)} aria-label={`Open photograph ${index + 1}`}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="gallery-photo" src={src} alt={`Photograph ${index + 1}`} loading="lazy" />
            </button>
          ))}
        </div>
      </main>
      <Footer />
      {selected !== null && (
        <div className="gallery-lightbox" role="dialog" aria-modal="true" aria-label="Image viewer" onClick={() => setSelected(null)}>
          <button className="lightbox-close" type="button" onClick={() => setSelected(null)} aria-label="Close image">
            ×
          </button>
          <button className="lightbox-prev" type="button" onClick={(event) => { event.stopPropagation(); step(-1); }} aria-label="Previous image">
            ←
          </button>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={images[selected]} alt={`Photograph ${selected + 1} of ${images.length}`} onClick={(event) => event.stopPropagation()} />
          <button className="lightbox-next" type="button" onClick={(event) => { event.stopPropagation(); step(1); }} aria-label="Next image">
            →
          </button>
          <p>
            {String(selected + 1).padStart(2, '0')} / {images.length}
          </p>
        </div>
      )}
    </>
  );
}
