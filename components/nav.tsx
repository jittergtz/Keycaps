import Link from 'next/link'
import React from 'react'

function Nav() {
  return (
    <div className='fixed z-50 top-0 w-full flex justify-center border-b border-neutral-700 bg-white/20 backdrop-blur-lg '>
       <div className='w-full max-w-7xl  h-16  flex justify-between items-center px-3'>
        <div>
        <Link href="/">
         KeyboardAsmr
        </Link>
        </div>
        <div className='flex gap-5'>
        <Link href="/info">
         info
        </Link>
        <Link href="/usage">
         usage
        </Link>
        </div>
       </div>
    </div>
  )
}

export default Nav