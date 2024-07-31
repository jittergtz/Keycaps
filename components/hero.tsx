import React from 'react'
import Button from './Button'
import AnimationHero from './Animation'

function Hero() {
  return (
    <div className='min-h-[80vh]  p-5 pt-40 bg-gradient-to-t from-neutral-800 to-black w-full flex justify-center'>
        <div className='max-w-7xl w-full'>
       <div className='absolute'>
        <div className='h-[30rem] z-0 w-40 -rotate-45 rounded-full absolute bg-white/10 top-0 left-0 blur-3xl'></div>
        <h1 className='text-[77px] font-semibold leading-tight strokeheadline z-50 sm:text-[130px] lg:text-[180px] text-[#141415] '>
        Keyboard
       </h1>
        <p className='text-[62px] leading-tight lg:text-7xl text-neutral-300'>
        Asmr
        </p>
        </div>
 

         
        <div className='flex  h-full items-center justify-end gap-4 flex-col'>
            <p className='text-white/70 z-50'>Download the latest version optimized for Macs till now</p>
           <Button/>
        </div>
    
     </div>
     </div>
  )
}

export default Hero