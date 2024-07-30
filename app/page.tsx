import AnimationHero from '@/components/Animation'
import Footer from '@/components/footer'
import Hero from '@/components/hero'
import Nav from '@/components/nav'
import Section from '@/components/section'
import React from 'react'

function page() {
  return (
    <main className='min-h-screen w-full bg-gradient-to-t from-neutral-800 to-black'>
      <Nav/>
      <div className='flex justify-center pt-20'>
      <AnimationHero/>
        <div className='max-w-7xl w-full  p-5  '>
          <Hero/>
        </div>
      </div>
      
      <Section/>

  
      <Footer/>

    </main>
  )
}

export default page