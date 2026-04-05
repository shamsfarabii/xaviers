import useInView from '../hooks/useInView';

export default function Posters() {
    const [sectionRef, isVisible] = useInView();

    const posters = [
        "https://pub-0773cdae5b99497fb3555dc89b494881.r2.dev/Copy%20of%20agent.jpg",
        "https://pub-0773cdae5b99497fb3555dc89b494881.r2.dev/Bangladesh%20victory%20day.jpg",
        "https://pub-0773cdae5b99497fb3555dc89b494881.r2.dev/trap.jpg",
        "https://pub-0773cdae5b99497fb3555dc89b494881.r2.dev/Copy%20of%20agent2.jpg"
    ];

    const reels = [
        "https://pub-0773cdae5b99497fb3555dc89b494881.r2.dev/poster_reel_1.jpg",
        "https://pub-0773cdae5b99497fb3555dc89b494881.r2.dev/poster_reel_2.jpg"
    ];

    return (
        <div>
            <div className='flex justify-between'>
                <p className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#ff3131] font-bold z-20 italic animate-fade-up px-4 text-center'>
                    <span className="inline-block font-walbaum">Designs</span>
                </p>
                <p className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#ff3131] font-bold z-20 italic animate-fade-up px-4 text-center'>
                    <span className="inline-block font-walbaum">My Work</span>
                </p>
            </div>
            <div
                ref={sectionRef}
                className="bg-[#0e0e0e] py-5 px-4 relative flex items-center justify-center"
            >
                {/* Background mask overlays */}
                <div className="absolute inset-0 hidden md:flex justify-between items-center pointer-events-none z-0">
                    <img src="/MaskLeft.png" alt="" className="h-[450px] lg:h-[650px] object-contain" />
                    <img src="/MaskRight.png" alt="" className="h-[350px] lg:h-[650px] object-contain"  />
                </div>

                {/* Main content grid */}
                <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 w-full gap-4 md:gap-0">
                    {/* Left Column – Thumbnails */}
                    <div className={`flex flex-col h-full transition-all duration-700 ${
                        isVisible ? 'animate-fade-up' : ''
                    }`}>
                        <div className="flex-1 flex flex-col gap-2">
                            <div className={`relative w-full aspect-video transition-all duration-700 delay-200 ${
                                isVisible ? 'animate-jump-in' : ''
                            }`}>
                                <img src="https://pub-0773cdae5b99497fb3555dc89b494881.r2.dev/unboxing.jpg" alt="Thumbnail 1" className="w-full h-full" />
                                <img src="/whitebox.png" alt="" className="absolute inset-0 w-full h-full z-10 pointer-events-none"  />
                            </div>

                            <div className={`relative w-full aspect-video transition-all duration-700 delay-400 ${
                                isVisible ? 'animate-jump-in' : ''
                            }`}>
                                <img src="https://pub-0773cdae5b99497fb3555dc89b494881.r2.dev/4.jpg" alt="Thumbnail 2" className="w-full h-full"  />
                                <img src="/whitebox.png" alt="" className="absolute inset-0 w-full h-full z-10 pointer-events-none"  />
                            </div>
                        </div>

                        <div className={`mt-4 flex items-center transition-all duration-700 delay-500 ${
                            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-5'
                        }`}>
                            <img src="/POsterArrow.gif" alt="Arrow" className="w-12 h-12 md:w-16 md:h-16"  />
                            <div className="ml-2">
                                <p className="font-nanum-pen-script text-3xl md:text-4xl text-white">Thumbnails</p>
                                <img src="/RedSpot.gif" alt="" className="h-4 md:h-6 ml-4"  />
                            </div>
                        </div>
                    </div>

                    {/* Center Column – Social Media Posters */}
                    <div className={`flex flex-col h-full transition-all mx-0 md:mx-[10px] duration-700 delay-200 ${
                        isVisible ? 'animate-fade-up' : ''
                    }`}>
                        <div className="flex-grow grid grid-cols-2 w-full gap-2 md:gap-[10px]">
                            {posters.map((item,i) => (
                                <div
                                    key={i}
                                    className={`transition-all duration-700 ${
                                        isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                                    }`}
                                    style={{ transitionDelay: isVisible ? `${300 + i * 100}ms` : '0ms' }}
                                >
                                    <img src={item} alt={`Social Post ${i}`} className="w-full h-full object-cover"  />
                                </div>
                            ))}
                        </div>

                        <div className={`mt-4 flex items-center justify-center md:justify-start transition-all duration-700 delay-700 ${
                            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                        }`}>
                            <div className="ml-0 md:ml-12 text-center md:text-left">
                                <p className="font-nanum-pen-script text-3xl md:text-4xl text-white relative">social media poster</p>
                                {/* <img src="/Circle.gif" alt="" className="absolute top-0 right-50 h-10 md:h-12 z-50"  /> */}
                            </div>
                            <img src="/POsterArrow.gif" alt="Arrow" className="w-12 h-12 md:w-16 md:h-16 rotate-360 scale-x-[-1] ml-2"  />
                        </div>
                    </div>

                    {/* Right Column – Reel Thumbnails */}
                    <div className={`flex flex-col h-full transition-all duration-700 delay-400 ${
                        isVisible ? 'animate-fade-up' : ''
                    }`}>
                        <div className="flex-1 grid grid-cols-2 gap-2 md:gap-4 w-full">
                            {reels.map((item,i) => (
                                <div
                                    key={i}
                                    className={`overflow-hidden transition-all duration-700 ${
                                        isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                                    }`}
                                    style={{ transitionDelay: isVisible ? `${500 + i * 150}ms` : '0ms' }}
                                >
                                    <img src={item} alt={`Reel ${i}`} className="w-full h-137 object-cover"  />
                                </div>
                            ))}
                        </div>
                        <div className={`mt-4 flex items-center justify-center md:justify-start transition-all duration-700 delay-700 ${
                            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-5'
                        }`}>
                            <div className="ml-0 md:ml-20 text-center md:text-left">
                                <p className="font-nanum-pen-script text-3xl md:text-4xl text-white">Reel thumbnails</p>
                                <img src="/RedSpot.gif" alt="" className="h-3 mx-auto md:mx-0"  />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
