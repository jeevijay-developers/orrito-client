import React from "react";
import { Download, ArrowRight, CheckCircle } from "lucide-react";

export default function SolutionPage() {
  const listItems = [
   "product 1",
   "product 2",
   "product 3",
   "product 4",
  ];

  const imageCards = [
    { id: 1, title: "img1" },
    { id: 2, title: "img2" },
    { id: 3, title: "img3" },
    { id: 4, title: "img4" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-orange-800">Product Name</h1>
          <button className="flex items-center gap-2 bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition-colors shadow-lg">
            <Download size={20} />
            Download.pdf
          </button>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Left Column - List */}
          <div className="space-y-4">
            <div className="bg-white rounded-xl shadow-lg p-6 border border-orange-200">
              <h2 className="text-xl font-semibold text-orange-800 mb-4">
                Product List
              </h2>
              <div className="space-y-3">
                {listItems.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-3 rounded-lg hover:bg-orange-50 transition-colors"
                  >
                    <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 font-semibold text-sm mt-0.5">
                      {index + 1}
                    </div>
                    <span className="text-gray-700 leading-relaxed">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Main Image */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-lg p-8 border border-orange-200 h-80 flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">ABC1</span>
                </div>
                <h3 className="text-2xl font-bold text-orange-800">
                  abc1 Image
                </h3>
                <p className="text-gray-600 mt-2">Main project visualization</p>
              </div>
            </div>

            {/* Image Gallery */}
            <div className="grid grid-cols-2 gap-4">
              {imageCards.map((card) => (
                <div
                  key={card.id}
                  className="bg-white rounded-lg shadow-md p-6 border border-orange-200 hover:shadow-lg transition-shadow cursor-pointer group"
                >
                  <div className="h-24 bg-gradient-to-br from-orange-100 to-amber-100 rounded-lg flex items-center justify-center mb-3 group-hover:from-orange-200 group-hover:to-amber-200 transition-colors">
                    <span className="text-orange-600 font-medium">
                      {card.title}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700 text-sm">View Image</span>
                    <ArrowRight
                      size={16}
                      className="text-orange-500 group-hover:translate-x-1 transition-transform"
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
            {listItems.map((feature, index) => (
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

        {/* Technical Features */}
        <div className="mt-8 bg-gradient-to-r from-orange-600 to-amber-600 rounded-xl shadow-lg p-8 text-white">
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
      </div>
    </div>
  );
}
