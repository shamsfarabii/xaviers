import React, { useEffect, useRef, useState } from "react";

const AllReels = () => {
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

    const reelVideoUrls = [
        "https://www.youtube.com/embed/U_NRW4nRrl8?si=cwJIaOcjEfTQ3odT",
        "https://www.youtube.com/embed/U_NRW4nRrl8?si=cwJIaOcjEfTQ3odT",
    ];

    return (
        <div
            ref={sectionRef}
            className={`bg-[#0e0e0e] flex flex-col md:flex-row gap-[10px] text-white px-8 py-6 font-sans transition-all duration-1000 ${isVisible ? 'animate-fade-up opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
        >

            {reelVideoUrls.map((url, idx) => (
                <div
                    key={idx}
                    className="relative aspect-[9/16] w-[280px] sm:w-[320px] md:w-[360px] lg:w-[400px] border-2 border-gray-700 rounded-lg overflow-hidden"
                >
                    <video
                        className="absolute inset-0 w-full h-full object-cover"
                        src="/videos/reel.mp4"
                        loop
                        muted
                        playsInline
                        preload="metadata"
                        onMouseEnter={(e) => e.currentTarget.play()}
                        onMouseLeave={(e) => {
                            e.currentTarget.pause();
                            e.currentTarget.currentTime = 0;
                        }}
                    />
                </div>

            ))}


        </div>
    );
};

export default AllReels;