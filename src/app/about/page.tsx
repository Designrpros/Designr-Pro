export default function About() {
  return (
    <main className="page-content subpage">
      <p className="eyebrow">A little about me</p>
      <h1>Designing and building<br />useful things.</h1>
      <p className="lead">I’m Vegar Berentsen, a designer and developer based in Østerås, Norway. I work across apps and the web, bringing thoughtful design and practical technology together.</p>
      <section className="page-card">
        <h2>What I do</h2>
        <p>I build apps and web experiences, and run Berentsen Labs, where I work on AI assistants and web solutions. My projects range from personal tools and learning resources to community-focused websites.</p>
        <p>My background also includes electrical work and sailing instruction—experiences that shaped a practical approach to problem-solving, precision, and collaboration.</p>
      </section>
      <section className="page-card">
        <h2>How I work</h2>
        <p>I like to make ideas tangible: understand the need, explore the experience, build a working version, and refine it through use. Designr.pro is my digital home for sharing those experiments and finished projects.</p>
        <a className="text-link" href="/#work">Explore the apps and websites <span aria-hidden="true">→</span></a>
      </section>
      <footer className="site-footer"><span>© Vegar Berentsen</span><a href="/contact">Get in touch</a></footer>
    </main>
  );
}
