"use client";
import React, { useState } from 'react';
import { FaWhatsapp } from "react-icons/fa6";
import Link from 'next/link';

const TopBar = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm border-b border-gray-200 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-end items-center h-8">
          {/* Action Buttons */}
          <div className="flex items-center space-x-4">
            <button  
            onClick={() => setIsModalOpen(true)}
            className=" cursor-pointer bg-white border border-[#f54900] text-[#f54900] hover:bg-orange-50 px-4 py-1 rounded-sm text-[10px] font-medium transition-colors duration-200">
              Enquiry
            </button>
            <Link href="https://wa.me/9999971796" target="_blank" className="cursor-pointer bg-[#25D366] hover:bg-[#1ebe57] text-white px-4 py-1 rounded-sm text-[10px] font-medium transition-colors duration-200 flex items-center gap-2">
              <FaWhatsapp className="w-3 h-3" />
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