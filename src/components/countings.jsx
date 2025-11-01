import React, { useEffect, useState } from 'react'

const FlipCounter = ({ target, suffix = "" }) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const increment = target / steps;
    const stepDuration = duration / steps;
    
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, stepDuration);
    
    return () => clearInterval(timer);
  }, [target]);
  
  const formatNumber = (num) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(0) + 'M';
    } else if (num >= 1000) {
      return (num / 1000).toFixed(0) + 'K';
    }
    return num.toString();
  };
  
  return (
    <div className="flip-counter">
      <span className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
        {formatNumber(count)}{suffix}
      </span>
    </div>
  );
};

const AnimatedCard = ({ children, gradientClass, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);
    
    return () => clearTimeout(timer);
  }, [delay]);
  
  return (
    <div
      className={`relative group transform transition-all duration-1000 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}
    >
      <div
        className={`absolute inset-0 ${gradientClass} rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse`}
      ></div>

      {/* Changed only heights -> min-heights to avoid clipping on small screens */}
      <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-lg p-4 sm:p-6 md:p-8 lg:p-12
                      min-h-32 sm:min-h-36 md:min-h-40 lg:min-h-48
                      flex items-center justify-center border border-red-500 w-full">
        {children}
      </div>
    </div>
  );
};

export default function ReviewSection() {
  return (
    <div className="flex items-center justify-center p-4 sm:p-6 md:p-8 w-full">
      <div className="w-full max-w-4xl">
        {/* Mobile View: Stack all cards vertically */}
        <div className="grid grid-cols-1 gap-6 md:hidden">
          <div className="w-full">
            <AnimatedCard 
              gradientClass="bg-gradient-to-r from-red-500 via-purple-500 to-blue-500"
              delay={200}
            >
              <FlipCounter target={5} suffix="M+" />
            </AnimatedCard>
          </div>
          
          <div className="w-full">
            <AnimatedCard 
              gradientClass="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500"
              delay={400}
            >
              <FlipCounter target={73} suffix="+" />
            </AnimatedCard>
          </div>
          
          <div className="w-full">
            <AnimatedCard 
              gradientClass="bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-500"
              delay={600}
            >
              <FlipCounter target={800} suffix="+" />
            </AnimatedCard>
          </div>
          
          <div className="w-full">
            <AnimatedCard 
              gradientClass="bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500"
              delay={800}
            >
              <FlipCounter target={150} suffix="M+" />
            </AnimatedCard>
          </div>
        </div>
        
        {/* Tablet/Desktop View: Original 2x2 grid layout */}
        <div className="hidden md:grid grid-rows-2 gap-6">
          {/* First Row: 5M+ and 73+ Cards */}
          <div className='w-full flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6'>
            <div className="w-full md:w-[60%]">
              <AnimatedCard 
                gradientClass="bg-gradient-to-r from-red-500 via-purple-500 to-blue-500"
                delay={200}
              >
                <FlipCounter target={5} suffix="M+" />
              </AnimatedCard>
            </div>

            <div className="w-full md:w-[40%] mt-4 sm:mt-0 sm:ml-6">
              <AnimatedCard 
                gradientClass="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500"
                delay={400}
              >
                <FlipCounter target={73} suffix="+" />
              </AnimatedCard>
            </div>
          </div>

          {/* Second Row: 800+ and 150M+ Cards */}
          <div className='w-full flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6'>
            <div className="w-full md:w-[40%]">
              <AnimatedCard 
                gradientClass="bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-500"
                delay={600}
              >
                <FlipCounter target={800} suffix="+" />
              </AnimatedCard>
            </div>

            <div className="w-full md:w-[60%] mt-4 sm:mt-0 sm:ml-6">
              <AnimatedCard 
                gradientClass="bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500"
                delay={800}
              >
                <FlipCounter target={150} suffix="M+" />
              </AnimatedCard>
            </div>
          </div>
        </div>
      </div>
      
      {/* Keeping your CSS exactly where it was */}
      <style jsx>{`
        .flip-counter {
          overflow: hidden;
        }
        
        .flip-counter span {
          display: inline-block;
          animation: flipIn 0.6s ease-in-out;
        }
        
        @keyframes flipIn {
          0% {
            transform: rotateX(-90deg);
            opacity: 0;
          }
          50% {
            transform: rotateX(0deg);
            opacity: 0.5;
          }
          100% {
            transform: rotateX(0deg);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  )
}
