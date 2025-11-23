import { useEffect, useRef, useState } from 'react';

export default function Posters() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            {
                threshold: 0.1,
                rootMargin: '-50px 0px',
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <div
            ref={sectionRef}
            className="bg-[#0e0e0e] py-5 px-4 relative flex items-center justify-center"
        >
            {/* Background mask overlays */}
            <div className="absolute inset-0 hidden md:flex justify-between items-center pointer-events-none z-0">
                <img src="/MaskLeft.png" alt="" className="h-[300px] lg:h-[400px] object-contain" />
                <img src="/MaskRight.png" alt="" className="h-[300px] lg:h-[400px] object-contain" />
            </div>

            {/* Main content grid */}
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 w-full">
                {/* Left Column – Thumbnails */}
                <div className={`flex flex-col h-full transition-all duration-1000 ${isVisible ? 'animate-fade-up opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}>
                    {/* Top Thumbnails */}
                    <div className="flex-1 flex flex-col gap-2">
                        <div className={`relative w-full aspect-video border-4 border-[#7daaee] transition-all duration-700 delay-200 ${isVisible ? 'animate-jump-in opacity-100' : 'opacity-0'
                            }`}>
                            <img
                                src="/poster.jpg"
                                alt="Thumbnail 1"
                                className="absolute top-2 left-2 w-[calc(100%-16px)] h-[calc(100%-16px)] object-cover"
                            />
                        </div>
                        <div className={`relative w-full aspect-video border-4 border-[#7daaee] transition-all duration-700 delay-400 ${isVisible ? 'animate-jump-in opacity-100' : 'opacity-0'
                            }`}>
                            <img
                                src="/poster.jpg"
                                alt="Thumbnail 2"
                                className="absolute top-2 left-2 w-[calc(100%-16px)] h-[calc(100%-16px)]"
                            />
                        </div>
                    </div>

                    {/* Label */}
                    <div className={`mt-4 flex items-center transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-5'
                        }`}>
                        <img src="/POsterArrow.gif" alt="Arrow" className="w-16 h-16" />
                        <div className="ml-2">
                            <p className="font-nanum-pen-script text-4xl text-white">Thumbnails</p>
                            <img src="/RedSpot.gif" alt="Decoration" className="h-6 ml-4" />
                        </div>
                    </div>
                </div>

                {/* Center Column – Social Media Posters */}
                <div className={`flex flex-col h-full transition-all duration-1000 delay-300 ${isVisible ? 'animate-fade-up opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}>
                    {/* Top Posters */}
                    <div className="flex-grow grid grid-cols-2 w-full">
                        {[1, 2, 3, 4].map((i) => (
                            <div
                                key={i}
                                className={`rounded-lg transition-all duration-700 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                                    }`}
                                style={{ transitionDelay: `${400 + i * 100}ms` }}
                            >
                                <img
                                    src="/Dummy.png"
                                    alt={`Social Post ${i}`}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        ))}
                    </div>

                    {/* Label */}
                    <div className={`mt-4 flex items-center transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                        }`}>
                        <div className="ml-12">
                            <p className="font-nanum-pen-script text-4xl text-white">
                                social media poster
                            </p>
                        </div>
                        <img src="/POsterArrow.gif" alt="Arrow" className="w-16 h-16 rotate-360 scale-x-[-1]" />
                        {/* <img src="/Circle.gif" alt="Arrow" className="w-16 h-16 absolute rotate-360 scale-x-[-1]" /> */}
                    </div>

                </div>

                {/* Right Column – Reel Thumbnails */}
                <div className={`flex flex-col h-full transition-all duration-1000 delay-600 ${isVisible ? 'animate-fade-up opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}>
                    {/* Top Reels */}
                    <div className="flex-1 grid grid-cols-2 gap-4 w-full">
                        {[1, 2].map((i) => (
                            <div
                                key={i}
                                className={`h-full rounded-lg overflow-hidden transition-all duration-700 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                                    }`}
                                style={{ transitionDelay: `${700 + i * 150}ms` }}
                            >
                                <img
                                    src="/Dummy.png"
                                    alt={`Reel ${i}`}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        ))}
                    </div>
                    {/* Label */}
                    <div className={`mt-4 flex items-center transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-5'
                        }`}>
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
            `}</style>
                </div>
            </div>
        </div>
    );
}
