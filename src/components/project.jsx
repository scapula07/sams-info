import React from 'react'
import project from "../assets/project.png"
export default function Project() {
  return (
    <div className='flex items-center flex-col w-full space-y-7 py-16 px-20'> 
    <div className='flex flex-col space-y-1 items-center'>
       <h5 className='text-4xl font-semibold '>Our projects</h5>
    </div>

    <div className='w-1/2'>
        <img
          src={project}
         />

    </div>
</div>
  )
}
