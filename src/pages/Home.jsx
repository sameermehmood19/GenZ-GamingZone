import { Link } from 'react-router-dom'

function Home() {
  return (
    <main className="page page-home">
      <section className="hero">
        <div className="hero-content">
          <p className="eyebrow">WELCOME TO GAMEZONE</p>
          <h1>Book your next gaming session in seconds.</h1>
          <p className="subtitle">
            High-end PCs, next‑gen consoles, and private rooms. Reserve your perfect slot and jump
            straight into the action.
          </p>
          <div className="hero-actions">
            <Link to="/booking" className="btn btn-primary">
              Book a Slot
            </Link>
            <Link to="/about" className="btn btn-outline">
              Learn More
            </Link>
          </div>
          <div className="hero-metrics">
            <div>
              <p className="metric-number">30+</p>
              <p className="metric-label">Gaming Stations</p>
            </div>
            <div>
              <p className="metric-number">120Hz</p>
              <p className="metric-label">Pro Monitors</p>
            </div>
            <div>
              <p className="metric-number">24/7</p>
              <p className="metric-label">Open Hours</p>
            </div>
          </div>
        </div>
        <div className="hero-panel">
          <div className="hero-card">
            <p className="hero-tag">Live Availability</p>
            <p className="hero-card-title">Tonight&apos;s prime time</p>
            <ul className="slot-list">
              <li>
                <span>6:00 PM – 8:00 PM</span>
                <span className="pill pill-available">Available</span>
              </li>
              <li>
                <span>8:00 PM – 10:00 PM</span>
                <span className="pill pill-limited">Limited</span>
              </li>
              <li>
                <span>10:00 PM – 1:00 AM</span>
                <span className="pill pill-hot">Hot</span>
              </li>
            </ul>
            <Link to="/booking" className="btn btn-full">
              Reserve now
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home

