"use client"
import React, { useEffect, useState } from "react";
import { Download, ArrowRight, CheckCircle } from "lucide-react";
import Image from "next/image";

export default function SolutionPage({id}) {

  useEffect(()=>{
    
  },[])
  const productList = [
   "product 1",
   "product 2",
   "product 3",
   "product 4",
  ];
  const specificationsLeft = [
    { label: "Input Voltage", value: "100 V - 265 V AC" },
    { label: "Frequency", value: "50/60 Hz" },
    { label: "Power Factor @220 VAC", value: "≥ 0.9" },
    { label: "Color Temperatures", value: "2700 K / 4000 K / 6000 K" },
    { label: "Color Rendering Index", value: "≥ 80" },
  ];

  const specificationsRight = [
    { label: "Lumen Efficacy", value: "≥ 100 Lumens per Watt" },
    { label: "Ingress Protection", value: "IP65" },
    { label: "Life Span", value: "≥ 50,000 Hours" },
    { label: "Safety Standard", value: "IEC 60598" },
    { label: "EMC/EMI Standard", value: "IEC 61547 / EN55015" },
  ];

  const productComparisons = [
    { code: "VPL - 036", voltage: "36 Watts", flux: "3600", efficiency: "60%" },
    { code: "VPL - 040", voltage: "40 Watts", flux: "4000", efficiency: "65%" },
    { code: "VPL - 050", voltage: "50 Watts", flux: "5000", efficiency: "70%" },
    { code: "VPL - 060", voltage: "60 Watts", flux: "6000", efficiency: "62%" },
  ];

  const mechanicalFeatures = [
    { code: "VPL - 036", size: "1200 x 55 x 70" },
    { code: "VPL - 144", size: "1200 x 55 x 70" },
    { code: "VPL - 336", size: "1200 x 55 x 50" },
    { code: "VPL - 348", size: "1200 x 55 x 50" },
  ];
  
  console.log("id",id)
  const features = [
    "Energy Efficiency",
    "Long Lifespan",
    "Dimmable",
    "Instant On",
    "Low Heat Emission",
    "Color Temperature Options (Warm White, Cool White, Daylight)",
    "Smart Home Compatibility (Wi-Fi, Bluetooth)",
    "Mercury-Free",

  ];
 
  const imageCards = [
    { id: 1, title: "img1", link: "https://picsum.photos/seed/img1/900" },
    { id: 2, title: "img2", link: "https://picsum.photos/seed/img2/900" },
    { id: 3, title: "img3", link: "https://picsum.photos/seed/img3/900" },
    { id: 4, title: "img4", link: "https://picsum.photos/seed/img4/900" },
  ];
  
  const [selectedImage, setSelectedImage] = useState(imageCards[0]?.link);
  const [selectedProduct, setSelectedProduct] = useState(productList[0]);
  return (
    <div className="min-h-screen mt-32 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-orange-800">Product Name</h1>
          <button className="flex items-center gap-2 cursor-pointer bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition-colors shadow-lg">
            <Download size={20} />
            Download.pdf
          </button>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_3fr] gap-8 mb-12">
          {/* Left Column - List */}
          <div className="w-full ">
            <div className="bg-white rounded-xl shadow-lg p-6 border border-orange-200">
              <h2 className="text-xl font-semibold text-orange-800 mb-4">
                Product List
              </h2>
              <table className="w-full text-left border-collapse text-sm">
                <tbody>
                  {productList.map((item, index) => (
                    <tr
                      key={index}
                      className="hover:bg-orange-50 transition-colors"
                    >
                      <td className="py-2 pr-4 text-orange-600 font-medium">
                        {index + 1}
                      </td>
                      <td className="py-2 text-gray-700">{item}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Right Column - Main Image */}
          <div className="space-y-6 ">
            <div className="bg-white rounded-xl shadow-lg p-6 border border-orange-200 flex items-center justify-center">
              <div className="relative w-full aspect-[4/3] max-h-[500px]">
                <Image
                  src={selectedImage}
                  alt="Main product preview"
                  fill
                  className="object-cover rounded-md"
                />
              </div>
            </div>

            {/* Image Gallery */}
            <div className="grid grid-cols-4 gap-4 w-full md:w-1/2">
              {imageCards.map((card) => (
                <div
                  key={card.id}
                  className="bg-white rounded-lg shadow-md p-2 border border-orange-200 hover:shadow-lg transition-shadow cursor-pointer group"
                >
                  <div className="h-12  md:h-24 bg-gradient-to-br from-orange-100 to-amber-100 rounded-lg overflow-hidden flex items-center justify-center  group-hover:from-orange-200 group-hover:to-amber-200 transition-colors">
                    <Image
                      src={card.link}
                      alt={card.title}
                      width={120}
                      height={120}
                      className="object-cover w-full h-full cursor-pointer"
                      onClick={() => setSelectedImage(card.link)}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 border border-orange-200">
          <h2 className="text-2xl font-bold text-orange-800 mb-6 flex items-center gap-2">
            <CheckCircle className="text-orange-600" size={24} />
            FEATURES:
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-4 rounded-lg bg-orange-50 hover:bg-orange-100 transition-colors"
              >
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-700 text-sm leading-relaxed">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>
        {/* Mechanical Features */}
        <div className="mt-8 bg-orange-50 rounded-xl shadow-lg p-8">
          <h3 className="text-2xl font-bold mb-6 text-orange-800">
            MECHANICAL FEATURES
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-orange-300 text-sm">
              <thead>
                <tr className="bg-orange-50 bg-opacity-20">
                  <th className="border border-orange-300 p-3 text-left font-semibold">
                    Product Code
                  </th>
                  <th className="border border-orange-300 p-3 text-center font-semibold">
                    Size (mm)
                  </th>
                </tr>
              </thead>
              <tbody>
                {mechanicalFeatures.map((feature, index) => (
                  <tr key={index} className="transition-colors">
                    <td className="border border-orange-300 p-3 font-medium">
                      {feature.code}
                    </td>
                    <td className="border border-orange-300 p-3 text-center">
                      {feature.size}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        {/* Technical Features */}
        <div className="mt-8 bg-orange-50 rounded-xl shadow-lg p-8 text-black">
          <h3 className="text-xl font-bold mb-4">Technical Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <CheckCircle size={16} />
                <span className="text-sm">Responsive Design</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={16} />
                <span className="text-sm">Modern UI/UX</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={16} />
                <span className="text-sm">Interactive Elements</span>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <CheckCircle size={16} />
                <span className="text-sm">Cross-browser Compatible</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={16} />
                <span className="text-sm">Performance Optimized</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={16} />
                <span className="text-sm">Accessible Design</span>
              </div>
            </div>
          </div>
        </div>
        {/* Specifications Section */}
        <div className="mt-8 bg-white rounded-xl shadow-lg p-8 border border-orange-200">
          <h2 className="text-2xl font-bold text-orange-800 mb-6">
            SPECIFICATIONS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[specificationsLeft, specificationsRight].map((column, idx) => (
              <div key={idx} className="space-y-4">
                {column.map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center py-2 border-b border-orange-100"
                  >
                    <span className="font-medium text-gray-700">
                      {item.label}
                    </span>
                    <span className="text-gray-600 font-semibold">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Product Comparison Table */}
        <div className="mt-8 bg-white text-gray-800 rounded-xl shadow-lg p-8 border border-orange-200">
          <h2 className="text-2xl font-bold text-orange-800 mb-6">
            PRODUCT COMPARISON
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-200 text-sm">
              <thead>
                <tr>
                  <th className="border border-orange-300 p-3 text-left font-semibold">
                    Product Code
                  </th>
                  <th className="border border-orange-300 p-3 text-center font-semibold">
                    Input Voltage
                  </th>
                  <th className="border border-orange-300 p-3 text-center font-semibold">
                    Luminous Flux
                  </th>
                  <th className="border border-orange-300 p-3 text-center font-semibold">
                    Energy Efficiency
                  </th>
                </tr>
              </thead>
              <tbody>
                {productComparisons.map((product, index) => (
                  <tr
                    key={index}
                    className="hover:bg-orange-50 transition-colors"
                  >
                    <td className="border border-orange-300 p-3 font-medium text-gray-700">
                      {product.code}
                    </td>
                    <td className="border border-orange-300 p-3 text-center">
                      {product.voltage}
                    </td>
                    <td className="border border-orange-300 p-3 text-center">
                      {product.flux}
                    </td>
                    <td className="border border-orange-300 p-3 text-center">
                      {product.efficiency}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
