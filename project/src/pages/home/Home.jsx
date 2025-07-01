import React from 'react'
import image from '../../assets/avataaars.svg'
import { Star } from 'lucide-react'




export default function Home() {
  
  return (
    <>
      <div className="home d-flex justify-content-center align-items-center ">
            <div className='text-center'>
            <img src={image} className='myImg rounded mb-3'></img>
            <h2 className='text-uppercase text-white fw-bolder fs-1 p-3 '>start Framework</h2>
            <div className="d-flex text-center ms-5 ">
            <div className="line ms-5"></div>
            <Star className='text-white mx-3 mb-1' />
            <div className="line me-5"></div>
            </div>
            <p className='text-white p-3'>Graphic Artist - Web Designer - Illustrator</p>
            </div>
      </div>
    </>
  )
}
