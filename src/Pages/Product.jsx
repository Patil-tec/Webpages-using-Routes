import { Link, Outlet } from "react-router-dom"

const Product = () => {
  return (
    <div className='min-h-screen bg-linear-to-br from-blue-50 to-indigo-100 p-8'>
        <h1 className='text-5xl font-bold text-indigo-900 mb-6 text-center'>Product Page</h1>
        <p className='text-lg text-gray-700 leading-relaxed mb-4 text-justify'>Welcome to our product page!</p>
        <p className='text-base text-gray-600 leading-relaxed mb-4 text-justify'>Here you can find a variety of products that we offer. We have a wide range of items to suit your needs, from everyday essentials to unique and innovative products. Browse through our selection and find the perfect product for you!</p>
        <p className='text-base text-gray-600 leading-relaxed mb-4 text-justify'>Our products are carefully curated to ensure quality and satisfaction. Whether you're looking for convenience items, unsought products, or something in between, we have something for everyone. Explore our categories and discover the best products that meet your needs and preferences.</p>
        <p className='text-base text-gray-600 leading-relaxed mb-4 text-justify'>Don't forget to check out our special offers and discounts on select products. We are committed to providing you with the best shopping experience, so feel free to reach out to our customer service team if you have any questions or need assistance with your purchase.</p>
        <p className='text-base text-gray-600 leading-relaxed mb-4 text-justify'>Thank you for choosing our products. We look forward to serving you and providing you with the best products on the market!</p>

        <div className="p-4 flex justify-center gap-8 shadow-lg sticky top-0 z-50">
            <Link to="/product/convenience" className='text-blue-500 font-semibold text-lg hover:text-gray-400 transition-all duration-300 hover:scale-105 border-b-2 border-transparent hover:border-white'>Convenience</Link>
                  <Link to="/product/shopping" className='text-blue-500 font-semibold text-lg hover:text-gray-400 transition-all duration-300 hover:scale-105 border-b-2 border-transparent hover:border-white'>Shopping</Link>
                  <Link to="/product/specialty" className='text-blue-500 font-semibold text-lg hover:text-gray-400 transition-all duration-300 hover:scale-105 border-b-2 border-transparent hover:border-white'>Specialty</Link>
                  <Link to="/product/unsought" className='text-blue-500 font-semibold text-lg hover:text-gray-400 transition-all duration-300 hover:scale-105 border-b-2 border-transparent hover:border-white'>Unsought</Link>
        </div>
        <Outlet />
    </div>
    )
}

export default Product