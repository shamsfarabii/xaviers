export default function Hero() {
  return (
    <section
      className={[
        "relative flex flex-col min-h-[90vh] bg-transparent items-center justify-center overflow-hidden px-[18px] py-[60px] text-center font-['Plus_Jakarta_Sans',sans-serif]",
        "md:min-h-screen md:px-6 md:py-20",
      ].join(" ")}
    >
      <div className="relative z-10 max-w-[1180px]">
        <h1 className="text-[clamp(48px,8.8vw,118px)] font-black uppercase leading-[0.9] tracking-[-0.055em] md:tracking-[-0.07em]">
          <span className="block text-white">Your Go-To</span>
          <span className="block text-[#ff7038] drop-shadow-[0_0_54px_rgba(255,112,56,0.85)]">
            <em className="inline-block -skew-x-6 [font-style:italic]">
              Video Editing Team
            </em>
          </span>
        </h1>

        <p className="mx-auto mt-[30px] max-w-[920px] text-[clamp(11px,1.25vw,16px)] font-medium uppercase leading-[1.7] tracking-[0.14em] text-white/70 md:leading-[1.8] md:tracking-[0.24em]">
          We partner with agencies, brands and creators to scale high-volume
          content without hiring, managing, or operational friction.
        </p>
      </div>
      <div className="relative z-10 mt-8 w-full max-w-[700px] overflow-hidden rounded-[25px] bg-[#111] shadow-[0_8px_48px_rgba(0,0,0,0.7),0_0_0_1px_rgba(255,255,255,0.06)]">
        <video
          className="block h-auto w-full rounded-[25px]"
          src="https://xaviers.b-cdn.net/videos/hero-section-video.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          controls
        />
      </div>
    </section>
  );
}
