import React from "react";
import { ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"



export default function Section1(){
    return(
        <>

<div className="container mx-auto    grid grid-cols-1 md:grid-cols-2">






<div className="pt-10">

    <span className="px-5 py-2 bg-orange-200 rounded-lg">Sale 75% </span>  <br /> <br />


    <h1 className="text-[50px] font-bold  pr-30 text-start">
    An Industrial Take on Streetwear
    </h1>
<br /> <br />

    <p className=" pr-20">
        Anyone can beat you but no one can beat your outfit as long as you wear Dine outfits.
    </p>

<br /> <br />


    <Button>
      <ShoppingCart className="mr-2 h-4 w-4" /> Start Shopping
    </Button>


<br /> <br />

<div className="flex gap-5 flex-wrap">
        <img src="/brand1.png" alt="" />
        <img src="/brand2.png" alt="" />
        <img src="/brand3.png" alt="" />
        <img src="/brand4.png" alt="" />
    </div>


</div>





<div className="mt-10 bg-orange-200 rounded-full">

        <img src="/p5.png" alt="p4"  className="h-70  bg-orange-100 rounded-2xl"/>


</div>




</div>
        
        
        
        </>
    )
}