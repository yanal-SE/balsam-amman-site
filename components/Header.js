import Link from 'next/link'

export default function Header() {
  return (
    <header className="border-b">
      <div className="bg-white/60 px-4 py-2 text-sm flex items-center justify-between">
        <div className="flex items-center gap-4">
          {/* Use the uploaded logo file (user said they added it). Make it larger and keep aspect ratio */}
          <img src="/logo-horizontal.svg" alt="Balsam Amman logo" className="w-60 h-auto" style={{ maxWidth: '360px' }} />
          <div className="hidden sm:block">
            <div className="font-semibold">مركز بلسم عمان الطبي</div>
            <div className="text-xs text-gray-500">مرج الحمام - دوّار أم عبهرة - مقابل مكتب تحصيل فواتير الكهرباء</div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="text-sm">⭐ <span className="font-semibold">4.7</span> <span className="text-gray-500 text-xs">(تقييم المرضى)</span></div>
          <a href="https://wa.me/962792909635" target="_blank" rel="noreferrer" className="btn-primary">واتساب</a>
          <a href="tel:+962792909635" className="btn-outline">اتصل الآن</a>
        </div>
      </div>

      <div className="flex items-center justify-between p-4 max-w-7xl mx-auto">
        <nav className="hidden md:flex gap-4 text-sm">
          <Link href="/"><a>الرئيسية</a></Link>
          <Link href="/services"><a>الخدمات</a></Link>
          <Link href="/doctors"><a>الأطباء</a></Link>
          <Link href="/gallery"><a>جولة داخل العيادة</a></Link>
          <Link href="/contact"><a>اتصل بنا</a></Link>
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Link href="/appointments"><a className="bg-primary text-white px-4 py-2 rounded-md">احجز الآن</a></Link>
        </div>
      </div>
    </header>
  )
}
