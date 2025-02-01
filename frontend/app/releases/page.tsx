import React from 'react'
import {Card, ImageCard} from '../Components/Card';

function page() {
  return (
    <div>
      <div 
        className="flex flex-col justify-start items-start gap-12 lg:gap-20 p-6 md:p-12 bg-cover bg-center w-full"
        style={{ backgroundImage: 'url(/images/sofi.png)' }}
      >
        <div>   
          <span className="text-white px-1">Blogs</span>/<span className="text-[#950406] px-1">Releases</span>
        </div>
        <div 
          className="font-jost text-5xl font-semibold tracking-wide text-justify   lg:max-w-[600px]  text-white"
        >
          <span
            className=" bg-gradient-to-r from-[#F03401] to-[#FE8E03] bg-clip-text text-transparent"
          >
            Sophia 
          </span> 
           <> </>the Robot New Vision Processing 
          and Perception Software
          <br/>
          by Hanson Robotics
        </div>
        <div className="flex justify-start">
          <button
            className="w-[246.13px] h-[56.3px] gap-0 rounded-lg ease-out duration-300 text-[#950406] bg-gradient-to-r from-[#FFA600] to-[#FF191C] self-start"
          >
            Read More
          </button>
        </div>
      </div> 
      
      <div className="flex flex-col md:flex-row flex-wrap justify-center items-center gap-12 lg:gap-20 p-20 ">

        <Card img='/images/1.png' text='Distributed Computing Power & Storage for Decentralized Networks' title='NuNet' />
        <Card img='/images/2.png' text='AI-Powered Genetic Analysis Tool for Biologists.' title='Mozi' />
        <Card img='/images/3.png' text='Electric bikes to young delivery workers with credit scoring assistance.' title='Honda E-Bikes ' />
      </div>
    </div>
  )
}



export default page
