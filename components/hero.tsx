import React from 'react'
import Button from './Button'
import AnimationHero from './Animation'
import Image from 'next/image'

function Hero() {
  return (
    <div className='min-h-[80vh]   p-5 pt-40 bg-gradient-to-t from-neutral-900 to-[#000000] w-full flex justify-center'>
        


        <div className='max-w-7xl w-full'>
       <div className='absolute'>

        <h1 className='text-[77px] font-semibold leading-tight strokeheadline z-50 sm:text-[130px]  lg:text-[180px] text-transparent '>
        KeyCaps
       </h1>
        <p className='lg:text-[52px] font-sans md:w-96 tracking-wide  text-[32px] lg:text-6xl text-neutral-300/90'>
        Experience the Perfect Typing Symphony
        </p>
        </div>
 

         
        <div className='flex  h-full items-center justify-end gap-4 flex-col'>
            <p className='text-white/70 z-40'>Download the latest version optimized for Macs till now</p>
           <Button/>
        </div>
    
     </div>
     </div>
  )
}

export default Hero