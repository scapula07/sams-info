import React from 'react'
import service from "../assets/servicepg.png"
import card from "../assets/Card.png"
export default function Services() {
  return (
    <div className='flex items-center flex-col w-full space-y-7 py-16 px-20'> 
        <div className='flex flex-col space-y-1 items-center'>
           <h5 className='text-4xl font-semibold '>Services</h5>
        </div>

         <div className='flex flex-col w-full'>
            <img
              src={service}
             />
             <div className='w-full flex justify-end -mt-10'>
             <img
              src={card}
              className="w-1/4 relative z-10"
             />

             </div>


        </div>

    </div>
  )
}
