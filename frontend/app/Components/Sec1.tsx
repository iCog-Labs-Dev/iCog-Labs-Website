"use client";

import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/Bentogrid";
import { CardContainer, CardBody, CardItem } from "./ui/Card3D";
import Image from "next/image";

export default function ICogLabsSection() {
  return (
    <section className="bg-gradient-to-br from-gray-800 to-black py-16">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <h3 className="text-5xl font-extrabold text-orange-500 mb-10 text-center drop-shadow-lg">
          Welcome to iCogLabs
        </h3>

        <BentoGrid>
          {/* Card 1: Experience (Large) */}
          <BentoGridItem className="col-span-2 row-span-2">
            <CardContainer containerClassName="h-full">
              <CardBody className="bg-gradient-to-r from-red-500 to-yellow-400 text-white rounded-lg shadow-2xl">
                <div className="p-8">
                  <h2 className="text-6xl font-bold mb-4">10+ Years</h2>
                  <p className="text-xl">of Experience in AI Research and Development</p>
                </div>
              </CardBody>
            </CardContainer>
          </BentoGridItem>

          {/* Card 2: Mission */}
          <BentoGridItem className="col-span-1">
            <CardContainer containerClassName="h-full">
              <CardBody className="relative bg-gray-900 text-white rounded-lg shadow-lg overflow-hidden">
                <Image
                  src="/images/icog-mission.jpg"
                  alt="Mission Image"
                  layout="fill"
                  className="absolute object-cover opacity-60"
                />
                <div className="relative z-10 p-6">
                  <h3 className="text-3xl font-extrabold text-white">Mission</h3>
                  <p className="mt-4">
                    To build a cutting-edge computer science sector in Ethiopia and Africa using AI.
                  </p>
                </div>
              </CardBody>
            </CardContainer>
          </BentoGridItem>

          {/* Card 3: Vision (Tall Card) */}
          <BentoGridItem className="col-span-1 row-span-2">
            <CardContainer containerClassName="h-full">
              <CardBody className="bg-gradient-to-t from-purple-600 to-blue-600 text-white rounded-lg shadow-lg p-6">
                <h3 className="text-4xl font-bold mb-4">Vision</h3>
                <p>
                  To lead AI innovation globally, driving breakthroughs that enhance intelligence and
                  transform lives across Africa.
                </p>
              </CardBody>
            </CardContainer>
          </BentoGridItem>

          {/* Card 4: AI Research */}
          <BentoGridItem className="col-span-2">
            <CardContainer containerClassName="h-full">
              <CardBody className="relative bg-gradient-to-br from-teal-500 to-green-600 text-white rounded-lg shadow-lg overflow-hidden">
                <Image
                  src="/images/icog-research.jpg"
                  alt="AI Research Image"
                  layout="fill"
                  className="absolute object-cover opacity-50"
                />
                <div className="relative z-10 p-8">
                  <h3 className="text-5xl font-bold mb-4">AI Research & Innovation</h3>
                  <p className="text-lg">
                    Pioneering AI solutions that address Africa's unique challenges while contributing
                    to global technological advancements.
                  </p>
                </div>
              </CardBody>
            </CardContainer>
          </BentoGridItem>
        </BentoGrid>
      </div>
    </section>
  );
}
