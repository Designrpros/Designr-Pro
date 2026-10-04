'use client';

import { useEffect, useState } from 'react';

const images = Array.from({ length: 56 }, (_, index) => `/gallery/IMG${index + 1}.jpeg`);

export default function Gallery() {
  const [selected, setSelected] = useState<number | null>(null);

  useEffect(() => {
    if (selected === null) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setSelected(null);
      if (event.key === 'ArrowLeft') setSelected((current) => current === null ? null : (current + images.length - 1) % images.length);
      if (event.key === 'ArrowRight') setSelected((current) => current === null ? null : (current + 1) % images.length);
    };
    document.addEventListener('keydown', onKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
    };
  }, [selected]);

  return (
    <main className="page-content subpage gallery-page">
      <p className="eyebrow">A collection of moments</p>
      <h1>Gallery.</h1>
      <p className="lead">Photos from the original Designr.pro gallery.</p>
      <div className="photo-grid" aria-label="Photo gallery">
        {images.map((src, index) => (
          <button className="gallery-photo-button" key={src} type="button" onClick={() => setSelected(index)} aria-label={`Open photograph ${index + 1}`}>
            {/* The repository keeps the original gallery photos under public/gallery. */}
            <img className="gallery-photo" src={src} alt={`Gallery photograph ${index + 1}`} loading="lazy" />
          </button>
        ))}
      </div>
      <footer className="site-footer"><span>© Vegar Berentsen</span><a href="/">Back home</a></footer>
      {selected !== null && (
        <div className="gallery-lightbox" role="dialog" aria-modal="true" aria-label="Image viewer" onClick={() => setSelected(null)}>
          <button className="lightbox-close" type="button" onClick={() => setSelected(null)} aria-label="Close image">×</button>
          <button className="lightbox-prev" type="button" onClick={(event) => { event.stopPropagation(); setSelected((current) => current === null ? null : (current + images.length - 1) % images.length); }} aria-label="Previous image">←</button>
          <img src={images[selected]} alt={`Gallery photograph ${selected + 1} of ${images.length}`} onClick={(event) => event.stopPropagation()} />
          <button className="lightbox-next" type="button" onClick={(event) => { event.stopPropagation(); setSelected((current) => current === null ? null : (current + 1) % images.length); }} aria-label="Next image">→</button>
          <p>{String(selected + 1).padStart(2, '0')} / {images.length}</p>
        </div>
      )}
    </main>
  );
}
