import SectionHeading from "./ui/SectionHeading";

const reviews = [
  {
    src: "/review1.png",
    alt: "Client review — 5.0 stars: A S M Nafis has been amazing to work with. His work ethic, creativity, and commitment were outstanding.",
  },
  {
    src: "/review2.png",
    alt: "Client review — 5.0 stars, Jun 25 2024: Working with ASM Nafis has been awesome. Professional, adaptable, and knowledgeable video editor.",
  },
  {
    src: "/review3.png",
    alt: "Client review — 5.0 stars: A S M Nafis has been awesome. Endorsed for Committed to Quality and Collaborative.",
  },
];

const marqueeReviews = [...reviews, ...reviews];

const ReviewCard = ({ review, index, layout = "marquee" }) => (
  <article
    className={`relative flex flex-col overflow-hidden rounded-[24px] border-2 border-[rgba(255,122,60,0.45)] bg-[#fafafa] shadow-[0_24px_64px_rgba(0,0,0,0.45),0_0_24px_rgba(255,122,60,0.12)] ${
      layout === "marquee" ? "w-[min(88vw,760px)] shrink-0" : "w-full"
    }`}
  >
    <div className="flex items-center justify-between gap-4 border-b border-[#ececec] px-6 py-4 max-[640px]:px-4 max-[640px]:py-3">
      <div className="flex items-center gap-3">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[linear-gradient(135deg,#ff7a3c,#ff3f3f)] text-sm font-black text-white shadow-[0_8px_20px_rgba(255,122,60,0.35)]">
          {index + 1}
        </span>
        <div>
          <p className="text-[11px] font-bold uppercase tracking-[2px] text-[#8a8a8a]">
            Verified Client Review
          </p>
          <p className="text-sm font-extrabold text-[#1a1a1a]">Client&apos;s review</p>
        </div>
      </div>

      <div className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[rgba(255,122,60,0.1)] px-3.5 py-1.5">
        <span className="text-[13px] tracking-[1px] text-[#ff7a3c]">★★★★★</span>
        <span className="text-sm font-extrabold text-[#ff7a3c]">5.0</span>
      </div>
    </div>

    <div className="flex items-center justify-center bg-[#f5f5f5] px-8 py-10 max-[640px]:px-5 max-[640px]:py-7">
      <img
        src={review.src}
        alt={review.alt}
        className={`mx-auto w-full rounded-[12px] object-contain [image-rendering:-webkit-optimize-contrast] ${
          layout === "marquee" ? "min-w-[620px] max-w-none max-[640px]:min-w-0" : ""
        }`}
        loading="lazy"
        decoding="async"
      />
    </div>
  </article>
);

const ClientReviews = () => {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-transparent px-0 py-16 font-[Inter,Arial,sans-serif] text-[#F5EFE2] max-[640px]:py-10">
      <style>{`
        @keyframes review-marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }

        @media (min-width: 641px) {
          .review-marquee-track {
            animation: review-marquee 36s linear infinite;
            will-change: transform;
          }

          .review-marquee:hover .review-marquee-track {
            animation-play-state: paused;
          }
        }
      `}</style>

      <section className="relative z-[1] w-full">
        <div className="mx-auto mb-16 max-w-[980px] px-5 text-center max-[640px]:mb-10 max-[640px]:px-4">
          <div
            className="
    mb-6 inline-flex items-center gap-2 rounded-full
    border border-[rgba(255,122,60,0.26)]
    bg-[rgba(255,122,60,0.08)]
    px-3.5 py-2
    text-xs font-extrabold uppercase tracking-[1.8px]
    text-[#ff8a4c]
    before:h-[7px] before:w-[7px] before:rounded-full
    before:bg-[#ff7a3c]
    before:shadow-[0_0_18px_rgba(255,122,60,0.9)]

    transition-all duration-300 ease-out
    hover:-translate-y-1 hover:scale-[1.03]
    hover:shadow-[0_8px_24px_rgba(255,122,60,0.18)]
    hover:border-[rgba(255,122,60,0.4)]
  "
          >
            Client Stories
          </div>

          <SectionHeading primary="People don't just hire us." noWrap secondary="They trust us" />

          <p className="mt-[30px] mx-auto text-[13px] uppercase leading-[1.7] tracking-[9px] text-[#6f7890] max-[660px]:text-[11px]">
            FROM BRANDS TO CREATORS,OUR CLIENTS RELY ON US.
          </p>
        </div>

        <div className="mx-auto flex max-w-[640px] flex-col gap-6 px-4 min-[641px]:hidden">
          {reviews.map((review, index) => (
            <ReviewCard key={review.src} review={review} index={index} layout="static" />
          ))}
        </div>

        <div className="review-marquee relative hidden w-full overflow-hidden py-2 min-[641px]:block">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-48 bg-[linear-gradient(to_right,#050302_0%,rgba(5,3,2,0.92)_18%,rgba(5,3,2,0.65)_42%,rgba(5,3,2,0.28)_68%,transparent_100%)] min-[901px]:w-56" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-48 bg-[linear-gradient(to_left,#050302_0%,rgba(5,3,2,0.92)_18%,rgba(5,3,2,0.65)_42%,rgba(5,3,2,0.28)_68%,transparent_100%)] min-[901px]:w-56" />

          <div className="review-marquee-track flex w-max items-stretch gap-10 px-8">
            {marqueeReviews.map((review, index) => (
              <ReviewCard
                key={`${review.src}-${index}`}
                review={review}
                index={index % reviews.length}
                layout="marquee"
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default ClientReviews;
