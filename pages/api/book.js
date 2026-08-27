export default function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })
  const booking = req.body
  // In this demo we just log the booking. In a real setup, save to database (Supabase) and send confirmation email.
  console.log('New booking (demo):', booking)
  // Optionally: forward to temporary Supabase or email relay here (configured after deploy)
  return res.status(200).json({ ok: true })
}
