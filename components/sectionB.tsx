import React from 'react'
import BentoBox from './BentoBox'
import CalTextEffect from './Cal'
import Image from 'next/image'
import Button from './Button'

function SectionB() {
  return (
    <div className='flex justify-center  bg-gradient-to-b from-[#000000] via-[#0E0E0E] to-[#171717] p-2'>
        <div className='max-w-7xl flex flex-col items-center gap-5  w-full  py-20'>
            <div className='flex gap-3  items-center'>
            <div className='md:w-64 w-28  h-[1px] bg-gradient-to-l from-neutral-400 to-black/70'></div>
               <h1 className='text-lg text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-700'>Explore</h1>
                <div className='md:w-72 w-28   h-[1px] bg-gradient-to-r from-neutral-400 to-black/70'></div>
            </div>
           
          <div className='flex flex-col  items-center  w-full mt-6 '>
           <video className='w-full object-cover overflow-hidden  sm:h-[400px]  md:h-[490px] max-w-4xl pointer-events-none border rounded-lg p-1.5 md:p-3 bg-black border-neutral-900'
           loop
           autoPlay
           muted
           playsInline
           >
            <source type='video/mp4'  src='/images/demo.mp4' />
         </video>
         <Image
         src={"/images/stand.png"}
         width={320}
         height={460}
         alt=''
         className='h-[80px] pointer-events-none w-[130px] sm:w-[220px] sm:h-[120px] md:w-[300px] md:h-[170px]'/>
         </div>

         <div className='mt-10 w-full max-w-4xl flex flex-col gap-5 sm:gap-0 sm:flex-row sm:justify-between'>
            <div className='max-w-64 w-full'>
                <h1 className='text-semibold text-xl text-neutral-200'>
                    Its time for more
                    </h1>
                <p className='text-neutral-500 text-sm sm:text-md'>
                    more focus more keys more relaxation give your ears the expoerience they want
                    while devolp there is not tomorrow start today.
                </p>
          </div>

          <div className='max-w-64 w-full'>
                <h1 className='text-semibold text-xl text-neutral-200'>
                    Its time for more
                    </h1>
                <p className='text-neutral-500 text-sm sm:text-md'>
                    more focus more keys more relaxation give your ears the expoerience they want
                    while devolp there is not tomorrow start today.
                </p>
          </div>
         </div>
        
    </div>
    </div>
  )
}

export default SectionB