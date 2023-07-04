import React from "react"



import  Section1 from "@/components/my_components/sec1"
import  Section2 from "@/components/my_components/sec2"

import Section4 from "@/components/my_components/sec4"
import Section5 from "@/components/my_components/sec5"
import Section6 from "@/components/my_components/sec6"

import ProductList from '@/components/my_components/PorductsItems/ProductList'
export default function Home(){

  return(
    <>
    <div className="">
<Section1/>


<Section2/>
<h1 className="py-4 text-center text-4xl font-bold my-4 bg-gray-100 mx-20">Avail Special Discount Today</h1>

<div className="mx-auto pl-9">
  
  <ProductList />
</div>


<Section4/>


<Section5 />


<Section6/>

</div>

    </>
  )
}