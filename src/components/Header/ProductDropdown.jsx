import Link from 'next/link'
import React, { useState } from 'react'
import {productCategories} from '../../service/Data'
import Image from 'next/image';

const ProductDropdown = ({dropdownRef, handleProductHover, handleProductLeave, setIsProductDropdownOpen}) => {
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
            className="absolute top-full mt-1 left-1/2 transform -translate-x-1/4 w-screen max-w-6xl bg-white border border-gray-200 rounded-lg shadow-2xl z-50"
            onMouseEnter={handleProductHover}
            onMouseLeave={handleProductLeave}
        >
            <div className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                    {/* Column 1 */}
                    <div className="space-y-3">
                        <h4 className="text-lg font-semibold text-orange-500 mb-3 border-b border-orange-200 pb-2">
                            Indoor Lighting
                        </h4>
                        {productCategories.slice(0,6).map((cat, i) => (
                            <Link 
                                key={i} 
                                href={cat.href} 
                                className="text-gray-600 hover:text-orange-500 hover:bg-orange-50 px-3 py-2 rounded-md text-sm transition-colors duration-200 block" 
                                onClick={() => setIsProductDropdownOpen(false)}
                                onMouseEnter={() => handleProductItemHover(cat)}
                                onMouseLeave={handleProductItemLeave}
                            >
                                {cat.name}
                            </Link>
                        ))}
                    </div>
                    {/* Column 2 */}
                    <div className="space-y-3">
                        <h4 className="text-lg font-semibold text-orange-500 mb-3 border-b border-orange-200 pb-2">
                            Specialized Lighting
                        </h4>
                        {productCategories.slice(6,12).map((cat, i) => (
                            <Link 
                                key={i} 
                                href={cat.href} 
                                className="text-gray-600 hover:text-orange-500 hover:bg-orange-50 px-3 py-2 rounded-md text-sm transition-colors duration-200 block" 
                                onClick={() => setIsProductDropdownOpen(false)}
                                onMouseEnter={() => handleProductItemHover(cat)}
                                onMouseLeave={handleProductItemLeave}
                            >
                                {cat.name}
                            </Link>
                        ))}
                    </div>
                    {/* Column 3 */}
                    <div className="space-y-3">
                        <h4 className="text-lg font-semibold text-orange-500 mb-3 border-b border-orange-200 pb-2">
                            Outdoor Lighting
                        </h4>
                        {productCategories.slice(12,18).map((cat, i) => (
                            <Link 
                                key={i} 
                                href={cat.href} 
                                className="text-gray-600 hover:text-orange-500 hover:bg-orange-50 px-3 py-2 rounded-md text-sm transition-colors duration-200 block" 
                                onClick={() => setIsProductDropdownOpen(false)}
                                onMouseEnter={() => handleProductItemHover(cat)}
                                onMouseLeave={handleProductItemLeave}
                            >
                                {cat.name}
                            </Link>
                        ))}
                    </div>
                    {/* Column 4 */}
                    <div className="space-y-3">
                        <h4 className="text-lg font-semibold text-orange-500 mb-3 border-b border-orange-200 pb-2">
                            Decorative & Special
                        </h4>
                        {productCategories.slice(18).map((cat, i) => (
                            <Link 
                                key={i} 
                                href={cat.href} 
                                className="text-gray-600 hover:text-orange-500 hover:bg-orange-50 px-3 py-2 rounded-md text-sm transition-colors duration-200 block" 
                                onClick={() => setIsProductDropdownOpen(false)}
                                onMouseEnter={() => handleProductItemHover(cat)}
                                onMouseLeave={handleProductItemLeave}
                            >
                                {cat.name}
                            </Link>
                        ))}
                    </div>
                    {/* Column 5 - Image Preview */}
                    <div className="hidden xl:block">
                        <div className="sticky top-0">
                            <h4 className="text-lg font-semibold text-gray-700 mb-3 border-b border-gray-200 pb-2">
                                Product Preview
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

export default ProductDropdown