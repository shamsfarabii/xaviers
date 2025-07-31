import React from 'react'

export default function MyWorks() {
  return (
    <div className='relative'>
      <div className='flex items-center justify-between p-4'>
        <img src="/MaskLeft.png" alt="" className='w-auto h-[400px]' />
        <img src="/MaskRight.png" alt="" className='w-auto h-[400px]' />
      </div>
      <div className='absolute top-0 left-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4'>
        <img src="/works/1.png" alt="" className='h-30 w-auto' />
        <img src="/works/2.png" alt="" className='h-30 w-auto' />
        <img src="/works/3.png" alt="" className='h-30 w-auto' />
        <img src="/works/4.png" alt="" className='h-30 w-auto' />
        <img src="/works/5.png" alt="" className='h-30 w-auto' />
        <img src="/works/6.png" alt="" className='h-30 w-auto' />
        <img src="/works/7.png" alt="" className='h-30 w-auto' />
      </div>
    </div>
  )
}
