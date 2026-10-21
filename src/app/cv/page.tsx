import Footer from '../../components/Footer';

export default function CV() {
  return (
    <>
      <main className="wrap subpage">
        <p className="kicker">Curriculum vitae</p>
        <h1>
          Experience, <em>by request.</em>
        </h1>
        <p className="lead">I share my CV privately. Get in touch and I’ll send you the current version.</p>
        <div className="cards">
          <section className="page-card sand">
            <h2>Request a copy</h2>
            <p>Send a short email and I’ll reply with my CV.</p>
            <a className="pill" href="mailto:designr.pros@gmail.com?subject=Request%20for%20Vegar%20Berentsen%27s%20CV">
              Request CV ↗
            </a>
          </section>
        </div>
        <p className="privacy-note">This portfolio does not publish the CV or provide password-protected access. Request a copy directly by email.</p>
      </main>
      <Footer />
    </>
  );
}
