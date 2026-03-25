function Contact() {
  return (
    <main className="page page-contact">
      <header className="page-header">
        <h1>Contact us</h1>
        <p>Reach out to plan events, tournaments, or group sessions.</p>
      </header>

      <section className="grid-2">
        <div className="card">
          <h2>Visit the arena</h2>
          <p>GameZone HQ</p>
          <p>123 Gaming Street</p>
          <p>Esports City, 00000</p>

          <div className="contact-meta">
            <p>
              <strong>Phone:</strong> +1 (555) 987-6543
            </p>
            <p>
              <strong>Email:</strong> play@gamezone.gg
            </p>
            <p>
              <strong>Hours:</strong> 24/7 (peak hours 6 PM – 1 AM)
            </p>
          </div>
        </div>

        <div className="card">
          <h2>Send us a message</h2>
          <form className="contact-form">
            <div className="form-field">
              <label htmlFor="contact-name">Name</label>
              <input id="contact-name" name="name" type="text" placeholder="Your name" />
            </div>
            <div className="form-field">
              <label htmlFor="contact-email">Email</label>
              <input id="contact-email" name="email" type="email" placeholder="you@example.com" />
            </div>
            <div className="form-field">
              <label htmlFor="contact-message">Message</label>
              <textarea
                id="contact-message"
                name="message"
                rows="4"
                placeholder="Tell us about your event or question."
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Send message
            </button>
            <p className="form-note">
              This is a static demo form. Hook this up to your backend or email provider.
            </p>
          </form>
        </div>
      </section>
    </main>
  )
}

export default Contact

