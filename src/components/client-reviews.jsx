import SectionHeading from "./ui/SectionHeading";

const reviews = [
  {
    initials: "SJ",
    name: "Sarah Johnson",
    role: "Brand Owner",
    comment:
      "Xavier's content creation is absolutely phenomenal. The quality and creativity exceeded all my expectations.",
  },
  {
    initials: "MC",
    name: "Michael Chen",
    role: "Marketing Lead",
    comment:
      "Working with Xavier was a game-changer for our brand. The video content drove amazing engagement.",
  },
  {
    initials: "ER",
    name: "Emily Rodriguez",
    role: "Creative Director",
    comment:
      "Professional, creative, and always on time. Xavier's work speaks for itself with outstanding quality.",
  },
  {
    initials: "DT",
    name: "David Thompson",
    role: "Founder",
    comment:
      "The storytelling and visual quality is next level. Xavier transformed our vision into something incredible.",
  },
];

const ClientReviews = () => {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-transparent px-5 py-10 font-[Inter,Arial,sans-serif] text-[#F5EFE2] max-[640px]:items-start max-[640px]:px-4 max-[640px]:py-8">
      <section className="relative z-[1] w-full max-w-[1180px]">
        <div className="mx-auto mb-[54px] max-w-[980px] text-center max-[640px]:mb-[34px]">
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

        <div className="grid grid-cols-1 gap-5 min-[641px]:grid-cols-2 min-[1051px]:grid-cols-4">
          {reviews.map((review) => (
            <article
              key={review.initials}
              className="group relative flex min-h-[360px] flex-col overflow-hidden rounded-[28px] border border-white/[0.09] bg-[linear-gradient(180deg,rgba(255,255,255,0.07),rgba(255,255,255,0.025))] p-[26px] transition duration-300 ease-in-out after:absolute after:inset-x-[-30%] after:bottom-[-50%] after:h-[180px] after:bg-[radial-gradient(ellipse_at_center,rgba(255,122,60,0.09),transparent_72%)] after:opacity-0 after:transition after:duration-300 hover:-translate-y-2 hover:border-[rgba(255,122,60,0.22)] hover:shadow-[0_28px_80px_rgba(0,0,0,0.35)] hover:after:opacity-100 max-[640px]:min-h-0"
            >
              <div className="absolute right-6 top-[22px] text-[70px] font-black leading-none text-[#F5EFE2]/[0.08]">
                “
              </div>

              <div className="relative z-[1] mb-[30px] flex items-center gap-3.5">
                <div className="flex h-[58px] w-[58px] items-center justify-center rounded-[18px] bg-[linear-gradient(135deg,#ff7a3c,#ff3f3f)] font-black text-[#F5EFE2] shadow-[0_16px_34px_rgba(255,122,60,0.24)]">
                  {review.initials}
                </div>

                <div>
                  <h3 className="mb-[5px] text-lg font-extrabold">
                    {review.name}
                  </h3>
                  <span className="text-[13px] text-[#8f8f8f]">
                    {review.role}
                  </span>
                </div>
              </div>

              <p className="relative z-[1] mb-[30px] text-[15px] leading-[1.75] text-[#d7d7d7]">
                {review.comment}
              </p>

              <div className="relative z-[1] mt-auto inline-flex w-fit gap-1 rounded-full bg-[rgba(255,122,60,0.1)] px-3 py-[9px] text-[13px] tracking-[1px] text-[#ff8a4c]">
                ★★★★★
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
};

export default ClientReviews;
