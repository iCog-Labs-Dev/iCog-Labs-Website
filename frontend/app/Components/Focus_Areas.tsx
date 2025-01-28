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
        "https://media.istockphoto.com/id/1494104649/photo/ai-chatbot-artificial-intelligence-digital-concept.webp",
        "https://media.istockphoto.com/id/1530802302/photo/focus-hand-of-businessman-show-virtual-graphic-data-connect-with-ai-using-ai-to-sucess.webp",
        "https://images.unsplash.com/photo-1677756119517-756a188d2d94?w=400&auto=format&fit=crop&q=60",
        "https://plus.unsplash.com/premium_photo-1683121710572-7723bd2e235d?w=400&auto=format&fit=crop&q=60",
      ],
      category: "AI Solution",
    },
    {
      title: "Blockchain Innovation",
      description:
        "Exploring the potential of blockchain technology to revolutionize industries by enhancing transparency, security, and efficiency.",
      images: [
        "https://images.unsplash.com/photo-1590285836796-f772deafabfc?w=400&auto=format&fit=crop&q=60",
        "https://media.istockphoto.com/id/963145218/photo/blockchain-financial-technology-concept-network-encrypted-chain-of-blocks-earth.webp",
        "https://images.unsplash.com/photo-1622630998477-20aa696ecb05?w=400&auto=format&fit=crop&q=60",
        "https://plus.unsplash.com/premium_photo-1681400678259-255b10890b08?w=400&auto=format&fit=crop&q=60",
      ],
      category: "Blockchain",
    },

    {
      title: "Machine Learning",
      description:"machine learning is the use mathematics and statics to make computers learn from patterns without being explicity programmed",
      images:[
        "https://images.unsplash.com/photo-1591453089816-0fbb971b454c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1hY2hpbmUlMjBsZWFybmluZ3xlbnwwfHwwfHx8MA%3D%3D",
        "https://media.istockphoto.com/id/1957022961/photo/digital-brain-hologram-hud-artificial-intelligence-ai-machine-deep-learning-business.webp?a=1&b=1&s=612x612&w=0&k=20&c=RZKCU30lp8F1dIrgNHaYt_2IWaO4qtXTAmR49Dvh1Kw=",
        "https://plus.unsplash.com/premium_photo-1682002216109-25c53aa594ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8TUx8ZW58MHx8MHx8fDA%3D",
        "https://media.istockphoto.com/id/2084953049/photo/neural-network-nodes-deep-learning-artificial-intelligence-machine-learning-model.webp?a=1&b=1&s=612x612&w=0&k=20&c=kySkpXxwGqj4vuZi3UkHtDioMVvUgXDDvGzrkgonU9Q=",

      ],
      category: "Machine Learning",

    },
    {
      title: "AGI",
      description: "Artificial General Intelligence (AGI) is a hypothetical AI system that possesses the capacity surpasing the living human beings",
      images:[
        "https://media.istockphoto.com/id/2164088070/photo/agi-artificial-general-intelligence-artificial-intelligence-concept-neural-network-digital.webp?a=1&b=1&s=612x612&w=0&k=20&c=z1DVbVP4I_GdGnnIjVZpGr7CepQHqjsev4y5IRcMvaA=",
        "https://media.istockphoto.com/id/2168674934/photo/agi-artificial-general-intelligence-text-on-cpu-digital-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=EZICFOVwPeXdXJJEqmkkN6atQze8AKlSczyxPFU92Bw=",
        "https://media.istockphoto.com/id/2165287575/photo/agi-artificial-general-intelligence-text-on-black-digital-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=KqyWDgo4mXl42uakcJ63zfS1rmVH2ZPc1uXVP3AzFjA=",
        "https://media.istockphoto.com/id/2159943659/photo/ai-powered-humanoid-robot-with-glass-visor-typing-on-futuristic-touch-keyboard-humanoid-robot.webp?a=1&b=1&s=612x612&w=0&k=20&c=6yW6JQSJWAx76Id9qwFlTlZ1EAe7yoLxaGpRUPQE2xk=",

      ],
      category: "AGI",

    },
    {
      title: "Robotics",
      description: "Robotics is the engineering discipline dealing with the design, construction, operation, and maintenance of Robotic simplfies the mechanical works done by human beings in every aspects",
      images:[
        "https://plus.unsplash.com/premium_photo-1680402879257-48ffbbc6db1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Uk9CT1RJQ1N8ZW58MHx8MHx8fDA%3D",
        "https://plus.unsplash.com/premium_photo-1680509034814-e733c5f873ac?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Uk9CT1RJQ1N8ZW58MHx8MHx8fDA%3D",
        "https://images.unsplash.com/photo-1593376853899-fbb47a057fa0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fFJPQk9USUNTfGVufDB8fDB8fHww",
        "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fFJPQk9USUNTfGVufDB8fDB8fHww",


      ],

      category:"Robotics"
    },
    {
      title:"AI Ethics",
      description:"Every Technology can be harmful if we can't pass abding laws to it so that we can mange any unauthorized use and illegal acts,As any technology AI also requires legal usage in order to achieve the desired goals ",
      images:[
        "https://media.istockphoto.com/id/1812733266/photo/ai-and-ethics-concept.webp?a=1&b=1&s=612x612&w=0&k=20&c=bgNUtmsw0ghQJulvbenSmt7FMmvpHyZd9xmy_qmHvCY=",
        "https://media.istockphoto.com/id/2163506576/photo/ai-laws-and-regulations-concept-hand-typing-on-laptop-with-digital-icons-representing.webp?a=1&b=1&s=612x612&w=0&k=20&c=XW8odp5UaHdt1tqWunC4OOHSqtf91n-tLKOO_wx-oMk=",
        "https://media.istockphoto.com/id/2075197848/photo/ai-and-law.webp?a=1&b=1&s=612x612&w=0&k=20&c=CAE6ZEjPLe5rC6ZBaEkPDa61fMcg2iRkhiZ1vK6Onek=",
        "https://media.istockphoto.com/id/959737582/photo/man-concerned-by-implications-of-artificial-intelligence.webp?a=1&b=1&s=612x612&w=0&k=20&c=5FMq4m1WLtfwOg4l0-9GILZ9EB3VW0wL45qILfuaj08=",
      ],
      category:"AI Ethics"
    }
    
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
          Pioneering advancements in AI, ML, AGI, Blockchain, Robotics, and AI Ethics to shape the future of technology.
        </p>
        <div className="flex justify-center flex-wrap gap-2 mb-8">
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
              <div className="w-full lg:w-1/2 p-6 flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <span className="text-orange-500 font-semibold">{item.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FocusAreas;
