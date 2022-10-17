import React from "react"
import 'boxicons'
import logo2 from '../../../src/logo2.png';

export default function Footer() {
    return(
        <div className="bg-[url('Images/background.png')] w-auto h-auto  ">
            <div>
                <span className=' flex items-center  text-2xl font-[Poppins] cursor-pointer hover:text-cyan-900' >
                    <img className=' w-18 h-18' src={logo2} alt="logo" />
                    <div className='text-center pt-4 px-4 font-bold'>
                        <span className=' text-white pt-4'>Advocate <br /> <span className='text-primary'>Law Associates</span> </span>
                    </div>
                </span>
                <div>
                    <h2>Contact us</h2>
                    <p><ion-icon name="location-outline"></ion-icon>123, Anywhwere ST,Any City ST.12345</p>
                    <p><ion-icon name="call-outline"></ion-icon>08000005412</p>
                    <p><ion-icon name="mail-outline">Uddypractice@Figma.com</ion-icon></p>
                </div>
                <div>
                    <h2>Office Hours</h2>
                    <p>Monday to Friday</p>
                    <p>9:00 am to 6:00 pm</p>
                    <p>Saturday</p>
                    <p>9:00 am to 12 noon</p>
                    <p>Closed on Sundays</p>
                </div>
                <div>
                    <h2>Follow Us</h2>
                    <p><ion-icon name="logo-instagram"></ion-icon>Advocate@Instagram</p>
                    <p><ion-icon name="logo-twitter"></ion-icon>@advocatelawassociates</p>
                    <p><i class='bx bxl-facebook-square bx-tada'></i>Advocate law Page</p>
                </div>
            </div>
            <div></div>
        </div>
    )
}