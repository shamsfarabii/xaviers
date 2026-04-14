import { useEffect, useRef, useState } from 'react';

const desktopWorkImagePositions = [
  { left: '15.7%', top: '29.5%', width: '15.5%' },
  { left: '37.8%', top: '30.6%', width: '12.5%' },
  { left: '59.1%', top: '29.5%', width: '19%' },
  { left: '81.5%', top: '30.6%', width: '14%' },
  { left: '14.7%', top: '72.4%', width: '19%' },
  { left: '37.6%', top: '74.7%', width: '12.5%' },
  { left: '58.3%', top: '72.6%', width: '13.5%' },
  { left: '82.3%', top: '75.6%', width: '17%' },
];

const workImages = [
  'https://xaviers.b-cdn.net/1.png',
  'https://xaviers.b-cdn.net/2.png',
  'https://xaviers.b-cdn.net/Copy%20of%20Tech%20Website%20in%20Black%20Orange%20Blue%20Cool%20Corporate%20Style%20(2).png',
  'https://xaviers.b-cdn.net/Copy%20of%20Tech%20Website%20in%20Black%20Orange%20Blue%20Cool%20Corporate%20Style%20(3).png',
  'https://xaviers.b-cdn.net/Copy%20of%20Tech%20Website%20in%20Black%20Orange%20Blue%20Cool%20Corporate%20Style%20(4).png',
  'https://xaviers.b-cdn.net/Copy%20of%20Tech%20Website%20in%20Black%20Orange%20Blue%20Cool%20Corporate%20Style%20(5).png',
  'https://xaviers.b-cdn.net/Copy%20of%20Tech%20Website%20in%20Black%20Orange%20Blue%20Cool%20Corporate%20Style%20(6).png',
  'https://xaviers.b-cdn.net/Copy%20of%20Tech%20Website%20in%20Black%20Orange%20Blue%20Cool%20Corporate%20Style%20(7).png',
];

export default function MyWorks() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [hasEnteredViewport] = useState(true);

  const intervalRef = useRef(null);
  const desktopSectionRef = useRef(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 1024px)');

    const handleChange = () => {
      setIsMobile(!mediaQuery.matches);
    };

    handleChange();
    mediaQuery.addEventListener?.('change', handleChange);

    return () => {
      mediaQuery.removeEventListener?.('change', handleChange);
    };
  }, []);

  useEffect(() => {
    const startAutoSlide = () => {
      if (!isMobile) return;

      clearInterval(intervalRef.current ?? undefined);
      intervalRef.current = window.setInterval(() => {
        setCurrentSlide((previousSlide) => (previousSlide + 1) % workImages.length);
      }, 2000);
    };

    const stopAutoSlide = () => {
      if (intervalRef.current === null) return;

      clearInterval(intervalRef.current);
      intervalRef.current = null;
    };

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
  }, [isMobile]);

  const restartAutoSlide = () => {
    if (!isMobile) return;

    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
    }

    intervalRef.current = window.setInterval(() => {
      setCurrentSlide((previousSlide) => (previousSlide + 1) % workImages.length);
    }, 2000);
  };

  const goToSlide = (slideIndex) => {
    setCurrentSlide(slideIndex);
    restartAutoSlide();
  };

  return (
    <div>
      <div className="relative" id="works">
        <img src="https://xaviers.b-cdn.net/1230%20(1)(1).gif" className="w-full" alt="Hero Image" />
      </div>

      <div className="relative">
        {/* Desktop */}
        <div className="hidden lg:block">
          <div
            ref={desktopSectionRef}
            className={`relative mx-auto w-full max-w-[1400px] px-4 transition-all duration-700 ease-out ${
              hasEnteredViewport ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
            }`}
          >
            <div className="relative mx-auto aspect-[1193/369] w-full overflow-hidden">
              <img
                src="/MaskLeft.png"
                alt=""
                className="pointer-events-none absolute inset-y-0 left-0 h-full max-w-none select-none object-contain"
              />

              <img
                src="/MaskRight.png"
                alt=""
                className="pointer-events-none absolute inset-y-0 right-0 h-full max-w-none select-none object-contain"
              />

              {workImages.map((imageUrl, index) => {
                const imagePosition = desktopWorkImagePositions[index];

                return (
                  <img
                    key={imageUrl}
                    src={imageUrl}
                    alt={`Work ${index + 1}`}
                    className={`absolute -translate-x-1/2 -translate-y-1/2 object-contain ${
                      hasEnteredViewport ? 'animate-fade-up' : 'opacity-0'
                    }`}
                    style={{
                      left: imagePosition.left,
                      top: imagePosition.top,
                      width: imagePosition.width,
                      height: 'auto',
                      animationDelay: `${700 + index * 150}ms`,
                      animationFillMode: 'both',
                    }}
                  />
                );
              })}
            </div>
          </div>
        </div>

        {/* Mobile / Tablet */}
        <div className="lg:hidden">
          <div className="carousel-container relative overflow-hidden px-4 py-8">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {workImages.map((imageUrl, index) => (
                <div key={imageUrl} className="flex min-w-full items-center justify-center">
                  <img
                    src={imageUrl}
                    alt={`Work ${index + 1}`}
                    className="max-h-[50vh] w-auto object-contain sm:max-h-[320px]"
                  />
                </div>
              ))}
            </div>

            <div className="mt-6 flex items-center justify-center gap-2">
              {workImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`h-2 w-2 rounded-full transition-all duration-300 ${
                    currentSlide === index ? 'scale-125 bg-[#ff3131]' : 'bg-gray-400'
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