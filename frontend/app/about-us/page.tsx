import React from 'react'
import Image from 'next/image'

function Card({ url, name, position }: { url: string, name: string, position: string }) {
    return (
        <div className="flex flex-col gap-0">
            <Image 
                src={url}
                alt='image' 
                width={450} 
                height={440} 
                className="rounded-tl-lg shadow-md"
            />
            <div className='flex flex-col gap-5 bg-gradient-to-r from-[#FE8E03] to-[#F03401] p-4 rounded-br-lg items-center justify-center'>
                <h1 className="text-xl font-semibold text-white">
                    {name}
                </h1>
                <h2 className="text-lg font-normal text-white">
                    {position}
                </h2>
            </div>
        </div>
    )
}

function MissionVision({ title, text, img ,w }: { title: string, text: string, img: string, w?: number }) {
    return (
        <div className='flex flex-col gap-5'>
            <div className='flex items-center gap-5'>
                <Image alt={title} src={img} width={w} height={134} />
                <div className="text-xl font-semibold text-white" style={{
                    fontFamily: 'Jost',
                    fontSize: '32px',
                    fontWeight: '500',
                    lineHeight: '51.2px',
                    letterSpacing: '4px',
                    textAlign: 'left',
                }}>
                    {title}
                </div>
            </div>
            <div className="mt-4 text-left text-lg text-white" style={{
                width: '989px',
                height: '205px',
                fontFamily: 'Jost',
                fontSize: '32px',
                fontWeight: '500',
                lineHeight: '51.2px',
                letterSpacing: '4px',
                textAlign: 'left',
            }}>
                {text}
            </div>
        </div>
    )
}

function Aboutus() {
    return (
        <div className="flex flex-col items-center my-5 p-2 gap-11">
            <div className="flex flex-col lg:flex-row gap-10 items-center">
                <div>
                    <Image 
                        src='/images/about-us1.png' 
                        alt='image' 
                        width={696} 
                        height={507} 
                        className="rounded-tl-lg shadow-md"
                    />
                </div>
                <div className="text-center lg:text-left">
                    <h1 className="text-4xl font-semibold leading-[64px] tracking-[0.25px] bg-gradient-to-r from-[#FE8E03] to-[#F03401] bg-clip-text text-transparent">
                        What is iCog Labs?
                    </h1>
                    <div className="w-full lg:w-[703px] h-auto lg:h-[256px] text-3xl font-normal leading-[64px] tracking-[0.25px]">
                        We are a team of visionary software professionals, dedicated to advancing the frontier of artificial intelligence research and applications.
                    </div>
                    <button className="mt-5 py-3 px-6 h-16 rounded-tl-lg border border-transparent bg-gradient-to-b from-[#FE8E03] to-[#F03401] text-white text-lg font-light">
                        Read more
                    </button>
                </div>
            </div>

            <div className="flex bg-cover bg-no-repeat bg-center w-full flex-col items-center justify-center p-4" style={{ backgroundImage: `url('/images/Rectangle 89.png')` }}>
                <MissionVision 
                w={134}
                    img="/images/bright.png" 
                    title="Vision" 
                    text="A breakthrough in the capability of AI systems to learn, think, and create much more progressive innovations for a better living for people living in Africa and Worldwide." 
                />
                <MissionVision 
                w={84}
                    img="/images/mission.png" 
                    title="Mission" 
                    text="To develop cutting-edge AI technologies that address real-world challenges and improve the quality of life for people in Africa and around the world." 
                />
            </div>

            <h1 className="text-4xl font-semibold leading-[64px] tracking-[0.25px] bg-gradient-to-r from-[#FE8E03] to-[#F03401] bg-clip-text text-transparent">
                Meet Our Team
            </h1>
            <div className="flex flex-col lg:flex-row gap-5">
                <Card 
                    url='/images/Getnet-Assefa 1.png' 
                    name='Getnet Assefa' 
                    position='CEO of iCog Labs'
                />
                <Card 
                    url='/images/optimized-betin-skylum 1.png' 
                    name='Betelhem Dessie' 
                    position='CEO of iCog Acc'
                />
                <Card 
                    url='/images/photo_2024-10-30_10-06-32 1.png' 
                    name='Hruy Tsegaye' 
                    position='CEO of Mindplex'
                />
            </div>
        </div>
    )
}

export default Aboutus
