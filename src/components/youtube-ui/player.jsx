import ReactPlayer from "react-player";

export const YoutubeFrame = ({ url }) => (
    <div className="bg-black overflow-hidden shadow-md border border-gray-700">
        <div className="relative w-full pt-[56.25%]">
            <ReactPlayer
                src={url}
                width="100%"
                height="100%"
                className="absolute top-0 left-0"
                controls={true}
            />
        </div>
    </div>
);