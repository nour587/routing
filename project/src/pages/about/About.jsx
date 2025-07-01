
import { Star } from 'lucide-react'
import React from 'react'

export default function About() {
  return (
    <>
      <div className="about d-flex justify-content-center align-items-center text-center text-white">
        <div className="text-center container mt-5">
          <h2 className='fs-1 fw-bolder my-3'>ABOUT COMPONENT</h2>
           <div className="d-flex gap-5 mt-3 justify-content-center align-items-center">
            <div className="line ms-5  "></div>
            <Star className='text-white mx-3 mb-1' />
            <div className="line me-5 "></div>
           </div>
        <div className="d-flex gap-4 mt-4 justify-content-center align-items-center">
          <p className='col-md-5'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
          <p className='col-md-5'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
        </div>
      </div>
      </div>
    </>
  )
}
