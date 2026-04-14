import React from 'react';
import useInView from '../../hooks/useInView';

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
  const [sectionRef, isVisible] = useInView();
  const [hoveredIndex, setHoveredIndex] = React.useState(null);

  const getCardTransform = (index) => {
    if (hoveredIndex === null) {
      const offsetX = index * 120;
      return {
        transform: `translateX(${offsetX}px)`,
        zIndex: teamMembers.length - index,
      };
    } else if (hoveredIndex === index) {
      return {
        transform: `translateX(${index * 120}px) translateY(-20px) scale(1.1)`,
        zIndex: 10,
      };
    } else if (index < hoveredIndex) {
      const spacing = (hoveredIndex - index) * 150;
      const offsetX = index * 120 - spacing;
      return {
        transform: `translateX(${offsetX}px) scale(0.95)`,
        zIndex: teamMembers.length - index,
      };
    } else {
      const spacing = (index - hoveredIndex) * 150;
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
        <div className={`text-center mb-16 transition-all duration-700 ${
          isVisible ? 'animate-fade-up' : ''
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

        {/* Mobile View - Vertical Stack */}
        <div className="md:hidden space-y-8">
          {teamMembers.map((member, index) => (
            <div
              key={member.name}
              className="transition-all duration-700 translate-y-0"
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="relative group max-w-sm mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 rounded-2xl blur-xl opacity-40 group-hover:opacity-100 transition-all duration-500"></div>

                <div className="relative w-full h-96 overflow-hidden rounded-2xl shadow-2xl border border-gray-700 group-hover:border-red-500 transition-all duration-500">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={member.image}
                      alt={`${member.name} - ${member.designation}`}
                      className="h-full w-full object-cover transition-all duration-700"
                      
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent group-hover:from-black/60 group-hover:via-red-900/20 transition-all duration-500" />
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="absolute inset-0 rounded-b-2xl bg-gradient-to-t from-black/95 via-black/70 to-transparent group-hover:from-black/95 group-hover:via-red-900/40 transition-all duration-500"></div>
                    <div className="relative">
                      <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-red-100 group-hover:scale-105 transition-all duration-500">
                        {member.name}
                      </h3>
                      <p className="font-medium tracking-wide text-gray-300 group-hover:text-red-300 group-hover:text-lg transition-all duration-500">
                        {member.designation}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop View - Cascading Cards */}
        <div className="hidden md:flex justify-center items-center min-h-[200px] relative ml-34">
          <div
            className="relative w-[600px] lg:w-[700px] h-[450px]"
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
                {/* Glow — only on hover, not continuous */}
                <div className={`absolute inset-0 bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 rounded-2xl blur-xl transition-all duration-500 ${
                  hoveredIndex === index ? 'opacity-100 scale-110' : 'opacity-40 scale-100'
                }`}></div>

                <div className="relative w-72 h-96 overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 via-gray-800 to-black shadow-2xl border transition-all duration-500">
                  <div className={`absolute inset-0 rounded-2xl transition-all duration-500 ${
                    hoveredIndex === index
                      ? 'border-2 border-red-500 shadow-lg shadow-red-500/50'
                      : 'border border-gray-700'
                  }`}></div>

                  {/* Floating ping elements — only render on hover to avoid constant animation */}
                  {hoveredIndex === index && (
                    <>
                      {[0, 1, 2].map((i) => (
                        <div
                          key={i}
                          className="absolute h-1 w-1 bg-red-400 rounded-full animate-ping"
                          style={{
                            top: `${20 + i * 25}%`,
                            left: `${15 + i * 25}%`,
                            animationDelay: `${i * 200}ms`,
                          }}
                        />
                      ))}
                    </>
                  )}

                  <div className="absolute top-4 right-4 z-10">
                    <div className={`h-3 w-3 rounded-full transition-all duration-500 ${
                      hoveredIndex === index
                        ? 'bg-red-500 shadow-lg shadow-red-500/50'
                        : 'bg-gray-500'
                    }`}></div>
                  </div>

                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={member.image}
                      alt={`${member.name} - ${member.designation}`}
                      className={`h-full w-full object-cover transition-all duration-700 ${
                        hoveredIndex === index ? 'scale-110 brightness-110' : 'scale-100 brightness-75'
                      }`}
                      
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t transition-all duration-500 ${
                      hoveredIndex === index
                        ? 'from-black/60 via-red-900/20 to-transparent'
                        : 'from-black/90 via-black/50 to-transparent'
                    }`} />

                    {hoveredIndex === index && (
                      <>
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 to-purple-500"></div>
                        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-red-500"></div>
                      </>
                    )}
                  </div>

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

                    <div className={`relative h-1 rounded-full mt-4 transition-all duration-500 overflow-hidden ${
                      hoveredIndex === index ? 'bg-red-500/30' : 'bg-gray-700/50'
                    }`}>
                      <div className={`h-full bg-gradient-to-r from-red-500 to-purple-500 rounded-full transition-all duration-700 ${
                        hoveredIndex === index ? 'w-full' : 'w-1/4'
                      }`}></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
