
import { Star } from 'lucide-react'
import React, { useState } from 'react'

export default function Contact() {

let [nameValue,setNameValue] = useState('')
let [ageValue,setAgeValue] = useState('')
let [emailValue,setEmailValue] = useState('')
let [passwordValue,setPasswordValue] = useState('')

let [nameLabel,setNameLabel] = useState(false)
let [ageLabel,setAgeLabel] = useState(false)
let [emailLabel,setEmailLabel] = useState(false)
let [passwordLabel,setPasswordLabel] = useState(false)

const nameInput =()=>{
  if( nameValue !=""){
    setNameLabel(true)
  }
}
const ageInput =()=>{
  if( ageValue !=""){
    setAgeLabel(true)
  }
}
const emailInput =()=>{
  if( emailValue !=""){
    setEmailLabel(true)
  }
}
const passwordInput =()=>{
  if(passwordValue !=""){
    setPasswordLabel(true)
  }
}

  return (
    <>
      <div className="contact container my-5 py-3">
        <div className="">
         <h2 className='fs-1 fw-bolder my-3 mt-5 pt-5 text-center' >CONTACT SECTION</h2>
         <div className="d-flex gap-5 mt-3 justify-content-center align-items-center ">
            <div className="darkLine ms-5 "></div>
            <Star className='text-black mx-3 mb-1' />
            <div className="darkLine me-5"></div>
          </div>
       <form action="" className='my-5 w-50 pt-3 d-flex gap-4 flex-column mx-auto '>
         <div class="mb-3">
           {nameLabel && <label htmlFor="userName" >userName: </label>}
        <input type="text" className="border-0 border-bottom w-100 pe-5 py-2 position-relative"
        value={nameValue}
        onChange={(e) => setNameValue(e.target.value)} 
        onBlur={nameInput}
         id="userName" placeholder="userName"/>
         </div>
        <div class="mb-3">
          {ageLabel && <label htmlFor="userAge" >userAge: </label>}
        <input type="text" className="border-0 border-bottom w-100 pe-5 py-2  position-relative" 
        value={ageValue}
        onChange={(e) => setAgeValue(e.target.value)} 
        onBlur={ageInput}
        id="userAge" placeholder="userAge"/>
         </div>
        <div class="mb-3">
           {emailLabel && <label htmlFor="userEmail" >userEmail: </label>}
        <input type="email" className="border-0 border-bottom w-100 pe-5 py-2 position-relative"
        value={emailValue}
        onChange={(e) => setEmailValue(e.target.value)} 
        onBlur={emailInput}
        id="userEmail" placeholder="userEmail"/>
         </div>
        <div class="mb-3">
           {passwordLabel && <label htmlFor="userPassword" >userPassword: </label>}
        <input type="password" className="border-0 border-bottom w-100 pe-5 py-2 position-relative "
        value={passwordValue}
        onChange={(e) => setPasswordValue(e.target.value)} 
        onBlur={passwordInput}
         id="userPassword" placeholder="userPassword"/>
         </div>
       </form>
      <div className='d-flex justify-content-center align-items-center'>
        <button className='rounded border-0 py-2 px-3 message text-center'>Send Message</button>
      </div>
         </div>
      </div>
    </>
  )
}
