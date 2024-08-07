import Image from 'next/image'
import React from 'react'
import { RxKeyboard } from 'react-icons/rx'
import River from './rive/animate'


function WideBox({Headline, Description, image}: {
    Headline: string,
    Description: string,
    image: string,
        }) {
  return (
    <div className='max-w-6xl relative w-full h-72 overflow-hidden rounded-3xl bg-black/90 border border-neutral-800  shadow-[0_0px_10px_3px_rgb(20,20,20)]  flex   justify-between gap-3'>
      
       
    <div className='md:w-1/2 z-50 p-5 md:p-10 flex flex-col gap-3 justify-center'>
      <h1 className='text-2xl md:text-3xl font-medium text-neutral-300'>{Headline}</h1>
      <p className='text-neutral-400'>{Description}</p>
    </div>

      <Image
      src={image}
      width={566}
      height={2448}
      alt='cover image'
      quality={100}
      className=' absolute pointer-events-none right-0 z-0 h-full '/>
      
     


    </div>
  )
}

export default WideBox