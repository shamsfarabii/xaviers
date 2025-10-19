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

  // Check if mobile view
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1042);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Auto slide for mobile
  useEffect(() => {
    if (isMobile) {
      intervalRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % workImages.length);
      }, 2000);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isMobile, workImages.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
    // Reset the interval when manually navigating
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % workImages.length);
      }, 2000);
    }
  };

  return (
    <div>
      <div className='relative' id="works">
        <img src="/mywork1.gif" className='w-full mt-20' alt="Hero Image" />
        <p className='absolute top-[15%] left-[35%] text-3xl sm:text-5xl md:text-7xl text-[#ff3131] font-bold z-20 italic animate-fade-up'>
          <span className="inline-block font-walbaum">My Work</span>
        </p>
      </div>
      
      <div className='relative'>
        {/* Desktop View - Original Grid Layout */}
        <div className='hidden lg:block'>
          <div className='flex items-center justify-between p-4'>
            <img src="/MaskLeft.png" alt="" className='w-auto h-[300px]' />
            <img src="/MaskRight.png" alt="" className='w-auto h-[300px]' />
          </div>
          <div className='absolute top-0 left-0 grid grid-cols-2 lg:grid-cols-4 gap-4 p-4 w-full'>
            {workImages.map((img, index) => (
              <img key={index} src={img} alt={`Work ${index + 1}`} className='h-30 w-auto' />
            ))}
          </div>
        </div>

        {/* Mobile View - Carousel */}
        <div className='lg:hidden'>
          <div className='carousel-container relative px-4 py-8 overflow-hidden'>
            <div 
              className='flex transition-transform duration-500 ease-in-out'
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {workImages.map((img, index) => (
                <div key={index} className='min-w-full flex-shrink-0 flex justify-center items-center'>
                  <img 
                    src={img} 
                    alt={`Work ${index + 1}`} 
                    className='max-h-[300px] w-auto object-contain'
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
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    currentSlide === index 
                      ? 'bg-[#ff3131] scale-125' 
                      : 'bg-gray-400'
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