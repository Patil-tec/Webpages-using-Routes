import React from 'react'
import Data1 from '../../../Utility/Data1'
import { Link } from 'react-router-dom'

function Electronic() {
  return (
    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6 p-2'>
      {Data1.map((d)=>(
        <Link key={d.id} to={`/product/electronic/${d.id}`} className='group block'>
          <div className='bg-white px-4 py-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-blue-500 hover:-translate-y-1 transition-all duration-300 min-h-[120px] flex items-center justify-center text-center'>
             <span className='text-gray-800 font-bold text-lg md:text-xl group-hover:text-blue-600 transition-colors'>{d.brand}</span>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default Electronic
