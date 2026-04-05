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

export default function MyWorks() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const intervalRef = useRef<number | null>(null);

  const workImages = [
    "https://pub-0773cdae5b99497fb3555dc89b494881.r2.dev/1.png",
    "https://pub-0773cdae5b99497fb3555dc89b494881.r2.dev/2.png",
    "https://pub-0773cdae5b99497fb3555dc89b494881.r2.dev/Copy%20of%20Tech%20Website%20in%20Black%20Orange%20Blue%20Cool%20Corporate%20Style%20(2).png",
    "https://pub-0773cdae5b99497fb3555dc89b494881.r2.dev/Copy%20of%20Tech%20Website%20in%20Black%20Orange%20Blue%20Cool%20Corporate%20Style%20(3).png",
    "https://pub-0773cdae5b99497fb3555dc89b494881.r2.dev/Copy%20of%20Tech%20Website%20in%20Black%20Orange%20Blue%20Cool%20Corporate%20Style%20(4).png",
    "https://pub-0773cdae5b99497fb3555dc89b494881.r2.dev/Copy%20of%20Tech%20Website%20in%20Black%20Orange%20Blue%20Cool%20Corporate%20Style%20(5).png",
    "https://pub-0773cdae5b99497fb3555dc89b494881.r2.dev/Copy%20of%20Tech%20Website%20in%20Black%20Orange%20Blue%20Cool%20Corporate%20Style%20(6).png",
    "https://pub-0773cdae5b99497fb3555dc89b494881.r2.dev/Copy%20of%20Tech%20Website%20in%20Black%20Orange%20Blue%20Cool%20Corporate%20Style%20(7).png"
  ];

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px)');
    const handleChange = () => setIsMobile(!mq.matches);
    handleChange();
    mq.addEventListener?.('change', handleChange);
    return () => mq.removeEventListener?.('change', handleChange);
  }, []);

  useEffect(() => {
    const start = () => {
      if (!isMobile) return;
      clearInterval(intervalRef.current ?? undefined);
      intervalRef.current = window.setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % workImages.length);
      }, 2000);
    };

    const stop = () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };

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

  const goToSlide = (index: number) => {
    setCurrentSlide(index);

    if (isMobile) {
      if (intervalRef.current) clearInterval(intervalRef.current);
      intervalRef.current = window.setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % workImages.length);
      }, 2000);
    }
  };

  return (
    <div>
      <div className="relative" id="works">
        <img src="/mywork1.gif" className="w-full" alt="Hero Image" />
        <p
          className="absolute top-[12%] sm:top-[25%] left-1/2 -translate-x-1/2
                     text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#ff3131] font-bold z-20 italic animate-fade-up px-4 text-center"
        >
          <span className="inline-block font-walbaum">My Work</span>
        </p>
      </div>

      <div className="relative">
        {/* Desktop */}
        <div className="hidden lg:block">
          <div className="relative mx-auto w-full max-w-[1400px] px-4">
            <div className="relative mx-auto aspect-[1193/369] w-full overflow-hidden">
              <img
                src="/MaskLeft.png"
                alt=""
                className="pointer-events-none absolute inset-y-0 left-0 h-full w-auto max-w-none object-contain select-none"
              />

              <img
                src="/MaskRight.png"
                alt=""
                className="pointer-events-none absolute inset-y-0 right-0 h-full w-auto max-w-none object-contain select-none"
              />

              {workImages.map((imageUrl, index) => {
                const position = desktopWorkImagePositions[index];

                return (
                  <img
                    key={imageUrl}
                    src={imageUrl}
                    alt={`Work ${index + 1}`}
                    className="absolute -translate-x-1/2 -translate-y-1/2 object-contain"
                    style={{
                      left: position.left,
                      top: position.top,
                      width: position.width,
                      height: 'auto',
                    }}
                  />
                );
              })}
            </div>
          </div>
        </div>

        {/* Mobile / Tablet View - Carousel */}
        <div className="lg:hidden">
          <div className="carousel-container relative overflow-hidden px-4 py-8">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {workImages.map((img, index) => (
                <div key={index} className="flex min-w-full items-center justify-center">
                  <img
                    src={img}
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