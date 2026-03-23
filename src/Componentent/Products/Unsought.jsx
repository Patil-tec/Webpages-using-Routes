import { Link } from "react-router-dom"
import UnsoughtProducts from "../../Utility/unsoughtProducts"

const Unsought = () => {
  return (
    <div>
      <h1 className='text-2xl '>Unsought Products</h1>
      <p>Welcome to our unsought products page!</p>
      {
        UnsoughtProducts.map((product)=>{
          return (
            <div key={product.id} className='bg-white p-4 rounded shadow mb-4'>
              <Link to={`/product/unsought/${product.id}`} className='text-blue-500 font-semibold text-lg hover:text-gray-400 transition-all duration-300 hover:scale-105'>
                {product.name}
              </Link>
            </div>
          )
        })
      }
    </div>
  )
}

export default Unsought