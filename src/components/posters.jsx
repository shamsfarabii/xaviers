export default function Posters() {
    const posters = [
      "https://xaviers.b-cdn.net/Copy%20of%20agent.jpg",
      "https://xaviers.b-cdn.net/Bangladesh%20victory%20day.jpg",
      "https://xaviers.b-cdn.net/trap.jpg",
      "https://xaviers.b-cdn.net/Copy%20of%20agent2.jpg",
    ];
  
    const reels = [
      "https://xaviers.b-cdn.net/poster_reel_1.jpg",
      "https://xaviers.b-cdn.net/poster_reel_2.jpg",
    ];
  
    return (
      <div>
        <div className="flex justify-between">
          <img
            src="https://xaviers.b-cdn.net/1230%20(2).gif"
            className="w-full"
            alt="Hero Image"
          />
        </div>
  
        <div className="bg-[#0e0e0e] py-5 px-4 relative flex items-center justify-center">
          {/* Background mask overlays */}
          <div className="absolute inset-0 hidden md:flex justify-between items-center pointer-events-none z-0">
            <img
              src="/MaskLeft.png"
              alt=""
              className="h-[450px] lg:h-[650px] object-contain"
            />
            <img
              src="/MaskRight.png"
              alt=""
              className="h-[350px] lg:h-[650px] object-contain"
            />
          </div>
  
          {/* Main content grid */}
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 w-full gap-4 md:gap-0">
            {/* Left Column – Thumbnails */}
            <div className="flex flex-col h-full">
              <div className="flex-1 flex flex-col gap-2">
                <div className="relative w-full aspect-video">
                  <img
                    src="https://xaviers.b-cdn.net/unboxing.jpg"
                    alt="Thumbnail 1"
                    className="w-full h-full"
                  />
                  <img
                    src="/whitebox.png"
                    alt=""
                    className="absolute inset-0 w-full h-full z-10 pointer-events-none"
                  />
                </div>
  
                <div className="relative w-full aspect-video">
                  <img
                    src="https://xaviers.b-cdn.net/4.jpg"
                    alt="Thumbnail 2"
                    className="w-full h-full"
                  />
                  <img
                    src="/whitebox.png"
                    alt=""
                    className="absolute inset-0 w-full h-full z-10 pointer-events-none"
                  />
                </div>
              </div>
  
              <div className="mt-4 flex items-center">
                <img
                  src="/POsterArrow.gif"
                  alt="Arrow"
                  className="w-12 h-12 md:w-16 md:h-16"
                />
                <div className="ml-2">
                  <p className="font-nanum-pen-script text-3xl md:text-4xl text-white">
                    Thumbnails
                  </p>
                  <img
                    src="/RedSpot.gif"
                    alt=""
                    className="h-4 md:h-6 ml-4"
                  />
                </div>
              </div>
            </div>
  
            {/* Center Column – Social Media Posters */}
            <div className="flex flex-col h-full mx-0 md:mx-[10px]">
              <div className="flex-grow grid grid-cols-2 w-full gap-2 md:gap-[10px]">
                {posters.map((posterImage, posterIndex) => (
                  <div key={posterIndex}>
                    <img
                      src={posterImage}
                      alt={`Social Post ${posterIndex}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
  
              <div className="mt-4 flex items-center justify-center md:justify-start">
                <div className="ml-0 md:ml-12 text-center md:text-left">
                  <p className="font-nanum-pen-script text-3xl md:text-4xl text-white relative">
                    social media poster
                  </p>
                  {/* <img src="/mark.png" alt="" className="absolute top-0 right-10 w-full z-50" /> */}
                </div>
                <img
                  src="/POsterArrow.gif"
                  alt="Arrow"
                  className="w-12 h-12 md:w-16 md:h-16 rotate-360 scale-x-[-1] ml-2"
                />
              </div>
            </div>
  
            {/* Right Column – Reel Thumbnails */}
            <div className="flex flex-col h-full">
              <div className="flex-1 grid grid-cols-2 gap-2 md:gap-4 w-full">
                {reels.map((reelImage, reelIndex) => (
                  <div key={reelIndex} className="overflow-hidden">
                    <img
                      src={reelImage}
                      alt={`Reel ${reelIndex}`}
                      className="w-full h-137 object-cover"
                    />
                  </div>
                ))}
              </div>
  
              <div className="mt-4 flex items-center justify-center md:justify-start">
                <div className="ml-0 md:ml-20 text-center md:text-left">
                  <p className="font-nanum-pen-script text-3xl md:text-4xl text-white">
                    Reel thumbnails
                  </p>
                  <img
                    src="/RedSpot.gif"
                    alt=""
                    className="h-3 mx-auto md:mx-0"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }