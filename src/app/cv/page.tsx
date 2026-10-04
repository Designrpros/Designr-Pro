export default function CV() {
  return (
    <main className="page-content subpage">
      <p className="eyebrow">Curriculum vitae</p>
      <h1>Experience, by<br />request.</h1>
      <p className="lead">I share my CV privately. Get in touch and I’ll send you the current version.</p>
      <section className="page-card contact-card">
        <h2>Request a copy</h2>
        <p>Send a short email and I’ll reply with my CV.</p>
        <a className="contact-button" href="mailto:designr.pros@gmail.com?subject=Request%20for%20Vegar%20Berentsen%27s%20CV">Request CV <span aria-hidden="true">↗</span></a>
      </section>
      <p className="privacy-note">This portfolio does not publish the CV or provide password-protected access. Request a copy directly by email.</p>
      <footer className="site-footer"><span>© Vegar Berentsen</span><a href="/">Back home</a></footer>
    </main>
  );
}
