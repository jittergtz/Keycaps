import AnimationHero from '@/components/Animation'
import Footer from '@/components/footer'
import Hero from '@/components/hero'
import Nav from '@/components/nav'
import Section from '@/components/section'
import SectionB from '@/components/sectionB'

import SectionC from '@/components/sectionC'

import React from 'react'

function page() {
  return (
    <main className='min-h-screen w-full bg-black'>
      <Nav/>
      <div className='flex justify-center pt-20 '>
      <AnimationHero/>
   
          
        <Hero/>
       
      </div>


      
      <Section/>

      

      <SectionB/>

      <SectionC/>

  
      <Footer/>

    </main>
  )
}

export default page