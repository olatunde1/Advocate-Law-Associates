import React from "react";
import hammer from '../../Images/judge-hammer.png'
import balance from '../../Images/balance.png'
import judge from '../../Images/judge.png'


export default function WhatWeDo() {

    return(
      
        <section className="bg-call text-center pt-32 pb-[91.19px]">
            <div>
                <p className="text-white text-bold font-[Poppins] text-[20px]">.....What we do....</p>
                <p className=" pt-5 text-white text-bold font-[libre] text-4xl">Our Practice Area</p>
            </div>
            <div className='md:flex md:items-center md:justify-between mx-40 mb-4 pt-20'>
                <div className='flex w-96 h-60 border-b-4 border-primary bg-card px-6 py-12 mx-2'>
                    <img className=' w-14 h-14 mr-4' src={hammer} />
                    <div>
                    <p className='text-xl text-white pb-5 text-left font-[inter]'>Marriage and Divorce</p>
                    <p className='text-white text-left font-[libre]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin netus curabitur massa nisl proin cras. </p>
                    </div>
                </div>
                <div className='flex w-96 h-60 border-b-4 border-primary bg-card px-6 py-12 mx-2'>
                    <img className=' w-14 h-14 mr-4' src={judge} />
                    <div>
                    <p className='text-xl text-white pb-5 text-left font-[inter]'>Prisoner Law</p>
                    <p className='text-white text-left font-[libre]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin netus curabitur massa nisl proin cras. </p>
                    </div>
                </div>
                <div className='flex w-96 h-60 border-b-4 border-primary bg-card px-6 py-12 mx-2'>
                    <img className=' w-14 h-14 mr-4' src={balance} />
                    <div>
                    <p className='text-xl text-white pb-5 text-left font-[inter]'>Bribery Law</p>
                    <p className='text-white text-left font-[libre]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin netus curabitur massa nisl proin cras. </p>
                    </div>
                </div>
            </div>
            <div className='md:flex md:items-center md:justify-between mx-40 mb-12 pt-14'>
                <div className='flex w-96 h-60 border-b-4 border-primary bg-card px-6 py-12 mx-2'>
                    <img className=' w-14 h-14 mr-4' src={hammer} />
                    <div>
                    <p className='text-xl text-white pb-5 text-left font-[inter]'>Innocent Law</p>
                    <p className='text-white text-left font-[libre]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin netus curabitur massa nisl proin cras. </p>
                    </div>
                </div>
                <div className='flex w-96 h-60 border-b-4 border-primary bg-card px-6 py-12 mx-2'>
                    <img className=' w-14 h-14 mr-4' src={judge} />
                    <div>
                    <p className='text-xl text-white pb-5 text-left font-[inter]'>Auction Law</p>
                    <p className='text-white text-left font-[libre]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin netus curabitur massa nisl proin cras. </p>
                    </div>
                </div>
                <div className='flex w-96 h-60 border-b-4 border-primary bg-card px-6 py-12 mx-2'>
                    <img className=' w-14 h-14 mr-4' src={balance} />
                    <div>
                    <p className='text-xl text-white pb-5 text-left font-[inter]'>Witness Protection Law</p>
                    <p className='text-white text-left font-[libre]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin netus curabitur massa nisl proin cras. </p>
                    </div>
                </div>
            </div>

            <button className='bg-primary mt-16 text-white text-2xl hover:bg-primary hover:border-transparent py-4 px-16 transition-all  duration-500 ease-in' >View all Practice</button>
        </section>
        
    )
}