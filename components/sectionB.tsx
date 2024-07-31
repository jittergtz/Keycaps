import React from 'react'
import BentoBox from './BentoBox'
import CalTextEffect from './Cal'
import Image from 'next/image'
import Button from './Button'

function SectionB() {
  return (
    <div className='flex justify-center  bg-gradient-to-b from-[#171717] via-[#0E0E0E] to-[#171717] p-2'>
        <div className='max-w-7xl flex flex-col items-center gap-5  w-full  py-20'>
            <div className='flex gap-3 items-center'>
            <div className='md:w-64 w-28  h-[0.5px] bg-gradient-to-l from-neutral-400 to-black/70'></div>
               <h1 className='text-lg text-neutral-500'>Section</h1>
                <div className='md:w-64 w-28   h-[0.5px] bg-gradient-to-r from-neutral-400 to-black/70'></div>
            </div>
           
          <div className='flex flex-col items-center  w-full mt-6 '>
           <video className='w-full max-w-3xl pointer-events-none border rounded-md p-1 bg-black border-neutral-900'
           src='./images/nature.mp4'
           loop
           autoPlay
           muted
           playsInline
           >
         </video>
         <Image
         src={"/images/stand.png"}
         width={320}
         height={460}
         alt=''
         className='h-[110px] w-[170px] md:w-[320px] md:h-[460px]'/>
         </div>
        
    </div>
    </div>
  )
}

export default SectionB