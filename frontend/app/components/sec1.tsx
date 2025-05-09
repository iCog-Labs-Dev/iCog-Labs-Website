"use client";

import type React from "react";
import { CardBody, CardContainer, CardItem } from "./UI/3d-card";
import { sec1Data } from "../data/index";
import { BackgroundGradient } from "./UI/background-gradient";

const Custom3DCard = ({ children }: { children: React.ReactNode }) => {
  return (
    <CardContainer className="h-full" containerClassName="h-full py-0">
      <CardBody className="h-full w-full [transform-style:preserve-3d]">
        {children}
      </CardBody>
    </CardContainer>
  );
};

const Sec1 = () => {
  const [missionCard, visionCard, researchCard] = sec1Data;

  return (
    <div className="relative z-30 bg-gray-950 max-w-8xl mx-auto px-4 lg:px-8 py-6">
      {/* Title Section */}
      <div className="flex items-center justify-center mb-4">
        <div className="h-[3px] w-10 bg-orange-500 mr-3"></div>
        <span className="text-orange-500 font-michroma uppercase tracking-widest text-sm text-center">
          Pioneering the Future of Cognitive Intelligence
        </span>
        <div className="h-[3px] w-10 bg-orange-500 ml-3"></div>
      </div>

      <p className="text-center text-gray-400 mb-12">
        At iCog Labs, having more than 10 years of experience in the field, we
        advance AI research and development to transform industries and improve
        lives globally.
      </p>

      {/* Layout for Desktop */}
      <div
        className="hidden md:flex gap-8"
        style={{ height: "65vh", minHeight: "500px", maxHeight: "700px" }}
      >
        {/* Left Column - Regular Cards (1/3 width) */}
        <div className="flex flex-col w-1/3 gap-8 h-full">
          {/* Mission Card */}
          <div className="gradient-border-left bg-transparent rounded-2xl p-8 flex-1">
            <div className="gradient-border-content">
              <h3 className="text-2xl font-bold font-comic text-white mb-4">
                {missionCard.title}
              </h3>
              <p className="text-gray-400">{missionCard.description}</p>
            </div>
          </div>

          {/* Vision Card */}
          <div className="gradient-border-left bg-transparent rounded-2xl p-8 flex-1 ">
            <div className="gradient-border-content">
              <h3 className="text-2xl font-bold font-comic  text-white mb-4">
                {visionCard.title}
              </h3>
              <p className="text-gray-400">{visionCard.description}</p>
            </div>
          </div>
        </div>

        {/* Right Column - Large 3D Card (2/3 width) */}
        <div className="w-2/3 h-full">
          <Custom3DCard>
            <BackgroundGradient
              className="h-full rounded-[30px] overflow-hidden p-0.5 bg-transparent"
              containerClassName="h-full"
              animate={true}
              duration={20}
            >
              <div className="relative h-full w-full rounded-[20px] overflow-hidden bg-gray-950">
                {/* Full-size Image with 3D effect */}
                <CardItem translateZ="80" rotateX={5} className="w-full h-full">
                  <img
                    src={researchCard.img || "/placeholder.svg"}
                    className="w-full h-full object-contain "
                    alt="VR & AI Technology"
                  />
                </CardItem>

                {/* Text Overlay with 3D effect */}
                <CardItem
                  translateZ="50"
                  className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/90 via-black/70 to-transparent"
                >
                  <h3 className="text-3xl font-bold text-white mb-2">
                    {researchCard.title}
                  </h3>
                  <p className="text-gray-300">{researchCard.description}</p>
                </CardItem>
              </div>
            </BackgroundGradient>
          </Custom3DCard>
        </div>
      </div>

      {/* Layout for Mobile/Tablet */}
      <div className="flex flex-col gap-8 md:hidden">
        {sec1Data.map((card) => (
          <div key={card.id} className="rounded-[22px] h-full bg-zinc-950">
            {card.img && (
              <img
                src={card.img || "/placeholder.svg"}
                className="w-full h-48 object-contain"
                alt={card.title}
              />
            )}
            <div className="p-6">
              <h3 className="text-2xl font-bold text-white mb-3">
                {card.title}
              </h3>
              <p className="text-gray-400">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sec1;
