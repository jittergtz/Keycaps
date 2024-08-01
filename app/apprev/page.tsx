import Image from 'next/image'
import React from 'react'

function page() {
  return (
    <div className='h-screen w-full'>
      
        <Image
        src={"/images/red.jpg"}
        alt='desktop demo'
        width={1920}
        height={1080}
        className='w-full z-o'/>



<div className='absolute top-5 right-40'>
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

</div>


  )
}

export default page