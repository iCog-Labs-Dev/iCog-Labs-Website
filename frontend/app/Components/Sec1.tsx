"use client";

import { BentoGrid, BentoGridItem } from "./ui/Bentogrid";

export default function ICogLabsSection() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <h3 className="text-4xl font-bold text-left text-orange-500 mb-8">
          Welcome to iCogLabs
        </h3>

        <BentoGrid>
          {/* Experience Card */}
          <BentoGridItem
            title={<h2 className="text-5xl font-bold text-white">10+ Years</h2>}
            description={
              <p className="text-xl text-white mt-4">of Experience</p>
            }
            className="bg-gradient-to-r from-red-500 via-orange-500 to-yellow-400 text-white rounded-lg p-8"
          />

          {/* Mission Statement */}
          <BentoGridItem
            description={
              <p className="text-lg">
                At iCog Labs, we advance AI research and software development
                daily while staying committed to a grand vision of
                transformative innovation for Africa and beyond.
              </p>
            }
            className="bg-gradient-to-r from-yellow-500 via-orange-600 to-red-600 text-white rounded-lg p-8"
          />

          {/* Vision Card */}
          <BentoGridItem
            title={
              <h3 className="text-4xl font-bold text-orange-500 text-center">
                Vision
              </h3>
            }
            description={
              <p className="text-gray-700">
                To lead AI innovation globally, driving breakthroughs that
                enhance intelligence beyond human capability, while improving
                lives across Africa and contributing to the continent's
                transformation.
              </p>
            }
            className="bg-white p-4"
          />

          {/* Mission Card */}
          <BentoGridItem
            title={
              <h3 className="text-4xl font-bold text-orange-500 text-center">
                Mission
              </h3>
            }
            description={
              <p className="text-gray-700">
                1. Build a cutting-edge computer science sector in Ethiopia and
                Africa using AI.
                <br />
                2. Develop African AI pioneers to lead the continent into the
                Technological Singularity.
              </p>
            }
            className="bg-white p-4"
          />
        </BentoGrid>
      </div>
    </section>
  );
}
