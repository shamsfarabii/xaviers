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

  return (
    <div
      ref={sectionRef}
      className="bg-[#0e0e0e] text-white py-16 px-4"
      id="about"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <p className="text-sm font-semibold text-red-400 tracking-wider uppercase mb-4">
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

        {/* Team Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={member.name}
              className={`relative group transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* Gradient Border Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 rounded-3xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
              
              {/* Card Container */}
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-900 to-black shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 border border-red-500">
                {/* Red accent dot in top right */}
                <div className="absolute top-4 right-4 h-3 w-3 rounded-full bg-gradient-to-r from-red-500 to-purple-500 z-10 shadow-lg shadow-red-500/50"></div>
                
                {/* Image Container */}
                <div className="relative h-80 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={`${member.name} - ${member.designation}`}
                    className="h-full w-full object-cover transition-all duration-700 group-hover:scale-110"
                  />
                  
                  {/* Enhanced Dark Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
                </div>

                {/* Content with enhanced dark background */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  {/* Dark background for better text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/80 to-transparent rounded-b-3xl"></div>
                  
                  <div className="relative transform transition-all duration-500 group-hover:translate-y-0 translate-y-2">
                    <h3 className="text-2xl font-bold text-white mb-2 transition-all duration-500 group-hover:scale-105 drop-shadow-lg">
                      {member.name}
                    </h3>
                    <p className="text-white font-medium tracking-wide transition-all duration-500 delay-100 group-hover:opacity-100 group-hover:translate-y-0 opacity-90 translate-y-1 drop-shadow-md">
                      {member.designation}
                    </p>
                  </div>
                  
                  {/* Animated Underline */}
                  <div className="relative h-1 bg-gradient-to-r from-red-500 to-purple-500 rounded-full mt-4 transition-all duration-500 ease-out group-hover:w-full w-0" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className={`text-center mt-20 transition-all duration-1000 delay-600 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="relative group">
            <div className="relative inline-flex items-center gap-4 rounded-2xl p-8 bg-gradient-to-br from-gray-900 to-black border border-red-500">
              <div className="h-12 w-12 rounded-full bg-gradient-to-r from-red-500 to-purple-500 flex items-center justify-center">
                <span className="text-2xl">✨</span>
              </div>
              <div className="text-left">
                <h3 className="text-xl font-bold text-white">Ready to create something amazing?</h3>
                <p className="text-gray-300">Let's bring your vision to life together.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}