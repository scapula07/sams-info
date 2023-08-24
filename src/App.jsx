import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header'
import hero from "./assets/hero2.png"
import about from "./assets/about2.png"
import Services from './components/services'
import Project from './components/project'
import Contact from './components/contact'
import Testimonials from './components/testimonials'
import footer from "./assets/footer2.png"
import Info from './components/info'
import contact from "./assets/contact2.png"


function App() {
  const [count, setCount] = useState(0)

  return ( 
    <div className="relative  w-screen    overflow-x-hidden h-screen">
          <div className='fixed w-full bg-white z-30'>
            <Header />
          </div>

          <div className='w-full relative ' style={{height:"700px"}}>
              <img
                src={hero}
                className="w-full h-full"
               />
               <div className='absolute z-20 top-0 h-full w-full flex flex-col space-y-6 justify-center px-44 bg-black opacity-70'>
                    <div className='text-6xl font-semibold' style={{color:"rgba(4, 34, 105, 1)"}}>
                       HVAC solutions
                       <br></br>
                       for everyone
                    </div>

                    <h5 className='text-white font-semibold'>Central Texas Commercial HVAC Contractor</h5>

                    <button className='py-3 rounded-sm  text-white  w-56' style={{background:"rgba(210, 21, 61, 1)"}}>BOOK APPOINTMENT</button>
              

               </div>

          </div>

          <div className='w-full flex justify-center py-10'>
            <img 
              src={about}
              className="w-11/12"
            />

          </div>

          {/* <Services /> */}
          <Project />
          <Testimonials />
          {/* <Contact /> */}
          {/* <Info /> */}
          <img
                src={contact}
                className="w-full"
               />
          <img
            src={footer}
           />

        </div>
  )
}

export default App
