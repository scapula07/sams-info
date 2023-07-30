import React from 'react'
import contact from "../assets/contact.png"
import footer from "../assets/footerqm.png"
export default function Contact() {
  return (
    <div className='flex items-center flex-col w-full space-y-7 py-16 px-20'> 
      <div className='flex flex-col space-y-1 items-center'>
        <h5 className='text-4xl font-semibold ' >Contact Us</h5>
    
        </div>

    <div className='flex w-full space-x-10'>
        
        <img 
          src={contact}
          className="w-1/2"
        />

        <div className='w-1/2'>
            <div className='flex flex-col w-full space-y-6'>
                    <div className='grid grid-flow-row grid-cols-2  gap-4 gap-y-8 h-full w-full '>

                        <input 
                        placeholder='Full name'
                        className='px-4 py-3 rounded-sm text-sm border '
                        />
                        <input 
                            placeholder='E- mail'
                            className='px-4 py-3 rounded-sm text-sm border'
                        />
                        <input 
                            placeholder='Phone Number'
                            className='px-4 py-3 rounded-sm text-sm border'
                        />
                        <input 
                        placeholder='Select service'
                        className='px-4 py-3 rounded-sm text-sm border'
                        />


                    </div>

                    <div className='flex flex-col w-full space-y-9'>
                        <textarea 
                            
                            className='px-4 py-8 rounded-lg text-sm w-full border'
                        />

                        <button className='text-lg font-semibold w-44 py-3 text-white ' style={{background: "rgba(6, 12, 27, 1)"}}>
                        Submit Message 

                        </button>


                    </div>
                    </div>

        </div>



    </div>
</div>
  )
}
