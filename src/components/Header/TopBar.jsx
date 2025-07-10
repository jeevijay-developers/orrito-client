"use client";
import React from 'react';

const TopBar = () => {
  return (
    <nav className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-end items-center h-12">
          {/* Action Buttons */}
          <div className="flex items-center space-x-4">
            <button className="bg-white border border-[#f54900] text-[#f54900] hover:bg-orange-50 px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200">
              Enquiry
            </button>
            <button className="bg-[#f54900] hover:bg-orange-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200">
              Chat with us
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default TopBar;