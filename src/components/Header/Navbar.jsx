"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { FiShoppingCart } from "react-icons/fi";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md border-b border-gray-200 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <img src="/img/logo/logo.png" alt="Oritto Logo" className="h-22 w-auto object-contain" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            <Link href="/corporate" className="text-gray-700 hover:bg-orange-500 hover:text-white px-4 py-2 border border-gray-300 rounded-md text-sm font-medium transition-colors duration-200">
              Corporate
            </Link>
            <Link href="/product" className="text-gray-700 hover:bg-orange-500 hover:text-white px-4 py-2 border border-gray-300 rounded-md text-sm font-medium transition-colors duration-200">
              Product
            </Link>
            <Link href="/solution" className="text-gray-700 hover:bg-orange-500 hover:text-white px-4 py-2 border border-gray-300 rounded-md text-sm font-medium transition-colors duration-200">
              Solution
            </Link>
            <Link href="/solar" className="text-gray-700 hover:bg-orange-500 hover:text-white px-4 py-2 border border-gray-300 rounded-md text-sm font-medium transition-colors duration-200">
              Solar
            </Link>
            <Link href="/offer" className="text-gray-700 hover:bg-orange-500 hover:text-white px-4 py-2 border border-gray-300 rounded-md text-sm font-medium transition-colors duration-200">
              Offer
            </Link>
            <Link href="/support" className="text-gray-700 hover:bg-orange-500 hover:text-white px-4 py-2 border border-gray-300 rounded-md text-sm font-medium transition-colors duration-200">
              Support
            </Link>
            <Link href="/distribution-enquiry" className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 border border-orange-500 rounded-md text-sm font-medium transition-colors duration-200">
              Distribution Enquiry
            </Link>
          </div>

          {/* Search Bar and Shopping Cart Icon */}
          <div className="flex items-center space-x-4">
            {/* Desktop Search Bar */}
            <div className="hidden md:block relative">
              <input
                type="text"
                placeholder="Search bar"
                className="w-64 px-4 py-2 pr-10 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-0 focus:border-orange-500 bg-white"
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
            {/* Shopping Cart Icon */}
            <button className="relative text-gray-700 hover:text-orange-500 focus:outline-none">
              <FiShoppingCart size={24} />
            </button>
            {/* Mobile menu button */}
            <div className="lg:hidden flex items-center space-x-2">
              {/* Mobile Search Button */}
              <button className="text-gray-700 hover:text-blue-600 p-2 border border-gray-300 rounded">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
              <button
                onClick={toggleMenu}
                className="text-gray-700 hover:text-blue-600 focus:outline-none focus:text-blue-600 p-2 border border-gray-300 rounded"
                aria-label="Toggle menu"
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isMenuOpen ? (
                    <path d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-2 sm:px-3 bg-gray-50 rounded-lg mt-2 mb-4">
              {/* Mobile Search Bar */}
              <div className="px-3 py-2">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search bar"
                    className="w-full px-4 py-2 pr-10 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                    <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                </div>
              </div>
              
              <Link
                href="/corporate"
                className="text-gray-700 hover:text-blue-600 hover:bg-white block px-3 py-2 border border-gray-300 rounded-md text-base font-medium transition-colors duration-200 mx-3"
                onClick={() => setIsMenuOpen(false)}
              >
                Corporate
              </Link>
              <Link
                href="/product"
                className="text-gray-700 hover:text-blue-600 hover:bg-white block px-3 py-2 border border-gray-300 rounded-md text-base font-medium transition-colors duration-200 mx-3"
                onClick={() => setIsMenuOpen(false)}
              >
                Product
              </Link>
              <Link
                href="/solution"
                className="text-gray-700 hover:text-blue-600 hover:bg-white block px-3 py-2 border border-gray-300 rounded-md text-base font-medium transition-colors duration-200 mx-3"
                onClick={() => setIsMenuOpen(false)}
              >
                Solution
              </Link>
              <Link
                href="/solar"
                className="text-gray-700 hover:text-blue-600 hover:bg-white block px-3 py-2 border border-gray-300 rounded-md text-base font-medium transition-colors duration-200 mx-3"
                onClick={() => setIsMenuOpen(false)}
              >
                Solar
              </Link>
              <Link
                href="/offer"
                className="text-gray-700 hover:text-blue-600 hover:bg-white block px-3 py-2 border border-gray-300 rounded-md text-base font-medium transition-colors duration-200 mx-3"
                onClick={() => setIsMenuOpen(false)}
              >
                Offer
              </Link>
              <Link
                href="/support"
                className="text-gray-700 hover:text-blue-600 hover:bg-white block px-3 py-2 border border-gray-300 rounded-md text-base font-medium transition-colors duration-200 mx-3"
                onClick={() => setIsMenuOpen(false)}
              >
                Support
              </Link>
              
              {/* Mobile Distribution Enquiry Button */}
              <div className="pt-2 px-3">
                <Link
                  href="/distribution-enquiry"
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 block text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Distribution Enquiry
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;