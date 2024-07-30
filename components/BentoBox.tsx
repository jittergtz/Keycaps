import Image from 'next/image'
import React from 'react'

function BentoBox({Headline, Description, image}: {
    Headline: string,
    Description: string,
    image: string,
        }) {
  return (
    <div className='w-full max-w-3xl min-h-72 rounded-3xl bg-black border border-neutral-800 p-5 flex flex-col md:flex-row justify-between gap-3'>
        <div className='md:w-1/2  py-2 flex flex-col justify-between'>
      <h1 className='text-2xl font-medium text-neutral-300'>{Headline}</h1>
      <p className='text-neutral-400'>{Description}</p>
      </div>
      <Image
      src={image}
      width={800}
      height={451}
      alt='cover image'
      className='rounded-2xl'/>
     

     </div>
  )
}

export default BentoBox