import React from 'react';
import { useState } from 'react';

interface TeamMemberCardProps {
  name: string;
  designation: string;
  image: string;
  animationType: 'float' | 'scale' | 'slide';
  delay?: number;
}

export const TeamMemberCard = ({ 
  name, 
  designation, 
  image, 
  animationType,
  delay = 0 
}: TeamMemberCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const getAnimationClass = () => {
    switch (animationType) {
      case 'float':
        return 'animate-float';
      case 'scale':
        return 'animate-scale-in';
      case 'slide':
        return 'animate-slide-up';
      default:
        return 'animate-fade-in';
    }
  };

  const getHoverTransform = () => {
    switch (animationType) {
      case 'float':
        return 'hover:scale-105';
      case 'scale':
        return 'hover:scale-105';
      case 'slide':
        return 'hover:scale-105';
      default:
        return 'hover:scale-105';
    }
  };

  return (
    <div 
      className={`group relative ${getAnimationClass()}`}
      style={{ animationDelay: `${delay}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`
        relative overflow-hidden rounded-3xl bg-card shadow-elegant
        transition-all duration-500 ease-out
        ${getHoverTransform()}
        ${isHovered ? 'shadow-creative' : ''}
      `}>
        {/* Image Container */}
        <div className="relative h-80 overflow-hidden">
          <img 
            src={image} 
            alt={`${name} - ${designation}`}
            className={`
              h-full w-full object-cover transition-all duration-700
              ${isHovered ? 'scale-110' : 'scale-100'}
            `}
          />
          
          {/* Gradient Overlay */}
          <div className={`
            absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent
            transition-opacity duration-500
            ${isHovered ? 'opacity-80' : 'opacity-40'}
          `} />
          
          {/* Creative Accent */}
          <div className={`
            absolute top-4 right-4 h-3 w-3 rounded-full bg-gradient-creative
            transition-all duration-500
            ${isHovered ? 'scale-150 shadow-creative' : 'scale-100'}
          `} />
        </div>

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <div className={`
            transform transition-all duration-500
            ${isHovered ? 'translate-y-0' : 'translate-y-2'}
          `}>
            <h3 className={`
              text-2xl font-bold text-white mb-2
              transition-all duration-500
              ${isHovered ? 'scale-105' : 'scale-100'}
            `}>
              {name}
            </h3>
            <p className={`
              text-white/90 font-medium tracking-wide
              transition-all duration-500 delay-100
              ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-80 translate-y-1'}
            `}>
              {designation}
            </p>
          </div>
          
          {/* Animated Underline */}
          <div className={`
            h-1 bg-gradient-creative rounded-full mt-4
            transition-all duration-500 ease-out
            ${isHovered ? 'w-full' : 'w-0'}
          `} />
        </div>
      </div>
    </div>
  );
};