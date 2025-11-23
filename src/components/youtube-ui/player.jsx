export const YoutubeFrame = ({ url }) => {
    const handleMouseEnter = (e) => {
        e.currentTarget.play();
    };

    const handleMouseLeave = (e) => {
        e.currentTarget.pause();
        e.currentTarget.currentTime = 0;
    };

    return (
        <div className="bg-black overflow-hidden shadow-md border border-gray-700 w-full max-w-full">
            <div className="relative w-full pt-[56.25%]">
                <video
                    src={url}
                    width="100%"
                    height="100%"
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    muted
                    loop
                    playsInline
                />
            </div>
        </div>
    );
};
