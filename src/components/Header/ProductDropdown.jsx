import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import {productCategories as fetchProductCategories} from '../../service/Data'
import Image from 'next/image';

const ProductDropdown = ({dropdownRef, handleProductHover, handleProductLeave, setIsProductDropdownOpen}) => {
    const [hoveredProduct, setHoveredProduct] = useState(null);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        async function getCategories() {
            try {
                const data = await fetchProductCategories();
                setCategories(Array.isArray(data) ? data : []);
            } catch (err) {
                setCategories([]);
            }
        }
        getCategories();
    }, []);

    const handleProductItemHover = (product) => {
        setHoveredProduct(product);
    };

    const handleProductItemLeave = () => {
        setHoveredProduct(null);
    };
    return (
        <div
            ref={dropdownRef}
            className="absolute top-full left-1/2 transform -translate-x-1/4 w-screen max-w-7xl bg-white border border-gray-200 rounded-lg shadow-2xl z-50"
            onMouseEnter={handleProductHover}
            onMouseLeave={handleProductLeave}
        >
            <div className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                    {/* Column 1 */}
                    <div className="space-y-3">
                        {categories.slice(0,6).map((cat, i) => (
                            <Link 
                                key={cat.id || i} 
                                href={`/products/${cat.name}` || '#'} 
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
                        {categories.slice(6,12).map((cat, i) => (
                            <Link 
                                key={cat.id || i} 
                                href={cat.href || '#'} 
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
                        {categories.slice(12,18).map((cat, i) => (
                            <Link 
                                key={cat.id || i} 
                                href={cat.name || '#'} 
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
                        {categories.slice(18).map((cat, i) => (
                            <Link 
                                key={cat.id || i} 
                                href={cat.href || '#'} 
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
                            <div className="bg-gray-50 rounded-lg p-4 transition-all duration-300">
                                {hoveredProduct && (
                                    <div className="space-y-3">
                                        <Image 
                                            src={hoveredProduct.image?.url || hoveredProduct.src || '/img/corporate/placeholder.png'} 
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