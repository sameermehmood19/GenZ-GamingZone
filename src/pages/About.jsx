function About() {
  return (
    <main className="page page-about">
      <header className="page-header">
        <h1>About NexusArena</h1>
        <p>A dedicated space built for competitive and casual gamers.</p>
      </header>

      <section className="grid-2">
        <div className="card">
          <h2>Designed for immersion</h2>
          <p>
            GameZone is a premium gaming arena featuring high-refresh displays, low-latency
            networks, and curated hardware for esports-level performance. Whether you&apos;re
            grinding ranked or exploring open worlds, we keep your experience smooth.
          </p>
          <p>
            Every station is equipped with ergonomic chairs, headsets, and controllers so you can
            focus on the game—not the setup.
          </p>
        </div>

        <div className="card">
          <h2>What we offer</h2>
          <ul className="list">
            <li>High-end PC rigs with the latest GPUs</li>
            <li>Next-gen console zone (PS5 / Xbox Series X)</li>
            <li>VR arena for immersive experiences</li>
            <li>Private party and tournament rooms</li>
            <li>Snack bar and lounge area</li>
          </ul>
        </div>
      </section>
    </main>
  )
}

export default About

