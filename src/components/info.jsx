import React from 'react'
import address from "../assets/Address.png"
import email from "../assets/Emails.png"
import phone from "../assets/Phone.png"

export default function Info() {
  return (
    <div className='w-full flex justify-center'>
        <div className='flex items-center'>
            <img 
              src={address}
              className="w-3/4"
            />

            <div className='flex flex-col'>
                    <img 
                    src={email}
                    className="w-3/4"
                    />
                    <img 
                    src={phone}
                    className="w-3/4"
                    />


            </div>

        </div>

    </div>
  )
}
