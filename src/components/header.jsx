import React from 'react'
import logo from "../assets/samslogo.png"

export default function Header() {
  return (
     <div className='w-full flex items-center justify-between px-28 bg-white '>
       
            <img
             src={logo}
             className="w-56 h-28"
             />
      
            <div className='flex items-center space-x-10 ' style={{color:"rgba(4, 34, 105, 1)"}}>
                <h5 className='text-sm font-semibold text-white px-6 py-1 '>Home</h5>
                <h5 className='text-sm font-semibold'>About Us</h5>
                <h5 className='text-sm font-semibold'>Services</h5>
                <h5 className='text-sm font-semibold'>Testimonials</h5>
                <h5 className='text-sm font-semibold'>Contact Us</h5>

            </div>

     </div>
  )
}
