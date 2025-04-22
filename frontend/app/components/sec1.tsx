"use client";

import React from "react";

const Sec1 = ({ children }: { children: React.ReactNode[] }) => {
  return (
    <div className="relative z-30  bg-slate-900 max-w-8xl mx-auto px-4 lg:px-8 py-6">
      {/* Title Section */}
      <div className="flex items-center justify-center mb-4">
        <div className="h-[3px] w-10 bg-orange-500 mr-3"></div>
        <span className="text-orange-500 font-mono uppercase tracking-widest text-sm text-center">
          Pioneering the Future of Cognitive Intelligence
        </span>
        <div className="h-[3px] w-10 bg-orange-500 ml-3"></div>
      </div>

      <p className="text-center text-gray-400 mb-12">
        At iCog Labs, having more than 10 years of experience in the field, we advance AI research and development to transform industries and improve lives globally.
      </p>

      {/* Layout for Desktop */}
      <div className="hidden md:flex gap-2 lg:gap-4 h-screen">
        <div className="flex flex-col w-1/3 gap-2">
          {children?.[0]}
          {children?.[1]}
        </div>
        <div className="w-2/3">{children?.[2]}</div>
      </div>

      {/* Layout for Mobile/Tablet */}
      <div className="flex flex-col gap-4 md:hidden">
        {children}
      </div>
    </div>
  );
};

export default Sec1;
