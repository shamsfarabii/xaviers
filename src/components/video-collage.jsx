import useInView from '../hooks/useInView';

const FRAME_POSITIONS = [
  { left: 1.277, top: 3, width: 41.6, height: 35.917 },
  { left: 82.695, top: 3, width: 17, height: 44 },
  { left: 43.55, top: 3, width: 19, height: 20 },
  { left: 63.0, top: 3, width: 19, height: 20 },
  { left: 43.333, top: 24, width: 38.66, height: 23.127 },
  { left: 1.25, top: 40, width: 18.298, height: 22.61 },
  { left: 20.35, top: 40, width: 22.33, height: 45.11 },
  { left: 43.33, top: 48, width: 28.723, height: 37 },
  { left: 72.55, top: 48, width: 27.22, height: 37 },
  { left: 1.25, top: 63.55, width: 18.511, height: 21.447 },
]

export function VideoCollage({ videoLinks }) {
  const [collageRef, isVisible] = useInView()

  const paddedVideos = [...videoLinks]
  while (paddedVideos.length < FRAME_POSITIONS.length) {
    paddedVideos.push('')
  }

  return (
    <div ref={collageRef} className="mx-auto w-full max-w-[1400px]">
      <div className="relative h-0 w-full pt-[54.96%]">
        <div className="absolute inset-0 bg-[#0e0e0e]">
          {FRAME_POSITIONS.map((frame, index) => {
            const videoLink = paddedVideos[index]

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
                {isVisible && videoLink ? (
                  <video
                    className="absolute inset-0 h-full w-full object-cover"
                    src={videoLink}
                    loop
                    playsInline
                    onMouseEnter={(e) => e.currentTarget.play()}
                    onMouseLeave={(e) => {
                      e.currentTarget.pause()
                      e.currentTarget.currentTime = 0
                    }}
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-neutral-900 text-xs text-white/70">
                    Video {index + 1}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default VideoCollage