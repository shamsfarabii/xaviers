import { useState } from "react";

function PosterImage({
  id,
  hoveredKey,
  onHover,
  src,
  alt,
  wrapperClassName = "",
  anchorClassName = "h-auto w-full",
  zoomOnFocus = false,
  overlay = null,
}) {
  const isHovered = hoveredKey === id;
  const isDimmed = hoveredKey !== null && !isHovered;
  const hasFrame = Boolean(overlay);

  const visibleImageClassName = zoomOnFocus
    ? isHovered
      ? "h-auto w-auto max-h-[120%] max-w-[120%] origin-center scale-110 object-contain brightness-110 shadow-xl shadow-black/50"
      : "h-full w-full origin-center scale-100 object-cover"
    : isHovered
      ? hasFrame
        ? "block h-auto w-auto max-h-full max-w-full object-contain"
        : "h-auto w-auto max-h-full max-w-full scale-110 object-contain brightness-110 shadow-xl shadow-black/50"
      : "h-full w-full scale-100 object-cover";

  const frameWrapperClassName = hasFrame
    ? isHovered
      ? "relative h-auto w-auto origin-center scale-110 brightness-110 shadow-xl shadow-black/50 transition-[transform,filter,box-shadow] duration-300 ease-out"
      : "relative h-full w-full origin-center scale-100 transition-[transform,filter,box-shadow] duration-300 ease-out"
    : "";

  const visibleImage = (
    <img
      src={src}
      alt={alt}
      className={`${visibleImageClassName} transition-[transform,filter,box-shadow] duration-300 ease-out ${
        isDimmed ? "blur-[3px] brightness-50" : ""
      }`}
    />
  );

  return (
    <div
      className={`relative w-full ${wrapperClassName} ${
        isHovered ? "z-30 overflow-visible" : "z-0 overflow-hidden"
      }`}
      onMouseEnter={() => onHover(id)}
    >
      {/* In-flow anchor — preserves original cell height/width in the grid */}
      <img
        src={src}
        alt=""
        aria-hidden="true"
        className={`invisible block object-cover ${anchorClassName}`}
      />

      <div className="absolute inset-0 flex items-center justify-center">
        {hasFrame ? (
          <div className={frameWrapperClassName}>
            {visibleImage}
            <div className="pointer-events-none absolute inset-0 z-10">{overlay}</div>
          </div>
        ) : (
          visibleImage
        )}
      </div>

      {isDimmed && (
        <div className="absolute inset-0 bg-black/30 pointer-events-none transition-opacity duration-300" />
      )}
    </div>
  );
}

export default function Posters() {
  const [hoveredKey, setHoveredKey] = useState(null);

  const posters = [
    "https://xaviers.b-cdn.net/poster_images/Copyofagent.jpg",
    "https://xaviers.b-cdn.net/poster_images/Bangladeshvictoryday.jpg",
    "https://xaviers.b-cdn.net/poster_images/trap.jpg",
    "https://xaviers.b-cdn.net/poster_images/VentureSouqV2.jpg",
  ];

  const reels = [
    "https://xaviers.b-cdn.net/poster_images/Reels/reel_poster1.jpg",
    "https://xaviers.b-cdn.net/poster_images/Reels/reel_poster2.jpg",
  ];

  return (
    <div>
      <div className="bg-transparent py-5 px-4 relative flex items-center justify-center overflow-visible">
        <div
          className="relative z-10 grid grid-cols-1 md:grid-cols-3 md:items-stretch w-full gap-4 md:gap-0 overflow-visible"
          onMouseLeave={() => setHoveredKey(null)}
        >
          {/* Left Column – Thumbnails */}
          <div className="flex flex-col h-full overflow-visible">
            <div className="flex-1 flex flex-col gap-2 overflow-visible md:min-h-0 md:justify-center">
              <PosterImage
                id="thumbnail-0"
                hoveredKey={hoveredKey}
                onHover={setHoveredKey}
                src="https://xaviers.b-cdn.net/poster_images/Thumbnails/unboxing.jpg"
                alt="Thumbnail 1"
                wrapperClassName="aspect-video"
                anchorClassName="h-full w-full"
                overlay={
                  <img
                    src="/whitebox.png"
                    alt=""
                    className="h-full w-full"
                  />
                }
              />

              <PosterImage
                id="thumbnail-1"
                hoveredKey={hoveredKey}
                onHover={setHoveredKey}
                src="https://xaviers.b-cdn.net/poster_images/Thumbnails/4.jpg"
                alt="Thumbnail 2"
                wrapperClassName="aspect-video"
                anchorClassName="h-full w-full"
                overlay={
                  <img
                    src="/whitebox.png"
                    alt=""
                    className="h-full w-full"
                  />
                }
              />
            </div>

            <div className="mt-4 flex items-center relative">
              <div className="ml-[120px]">
                <p className="font-nanum-pen-script text-3xl md:text-4xl text-[#F5EFE2]">
                  Thumbnails
                </p>
              </div>
            </div>
          </div>

          {/* Center Column – Social Media Posters */}
          <div className="flex flex-col h-full mx-0 md:mx-[10px] overflow-visible">
            <div className="flex-grow grid grid-cols-2 grid-rows-2 w-full gap-2 md:gap-[10px] overflow-visible md:min-h-0 md:auto-rows-fr">
              {posters.map((posterImage, posterIndex) => (
                <PosterImage
                  key={posterIndex}
                  id={`poster-${posterIndex}`}
                  hoveredKey={hoveredKey}
                  onHover={setHoveredKey}
                  src={posterImage}
                  alt={`Social Post ${posterIndex}`}
                  wrapperClassName="h-full min-h-0"
                  zoomOnFocus
                />
              ))}
            </div>

            <div className="mt-4 flex items-center justify-center md:justify-start">
              <div className="ml-0 md:ml-12 text-center md:text-left relative">
                <p className="font-nanum-pen-script text-3xl md:text-4xl text-[#F5EFE2] relative">
                  social media poster
                </p>
              </div>
            </div>
          </div>

          {/* Right Column – Reel Thumbnails */}
          <div className="flex flex-col h-full overflow-visible">
            <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 w-full overflow-visible md:min-h-0 md:items-stretch">
              {reels.map((reelImage, reelIndex) => (
                <div
                  key={reelIndex}
                  className="flex min-h-0 items-center justify-center md:h-full"
                >
                  <PosterImage
                    id={`reel-${reelIndex}`}
                    hoveredKey={hoveredKey}
                    onHover={setHoveredKey}
                    src={reelImage}
                    alt={`Reel ${reelIndex}`}
                    wrapperClassName="mx-auto aspect-[9/16] w-full max-w-[280px] md:h-full md:w-auto md:max-w-full"
                    anchorClassName="h-full w-full"
                    zoomOnFocus
                  />
                </div>
              ))}
            </div>

            <div className="mt-4 flex items-center justify-center md:justify-start">
              <div className="ml-0 md:ml-20 text-center md:text-left relative">
                <p className="font-nanum-pen-script text-3xl md:text-4xl text-[#F5EFE2]">
                  Reel thumbnails
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
