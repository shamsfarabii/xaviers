import { YoutubeFrame } from "../youtube-ui/player";

const YouTubeUIClone = () => {
    return (
        <div className="w-full max-w-full overflow-hidden">
            <div className="bg-black w-full mb-4 sm:mb-6">
                <div className="flex items-center justify-between text-white mb-2 sm:mb-4 w-full">
                    <img src="/youtubeTopBar.png" alt="" className="w-full h-auto object-contain" loading="lazy" />
                </div>
                <YoutubeFrame url={"https://pub-0773cdae5b99497fb3555dc89b494881.r2.dev/file.mp4"} />
                <div className="flex items-center justify-between text-white mb-2 sm:mb-4 w-full">
                    <img src="/youtubeBottomBar.png" alt="" className="w-full h-auto object-contain" loading="lazy" />
                </div>
            </div>
            <div className="bg-black w-full">
                <div className="flex items-center justify-between text-white mb-2 sm:mb-4 w-full">
                    <img src="/youtubeTopBar.png" alt="" className="w-full h-auto object-contain" loading="lazy" />
                </div>
                <YoutubeFrame url={"https://pub-0773cdae5b99497fb3555dc89b494881.r2.dev/file.mp4"} />
                <div className="flex items-center justify-between text-white mb-2 sm:mb-4 w-full">
                    <img src="/youtubeBottomBar.png" alt="" className="w-full h-auto object-contain" loading="lazy" />
                </div>
            </div>
        </div>
    );
};

export default YouTubeUIClone;