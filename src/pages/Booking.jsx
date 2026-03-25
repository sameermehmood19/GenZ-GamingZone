import { useState } from 'react'

function Booking() {
  const [status, setStatus] = useState('idle') // idle | submitting | success | error
  const [message, setMessage] = useState('')

  async function handleSubmit(event) {
    event.preventDefault()
    setStatus('submitting')
    setMessage('')

    const form = event.currentTarget
    const formData = new FormData(form)

    const payload = {
      name: formData.get('name')?.toString().trim(),
      email: formData.get('email')?.toString().trim(),
      phone: formData.get('phone')?.toString().trim(),
      game: formData.get('game')?.toString(),
      date: formData.get('date')?.toString(),
      time: formData.get('time')?.toString(),
      duration: formData.get('duration')?.toString(),
      players: formData.get('players')?.toString(),
      notes: formData.get('notes')?.toString(),
    }

    try {
      const response = await fetch('/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      const rawText = await response.text()
      let data = {}

      if (rawText) {
        try {
          data = JSON.parse(rawText)
        } catch (parseError) {
          console.error('Non-JSON response from /api/bookings:', rawText)
        }
      }

      if (!response.ok || data.ok === false) {
        throw new Error(data.message || 'Failed to send booking.')
      }

      setStatus('success')
      setMessage(data.message || 'Booking confirmed and sent.')
      form.reset()
    } catch (error) {
      console.error(error)
      setStatus('error')
      setMessage(error.message || 'Something went wrong. Please try again.')
    }
  }

  return (
    <main className="page page-booking">
      <header className="page-header">
        <h1>Book your gaming zone</h1>
        <p>Choose your game, date, and time to secure your station.</p>
      </header>

      <section className="card booking-card">
        <form className="booking-form" onSubmit={handleSubmit}>
          <div className="form-grid">
            <div className="form-field">
              <label htmlFor="name">Full name</label>
              <input id="name" name="name" type="text" placeholder="Player one" />
            </div>

            <div className="form-field">
              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" placeholder="you@example.com" />
            </div>

            <div className="form-field">
              <label htmlFor="phone">Phone</label>
              <input id="phone" name="phone" type="tel" placeholder="+1 555 123 4567" />
            </div>

            <div className="form-field">
              <label htmlFor="game">Game / platform</label>
              <select id="game" name="game">
                <option value="">Select</option>
                <option value="pc">PC Station</option>
                <option value="ps5">PlayStation 5</option>
                <option value="xbox">Xbox Series X</option>
                <option value="vr">VR Arena</option>
              </select>
            </div>

            <div className="form-field">
              <label htmlFor="date">Date</label>
              <input id="date" name="date" type="date" />
            </div>

            <div className="form-field">
              <label htmlFor="time">Time</label>
              <input id="time" name="time" type="time" />
            </div>

            <div className="form-field">
              <label htmlFor="duration">Duration</label>
              <select id="duration" name="duration">
                <option value="1">1 hour</option>
                <option value="2">2 hours</option>
                <option value="3">3 hours</option>
                <option value="4">4 hours</option>
              </select>
            </div>

            <div className="form-field">
              <label htmlFor="players">Number of players</label>
              <input id="players" name="players" type="number" min="1" max="8" defaultValue="1" />
            </div>
          </div>

          <div className="form-field">
            <label htmlFor="notes">Notes</label>
            <textarea
              id="notes"
              name="notes"
              rows="3"
              placeholder="Any special setup or game preferences?"
            />
          </div>

          <div className="form-actions">
            <button type="submit" className="btn btn-primary" disabled={status === 'submitting'}>
              {status === 'submitting' ? 'Submitting…' : 'Confirm booking'}
            </button>
            {status !== 'idle' && (
              <p className="form-note">
                {message ||
                  (status === 'success'
                    ? 'Booking confirmed.'
                    : 'Something went wrong. Please try again.')}
              </p>
            )}
          </div>
        </form>
      </section>
    </main>
  )
}

export default Booking

