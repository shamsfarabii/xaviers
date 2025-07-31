import React from 'react'

export default function Hero() {
    return (
        <div className="relative">
            <img src="mask.png" className='w-full mt-20' alt="Hero Image" />
            <img src="arrow.gif" alt="Arrow" className="absolute top-[35%] left-[65%] transform -translate-x-1/2 -translate-y-1/2 z-10 w-lg" />
            <p className='absolute top-[25%] left-[40%] text-5xl font-bold text-red-400'>Hello World</p>
            <div className="mt-18 flex justify-center absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 z-20">
                <iframe
                    width="600"
                    height="320"
                    src="https://www.youtube.com/embed/n5weFijjBSU?autoplay=1"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="rounded-lg shadow-lg"
                ></iframe>
            </div>
        </div>
    )
}
