import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Nav() {
  return (
    <div className='fixed z-50 top-0 w-full flex justify-center border-b border-neutral-900 bg-black/10 backdrop-blur-lg '>
       <div className='w-full max-w-7xl  h-16  flex justify-between items-center px-3'>
        <div>
        <Link href="/">
        <Image
        src={"/images/keyasmr-logo.svg"}
        alt='logo'
        width={45}
        height={45}
        className=''/>
        </Link>
        </div>
        <div className='flex gap-5 text-neutral-400'>
        <Link href="/info" className='hover:text-neutral-200'>
         Info
        </Link>
        <Link href="/usage" className='hover:text-neutral-200'>
         Usage
        </Link>
        </div>
       </div>
    </div>
  )
}

export default Nav