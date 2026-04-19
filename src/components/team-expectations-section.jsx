import React from 'react'
import {
    BadgeCheck,
    CheckSquare,
    CircleDollarSign,
    ClipboardCheck,
    Clock3,
    UserRoundCog,
} from 'lucide-react'

const expectationItems = [
    {
        icon: <CircleDollarSign className='h-12 w-12 text-[#ef4b2f]' strokeWidth={2.2} />,
        title: 'Pay As You Go Pricing Model',
        description:
            'Our team can take care of all of your editing needs on a pay per video basis. Get upto 100+ content done per month from one single team.',
    },
    {
        icon: <Clock3 className='h-12 w-12 text-[#ef4b2f]' strokeWidth={2.2} />,
        title: 'Super Fast Turnaround Time',
        description:
            'You will receive the first draft for your videos within 24 hours of us receiving your footage.',
    },
    {
        icon: <UserRoundCog className='h-12 w-12 text-[#ef4b2f]' strokeWidth={2.2} />,
        title: 'Dedicated Manager & Editors',
        description:
            'Dedicated project manager and a highly trained editing team that can take care of all your editing needs.',
    },
    {
        icon: <ClipboardCheck className='h-12 w-12 text-[#ef4b2f]' strokeWidth={2.2} />,
        title: '2 Step Quality Assurance Process',
        description:
            'Every video goes through our 2 Step Quality Assurance System to ensure there are zero errors. This saves you hours of time reviewing videos.',
    },
]

const decisionItems = [
    {
        title: 'You Are Frustrated With Unreliable Editors',
        description:
            "You are tired of dealing with editors who miss deadlines, dont follow guidelines and deliver inconsistent work. You have experienced the frustration of receiving low-quality videos that don't meet your expectations or your client's expectations.",
    },
    {
        title: 'You Are Struggling With Fulfillment Bottlenecks',
        description:
            "As your business grows, so does the demand for high-quality video content at scale. But without the right team, resources, and systems in place, it's nearly impossible to keep up with demand. You're constantly facing fulfillment bottlenecks and struggling to deliver quality videos to your clients on time.",
    },
    {
        title: "You're Micromanaging or Doing the Work Yourself",
        description:
            "You know how important it is to get it right. That's why you find yourself micromanaging your editors or doing the work yourself. You're spending too much time correcting mistakes, chasing updates, and handling tasks that should have been taken off your plate.",
    },
    {
        title: 'You Are Tired of Hiring and Firing Unqualified Editors',
        description:
            "You've gone through the exhausting cycle of hiring editors who promise great results but fail to deliver. Finding reliable, skilled editors takes time and money, and constant turnover makes it even harder to build a smooth content workflow.",
    },
]

export default function TeamExpectationsSection() {
    return (
        <section className='w-full bg-[#0d0d0d] text-white'>
            <div
                className='mx-auto w-full max-w-[1280px] px-4 py-8 sm:px-6 sm:py-10 md:px-10 lg:px-12 lg:py-12'
                style={{
                    backgroundImage:
                        'radial-gradient(circle at center, rgba(255,255,255,0.025) 1px, transparent 1px)',
                    backgroundSize: '28px 28px',
                }}
            >
                <div className='mx-auto max-w-[980px]'>
                    <h2
                        className='text-center uppercase text-[#ef4b2f]'
                        style={{
                            fontFamily: "'Montserrat', sans-serif",
                            fontWeight: 800,
                            fontSize: 'clamp(28px, 4vw, 44px)',
                            lineHeight: 1.1,
                        }}
                    >
                        What You Can Expect From Our Team
                    </h2>

                    <div className='mt-8 grid grid-cols-1 gap-5 md:mt-10 md:grid-cols-2 md:gap-6'>
                        {expectationItems.map((item) => (
                            <div
                                key={item.title}
                                className='rounded-[22px] bg-[#0d0d0d] border-2 px-7 py-8 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] md:min-h-[290px] md:px-8 md:py-9'
                            >
                                <div className='mb-6'>{item.icon}</div>

                                <h3
                                    className='text-[#ef4b2f]'
                                    style={{
                                        fontFamily: "'Montserrat', sans-serif",
                                        fontWeight: 800,
                                        fontSize: 'clamp(18px, 1.6vw, 22px)',
                                        lineHeight: 1.15,
                                    }}
                                >
                                    {item.title}
                                </h3>

                                <p
                                    className='mt-3 max-w-[460px] text-white/90'
                                    style={{
                                        fontFamily: "'Montserrat', sans-serif",
                                        fontWeight: 400,
                                        fontSize: 'clamp(13px, 1vw, 15px)',
                                        lineHeight: 1.35,
                                    }}
                                >
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className='pt-12 sm:pt-14 md:pt-16 lg:pt-20'>
                        <h2
                            className='text-center uppercase text-[#ef4b2f]'
                            style={{
                                fontFamily: "'Montserrat', sans-serif",
                                fontWeight: 900,
                                fontSize: 'clamp(28px, 4vw, 44px)',
                                lineHeight: 1.04,
                            }}
                        >
                            This Is The Right Decision If..
                        </h2>

                        <div className='mt-10 grid grid-cols-1 gap-x-12 gap-y-10 md:mt-12 md:grid-cols-2 md:gap-y-12'>
                            {decisionItems.map((item) => (
                                <div key={item.title} className='flex items-start gap-4'>
                                    <div className='mt-1 shrink-0'>
                                        <CheckSquare
                                            className='h-7 w-7 text-[#d8d8d8]'
                                            strokeWidth={1.8}
                                        />
                                    </div>

                                    <div>
                                        <h3
                                            className='text-[#ef4b2f]'
                                            style={{
                                                fontFamily: "'Montserrat', sans-serif",
                                                fontWeight: 800,
                                                fontSize: 'clamp(18px, 1.6vw, 22px)',
                                                lineHeight: 1.18,
                                            }}
                                        >
                                            {item.title}
                                        </h3>

                                        <p
                                            className='mt-5 text-[#dfdfdf]'
                                            style={{
                                                fontFamily: "'Montserrat', sans-serif",
                                                fontWeight: 400,
                                                fontSize: 'clamp(13px, 1vw, 15px)',
                                                lineHeight: 1.65,
                                            }}
                                        >
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}