import React from 'react'
import Button from './Button'
import AnimationHero from './Animation'

function Hero() {
  return (
    <div className='min-h-[80vh] pt-40'>
        <div className='h-[30rem] z-0 w-40 -rotate-45 rounded-full absolute bg-white/10 top-0 left-0 blur-3xl'></div>
        <h1 className='text-[82px]  leading-tight z-50 sm:text-[130px] lg:text-[180px] text-transparent bg-clip-text bg-gradient-to-r from-neutral-500 to-neutral-700 '>
            Keyboard
        </h1>
        <p className='text-[62px] leading-tight lg:text-7xl text-neutral-300'>
        Asmr
        </p>


        <div className='flex justify-center pt-40 items-end'>
           <Button/>
        </div>
     </div>
  )
}

export default Hero