import React from "react";

import { Button } from "../ui/button";


export default function Section5(){
    return(
        <>
    

{/* Main Portion */}
        <div className="py-20 pt-10 container mx-auto    grid grid-cols-1 md:grid-cols-2 gap-10">





{/* Left Portion */}

{/* 
       <div className='  grid grid-cols-2 gap-5  '>
      

       <div className="mx-5 ">
            <h1 className="font-bold pb-2">Using Good Quality Materials</h1>
            <p>Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
        </div>


        <div className="mx-5 ">
            <h1 className="font-bold pb-2">Using Good Quality Materials</h1>
            <p>Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
        </div>


 



       
        <div className="mx-5 ">
            <h1 className="font-bold pb-2">Using Good Quality Materials</h1>
            <p>Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
        </div>



        <div className="mx-5">
            <h1 className="font-bold pb-2">Using Good Quality Materials</h1>
            <p>Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
        </div>


       
        </div> */}

 

      


<div className='relative'>
  <div className="absolute inset-0 flex items-center justify-center">
    <h1 className="text-8xl font-bold text-gray-100  bg-opacity-70  mx-5 p-4">
    Different from <br /> others
    </h1>
  </div>


  <div className="relative grid grid-cols-2 gap-5">
    <div className="mx-5">
      <h1 className="font-bold pb-2 py-4 ">01.Using Good Quality Materials</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
 



    <div className="mx-5 py-3">
      <h1 className="font-bold pb-2">02.Using Good Quality Materials</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>

   


    <div className="mx-5  ">
      <h1 className="font-bold pb-2">03.Using Good Quality Materials</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>

    <div className="mx-5 ">
      <h1 className="font-bold pb-2 ">04.Using Good Quality Materials</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
  </div>
</div>














{/* RIGHT PORTION */}
            <div className=" grid grid-cols-1 md:grid-cols-2 gap-5 ">

                <div className="">
                    <img src="/p8.png" alt="pic" className="bg-gray-200"/>
                </div>


                <div>
                    <p>This piece is ethically crafted in our small family-owned workshop in Peru with unmatched attention to detail and care. 
                        The Natural color is the actual natural color of the fiber, undyed and 100% traceable.</p>

                    <div className="mt-5">
                    <Button className="rounded-none">see all products</Button>
                    </div>
                </div>

            </div>
            








        </div>
        
        
        </>
    )
}