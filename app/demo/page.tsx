import React from 'react'
import Link from 'next/link';

import { FaLinkedin, FaFacebook, FaInstagram, FaTwitter  } from 'react-icons/fa';
import Image from 'next/image';
import logo from '@/public/logo1.png'

export default function page() {
  return (
    
  
    // <h1>This is the demo page</h1>
//   <>






//     <div className="container px-5 py-24 mx-auto flex md:items-start text-start lg:items-start md:flex-row 
//       md:flex-nowrap flex-wrap flex-col">
//         <div className="space-y-6 w-80 flex-shrink-0 md:mx-0 mx-auto text-start md:text-left">
//            <Link href={"/"} className="flex title-font font-medium items-start md:justify-start text-grey-900 ">
//             <Image  src={logo} alt="logo" width={150} height={100}/> 
//           </Link>
//           <p className="mt-2">Small, artisan label that offers a thoughtfully curated
//            collection of high quality everyday essentials made.</p>

//       <div className="flex space-x-4">   
  
//        < Link href="https://www.facebook.com/"
//         className=" w-10 h-10 flex justify-center items-center bg-gray-100  border-gray-50"  > 
//                 <FontAwesomeIcon icon={faFacebookF}  />

//                 {/* <FaFacebook/> */}
//       </Link> 
//          < Link href="https://www.twitter.com/" className=" w-10 h-10  flex justify-center items-center
//           bg-gray-100 border border-gray-50 " > 
          
//           <FontAwesomeIcon icon={faTwitter} />
//           {/* <FaTwitter/> */}
//           </Link>
//            < Link href="https://www.instagram.com/ " 
//            className="w-10 h-10 flex justify-center items-center bg-gray-100  border-gray-50 " >
//               <FontAwesomeIcon icon={faInstagram}  />
//               {/* <FaInstagram/> */}
//       </Link>
//       </div>








//          </div>
//         <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt:0 mt-10 md:text-left text-start mx-auto">
//           <div className="lg:w-1/4 md:w-1/2 w-full px-4">
//             <h2 className="title-font tracking-widest mb-3 text-xl font-bold">Company</h2>
//             <nav className="list-none mb-10 space-y-4">
//                 <li>
//                   <Link href="/About" className="text-gray-600 hover:text-gray-800">About</Link>
              
//               </li>
//               <li>
//                 <Link href="/Term" className="text-gray-600 hover:text-gray-800">Terms of use</Link>
//               </li>
//               <li>
//                  <Link href="/Privacy" className="text-gray-600 hover:text-gray-800">Privacy Policy</Link>
//               </li>
//               <li>
//                 <Link href="/Work" className="text-gray-600 hover:text-gray-800">How to Work</Link>
//               </li>
//               <li>
//                 <Link href="/Contact" className="text-gray-600 hover:text-gray-800">Contact Us</Link>
//               </li>
//               </nav>       
//             </div>
//             <div className="lg:w-1/4 md:w-1/2 w-full px-4">
//             <h2 className="title-font tracking-widest mb-3 text-xl font-bold">Support</h2>
//             <nav className="list-none mb-10 space-y-4">
//               <li>
//                 <Link href="/Support" className="text-gray-600 hover:text-gray-800">Support Carrer</Link>
//               </li>
//               <li>
//                 <Link href="/Service" className="text-gray-600 hover:text-gray-800">24h Service</Link>
//               </li>
//               <li>
//                 <Link href="/Quickchat" className="text-black hover:text-gray-800">Quick Chat</Link>
//                  </li>
//               </nav>
//               </div>
//               <div className="lg:w-1/4 md:w-1/2 w-full px-4">
//             <h2 className="title-font tracking-widest mb-3 text-xl font-bold">Contact</h2>
//             <nav className="list-none mb-10 space-y-4">
//               <li>
//                 <Link href="/Whatapp" className="text-gray-600 hover:text-gray-800">Whatapp</Link>
//               </li>
//               <li>
//                 <Link href="/Support" className="text-gray-600 hover:text-gray-800">Support 24h</Link>
//               </li>
//               </nav>
//               </div>
//             </div>
//             </div>     

            
//       <div className=" flex flex-col items-center mb-8">


// <div className="flex items-center mt-2 ">
//    <div className="h-px w-20  bg-gray-300 flex-shrink"></div>
//    <span className="text-gray-500 ml-2">Copyright &copy; 2023 clickShop</span>
//    <div className="h-px bg-gray-500 flex-grow">  </div>
//  </div>


//  </div>



//  </>





<>



<div className="container px-5 py-24 mx-auto flex md:items-start text-start lg:items-start md:flex-row 
md:flex-nowrap flex-wrap flex-col">
  <div className="space-y-6 w-64 flex-shrink-0 md:mx-0 mx-auto text-start md:text-left">
     <Link href={"/"} className="flex title-font font-medium items-start md:justify-start text-grey-900 ">
      <Image  src={logo} alt="logo" width={150} height={100}/> 
    </Link>
    
    <p className="mt-2">Small, artisan label that offers a thoughtfully curated
     collection of high quality everyday essentials made.</p>
   
   <div className="flex space-x-4">   
 
  <Link href="https://www.facebook.com/"
   className=" w-10 h-10 flex justify-center items-center bg-gray-100  border-gray-50"  > 

           {/* <FontAwesomeIcon icon={faFacebookF}  /> */}

 </Link> 
    < Link href="https://www.twitter.com/" className=" w-10 h-10  flex justify-center items-center
     bg-gray-100 border border-gray-50 " >

       {/* <FontAwesomeIcon icon={faTwitter} /> */}

     </Link>
      < Link href="https://www.instagram.com/ " 
      className="w-10 h-10 flex justify-center items-center bg-gray-100  border-gray-50 " >
         {/* <FontAwesomeIcon icon={faInstagram}  /> */}

 </Link>
 </div>
 </div>
   
  <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt:0 mt-10 md:text-left text-start">
    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
      <h2 className="title-font tracking-widest mb-3 text-xl font-bold">Company</h2>
      <nav className="list-none mb-10 space-y-4">
          <li>
            <Link href="/About" className="text-gray-600 hover:text-gray-800">About</Link>
        
        </li>
        <li>
          <Link href="/Term" className="text-gray-600 hover:text-gray-800">Terms of use</Link>
        </li>
        <li>
           <Link href="/Privacy" className="text-gray-600 hover:text-gray-800">Privacy Policy</Link>
        </li>
        <li>
          <Link href="/Work" className="text-gray-600 hover:text-gray-800">How to Work</Link>
        </li>
        <li>
          <Link href="/Contact" className="text-gray-600 hover:text-gray-800">Contact Us</Link>
        </li>
        </nav>       
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
      <h2 className="title-font tracking-widest mb-3 text-xl font-bold">Support</h2>
      <nav className="list-none mb-10 space-y-4">
        <li>
          <Link href="/Support" className="text-gray-600 hover:text-gray-800">Support Carrer</Link>
        </li>
        <li>
          <Link href="/Service" className="text-gray-600 hover:text-gray-800">24h Service</Link>
        </li>
        <li>
          <Link href="/Quickchat" className="text-black hover:text-gray-800">Quick Chat</Link>
           </li>
        </nav>
        </div>
        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
      <h2 className="title-font tracking-widest mb-3 text-xl font-bold">Contact</h2>
      <nav className="list-none mb-10 space-y-4">
        <li>
          <Link href="/Whatapp" className="text-gray-600 hover:text-gray-800">Whatapp</Link>
        </li>
        <li>
          <Link href="/Support" className="text-gray-600 hover:text-gray-800">Support 24h</Link>
        </li>
        </nav>
        </div>
      </div>
  


 </div>




 {/* <div className=" flex flex-col items-center mb-8">
  
  <div className="flex items-center mt-2 ">
     <div className="h-px w-20  bg-gray-300 flex-shrink"></div>
     <span className="text-gray-500 ml-2">Copyright &copy; 2023 clickShop</span>
     <div className="h-px bg-gray-500 flex-grow">  </div>
   </div>
   
  </div>
 */}


 



{/* last portion */}

 {/* this div is for line */}
<div className="border border-t-black"></div>

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
