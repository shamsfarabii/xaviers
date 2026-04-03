import React from "react";
import useInView from "../hooks/useInView";

const AllReels = () => {
    const [sectionRef, isVisible] = useInView();

    const reelVideoUrls = [
        "https://www.youtube.com/embed/U_NRW4nRrl8?si=cwJIaOcjEfTQ3odT",
        "https://www.youtube.com/embed/U_NRW4nRrl8?si=cwJIaOcjEfTQ3odT",
    ];

    return (
        <div
            ref={sectionRef}
            className={`bg-[#0e0e0e] flex flex-col md:flex-row gap-[10px] text-white px-8 py-6 font-sans transition-all duration-700 ${
                isVisible ? 'animate-fade-up' : ''
            }`}
        >
            {reelVideoUrls.map((url, idx) => (
                <div
                    key={idx}
                    className="relative aspect-[9/16] w-[280px] sm:w-[320px] md:w-[360px] lg:w-[400px] border-2 border-gray-700 rounded-lg overflow-hidden"
                >
                    {isVisible && (
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
                    )}
                </div>
            ))}
        </div>
    );
};

export default AllReels;
