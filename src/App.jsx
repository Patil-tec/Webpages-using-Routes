import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home'
import Navbar from './Components/Navbar/Navbar'
import Service from './Pages/Service'
import Product from './Pages/Product'
import Electronic from './Components/Product/Electronic/Electronic'
import Grocery from './Components/Product/Grocery/Grocery'
import Mobile from './Components/Product/Mobile/Mobile'
import Desc from './Pages/Desc'
import ElectronicDesc from './Pages/ElectronicDesc'
import GroceryDesc from './Pages/GroceryDesc'
import { CartProvider } from './Context/CartContext';

function App() {
  const routing= createBrowserRouter([
    {
      path:"/",
      element:<div>
        <Navbar/>
        <Home/>
      </div>
    },{
      path:"/service",
      element:<div>
        <Navbar/>
        <Service/>
      </div>
    },{
      path:"/product",
      element:<div>
        <Navbar/>
        <Product/>
      </div>,children:[
        {
          path:"electronic",
          element:<div>
            <Electronic/>
          </div>
        }, {
          path:"grocery",
          element:<div>
            <Grocery/>
          </div>
        }, {
          path:"mobile",
          element:<div>
            <Mobile/>
          </div>
        },
      ]
    },{
      path:"product/mobile/:id",
      element:<div>
        <Navbar/>
        <Desc/>
      </div>
    },{
      path:"product/electronic/:id",
      element:<div>
        <Navbar/>
        <ElectronicDesc/>
      </div>
    },{
      path:"product/grocery/:id",
      element:<div>
        <Navbar/>
        <GroceryDesc/>
      </div>
    }
  ])
  return (
    <CartProvider>
      <RouterProvider router={routing}/>
    </CartProvider>
  )
}

export default App
