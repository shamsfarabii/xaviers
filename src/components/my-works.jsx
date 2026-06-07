'use client';

import { useEffect, useRef, useState } from 'react';

const desktopWorkImagePositions = [
  { left: '15.7%', top: '29.5%', width: '17%' },
  { left: '37.8%', top: '30.6%', width: '12%' },
  { left: '59.1%', top: '29.5%', width: '15%' },
  { left: '81.5%', top: '30.6%', width: '15%' },
  { left: '14.7%', top: '72.4%', width: '12%' },
  { left: '37.6%', top: '74.7%', width: '12%' },
  { left: '58.3%', top: '72.6%', width: '12%' },
  { left: '82.3%', top: '75.6%', width: '12%' },
];

const workImages = [
  '/works/documantary.png',
  '/works/drop%20shipping.png',
  '/works/face_less.png',
  '/works/infotanment.png',
  '/works/podcast.png',
  '/works/tutorial.png',
  '/works/ugc.png',
  '/works/vlog.png',
];

const AUTO_SLIDE_INTERVAL_MS = 2000;

export default function MyWorks() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const intervalRef = useRef(null);

  const stopAutoSlide = () => {
    if (intervalRef.current === null) return;

    window.clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  const startAutoSlide = () => {
    if (!isMobile || document.hidden) return;

    stopAutoSlide();

    intervalRef.current = window.setInterval(() => {
      setCurrentSlide((previousSlide) => (previousSlide + 1) % workImages.length);
    }, AUTO_SLIDE_INTERVAL_MS);
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 1023px)');

    const handleChange = () => {
      setIsMobile(mediaQuery.matches);
    };

    handleChange();

    mediaQuery.addEventListener('change', handleChange);

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        stopAutoSlide();
        return;
      }

      startAutoSlide();
    };

    startAutoSlide();

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      stopAutoSlide();
    };
  }, [isMobile, startAutoSlide]);

  const goToSlide = (slideIndex) => {
    setCurrentSlide(slideIndex);
    startAutoSlide();
  };

  return (
    <section className="relative w-full">
      {/* Desktop */}
      <div className="hidden w-full lg:block">
        <div className="relative mx-auto w-full px-4">
          <div className="relative mx-auto aspect-[1193/369] w-full overflow-visible">
            {workImages.map((imageUrl, index) => {
              const imagePosition = desktopWorkImagePositions[index];

              return (
                <img
                  key={imageUrl}
                  src={imageUrl}
                  alt={`Work ${index + 1}`}
                  className="absolute -translate-x-1/2 -translate-y-1/2 object-contain opacity-100"
                  style={{
                    left: imagePosition.left,
                    top: imagePosition.top,
                    width: imagePosition.width,
                    height: 'auto',
                  }}
                />
              );
            })}
          </div>
        </div>
      </div>

      {/* Mobile / Tablet */}
      <div className="block lg:hidden">
        <div className="relative overflow-hidden px-4 py-8">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {workImages.map((imageUrl, index) => (
              <div key={imageUrl} className="flex min-w-full items-center justify-center">
                <img
                  src={imageUrl}
                  alt={`Work ${index + 1}`}
                  className="w-full object-contain"
                />
              </div>
            ))}
          </div>

          <div className="mt-6 flex items-center justify-center gap-2">
            {workImages.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => goToSlide(index)}
                className={`h-2 w-2 rounded-full transition-all duration-300 ${
                  currentSlide === index ? 'scale-125 bg-[#ff7a3c]' : 'bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}