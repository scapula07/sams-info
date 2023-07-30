import React from 'react'
import service from "../assets/servicepg.png"
export default function Services() {
  return (
    <div className='flex items-center flex-col w-full space-y-7 py-16 px-20'> 
        <div className='flex flex-col space-y-1 items-center'>
           <h5 className='text-4xl font-semibold '>Services</h5>
        </div>

        <div>
            <img
              src={service}
             />

        </div>
    </div>
  )
}
