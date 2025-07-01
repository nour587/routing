import { useState } from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar.jsx'
import Home from './pages/home/Home.jsx'
import Footer from './components/footer/Footer.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/layout/Layout.jsx'
import About from './pages/about/About.jsx'
import Contact from './pages/contact/Contact.jsx'
import Portfolio from './pages/portfolio/Portfolio.jsx'



function App() {
  
 let router= createBrowserRouter([
    {path:"",element:<Layout/>,children:[
      {path:"home",element:<Home/>},
      {path:"",element:<Home/>},
      {path:"about",element:<About/>},
      {path:"contact",element:<Contact/>},
      {path:"portfolio",element:<Portfolio/>}
      
    ]},
    
      {path:"*",element:<h1 className='text-danger text-center fw-bold  mt-3'>404 NOT FOUND</h1>}
    
    
  ])

  return (
    <>
      
      <RouterProvider router={router}/>
      
     
    </>
  )
}

export default App
