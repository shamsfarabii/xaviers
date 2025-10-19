import React, { useEffect, useRef, useState } from 'react';

const teamMembers = [
  {
    name: 'Asad',
    designation: 'Video Editor',
    image: '/Member1.jpg',
  },
  {
    name: 'Nafis',
    designation: 'Art Director',
    image: '/Member2.jpg',
  },
  {
    name: 'Tahasin',
    designation: 'Creative Director',
    image: '/Member3.jpg',
  }
];

export default function AboutUsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const sectionRef = useRef(null);

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

  const getCardTransform = (index) => {
    if (hoveredIndex === null) {
      // Default overlapping position - same line
      const offsetX = index * 120; // Horizontal offset for overlap
      return {
        transform: `translateX(${offsetX}px)`,
        zIndex: teamMembers.length - index,
      };
    } else if (hoveredIndex === index) {
      // Hovered card comes forward and scales up
      return {
        transform: `translateX(${index * 120}px) translateY(-20px) scale(1.1)`,
        zIndex: 10,
      };
    } else if (index < hoveredIndex) {
      // Cards before hovered card move left with more spacing
      const spacing = (hoveredIndex - index) * 150; // More space for multiple cards
      const offsetX = index * 120 - spacing;
      return {
        transform: `translateX(${offsetX}px) scale(0.95)`,
        zIndex: teamMembers.length - index,
      };
    } else {
      // Cards after hovered card move right with more spacing
      const spacing = (index - hoveredIndex) * 150; // More space for multiple cards
      const offsetX = index * 120 + spacing;
      return {
        transform: `translateX(${offsetX}px) scale(0.95)`,
        zIndex: teamMembers.length - index,
      };
    }
  };

  return (
    <div
      ref={sectionRef}
      className="bg-[#0e0e0e] text-white py-16 px-4 overflow-hidden"
      id="about"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <p className="text-sm font-semibold text-red-400 tracking-wider uppercase mb-4 animate-pulse">
            MEET THE TEAM
          </p>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            About <span className="text-red-400">Us</span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-red-500 to-purple-500 mx-auto rounded-full mb-8"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            We are a passionate team of creative professionals dedicated to bringing your vision to life through innovative design and artistic excellence.
          </p>
        </div>

        {/* Cascading Team Cards */}
        <div className="flex justify-center items-center min-h-[600px] relative">
          <div 
            className="relative w-[600px] h-[450px]"
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {teamMembers.map((member, index) => (
              <div
                key={member.name}
                className={`absolute transition-all duration-700 ease-out cursor-pointer ${
                  isVisible ? 'opacity-100' : 'opacity-0'
                }`}
                style={{
                  ...getCardTransform(index),
                  transitionDelay: `${index * 200}ms`,
                }}
                onMouseEnter={() => setHoveredIndex(index)}
              >
                {/* Enhanced Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 rounded-2xl blur-xl transition-all duration-500 ${
                  hoveredIndex === index ? 'opacity-100 scale-110' : 'opacity-40 scale-100'
                }`}></div>
                
                {/* Card Container */}
                <div className="relative w-72 h-96 overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 via-gray-800 to-black shadow-2xl border transition-all duration-500">
                  {/* Dynamic Border */}
                  <div className={`absolute inset-0 rounded-2xl transition-all duration-500 ${
                    hoveredIndex === index 
                      ? 'border-2 border-red-500 shadow-lg shadow-red-500/50' 
                      : 'border border-gray-700'
                  }`}></div>

                  {/* Floating Elements */}
                  {hoveredIndex === index && (
                    <>
                      {[...Array(8)].map((_, i) => (
                        <div
                          key={i}
                          className="absolute h-1 w-1 bg-red-400 rounded-full animate-ping"
                          style={{
                            top: `${15 + i * 10}%`,
                            left: `${10 + i * 10}%`,
                            animationDelay: `${i * 150}ms`,
                          }}
                        />
                      ))}
                    </>
                  )}

                  {/* Status Indicator */}
                  <div className="absolute top-4 right-4 z-10">
                    <div className={`h-3 w-3 rounded-full transition-all duration-500 ${
                      hoveredIndex === index 
                        ? 'bg-red-500 shadow-lg shadow-red-500/50 animate-pulse' 
                        : 'bg-gray-500'
                    }`}></div>
                  </div>
                  
                  {/* Image Container */}
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={`${member.name} - ${member.designation}`}
                      className={`h-full w-full object-cover transition-all duration-700 ${
                        hoveredIndex === index ? 'scale-110 brightness-110' : 'scale-100 brightness-75'
                      }`}
                    />
                    
                    {/* Dynamic Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-t transition-all duration-500 ${
                      hoveredIndex === index 
                        ? 'from-black/60 via-red-900/20 to-transparent' 
                        : 'from-black/90 via-black/50 to-transparent'
                    }`} />

                    {/* Active Border Effects */}
                    {hoveredIndex === index && (
                      <>
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 to-purple-500"></div>
                        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-red-500"></div>
                      </>
                    )}
                  </div>

                  {/* Content Section */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className={`absolute inset-0 rounded-b-2xl transition-all duration-500 ${
                      hoveredIndex === index 
                        ? 'bg-gradient-to-t from-black/95 via-red-900/40 to-transparent' 
                        : 'bg-gradient-to-t from-black/95 via-black/70 to-transparent'
                    }`}></div>
                    
                    <div className={`relative transition-all duration-500 ${
                      hoveredIndex === index ? 'transform translate-y-0' : 'transform translate-y-2'
                    }`}>
                      <h3 className={`text-2xl font-bold mb-2 transition-all duration-500 ${
                        hoveredIndex === index ? 'text-red-100 scale-105' : 'text-white'
                      }`}>
                        {member.name}
                      </h3>
                      <p className={`font-medium tracking-wide transition-all duration-500 ${
                        hoveredIndex === index ? 'text-red-300 text-lg' : 'text-gray-300'
                      }`}>
                        {member.designation}
                      </p>
                    </div>
                    
                    {/* Progress Line */}
                    <div className={`relative h-1 rounded-full mt-4 transition-all duration-500 overflow-hidden ${
                      hoveredIndex === index ? 'bg-red-500/30' : 'bg-gray-700/50'
                    }`}>
                      <div className={`h-full bg-gradient-to-r from-red-500 to-purple-500 rounded-full transition-all duration-700 ${
                        hoveredIndex === index ? 'w-full' : 'w-1/4'
                      }`}></div>
                      {hoveredIndex === index && (
                        <div className="absolute inset-0 bg-gradient-to-r from-red-400 to-purple-400 rounded-full animate-pulse"></div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className={`text-center mt-20 transition-all duration-1000 delay-600 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
            <div className="relative inline-flex items-center gap-4 rounded-2xl p-8 bg-gradient-to-br from-gray-900 to-black border border-red-500 hover:border-red-400 transition-all duration-500 hover:scale-105">
              <div className="h-12 w-12 rounded-full bg-gradient-to-r from-red-500 to-purple-500 flex items-center justify-center animate-bounce">
                <span className="text-2xl">✨</span>
              </div>
              <div className="text-left">
                <h3 className="text-xl font-bold text-white group-hover:text-red-100 transition-colors duration-300">
                  Ready to create something amazing?
                </h3>
                <p className="text-gray-300 group-hover:text-red-200 transition-colors duration-300">
                  Let's bring your vision to life together.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}