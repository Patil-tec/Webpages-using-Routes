import { Link } from "react-router-dom"
import ConvenienceProducts from "../../Utility/convenienceProducts"

const Convenience = () => {
  return (
    <div>
      <h1 className='text-2xl '>Convenience Products</h1>
      <p>Welcome to our convenience products page!</p>
      {
        ConvenienceProducts.map((product) => (
          <div key={product.id} className='p-4 border rounded-lg shadow-md mb-4'>
            <Link to={`/product/convenience/${product.id}`} className='text-blue-500 font-semibold text-lg hover:text-gray-400 transition-all duration-300 hover:scale-105'>
              {product.name}
            </Link>  
          </div>
        ))
      }
    </div>
  )
}

export default Convenience