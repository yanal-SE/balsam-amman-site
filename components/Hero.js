export default function Hero() {
  return (
    <section className="bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center p-8 max-w-7xl mx-auto">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-primary">مركز بلسم عمان الطبي</h1>
          <p className="mt-3 text-gray-700">رعاية طبية متقدمة بخبرة وثقة — احجز موعدك الآن عبر واتساب أو الهاتف</p>
          <div className="mt-5 flex gap-3">
            <a href="/appointments" className="btn-primary">احجز الآن</a>
            <a href="https://wa.me/962792909635" target="_blank" rel="noreferrer" className="btn-outline">تواصل عبر واتساب</a>
          </div>
          <div className="mt-4 text-sm text-gray-500">هاتف: +962 7 9290 9635 — أرضي: 065 733 606</div>
        </div>

        <div className="rounded-md overflow-hidden">
          <img src="https://images.unsplash.com/photo-1580281657521-1a3b8f2f58f8?q=80&w=1080&auto=format&fit=crop&ixlib=rb-4.0.3&s=placeholder" alt="واجهة مركز بلسم عمان" className="w-full h-64 object-cover" />
        </div>
      </div>
    </section>
  )
}
