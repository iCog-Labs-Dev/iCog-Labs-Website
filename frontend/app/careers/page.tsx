import React from 'react'
import Image from 'next/image'
import { AiOutlineMail } from 'react-icons/ai';


function Internship() {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center gap-12 lg:gap-20 p-6 md:p-12">
      {/* Image Section */}
      <Image
        src="/images/intern.png"
        width={636}
        height={333}
        alt=""
        className="w-full max-w-md lg:max-w-lg h-auto"
      />

      {/* Content Section */}
      <div className="flex flex-col justify-center gap-6 lg:gap-8">
        <h1 className="text-2xl lg:text-3xl font-bold text-gray-800">
          2024 Batch-2 Internship Program Applicants
        </h1>
        <p className="text-lg lg:text-xl text-gray-600 leading-relaxed max-w-lg">
          Join our hands-on program to work on innovative AI projects and collaborate with industry experts. We're seeking candidates interested in AI, ML, Robotics, Blockchain, and more. Open to undergraduates, graduates, and self-taught individuals.
        </p>
<button
  style={{
    width: '246.13px',
    height: '56.3px',
    gap: '0px',
    borderRadius: '12px', // Ensure this is applied
    opacity: '1', // Set opacity to 1 for visibility
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
  Apply Now
</button>



      </div>
    </div>
  );
}


function Page() {
  return (
    <div className="flex flex-col justify-center p-6 md:p-16 gap-12  aligh-center items-center ">
      <div className="flex flex-col lg:flex-row justify-center items-center gap-12 lg:gap-24 ">
        {/* Heading and Input */}
        <div className="flex flex-col justify-center items-center gap-8 md:gap-12">
          <h1
            className="text-[70px] font-medium text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600 text-left"
            style={{
              width: '593px',
              height: '202px',
              gap: '0px',
              fontFamily: 'Jost',
              lineHeight: '101.15px',
              textUnderlinePosition: 'from-font',
              textDecorationSkipInk: 'none',
            }}
          >
            Join our community to receive updates
          </h1>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="flex flex-row items-center border border-gray-300 rounded-lg px-4 w-full sm:w-[364px] h-16 bg-gray-100">
              <AiOutlineMail size={24} className="text-gray-500" />
              <input
                type="text"
                placeholder="Email address"
                className="flex-1 border-none outline-none bg-transparent ml-2 text-sm sm:text-base"
              />
            </div>
            <button
              className="w-full sm:w-52 h-12 sm:h-16 rounded-lg font-medium text-lg bg-gradient-to-r from-orange-500 to-red-500 text-white"
            >
              Stay Connected
            </button>
          </div>
        </div>
        {/* Image */}
        <Image
          src="/images/career.png"
          width={731}
          height={441}
          alt=""
          className="w-full max-w-[500px] lg:max-w-[731px] h-auto"
        />
      </div>

      {/* Internship Section */}
      <div className="flex flex-col items-start text-red-700 text-2xl md:text-3xl lg:text-4xl font-bold ">
        <h2>Internship</h2>
        <Internship />
        <Internship />
      </div>
    </div>
  );
}

export default Page;
