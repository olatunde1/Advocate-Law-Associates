import React from 'react'
import hammer from '../../Images/judge-hammer.png'
import balance from '../../Images/balance.png'
import judge from '../../Images/judge.png'
import babyLawyer from '../../Images/babyLawyer.png';
import '../../index.css';

export default function NavbarContent() {
  return (
    <>
      <div className='wrapper relative'>
        <div className='md:flex md:items-center md:justify-between absolute mx-40 mb-12 -top-72'>
          <div className='flex w-80 h-60 border-b-4 border-primary bg-call px-8 py-12 mx-2'>
            <img className=' w-14 h-14 mr-4' src={hammer} />
            <div>
              <p className='text-xl text-white pb-5'>100% Success rate</p>
              <p className='text-white'>All the Lorum Ipsum generator on the internet tend to repeat predefined chunks</p>
            </div>
          </div>
          <div className='flex w-80 h-60 border-b-4 border-primary  bg-call px-8 py-12 mx-2'>
            <img className=' w-14 h-14 mr-4' src={judge} />
            <div>
              <p className='text-xl text-white pb-5'>Top Rated Services</p>
              <p className='text-white'>All the Lorum Ipsum generator on the internet tend to repeat predefined chunks</p>
            </div>
          </div>
          <div className='flex w-80 h-60 border-b-4 border-primary  bg-call px-8 py-12 mx-2'>
            <img className=' w-14 h-14 mr-4' src={balance} />
            <div>
              <p className='text-xl text-white pb-5'>Clients Satisfaction</p>
              <p className='text-white'>All the Lorum Ipsum generator on the internet tend to repeat predefined chunks</p>
            </div>
          </div>
        </div>
        <section className='md:flex mt-32 pt-32 mb-16'>
          <img className=' w-2/4 h-3/4 ml-44 mr-12' src={babyLawyer} alt='law'/>
          <div className=' w-3/5 mr-12 font-[libre]'>
            <p className=' text-about pr-2 text-2xl font-bold mb-5'>About Us</p>
            <h2 className=' text-about pr-2 text-4xl font-extrabold mb-9'>Welcome to Advocate Law Associates</h2>
            <p className='text-about pr-2 text-xl mb-9'>Our clients' bottom line is our top priority. We are in constant communication with the people we serve and are committed to advancing the immediate needs and wants of our clients.<br />
              <br />
              Our team works around the clock to provide the necessary services and support that each client needs from us.Excellent legal services we take pride in helping people from all walks of life achieve the justice and peace they deserve.</p>
            <button className='bg-primary mt-16 text-white text-2xl hover:bg-primary hover:border-transparent py-4 px-16 transition-all  duration-500 ease-in' >Learn More</button>
          </div>
        </section>
      </div>
    </>
    
    
  )
}