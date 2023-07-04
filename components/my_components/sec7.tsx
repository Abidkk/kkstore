import React from "react";
import Link from "next/link";
import {Twitter } from "lucide-react"
import {Facebook} from "lucide-react"
import {Linkedin} from "lucide-react"
export default function Section7(){
    return(
        <>
        

<div className="py-20 pt-10 container mx-auto px-20  grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5 bg-gray-100 ">

{/* portion-1 */}

    <div className=" grid col-span-2">

        
        <div> <Link href='/'> <img src="/logo1.png" alt="logo" className='h-20' />   </Link> </div>

        <p className="pr-10 py-10">Small, artisan label that offers a thoughtfully curated collection of high quality everyday essentials made.</p>

        <div className="flex gap-5 pr-5 pt-5">
           <Link href="/">    <div className='bg-gray-200 rounded-md p-3 hover:bg-gray-300 duration-500'>  <Twitter /> </div>  </Link>  

           <Link href="/">  <div className='bg-gray-200 rounded-md p-3 hover:bg-gray-300 duration-500'>    <Facebook/>  </div></Link>   

           <Link href="/">  <div className='bg-gray-200 rounded-md p-3 hover:bg-gray-300 duration-500'>    <Linkedin />  </div></Link>  
         </div>


    </div>

        
     

{/* portion 2 */}


        <div className=""> 
            <h1 className="font-bold text-[20px]">Company</h1>
            <ul>
            <li className="pt-5 hover:font-bold duration-500"><Link href="/">  About  </Link></li>
            <li className="pt-5 hover:font-bold duration-500"><Link href="/">  Terms of Use </Link></li>
            <li className="pt-5 hover:font-bold duration-500"><Link href="/">  Privacy Policy  </Link></li>
            <li className="pt-5 hover:font-bold duration-500"><Link href="/">  How it Works  </Link></li>
            <li className="pt-5 hover:font-bold duration-500"><Link href="/">  Contact Us </Link></li>
            </ul>

        </div>



 {/* portion 3 */}

        <div className=""> 
            <h1 className="font-bold text-[20px] hover:font-bold duration-500">Support</h1>
            <ul>
            <li className="pt-5 hover:font-bold duration-500"><Link href="/">  Support Carrer  </Link></li>
            <li className="pt-5 hover:font-bold duration-500"><Link href="/">  24h Service </Link></li>
            <li className="pt-5 hover:font-bold duration-500"><Link href="/">  Quick Chat </Link></li>
            </ul>

        </div>



 {/* portion 4 */}

        <div className=""> 
            <h1 className="font-bold text-[20px] hover:font-bold duration-500">Contact</h1>
            <ul>
            <li className="pt-5 hover:font-bold duration-500"><Link href="/">  WhatsApp  </Link></li>
            <li className="pt-5 hover:font-bold duration-500"><Link href="/">  Support 24h </Link></li>
        
            </ul>

        </div>








  </div>



<div className="border border-t-black"></div>

  {/* last portion */}

  <div className=" pt-5 pb-5 container mx-auto  flex flex-wrap gap-10 justify-between ">

    <div className="">
        <h1>Copyright © 2023  <b>AbidKK PIAIC B-42</b></h1>

    </div>



    <div className="">
        <h1>Design by. <b>Abid KK</b> </h1>

    </div>


    <div className="">
        <h1>Code by. <b>Abid KK</b> </h1>

    </div>

  </div>
        
        
        </>
    )
}