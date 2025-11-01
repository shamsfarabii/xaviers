import React, { useState, useEffect, useRef } from 'react'

export default function MyWorks() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const intervalRef = useRef(null);

  const workImages = [
    "/works/1.png",
    "/works/2.png",
    "/works/3.png",
    "/works/4.png",
    "/works/5.png",
    "/works/6.png",
    "/works/7.png"
  ];

  // Match Tailwind's lg breakpoint (1024px) so it aligns with your lg:hidden / lg:block
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px)');
    const handleChange = () => setIsMobile(!mq.matches);
    handleChange();
    mq.addEventListener?.('change', handleChange);
    return () => mq.removeEventListener?.('change', handleChange);
  }, []);

  // Auto slide for mobile (and pause when not mobile or tab hidden)
  useEffect(() => {
    const start = () => {
      if (!isMobile) return;
      clearInterval(intervalRef.current);
      intervalRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % workImages.length);
      }, 2000);
    };

    const stop = () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };

    // Pause when tab not visible
    const onVisibility = () => {
      if (document.hidden) stop();
      else start();
    };

    start();
    document.addEventListener('visibilitychange', onVisibility);

    return () => {
      document.removeEventListener('visibilitychange', onVisibility);
      stop();
    };
  }, [isMobile, workImages.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
    // Reset the interval when manually navigating (mobile only)
    if (isMobile) {
      if (intervalRef.current) clearInterval(intervalRef.current);
      intervalRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % workImages.length);
      }, 2000);
    }
  };

  return (
    <div>
      <div className='relative' id="works">
        <img src="/mywork1.gif" className='w-full mt-5' alt="Hero Image" />

        {/* Center the title safely across screen sizes; keep your color & font */}
        <p
          className='absolute top-[12%] sm:top-[25%] left-1/2 -translate-x-1/2
                     text-6xl text-[#ff3131] font-bold z-20 italic animate-fade-up whitespace-nowrap'
        >
          <span className="inline-block font-walbaum">My Work</span>
        </p>
      </div>

      <div className='relative'>
        {/* Desktop View - Original Grid Layout */}
        <div className='hidden lg:block'>
          {/* Keep masks; allow them to shrink on narrower desktops to avoid overlap */}
          <div className='flex items-center justify-between p-4 overflow-x-hidden'>
            <img src="/MaskLeft.png" alt="" className='w-auto h-[300px] max-w-full object-contain' />
            <img src="/MaskRight.png" alt="" className='w-auto h-[300px] max-w-full object-contain' />
          </div>

          {/* Ensure the grid doesn't overflow horizontally; give images a reliable height */}
          <div className='relative w-full px-4'>
            <div className='absolute bottom-[15%] grid grid-cols-2 lg:grid-cols-4 gap-4 w-full'>
              {workImages.map((img, index) => (
                <div key={index} className="flex justify-center items-center">
                  {/* Use arbitrary height to mirror your previous ~h-30 intent but keep it responsive */}
                  <img
                    src={img}
                    alt={`Work ${index + 1}`}
                    className='h-[120px] xl:h-[150px] w-auto max-w-full object-contain'
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile / Tablet View - Carousel */}
        <div className='lg:hidden'>
          <div className='carousel-container relative px-4 py-8 overflow-hidden'>
            <div
              className='flex transition-transform duration-500 ease-in-out'
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {workImages.map((img, index) => (
                <div key={index} className='min-w-full flex justify-center items-center'>
                  <img
                    src={img}
                    alt={`Work ${index + 1}`}
                    className='max-h-[50vh] sm:max-h-[320px] w-auto object-contain'
                  />
                </div>
              ))}
            </div>

            {/* Navigation Dots */}
            <div className='flex justify-center items-center gap-2 mt-6'>
              {workImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${currentSlide === index ? 'bg-[#ff3131] scale-125' : 'bg-gray-400'
                    }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
