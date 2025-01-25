"use client";
import Image from 'next/image';
import React, { useState } from 'react';

const Hero: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const insightsPerPage = 3;

  const insights = [
    {
      title: 'Transforming AI in Africa',
      description: 'Discover how iCog Labs is pioneering AI solutions uniquely tailored for Africa.',
      image: 'https://media.istockphoto.com/id/1511300770/photo/global-network-and-information-technology-with-an-overlay-city-at-night-for-connectivity-or.webp?a=1&b=1&s=612x612&w=0&k=20&c=rf3RIbpc0TwlRwyHkn3cHi4XGXuze2q7WuFqX0ZyIfA=',
      link: '#',
      category: 'News',
      date: '2025-01-20'
    },
    {
      title: 'AI Ethics in Practice',
      description: 'Explore our commitment to ethical AI and its impact on global industries.',
      image: 'https://media.istockphoto.com/id/1812733266/photo/ai-and-ethics-concept.webp?a=1&b=1&s=612x612&w=0&k=20&c=bgNUtmsw0ghQJulvbenSmt7FMmvpHyZd9xmy_qmHvCY=',
      link: '#',
      category: 'Articles',
      date: '2025-01-18'
    },
    {
      title: 'Innovations in Robotics',
      description: 'Learn about our cutting-edge advancements in robotics and automation.',
      image: 'https://media.istockphoto.com/id/1193074238/photo/technological-prosthetic-robot-arm-is-tested-by-two-professional-development-engineers-in-a.webp?a=1&b=1&s=612x612&w=0&k=20&c=58Ug6hCI0Bm_xOlD6LdACVJYF6e8rFoQoeLbAaV2nkM=',
      link: '#',
      category: 'Releases',
      date: '2025-01-15'
    },
    {
      title: 'Machine Learning Applications',
      description: 'Discover how machine learning is shaping the future.',
      image: 'https://media.istockphoto.com/id/1182697690/photo/beautiful-male-computer-engineer-and-scientists-create-neural-network-at-his-workstation.webp?a=1&b=1&s=612x612&w=0&k=20&c=Y2mYUt91zyEEUpE-_KdjiA3tglN6E32Dx7UAigrZBXk=',
      link: '#',
      category: 'News',
      date: '2025-01-12'
    },
    {
      title: 'Blockchain Advancements',
      description: 'Explore the potential of blockchain technology.',
      image: 'https://images.unsplash.com/photo-1590285836796-f772deafabfc?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fEJMb2NrJTIwJTIwY2hhaW4lMjBBZHZhbmNlbWVudHN8ZW58MHx8MHx8fDA%3D',
      link: '#',
      category: 'Articles',
      date: '2025-01-10'
    },
    {
      title: 'AGI Research',
      description: 'Pioneering advancements in Artificial General Intelligence.',
      image: 'https://media.istockphoto.com/id/2164088070/photo/agi-artificial-general-intelligence-artificial-intelligence-concept-neural-network-digital.webp?a=1&b=1&s=612x612&w=0&k=20&c=z1DVbVP4I_GdGnnIjVZpGr7CepQHqjsev4y5IRcMvaA=',
      link: '#',
      category: 'Releases',
      date: '2025-01-08'
    }
  ];

  const totalPages = Math.ceil(insights.length / insightsPerPage);
  const displayedInsights = insights.slice(
    (currentPage - 1) * insightsPerPage,
    currentPage * insightsPerPage
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

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

      {/* Latest Insights */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-8">
          <h2 className="text-4xl font-bold text-center text-orange-500 mb-10">Latest Insights</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {displayedInsights.map((insight, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg hover:shadow-xl overflow-hidden">
                <div className="relative">
                  <img
                    src={insight.image}
                    alt={insight.title}
                    className="w-full h-40 object-cover"
                  />
                  <span className="absolute top-2 right-2 bg-gradient-to-r from-red-500 via-orange-500 to-yellow-400 text-white text-sm font-semibold px-3 py-1 rounded-full">
                    {insight.category}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{insight.title}</h3>
                  <p className="text-gray-600 mb-4">{insight.description}</p>
                  <a
                    href={insight.link}
                    className="text-orange-500 font-semibold hover:underline"
                  >
                    Read More
                  </a>
                </div>
                <div className="px-6 pb-4 text-right">
                  <span className="text-gray-500 text-sm">{insight.date}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 flex justify-center space-x-4">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded ${
                  currentPage === index + 1
                    ? 'bg-orange-500 text-white'
                    : 'bg-gray-200 text-gray-700'
                }`}
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
