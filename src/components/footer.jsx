import React, { useEffect, useRef, useState } from 'react'

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          console.log('Footer is visible!'); // Debug log
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
      className={`min-h-[200px] flex items-center justify-center transition-all duration-1000 ${
        isVisible ? 'animate-fade-up opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      {isVisible && (
        <img 
          src="/footer.gif" 
          alt="Footer animation" 
          className="w-full h-auto"
          onLoad={() => console.log('Footer GIF loaded')}
          onError={() => console.log('Footer GIF failed to load')}
        />
      )}
    </div>
  )
}