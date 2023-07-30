import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header'
import hero from "./assets/hero.png"
import about from "./assets/aboutus.png"
import Services from './components/services'
import Project from './components/project'
import Contact from './components/contact'
import Testimonials from './components/testimonials'
import footer from "./assets/footerqm.png"
import Info from './components/info'


function App() {
  const [count, setCount] = useState(0)

  return ( 
    <div className="relative  w-screen    overflow-x-hidden h-screen">
          <div className='fixed w-full bg-white z-30'>
            <Header />
          </div>

          <div className='w-full relative'>
              <img
                src={hero}
               />
               <div className='absolute z-20 top-0 h-full flex px-56  '>
                  {/* <button className='bg-black px-8 py-2 text-white h-56'>
                     BOOK APPOINTMENT
                     
                  </button> */}

               </div>

          </div>

          <div className='w-full flex justify-center py-10'>
            <img 
              src={about}
              className="w-3/4"
            />

          </div>
          <Services />
          <Project />
          <Testimonials />
          <Contact />
          <Info />
          <img
            src={footer}
           />

        </div>
  )
}

export default App
