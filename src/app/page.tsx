'use client';

import { useEffect, useMemo, useState } from 'react';

const projects = [
  { name: 'Peak Browser', category: 'Apps', url: 'https://www.peakbrowser.app/', description: 'A native browser workspace for Mac, iPhone, and iPad: browsing, notes, boards, whiteboards, and optional AI in one place.', tag: 'Native workspace' },
  { name: 'Free Flow', category: 'Apps', url: 'https://freeflow-freestyle.vercel.app/', description: 'A digital freestyle and lyricism partner for rappers, poets, and songwriters, with tools to spark ideas and find words.', tag: 'Creative tool' },
  { name: 'Mapr Atlas', category: 'Apps', url: 'https://apps.apple.com/no/app/mapr-atlas/id6752829712?l=nb', description: 'An interactive world atlas for exploring economic, market, and demographic data, with a contextual AI assistant and practical converters.', tag: 'World data' },
  { name: 'Mapr', category: 'Apps', url: 'https://mapr-homepage.vercel.app/', description: 'A toolkit for tradespeople: map-based projects, time tracking, planning, materials, calculators, and a professional community.', tag: 'Tools for the trade' },
  { name: 'TextClip', category: 'Apps', url: 'https://apps.apple.com/no/app/textclip/id6746357735?mt=12', description: 'A Mac utility that captures a region of the screen, recognizes its text, and copies it to the clipboard; the App Store describes its OCR as offline.', tag: 'Mac utility' },
  { name: 'WebDesign.Theory', category: 'Learning Resources', url: 'https://designrpros.github.io/WEBDESIGN.THEORY/', description: 'A visual introduction to design systems and styles, with examples, code snippets, and core principles.', tag: 'Learn by exploring' },
  { name: 'Berentsen Labs', category: 'Creative Portfolios', url: 'https://berentsenlabs.no/', description: 'A web and AI development studio presenting its services, approach, and project work.', tag: 'Studio' },
  { name: 'Studio 51', category: 'Community Initiatives', url: 'https://studio51.vercel.app/', description: 'A Bærum community music space built around creativity, belonging, and personal growth.', tag: 'Music & community' },
  { name: 'Høl i CV’en', category: 'Community Initiatives', url: 'https://holicven.vercel.app/', description: 'A community café and work-training initiative in Sandvika, centred on coffee, inclusion, and recovery.', tag: 'Coffee & community' },
  { name: 'Sandvika Platemesse', category: 'Community Initiatives', url: 'https://sandvikaplatemesse.no/', description: 'A local vinyl fair bringing together records, artists, and the Sandvika community.', tag: 'Local culture' },
  { name: 'Cost of Living', category: 'Travel', url: 'https://costofliving.no/', description: 'A Europe-focused cost-of-living guide with country and city information for people planning travel or relocation.', tag: 'Travel guide' },
  { name: 'NordFisk', category: 'Activity', url: 'https://designrpros.github.io/nordfisk/', description: 'A Norwegian fishing guide with regional information, species, beginner resources, and equipment guidance.', tag: 'Outdoors' },
  { name: 'The Lineup', category: 'Games', url: 'https://thelineup.world/', description: 'A surf simulator and travel game exploring famous waves, break types, and surf destinations around the world.', tag: 'Surf & travel' },
];

const filters = ['All', 'Apps', 'Learning Resources', 'Creative Portfolios', 'Community Initiatives', 'Travel', 'Activity', 'Games'];
const filterLabels: Record<string, string> = { All: 'All work', Apps: 'Apps', 'Learning Resources': 'Learning', 'Creative Portfolios': 'Studio & portfolio', 'Community Initiatives': 'Community', Travel: 'Travel', Activity: 'Outdoors', Games: 'Games' };

export default function Home() {
  const [typedName, setTypedName] = useState('');
  const [typedRole, setTypedRole] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');
  const [activeIndex, setActiveIndex] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    setReducedMotion(prefersReduced);
    const name = 'VEGAR BERENTSEN:';
    const role = 'Designer & Developer';
    if (prefersReduced) { setTypedName(name); setTypedRole(role); return; }
    let nameIndex = 0;
    let roleIndex = 0;
    const nameTimer = window.setInterval(() => {
      nameIndex += 1; setTypedName(name.slice(0, nameIndex));
      if (nameIndex >= name.length) {
        window.clearInterval(nameTimer);
        let titleTimer: number;
        const startRole = () => {
          roleIndex += 1; setTypedRole(role.slice(0, roleIndex));
          if (roleIndex >= role.length) window.clearInterval(titleTimer);
        };
        titleTimer = window.setInterval(startRole, 72);
      }
    }, 72);
    return () => window.clearInterval(nameTimer);
  }, []);

  const visibleProjects = useMemo(() => activeFilter === 'All' ? projects : projects.filter((project) => project.category === activeFilter), [activeFilter]);
  const project = visibleProjects[Math.min(activeIndex, visibleProjects.length - 1)];
  const goTo = (index: number) => setActiveIndex(Math.max(0, Math.min(index, visibleProjects.length - 1)));

  return (
    <main className="page-content">
      <section className="hero" aria-label="Introduction">
        <h1 aria-label="Vegar Berentsen: Designer and Developer">
          <span className="name-line">{typedName}{!reducedMotion && <span className={`cursor ${typedName.length < 16 ? 'is-active' : ''}`} aria-hidden="true" />}</span>
          <br />
          <span className="role">{typedRole}{!reducedMotion && <span className={`cursor ${typedName.length === 16 && typedRole.length < 20 ? 'is-active' : ''}`} aria-hidden="true" />}</span>
        </h1>
        <p className="intro">Welcome to Designr.Pro, my digital home where I showcase my skills, creativity, and dedication to app and web development. <mark>Running Berentsen Labs – building AI assistants and web solutions.</mark></p>
        <p className="location">Based in Østerås, Norway</p>
        <a className="contact-button" href="/contact">Contact Me</a>
      </section>

      <section className="work-panel journey" id="work" aria-labelledby="journey-title">
        <div className="journey-heading">
          <p className="journey-kicker">Selected work · {projects.length} projects</p>
          <h2 id="journey-title">A journey through<br />things I’ve made.</h2>
          <p className="journey-lede">Apps, useful websites, and community projects — follow a chapter or browse by kind.</p>
        </div>
        <div className="journey-filters" role="group" aria-label="Filter projects by category">
          {filters.map((filter) => <button key={filter} type="button" className={`filter-chip ${activeFilter === filter ? 'is-active' : ''}`} aria-pressed={activeFilter === filter} onClick={() => { setActiveFilter(filter); setActiveIndex(0); }}>{filterLabels[filter]}</button>)}
        </div>
        <div className="journey-layout">
          <nav className="journey-nav" aria-label="Projects in this journey">
            {visibleProjects.map((item, index) => <button key={item.name} type="button" className={`journey-stop ${index === activeIndex ? 'is-active' : ''}`} aria-current={index === activeIndex ? 'step' : undefined} onClick={() => goTo(index)}><span className="stop-number">{String(index + 1).padStart(2, '0')}</span><span className="stop-name">{item.name}</span></button>)}
          </nav>
          {project && <div className="journey-main">
            <article className="project-chapter" key={project.name} aria-live="polite">
              <div className="chapter-copy"><p className="chapter-tag">{project.category}<span>·</span>{project.tag}</p><h3>{project.name}</h3><p className="chapter-description">{project.description}</p><a className="chapter-link" href={project.url} target="_blank" rel="noopener noreferrer">Visit {project.name}<span aria-hidden="true">↗</span></a></div>
            </article>
            <div className="journey-controls"><button type="button" onClick={() => goTo(activeIndex - 1)} disabled={activeIndex === 0}>← Previous</button><span className="journey-count" aria-live="polite">{String(activeIndex + 1).padStart(2, '0')} / {String(visibleProjects.length).padStart(2, '0')}</span><button type="button" onClick={() => goTo(activeIndex + 1)} disabled={activeIndex === visibleProjects.length - 1}>{activeIndex === visibleProjects.length - 1 ? 'End of this journey' : 'Next project →'}</button></div>
          </div>}
        </div>
        <p className="journey-note">A selection of apps, websites, and community projects.</p>
      </section>
      <footer className="site-footer"><span>© Vegar Berentsen</span><a href="/contact">Contact</a></footer>
    </main>
  );
}
