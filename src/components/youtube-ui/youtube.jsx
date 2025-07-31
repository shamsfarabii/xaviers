import React from "react";
import { YoutubeFrame } from "../youtube-ui/player";

const YouTubeUIClone = () => {
    return (
        <div>
            <div className="bg-black">
                <div className="flex items-center justify-between text-white mb-4">
                    <img src="/youtubeTopBar.png" alt="" />
                </div>
                <YoutubeFrame url={"/videos/file.mp4"} />
                <div className="flex items-center justify-between text-white mb-4">
                    <img src="/youtubeBottomBar.png" alt="" />
                </div>
            </div>
            <div className="bg-black">
                <div className="flex items-center justify-between text-white mb-4">
                    <img src="/youtubeTopBar.png" alt="" />
                </div>
                <YoutubeFrame url={"/videos/file.mp4"} />
                <div className="flex items-center justify-between text-white mb-4">
                    <img src="/youtubeBottomBar.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default YouTubeUIClone;