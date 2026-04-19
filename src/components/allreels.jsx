import React from "react";
import useInView from "../hooks/useInView";

const AllReels = () => {
    const [sectionRef, isVisible] = useInView();

    const reelVideoUrls = [
        "https://xaviers.b-cdn.net/s1.mp4",
        "https://xaviers.b-cdn.net/s2.mp4",
        "https://xaviers.b-cdn.net/s3.mp4",
        "https://xaviers.b-cdn.net/s4.mp4",
    ];

    return (
        <div
            ref={sectionRef}
            className={`bg-[black] flex flex-col container md:flex-row gap-[10px] text-white px-8 py-6 font-sans transition-all duration-700 ${
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
                            src={url}
                            loop
                            playsInline
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
