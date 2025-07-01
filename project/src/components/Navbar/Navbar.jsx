import React, { useState ,useEffect} from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {

  let [isScrolled,setisScrolled] = useState(false)

useEffect(() => {
      const scroll =()=>{setisScrolled(window.scrollY > 2)}

      window.addEventListener("scroll" ,scroll)

      return () => window.removeEventListener("scroll", scroll);
}, [])


  return (
    <>
      <nav className={`navbar ${isScrolled? "navbarscrolled":""}  navbar-expand-lg  fixed-top `}>
      <div className="container ">
    <a className="navbar-brand text-white fw-bolder fs-2 " href="#">START FRAMEWORK</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item text-white fw-bold text-uppercase px-2">
          <NavLink class="nav-link text-white fw-bold text-uppercase px-2" aria-current="page" to="/home">Home</NavLink>
        </li>
        
        <li className="nav-item text-white fw-bold text-uppercase px-2">
          <NavLink class="nav-link text-white fw-bold text-uppercase px-2" to="/about">About</NavLink>
        </li>
        
        <li className="nav-item text-white fw-bold text-uppercase px-2">
          <NavLink class="nav-link text-white fw-bold text-uppercase px-2" to="/contact">Contact</NavLink>
        </li>
        
        <li className="nav-item text-white fw-bold text-uppercase px-2">
          <NavLink class="nav-link text-white fw-bold text-uppercase px-2" to="/portfolio">Portfolio</NavLink>
        </li>
        
       
      </ul>
      
    </div>
  </div>
</nav>
    </>
  )
}
