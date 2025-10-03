"use client";
import React from "react";
import Link from "next/link";

const ProductCard = ({ product }) => {

  return (
    <div className="group bg-gray-100 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200 flex flex-col h-full">
      {/* Product Image */}
      <Link href={`/products/product/${product.slug}`} className="block">
        <div className="relative h-48 bg-gray-50 overflow-hidden">
          <img
            src={"/categories/ceiling_fan.png" || product.image}
            alt={product.name}
            className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      </Link>

      {/* Product Details */}
      <div className="p-4 flex flex-col flex-grow">
        {/* Product Name */}
        <Link href={`/products/product/${product.slug}`}>
          <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2 min-h-[40px] hover:text-orange-500 transition-colors">
            {product.name}
          </h3>
        </Link>

        {/* Category */}
        <p className="text-xs text-gray-500 mb-3 border border-gray-400 py-1 px-2 w-fit rounded-md">{product.category}</p>
        <p className="text-xs text-gray-500 mb-3">{product.description || "A general description"}</p>

        {/* Price */}
        <div className="mb-3">
          <span className="text-lg font-bold text-gray-900">
            ₹{product.offerPrice}
          </span>
            <span className="text-sm text-gray-400 line-through ml-2">
              ₹{product?.originalPrice || "99999"}
            </span>
        </div>

        {/* Color Options */}
        <div className="mb-4">
          <div className="flex items-center gap-1 flex-wrap">
            <div className="w-5 h-5 rounded-full bg-red-500 border-2 border-gray-300 cursor-pointer hover:border-orange-500 transition-colors"></div>
            <div className="w-5 h-5 rounded-full bg-orange-500 border-2 border-gray-300 cursor-pointer hover:border-orange-500 transition-colors"></div>
            <div className="w-5 h-5 rounded-full bg-yellow-400 border-2 border-gray-300 cursor-pointer hover:border-orange-500 transition-colors"></div>
            <div className="w-5 h-5 rounded-full bg-green-500 border-2 border-gray-300 cursor-pointer hover:border-orange-500 transition-colors"></div>
            <div className="w-5 h-5 rounded-full bg-blue-500 border-2 border-gray-300 cursor-pointer hover:border-orange-500 transition-colors"></div>
            <div className="w-5 h-5 rounded-full bg-purple-600 border-2 border-gray-300 cursor-pointer hover:border-orange-500 transition-colors"></div>
          </div>
        </div>

        {/* View Details Link */}
        <div className="mt-auto">
          <Link
            href={`/products/product/${product.slug}`}
            className="block text-center text-gray-700 hover:text-orange-500 font-medium text-sm transition-colors duration-300 float-start"
          >
            View Details →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
