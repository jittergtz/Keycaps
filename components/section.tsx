import React from 'react'
import BentoBox from './BentoBox'

function Section() {
  return (
    <div className='flex justify-center  bg-gradient-to-b from-neutral-800 to-black'>
        <div className='max-w-7xl  flex flex-col items-center gap-5  w-full  py-20'>
            <div className='flex gap-3 items-center'>
                <div className='md:w-64 w-28  h-[0.5px] bg-gradient-to-l from-white to-black/70'></div>
                Section
                <div className='md:w-64 w-28   h-[0.5px] bg-gradient-to-r from-white to-black/70'></div>
            </div>


          <BentoBox
           Headline={'Bento Heading'}
           Description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam cumque voluptates ipsa vero dicta dolore incidunt. Sequi possimus hic magni, molestiae necessitatibus optio voluptatibus provident totam minus fugiat dolores modi'}
           image={'/images/red.jpg'}/>

         <BentoBox
           Headline={'Bento Heading 2'}
           Description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam cumque voluptates ipsa vero dicta dolore incidunt. Sequi possimus hic magni, molestiae necessitatibus optio voluptatibus provident totam minus fugiat dolores modi'}
           image={'/images/singapur.webp'}/>
       
       
        </div>   
    </div>
  )
}

export default Section