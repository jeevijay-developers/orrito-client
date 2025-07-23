"use client";
import React, { useEffect, useState } from "react";
import { Download, ShoppingCart, Star } from "lucide-react";
import Image from "next/image";
import {
  getProductBySlug,
  getAllProductsByCategory,
} from "@/server/categoryServer";
import Link from "next/link";
import { useBreadcrumb } from "@/context/BreadcrumbContext";
import { useQuery } from "@/context/QueryContext";
import { Minus, Plus, Trash2 } from "lucide-react";
export default function ProductBySlug({ slug }) {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { setBreadcrumb } = useBreadcrumb();
  const [error, setError] = useState(null);
  const [selectedImage, setSelectedImage] = useState("");
  const [categoryProducts, setCategoryProducts] = useState([]);
  const { addToQuery, queryItems, updateQuantity, deleteQuery, checkQuery } = useQuery();
  useEffect(() => {
    if (slug) {
      setProduct(null);
      fetchProduct(slug);
    }
  }, [slug]);

  useEffect(() => {
    if (product && product.categoryName && product.categoryName.length > 0) {
      fetchCategoryProducts(product.categoryName[0]);
    }
  }, [product]);

  useEffect(() => {
    if (
      product &&
      product.name &&
      product.categoryName &&
      product.categoryName.length > 0
    ) {
      // Set breadcrumb with category and product info
      setBreadcrumb(window.location.pathname, {
        name: product.name,
        category: product.categoryName[0], // Use first category
      });
    }
  }, [product, setBreadcrumb]);

  const fetchProduct = async (productSlug) => {
    try {
      const productData = await getProductBySlug(productSlug);
      console.log("Product data received:", productData);
      //   console.log('Attributes:', productData?.attributes);
      setProduct(productData);
      if (productData?.images && productData.images.length > 0) {
        setSelectedImage(productData.images[0].url);
      }
    } catch (error) {
      setError("Failed to load product. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const fetchCategoryProducts = async (categoryName) => {
    try {
      const products = await getAllProductsByCategory(categoryName);
      setCategoryProducts(products);
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
            onClick={() => slug && fetchProduct(slug)}
            className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md transition-colors text-sm sm:text-base"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen mt-32 p-4 sm:p-6 flex items-center justify-center">
        <div className="text-center">
          <div className="text-gray-400 text-4xl sm:text-6xl mb-4">📦</div>
          <h3 className="text-lg sm:text-xl font-semibold text-gray-700 mb-2">
            Product not found
          </h3>
          <p className="text-gray-500 text-sm sm:text-base">
            The product you're looking for doesn't exist.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with Title and Download Button */}
      <div className="bg-white border-b border-gray-200 px-4 sm:px-6 py-4 mt-32 sm:mt-40">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mt-15 sm:mt-0">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
            <h1 className="text-xl sm:text-2xl font-bold text-gray-900">
              {product.name}
            </h1>
            <div className="flex items-center gap-2 flex-wrap">
              {product.categoryName &&
                product.categoryName.map((cat, index) => (
                  <span
                    key={index}
                    className="inline-block bg-orange-100 text-white-800 text-xs px-2 py-1 rounded-full font-medium"
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
          {/* Left Sidebar - Product List - Hidden on mobile, collapsible */}
          <div className="lg:col-span-3 order-2 lg:order-1">
            <div className="bg-white rounded-lg border border-gray-200 p-4 lg:sticky lg:top-32">
              <h3 className="text-sm font-medium text-gray-700 mb-3">
                Products
              </h3>
              <div className="space-y-2 max-h-96 lg:max-h-screen overflow-y-auto">
                {categoryProducts.map((p) => (
                  <Link key={p._id} href={`/products/product/${p.slug}`}>
                    <span
                      className={`block cursor-pointer text-sm py-2 px-3 rounded border-b border-gray-100 hover:bg-gray-100 transition-colors ${
                        p.slug === slug
                          ? "bg-gray-100 text-black-700 font-semibold"
                          : "text-gray-600"
                      }`}
                    >
                      {formatCategoryName(p.name)}
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
                    alt={product.name}
                    fill
                    className="object-contain rounded-lg"
                  />
                ) : (
                  <div className="text-center">
                    <div className="text-gray-400 text-lg mb-2">
                      {product.name} Image
                    </div>
                    <div className="text-gray-300 text-sm">
                      No image available
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Image Gallery */}
            {product.images && product.images.length > 0 && (
              <div className="bg-white rounded-lg border border-gray-200 p-4 mb-4 sm:mb-6">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4">
                  {product.images.map((image, index) => (
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
                    ...Array(Math.max(0, 4 - (product.images?.length || 0))),
                  ].map((_, index) => (
                    <div
                      key={`empty-${index}`}
                      className="h-16 sm:h-20 bg-gray-100 rounded border border-gray-200 flex items-center justify-center"
                    >
                      <span className="text-gray-400 text-xs">
                        img{(product.images?.length || 0) + index + 1}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Features Section */}
            <div className="bg-white rounded-lg border border-gray-200 p-4 sm:p-6">
              <p className="text-gray-700 text-sm leading-relaxed mb-0 sm:mb-5">
                {product.productOverview ||
                  "No description available for this product."}
              </p>
              <h2 className="text-lg font-bold text-gray-900 mb-4">
                FEATURES:
              </h2>
              <div className="space-y-3">
                {product.highlights && product.highlights.length > 0 ? (
                  product.highlights.map((highlight, index) => (
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
                  // Default features from wireframe
                  <>
                    <div className="flex items-start gap-3">
                      <div className="text-orange-500 mt-1 flex-shrink-0">
                        ▷
                      </div>
                      <span className="text-gray-700 text-sm leading-relaxed">
                        Mounting : Suspended
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="text-orange-500 mt-1 flex-shrink-0">
                        ▷
                      </div>
                      <span className="text-gray-700 text-sm leading-relaxed">
                        Housing : Pressure die cast aluminium
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="text-orange-500 mt-1 flex-shrink-0">
                        ▷
                      </div>
                      <span className="text-gray-700 text-sm leading-relaxed">
                        Finishes : Anodized Aluminium
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="text-orange-500 mt-1 flex-shrink-0">
                        ▷
                      </div>
                      <span className="text-gray-700 text-sm leading-relaxed">
                        Installation Holder : Stainless Steel
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="text-orange-500 mt-1 flex-shrink-0">
                        ▷
                      </div>
                      <span className="text-gray-700 text-sm leading-relaxed">
                        Best in class power LEDs
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="text-orange-500 mt-1 flex-shrink-0">
                        ▷
                      </div>
                      <span className="text-gray-700 text-sm leading-relaxed">
                        Standard Body Colour : White & Other option available
                      </span>
                    </div>
                  </>
                )}
              </div>

              {/* Product Info */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
                  <div className="text-2xl font-bold text-gray-900">
                    {formatPrice(product.price)}
                  </div>
                  <div className="flex items-center gap-2">
                    {product.stock > 0 ? (
                      <span className="text-green-600 text-sm font-medium bg-green-100 px-3 py-1 rounded-full">
                        In Stock ({product.stock} available)
                      </span>
                    ) : (
                      <span className="text-red-600 text-sm font-medium bg-red-100 px-3 py-1 rounded-full">
                        Out of Stock
                      </span>
                    )}
                  </div>
                </div>

                {product.stock ? (
                  <div className="flex flex-col sm:flex-row gap-4 mb-4">
                    {checkQuery(product._id) ? (
                      <div className="flex-1 flex items-center justify-center gap-2 border border-gray-200 rounded-lg p-2 max-w-xs mx-auto sm:mx-0 bg-gray-200">
                        <button
                          className="p-1.5 text-gray-600 hover:text-orange-500 transition-colors rounded-full hover:bg-gray-100"
                          onClick={() => {
                            const item = queryItems.find(
                              (item) => item.id === product._id
                            );
                            if (item && item.quantity > 1) {
                              updateQuantity(product._id, item.quantity - 1);
                            } else {
                              deleteQuery(product._id);
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
                              queryItems.find((item) => item.id === product._id)
                                ?.quantity ?? ""
                            }
                            onChange={(e) => {
                              const val = e.target.value;
                              if (val === "") {
                                updateQuantity(product._id, "");
                              } else {
                                const num = parseInt(val);
                                if (!isNaN(num) && num >= 0) {
                                  updateQuantity(product._id, num);
                                }
                              }
                            }}
                            onBlur={(e) => {
                              const val = e.target.value.trim();
                              const num = parseInt(val);
                              if (val === "" || isNaN(num) || num < 1) {
                                updateQuantity(product._id, 1);
                              }
                            }}
                            // min="0"
                            max={product.stock}
                          />
                          {/* <span className="text-xs text-gray-500">in cart</span> */}
                        </div>

                        <button
                          className="p-2 text-gray-600 hover:text-orange-500 transition-colors rounded-full hover:bg-gray-100"
                          onClick={() => {
                            const item = queryItems.find(
                              (item) => item.id === product._id
                            );
                            if (item) {
                              updateQuantity(product._id, item.quantity + 1);
                            }
                          }}
                        >
                          <Plus size={20} />
                        </button>

                        <button
                          className="p-2 text-gray-600 hover:text-red-500 transition-colors rounded-full hover:bg-gray-100 ml-2"
                          onClick={() => deleteQuery(product._id)}
                        >
                          <Trash2 size={20} />
                        </button>
                      </div>
                    ) : (
                      <button
                        className="flex-1 cursor-pointer bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg transition-colors flex items-center justify-center gap-2"
                        onClick={() => {
                          addToQuery({
                            id: product._id,
                            name: product.name,
                            price: product.price,
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

                {product.description && (
                  <div className="mt-4">
                    <h3 className="text-sm font-semibold text-gray-800 mb-2">
                      Description
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {product.description}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Attributes Section as Table */}
        {product.attributes &&
          Array.isArray(product.attributes) &&
          product.attributes.length > 0 && (
            <div className="w-full overflow-x-auto bg-white rounded-lg border border-gray-200 p-4 sm:p-6 mt-4 sm:mt-6">
              <h2 className="text-lg font-bold text-gray-900 mb-4">
                SPECIFICATION
              </h2>
              <div className="overflow-x-auto">
                <table className="min-w-full border-collapse">
                  <thead>
                    <tr>
                      {product.attributes.map((attribute, idx) => (
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
                        ...product.attributes.map(
                          (attr) => attr.varients?.length || 0
                        )
                      );
                      return Array.from({ length: maxVariants }).map(
                        (_, rowIdx) => (
                          <tr key={rowIdx}>
                            {product.attributes.map((attribute, colIdx) => {
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
      </div>
    </div>
  );
}
