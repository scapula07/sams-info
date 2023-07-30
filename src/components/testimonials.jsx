import React from 'react'
import test from "../assets/test.png"

export default function Testimonials() {
  return (
    <div className='flex items-center flex-col w-full space-y-7 py-16 px-20'> 
            <div className='flex flex-col space-y-1 items-center'>
            <h5 className='text-4xl font-semibold ' >TESTIMONIALS</h5>
            <h5 className='text-sm font-light text-center'>Here’s a  review of what our clients have to say
                about our services
                </h5>

            </div>

            <div className=''>
                <img 
                  src={test}
                />



            </div>
    </div>
  )
}
