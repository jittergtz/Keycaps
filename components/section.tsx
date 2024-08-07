import React from 'react'
import BentoBox from './BentoBox'
import River from './rive/animate'
import WideBox from './wideBento'


function Section() {
  return (
    <div className='flex justify-center  bg-gradient-to-b from-neutral-900 to-black'>
        <div className='max-w-7xl  flex flex-col items-center gap-5  w-full  py-20'>
            <div className='flex gap-3 items-center'>
                <div className='md:w-64 w-28  h-[0.5px] bg-gradient-to-l from-white to-black/70'></div>
                Section
                <div className='md:w-64 w-28   h-[0.5px] bg-gradient-to-r from-white to-black/70'></div>
            </div>

       
       
         
        <WideBox 
        Headline={'Sound '}
         Description={'Tired of typing the same thing? Create a snippet and insert it by simply typing its keyword.'} 
         image={'/images/blueglass.jpg'}/>

        <div className='flex md:flex-row  flex-col items-center gap-3'>

     

          <BentoBox
           Headline={'Shortcuts'}
           Description={'Tired of typing the same thing? Create a snippet and insert it by simply typing its keyword.'}
           image={'/images/singapur.webp'}/>

         <BentoBox
           Headline={'Bento Heading 2'}
           Description={'Tired of typing the same thing? Create a snippet and insert it by simply typing its keyword.'}
           image={'/images/singapur.webp'}/>

       </div>
 
        
       
        </div>   
    </div>
  )
}

export default Section