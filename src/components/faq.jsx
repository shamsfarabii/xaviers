import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

const faqs = [
    {
        question: 'How fast will I receive my edited video?',
        answer:
            'You will receive the first draft within 24 hours of us receiving your raw footage. Rush delivery within 12 hours is also available on request — so you never miss a posting deadline.',
    },
    {
        question: 'What types of content do you edit?',
        answer:
            "We edit everything — YouTube long-form videos, short-form Reels and TikToks, podcast recordings, course content, paid ads, brand promos, and more. If it's video content, we handle it.",
    },
    {
        question: 'How does Pay As You Go pricing work?',
        answer:
            'You only pay per video — no monthly retainers, no contracts, no surprise fees. Submit your footage, approve the edit, then pay. Scale up or down anytime depending on your content volume.',
    },
    {
        question: 'Can I request revisions?',
        answer:
            'Yes, unlimited revisions are included until you are 100% satisfied. Our 2-step quality assurance process already catches most issues before the video even lands in your inbox, but revisions are always there if needed.',
    },
    {
        question: 'What file formats do you accept?',
        answer:
            'We accept all standard video formats — MP4, MOV, MKV, AVI, ProRes, and more. Simply upload your raw footage to Google Drive, Dropbox, or WeTransfer and share the link with your dedicated manager.',
    },
    {
        question: 'Will I have a dedicated editor?',
        answer:
            'Absolutely. Every client gets a dedicated project manager and a hand-picked editing team that studies your brand style, tone, and preferences. The result is consistent, on-brand content every single time.',
    },
    {
        question: 'Is there a minimum number of videos I need to order?',
        answer:
            'No minimum — submit one video or a hundred, completely on your own schedule. Our flexible model is built around your production pace, not ours.',
    },
    {
        question: 'How do I get started?',
        answer:
            "Getting started takes less than 5 minutes. Fill out our contact form or book a quick call, we'll learn your style and set up your account, then you can start submitting footage right away.",
    },
]

function FAQItem({ question, answer, isOpen, onToggle }) {
    return (
        <div
            className='border-b border-white/10 last:border-b-0'
            style={{ borderColor: 'rgba(255,255,255,0.08)' }}
        >
            <button
                onClick={onToggle}
                className='flex w-full items-center justify-between gap-4 py-5 text-left'
            >
                <span
                    style={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontWeight: 700,
                        fontSize: 'clamp(14px, 1.1vw, 17px)',
                        color: isOpen ? '#ef4b2f' : '#ffffff',
                        lineHeight: 1.3,
                        transition: 'color 0.25s',
                    }}
                >
                    {question}
                </span>
                <ChevronDown
                    className='shrink-0 text-[#ef4b2f] transition-transform duration-300'
                    style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                    size={20}
                    strokeWidth={2.5}
                />
            </button>

            <div
                className='overflow-hidden transition-all duration-300 ease-in-out'
                style={{ maxHeight: isOpen ? '400px' : '0px', opacity: isOpen ? 1 : 0 }}
            >
                <p
                    className='py-5 px-2 text-white/70'
                    style={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontWeight: 400,
                        fontSize: 'clamp(13px, 1vw, 15px)',
                        lineHeight: 1.7,
                    }}
                >
                    {answer}
                </p>
            </div>
        </div>
    )
}

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(0)

    const toggle = (index) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    return (
        <section className='w-full bg-[black] text-white'>
            <div
                className='mx-auto w-full max-w-[1280px] px-4 py-12 sm:px-6 sm:py-16 md:px-10 lg:px-12 lg:py-20'
                style={{
                    backgroundImage:
                        'radial-gradient(circle at center, rgba(255,255,255,0.025) 1px, transparent 1px)',
                    backgroundSize: '28px 28px',
                }}
            >
                <div className='mx-auto max-w-[820px]'>
                    <p
                        className='mb-3 text-center text-sm font-semibold uppercase tracking-widest text-[#ef4b2f]'
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                        Got Questions?
                    </p>

                    <h2
                        className='mb-12 text-center uppercase text-white'
                        style={{
                            fontFamily: "'Montserrat', sans-serif",
                            fontWeight: 800,
                            fontSize: 'clamp(28px, 4vw, 44px)',
                            lineHeight: 1.1,
                        }}
                    >
                        Frequently Asked{' '}
                        <span className='text-[#ef4b2f]'>Questions</span>
                    </h2>

                    <div className='rounded-[22px] bg-[black] flex flex-col px-6 py-2 gap-2 sm:px-8'>
                        {faqs.map((faq, index) => (
                            <FAQItem
                                key={index}
                                question={faq.question}
                                answer={faq.answer}
                                isOpen={openIndex === index}
                                onToggle={() => toggle(index)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
