import Footer from '../../components/Footer';

export default function Contact() {
  return (
    <>
      <main className="wrap subpage">
        <p className="kicker">Say hello</p>
        <h1>
          Let’s make something <em>useful.</em>
        </h1>
        <p className="lead">For app and web projects, collaborations, or just to start a conversation, email is the best way to reach me.</p>
        <div className="cards">
          <section className="page-card sand">
            <h2>Email</h2>
            <a className="email-link" href="mailto:designr.pros@gmail.com">
              designr.pros@gmail.com ↗
            </a>
            <p>Based in Østerås, Norway · Working with people everywhere.</p>
          </section>
          <section className="page-card">
            <h2>Elsewhere</h2>
            <p>
              <a href="https://www.berentsenlabs.no">Berentsen Labs</a>, my software lab.
            </p>
            <p>
              <a href="https://github.com/Designrpros">GitHub</a>, where most of these projects live.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
