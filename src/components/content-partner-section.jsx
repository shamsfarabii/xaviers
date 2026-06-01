import { Check } from 'lucide-react'
import SectionHeading from './ui/SectionHeading'

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
    <section className="relative min-h-screen overflow-hidden bg-transparent px-5 py-[72px] font-['Plus_Jakarta_Sans',Arial,sans-serif] text-[#F5EFE2] max-[900px]:px-[18px] max-[900px]:py-8">
      <div className="relative z-[1] mx-auto w-full max-w-[1180px]">
        <div className="mx-auto mb-14 max-w-[820px] text-center max-[640px]:mb-9">
          <SectionHeading primary="You've found the" secondary="right partner" />
          <p className="mt-[30px] mx-auto max-w-[650px] text-[15px] uppercase leading-[1.7] tracking-[2px] text-[#9f9f9f] max-[640px]:text-[13px] max-[640px]:tracking-[1.4px]">
            If you are looking for excellence
          </p>
        </div>

        <div className="grid grid-cols-2 gap-[22px] max-[900px]:grid-cols-1">
          {partnerCards.map((card) => (
                <article
                className={`group relative min-h-[245px] overflow-hidden rounded-[22px] border border-transparent bg-[linear-gradient(145deg,rgba(255,255,255,0.07)_0%,rgba(255,255,255,0.03)_55%,rgba(255,90,54,0.025)_100%)] p-6 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.09),0_18px_55px_rgba(0,0,0,0.32)] transition duration-300 before:pointer-events-none before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_top_left,rgba(255,90,54,0.07),transparent_42%),linear-gradient(180deg,rgba(255,255,255,0.03),transparent)] before:opacity-80 hover:-translate-y-2 hover:border-[rgba(255,122,60,0.22)] hover:shadow-[0_28px_80px_rgba(0,0,0,0.35)] hover:after:opacity-100 sm:p-7 lg:p-8`}
              >
              <div className="relative z-[1] mb-6 flex h-[52px] w-[52px] items-center justify-center rounded-[18px] bg-[linear-gradient(135deg,#ff7a3c,#ff3f3f)] shadow-[0_16px_34px_rgba(255,122,60,0.24)]">
                <Check className="h-6 w-6 text-[#F5EFE2]" strokeWidth={2.4} />
              </div>

              <span className="relative z-[1] mb-[13px] inline-flex w-fit rounded-full bg-[rgba(255,122,60,0.10)] px-3 py-2 text-xs font-extrabold uppercase tracking-[1.2px] text-[#ff8a4c]">
                {card.tag}
              </span>

              <h3 className="relative z-[1] mb-3.5 max-w-[480px] text-[clamp(23px,2vw,30px)] font-black leading-[1.12] tracking-[-1.3px] text-[#F5EFE2]">
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
