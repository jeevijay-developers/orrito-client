"use client";
import React, { useState } from 'react';
import EnquiryForm from './EnquiryForm';
import Link from 'next/link';

const TopBar = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm border-b border-gray-200 fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-end items-center h-12">
          {/* Action Buttons */}
          <div className="flex items-center space-x-4">
            <button  
            onClick={() => setIsModalOpen(true)}
            className=" cursor-pointer bg-white border border-[#f54900] text-[#f54900] hover:bg-orange-50 px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200">
              Enquiry
            </button>
            <Link href="https://wa.me/9999971796" target="_blank" className="cursor-pointer  bg-[#f54900] hover:bg-orange-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200">
              Chat with us
            </Link>
          </div>
        </div>
      </div>
      {/* {isModalOpen && (
        <EnquiryForm open={isModalOpen} onClose={() => setIsModalOpen(false)} />
      )} */}
    </nav>
  );
};

export default TopBar;