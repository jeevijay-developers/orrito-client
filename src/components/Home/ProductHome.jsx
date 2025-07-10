"use client";
import React from "react";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";

const categories = [
  {
    name: "Bulbs",
    img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Tube Lights",
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Panel Lights",
    img: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Flood Lights",
    img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Street Lights",
    img: "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Downlights",
    img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
  },
];

const ProductHome = () => {
  const [sliderRef] = useKeenSlider({
    slides: { perView: 4, spacing: 24 },
    breakpoints: {
      "(max-width: 900px)": { slides: { perView: 2, spacing: 16 } },
      "(max-width: 600px)": { slides: { perView: 1.2, spacing: 8 } },
    },
    loop: true,
  });

  return (
    <section className="py-12">
      <h2 className="text-4xl font-light text-center mb-10 text-gray-800">Shop By Category</h2>
      <div ref={sliderRef} className="keen-slider px-4">
        {categories.map((cat) => (
          <div key={cat.name} className="keen-slider__slide flex flex-col items-center min-w-[120px]">
            <div className="w-28 h-28 rounded-full bg-orange-50 flex items-center justify-center mb-3 shadow-sm overflow-hidden">
              <img src={cat.img} alt={cat.name} className="h-16 w-16 object-contain" />
            </div>
            <span className="text-gray-700 font-medium text-lg text-center whitespace-nowrap">{cat.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductHome;
