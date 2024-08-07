import Image from 'next/image'
import React from 'react'
import { RxKeyboard } from 'react-icons/rx'
import River from './rive/animate'


function BentoBox({Headline, Description, image}: {
    Headline: string,
    Description: string,
    image: string,
        }) {
  return (
    <div className='max-w-xl p-5 rounded-3xl bg-black/90 border border-neutral-800  shadow-[0_0px_10px_3px_rgb(20,20,20)]  flex flex-col  justify-between gap-3'>
       <River/>
       <div className=' flex flex-col justify-center'>
        <h1 className='text-2xl mt-3 text-neutral-50 px-2 flex gap-1 items-center'>{Headline}</h1>
        <p className='text-neutral-400 px-2'>{Description}</p>
      </div>
    </div>
  )
}

export default BentoBox