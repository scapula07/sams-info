import React from 'react'
import address from "../assets/Address.png"
import email from "../assets/Emails.png"
import phone from "../assets/Phone.png"

export default function Info() {
  return (
    <div className='w-full flex justify-center'>
        <div className='flex space-x-8 h-36'>
            <img 
              src={address}
              className="w-80 h-full"
            />

            <div className='flex flex-col justify-between h-full py-2.5'>
                    <img 
                    src={email}
                    className="w-56"
                    />
                    <img 
                    src={phone}
                    className="w-44"
                    />


            </div>

        </div>

    </div>
  )
}
