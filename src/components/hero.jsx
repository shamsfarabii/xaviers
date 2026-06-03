import { useCallback, useEffect, useRef, useState } from "react";
import SectionHeading from "./ui/SectionHeading";
import VideoLoader from "./ui/VideoLoader";

export default function Hero() {
  const videoRef = useRef(null);
  const [isVideoReady, setIsVideoReady] = useState(false);

  const markVideoReady = useCallback(() => {
    setIsVideoReady(true);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (video.readyState >= HTMLMediaElement.HAVE_FUTURE_DATA) {
      setIsVideoReady(true);
      return;
    }

    video.addEventListener("canplay", markVideoReady);
    video.addEventListener("error", markVideoReady);

    return () => {
      video.removeEventListener("canplay", markVideoReady);
      video.removeEventListener("error", markVideoReady);
    };
  }, [markVideoReady]);

  return (
    <section
      className={[
        "relative flex flex-col min-h-[90vh] bg-transparent items-center justify-center overflow-hidden px-[18px] py-[60px] text-center font-['Plus_Jakarta_Sans',sans-serif]",
        "md:min-h-screen md:px-6 md:py-20",
      ].join(" ")}
    >
      <div className="relative z-10 max-w-[1180px]">
        <SectionHeading primary="Your Go-To" secondary="Video Editing Team" />

        <p className="mt-[30px] mx-auto max-w-[700px] text-[15px] uppercase leading-[1.7] tracking-[2px] text-[#9f9f9f] max-[640px]:text-[13px] max-[720px]:tracking-[1.2px]">
          We partner with agencies, brands and creators to scale high-volume
          content without hiring, managing, or operational friction.
        </p>
      </div>
      <div className="relative z-10 mt-8 aspect-video w-full max-w-[700px] overflow-hidden rounded-[25px] bg-[#111] shadow-[0_8px_48px_rgba(0,0,0,0.7),0_0_0_1px_rgba(255,255,255,0.06)]">
        {!isVideoReady && (
          <div
            className="absolute inset-0 z-10 flex items-center justify-center bg-[radial-gradient(ellipse_at_center,rgba(255,122,60,0.07)_0%,#111_65%)]"
            aria-busy="true"
          >
            <VideoLoader />
          </div>
        )}
        <video
          ref={videoRef}
          className={[
            "block h-full w-full rounded-[25px] object-cover transition-opacity duration-300",
            isVideoReady ? "opacity-100" : "opacity-0",
          ].join(" ")}
          src="https://xaviers.b-cdn.net/videos/hero-section-video.mp4"
          autoPlay
          playsInline
          controls
          preload="auto"
        />
      </div>
    </section>
  );
}
