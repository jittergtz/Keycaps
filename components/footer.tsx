import React from 'react'

function Footer() {
  return (
    <div className='flex justify-center  border-t border-neutral-600 bg-black/70'>
        <div className='max-w-7xl w-full h-40  px-5 flex items-center'>
         <div className='text-neutral-400 text-lg flex flex-col sm:flex-row w-full justify-between px-10'>
         <div className='flex felx-col gap-3'>
            <p className='text-neutral-500'>sandro copyright 2024</p>
          </div>
          <div className='flex felx-col gap-3'>
            <p>sandro</p>
            <p>Github</p>
            <p>Twitter</p>
          </div>
        </div>
        </div>
    </div>
  )
}

export default Footer