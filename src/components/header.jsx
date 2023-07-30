import React from 'react'
import logo from "../assets/qmloogo.png"

export default function Header() {
  return (
     <div className='w-full flex items-center justify-between px-28 bg-white py-4'>
       
            <img
             src={logo}
             className="w-24"
             />
      
            <div className='flex items-center space-x-10 '>
                <h5 className='text-sm font-semibold text-white px-6 py-1 '>Home</h5>
                <h5 className='text-sm font-semibold'>About Us</h5>
                <h5 className='text-sm font-semibold'>Services</h5>
                <h5 className='text-sm font-semibold'>Testimonials</h5>
                <h5 className='text-sm font-semibold'>Contact Us</h5>

            </div>

     </div>
  )
}
