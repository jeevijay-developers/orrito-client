"use client";
import React, { useEffect, useState } from "react";
import { Download, ShoppingCart, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useQuery } from "@/context/QueryContext";
import { Minus, Plus, Trash2 } from "lucide-react";
export default function SolarById({ id }) {
  const { addToQuery, queryItems, updateQuantity, deleteQuery, checkQuery } =
    useQuery();
  const [solar, setSolar] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedImage, setSelectedImage] = useState("");
  const [categorySolars, setCategorySolars] = useState([]);
  useEffect(() => {
    if (id) {
      fetchSolar(id);
    }
  }, [id]);

  useEffect(() => {
    fetchCategorySolars();
  }, []);

  const fetchSolar = async (solarId) => {
    try {
      const solars = JSON.parse(localStorage.getItem("solarData")) || [];
      const foundSolar = solars.find((s) => s._id === solarId);
      if (foundSolar) {
        setSolar(foundSolar);
        if (foundSolar?.images?.length > 0) {
          setSelectedImage(foundSolar.images[0].url);
        }
      } else {
        setError("Solar product not found.");
      }
    } catch (error) {
      console.error("Failed to fetch solar product:", error);
      setError("Failed to load solar product. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const fetchCategorySolars = () => {
    try {
      const solars = JSON.parse(localStorage.getItem("solarData")) || [];
      setCategorySolars(solars);
    } catch (error) {
      console.error("Failed to load category solars from localStorage", error);
    }
  };

  const formatPrice = (price) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);

  const formatCategoryName = (categoryName) =>
    categoryName?.charAt(0).toUpperCase() + categoryName?.slice(1);

  if (loading) {
    return <div className="min-h-screen mt-32 p-4 sm:p-6">Loading...</div>;
  }

  if (error) {
    return (
      <div className="min-h-screen mt-32 p-4 sm:p-6 flex items-center justify-center">
        <div className="text-center">
          <div className="text-red-500 text-xl mb-4">⚠️ Error</div>
          <p className="text-gray-600 mb-4 text-sm sm:text-base">{error}</p>
          <button
            onClick={() => id && fetchSolar(id)}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition-colors text-sm sm:text-base"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  if (!solar) {
    return (
      <div className="min-h-screen mt-32 p-4 sm:p-6 flex items-center justify-center">
        <div className="text-center">
          <div className="text-gray-400 text-4xl sm:text-6xl mb-4">📦</div>
          <h3 className="text-lg sm:text-xl font-semibold text-gray-700 mb-2">
            Solar Product Not Found
          </h3>
          <p className="text-gray-500 text-sm sm:text-base">
            The solar product you're looking for doesn't exist.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen mt-48  bg-gray-50">
      <div className="bg-white border-b border-gray-200 px-4 sm:px-6 py-4 mt-32 sm:mt-40">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
            <h1 className="text-xl sm:text-2xl font-bold text-gray-900">
              {solar.name}
            </h1>
            <div className="flex items-center gap-2 flex-wrap">
              {solar.categoryName?.map((cat, index) => (
                <span
                  key={index}
                  className="inline-block bg-blue-100 text-orange-800 text-xs px-2 py-1 rounded-full font-medium"
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

      <div className="max-w-7xl mx-auto p-4 sm:p-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6">
          {/* Sidebar: Other solar products */}
          <div className="lg:col-span-3 order-2 lg:order-1">
            <div className="bg-white rounded-lg border border-gray-200 p-4 lg:sticky lg:top-32">
              <h3 className="text-sm font-medium text-gray-700 mb-3">
                Solar Products
              </h3>
              <div className="space-y-2 max-h-96 lg:max-h-screen overflow-y-auto">
                {categorySolars.map((s) => (
                  <Link key={s._id} href={`/solar/product/${s._id}`}>
                    <span
                      className={`block cursor-pointer text-sm py-2 px-3 rounded border-b border-gray-100 hover:bg-gray-50 transition-colors ${
                        s._id === id
                          ? "bg-blue-50 text-orange-700 font-semibold"
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

          {/* Main content */}
          <div className="lg:col-span-9 order-1 lg:order-2">
            {/* Image */}
            <div className="bg-white rounded-lg border border-gray-200 p-4 sm:p-6 mb-4 sm:mb-6">
              <div className="relative w-full h-64 sm:h-80 lg:h-96 bg-gray-100 rounded-lg flex items-center justify-center">
                {selectedImage ? (
                  <Image
                    src={selectedImage}
                    alt={solar.name}
                    fill
                    className="object-contain rounded-lg"
                  />
                ) : (
                  <div className="text-center">
                    <div className="text-gray-400 text-lg mb-2">
                      {solar.name} Image
                    </div>
                    <div className="text-gray-300 text-sm">
                      No image available
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Gallery */}
            {solar.images?.length > 0 && (
              <div className="bg-white rounded-lg border border-gray-200 p-4 mb-4 sm:mb-6">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4">
                  {solar.images.map((image, index) => (
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
                </div>
              </div>
            )}
            {/* Product Overview */}
            <div className="bg-white rounded-lg border border-gray-200 p-4 sm:p-6 mb-4 sm:mb-6">
              <h2 className="text-lg font-bold text-gray-900 mb-4">
                PRODUCT OVERVIEW
              </h2>

              {solar.productOverview && (
                <div>
                  <div
                    className="text-gray-600 text-sm"
                    dangerouslySetInnerHTML={{ __html: solar.productOverview }}
                  />
                </div>
              )}
            </div>

            {/* Features */}
            <div className="bg-white rounded-lg border border-gray-200 p-4 sm:p-6">
              <h2 className="text-lg font-bold text-gray-900 mb-4">
                FEATURES:
              </h2>
              <div className="space-y-3">
                {solar.highlights?.length > 0
                  ? solar.highlights.map((highlight, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="text-orange-500 mt-1 flex-shrink-0">
                          ▷
                        </div>
                        <span className="text-gray-700 text-sm leading-relaxed">
                          {highlight}
                        </span>
                      </div>
                    ))
                  : "No highlights available."}
              </div>

              {/* Price & Description */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                {solar.price && (
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
                    <div className="text-2xl font-bold text-gray-900">
                      {formatPrice(solar.price)}
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-green-600 text-sm font-medium bg-green-100 px-3 py-1 rounded-full">
                        {solar.stock > 0 ? "In Stock" : "Out of Stock"}
                      </span>
                    </div>
                  </div>
                )}

                {solar.stock ? (
                  <div className="flex flex-col sm:flex-row gap-4 mb-4">
                    {checkQuery(solar._id) ? (
                      <div className="flex-1 flex items-center justify-center gap-2 border border-gray-200 rounded-lg p-2 max-w-xs mx-auto sm:mx-0 bg-gray-200">
                        <button
                          className="p-1.5 text-gray-600 hover:text-orange-500 transition-colors rounded-full hover:bg-gray-100"
                          onClick={() => {
                            const item = queryItems.find(
                              (item) => item.id === solar._id
                            );
                            if (item && item.quantity > 1) {
                              updateQuantity(solar._id, item.quantity - 1);
                            } else {
                              deleteQuery(solar._id);
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
                              queryItems.find((item) => item.id === solar._id)
                                ?.quantity ?? ""
                            }
                            onChange={(e) => {
                              const val = e.target.value;
                              if (val === "") {
                                updateQuantity(solar._id, "");
                              } else {
                                const num = parseInt(val);
                                if (!isNaN(num) && num >= 0) {
                                  updateQuantity(solar._id, num);
                                }
                              }
                            }}
                            onBlur={(e) => {
                              const val = e.target.value.trim();
                              const num = parseInt(val);
                              if (val === "" || isNaN(num) || num < 1) {
                                updateQuantity(solar._id, 1);
                              }
                            }}
                            // min="0"
                            max={solar.stock}
                          />
                          {/* <span className="text-xs text-gray-500">in cart</span> */}
                        </div>

                        <button
                          className="p-2 text-gray-600 hover:text-orange-500 transition-colors rounded-full hover:bg-gray-100"
                          onClick={() => {
                            const item = queryItems.find(
                              (item) => item.id === solar._id
                            );
                            if (item) {
                              updateQuantity(solar._id, item.quantity + 1);
                            }
                          }}
                        >
                          <Plus size={20} />
                        </button>

                        <button
                          className="p-2 text-gray-600 hover:text-red-500 transition-colors rounded-full hover:bg-gray-100 ml-2"
                          onClick={() => deleteQuery(solar._id)}
                        >
                          <Trash2 size={20} />
                        </button>
                      </div>
                    ) : (
                      <button
                        className="flex-1 cursor-pointer bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg transition-colors flex items-center justify-center gap-2"
                        onClick={() => {
                          addToQuery({
                            id: solar._id,
                            name: solar.name,
                            price: solar.price,
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

                {solar.description && (
                  <div className="mt-4">
                    <h3 className="text-sm font-semibold text-gray-800 mb-2">
                      Description
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {solar.description}
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Specification Table */}
            {solar.attributes?.length > 0 && (
              <div className="w-full overflow-x-auto bg-white rounded-lg border border-gray-200 p-4 sm:p-6 mt-4 sm:mt-6">
                <h2 className="text-lg font-bold text-gray-900 mb-4">
                  SPECIFICATION
                </h2>
                <table className="min-w-full border-collapse">
                  <thead>
                    <tr>
                      {solar.attributes.map((attribute, idx) => (
                        <th
                          key={idx}
                          className="px-2 sm:px-4 py-2 border-b border-gray-200 text-left font-semibold text-gray-800 capitalize bg-gray-50 text-sm"
                        >
                          {attribute.name}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {(() => {
                      const maxVariants = Math.max(
                        ...solar.attributes.map((a) => a.varients?.length || 0)
                      );
                      return Array.from({ length: maxVariants }).map(
                        (_, rowIdx) => (
                          <tr key={rowIdx}>
                            {solar.attributes.map((attribute, colIdx) => {
                              const variant = attribute.varients?.[rowIdx];
                              return (
                                <td
                                  key={colIdx}
                                  className="px-2 sm:px-4 py-2 border-b border-gray-100 text-sm text-gray-700"
                                >
                                  {variant ? (
                                    <div className="flex flex-col sm:flex-row gap-1 sm:gap-3">
                                      <span className="text-xs sm:text-sm">
                                        {variant.name}
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
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
