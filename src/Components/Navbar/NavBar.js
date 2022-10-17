import React, { useState } from 'react'
import logo2 from '../../../src/logo2.png';


export default function Navbar() {

  const [open,setOpen] = useState(false);
 
  return (
   <>
    <div className="bg-[url('Images/background.png')] w-auto h-auto relative  ">
      <nav className=" p-5 shadow md:flex md:items-center md:justify-between ">
          <div className='flex justify-between items-center'>
              <span className=' flex items-center  text-2xl font-[Poppins] cursor-pointer hover:text-cyan-900' >
                  <img className=' w-18 h-18' src={logo2} alt="logo" />
                  <div className='text-center pt-4 px-4 font-bold'>
                    <span className=' text-white pt-4'>Advocate <br /> <span className='text-primary'>Law Associates</span> </span>
                  </div>
              </span>
              <span onClick={() => setOpen(!open)} className='text-3xl cursor-pointer mx-2 md:hidden block'>
                <ion-icon name={ open ? 'close-outline':"menu-outline"} ></ion-icon>
              </span>
          </div>
          <ul className={`md:flex md:items-center z-[-1] md:z-auto md:static  absolute
                        left-0 w-fit md:w-auto md:py-0 py-4 md:px-4 px-4 md:pl-0 pl-7 top-[-400px]
                        transition-all ease-in duration-500 ${open ? 'top-20 opacity-100':'top-[-490px]'} md:opacity-100 opacity-0`}>
          
            <li className=' text-white mx-4 my-6 md:my-0 hover:underline underline-offset-8'>
              <a href='#' className='text-xl hover:text-primary duration-300'>Home</a>
            </li>
            <li className=' text-white mx-4 my-6 md:my-0 hover:underline underline-offset-8'>
              <a href='#' className='text-xl hover:text-primary duration-300 '>About</a>
            </li>
            <li className=' text-white mx-4 my-6 md:my-0 hover:underline underline-offset-8'>
              <a href='#' className='text-xl hover:text-primary  duration-300'>Practise Area</a>
            </li>
            <li className=' text-white mx-4 my-6 md:my-0 hover:underline underline-offset-8'>
              <a href='#' className='text-xl hover:text-primary duration-300'>Services</a>
            </li>
            <li className=' text-white mx-4 my-6 md:my-0 hover:underline underline-offset-8'>
              <a href='#' className='text-xl hover:text-primary duration-300'>Contact Us</a>
            </li>
            {/* <button className='bg-cyan-400 text-white font-[Poppins] duration-300 px-6 py-2 mx-4 hover:bg-cyan-500 rounded'>Login</button> */}
          </ul>
      </nav>
      <div className='text-white'>
        <h2 className=' text-5xl text-center font-[libre] pt-64 pb-7'>Excellent, Trusted and Full Representation <br /> For Every Client</h2>
        <p className='text-center font-[libre] pb-14'>We take pride in helping people from all walks of life achieve <br /> the justice and peace they deserve.</p>
        <div className='text-center font-[libre] pb-44' >
          <button className='bg-transparent border-2 hover:bg-primary hover:border-transparent py-4 px-4 mr-9 rounded-3xl transition-all  duration-500 ease-in'>Free Consultation</button>
          <button className=' bg-transparent border-2  hover:bg-primary hover:border-transparent py-4 px-8 rounded-3xl transition-all  duration-500 ease-in' >Learn More</button>
        </div>
      </div>
     
    </div>
   </>
  )
}

