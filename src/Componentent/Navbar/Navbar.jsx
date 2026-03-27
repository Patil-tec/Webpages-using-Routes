import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='bg-linear-to-r from-indigo-600 to-blue-600 p-4 flex justify-center gap-8 shadow-lg sticky top-0 z-50'>
      <Link to="/" className='text-white font-semibold text-lg hover:text-indigo-100 transition-all duration-300 hover:scale-105 border-b-2 border-transparent hover:border-white'>Home</Link>
      <Link to="/about" className='text-white font-semibold text-lg hover:text-indigo-100 transition-all duration-300 hover:scale-105 border-b-2 border-transparent hover:border-white'>About</Link>
      <Link to="/product" className='text-white font-semibold text-lg hover:text-indigo-100 transition-all duration-300 hover:scale-105 border-b-2 border-transparent hover:border-white'>Product</Link>
      <Link to="/service" className='text-white font-semibold text-lg hover:text-indigo-100 transition-all duration-300 hover:scale-105 border-b-2 border-transparent hover:border-white'>Service</Link>
    </div>
  )
}

export default Navbar
