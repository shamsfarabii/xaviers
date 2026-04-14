export default function Hero() {
  return (
    <section
      style={{
        minHeight: "100vh",
        background: "#0d0d0d",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: "100px",
        paddingBottom: "60px",
        fontFamily: "'Montserrat', sans-serif",
      }}
    >
      {/* Red Grid Overlay */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(180,0,0,0.18) 1px, transparent 1px),
            linear-gradient(90deg, rgba(180,0,0,0.18) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      {/* Radial vignette on the grid */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse at center, transparent 30%, #0d0d0d 85%)",
          zIndex: 1,
          pointerEvents: "none",
        }}
      />

      {/* Content wrapper */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          maxWidth: "620px",
          padding: "0 24px",
        }}
      >
        {/* X Logo */}
        <img
          src="XaviersLogo.png"
          alt="Xavier's Logo"
          style={{
            width: "88px",
            height: "auto",
            marginBottom: "18px",
            filter: "drop-shadow(0 0 18px rgba(255,255,255,0.12))",
            marginTop: "0",
          }}
        />

        {/* Title Block */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "18px",
            lineHeight: 1.15,
          }}
        >
          <p
            style={{
              margin: 0,
              color: "#ffffff",
              fontSize: "clamp(18px, 4vw, 26px)",
              fontWeight: 600,
              letterSpacing: "0.01em",
            }}
          >
            Your go-to Video
          </p>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
              flexWrap: "wrap",
            }}
          >
            <span
              style={{
                color: "#ffffff",
                fontSize: "clamp(26px, 6vw, 40px)",
                fontWeight: 900,
                fontFamily: "'Montserrat', sans-serif",
                letterSpacing: "-0.01em",
              }}
            >
              Editing
            </span>
            <span
              style={{
                color: "#e03030",
                fontSize: "clamp(32px, 7vw, 50px)",
                fontFamily: "'Nanum Pen Script', cursive",
                fontWeight: 400,
                lineHeight: 1,
              }}
            >
              Team
            </span>
          </div>
        </div>

        {/* Subtitle */}
        <p
          style={{
            color: "rgba(220,220,220,0.78)",
            fontSize: "clamp(13px, 2.5vw, 15.5px)",
            lineHeight: 1.75,
            textAlign: "center",
            maxWidth: "500px",
            margin: "0 0 28px 0",
            fontWeight: 400,
          }}
        >
          We partner with agencies, brands, and creators to scale high-volume
          content without hiring, managing, or operational friction.
        </p>

        {/* Video Embed — proper <video> tag instead of iframe */}
        <div
          style={{
            width: "100%",
            borderRadius: "25px",
            overflow: "hidden",
            boxShadow: "0 8px 48px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.06)",
            position: "relative",
            background: "#111",
          }}
        >
          <video
            style={{
              width: "100%",
              height: "auto",
              display: "block",
              borderRadius: "25px",
            }}
            src="https://xaviers.b-cdn.net/hero-section-video.mp4"
            autoPlay
            loop
            playsInline
            preload="auto"
            controls
          />
        </div>
      </div>

      {/* Google Fonts import via style tag */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;900&family=Nanum+Pen+Script&display=swap');
      `}</style>
    </section>
  );
}
