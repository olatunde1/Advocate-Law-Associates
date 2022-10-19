import React from "react"
import 'boxicons'
import footerlogo from '../../../src/Images/footerlogo.png'
import twitter from '../../Images/Twitter.png'
import facebook from '../../Images/Facebook.png'
import instagram from '../../Images/Instagram.png'
import '../../../src/index.css';
import { FadeIn } from 'react-scroll-motion';

export default function Footer() {
    return(
        <div className="bg-[url('Images/background.png')] w-auto h-auto  ">
            <div className="lg:flex items-center justify-between pl-5">
                <span>
                    <img className=' w-18 h-18 lg:ml-[181px] mt-[123px] mb-[278px] md:ml-5  ' src={footerlogo} alt="logo" />
                   
                </span>
                <div className="contact w-52 items-center pb-9">
                    <h2 className="font-[libre] text-[28px] text-white font-bold pb-[30px]">Contact us</h2>
                    <div className="flex pb-6 locate">
                    <ion-icon name="location"></ion-icon><p className="text-white text-sm leading-8 pl-6">123, Anywhere ST,Any City ST.12345</p>
                    </div>
                    <div className="flex pb-6 ">
                    <ion-icon name="call"></ion-icon><p className="text-white text-sm leading-8 pl-6 ">08000005412</p>
                    </div>
                    <div className="flex">
                    <ion-icon name="mail"></ion-icon><p className="text-white text-sm leading-8 pl-6">Uddypractice@Figma.com</p>
                    </div>
                </div>
                <div className="Office-hour lg:text-center pb-9 ">
                    <h2 className="font-[libre] text-[28px] text-white font-bold pb-[30px]">Office Hours</h2>
                    <div className=" pb-6">
                        <p className="text-primary font-bold leading-8 text-base">Monday to Friday</p>
                        <p className="text-white text-sm">9:00 am to 6:00 pm</p>
                        <p className="text-primary font-bold leading-8 text-base">Saturday</p>
                        <p className="text-white text-sm leading-6">9:00 am to 12 noon</p>
                    </div>
                    <p className="text-primary font-bold text-base">Closed on Sundays</p>
                </div>
                <div className="follow-us pr-8">
                    <h2 className="font-[libre] text-[28px] text-white font-bold pb-[30px]" >Follow Us</h2>
                    <div className="flex items-center pb-8">
                    <img className=' w-6 h-6 mr-4' src={instagram} /><p className="text-white text-sm leading-8 pl-6">Advocate@Instagram</p>
                    </div>
                    <div className="flex items-center pb-8">
                    <img className=' w-6 h-6 mr-4' src={twitter}/><p className="text-white text-sm leading-8 pl-6">@advocatelawassociates</p>
                    </div>
                    <div className="flex items-center">
                    <img className=' w-6 h-6 mr-4 bx-spin' src={facebook}/><p className="text-white text-sm leading-8 pl-6">Advocate law Page</p>
                    </div>
                </div>
            </div>
            <div>
                <p>Copyright@2022.All rights Reserved.</p>
            </div>
            <div>
                <span className='mx-24 md:my-0 bg-primary px-4 py-4 cursor-pointer text-white font-bold'>Free Consultation</span>
            </div>
        </div>
    )
}