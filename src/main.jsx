import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/layout/Layout.jsx'
import Home from './components/home/Home.jsx'
import DetailsProduct from './components/detailsProduct/DetailsProduct.jsx'
import Dashboard from './components/dashboard/Dashboard.jsx'
import ErrorPage from './components/error/ErrorPage.jsx'
import Statistics from './components/statistics/Statistics.jsx'
import { HelmetProvider } from 'react-helmet-async'



const router = createBrowserRouter([
  {
    path: '/',
    element:<Layout></Layout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/products/:productId',
        element: <DetailsProduct></DetailsProduct>,
        loader: ()=> fetch('/data.json')
      },
      {
        path: '/dashboard',
        element: <Dashboard></Dashboard>
      },
      {
        path: '/statistics',
        element: <Statistics></Statistics>
      }
    ]
  }
])



createRoot(document.getElementById('root')).render(
  <HelmetProvider>
    <StrictMode>
      <RouterProvider router={router}></RouterProvider>
    </StrictMode>,
  </HelmetProvider>
)
