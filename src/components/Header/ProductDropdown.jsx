import Link from 'next/link'
import React from 'react'
import {productCategories} from '../../service/Data'

const ProductDropdown = ({dropdownRef, handleProductHover, handleProductLeave, setIsProductDropdownOpen}) => {
    return (
        <div
            ref={dropdownRef}
            className="absolute top-full mt-1 left-1/2 transform -translate-x-1/4 w-screen max-w-5xl bg-white border border-gray-200 rounded-lg shadow-2xl z-50"
            onMouseEnter={handleProductHover}
            onMouseLeave={handleProductLeave}
        >
            <div className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {/* Column 1 */}
                    <div className="space-y-3">
                        <h4 className="text-lg font-semibold text-orange-500 mb-3 border-b border-orange-200 pb-2">
                            Indoor Lighting
                        </h4>
                        {productCategories.slice(0,6).map((cat, i) => (
                            <Link key={i} href={cat.href} className="text-gray-600 hover:text-orange-500 hover:bg-orange-50 px-3 py-2 rounded-md text-sm transition-colors duration-200 block" onClick={() => setIsProductDropdownOpen(false)}>
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
                            <Link key={i} href={cat.href} className="text-gray-600 hover:text-orange-500 hover:bg-orange-50 px-3 py-2 rounded-md text-sm transition-colors duration-200 block" onClick={() => setIsProductDropdownOpen(false)}>
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
                            <Link key={i} href={cat.href} className="text-gray-600 hover:text-orange-500 hover:bg-orange-50 px-3 py-2 rounded-md text-sm transition-colors duration-200 block" onClick={() => setIsProductDropdownOpen(false)}>
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
                            <Link key={i} href={cat.href} className="text-gray-600 hover:text-orange-500 hover:bg-orange-50 px-3 py-2 rounded-md text-sm transition-colors duration-200 block" onClick={() => setIsProductDropdownOpen(false)}>
                                {cat.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDropdown