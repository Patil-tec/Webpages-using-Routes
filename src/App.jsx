import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home'
import Navbar from './Componentent/Navbar/Navbar'
import About from './Pages/About'
import Product from './Pages/Product'
import Service from './Pages/Service'
import Desc from './Pages/Desc'
import Convenience from './Componentent/Products/Convenience'
import Shopping from './Componentent/Products/Shopping'
import Specialty from './Componentent/Products/Specialty'
import Unsought from './Componentent/Products/Unsought'

function App() {
  const routing = createBrowserRouter([
    {
      path: "/",
      element:<div>
        <Navbar/>
        <Home/>
      </div>
    },
    {
      path: "/about",
      element: <div>
        <Navbar/>
        <About/>
      </div>
    },
    {
      path: "/product",
      element: <div>
        <Navbar/>
        <Product/>
      </div>,
      children:[
        {
          path: "convenience",
          element: <Convenience />
        },
        {
          path: "convenience/:id",
          element: <Desc />
        },
        {
          path: "shopping",
          element: <Shopping />
        },
        {
          path: "shopping/:id",
          element: <Desc />
        },
        {
          path: "specialty",
          element: <Specialty />
        },
        {
          path: "specialty/:id",
          element: <Desc />
        },
        {
          path: "unsought",
          element: <Unsought />
        },
        {
          path: "unsought/:id",
          element: <Desc />
        }
      ]
    },
    {
      path: "/service",
      element: <div>
        <Navbar/>
        <Service/>
      </div>
    }
  ])
  return (
    <div>
      <RouterProvider router={routing} />
    </div>
  )
}

export default App
