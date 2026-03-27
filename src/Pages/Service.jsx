import React from 'react'

const services = [
  {
    id: 1,
    title: 'Fast Delivery',
    description: 'We deliver your items quickly and safely to your door.',
    icon: '🚚'
  },
  {
    id: 2,
    title: 'Secure Payments',
    description: 'Your transactions are 100% safe with our platform.',
    icon: '💳'
  },
  {
    id: 3,
    title: 'Quality Products',
    description: 'We ensure all products meet our high quality standards.',
    icon: '⭐'
  },
  {
    id: 4,
    title: '24/7 Support',
    description: 'Our team is always here to help you when you need it.',
    icon: '🎧'
  }
];

function Service() {
  return (
    <div className='max-w-6xl mx-auto px-4 py-16 min-h-screen'>
      <div className='text-center mb-16'>
        <h1 className='text-3xl md:text-5xl font-bold text-gray-800 mb-4'>Our Services</h1>
        <p className='text-lg text-gray-600 max-w-2xl mx-auto'>We provide reliable and excellent services to ensure you have the best shopping experience.</p>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
        {services.map((service) => (
          <div key={service.id} className='bg-white p-8 rounded-xl shadow-md border border-gray-100 flex flex-col items-center text-center hover:shadow-lg transition-shadow'>
            <div className='text-5xl mb-6 bg-blue-50 w-20 h-20 flex items-center justify-center rounded-full'>
              {service.icon}
            </div>
            <h3 className='text-xl font-bold text-gray-800 mb-3'>{service.title}</h3>
            <p className='text-gray-600 leading-relaxed'>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Service
