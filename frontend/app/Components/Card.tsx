import Image from 'next/image';

function Card({ img, text, title, date }: { img?: string, text: string, title: string, date?: string }) {   
    return (
        <div className="max-w-[401px] shadow-md relative p-5 h-full">
            {img && (
                <Image 
                    src={img} 
                    alt="Card image"
                    width={401} 
                    height={401} 
                />
            )}
            <div
                className="w-full h-13 font-jost text-4xl font-semibold leading-[51.2px]  text-justify bg-gradient-to-r from-[#FE8E03] to-[#F03401] bg-clip-text text-transparent"
            >
                {title}
            </div>
           
            <div
                className="w-full h-auto gap-0 opacity-100 font-jost text-2xl font-normal leading-[34px] text-justify py-4 flex-grow"
            >
                {text}
            </div>
            <div className="flex justify-between items-center text-sm text-gray-500">
                {date ? (
                    <div>
                        {date}
                    </div>
                ) : (
                    <div style={{ visibility: 'hidden' }}>
                        place holder
                    </div>
                )}
                <Image  
                    src='/images/Vector.png'  
                    alt='Icon' 
                    width={24} 
                    height={24} 
                /> 
            </div>
        </div>
    );
}
function ImageCard({ img, title, date, primary }: { img: string, title: string, date: string, primary?: boolean }) {   
    return (
        <div 
            className="relative w-full flex flex-col justify-end p-5 text-white"
            style={{
                backgroundImage: `url(${img})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: primary ? '800px' : '350px',
                width: primary ? '700px' : '550px',
                height: primary ? '800px' : '350px',
                gap: '0px',
                borderRadius: '16px 0px 0px 0px',
                opacity: '1'
            }}
        >
            <div
                className="font-jost text-4xl font-semibold leading-[51.2px]  text-justify text-white w-[80%]"
            >
                {title}
            </div>
            <div className="text-sm text-gray-300 w-[80%]">
                {date}
            </div>
        </div>
    )
}



export  {Card,ImageCard};
