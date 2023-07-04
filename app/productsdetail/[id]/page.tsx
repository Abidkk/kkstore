// import AddToCart from "@/components/AddToCart";
// import Quantity from "@/components/Quantity";
import { Products } from "@/components/my_components/utils/mock";
import { StaticImageData } from "next/image";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import Overview from "@/components/my_components/overview";


const getProductsDetail = (id: number | string) => {
  return Products.filter((product) => product.id == id);
};

 const sizes = ["xs", "sm", "md", "lg", "xl"];
export default function Page({ params }: { params: { id: string } }) {
  const result = getProductsDetail(params.id);


return(
<>

<div className="mt-10">
      {result.map((product)   => (



<div className="main mx-10 ">



<div  className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-8 gap-5">

  <div className="">
<Image className="mx-auto"
src={product.image}
alt="p1"
height={100}
/>
  </div>


  <div className="col-span-4">
  <Image
src={product.image}
alt="p1"
height={1000}
/>
  </div>


  <div className=" col-span-3 p-10 py-1 pt-20">
<h1 className="text-4xl font-bold py-1 ">{product.name}</h1>
<h1 className="font-bold  text-2xl opacity-50 pb-5">KK Collection</h1>
<h1 className=" py-1  text-2xl">Category: {product.category}</h1>







<div className=" flex gap-2">
                {sizes.map((item, i) => {
                  return (
                    <div
                      key={i}
                      className=" h-10 w-10 p-1 my-2 text-gray-500  rounded-full  text-center  hover:bg-gray-300   hover:scale-105 duration-700"
                    >
                      <span className="text-[20px] font-semibold text-center ">
                        {item}
                      </span>
                    </div>
                  );
                })}
              </div>
              
              
              <h1 className="font-bold  text-3xl py-10 font-mono"> Price : {product.price}</h1>
             <Button className="rounded-none font-sans"> <ShoppingCart  className='mx-2' />    Add to Card</Button>  

            



  </div>



</div>









</div>











  

))}







</div>


<div className="  my-10">

<Overview/>
</div>


</>

)

}








