import Link from 'next/link'
import React from 'react'
import {solutionCategories} from '@/service/Data'

const SolutionsDropdown = ({ dropdownRef, handleSolutionHover, handleSolutionLeave, setIsSolutionDropdownOpen }) => {
    return (
        <div
            ref={dropdownRef}
            className="absolute top-full mt-1 left-1/2 transform -translate-x-1/4 w-screen max-w-4xl bg-white border border-gray-200 rounded-lg shadow-2xl z-50"
            onMouseEnter={handleSolutionHover}
            onMouseLeave={handleSolutionLeave}
        >
            <div className="p-8 w-full">
                <div className="grid grid-cols-1 md:grid-cols-2">
                    {solutionCategories.slice(0,7).map((cat, i) => (
                        <Link key={i} href={cat.href} className="text-gray-600 hover:text-orange-500 hover:bg-orange-50 px-3 py-2 rounded-md text-sm transition-colors duration-200 block" onClick={() => setIsSolutionDropdownOpen(false)}>
                            {cat.name}
                        </Link>
                    ))}
                    {solutionCategories.slice(7).map((cat, i) => (
                        <Link key={i+7} href={cat.href} className="text-gray-600 hover:text-orange-500 hover:bg-orange-50 px-3 py-2 rounded-md text-sm transition-colors duration-200 block" onClick={() => setIsSolutionDropdownOpen(false)}>
                            {cat.name}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default SolutionsDropdown
