import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../../Context/CartContext'

function Navbar() {
  const { cartCount } = useCart();

  return (
    <nav className='bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center sticky top-0 z-50'>
      <div className='text-xl font-bold text-gray-800'>
        <Link to={'/'}>MyStore</Link>
      </div>
      <div className='flex gap-6 items-center'>
        <Link to={'/'} className='text-gray-600 hover:text-blue-600 font-medium transition-colors'>Home</Link>
        <Link to={'/service'} className='text-gray-600 hover:text-blue-600 font-medium transition-colors'>Service</Link>
        <Link to={"/product"} className='text-gray-600 hover:text-blue-600 font-medium transition-colors'>Product</Link>
        
        <div className='flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full'>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          <span className="font-bold text-blue-600">{cartCount}</span>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
