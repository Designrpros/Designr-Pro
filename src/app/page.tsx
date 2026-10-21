'use client';

import { useMemo, useState } from 'react';
import Horizon from '../components/Horizon';
import Footer from '../components/Footer';

type Project = {
  name: string;
  category: 'Apps' | 'Studio' | 'Community' | 'Web' | 'Games';
  tag: string;
  url: string;
  domain: string;
  image: string;
  icon?: string;
  description: string;
  links?: { label: string; href: string }[];
  wide?: boolean;
};

// Previews were captured through Peak Browser, or taken from each app's own App Store listing.
const projects: Project[] = [
  {
    name: 'Peak Browser',
    category: 'Apps',
    tag: 'Native workspace',
    url: 'https://www.peakbrowser.app/',
    domain: 'peakbrowser.app',
    image: '/work/peak-browser.jpg',
    icon: '/apps/peak.png',
    description:
      'A browser with the rest of your work inside it: notes, task boards, whiteboards, calendar, mail, video, music and slides, with a crew of AI bots working beside you. Native on Mac, iPhone and iPad.',
    links: [{ label: 'App Store', href: 'https://apps.apple.com/us/app/peak-browser-ai-workspace/id6753611346' }],
    wide: true,
  },
  {
    name: 'Free Flow',
    category: 'Apps',
    tag: 'Creative tool',
    url: 'https://freeflow-freestyle.vercel.app/',
    domain: 'freeflow-freestyle.vercel.app',
    image: '/work/free-flow.jpg',
    icon: '/apps/freeflow-studio.png',
    description: 'A freestyle and lyricism partner for rappers, poets and songwriters. On the Mac it is FreeFlow Studio: a private place to write bars and practise over instrumentals.',
    links: [{ label: 'FreeFlow Studio for Mac', href: 'https://apps.apple.com/us/app/freeflow-studio/id6792713451' }],
  },
  {
    name: 'The Lineup',
    category: 'Games',
    tag: 'Surf & travel',
    url: 'https://thelineup.world/',
    domain: 'thelineup.world',
    image: '/work/the-lineup.jpg',
    description: 'A surf simulator and travel game across the 100 best waves on Earth, with live weather over every spot. Free inside Peak Browser.',
  },
  {
    name: 'Cost of Living',
    category: 'Web',
    tag: 'Open data',
    url: 'https://costofliving.no/',
    domain: 'costofliving.no',
    image: '/work/cost-of-living.jpg',
    description: 'What life costs in 50 European countries, against the EU average, built from Eurostat, World Bank and Statistics Norway open data and credited on every page.',
    wide: true,
  },
  {
    name: 'Mapr Atlas',
    category: 'Apps',
    tag: 'World data',
    url: 'https://apps.apple.com/no/app/mapr-atlas/id6752829712',
    domain: 'apps.apple.com',
    image: '/work/mapr-atlas.jpg',
    icon: '/apps/mapr-atlas.png',
    description: 'An interactive world atlas of economics, markets and demographics for iPhone and iPad, with an AI assistant you can ask about any country.',
  },
  {
    name: 'TextClip',
    category: 'Apps',
    tag: 'Mac utility',
    url: 'https://apps.apple.com/no/app/textclip/id6746357735?mt=12',
    domain: 'apps.apple.com',
    image: '/work/textclip.jpg',
    icon: '/apps/textclip.png',
    description: 'Draw a box around anything on your Mac’s screen and copy the text inside it: images, PDFs, videos, websites that won’t let you select.',
  },
  {
    name: 'Mapr',
    category: 'Apps',
    tag: 'Tools for the trade',
    url: 'https://mapr-homepage.vercel.app/',
    domain: 'mapr-homepage.vercel.app',
    image: '/work/mapr.jpg',
    description: 'A toolkit for tradespeople: projects on a map, time tracking, planning, materials and calculators, and a community of professionals.',
  },
  {
    name: 'Berentsen Labs',
    category: 'Studio',
    tag: 'Software lab',
    url: 'https://www.berentsenlabs.no/',
    domain: 'berentsenlabs.no',
    image: '/work/berentsen-labs.jpg',
    description: 'My independent software lab, and the company behind the apps here. Its home page is a live topographic map.',
  },
  {
    name: 'Høl i CV’en',
    category: 'Community',
    tag: 'Coffee & community',
    url: 'https://holicven.vercel.app/',
    domain: 'holicven.vercel.app',
    image: '/work/hol-i-cven.jpg',
    description: 'A community café and work-training initiative in Sandvika, built around coffee, inclusion and recovery.',
  },
  {
    name: 'Studio 51',
    category: 'Community',
    tag: 'Music & community',
    url: 'https://studio51.vercel.app/',
    domain: 'studio51.vercel.app',
    image: '/work/studio-51.jpg',
    description: 'A community music space in Bærum, about creativity, belonging and finding your feet.',
  },
  {
    name: 'Sandvika Platemesse',
    category: 'Community',
    tag: 'Local culture',
    url: 'https://sandvikaplatemesse.no/',
    domain: 'sandvikaplatemesse.no',
    image: '/work/sandvika-platemesse.jpg',
    description: 'A local vinyl fair bringing records, artists and the Sandvika community together under one roof.',
    wide: true,
  },
];

const filters = ['All', 'Apps', 'Web', 'Games', 'Community', 'Studio'] as const;

const photos = [8, 13, 19, 29, 34, 5, 44, 18, 52, 55, 20, 41, 56, 2];

export default function Home() {
  const [filter, setFilter] = useState<(typeof filters)[number]>('All');
  const visible = useMemo(() => (filter === 'All' ? projects : projects.filter((p) => p.category === filter)), [filter]);
  const count = (f: string) => (f === 'All' ? projects.length : projects.filter((p) => p.category === f).length);

  return (
    <>
      <Horizon />

      <section className="statement" aria-label="About this portfolio">
        <div className="wrap">
          <p className="kicker">In short</p>
          <p>
            I make <em>useful things</em> for screens and for people: native apps, open-data websites, a surf game, and pages for a{' '}
            <mark>café, a music studio and a vinyl fair</mark> in my part of Norway.
          </p>
        </div>
      </section>

      <section className="work" id="work" aria-labelledby="work-title">
        <div className="wrap">
          <div className="work-head">
            <div>
              <p className="kicker">Selected work · {projects.length} projects</p>
              <h2 id="work-title">
                Things I’ve <em>made.</em>
              </h2>
            </div>
            <div className="filters" role="group" aria-label="Filter projects">
              {filters.map((f) => (
                <button key={f} type="button" className={`chip ${filter === f ? 'is-active' : ''}`} aria-pressed={filter === f} onClick={() => setFilter(f)}>
                  {f === 'All' ? 'All work' : f}
                  <sup>{count(f)}</sup>
                </button>
              ))}
            </div>
          </div>

          <div className="work-grid">
            {visible.map((p, i) => (
              <article key={p.name} className={`card ${p.wide && filter === 'All' ? 'wide' : ''}`} style={{ animationDelay: `${Math.min(i, 6) * 60}ms` }}>
                <a href={p.url} target="_blank" rel="noopener noreferrer" className="frame" aria-label={`Visit ${p.name}`}>
                  <div className="frame-bar" aria-hidden="true">
                    <i />
                    <i />
                    <i />
                    <span>{p.domain}</span>
                  </div>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={p.image} alt={`${p.name}, front page`} loading={i < 2 ? 'eager' : 'lazy'} width={1440} height={900} />
                </a>
                <div className="card-body">
                  <div>
                    <div className="card-meta">
                      <b>{String(projects.indexOf(p) + 1).padStart(2, '0')}</b>
                      <span>{p.category}</span>
                      <span>·</span>
                      <span>{p.tag}</span>
                    </div>
                    <h3>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      {p.icon && <img src={p.icon} alt="" width={44} height={44} />}
                      <a href={p.url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                        {p.name}
                      </a>
                      <span className="arrow" aria-hidden="true">↗</span>
                    </h3>
                  </div>
                  <div>
                    <p>{p.description}</p>
                    {p.links && (
                      <div className="card-links">
                        {p.links.map((l) => (
                          <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer">
                            {l.label} ↗
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="photos" aria-labelledby="photos-title">
        <div className="wrap photos-head">
          <div>
            <p className="kicker">Off the screen</p>
            <h2 className="section-title" id="photos-title">
              Light &amp; <em>water.</em>
            </h2>
          </div>
          <p>Waves, waterfalls, long roads and a great many sunsets. The colours on this site come from here: sky blue, and sand.</p>
        </div>
        <div className="strip" aria-hidden="true">
          {[...photos, ...photos].map((n, k) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img key={k} src={`/gallery/IMG${n}.jpeg`} alt="" loading="lazy" />
          ))}
        </div>
        <div className="wrap">
          <a className="pill" href="/gallery">
            Open the gallery →
          </a>
        </div>
      </section>

      <section className="background" aria-labelledby="background-title">
        <div className="wrap">
          <p className="kicker">Background</p>
          <h2 className="section-title" id="background-title">
            Wires, sails, <em>code.</em>
          </h2>
          <div className="timeline">
            <div>
              <small>Before</small>
              <h3>Electrician</h3>
              <p>Precision, safety and getting it right the first time, because someone has to live with the result.</p>
            </div>
            <div>
              <small>Also</small>
              <h3>Sailing instructor</h3>
              <p>Reading conditions, explaining things clearly, and keeping a crew calm and working together.</p>
            </div>
            <div>
              <small>Now</small>
              <h3>Designer &amp; developer</h3>
              <p>Apps for Apple platforms and fast websites, built and shipped through Berentsen Labs.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="closing" aria-labelledby="closing-title">
        <div className="wrap">
          <p className="kicker">Say hello</p>
          <h2 className="section-title" id="closing-title">
            Let’s make something <em>useful.</em>
          </h2>
          <p>For app and web projects, collaborations, or just to start a conversation, email is the best way to reach me.</p>
          <a className="email" href="mailto:designr.pros@gmail.com">
            designr.pros@gmail.com
          </a>
          <a className="pill" href="mailto:designr.pros@gmail.com">
            Write to me →
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}
