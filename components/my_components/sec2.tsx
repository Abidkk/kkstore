import React from 'react'
import Link from 'next/link'


export default function  Section2(){
    return(
        <>

        <div className='pt-20 container mx-auto'>     
               <h5 className='text-center text-blue-700 font-bold'>PROMOTIONS</h5>
            <h1 className='text-[30px] md:text-[40px] text-center font-bold  pb-10'>Our Promotions Events</h1>





        <div className='grid   grid-cols-1 lg:grid-cols-2  gap-5'>


{/* Rows */}
            <div className='  grid grid-rows-2  h-[450px] gap-5'>


                <div className='bg-gray-200 h-[200px] flex'>

                   <div className='pl-2 md:pl-5'> <h1 className='text-[30px] md:text-[50px] lg:text-[40px]'>GET UP TO 60%</h1> 
                    <p className='text-[20px]'>For the summer season</p></div>
                  <div className=' pt-2'> <img src="/p8.png" alt="pic7"  className=' h-48  '/></div> 
                  
                </div>



                <div className='bg-gray-800   h-[200px] text-center text-white self-center'>

                    <h1 className='pt-5 text-[30px] md:text-[40px] font-bold'>GET 30% Off</h1>
                    <p className='pt-2'>USE PROMO CODE</p>
                    <button className='px-3 py-0 mt-2 bg-gray-600 text-[25px] md:text-[30px] text-gray-300 rounded-lg font-mono'><Link href='/'>KKWEKENDSALE</Link></button>

                </div>
                
                  
          </div>





{/* cols */}
            <div className='  grid grid-cols-1 md:grid-cols-2   gap-5 mb-20 -[450px] '>

                    <div className='bg-orange-100 h-[440px] overflow-hidden  '>
                        <div className='p-5 pb-0'>
                        <p>Flex Push Button Bomber</p>
                        <h1>$225.00$190.00</h1>
                        </div>
                        <img src="/p15.png" alt="" className='pt-2' />
                    </div>


                    <div className='bg-gray-200 h-[440px] overflow-hidden'>
                    <div className='p-5 pb-0'>
                        <p>Flex Push Button Bomber</p>
                        <h1>$225.00$190.00</h1>
                        </div>
                        <img src="/p15.png" alt="" className='pt-2' />
                    </div>


                
                
                
            </div>

</div>








        </div>

        
        
        </>
    )
}