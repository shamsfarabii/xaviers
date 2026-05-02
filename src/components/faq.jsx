import { Plus, X } from 'lucide-react'
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
            className='rounded-[14px] bg-[#f5efe2] shadow-[0_2px_0_rgba(0,0,0,0.04)] transition-all duration-300'
            style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
            <button
                onClick={onToggle}
                className='flex w-full items-start justify-between gap-4 border-0 bg-transparent px-5 py-4 text-left outline-none sm:px-7 sm:py-5'
                style={{ background: 'transparent' }}
            >
                <span
                    className='pt-1 font-bold text-[#1a1a1a]'
                    style={{
                        fontSize: 'clamp(14px, 1.05vw, 16px)',
                        lineHeight: 1.4,
                    }}
                >
                    {question}
                </span>

                <span
                    aria-hidden='true'
                    className='flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#ff7a3c] text-white shadow-[0_2px_8px_rgba(255,122,60,0.4)] transition-transform duration-300'
                >
                    {isOpen ? (
                        <X size={16} strokeWidth={3} />
                    ) : (
                        <Plus size={16} strokeWidth={3} />
                    )}
                </span>
            </button>

            <div
                className='grid overflow-hidden transition-[grid-template-rows,opacity] duration-300 ease-in-out'
                style={{
                    gridTemplateRows: isOpen ? '1fr' : '0fr',
                    opacity: isOpen ? 1 : 0,
                }}
            >
                <div className='min-h-0 overflow-hidden'>
                    <p
                        className='px-5 pb-5 text-[#5a5a5a] sm:px-7 sm:pb-6'
                        style={{
                            fontSize: 'clamp(13px, 0.95vw, 14px)',
                            lineHeight: 1.7,
                            fontWeight: 400,
                            marginTop: "15px"
                        }}
                    >
                        {answer}
                    </p>
                </div>
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
        <section className='w-full bg-transparent text-white'>
            <div className='mx-auto w-full max-w-[1280px] px-4 py-12 sm:px-6 sm:py-8 md:px-10 lg:px-12 lg:py-20'>
                <div className='mx-auto max-w-[900px]'>
                    <p
                        className='mb-4 text-center text-xs font-bold uppercase tracking-[0.3em] text-[#ff7a3c]'
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                        Got Questions?
                    </p>

                    <h2
                        className='mb-12 text-center uppercase'
                        style={{
                            fontFamily: "'Montserrat', sans-serif",
                            fontWeight: 900,
                            fontSize: 'clamp(30px, 7vw, 72px)',
                            lineHeight: 1,
                            letterSpacing: '-0.02em',
                        }}
                    >
                        <span className='block text-white'>Frequently Asked</span>
                        <span className='block text-[#ff7a3c]'>Questions</span>
                    </h2>

                    <div className='flex flex-col gap-3'>
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
