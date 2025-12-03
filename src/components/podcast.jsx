import React, { useEffect, useRef, useState } from "react";
import YouTubeUIClone from "./youtube-ui/youtube";

const PodcastFreeplay = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const reelVideoUrls = [
    "https://www.youtube.com/embed/U_NRW4nRrl8?si=cwJIaOcjEfTQ3odT",
    "https://www.youtube.com/embed/U_NRW4nRrl8?si=cwJIaOcjEfTQ3odT",
  ];

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
      className={`bg-[#0e0e0e] text-white px-8 py-6 font-sans transition-all duration-1000 ${isVisible ? 'animate-fade-up opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
          <div className="relative">
            <img src="/mask2.png" alt="" />
          </div>
          <div className="absolute top-0 left-0 right-0 text-left text-white px-4 flex flex-col gap-6">
            <p className="lg:text-7xl text-5xl font-intro-rust">PODCAST</p>
            <p className="md:text-3xl text-5xl font-intro-rust">FreePlay</p>
          </div>
          <div className="absolute lg:top-50 top-40 left-6 flex items-center justify-left">
            <p className="font-nanum-pen-script text-5xl">Reels from Podcast</p>
          </div>
          <div className="absolute lg:top-90 md:top-70 top-65 w-[100%]">
            <div className="flex gap-4">
              {reelVideoUrls.map((url, idx) => (
                <div
                  key={idx}
                  className="relative aspect-[9/16] w-[280px] sm:w-[320px] md:w-[360px] lg:w-[400px] border-2 border-gray-700 rounded-lg overflow-hidden"
                >
                  <video
                    className="absolute inset-0 w-full h-full object-cover"
                    src="/videos/reel.mp4"
                    loop
                    muted
                    playsInline
                    preload="metadata"
                    onMouseEnter={(e) => e.currentTarget.play()}
                    onMouseLeave={(e) => {
                      e.currentTarget.pause();
                      e.currentTarget.currentTime = 0;
                    }}
                  />
                </div>

              ))}
            </div>
          </div>
        </div>

        <div className={`transition-all mt-80 md:mt-0 duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
          <h3 className="text-4xl font-medium">
            <p className="font-nanum-pen-script text-5xl">Long from</p>
            <div className={`flex items-center justify-center transition-all duration-1000 delay-600 ${isVisible ? 'animate-fade-right opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
              }`}>
              <img src="/red-arrow.gif" className="h-auto w-40" alt="" />
            </div>
          </h3>
          <div className="flex flex-col gap-6">
            <YouTubeUIClone />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PodcastFreeplay;