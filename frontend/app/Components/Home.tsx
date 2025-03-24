"use client";
import Image from "next/image";
import React, { useState } from "react";
import { LampDemo } from "./ui/lamp"; // Importing Lamp Component

const Hero: React.FC = () => {
  return (
    <> 
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-slate-900 via-black to-slate-950 min-h-screen flex items-center text-white">
        <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between py-16 px-8">
          {/* Left Text Content */}
          <div className="text-center md:text-left max-w-2xl bg-center">
            <Image
              src="/wave.png"
              alt="Wave Image"
              layout="fill"
              objectFit="cover"
            />
            <LampDemo /> {/* Replacing with the Lamp component */}
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mt-6">
              Engineering the Future of{" "}
              <span className="bg-gradient-to-r from-red-500 via-orange-500 to-yellow-400 bg-clip-text text-transparent">
                AI
              </span>
            </h1>
            <div className="mt-8 flex flex-col sm:flex-row sm:space-x-4">
              <button className="px-6 py-2 text-lg font-semibold border-2 border-orange-500 text-orange-300 bg-transparent hover:bg-orange-500 hover:text-white rounded">
                Explore
              </button>
              <button className="px-6 py-2 text-lg font-semibold text-white bg-gradient-to-r from-red-500 via-orange-500 to-yellow-400 hover:opacity-90 rounded mt-4 sm:mt-0">
                Join Us
              </button>
            </div>
            <a
              href="#"
              className="mt-6 inline-block text-lg text-orange-400 underline hover:no-underline"
            >
              Read Our Latest &gt;
            </a>
          </div>

          {/* Right VR Image */}
          <div className="relative w-full md:w-1/3 flex justify-center">
            <div className="relative">
              <img
                src="/VR.png"
                alt="VR Headset"
                className="w-full max-w-md rounded-lg"
              />
              {/* Gradient for Blending Bottom */}
              <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black to-transparent"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
