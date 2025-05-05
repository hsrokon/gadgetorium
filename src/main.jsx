import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/layout/Layout.jsx'
import Home from './components/home/Home.jsx'
import DetailsProduct from './components/detailsProduct/DetailsProduct.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element:<Layout></Layout>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/products/:productId',
        loader: ()=> fetch('data.json'),
        element: <DetailsProduct></DetailsProduct>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
