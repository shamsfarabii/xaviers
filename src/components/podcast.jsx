import React from "react";
import useInView from "../hooks/useInView";
import YouTubeUIClone from "./youtube-ui/youtube";

const PodcastFreeplay = () => {
  const [sectionRef, isVisible] = useInView();

  const reelVideoUrls = [
    "https://www.youtube.com/embed/U_NRW4nRrl8?si=cwJIaOcjEfTQ3odT",
    "https://www.youtube.com/embed/U_NRW4nRrl8?si=cwJIaOcjEfTQ3odT",
  ];

  return (
    <div
      ref={sectionRef}
      className={`bg-[black] text-white px-8 py-6 font-sans transition-all duration-700 ${
        isVisible ? 'animate-fade-up' : ''
      }`}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        <div className={`relative transition-opacity duration-700 delay-200 ${
          isVisible ? 'opacity-100' : 'opacity-80'
        }`}>
          <div className="relative">
            <img src="/mask2.png" alt=""  />
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
                  {isVisible && (
                    <video
                      className="absolute inset-0 w-full h-full object-cover"
                      src="https://xaviers.b-cdn.net/reel.mp4"
                      loop
                      playsInline
                      preload="metadata"
                      onMouseEnter={(e) => e.currentTarget.play()}
                      onMouseLeave={(e) => {
                        e.currentTarget.pause();
                        e.currentTarget.currentTime = 0;
                      }}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={`mt-80 md:mt-0 transition-opacity duration-700 delay-300 ${
          isVisible ? 'opacity-100' : 'opacity-80'
        }`}>
          <h3 className="text-4xl font-medium">
            <p className="font-nanum-pen-script text-5xl">Long from</p>
            <div className="flex items-center justify-center">
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
