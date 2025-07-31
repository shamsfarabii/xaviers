import React from 'react'

export default function Posters() {
    return (
        <div className="bg-[#0e0e0e] py-12 px-4 relative">
            <div className='flex items-center justify-between p-4'>
                <img src="/MaskLeft.png" alt="" className='w-auto h-[600px]' />
                <img src="/MaskRight.png" alt="" className='w-auto h-[600px]' />
            </div>
            <div className='absolute top-26 left-16 flex flex-col gap-8'>
                <div className='border-4 border-[#7daaee] animate-jump-in w-[434px] h-[219px] relative'>
                </div>
                <img
                    src="/poster.jpg"
                    alt=""
                    className='w-[418px] h-[204px] absolute top-2 left-2'
                />
                <div className='border-4 border-[#7daaee] animate-jump-in w-[434px] h-[219px] relative'>
                </div>
                <img
                    src="/poster.jpg"
                    alt=""
                    className='w-[418px] h-[204px] absolute top-[258px] left-2'
                />
            </div>
            <style jsx>{`
                @keyframes fadeIn {
                  from {
                    opacity: 0;
                    border-color: transparent;
                  }
                  to {
                    opacity: 1;
                    border-color: white;
                  }
                }
            `}</style>
        </div>
    )
}