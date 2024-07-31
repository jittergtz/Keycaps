import React from 'react'
import BentoBox from './BentoBox'
import CalTextEffect from './Cal'
import Image from 'next/image'
import Button from './Button'

function SectionC() {
  return (
    <div className='flex justify-center  bg-gradient-to-b from-[#171717] to-[#0E0E0E]'>
        <div className='max-w-7xl flex flex-col items-center gap-5  w-full  py-20'>
            <div className='flex gap-3 items-center'>

            </div>

      
          <Image
          src={"/images/stamped-2.svg"}
          alt='text'
          width={600}
          height={300}
          className='p-4 md:w-[700px]'
          quality={100}/>
          
   
          <Button/>
        </div>   
    </div>
  )
}

export default SectionC