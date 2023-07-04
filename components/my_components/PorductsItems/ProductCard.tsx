// import React from 'react'
// import product from '@/public/p21.png'
// import Image from 'next/image'

// interface Text {
//     text:string;
//     price:string;

// }




// export default function ProItem({text,price}:Text) {
//   return (
// <>
   
//     <div className=' hover:scale-110 duration-500 mx-auto '>

//         <Image
//         src={product}
//         alt='product'
//         height={430}
//         width={430}

      
        
//         />
//         <h1 className='font-bold p-2 text-[20px]'> {text}</h1>
//         <h1 className='font-bold  p-2  text-[20px] pt-0'> {price} </h1>
//     </div>

//     </>
//   )
// }































import { Button } from '@/components/ui/button';
import Image, {StaticImageData} from 'next/image';
import Link from 'next/link';


export default function ProductCard(props: {
  title:string;
  price:string;
  img :StaticImageData;
  category:string;
  id: number;

}){

  return(
    <>
    <Link href={`/productsdetail/${props.id}`}>

    <div className='mb-20 hover:scale-105 duration-500'>

    <Image src={props.img} alt='ad' height={300} width={280}  />


      <h1> <b>{props.title}</b> </h1>
      <h1>Price : <b> {props.price}</b></h1>
      <h1> Category : <b>{props.category}</b> </h1>
   <Button className='hover:bg-blue-900 my-2'>Add to Cart</Button>
     
    </div>

    </Link>
    
    </>
  )
}