"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import { Inter, Jost } from "next/font/google";
import { FaArrowTurnDown } from "react-icons/fa6";

function Page() {
  const [isRecived, setIsRecived] = useState(false)


  return (
    <div className='min-h-screen w-full'>
      
        <Image
        src={"/images/red.jpg"}
        alt='desktop demo'
        width={1920}
        height={1080}
        className='w-full z-o'/>



<div className='absolute  top-5 right-40'>
 <main className='h-72 rounded-2xl border-[2px] border-dashed overflow-hidden  border-neutral-700 w-72 bg-neutral-900 p-2  shadow-[inset_0_0px_27px_10px_rgb(30,30,30)] '>
  
  <div className='w-full h-10 border-[1px] mt-5 rounded-lg border-neutral-600 flex items-center p-2'>
    <h3 className='text-neutral-300 '>Quiet am</h3>
  </div>

  <section className='h-20 w-full border mt-2 rounded-lg border-dashed border-neutral-500 bg-neutral-800'>
   
  </section>
  
  <div className='h-4 w-full border rounded-xl mt-5 overflow-hidden flex'>
  <div className='h-4 w-40 bg-neutral-50 '></div>
  </div>

  <div className='w-full flex justify-between mt-7'>
  <button className='p-2 w-28 bg-neutral-700 rounded-lg border text-neutral-500 border-neutral-700 shadow-[inset_0_0px_27px_10px_rgb(30,30,30)]'>
      Cards
  </button>
  <button className='p-2 w-28 bg-red-600 rounded-lg border text-red-300 border-red-900 shadow-[inset_0_0px_27px_10px_rgb(90,30,30)]'>
      End
  </button>
</div>

 

 </main>
</div>

<div className='mt-10 relative'>


<Image
        src={"/images/aidemo.png"}
        alt='desktop demo'
        width={1920}
        height={1080}
        className='w-full z-o'/>



<div className='absolute top-48 left-1/2 -translate-x-1/2 '>
 
 
 <section className='font-sans w-[600px]  overflow-hidden border border-neutral-400/70 rounded-xl backdrop-blur-[30px] bg-black/30 '>

  <div className='flex px-4 py-4 min-h-12 border-b border-neutral-600' >
  <input type="text" placeholder='What do you want to write?' className=' bg-transparent   placeholder:text-neutral-300   outline-none w-full text-lg' />
  <button onClick={() => isRecived ? setIsRecived(false): setIsRecived(true)} ><FaArrowTurnDown className='rotate-90 hover:text-emerald-200 text-neutral-200' size={15}/></button>
  </div>





{isRecived ? (
<div>
        <div className='h-36 overflow-x-hidden overflow-y-scroll p-2 w-full '>
         <p className='text-neutral-300'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam voluptas quidem deleniti quod asperiores autem nihil eos reprehenderit. Omnis, odio. Et id vero voluptas molestiae aliquam, perspiciatis adipisci praesentium delectus.</p>
        </div>
        <div className='p-2 flex justify-end gap-2'>
        <button className='p-2 w-40 bg-neutral-800 hover:bg-neutral-900 text-neutral-400 border border-neutral-700 rounded-xl'>Rewrite</button>
        <button className='p-2 w-40 bg-neutral-800  hover:bg-neutral-900 text-emerald-200 border border-neutral-700 rounded-xl'>Take</button>
    </div>
 </div>
 ):(
    null
 )}

 </section>




</div>
</div>

</div>


  )
}

export default Page