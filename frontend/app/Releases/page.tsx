import React from 'react'
import Image from 'next/image';

function Card({ img,text,title }: { img: string, text: string,title: string }) {   
    return (<>
    <div>
        <Image 
            src={img} 
            alt="Card image"
            width={401} 
            height={401} 
            style={{

            }}
        />
        <div
            style={{
            width: '112px',
            height: '52px',
            fontFamily: 'Jost',
            fontSize: '32px',
            fontWeight: 600,
            lineHeight: '51.2px',
            letterSpacing: '4px',
            textAlign: 'justify',
            textUnderlinePosition: 'from-font',
            textDecorationSkipInk: 'none',
            color: 'linear-gradient(98.95deg, #FE8E03 -42.93%, #F03401 103.66%)',
            }} 
        >
            {title}
            <div
                style={{
                    width: '411px',
                    height: '73px',
                    top: '1643px',
                    left: '271px',
                    gap: '0px',
                    opacity: '0px',
                    fontFamily: 'Jost',
                    fontSize: '24px',
                    fontWeight: 400,
                    lineHeight: '34px',
                    letterSpacing: '0.25px',
                    textAlign: 'justify',
                    textUnderlinePosition: 'from-font',
                    textDecorationSkipInk: 'none',
                }}
            >
                {text}
            </div>
           <div className='align-right '>
            icon
            
            </div> 
        </div>
    </div>
    
    </>);
}

function page() {
  return (
    <div>
    <div 
        className='flex flex-col justify-left items-center gap-12 lg:gap-20 p-6 md:p-12'
        style={{
            backgroundImage: 'url(/images/sofi.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        }}
    >
        <div>   
            Blogs/Releases
        </div>
        <div>
            Sophia the Robot 
            New Vision Processing 
            and Perception Software
            by Hanson Robotics
        </div>
    </div> 
    <div>
    <button
  style={{
    width: '246.13px',
    height: '56.3px',
    gap: '0px',
    borderRadius: '12px', 
    opacity: '1', 
    border: '2px solid transparent',
    borderImageSource: 'linear-gradient(91.55deg, #FFA600 0%, #FF191C 99.74%)',
    animationTimingFunction: 'ease-out',
    animationDuration: '300ms',
    color: 'rgba(149, 4, 6, 1)',
    borderImageSlice: 1,
    background: 'linear-gradient(272.17deg, rgba(255, 166, 0, 0.09) 4.81%, rgba(255, 25, 28, 0.09) 105.54%)',
    alignSelf: 'flex-end',
  }}
>
  Read More
</button>

    </div>

    </div>
  )
}

export default page