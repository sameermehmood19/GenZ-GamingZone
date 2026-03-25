import './App.css'
import { Routes, Route, NavLink } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Booking from './pages/Booking.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'

function App() {
  return (
    <div className="app-shell">
      <header className="app-header">
        <div className="brand">
          <div className="brand-mark">GZ</div>
          <div className="brand-text">
            <span className="brand-name">GameZone</span>
            <span className="brand-sub">Gaming arena &amp; lounge</span>
          </div>
        </div>
        <nav className="nav">
          <NavLink to="/" end className="nav-link">
            Home
          </NavLink>
          <NavLink to="/booking" className="nav-link">
            Booking
          </NavLink>
          <NavLink to="/about" className="nav-link">
            About
          </NavLink>
          <NavLink to="/contact" className="nav-link">
            Contact
          </NavLink>
        </nav>
        <div className="nav-cta">
          <NavLink to="/booking" className="btn btn-primary small">
            Book now
          </NavLink>
        </div>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <footer className="app-footer">
        <p>© {new Date().getFullYear()} GameZone. All rights reserved.</p>
        <p>Crafted for gamers. Built as a demo booking system.</p>
      </footer>
    </div>
  )
}

export default App
