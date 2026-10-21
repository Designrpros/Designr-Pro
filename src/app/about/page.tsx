import Footer from '../../components/Footer';

export default function About() {
  return (
    <>
      <main className="wrap subpage">
        <p className="kicker">A little about me</p>
        <h1>
          Designing and building <em>useful things.</em>
        </h1>
        <p className="lead">
          I’m Vegar Berentsen, a designer and developer based in Østerås, Norway. I work across apps and the web, bringing
          thoughtful design and practical technology together.
        </p>
        <div className="cards">
          <section className="page-card">
            <h2>What I do</h2>
            <p>
              I build apps and web experiences, and run <a href="https://www.berentsenlabs.no">Berentsen Labs</a>, my
              independent software lab. My projects range from a native browser workspace and Mac utilities to learning
              tools and websites for community projects.
            </p>
          </section>
          <section className="page-card sand">
            <h2>Where I come from</h2>
            <p>
              My background includes electrical work and sailing instruction, experiences that shaped a practical approach to
              problem-solving, precision and collaboration.
            </p>
          </section>
          <section className="page-card sand">
            <h2>How I work</h2>
            <p>
              I like to make ideas tangible: understand the need, explore the experience, build a working version, and refine
              it through use.
            </p>
          </section>
          <section className="page-card">
            <h2>This site</h2>
            <p>Designr.pro is my digital home for sharing those experiments and finished projects.</p>
            <a className="text-link" href="/#work">
              Explore the apps and websites →
            </a>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
