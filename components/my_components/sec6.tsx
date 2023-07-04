import React from "react"
import { Button } from "../ui/button"

export default function Section6(){
    return(
        
<>
<div className='relative'>
{/* Thiis section is for bg text */}
    <div className="absolute inset-0 flex items-center justify-center">
        <h1 className=" font-bold text-gray-100  bg-opacity-70  mx-5 p-4 pt-0 text-[80px] md:text-9xl">
        Newsletter
        </h1>
    </div>

{/* heading */}
    <div className="py-20 pt-10 container mx-auto  text-center relative ">

        <h1 className="text-[40px] font-bold">Subscribe Our Newsletter</h1>
        <p className="">Get the latest information and promo offers directly</p>

{/* input box */}
        <div className="py-5 pt-8 ">
            <input type="text" className="border border-black mx-5 px-5 py-2" />
            <Button className="rounded-none">Get Started</Button>
        </div>

   </div>

</div>
 </>
    )
}