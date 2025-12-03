import React, { useEffect, useRef, useState } from "react";
import { YoutubeFrame } from "./youtube-ui/player";

const AllVideos = () => {
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
            className={`bg-[#0e0e0e] text-white px-8 py-6 font-sans transition-all duration-1000 ${isVisible ? 'animate-fade-up opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
        >
            <div className={`flex flex-col md:flex-row gap-[10px] transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}>
                    <div className="bg-black w-full">
                        <div className="flex items-center justify-between text-white mb-2 sm:mb-4 w-full">
                            <img src="/youtubeTopBar.png" alt="" className="w-full h-auto object-contain" />
                        </div>
                        <YoutubeFrame url={"/videos/file.mp4"} />
                        <div className="flex items-center justify-between text-white mb-2 sm:mb-4 w-full">
                            <img src="/youtubeBottomBar.png" alt="" className="w-full h-auto object-contain" />
                        </div>
                    </div>
                    <div className="bg-black w-full">
                        <div className="flex items-center justify-between text-white mb-2 sm:mb-4 w-full">
                            <img src="/youtubeTopBar.png" alt="" className="w-full h-auto object-contain" />
                        </div>
                        <YoutubeFrame url={"/videos/file.mp4"} />
                        <div className="flex items-center justify-between text-white mb-2 sm:mb-4 w-full">
                            <img src="/youtubeBottomBar.png" alt="" className="w-full h-auto object-contain" />
                        </div>
                    </div>
            </div>
        </div>
    );
};

export default AllVideos;