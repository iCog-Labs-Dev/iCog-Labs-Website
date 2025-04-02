import React from "react";
import { cn } from "../../lib/utils";
import NeuralNetwork from "../NeuralNet";
import BackgroundGears from "../LogoGears";

export const BentoGrid: React.FC<BentoGridProps> = ({ children }) => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-gradient-to-br from-black to-gray-900  text-white">
      {/* Neural Network Background */}
      <div className="absolute inset-0 z-10">
        <NeuralNetwork className="w-full h-full opacity-90 blur-md" />
      </div>
      {/* Logo Gears */}
            <div className="absolute inset-0 z-20">
              <div className="relative w-full h-full">
                <BackgroundGears className="absolute top-1/4 left-1/4 transform -translate-x-1/4 -translate-y-1/4 w-1/2 h-1/2" />
              </div>
            </div>

    
      {/* Content Wrapper */}
      <div className="relative z-30 max-w-8xl mx-auto px-4 lg:px-8 py-6">
        {/* Title Before First Three Cards */}
        <div className="flex items-center justify-center mb-4">
          <div className="h-[3px] w-10 bg-orange-500 mr-3"></div>
          <span className="text-orange-500 font-mono uppercase tracking-widest text-sm">
            Pioneering the Future of Cognitive Intelligence
          </span>
          <div className="h-[3px] w-10 bg-orange-500 ml-3">
            
          </div>
          
        </div>
        <p className="text-center text-gray-400 mb-12">
          At iCog Labs, Having more than 10 years of experience in the field,we advance AI research and development to transform industries and improve lives globally.
        </p>

        {/* First Page Layout (Only for Large Screens) */}
        <div className="hidden md:flex gap-2 lg:gap-4 h-screen">
          {/* Left Section - Two Stacked Items (with reduced gap) */}
          <div className="flex flex-col w-1/3 gap-2">
            {children?.[0]}
            {children?.[1]}
          </div>

          {/* Right Section - Large Item Covering Full Height */}
          <div className="w-2/3">{children?.[2]}</div>
        </div>

        {/* Title Before Remaining Cards */}
        <div className="flex items-center justify-center mt-6 mb-2">
          <div className="h-[3px] w-10 bg-orange-500 mr-3"></div>
          <span className="text-orange-500 font-mono uppercase tracking-widest text-sm">
            Our Focus Areas
          </span>
          <div className="h-[3px] w-10 bg-orange-500 ml-3"></div>
        </div>

        {/* Remaining Items in Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
          {children?.slice(3)}
        </div>
      </div>
    </div>
  );
};

interface BentoGridProps {
  children?: React.ReactNode[];
}

export const BentoGridItem: React.FC<BentoGridItemProps> = ({
  id,
  title,
  description,
  img,
}) => {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-xl border border-white/[0.1] flex flex-col",
        "p-6 bg-transparent h-full" // Ensured this is transparent
      )}
    >
      {/* Special Layout for Item 3 (Right Side) */}
      {id === 3 ? (
        <>
          {/* Full Cover Image */}
          <div className="absolute inset-0">
            <img
              src={img}
              alt={title?.toString()}
              className="w-full h-full object-contain"
            />
          </div>

          {/* Overlay for Readability */}
          <div className="absolute inset-0 bg-black/50 opacity-20"></div>

          {/* Text at Bottom */}
          <div className="relative mt-auto z-10 p-4 bg-gradient-to-t from-black/60 to-transparent">
            <h3 className="text-lg lg:text-2xl font-bold text-white">
              {title}
            </h3>
            <p className="text-sm text-[#C1C2D3]">{description}</p>
          </div>
        </>
      ) : (
        <>
          {/* Normal Items Layout */}
          {img && (
            <div className="relative w-full h-48 md:h-64 lg:h-80">
              <img
                src={img}
                alt={title?.toString()}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          )}

          <div className="flex flex-col space-y-2">
            <h3 className="text-lg lg:text-2xl font-bold text-white">
              {title}
            </h3>
            <p className="text-sm text-[#C1C2D3]">{description}</p>
          </div>
        </>
      )}
    </div>
  );
};

interface BentoGridItemProps {
  id: number;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
}
