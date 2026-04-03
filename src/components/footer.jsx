import useInView from '../hooks/useInView';

export default function Footer() {
  const [sectionRef, isVisible] = useInView();

  return (
    <div
      ref={sectionRef}
      className={`min-h-[200px] flex items-center justify-center transition-all duration-700 ${
        isVisible ? 'animate-fade-up' : ''
      }`}
    >
      {/* Only mount the heavy GIF once the footer is in view */}
      {isVisible && (
        <img
          src="/footer.gif"
          alt="Footer animation"
          className="w-full h-auto"
        />
      )}
    </div>
  );
}
