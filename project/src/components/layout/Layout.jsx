import Footer from '../../components/footer/Footer.jsx'
import Navbar from '../../components/Navbar/Navbar.jsx'
import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </>
  )
}
