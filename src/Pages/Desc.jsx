import React from 'react'
import { useParams, Link } from 'react-router-dom'
import Data from '../Utility/Data'
import { useCart } from '../Context/CartContext'

function Desc() {
  const { id } = useParams()
  const { addToCart, removeFromCart, resetCart, cartCount } = useCart()

  const product = Data.find(item => item.id === Number(id))

  return (
    <div className='p-4'>
      <div className='flex justify-between items-center mb-8'>
        <Link to="/product" className='hover:opacity-80 transition-opacity'>
          <h1 className='text-3xl font-extrabold text-gray-900 tracking-tight'>{product.brand}</h1>
        </Link>
        <div className='bg-blue-100 text-blue-800 px-4 py-2 rounded-md font-bold'>
          Cart: {cartCount}
        </div>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
        {product.mobiles.map((d) => (
          <div key={d.id} className='group bg-white border-none rounded-2xl p-5 shadow-sm hover:shadow-xl flex flex-col transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden ring-1 ring-gray-100'>
            <div className='w-full h-48 bg-gray-50 rounded-xl mb-5 flex items-center justify-center overflow-hidden group-hover:bg-gray-100 transition-colors duration-300'>
              <img src={d.image} alt={d.name} className='w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500 p-4' />
            </div>
            <div className='mb-4'>
              <h2 className='text-xl font-bold text-gray-800 mb-1 line-clamp-1' title={d.name}>{d.name}</h2>
              <span className='text-blue-600 font-extrabold text-xl font-mono tracking-tight'>₹{d.price.toLocaleString()}</span>
            </div>
            <div className='flex-grow mb-5 text-sm space-y-3'>
              <div className='flex items-center text-gray-500'>
                <span className='font-semibold text-gray-700 mr-2'>Color/Variant:</span>
                <span className='px-2.5 py-1 bg-gray-100 rounded-md text-xs font-medium text-gray-700'>{d.color || 'Standard'}</span>
              </div>
              <div>
                <span className='font-semibold text-gray-700 block mb-1'>Description:</span>
                <p className='text-gray-500 line-clamp-3 leading-relaxed text-xs'>{d.desc}</p>
              </div>
            </div>
            {cartCount === 0 ? (
              <button 
                onClick={addToCart}
                className='w-full bg-blue-600 text-white py-2.5 rounded-xl font-semibold hover:bg-blue-700 hover:shadow-md hover:shadow-blue-200 transition-all active:scale-95'>
                Add to Cart
              </button>
            ) : cartCount === 1 ? (
              <div className='flex items-center justify-between w-full border border-gray-200 rounded-xl overflow-hidden bg-gray-50 shadow-inner'>
                <button 
                  onClick={resetCart}
                  className='w-1/3 bg-red-50 text-red-600 font-semibold py-2.5 hover:bg-red-500 hover:text-white transition-colors'>
                  Reset
                </button>
                <span className='w-1/3 text-center font-bold text-gray-800'>{cartCount}</span>
                <button 
                  onClick={addToCart}
                  className='w-1/3 bg-green-50 text-green-600 font-semibold py-2.5 hover:bg-green-500 hover:text-white transition-colors text-xl leading-none'>
                  +
                </button>
              </div>
            ) : (
              <div className='flex items-center justify-between w-full border border-gray-200 rounded-xl overflow-hidden bg-gray-50 shadow-inner'>
                <button 
                  onClick={removeFromCart}
                  className='w-1/3 bg-yellow-50 text-yellow-600 font-bold py-2.5 hover:bg-yellow-500 hover:text-white transition-colors text-xl leading-none'>
                  -
                </button>
                <span className='w-1/3 text-center font-bold text-gray-800'>{cartCount}</span>
                <button 
                  onClick={addToCart}
                  className='w-1/3 bg-green-50 text-green-600 font-bold py-2.5 hover:bg-green-500 hover:text-white transition-colors text-xl leading-none'>
                  +
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Desc
