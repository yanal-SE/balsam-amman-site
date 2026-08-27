import Header from '../components/Header'
import BookingForm from '../components/BookingForm'

export default function Appointments() {
  const services = ['مختبر طبي','أشعة تشخيصية','عيادة أسنان','نساء وتوليد','طب الأطفال']
  const doctors = ['د. مازن', 'د. سارة', 'د. أحمد']

  return (
    <div>
      <Header />
      <main className="max-w-4xl mx-auto p-6">
        <h1 className="text-2xl font-semibold mb-4">حجز موعد</h1>
        <p className="text-gray-600 mb-4">اختر الخدمة والطبيب والتاريخ. سيتم التواصل معك لتأكيد الموعد.</p>
        <BookingForm services={services} doctors={doctors} />
      </main>
    </div>
  )
}
