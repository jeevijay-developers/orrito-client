"use client";
import React, { useEffect, useState } from "react";
import {
  Download,
  ArrowRight,
  CheckCircle,
  ShoppingCart,
  Star,
} from "lucide-react";
import Image from "next/image";
import {
  getSolutionById,
  getAllSolutionsByCategory,
} from "@/server/solutionServer";
import Link from "next/link";
import { useQuery } from "@/context/QueryContext";
import { Minus, Plus, Trash2 } from "lucide-react";
export default function SolutionById({ id }) {
  const { addToQuery, queryItems, updateQuantity, deleteQuery, checkQuery } =
    useQuery();
  
  const [solution, setSolution] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedImage, setSelectedImage] = useState("");
  const [categorySolutions, setCategorySolutions] = useState([]);

  useEffect(() => {
    if (id) {
      fetchSolution(id);
    }
  }, [id]);

  useEffect(() => {
    if (solution && solution.categoryName && solution.categoryName.length > 0) {
      // Fetch solutions for the first category
      fetchCategorySolutions();
    }
  }, [solution]);

  const fetchSolution = async (solutionId) => {
    try {
      const solutionData = await getSolutionById(solutionId);
      console.log('Solution data received:', solutionData);
      setSolution(solutionData);
      if (solutionData?.images && solutionData.images.length > 0) {
        setSelectedImage(solutionData.images[0].url);
      }
    } catch (error) {
      setError("Failed to load solution. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const fetchCategorySolutions = async () => {
    try {
      const solutions = localStorage.getItem("solutionsByCategory");
      // console.log('Products from localStorage:', JSON.parse(solutions).products);

      setCategorySolutions(JSON.parse(solutions).products);
    } catch (error) {
      // Optionally handle error
    }
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  const formatCategoryName = (categoryName) => {
    return categoryName?.charAt(0).toUpperCase() + categoryName?.slice(1);
  };

  if (loading) {
    return (
      <div className="min-h-screen mt-32 p-4 sm:p-6">
        <div className="max-w-7xl mx-auto">
          <div className="animate-pulse">
            <div className="h-6 sm:h-8 bg-gray-300 rounded w-1/2 sm:w-1/3 mb-6 sm:mb-8"></div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-8">
              <div className="h-64 sm:h-80 lg:h-96 bg-gray-300 rounded-xl"></div>
              <div className="space-y-4">
                <div className="h-4 sm:h-6 bg-gray-300 rounded w-3/4"></div>
                <div className="h-3 sm:h-4 bg-gray-300 rounded w-1/2"></div>
                <div className="h-6 sm:h-8 bg-gray-300 rounded w-1/4"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen mt-32 p-4 sm:p-6 flex items-center justify-center">
        <div className="text-center">
          <div className="text-red-500 text-xl mb-4">⚠️ Error</div>
          <p className="text-gray-600 mb-4 text-sm sm:text-base">{error}</p>
          <button
            onClick={() => id && fetchSolution(id)}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition-colors text-sm sm:text-base"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  if (!solution) {
    return (
      <div className="min-h-screen mt-32 p-4 sm:p-6 flex items-center justify-center">
        <div className="text-center">
          <div className="text-gray-400 text-4xl sm:text-6xl mb-4">📦</div>
          <h3 className="text-lg sm:text-xl font-semibold text-gray-700 mb-2">
            Solution not found
          </h3>
          <p className="text-gray-500 text-sm sm:text-base">
            The solution you're looking for doesn't exist.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with Title and Download Button */}
      <div className="bg-white border-b border-gray-200 px-4 sm:px-6 py-4 mt-32 sm:mt-40">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
            <h1 className="text-xl sm:text-2xl font-bold text-gray-900">
              {solution.name}
            </h1>
            <div className="flex items-center gap-2 flex-wrap">
              {solution.categoryName &&
                solution.categoryName.map((cat, index) => (
                  <span
                    key={index}
                    className="inline-block bg-gray-200 text-black-700 text-xs px-2 py-1 rounded-full font-medium"
                  >
                    {formatCategoryName(cat)}
                  </span>
                ))}
            </div>
          </div>
          <button className="flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md  transition-colors text-sm w-full sm:w-auto cursor-pointer">
            <Download size={16} />
            <span className="sm:inline">Download pdf</span>
          </button>
        </div>
      </div>

      {/* Main Layout */}
      <div className="max-w-7xl mx-auto p-4 sm:p-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6">
          {/* Left Sidebar - Solution List */}
          <div className="lg:col-span-3 order-2 lg:order-1">
            <div className="bg-white rounded-lg border border-gray-200 p-4 lg:sticky lg:top-32">
              <h3 className="text-sm font-medium text-gray-700 mb-3">
                Solutions
              </h3>
              <div className="space-y-2 max-h-96 lg:max-h-screen overflow-y-auto">
                {categorySolutions.map((s) => (
                  <Link key={s._id} href={`/solutions/product/${s._id}`}>
                    <span
                      className={`block cursor-pointer text-sm py-2 px-3 rounded border-b border-gray-100 hover:bg-gray-100 transition-colors ${
                        s._id === id
                          ? "bg-gray-100 text-black-700 font-semibold"
                          : "text-gray-600"
                      }`}
                    >
                      {formatCategoryName(s.name)}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content Area */}
          <div className="lg:col-span-9 order-1 lg:order-2">
            {/* Main Image Area */}
            <div className="bg-white rounded-lg border border-gray-200 p-4 sm:p-6 mb-4 sm:mb-6">
              <div className="relative w-full h-64 sm:h-80 lg:h-96 bg-gray-100 rounded-lg flex items-center justify-center">
                {selectedImage ? (
                  <Image
                    src={selectedImage}
                    alt={solution.name}
                    fill
                    className="object-contain rounded-lg"
                  />
                ) : (
                  <div className="text-center">
                    <div className="text-gray-400 text-lg mb-2">
                      {solution.name} Image
                    </div>
                    <div className="text-gray-300 text-sm">
                      No image available
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Image Gallery */}
            {solution.images && solution.images.length > 0 && (
              <div className="bg-white rounded-lg border border-gray-200 p-4 mb-4 sm:mb-6">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4">
                  {solution.images.map((image, index) => (
                    <div
                      key={index}
                      className="relative h-16 sm:h-20 bg-gray-100 rounded border border-gray-200 cursor-pointer hover:border-blue-500 transition-colors"
                      onClick={() => setSelectedImage(image.url)}
                    >
                      <Image
                        src={image.url}
                        alt={`img${index + 1}`}
                        fill
                        className="object-cover rounded"
                      />
                    </div>
                  ))}
                  {/* Fill remaining slots if less than 4 images */}
                  {[
                    ...Array(Math.max(0, 4 - (solution.images?.length || 0))),
                  ].map((_, index) => (
                    <div
                      key={`empty-${index}`}
                      className="h-16 sm:h-20 bg-gray-100 rounded border border-gray-200 flex items-center justify-center"
                    >
                      <span className="text-gray-400 text-xs">
                        img{(solution.images?.length || 0) + index + 1}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Features Section */}
            <div className="bg-white rounded-lg border border-gray-200 p-4 sm:p-6">
              <p className="text-gray-700 text-sm leading-relaxed mb-0 sm:mb-5">
                {solution.productOverview ||
                  "No description available for this product."}
              </p>
              <h2 className="text-lg font-bold text-gray-900 mb-4">
                FEATURES:
              </h2>
              <div className="space-y-3">
                {solution.highlights && solution.highlights.length > 0 ? (
                  solution.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="text-orange-500 mt-1 flex-shrink-0">
                        ▷
                      </div>
                      <span className="text-gray-700 text-sm leading-relaxed">
                        {highlight}
                      </span>
                    </div>
                  ))
                ) : (
                  // Default features
                  <>
                    <div className="flex items-start gap-3">
                      <div className="text-orange-500 mt-1 flex-shrink-0">
                        ▷
                      </div>
                      <span className="text-gray-700 text-sm leading-relaxed">
                        Comprehensive solution design
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="text-orange-500 mt-1 flex-shrink-0">
                        ▷
                      </div>
                      <span className="text-gray-700 text-sm leading-relaxed">
                        Professional installation and support
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="text-orange-500 mt-1 flex-shrink-0">
                        ▷
                      </div>
                      <span className="text-gray-700 text-sm leading-relaxed">
                        High-quality materials and components
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="text-orange-500 mt-1 flex-shrink-0">
                        ▷
                      </div>
                      <span className="text-gray-700 text-sm leading-relaxed">
                        Customizable to meet specific requirements
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="text-orange-500 mt-1 flex-shrink-0">
                        ▷
                      </div>
                      <span className="text-gray-700 text-sm leading-relaxed">
                        Long-term warranty and maintenance
                      </span>
                    </div>
                  </>
                )}
              </div>

              {/* Solution Info */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                {solution.stock > 0 && (
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
                    <div className="text-2xl font-bold text-gray-900">
                      {formatPrice(solution.price)}
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-green-600 text-sm font-medium bg-green-100 px-3 py-1 rounded-full">
                        Available
                      </span>
                    </div>
                  </div>
                )}

                {solution.stock ? (
                  <div className="flex flex-col sm:flex-row gap-4 mb-4">
                    {checkQuery(solution._id) ? (
                      <div className="flex-1 flex items-center justify-center gap-2 border border-gray-200 rounded-lg p-2 max-w-xs mx-auto sm:mx-0 bg-gray-200">
                        <button
                          className="p-1.5 text-gray-600 hover:text-orange-500 transition-colors rounded-full hover:bg-gray-100"
                          onClick={() => {
                            const item = queryItems.find(
                              (item) => item.id === solution._id
                            );
                            if (item && item.quantity > 1) {
                              updateQuantity(solution._id, item.quantity - 1);
                            } else {
                              deleteQuery(solution._id);
                            }
                          }}
                        >
                          <Minus size={20} />
                        </button>

                        <div className="flex flex-col items-center">
                          <input
                            type="number"
                            className="text-gray-800 font-medium text-lg w-full text-center bg-white rounded border border-gray-300"
                            value={
                              queryItems.find((item) => item.id === solution._id)
                                ?.quantity ?? ""
                            }
                            onChange={(e) => {
                              const val = e.target.value;
                              if (val === "") {
                                updateQuantity(solution._id, "");
                              } else {
                                const num = parseInt(val);
                                if (!isNaN(num) && num >= 0) {
                                  updateQuantity(solution._id, num);
                                }
                              }
                            }}
                            onBlur={(e) => {
                              const val = e.target.value.trim();
                              const num = parseInt(val);
                              if (val === "" || isNaN(num) || num < 1) {
                                updateQuantity(solution._id, 1);
                              }
                            }}
                            // min="0"
                            max={solution.stock}
                          />
                          {/* <span className="text-xs text-gray-500">in cart</span> */}
                        </div>

                        <button
                          className="p-2 text-gray-600 hover:text-orange-500 transition-colors rounded-full hover:bg-gray-100"
                          onClick={() => {
                            const item = queryItems.find(
                              (item) => item.id === solution._id
                            );
                            if (item) {
                              updateQuantity(solution._id, item.quantity + 1);
                            }
                          }}
                        >
                          <Plus size={20} />
                        </button>

                        <button
                          className="p-2 text-gray-600 hover:text-red-500 transition-colors rounded-full hover:bg-gray-100 ml-2"
                          onClick={() => deleteQuery(solution._id)}
                        >
                          <Trash2 size={20} />
                        </button>
                      </div>
                    ) : (
                      <button
                        className="flex-1 cursor-pointer bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg transition-colors flex items-center justify-center gap-2"
                        onClick={() => {
                          addToQuery({
                            id: solution._id,
                            name: solution.name,
                            price: solution.price,
                            quantity: 1,
                          });
                        }}
                      >
                        <ShoppingCart size={20} />
                        Add to Cart
                      </button>
                    )}
                  </div>
                ) : (
                  <div className="flex flex-col sm:flex-row gap-4 mb-4">
                    <button className="flex-1 cursor-not-allowed bg-gray-500 hover:bg-gray-600 text-white px-6 py-3 rounded-lg  transition-colors flex items-center justify-center gap-2">
                      <ShoppingCart size={20} />
                      Out Of Stock
                    </button>
                  </div>
                )}

                {solution.description && (
                  <div className="mt-4">
                    <h3 className="text-sm font-semibold text-gray-800 mb-2">
                      Description
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {solution.description}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Attributes Section as Table */}
        {solution.attributes &&
          Array.isArray(solution.attributes) &&
          solution.attributes.length > 0 && (
            <div className="w-full overflow-x-auto bg-white rounded-lg border border-gray-200 p-4 sm:p-6 mt-4 sm:mt-6">
              <h2 className="text-lg font-bold text-gray-900 mb-4">
                SPECIFICATION
              </h2>
              <div className="overflow-x-auto">
                <table className="min-w-full border-collapse">
                  <thead>
                    <tr>
                      {solution.attributes.map((attribute, idx) => (
                        <th
                          key={attribute._id || idx}
                          className="px-2 sm:px-4 py-2 border-b border-gray-200 text-left font-semibold text-gray-800 capitalize bg-gray-50 text-sm"
                        >
                          {attribute.name}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {/* Find max number of variants among all attributes */}
                    {(() => {
                      const maxVariants = Math.max(
                        ...solution.attributes.map(
                          (attr) => attr.varients?.length || 0
                        )
                      );
                      return Array.from({ length: maxVariants }).map(
                        (_, rowIdx) => (
                          <tr key={rowIdx}>
                            {solution.attributes.map((attribute, colIdx) => {
                              const variant =
                                attribute.varients &&
                                attribute.varients[rowIdx];
                              return (
                                <td
                                  key={colIdx}
                                  className="px-2 sm:px-4 py-2 border-b border-gray-100 text-sm text-gray-700"
                                >
                                  {variant ? (
                                    <div className="flex flex-col sm:flex-row gap-1 sm:gap-3">
                                      <span className="text-xs sm:text-sm">
                                        {variant.name ||
                                          `Variant ${rowIdx + 1}`}
                                      </span>
                                      <span
                                        className={`text-[8px] sm:text-[10px] px-1 sm:px-2 py-1 rounded-full font-medium w-fit ${
                                          variant.enabled
                                            ? "bg-green-100 text-green-800"
                                            : "bg-red-100 text-red-800"
                                        }`}
                                      >
                                        {variant.enabled
                                          ? "Available"
                                          : "Unavailable"}
                                      </span>
                                    </div>
                                  ) : (
                                    <span className="text-gray-400 italic">
                                      -
                                    </span>
                                  )}
                                </td>
                              );
                            })}
                          </tr>
                        )
                      );
                    })()}
                  </tbody>
                </table>
              </div>
            </div>
          )}

        {/* Related Solutions */}
        {solution.relatedSolutions && solution.relatedSolutions.length > 0 && (
          <div className="bg-white rounded-lg border border-gray-200 p-4 sm:p-6 mt-4 sm:mt-6">
            <h2 className="text-lg font-bold text-gray-900 mb-4">
              RELATED SOLUTIONS
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {solution.relatedSolutions.map((relatedSolution, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                >
                  <div className="relative h-20 sm:h-24 bg-gray-100 rounded-md mb-3">
                    {relatedSolution.image ? (
                      <Image
                        src={relatedSolution.image}
                        alt={relatedSolution.name}
                        fill
                        className="object-cover rounded-md"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <span className="text-gray-400 text-xl">📷</span>
                      </div>
                    )}
                  </div>
                  <h4 className="font-medium text-gray-800 mb-1 text-sm">
                    {relatedSolution.name}
                  </h4>
                  {relatedSolution.price && (
                    <p className="text-orange-600 font-bold text-sm">
                      {formatPrice(relatedSolution.price)}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
