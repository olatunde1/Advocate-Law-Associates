import React from "react";
import exclamation from '../../Images/exclamation.png';
import exclamation2 from '../../Images/exclamtion2.png';

export default function ClientsFeedback(){
    return(
       <section className="services bg-services lg:items-center text-center pt-[105px] pb-36 pl-[146px] pr-[102px]">
            <div>
                <h1 className=" pb-[22px] font-[libre] text-[52px]">Our Clients Feedback</h1>
                <p className=" pb-[58px] font-[Poppins] text-2xl">Why you should hire us</p>
            </div>
            <div className="lg:flex ">
                <div className=" items-center w-[376px] h-[455px] bg-white mr-[46px] border-b-4 border-primary">
                    <img className=' w-7 h-7 mt-[44px] mb-8 ml-[150px] mr-[192px] ' src={exclamation2} />
                    <p className=" pl-[51px] pr-[74px] font-[libre] text-xl">Boost your product and service's credibility by adding testimonials from your clients. People love recommendations so feedback from others who've tried it is invaluable.</p>
                    <p className="pt-[73px] font-[poor story]">-Hannah Oscar</p>
                </div>
                <div className=" items-center w-[376px] h-[455px] bg-white mr-[46px] border-b-4 border-primary">
                    <img className=' w-7 h-7 mt-[44px] mb-8 ml-[150px] mr-[192px] ' src={exclamation2} />
                    <p className=" pl-[51px] pr-[74px] font-[libre] text-xl">Boost your product and service's credibility by adding testimonials from your clients. People love recommendations so feedback from others who've tried it is invaluable.</p>
                    <p className="pt-[73px] font-[poor story]">-Ehpraim Isaiah</p>
                </div>
                <div className=" items-center w-[376px] h-[455px] bg-white border-b-4 border-primary">
                    <img className=' w-7 h-7 mt-[44px] mb-8 ml-[150px] mr-[192px] ' src={exclamation2} />
                    <p className=" pl-[51px] pr-[74px] font-[libre] text-xl">Boost your product and service's credibility by adding testimonials from your clients. People love recommendations so feedback from others who've tried it is invaluable.</p>
                    <p className="pt-[73px] font-[poor story]">-Glory Eromosele</p>
                </div>
              
            </div>
       </section>
    )
}