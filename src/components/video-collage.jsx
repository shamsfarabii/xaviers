import React from "react";

const FRAME_POSITIONS = [
  // 1
  { left: 1.277, top: 1.163, width: 41.206, height: 35.917 },
  // 2
  { left: 82.695, top: 1.163, width: 16.879, height: 45.607 },
  // 3
  { left: 43.333, top: 2.713, width: 18.511, height: 20.93 },
  // 4
  { left: 63.333, top: 2.713, width: 17.872, height: 20.93 },
  // 5
  { left: 43.333, top: 28.811, width: 38.44, height: 23.127 },
  // 6
  { left: 1.773, top: 44.574, width: 18.298, height: 22.61 },
  // 7
  { left: 21.418, top: 44.574, width: 16.454, height: 44.315 },
  // 8
  { left: 39.433, top: 58.01, width: 28.723, height: 33.85 },
  // 9
  { left: 69.716, top: 58.01, width: 29.362, height: 33.85 },
  // 10
  { left: 1.773, top: 72.481, width: 18.511, height: 21.447 },
];

function extractYoutubeId(videoLink) {
  if (!videoLink) return null;

  const idPattern =
    /(?:v=|youtu\.be\/|embed\/)([a-zA-Z0-9_-]{11})/;

  if (videoLink.length === 11 && !videoLink.includes("http")) {
    return videoLink;
  }

  const match = videoLink.match(idPattern);
  return match ? match[1] : null;
}

export function VideoCollage({ videoLinks }) {
  const paddedVideos = [...(videoLinks || [])];

  while (paddedVideos.length < FRAME_POSITIONS.length) {
    paddedVideos.push(null);
  }

  return (
    <div className="w-full max-w-[1400px] mx-auto ">
      {/* Maintain the original aspect ratio with padding-top trick */}
      <div className="relative w-full h-0 pt-[54.96%]">
        <div className="absolute inset-0 bg-[#0e0e0e]">
          {FRAME_POSITIONS.map((frame, index) => {
            const youtubeId = extractYoutubeId(paddedVideos[index]);

            return (
              <div
                key={index}
                className="absolute overflow-hidden bg-[#0e0e0e]"
                style={{
                  left: `${frame.left}%`,
                  top: `${frame.top}%`,
                  width: `${frame.width}%`,
                  height: `${frame.height}%`,
                }}
              >
                {youtubeId ? (
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
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-neutral-900 text-xs text-white/70">
                    Video {index + 1}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
