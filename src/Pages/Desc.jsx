import React from 'react'
import { useParams } from 'react-router-dom'
import All from '../Utility/All'

function Desc() {
  const {id} = useParams()

  const allProducts = [
    ...All.ConvenienceProducts,
    ...All.ShoppingProducts,
    ...All.SpecialtyProducts,
    ...All.UnsoughtProducts
  ]

  const product = allProducts.find((product) => product.id === Number(id))

  return (
    <div className='min-h-screen bg-linear-to-br from-red-50 to-rose-100 p-8'>
      <h1 className='text-5xl font-bold text-rose-900 mb-6 text-center'>{product.name}</h1>
      <p className='text-lg text-gray-700 leading-relaxed mb-4 text-justify'>{product.description}</p>
      <h2 className='text-2xl font-semibold text-rose-800 mb-4'>Product Details</h2>
      <ul className='list-disc list-inside text-gray-600 mb-4'>
        <li><strong>Price:</strong> ${product.price}</li>
        <li><strong>Category:</strong> {product.category}</li>
        <li><strong>Availability:</strong> {product.availability ? 'In Stock' : 'Out of Stock'}</li>
      </ul>
      <p className='text-base text-gray-600 leading-relaxed mb-4 text-justify'>For more information about this product or to make a purchase, please contact our customer service team or visit our website. We are here to assist you with any questions you may have and to ensure that you have the best shopping experience possible.</p>
      
    </div>
  )
}

export default Desc
