import React, { useEffect, useRef, useState } from "react";
import YouTubeUIClone from "./youtube-ui/youtube";

const PodcastFreeplay = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const reelVideoUrls = [
    "https://www.youtube.com/embed/U_NRW4nRrl8?si=cwJIaOcjEfTQ3odT",
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
      className={`bg-[#0e0e0e] text-white px-8 py-12 font-sans transition-all duration-1000 ${
        isVisible ? 'animate-fade-up opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10 items-start">
        {/* Left Column - Reels */}
        <div className={`transition-all duration-1000 delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="relative w-full h-100 mb-6">
            <img src="/mask2.png" alt="" />
            <div className="absolute top-10 left-0 right-0 text-left text-white px-4 flex flex-col gap-6">
              <p className="text-8xl font-intro-rust">PODCAST</p>
              <p className="text-5xl font-intro-rust">FreePlay</p>
            </div>
          </div>
          <div className="flex items-center justify-left mb-6">
            <p className="font-nanum-pen-script text-5xl">Podcast from Reel  </p>
          </div>
          <div className="flex gap-4">
            {reelVideoUrls.map((url, idx) => (
              <div key={idx} className="w-full h-100 border-2 rounded-lg overflow-hidden">
                <iframe
                  width="100%"
                  height="100%"
                  src='/videos/reel.mp4'
                  title={`Reel ${idx + 1}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column - Longform Video */}
        <div className={`transition-all duration-1000 delay-400 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h3 className="text-4xl font-medium">
            <p className="font-nanum-pen-script text-5xl">Long from</p>
            <div className={`flex items-center justify-center transition-all duration-1000 delay-600 ${
              isVisible ? 'animate-fade-right opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
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