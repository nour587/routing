import React from 'react'
import port1 from '../../assets/poert1.png'
import port2 from '../../assets/port2.png'
import port3 from '../../assets/port3.png'
import { Plus, Star } from 'lucide-react'
export default function Portfolio() {
  return (
    <>
      <div className="portfolio mt-5 container d-flex justify-content-center align-items-center text-center ">
       <div className="text-center">
         <h2 className='fs-1 fw-bolder my-3 mt-5 pt-5' >PORTFOLIO COMPONENT</h2>
         <div className="d-flex gap-5 mt-3 justify-content-center align-items-center">
            <div className="darkLine ms-5"></div>
            <Star className='text-black mx-3 mb-1 ' />
            <div className="darkLine me-5"></div>
            </div>
            <div className='d-flex gap-5 flex-column my-3'>
              <div className="d-flex gap-5 ">
             <div className='position-relative image-con'> 
              <img src={port1} className="rounded-3 col-md-6 w-100 " alt="..."/>
              <div className="layer position-absolute w-100 top-0 start-0 end-0 h-100 rounded-3 justify-content-center align-items-center d-flex">
                <Plus size={68} className=' text-center text-white' />
              </div>
             </div>
             <div className='position-relative image-con'> 
              <img src={port2} className="rounded-3 col-md-6 w-100" alt="..."></img>
              <div className="layer position-absolute w-100 top-0 start-0 end-0 h-100 rounded-3 justify-content-center align-items-center d-flex">
                <Plus size={68} className=' text-center text-white' />
              </div>
             </div>
             <div className='position-relative image-con'> 
              <img src={port3} className="rounded-3 col-md-6 w-100" alt="..."></img>
              <div className="layer position-absolute w-100 top-0 start-0 end-0 h-100 rounded-3 justify-content-center align-items-center d-flex">
                <Plus size={68} className=' text-center text-white' />
              </div>
             </div>
              </div>
              <div className="d-flex gap-5 ">
             <div className='position-relative image-con'> 
              <img src={port1} className="rounded-3 col-md-6 w-100" alt="..."/>
              <div className="layer position-absolute w-100 top-0 start-0 end-0 h-100 rounded-3 justify-content-center align-items-center d-flex">
                <Plus size={68} className=' text-center text-white' />
              </div>
             </div>
             <div className='position-relative image-con'> 
              <img src={port2} className="rounded-3 col-md-6 w-100" alt="..."></img>
              <div className="layer position-absolute w-100 top-0 start-0 end-0 h-100 rounded-3 justify-content-center align-items-center d-flex">
                <Plus size={68} className=' text-center text-white' />
              </div>
             </div>
             <div className='position-relative image-con'> 
              <img src={port3} className="rounded-3 col-md-6 w-100" alt="..."></img>
              <div className="layer position-absolute w-100 top-0 start-0 end-0 h-100 rounded-3 justify-content-center align-items-center d-flex">
                <Plus size={68} className=' text-center text-white' />
              </div>
             </div>
              </div>
              
            </div>
       </div>
      </div>
    </>
  )
}
