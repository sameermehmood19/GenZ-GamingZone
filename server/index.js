import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import nodemailer from 'nodemailer'

dotenv.config()

const app = express()
const port = process.env.PORT || 4000

app.use(cors({ origin: true }))
app.use(express.json())

const RECIPIENTS = [
  'sameercreativeteach@gmail.com',
]

function createTransporter() {
  if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
    console.warn(
      '[booking-server] SMTP environment variables are missing. Emails will not be sent.'
    )
    return null
  }

  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT || 587),
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  })
}

const transporter = createTransporter()

app.post('/api/bookings', async (req, res) => {
  const { name, email, phone, game, date, time, duration, players, notes } = req.body || {}

  if (!name || !email || !date || !time) {
    return res.status(400).json({ ok: false, message: 'Missing required fields.' })
  }

  const subject = `New GameZone booking from ${name}`
  const plain = [
    `New booking request:`,
    '',
    `Name: ${name}`,
    `Email: ${email}`,
    `Phone: ${phone || '-'}`,
    `Game / platform: ${game || '-'}`,
    `Date: ${date}`,
    `Time: ${time}`,
    `Duration: ${duration ? `${duration} hour(s)` : '-'}`,
    `Players: ${players || '-'}`,
    '',
    `Notes:`,
    notes || '-',
  ].join('\n')

  const html = `
    <h2>New GameZone booking request</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phone || '-'}</p>
    <p><strong>Game / platform:</strong> ${game || '-'}</p>
    <p><strong>Date:</strong> ${date}</p>
    <p><strong>Time:</strong> ${time}</p>
    <p><strong>Duration:</strong> ${duration ? `${duration} hour(s)` : '-'}</p>
    <p><strong>Players:</strong> ${players || '-'}</p>
    <p><strong>Notes:</strong><br/>${(notes || '-').replace(/\n/g, '<br/>')}</p>
  `

  if (!transporter) {
    console.warn('[booking-server] No transporter configured. Logging booking instead of email.')
    console.log(plain)
    return res.json({ ok: true, message: 'Booking received (email not configured on server).' })
  }

  try {
    await transporter.sendMail({
      from: `"GameZone Booking" <${process.env.SMTP_FROM || process.env.SMTP_USER}>`,
      to: RECIPIENTS.join(','),
      subject,
      text: plain,
      html,
    })

    return res.json({ ok: true, message: 'Booking confirmed and email sent.' })
  } catch (error) {
    console.error('[booking-server] Failed to send booking email:', error)
    return res.status(500).json({
      ok: false,
      message: 'Booking saved but failed to send email. Check server logs.',
    })
  }
})

app.get('/health', (_req, res) => {
  res.json({ ok: true })
})

app.listen(port, () => {
  console.log(`Booking server listening on http://localhost:${port}`)
})

