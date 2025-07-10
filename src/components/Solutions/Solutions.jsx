import React from "react";

const solutions = [
  {
    title: "Energy Efficiency",
    image: "https://picsum.photos/200?random=1",
  },
  {
    title: "Smart Lighting",
    image: "https://picsum.photos/200?random=2",
  },
  {
    title: "LED Technology",
    image: "https://picsum.photos/200?random=3",
  },
  {
    title: "Wireless Control",
    image: "https://picsum.photos/200?random=4",
  },
  {
    title: "Color Temperature",
    image: "https://picsum.photos/200?random=5",
  },
  {
    title: "Motion Sensors",
    image: "https://picsum.photos/200?random=6",
  },
  {
    title: "Voice Activation",
    image: "https://picsum.photos/200?random=7",
  },
  {
    title: "Ambient Lighting",
    image: "https://picsum.photos/200?random=8",
  },
  {
    title: "Dimming Features",
    image: "https://picsum.photos/200?random=9",
  },
  {
    title: "Sustainability",
    image: "https://picsum.photos/200?random=10",
  },
  {
    title: "Smart Home Integration",
    image: "https://picsum.photos/200?random=11",
  },
  {
    title: "Long Lifespan",
    image: "https://picsum.photos/200?random=12",
  },
];


const Solutions = () => {
  return (
    <div className="px-8 py-12 bg-orange-50">
      <div className="text-center mb-16">
        <h1 className="text-6xl font-bold bg-gradient-to-r from-[#ED1A3A] via-[#ce4d12] to-orange-500 bg-clip-text text-transparent mb-4">
          Our Solutions
        </h1>
        <p className="text-xl  max-w-2xl mx-auto">
          Discover cutting-edge technologies designed to transform your business
        </p>
        <div className="mt-8 w-24 h-1 bg-gradient-to-r from-blue-500 to-orange-500 mx-auto rounded-full"></div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
        {solutions.map((solution, index) => (
          <div key={index} className="text-center">
            <img
              src={solution.image}
              alt={solution.title}
              className="mx-auto h-32 w-32 object-contain rounded-md shadow-sm"
            />
            <h2 className="mt-4 text-lg font-semibold">{solution.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Solutions;
