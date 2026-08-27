import Header from '../components/Header'
import Hero from '../components/Hero'
import BookingForm from '../components/BookingForm'

export default function Home() {
  const services = ['مختبر طبي','أشعة تشخيصية','عيادة أسنان','نساء وتوليد','طب الأطفال']
  const doctors = ['د. مازن', 'د. سارة', 'د. أحمد']

  return (
    <div>
      <Header />
      <main>
        <Hero />
        <section className="max-w-7xl mx-auto p-6 grid md:grid-cols-2 gap-6">
          <div>
            <h2 className="text-2xl font-semibold mb-3">خدماتنا</h2>
            <div className="grid grid-cols-2 gap-4">
              {services.map(s => (
                <div key={s} className="p-4 border rounded">
                  <h4 className="font-semibold">{s}</h4>
                  <p className="text-sm text-gray-600 mt-1">وصف مختصر للخدمة</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <BookingForm services={services} doctors={doctors} />
          </div>
        </section>

        <section className="bg-gray-50 py-8">
          <div className="max-w-7xl mx-auto px-6">
            <h3 className="text-xl font-semibold mb-4">جولة داخل العيادة</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <img src="https://images.unsplash.com/photo-1580281657521-1a3b8f2f58f8?q=80&w=1080&auto=format&fit=crop&ixlib=rb-4.0.3&s=placeholder" alt="front" className="w-full h-40 object-cover rounded" />
              <img src="https://images.unsplash.com/photo-1580281657521-1a3b8f2f58f8?q=80&w=1080&auto=format&fit=crop&ixlib=rb-4.0.3&s=placeholder" alt="room" className="w-full h-40 object-cover rounded" />
              <img src="https://images.unsplash.com/photo-1580281657521-1a3b8f2f58f8?q=80&w=1080&auto=format&fit=crop&ixlib=rb-4.0.3&s=placeholder" alt="nurse" className="w-full h-40 object-cover rounded" />
              <img src="https://images.unsplash.com/photo-1580281657521-1a3b8f2f58f8?q=80&w=1080&auto=format&fit=crop&ixlib=rb-4.0.3&s=placeholder" alt="lab" className="w-full h-40 object-cover rounded" />
            </div>
          </div>
        </section>
      </main>
      <footer className="p-6 text-center text-sm text-gray-600">© {new Date().getFullYear()} Balsam Amman</footer>
    </div>
  )
}
