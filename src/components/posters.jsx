import React from 'react';

export default function Posters() {
    return (
        <div className="bg-[#0e0e0e] py-5 px-4 relative flex items-center justify-center">
            {/* Background mask overlays */}
            <div className="absolute inset-0 flex justify-between items-center pointer-events-none z-0">
                <img src="/MaskLeft.png" alt="" className="h-[400px]" />
                <img src="/MaskRight.png" alt="" className="h-[400px]" />
            </div>

            {/* Main content grid */}
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-12 w-full">
                {/* Left Column – Thumbnails */}
                <div className="flex flex-col h-full">
                    {/* Top Thumbnails */}
                    <div className="flex-1 flex flex-col gap-6">
                        <div className="relative w-full aspect-video border-4 border-[#7daaee] animate-jump-in">
                            <img
                                src="/poster.jpg"
                                alt="Thumbnail 1"
                                className="absolute top-2 left-2 w-[calc(100%-16px)] h-[calc(100%-16px)] object-cover"
                            />
                        </div>
                        <div className="relative w-full aspect-video border-4 border-[#7daaee] animate-jump-in">
                            <img
                                src="/poster.jpg"
                                alt="Thumbnail 2"
                                className="absolute top-2 left-2 w-[calc(100%-16px)] h-[calc(100%-16px)]"
                            />
                        </div>
                    </div>

                    {/* Label */}
                    <div className="mt-4 flex items-center">
                        <img src="/POsterArrow.gif" alt="Arrow" className="w-16 h-16" />
                        <div className="ml-2">
                            <p className="font-nanum-pen-script text-4xl text-white">Thumbnails</p>
                            <img src="/RedSpot.gif" alt="Decoration" className="h-6 ml-4" />
                        </div>
                    </div>
                </div>

                {/* Center Column – Social Media Posters */}
                <div className="flex flex-col h-full">
                    {/* Top Posters */}
                    <div className="flex-1 grid grid-cols-2 gap-4 w-full">
                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="aspect-square rounded-lg overflow-hidden">
                                <img
                                    src="/Dummy.png"
                                    alt={`Social Post ${i}`}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        ))}
                    </div>

                    {/* Label */}
                    <div className="mt-4 flex items-center">
                        <div className="ml-12">
                            <p className="font-nanum-pen-script text-4xl text-white">
                                social media poster
                            </p>
                        </div>
                        <img src="/POsterArrow.gif" alt="Arrow" className="w-16 h-16 rotate-360 scale-x-[-1]" />
                    </div>
                </div>

                {/* Right Column – Reel Thumbnails */}
                <div className="flex flex-col h-full">
                    {/* Top Reels */}
                    <div className="flex-1 grid grid-cols-2 gap-4 w-full">
                        {[1, 2].map((i) => (
                            <div key={i} className="h-full rounded-lg overflow-hidden">
                                <img
                                    src="/Dummy.png"
                                    alt={`Reel ${i}`}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        ))}
                    </div>
                    {/* Label */}
                    <div className="mt-4 flex items-center">
                        <div className="ml-20">
                            <p className="font-nanum-pen-script text-4xl text-white">
                                Reel thumbnails
                            </p>
                            <img src="/RedSpot.gif" alt="Decoration" className="h-3" />
                        </div>
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
            `}</style>        </div>
            </div>
        </div>
    );
}
