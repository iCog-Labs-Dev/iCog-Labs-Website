import Image from 'next/image';
import React from 'react';

const Hero: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-orange-100 to-white min-h-screen flex items-center">
        <div className="container mx-auto flex items-center justify-between py-16 px-8">
        <div> 
      
           <div className="bg-center">
           <Image
        src="/wave.png" 
        alt="Wave Image" 
        layout="fill" 
        objectFit="cover" 
      />
           <h1 className="text-6xl font-bold text-gray-800 leading-tight">
              Engineering the Future of{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-500 to-yellow-400">
                Intelligence
              </span>
            </h1>
            <div className="mt-8 flex space-x-4">
              <button className="px-6 py-2 text-lg font-semibold border-2 border-orange-600 text-gray-600 bg-transparent hover:bg-orange-50 rounded">
                Explore
              </button>
              <button className="px-6 py-2 text-lg font-semibold text-white bg-gradient-to-r from-red-500 via-orange-500 to-yellow-400 hover:opacity-90 rounded">
                Join Us
              </button>
            </div>
                 
           </div>
            <a
              href="#"
              className="mt-12 inline-block text-lg text-orange-600 underline hover:no-underline"
            >
              Read Our Latest &gt;
            </a>
          </div>
          <div>
            <img
              src="/VR.png"
              alt="VR Headset"
              className="w-full max-w-lg"
            />
          </div>
        </div>
      </section>

      {/* New Section 1 */}
       {/* New Section */}
       <section className="bg-white py-16">
        <div className="container mx-auto">
        <h3 className="text-4xl font-bold text-left text-orange-500 mb-8">Welcome to iCogLabs</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* First Card */}
            <div className="bg-gradient-to-r from-red-500 via-orange-500 to-yellow-400 text-white p-8 rounded-lg shadow-lg">
              <h2 className="text-5xl font-bold">10+ Years</h2>
              <p className="text-xl mt-4">of Experience</p>
            </div>
            {/* Second Card */}
            <div className="bg-gradient-to-r from-yellow-500 via-orange-600 to-red-600 text-white p-8 rounded-lg shadow-lg">
              <p className="text-lg">
                At iCog Labs, we advance AI research and software development daily while staying
                committed to a grand vision of transformative innovation for Africa and beyond.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Vision */}
            <div>
            <h3 className="text-4xl font-bold text-center text-orange-500 mb-8">Vision</h3>
              <p className="text-gray-700">
                To lead AI innovation globally, driving breakthroughs that enhance intelligence beyond human
                capability, while improving lives across Africa and contributing to the continent's transformation.
              </p>
            </div>
            {/* Mission */}
            <div>
            <h3 className="text-4xl font-bold text-center text-orange-500 mb-8">Mission</h3>
              <p className="text-gray-700">
                1. Build a cutting-edge computer science sector in Ethiopia and Africa using AI. <br />
                2. Develop African AI pioneers to lead the continent into the Technological Singularity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* New Section 2 */}
      <section className="py-16 bg-white">
        <div className="container mx-auto">
        <h3 className="text-4xl font-bold text-left text-orange-500 mb-8">Our Core Values</h3>
          <p className="text-center text-gray-600 mb-12">
            At iCog Labs, we advance AI research and development, driving
            innovation in robotics, machine learning, and more, to transform
            industries and improve lives globally.
          </p>
          <div className="grid grid-cols-3 gap-4">
            <div className="border p-6 rounded shadow">
              <h3 className="text-xl font-semibold mb-4">AI Solutions</h3>
              <p className="text-gray-600">Innovative AI solutions for real-world challenges.</p>
            </div>
            <div className="border p-6 rounded shadow">
              <h3 className="text-xl font-semibold mb-4">Machine Learning</h3>
              <p className="text-gray-600">Cutting-edge machine learning applications.</p>
            </div>
            <div className="border p-6 rounded shadow">
              <h3 className="text-xl font-semibold mb-4">Blockchain</h3>
              <p className="text-gray-600">Secure and efficient blockchain solutions.</p>
            </div>
            <div className="border p-6 rounded shadow">
              <h3 className="text-xl font-semibold mb-4">Artificial General Intelligence</h3>
              <p className="text-gray-600">Pioneering advancements in AGI research.</p>
            </div>
            <div className="border p-6 rounded shadow">
              <h3 className="text-xl font-semibold mb-4">AI Ethics</h3>
              <p className="text-gray-600">Promoting ethical AI development and usage.</p>
            </div>
            <div className="bg-orange-500 text-white p-6 rounded shadow">
              <h3 className="text-xl font-semibold mb-4">Robotics</h3>
              <p>
                Robotics integrates AI and engineering to create autonomous machines,
                revolutionizing industries with precision and efficiency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* New Section 3 */}
      <section className="py-16 bg-white">
        <div className="container mx-auto">
          <h3 className="text-4xl font-bold text-center text-orange-500 mb-8">Latest Insights</h3>
          <p className="text-center text-gray-600 mb-12">
            Insights on AI and tech advancements.
          </p>
          <div className="grid grid-cols-3 gap-8">
            <div className="bg-white border p-6 rounded shadow">
              <img
                src="/demis-jumper.jpg"
                alt="Demis Hassabis & John Jumper"
                className="w-full rounded mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Demis Hassabis & John Jumper awarded Nobel Prize in Chemistry</h3>
              <p className="text-gray-600">
                The award recognizes their work developing AlphaFold, a groundbreaking AI system that...
              </p>
              <p className="text-gray-400 text-sm mt-2">9 October 2024</p>
            </div>
            <div className="bg-white border p-6 rounded shadow">
              <img
                src="/alphachip.jpg"
                alt="AlphaChip"
                className="w-full rounded mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">How AlphaChip transformed computer chip design</h3>
              <p className="text-gray-600">
                Our AI method has accelerated chip design, and its super...
              </p>
              <p className="text-gray-400 text-sm mt-2">26 September 2024</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
