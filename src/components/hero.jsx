import React from 'react'

export default function Hero() {
    return (
        <div className="relative w-full">
            <div className='relative'>
                <img src="mask.png" className='w-full mt-20' alt="Hero Image" />
            </div>

            <img
                src="arrow.gif"
                alt="Arrow"
                className="hidden lg:block absolute top-[35%] left-[45%] transform -translate-y-1/2 z-10 w-[450px]"
            />

            <div className="absolute top-[40%] lg:top-[60%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[50%] z-20">
                <div className=' flex gap-4 mb-[30px] items-center justify-center'>
                    <p className='text-5xl font-montserrat font-bold'>Title</p>
                    <p className='text-5xl font-nanum-pen-script font-bold text-red-400'>Asdsdsadf</p>
                </div>
                <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-lg shadow-lg">
                    <iframe
                        className="absolute top-0 left-0 w-full h-full"
                        src="https://www.youtube.com/embed/n5weFijjBSU?autoplay=1"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
        </div>
    )
}