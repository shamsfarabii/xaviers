import { Check } from 'lucide-react'

const partnerCards = [
  {
    tag: 'Pain point',
    title: 'You are spending too much time managing the editing process',
    description:
      'Instead of focusing on growth, you are busy checking revisions, fixing mistakes, repeating feedback, and staying too involved in day-to-day production just to maintain quality.',
  },
  {
    tag: 'Growth challenge',
    title: 'Your content demand is growing faster than your delivery capacity',
    description:
      'As output increases, deadlines tighten and quality starts slipping. You need a system that can keep up with volume without creating fulfillment bottlenecks.',
  },
  {
    tag: 'Reliability',
    title: 'You are done working with editors who miss the mark',
    description:
      'You have already experienced late delivery, inconsistent edits, and unclear communication. Now you want a team that follows direction and delivers work you can trust.',
  },
  {
    tag: 'Long-term fit',
    title: 'You want a partner who understands your brand over time',
    description:
      'Freelancers may complete tasks, but long-term growth needs consistency. A dedicated partner learns your brand, keeps standards aligned, and becomes more efficient with every project.',
  },
]

export default function ContentPartnerSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-transparent px-5 py-[72px] font-['Plus_Jakarta_Sans',Arial,sans-serif] text-white max-[900px]:px-[18px] max-[900px]:py-8">
      <div className="relative z-[1] mx-auto w-full max-w-[1180px]">
        <div className="mx-auto mb-14 max-w-[820px] text-center max-[640px]:mb-9">
          <h2 className="mb-5 text-[clamp(42px,7vw,86px)] font-black uppercase leading-[0.92] tracking-[-4px] text-white max-[640px]:tracking-[-2px]">
            You&apos;ve found the
            <br />
            <span className="inline-block text-[#ff7a3c] italic drop-shadow-[0_0_24px_rgba(255,122,60,0.22)]">
              right partner
            </span>
          </h2>
          <p className="mx-auto max-w-[650px] text-[15px] uppercase leading-[1.7] tracking-[2px] text-[#9f9f9f] max-[640px]:text-[13px] max-[640px]:tracking-[1.4px]">
            If you are looking for excellence
          </p>
        </div>

        <div className="grid grid-cols-2 gap-[22px] max-[900px]:grid-cols-1">
          {partnerCards.map((card) => (
            <article
              key={card.tag}
              className="group relative flex min-h-[285px] flex-col overflow-hidden rounded-[28px] border border-white/[0.09] bg-[linear-gradient(180deg,rgba(255,255,255,0.075),rgba(255,255,255,0.026))] p-[30px] shadow-[0_20px_60px_rgba(0,0,0,0.32)] transition duration-300 ease-in-out before:absolute before:left-0 before:top-0 before:h-px before:w-full before:bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.25)_50%,transparent_100%)] before:opacity-75 after:pointer-events-none after:absolute after:inset-x-[-30%] after:bottom-[-50%] after:h-[200px] after:bg-[radial-gradient(ellipse_at_center,rgba(255,122,60,0.10),transparent_72%)] after:opacity-0 after:transition after:duration-300 hover:-translate-y-2 hover:border-[rgba(255,122,60,0.22)] hover:bg-[linear-gradient(180deg,rgba(255,255,255,0.09),rgba(255,255,255,0.03))] hover:shadow-[0_28px_80px_rgba(0,0,0,0.42),0_0_42px_rgba(255,122,60,0.05)] hover:after:opacity-100 max-[900px]:min-h-0 max-[640px]:p-[25px]"
            >
              <div className="relative z-[1] mb-6 flex h-[52px] w-[52px] items-center justify-center rounded-[18px] bg-[linear-gradient(135deg,#ff7a3c,#ff3f3f)] shadow-[0_16px_34px_rgba(255,122,60,0.24)]">
                <Check className="h-6 w-6 text-white" strokeWidth={2.4} />
              </div>

              <span className="relative z-[1] mb-[13px] inline-flex w-fit rounded-full bg-[rgba(255,122,60,0.10)] px-3 py-2 text-xs font-extrabold uppercase tracking-[1.2px] text-[#ff8a4c]">
                {card.tag}
              </span>

              <h3 className="relative z-[1] mb-3.5 max-w-[480px] text-[clamp(23px,2vw,30px)] font-black leading-[1.12] tracking-[-1.3px] text-white">
                {card.title}
              </h3>

              <p className="relative z-[1] mt-auto text-[15px] leading-[1.78] text-[#b8b8b8]">
                {card.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
