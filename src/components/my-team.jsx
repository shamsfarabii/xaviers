import React from 'react'

export default function MyTeam() {
    return (
        <section className='w-full overflow-hidden bg-transparent'>
            <div className='relative z-10 mx-auto flex w-full max-w-[1440px] flex-col items-center gap-8 px-4 py-14 sm:gap-10 sm:px-6 sm:py-16 md:gap-12 md:px-8 md:py-20 lg:min-h-screen lg:flex-row lg:items-center lg:justify-between lg:gap-16 lg:px-12 lg:py-24 xl:gap-[100px] xl:px-16'>
                <div className='flex w-full max-w-[520px] shrink-0 items-center justify-center sm:max-w-[580px] md:max-w-[640px] lg:max-w-none lg:w-[48%] lg:justify-start'>
                    <img
                        src='/camera.png'
                        alt=''
                        aria-hidden='true'
                        className='pointer-events-none absolute left-[-40px] top-[12px] z-0 w-[clamp(110px,32vw,500px)] select-none opacity-50 sm:left-[-60px] sm:top-[24px] sm:opacity-70 md:left-[-90px] md:top-[32px] md:opacity-100 lg:left-[-120px] lg:top-[45px] xl:left-[-155px] xl:top-[20px]'
                        draggable={false}
                    />
                    <img
                        src='/team.png'
                        alt='Xavier Media team collage'
                        className='h-auto w-full max-h-[240px] object-contain select-none sm:max-h-[320px] md:max-h-[400px] lg:max-h-none'
                        draggable={false}
                    />
                </div>

                <div className='flex w-full flex-col items-center justify-center text-center text-[#F5EFE2] lg:w-[52%] lg:items-start lg:text-left'>
                    <img
                        src='/flimCard.png'
                        alt=''
                        aria-hidden='true'
                        className='pointer-events-none absolute bottom-[16px] right-[-40px] z-0 w-[clamp(110px,32vw,500px)] select-none opacity-50 sm:bottom-[28px] sm:right-[-60px] sm:opacity-70 md:bottom-[40px] md:right-[-90px] md:opacity-100 lg:bottom-[30px] lg:right-[-180px]'
                        draggable={false}
                    />
                    <div className='w-full max-w-[700px] lg:max-w-none'>
                        <h2
                            className='m-0 uppercase leading-[1.05] tracking-[-0.03em]'
                            style={{
                                fontSize: 'clamp(26px, 5.5vw, 48px)',
                                fontWeight: 900,
                                fontFamily: "'Montserrat', sans-serif",
                            }}
                        >
                            Meet Our Team
                        </h2>

                        {/* <div className='mt-3 flex flex-col items-center gap-[5px] sm:mt-4 sm:gap-[6px] lg:items-start'>
                            <span
                                className='block h-[3px] -rotate-[1.5deg] rounded-full bg-[#ff7a3c]'
                                style={{ width: 'clamp(100px, 38vw, 240px)' }}
                            />
                            <span
                                className='ml-3 block h-[3px] rotate-[1deg] rounded-full bg-[#ff7a3c] sm:ml-5 lg:ml-4'
                                style={{ width: 'clamp(80px, 30vw, 200px)' }}
                            />
                            <span
                                className='mr-1 block h-[3px] -rotate-[1deg] rounded-full bg-[#ff7a3c] sm:mr-2 lg:mr-0'
                                style={{ width: 'clamp(90px, 34vw, 225px)' }}
                            />
                        </div> */}

                        <p
                            className='mx-auto mt-6 max-w-[640px] uppercase text-[#7f7f7f] sm:mt-8 md:mt-10 lg:mx-0 lg:max-w-none'
                            style={{
                                fontSize: 'clamp(11px, 2.2vw, 16px)',
                                lineHeight: 1.65,
                                fontWeight: 300,
                                fontFamily: "'Montserrat', sans-serif",
                                letterSpacing: '0.02em',
                            }}
                        >
                            Our people are our biggest flex at Xavier Media . We&apos;ve brought together a squad of seriously talented content creators and video editors, and with the kind of retention that speaks for itself, you know the culture here is real. Everyone on our team lives and breathes content, from editing and motion graphics to strategy and storytelling. So you get scroll-stopping videos without the back-and-forth stress. We keep things smooth, communication tight, and your content pipeline running like clockwork.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
