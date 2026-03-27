import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

function Product() {
  return (
    <div className='max-w-7xl mx-auto p-4 md:p-6 lg:p-8 min-h-screen'>
      <div className='mb-10 text-center sm:text-left'>
        <h1 className='text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-indigo-600 tracking-tight mb-3 transition-transform hover:scale-[1.01] duration-300 inline-block'>Our Products</h1>
        <p className='text-gray-500 text-lg md:text-xl font-medium'>Browse through our amazing categories and find what you love.</p>
      </div>

      <nav className='flex gap-3 sm:gap-4 mb-10 border-b border-gray-200 pb-5 overflow-x-auto scrollbar-hide'>
        <NavLink
          to={'/product/electronic'}
          className={({ isActive }) => `px-5 py-2.5 rounded-full font-semibold transition-all duration-200 ${isActive ? 'bg-blue-600 text-white shadow-md scale-105' : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900'}`}>
          Electronics
        </NavLink>
        <NavLink
          to={'/product/grocery'}
          className={({ isActive }) => `px-5 py-2.5 rounded-full font-semibold transition-all duration-200 ${isActive ? 'bg-blue-600 text-white shadow-md scale-105' : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900'}`}>
          Groceries
        </NavLink>
        <NavLink
          to={'/product/mobile'}
          className={({ isActive }) => `px-5 py-2.5 rounded-full font-semibold transition-all duration-200 ${isActive ? 'bg-blue-600 text-white shadow-md scale-105' : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900'}`}>
          Mobiles
        </NavLink>
      </nav>

      <div className='bg-white rounded-2xl min-h-[400px]'>
        <Outlet />
      </div>
    </div>
  )
}

export default Product
