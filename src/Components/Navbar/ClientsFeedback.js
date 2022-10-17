import React from "react";
import exclamation from '../../Images/exclamation.png';

export default function ClientsFeedback(){
    return(
       <section className="services bg-services lg:items-center text-center pt-[105px] pb-36 pl-[146px] pr-[102px]">
            <div>
                <h1 className=" pb-[22px] font-[libre] text-[52px]">Our Clients Feedback</h1>
                <p className=" pb-[58px] font-[Poppins] text-2xl">Why you should hire us</p>
            </div>
            <div className="lg:flex ">
                <div className=" text-center items-center w-[376px] h-[455px] bg-white mr-[90px] pr-[74px] pl-[51px] pt-[14px] pb-[29px]">
                    <img className=' w-14 h-14' src={exclamation} />
                    <p className="">Boost your product and service's credibility by adding testimonials from your clients. People love recommendations so feedback from others who've tried it is invaluable.</p>
                    <p>-Hannah Oscar</p>
                </div>
                <div>
                    <img className=' w-14 h-14' src={exclamation} />
                    <p>Boost your product and service's credibility by adding testimonials from your clients. People love recommendations so feedback from others who've tried it is invaluable.</p>
                    <p>-Ehpraim Isaiah</p>
                </div>
                <div>
                    <img className=' w-14 h-14' src={exclamation} />
                    <p>Boost your product and service's credibility by adding testimonials from your clients. People love recommendations so feedback from others who've tried it is invaluable.</p>
                    <p>-Glory Eromosele</p>
                </div>
              
            </div>
       </section>
    )
}