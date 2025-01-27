"use client";
import React, { useState } from "react";

const FocusAreas: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const categories = [
    "AI Solution",
    "Machine Learning",
    "Blockchain",
    "AGI",
    "Robotics",
    "AI Ethics",
  ];

  const focusData = [
    {
      title: "Artificial Solution (AI)",
      description:
        "Our AI research aims to build intelligent systems that can learn, adapt, and solve real-world problems, pushing the boundaries of automation and intelligence.",
      images: [
        "https://media.istockphoto.com/id/1494104649/photo/ai-chatbot-artificial-intelligence-digital-concept.webp?a=1&b=1&s=612x612&w=0&k=20&c=bSNvWwiLdPpa57uxQdncwcpu9Xt-NJSsmIBMxNxLQfw=",
        "https://media.istockphoto.com/id/1530802302/photo/focus-hand-of-businessman-show-virtual-graphic-data-connect-with-ai-using-ai-to-sucess.webp?a=1&b=1&s=612x612&w=0&k=20&c=-Xs99R-VeshtLSM8KEB2qS_G8LlpjM1XfrwQEhHsJnA=",
        "https://images.unsplash.com/photo-1677756119517-756a188d2d94?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8QUl8ZW58MHx8MHx8fDA%3D",
        "https://plus.unsplash.com/premium_photo-1683121710572-7723bd2e235d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YUl8ZW58MHx8MHx8fDA%3D",
      ],
      category: "AI Solution",
    },
    {
      title: "Blockchain Innovation",
      description:
        "Exploring the potential of blockchain technology to revolutionize industries by enhancing transparency, security, and efficiency.",
      images: [
        "https://images.unsplash.com/photo-1590285836796-f772deafabfc?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fEJMb2NrJTIwJTIwY2hhaW4lMjBBZHZhbmNlbWVudHN8ZW58MHx8MHx8fDA%3D",
        "https://media.istockphoto.com/id/963145218/photo/blockchain-financial-technology-concept-network-encrypted-chain-of-blocks-earth.webp?a=1&b=1&s=612x612&w=0&k=20&c=p8vpmagImxLfQ-bBPzyV7H6VPb-u5pg5Oc5DEtnv0bA=",
        "https://images.unsplash.com/photo-1622630998477-20aa696ecb05?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8QkxPQ0slMjBDSEFJTnxlbnwwfHwwfHx8MA%3D%3D",
        "https://plus.unsplash.com/premium_photo-1681400678259-255b10890b08?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8QkxPQ0slMjBDSEFJTnxlbnwwfHwwfHx8MA%3D%3D",
      ],
      category: "Blockchain",
    },
    // Add more data as needed
  ];

  const filteredData = activeCategory
    ? focusData.filter((item) => item.category === activeCategory)
    : focusData;

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-8">
        <h1 className="text-4xl font-bold text-center text-orange-500 mb-10">
          Driving Innovation Across AI & Emerging Technologies
        </h1>
        <p className="text-center text-gray-600 mb-8">
          Pioneering advancements in AI, ML, AGI, Blockchain, Robotics, and AI
          Ethics to shape the future of technology.
        </p>
        <div className="flex justify-center space-x-4 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() =>
                setActiveCategory(category === activeCategory ? null : category)
              }
              className={`px-4 py-2 rounded ${
                activeCategory === category
                  ? "bg-orange-500 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="space-y-8">
          {filteredData.map((item, index) => (
            <div
              key={index}
              className="flex flex-col lg:flex-row bg-white rounded-lg shadow-md overflow-hidden"
            >
              {/* Left Side - Images */}
              <div className="w-full lg:w-1/2 grid grid-cols-2 gap-2 p-2">
                {item.images.map((image, idx) => (
                  <div
                    key={idx}
                    className="h-40 bg-gray-200"
                    style={{
                      backgroundImage: `url(${image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  ></div>
                ))}
              </div>

              {/* Right Side - Text */}
              <div className="w-full lg:w-1/2 p-6 flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <span className="text-orange-500 font-semibold">
                  {item.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FocusAreas;
