import Link from 'next/link'
import React, { useState } from 'react'
import {solutionCategories} from '@/service/Data'
import Image from 'next/image'

const SolutionsDropdown = ({ dropdownRef, handleSolutionHover, handleSolutionLeave, setIsSolutionDropdownOpen }) => {
    const [hoveredProduct, setHoveredProduct] = useState(null);
    
    const handleProductItemHover = (product) => {
        setHoveredProduct(product);
    };

    const handleProductItemLeave = () => {
        setHoveredProduct(null);
    };
    return (
        <div
            ref={dropdownRef}
            className="absolute top-full mt-1 left-1/2 transform -translate-x-1/4 w-screen max-w-5xl bg-white border border-gray-200 rounded-lg shadow-2xl z-50"
            onMouseEnter={handleSolutionHover}
            onMouseLeave={handleSolutionLeave}
        >
            <div className="p-8 w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="md:col-span-2">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {solutionCategories.map((cat, i) => (
                                <Link 
                                    key={i} 
                                    href={cat.href} 
                                    className="text-gray-600 hover:text-orange-500 hover:bg-orange-50 px-3 py-2 rounded-md text-sm transition-colors duration-200 block" 
                                    onClick={() => setIsSolutionDropdownOpen(false)}
                                    onMouseEnter={() => handleProductItemHover(cat)}
                                    onMouseLeave={handleProductItemLeave}
                                >
                                    {cat.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                    {/* Image Preview Column */}
                    <div className="hidden lg:block">
                        <div className="sticky top-0">
                            <h4 className="text-lg font-semibold text-gray-700 mb-3 border-b border-gray-200 pb-2">
                                Solution Preview
                            </h4>
                            <div className="bg-gray-50 rounded-lg p-4 transition-all duration-300">
                                {hoveredProduct && (
                                    <div className="space-y-3">
                                        <Image 
                                            src={hoveredProduct.src} 
                                            alt={hoveredProduct.name}
                                            width={300}
                                            height={200}
                                            className="w-full h-50 object-cover rounded-md shadow-sm transition-opacity duration-300"
                                        />
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SolutionsDropdown
