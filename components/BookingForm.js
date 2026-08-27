import { useState } from 'react'

export default function BookingForm({ services = [], doctors = [] }) {
  const [form, setForm] = useState({ service:'', doctor:'', date:'', time:'', name:'', phone:'', email:'', notes:'' })
  const [status, setStatus] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      // Temporary: send to demo API route (no DB configured in repo)
      const res = await fetch('/api/book', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      if (res.ok) {
        setStatus('تم استلام طلب الحجز! سنتواصل معك قريبًا.')
        setForm({ service:'', doctor:'', date:'', time:'', name:'', phone:'', email:'', notes:'' })
      } else {
        setStatus('حدث خطأ. حاول مرة أخرى.')
      }
    } catch (err) {
      setStatus('حدث خطأ. حاول مرة أخرى.')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-xl p-4 bg-white rounded-md shadow-sm">
      <h3 className="text-lg font-semibold mb-3">نموذج الحجز</h3>
      <select required value={form.service} onChange={e=>setForm({...form,service:e.target.value})} className="w-full mb-2 p-2 border rounded">
        <option value="">اختر الخدمة</option>
        {services.map(s => <option key={s} value={s}>{s}</option>)}
      </select>
      <select required value={form.doctor} onChange={e=>setForm({...form,doctor:e.target.value})} className="w-full mb-2 p-2 border rounded">
        <option value="">اختر الطبيب</option>
        {doctors.map(d => <option key={d} value={d}>{d}</option>)}

      </select>

      <input type="date" required value={form.date} onChange={e=>setForm({...form,date:e.target.value})} className="w-full mb-2 p-2 border rounded" />
      <input type="time" required value={form.time} onChange={e=>setForm({...form,time:e.target.value})} className="w-full mb-2 p-2 border rounded" />

      <input placeholder="الاسم الكامل" required value={form.name} onChange={e=>setForm({...form,name:e.target.value})} className="w-full mb-2 p-2 border rounded" />
      <input placeholder="الهاتف" required value={form.phone} onChange={e=>setForm({...form,phone:e.target.value})} className="w-full mb-2 p-2 border rounded" />
      <input placeholder="البريد الإلكتروني (اختياري)" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} className="w-full mb-2 p-2 border rounded" />
      <textarea placeholder="ملاحظات (اختياري)" value={form.notes} onChange={e=>setForm({...form,notes:e.target.value})} className="w-full mb-2 p-2 border rounded" />
      <button type="submit" className="btn-primary w-full">تأكيد الحجز</button>
      {status && <p className="mt-3 text-green-600">{status}</p>}
    </form>
  )
}
