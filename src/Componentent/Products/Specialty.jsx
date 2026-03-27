import { Link } from "react-router-dom"
import SpecialtyProducts from "../../Utility/specialtyProducts"

const Specialty = () => {
  return (
    <div>
      <h1 className='text-2xl '>Specialty Products</h1>
      <p>Welcome to our specialty products page!</p>
      {SpecialtyProducts.map((product) => (
        <div key={product.id} className='bg-white p-4 rounded shadow mb-4'>
          <Link to={`/product/specialty/${product.id}`} className='text-blue-500 font-semibold text-lg hover:text-gray-400 transition-all duration-300 hover:scale-105'>
            {product.name}
          </Link>
          
        </div>
      ))}
    </div>
  )
}

export default Specialty