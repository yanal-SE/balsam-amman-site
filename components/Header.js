import Link from 'next/link'

export default function Header() {
  return (
    <header className="flex items-center justify-between p-4 border-b">
      <div className="flex items-center gap-4">
        <div className="w-36">
          <img src="/logo-horizontal.svg" alt="Balsam Amman" />
        </div>
        <div className="hidden md:block text-sm text-gray-600">مرج الحمام - دوّار أم عبهرة</div>
      </div>

      <div className="flex items-center gap-3">
        <a href="https://wa.me/962792909635" target="_blank" rel="noreferrer" className="btn-primary">واتساب</a>
        <a href="tel:+962792909635" className="btn-outline">اتصل الآن</a>
        <Link href="/appointments"><a className="ml-2 text-sm text-primary">احجز الآن</a></Link>
      </div>
    </header>
  )
}
