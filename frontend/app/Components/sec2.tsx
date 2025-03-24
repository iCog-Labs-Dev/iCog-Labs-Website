"use client";
import { BentoGrid, BentoGridItem } from "../Components/ui/Bentogrid";

export default function CoreValuesSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h3 className="text-4xl font-bold text-left text-orange-500 mb-8">Our Core Values</h3>
        <p className="text-center text-gray-600 mb-12">
          At iCog Labs, we advance AI research and development, driving innovation in robotics,
          machine learning, and more, to transform industries and improve lives globally.
        </p>

        <BentoGrid>
          <BentoGridItem
            title={<h3 className="text-xl font-semibold">AI Solutions</h3>}
            description={<p className="text-gray-600">Innovative AI solutions for real-world challenges.</p>}
            className="border p-6 rounded"
          />

          <BentoGridItem
            title={<h3 className="text-xl font-semibold">Machine Learning</h3>}
            description={<p className="text-gray-600">Cutting-edge machine learning applications.</p>}
            className="border p-6 rounded"
          />

          <BentoGridItem
            title={<h3 className="text-xl font-semibold">Blockchain</h3>}
            description={<p className="text-gray-600">Secure and efficient blockchain solutions.</p>}
            className="border p-6 rounded"
          />

          <BentoGridItem
            title={<h3 className="text-xl font-semibold">Artificial General Intelligence</h3>}
            description={<p className="text-gray-600">Pioneering advancements in AGI research.</p>}
            className="border p-6 rounded"
          />

          <BentoGridItem
            title={<h3 className="text-xl font-semibold">AI Ethics</h3>}
            description={<p className="text-gray-600">Promoting ethical AI development and usage.</p>}
            className="border p-6 rounded"
          />

          <BentoGridItem
            title={<h3 className="text-xl font-semibold text-white">Robotics</h3>}
            description={
              <p className="text-white">
                Robotics integrates AI and engineering to create autonomous machines, revolutionizing industries
                with precision and efficiency.
              </p>
            }
            className="bg-orange-500 text-white p-6 rounded"
          />
        </BentoGrid>
      </div>
    </section>
  );
}
