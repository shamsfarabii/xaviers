import React from 'react';
import useInView from '../../hooks/useInView';

const teamMembers = [
  { name: 'Asadul Islam', designation: 'Creative Director', image: '/asad.jpg' },
  { name: 'Nafis Sadeeken', designation: 'CEO', image: '/tomal.jpg' },
  { name: 'Tahasin Bin Faruque', designation: 'Operation Director', image: '/tahasin.jpg' },
];

export default function AboutUsSection() {
  const [sectionRef, isVisible] = useInView();
  const [hoveredIndex, setHoveredIndex] = React.useState(null);

  const getCardTransform = (index) => {
    if (hoveredIndex === null) {
      return {
        transform: `translateX(${index * 120}px)`,
        zIndex: teamMembers.length - index,
      };
    }

    if (hoveredIndex === index) {
      return {
        transform: `translateX(${index * 120}px) translateY(-20px) scale(1.1)`,
        zIndex: 10,
      };
    }

    if (index < hoveredIndex) {
      return {
        transform: `translateX(${index * 120 - (hoveredIndex - index) * 150}px) scale(0.95)`,
        zIndex: teamMembers.length - index,
      };
    }

    return {
      transform: `translateX(${index * 120 + (index - hoveredIndex) * 150}px) scale(0.95)`,
      zIndex: teamMembers.length - index,
    };
  };

  return (
    <div
      ref={sectionRef}
      className="bg-transparent text-[#F5EFE2] py-8 px-4 overflow-hidden"
      id="about"
    >
      <div className="max-w-7xl mx-auto">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'animate-fade-up' : ''
          }`}
        >
                    <div
            className="
    mb-6 inline-flex items-center gap-2 rounded-full
    border border-[rgba(255,122,60,0.26)]
    bg-[rgba(255,122,60,0.08)]
    px-3.5 py-2
    text-xs font-extrabold uppercase tracking-[1.8px]
    text-[#ff8a4c]
    before:h-[7px] before:w-[7px] before:rounded-full
    before:bg-[#ff7a3c]
    before:shadow-[0_0_18px_rgba(255,122,60,0.9)]

    transition-all duration-300 ease-out
    hover:-translate-y-1 hover:scale-[1.03]
    hover:shadow-[0_8px_24px_rgba(255,122,60,0.18)]
    hover:border-[rgba(255,122,60,0.4)]
  "
          >
            Meet the Team
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-[#F5EFE2] mb-6">
            About <span className="text-[#ff7a3c]">Us</span>
          </h2>

          <div className="h-1 w-24 bg-[linear-gradient(135deg,#ff7a3c,#ff5a2a)] mx-auto rounded-full mb-8" />

          <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            We are a passionate team of creative professionals dedicated to bringing your vision to life through innovative design and artistic excellence.
          </p>
        </div>

        <div className="md:hidden space-y-8">
          {teamMembers.map((member, index) => (
            <div
              key={member.name}
              className="transition-all duration-700 translate-y-0"
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="relative group max-w-sm mx-auto">
                <div className="absolute inset-0 bg-[#ff7a3c] rounded-2xl blur-2xl opacity-0 group-hover:opacity-25 transition-opacity duration-500" />

                <div className="relative w-full h-96 overflow-hidden rounded-2xl shadow-2xl border border-white/[0.09] group-hover:border-[#ff7a3c]/50 transition-all duration-500 bg-black">
                  <div className="relative h-full overflow-hidden">
                    <img
                      src={member.image}
                      alt={`${member.name} - ${member.designation}`}
                      className="h-full w-full object-contain transition-all duration-700"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent group-hover:from-black/75 group-hover:via-black/30 transition-all duration-500" />
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="absolute inset-0 rounded-b-2xl bg-gradient-to-t from-black/95 via-black/70 to-transparent group-hover:from-black/95 group-hover:via-black/65 transition-all duration-500" />

                    <div className="relative">
                      <h3 className="text-2xl font-bold mb-2 text-[#F5EFE2] group-hover:scale-105 transition-all duration-500">
                        {member.name}
                      </h3>

                      <p className="font-medium tracking-wide text-gray-300 group-hover:text-[#ff8a4c] group-hover:text-lg transition-all duration-500">
                        {member.designation}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

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
                <div
                  className={`absolute inset-0 bg-[#ff7a3c] rounded-2xl blur-2xl transition-opacity duration-500 ${
                    hoveredIndex === index ? 'opacity-25' : 'opacity-0'
                  }`}
                />

                <div className="relative w-72 h-96 overflow-hidden rounded-2xl bg-black shadow-2xl border transition-all duration-500">
                  <div
                    className={`absolute inset-0 rounded-2xl transition-all duration-500 ${
                      hoveredIndex === index
                        ? 'border border-[#ff7a3c]/50 shadow-md shadow-[#ff7a3c]/15'
                        : 'border border-white/[0.09]'
                    }`}
                  />

                  <div className="absolute top-4 right-4 z-10">
                    <div
                      className={`h-3 w-3 rounded-full transition-all duration-500 ${
                        hoveredIndex === index
                          ? 'bg-[#ff7a3c] shadow-lg shadow-[#ff7a3c]/60'
                          : 'bg-white/30'
                      }`}
                    />
                  </div>

                  <div className="relative h-full overflow-hidden">
                    <img
                      src={member.image}
                      alt={`${member.name} - ${member.designation}`}
                      className={`h-full w-full object-contain transition-all duration-700 ${
                        hoveredIndex === index
                          ? 'scale-105 brightness-110'
                          : 'scale-100 brightness-75'
                      }`}
                    />

                    <div
                      className={`absolute inset-0 bg-gradient-to-t transition-all duration-500 ${
                        hoveredIndex === index
                          ? 'from-black/70 via-black/30 to-transparent'
                          : 'from-black/90 via-black/35 to-transparent'
                      }`}
                    />
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div
                      className={`absolute inset-0 rounded-b-2xl transition-all duration-500 ${
                        hoveredIndex === index
                          ? 'bg-gradient-to-t from-black/95 via-black/65 to-transparent'
                          : 'bg-gradient-to-t from-black/95 via-black/70 to-transparent'
                      }`}
                    />

                    <div
                      className={`relative transition-all duration-500 ${
                        hoveredIndex === index
                          ? 'transform translate-y-0'
                          : 'transform translate-y-2'
                      }`}
                    >
                      <h3 className="text-2xl font-bold mb-2 transition-all duration-500 text-[#F5EFE2]">
                        {member.name}
                      </h3>

                      <p
                        className={`font-medium tracking-wide transition-all duration-500 ${
                          hoveredIndex === index
                            ? 'text-[#ff8a4c] text-lg'
                            : 'text-gray-300'
                        }`}
                      >
                        {member.designation}
                      </p>
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