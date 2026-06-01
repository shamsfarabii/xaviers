import SectionHeading from "./ui/SectionHeading";

export default function Hero() {
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
      <div className="relative z-10 mt-8 w-full max-w-[700px] overflow-hidden rounded-[25px] bg-[#111] shadow-[0_8px_48px_rgba(0,0,0,0.7),0_0_0_1px_rgba(255,255,255,0.06)]">
        <video
          className="block h-auto w-full rounded-[25px]"
          src="https://xaviers.b-cdn.net/videos/hero-section-video.mp4"
          autoPlay
          loop
          playsInline
          controls
        />
      </div>
    </section>
  );
}
