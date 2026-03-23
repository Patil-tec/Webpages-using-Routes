import { Link } from "react-router-dom"
import ShoppingProducts from "../../Utility/shoppingProducts"

const Shopping = () => {
  return (
    <div>
      <h1 className='text-2xl '>Shopping Products</h1>
      <p>Welcome to our shopping products page!</p>
      {
        ShoppingProducts.map((product)=>{
          return (
            <div key={product.id} className='bg-white p-4 rounded shadow mb-4'>
              <Link to={`/product/shopping/${product.id}`} className='text-blue-500 font-semibold text-lg hover:text-gray-400 transition-all duration-300 hover:scale-105'>
                {product.name}
              </Link>
            </div>
          )
        })
      }
    </div>
  )
}

export default Shopping