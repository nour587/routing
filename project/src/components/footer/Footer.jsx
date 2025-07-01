import { Chrome, Facebook, Linkedin, Twitter } from 'lucide-react'
import React from 'react'

export default function Footer() {
  return (
    <>
      <div className="footer py-5">
         <div className="container">
         <div className="d-flex justify-content-center align-items-center pt-5">
            <div className="card-body text-center text-white col-md-4">
                <h3>LOCATION</h3>
                <p>2215 John Daniel Drive</p>
                <p>Clark, MO 65243</p>
            </div>
            <div className="card-body text-center text-white  col-md-4">
                <h3>AROUND THE WEB</h3>
                <ul className='d-flex justify-content-center list-unstyled gap-2 lists'>
                  <li className=""><Facebook /></li>
                  <li><Twitter /></li>
                  <li><Linkedin /></li>
                  <li><Chrome /></li>
                </ul>
            </div>
            <div className="card-body text-center text-white  col-md-4">
                <h3>ABOUT FREELANCER</h3>
                <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
            </div>
         </div>
         </div>
      </div>
      <div className='end text-center text-white py-3'>
        <p>Copyright © Your Website 2021</p>
      </div>
    </>
  )
}
