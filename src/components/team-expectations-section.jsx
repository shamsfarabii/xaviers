export default function TeamExpectationsSection() {
  const features = [
    {
      title: "Flexible support that fits your workflow",
      description:
        "Choose per-video execution or ongoing monthly support, depending on how your content pipeline runs. One team, one system, and a setup that scales with your output.",
      tag: "Workflow",
      icon: "workflow",
    },
    {
      title: "Fast turnaround, built into the process",
      description:
        "Speed is not an afterthought. Your first draft is delivered within 24 hours, while keeping the workflow structured, predictable, and easy to manage.",
      tag: "Speed",
      icon: "clock",
    },
    {
      title: "A dedicated team, not random freelancers",
      description:
        "You get a reliable content partner that understands your style, your delivery standards, and your production needs, so quality stays consistent over time.",
      tag: "Reliability",
      icon: "team",
    },
    {
      title: "Delivery that is reviewed before it reaches you",
      description:
        "Each video goes through a clean review process for edits, captions, and formatting, so you spend less time correcting and more time moving your business forward.",
      tag: "Quality Control",
      icon: "review",
    },
  ];

  return (
    <main className="relative min-h-screen overflow-hidden bg-transparent px-5 py-10 font-sans text-white sm:px-8 lg:px-10">
      <section className="relative z-10 mx-auto flex min-h-[calc(100vh-5rem)] w-full max-w-[1050px] flex-col justify-center">
        <div className="mx-auto mb-12 max-w-[900px] text-center">
          <p className="mb-3 text-[clamp(2.6rem,7vw,4.7rem)] font-black uppercase leading-[0.9] tracking-[-0.06em] text-white drop-shadow-[0_12px_24px_rgba(0,0,0,0.45)]">
            A more modern way
          </p>
          <h1 className="text-[clamp(2.7rem,7vw,4.9rem)] font-black uppercase italic leading-[0.9] tracking-[-0.06em] text-[#ff6a3d] drop-shadow-[0_0_22px_rgba(255,90,54,0.20)]">
            to handle content production
          </h1>
          <p className="mx-auto mt-5 max-w-[720px] text-[0.72rem] font-medium uppercase leading-[1.9] tracking-[0.38em] text-[#aeb3bd] sm:text-xs">
            Built for brands, creators, and agencies that want clean systems, faster delivery, and consistent quality without the chaos of managing freelancers.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          {features.map((item) => (
            <FeatureCard key={item.title} {...item} />
          ))}
        </div>
      </section>
    </main>
  );
}

function FeatureCard({ title, description, tag, icon }) {
  return (
    <article className="group relative min-h-[245px] overflow-hidden rounded-[22px] border border-white/[0.09] bg-[linear-gradient(145deg,rgba(255,255,255,0.07)_0%,rgba(255,255,255,0.03)_55%,rgba(255,90,54,0.025)_100%)] p-6 shadow-[0_18px_55px_rgba(0,0,0,0.32)] backdrop-blur-xl transition duration-300 before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_top_left,rgba(255,90,54,0.07),transparent_42%),linear-gradient(180deg,rgba(255,255,255,0.03),transparent)] before:opacity-80 after:absolute after:inset-0 after:rounded-[22px] after:border after:border-[#ff5a36]/0 after:transition after:duration-300 hover:-translate-y-1 hover:border-[#ff5a36]/22 hover:shadow-[0_24px_70px_rgba(255,90,54,0.05)] hover:after:border-[#ff5a36]/16 sm:p-7 lg:p-8">
      <div className="relative z-10">
        <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-[15px] bg-[#ff5a36] shadow-[0_10px_24px_rgba(255,90,54,0.20)] [&_svg]:h-6 [&_svg]:w-6">
          <CardIcon type={icon} />
        </div>

        <span className="mb-4 inline-flex rounded-full bg-[#ff5a36]/10 px-3 py-1.5 text-[0.66rem] font-black uppercase tracking-[0.08em] text-[#ff8a65]">
          {tag}
        </span>

        <h3 className="mb-4 max-w-[470px] text-[clamp(1.45rem,2.4vw,1.82rem)] font-black leading-[0.98] tracking-[-0.055em] text-white drop-shadow-[0_3px_0_rgba(255,255,255,0.10)]">
          {title}
        </h3>

        <p className="max-w-[520px] text-[0.92rem] leading-[1.75] text-[#c2c6cf]">
          {description}
        </p>
      </div>
    </article>
  );
}

function CardIcon({ type }) {
  const icons = {
    workflow: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 7H18" stroke="white" strokeWidth="2" strokeLinecap="round" />
        <path d="M6 12H14" stroke="white" strokeWidth="2" strokeLinecap="round" />
        <path d="M6 17H10" stroke="white" strokeWidth="2" strokeLinecap="round" />
        <path d="M17 14L20 17L17 20" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M13 17H20" stroke="white" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    clock: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="8" stroke="white" strokeWidth="2" />
        <path d="M12 7.5V12L15.5 14" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M5 4.5L3.5 6" stroke="white" strokeWidth="2" strokeLinecap="round" />
        <path d="M19 4.5L20.5 6" stroke="white" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    team: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="8" r="3" stroke="white" strokeWidth="2" />
        <path d="M6.5 19C7.4 15.8 9.4 14 12 14C14.6 14 16.6 15.8 17.5 19" stroke="white" strokeWidth="2" strokeLinecap="round" />
        <circle cx="5" cy="10" r="2" stroke="white" strokeWidth="1.8" />
        <circle cx="19" cy="10" r="2" stroke="white" strokeWidth="1.8" />
      </svg>
    ),
    review: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7 4H14L18 8V19C18 20.1 17.1 21 16 21H7C5.9 21 5 20.1 5 19V6C5 4.9 5.9 4 7 4Z" stroke="white" strokeWidth="2" strokeLinejoin="round" />
        <path d="M14 4V8H18" stroke="white" strokeWidth="2" strokeLinejoin="round" />
        <path d="M8 13L10 15L14.5 10.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 18H14" stroke="white" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  };

  return icons[type] || icons.workflow;
}
