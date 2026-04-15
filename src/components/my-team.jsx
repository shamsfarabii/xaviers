import React from 'react'

export default function MyTeam() {
    return (
        <section className='w-full bg-[#0d0d0d]'>
            <div className='mx-auto flex min-h-screen w-full max-w-[1440px] flex-col items-center justify-between gap-10 overflow-hidden px-4 py-8 sm:px-6 md:px-10 md:py-10 lg:flex-row lg:gap-10 lg:px-14 xl:px-16'>
                <div className='flex w-full items-center justify-center lg:w-[48%] lg:justify-start'>
                    <img
                        src='https://xaviers.b-cdn.net/team_pic_last.png'
                        alt='Xavier Media team collage'
                        className='h-auto w-full max-w-[520px] object-contain select-none sm:max-w-[600px] lg:max-w-[650px]'
                        draggable={false}
                    />
                </div>

                <div className='flex w-full flex-col items-center justify-center text-center text-white lg:w-[52%]'>
                    <div className='max-w-[700px]'>
                        <h2
                            className='m-0 uppercase leading-none'
                            style={{
                                fontSize: 'clamp(28px, 5vw, 48px)',
                                fontWeight: 900,
                                fontFamily: "'Montserrat', sans-serif",
                                letterSpacing: '-0.03em',
                            }}
                        >
                            Meet Our Team
                        </h2>

                        <div className='mt-3 flex flex-col items-center gap-[5px] sm:mt-4 sm:gap-[6px]'>
                            <span className='block h-[3px] w-[150px] -rotate-[1.5deg] rounded-full bg-[#ff2b2b] sm:w-[240px]' />
                            <span className='ml-4 block h-[3px] w-[120px] rotate-[1deg] rounded-full bg-[#ff2b2b] sm:ml-6 sm:w-[200px]' />
                            <span className='mr-2 block h-[3px] w-[140px] -rotate-[1deg] rounded-full bg-[#ff2b2b] sm:mr-3 sm:w-[225px]' />
                        </div>

                        <p
                            className='mx-auto mt-8 max-w-[640px] px-2 uppercase text-[#7f7f7f] sm:mt-10 md:mt-14'
                            style={{
                                fontSize: 'clamp(12px, 2vw, 16px)',
                                lineHeight: 1.6,
                                fontWeight: 300,
                                fontFamily: "'Montserrat', sans-serif",
                                letterSpacing: '0.02em',
                            }}
                        >
                            Lorem ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem ipsum has been the industry&apos;s standard dummy
                            text ever since the 1500s, when an unknown printer took a galley
                            of type and scrambled it to make a type specimen book. It has
                            survived not only five centuries, but also the leap into electronic
                            typesetting, remaining essentially unchanged. It was popularised in
                            the 1960s with the release of Letraset sheets containing lorem
                            ipsum passages, and more recently with desktop publishing software
                            like Aldus PageMaker including versions of lorem ipsum.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}