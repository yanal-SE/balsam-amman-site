import { createClient } from '@supabase/supabase-js'

// Use the server-side service role key to insert bookings securely
const SUPABASE_URL = process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY

let supabase = null
if (SUPABASE_URL && SUPABASE_SERVICE_ROLE_KEY) {
  supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY)
}

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })

  const booking = req.body || {}
  // Basic server-side validation
  const required = ['service', 'doctor', 'date', 'time', 'name', 'phone']
  for (const field of required) {
    if (!booking[field]) return res.status(400).json({ error: `Missing field: ${field}` })
  }

  try {
    if (!supabase) {
      console.warn('Supabase not configured. Logging booking only (demo mode).')
      console.log('Booking (demo):', booking)
      return res.status(200).json({ ok: true, demo: true })
    }

    const payload = {
      service: booking.service,
      doctor: booking.doctor || null,
      date: booking.date,
      time: booking.time,
      name: booking.name,
      phone: booking.phone,
      email: booking.email || null,
      notes: booking.notes || null,
      status: 'pending'
    }

    const { data, error } = await supabase.from('bookings').insert([payload]).select('*')
    if (error) {
      console.error('Supabase insert error:', error)
      return res.status(500).json({ error: error.message })
    }

    // Return the inserted row id and success
    return res.status(200).json({ ok: true, booking: data[0] })
  } catch (err) {
    console.error('API /api/book error:', err)
    return res.status(500).json({ error: 'Internal server error' })
  }
}
