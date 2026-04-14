import React from "react";
import useInView from "../hooks/useInView";
import { YoutubeFrame } from "./youtube-ui/player";

const AllVideos = () => {
    const [sectionRef, isVisible] = useInView();

    return (
        <div
            ref={sectionRef}
            className={`bg-[#0e0e0e] text-white px-8 py-6 font-sans transition-all duration-700 ${
                isVisible ? 'animate-fade-up' : ''
            }`}
        >
            <div className="grid grid-cols-2 gap-[10px]">
                <div className="bg-black w-full">
                    <div className="flex items-center justify-between text-white mb-2 sm:mb-4 w-full">
                        <img src="/youtubeTopBar.png" alt="" className="w-full h-auto object-contain"  />
                    </div>
                    <YoutubeFrame url={"https://xaviers.b-cdn.net/l2.mp4"} />
                    <div className="flex items-center justify-between text-white mb-2 sm:mb-4 w-full">
                        <img src="/youtubeBottomBar.png" alt="" className="w-full h-auto object-contain"  />
                    </div>
                </div>
                <div className="bg-black w-full">
                    <div className="flex items-center justify-between text-white mb-2 sm:mb-4 w-full">
                        <img src="/youtubeTopBar.png" alt="" className="w-full h-auto object-contain" />
                    </div>
                    <YoutubeFrame url={"https://xaviers.b-cdn.net/l3.mp4"} />
                    <div className="flex items-center justify-between text-white mb-2 sm:mb-4 w-full">
                        <img src="/youtubeBottomBar.png" alt="" className="w-full h-auto object-contain"  />
                    </div>
                </div>
                <div className="bg-black w-full">
                    <div className="flex items-center justify-between text-white mb-2 sm:mb-4 w-full">
                        <img src="/youtubeTopBar.png" alt="" className="w-full h-auto object-contain"  />
                    </div>
                    <YoutubeFrame url={"https://xaviers.b-cdn.net/l4.mp4"} />
                    <div className="flex items-center justify-between text-white mb-2 sm:mb-4 w-full">
                        <img src="/youtubeBottomBar.png" alt="" className="w-full h-auto object-contain"  />
                    </div>
                </div>
                <div className="bg-black w-full">
                    <div className="flex items-center justify-between text-white mb-2 sm:mb-4 w-full">
                        <img src="/youtubeTopBar.png" alt="" className="w-full h-auto object-contain" />
                    </div>
                    <YoutubeFrame url={"https://xaviers.b-cdn.net/l5.mp4"} />
                    <div className="flex items-center justify-between text-white mb-2 sm:mb-4 w-full">
                        <img src="/youtubeBottomBar.png" alt="" className="w-full h-auto object-contain"  />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllVideos;
