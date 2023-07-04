"use client"


import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {Menu} from 'lucide-react'

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <nav className="p-4 bg-white shadow md:flex md:items-center md:justify-between relative z-10  ">
        <div className="flex justify-between  items-center  ">
          <span className="text-3xl font-[Poppins] cursor-pointer ">
          <Link href='/'>
          <img src="/logo1.png" alt="logo" className='h-12 pl-10' />
          </Link>
     
          </span>

          <span className="text-3xl cursor-pointer mx-2 md:hidden block ">

        <Menu 
    onClick={handleMenuClick}
    className="h-10"
    src="menu.png"
    alt=""
    > 
    
    </Menu>

          </span>
        </div>

        <ul
          className={`md:flex md:items-center z-20 md:static absolute bg-white w-full left-0 md:w-auto md:py-0 py-0 md:pl-0 pl-5 mr-20  ${
            menuOpen ? "opacity-100 top-[100px]" : "opacity-100 top-[-400px] "
          } transition-all ease-in duration-500 overflow-hidden text-center   `}
        >





<div className=" pt-10 mx-10 md:hidden">
  
<div className="p-3 bg-gray-200 rounded-full w-[50px] h-[50px] hover:scale-110 duration-500">
<img src="/shopping-cart.png" alt=""  className="h-6"/>
 </div>

   
     </div>


          <li className="mx-7 my-2 md:my-0">
          <Link href={"category/male"} className="text-xl hover:text-orange-500 duration-500">
             Male
            </Link>
          </li>
          <li className="mx-7 my-2 md:my-0">
            <Link
              href={"category/female"}
              className="text-xl hover:text-orange-500 duration-500"
            >
           Female
            </Link>
          </li>
          <li className="mx-7 my-2 md:my-0">
            <Link  href={"category/kids"}
              className="text-xl hover:text-orange-500 duration-500"
            >
             Kids
            </Link>
          </li>
          <li className="mx-7 my-2 md:my-0">
            <Link
              href="/allProducts"
              className="text-xl hover:text-orange-500 duration-500"
            >
           All Products
            </Link>
          </li>

          <div className='my-2  border rounded-md flex ml-10 -mx-72 mr-20  '>
<img src="/search.png" alt="search"  className='h-5 mx-0'/> 
<input type="text" placeholder='what are you looking for ' className=' ml-2 pr-10 text-[15px] w-[100%] ' />
</div>




<span className='   mx-10 p-2  bg-gray-200 rounded-full ml-10  hover:scale-110 duration-500 hidden md:block my-3 '>
<Link href="">
<img src="/shopping-cart.png" alt=""  className='h-6'/>
</Link>
    </span>


        </ul>



      </nav>
    </>
  );
}








// export default function NavBar(){


//   return(
//     <>
    
//     <div  className="flex  justify-between items-center py-6 px-8 bg-gray-100">
//       <Link href={"/"} >
//       {/* <Image  src={cart} alt="logo" className="w-20 rounded-full " />  */}
//       </Link>
//            <ul className="flex gap-x-10">
//            <li className="text-lg hover:text-blue-500">
//           < Link href={"/"} >    Home
//             </Link></li> 
//           <li className="text-lg hover:text-blue-500">
//           < Link href={"category/female"} >    Female
//             </Link></li> 
//        <li className="text-lg  hover:text-blue-500"> < Link href={"category/male"} >Male</Link></li>
//         <li className="text-lg   hover:text-blue-500">< Link href={"category/kids"} >Kids</Link></li>
//         <li className="text-lg  hover:text-blue-500">< Link href={"/products"} >All Products</Link></li>
        
//         <div className="flex gap-1 border border-black bg-white px-2 rounded-lg h-[30px]">
//           {/* <SearchIcon size={20} className=" pt-1" /> */}
//           <input type="text" placeholder="What are you Looking for" />
//         </div>
//          {/* <div className="h-10 w-10 rounded-full bg-gray-300 flex justify-center items-center">  */}
//         <div className="h-8 w-8 flex justify-center items-center bg-gray-300 rounded-full relative
//          hover:scale-105 duration-300 ease-in">
//             {/* <ShoppingCart />  */}
//              <span className="w-4 h-4 rounded-full bg-red-500 text-white text-sm flex justify-center
//            items-center absolute bottom-5 left-6" > 
//            0
//           </span> 
//           </div>
//       </ul>
//       </div>

    
//     </>
//   )
// }