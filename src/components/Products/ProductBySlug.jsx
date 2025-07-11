"use client"
import React, { useEffect, useState } from "react";
import { Download, ArrowRight, CheckCircle, ShoppingCart, Star } from "lucide-react";
import Image from "next/image";
import { getProductBySlug, getAllProductsByCategory } from "@/server/categoryServer";
import Link from "next/link";

export default function ProductBySlug({ slug }) {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedImage, setSelectedImage] = useState("");
  const [categoryProducts, setCategoryProducts] = useState([]);

  useEffect(() => {
    if (slug) {
      fetchProduct(slug);
    }
  }, [slug]);

  useEffect(() => {
    if (product && product.categoryName && product.categoryName.length > 0) {
      // Fetch products for the first category
      fetchCategoryProducts(product.categoryName[0]);
    }
  }, [product]);

  const fetchProduct = async (productSlug) => {
    try {
      const productData = await getProductBySlug(productSlug);
      console.log('Product data received:', productData);
    //   console.log('Attributes:', productData?.attributes);
      setProduct(productData);
      if (productData?.images && productData.images.length > 0) {
        setSelectedImage(productData.images[0].url);
      }
    } catch (error) {
      setError('Failed to load product. Please try again.');
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
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  const formatCategoryName = (categoryName) => {
    return categoryName?.charAt(0).toUpperCase() + categoryName?.slice(1);
  };

  if (loading) {
    return (
      <div className="min-h-screen mt-32 p-6">
        <div className="max-w-7xl mx-auto">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-300 rounded w-1/3 mb-8"></div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="h-96 bg-gray-300 rounded-xl"></div>
              <div className="space-y-4">
                <div className="h-6 bg-gray-300 rounded w-3/4"></div>
                <div className="h-4 bg-gray-300 rounded w-1/2"></div>
                <div className="h-8 bg-gray-300 rounded w-1/4"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen mt-32 p-6 flex items-center justify-center">
        <div className="text-center">
          <div className="text-red-500 text-xl mb-4">⚠️ Error</div>
          <p className="text-gray-600 mb-4">{error}</p>
          <button
            onClick={() => slug && fetchProduct(slug)}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen mt-32 p-6 flex items-center justify-center">
        <div className="text-center">
          <div className="text-gray-400 text-6xl mb-4">📦</div>
          <h3 className="text-xl font-semibold text-gray-700 mb-2">Product not found</h3>
          <p className="text-gray-500">The product you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with Title and Download Button */}
      <div className="bg-white border-b border-gray-200 px-6 py-4 mt-32">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <h1 className="text-2xl font-bold text-gray-900">{product.name}</h1>
            <div className="flex items-center gap-2">
              {product.categoryName && product.categoryName.map((cat, index) => (
                <span
                  key={index}
                  className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full font-medium"
                >
                  {formatCategoryName(cat)}
                </span>
              ))}
            </div>
          </div>
          <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors text-sm">
            <Download size={16} />
            Download pdf
          </button>
        </div>
      </div>

      {/* Main Layout */}
      <div className="max-w-7xl mx-auto p-6">
        <div className="grid grid-cols-12 gap-6">
          {/* Left Sidebar - Product List */}
          <div className="col-span-3">
            <div className="bg-white rounded-lg border border-gray-200 p-4">
              <h3 className="text-sm font-medium text-gray-700 mb-3">Products</h3>
              <div className="space-y-2">
                {categoryProducts.map((p) => (
                  <Link key={p._id} href={`/products/product/${p.slug}`}>
                    <span
                      className={`block cursor-pointer text-sm py-2 px-3 rounded border-b border-gray-100 hover:bg-gray-50 ${p.slug === slug ? 'bg-blue-50 text-blue-700 font-semibold' : 'text-gray-600'}`}
                    >
                      {formatCategoryName(p.name)}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content Area */}
          <div className="col-span-9">
            {/* Main Image Area */}
            <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
              <div className="relative w-full h-96 bg-gray-100 rounded-lg flex items-center justify-center">
                {selectedImage ? (
                  <Image
                    src={selectedImage}
                    alt={product.name}
                    fill
                    className="object-contain rounded-lg"
                  />
                ) : (
                  <div className="text-center">
                    <div className="text-gray-400 text-lg mb-2">{product.name} Image</div>
                    <div className="text-gray-300 text-sm">No image available</div>
                  </div>
                )}
              </div>
            </div>

            {/* Image Gallery */}
            {product.images && product.images.length > 0 && (
              <div className="bg-white rounded-lg border border-gray-200 p-4 mb-6">
                <div className="grid grid-cols-4 gap-4">
                  {product.images.map((image, index) => (
                    <div
                      key={index}
                      className="relative h-20 bg-gray-100 rounded border border-gray-200 cursor-pointer hover:border-blue-500 transition-colors"
                      onClick={() => setSelectedImage(image.url)}
                    >
                      <Image
                        src={image.url}
                        alt={`img${index + 1}`}
                        fill
                        className="object-cover rounded"
                      />
                      <div className="absolute bottom-1 left-1 bg-white bg-opacity-80 text-xs px-1 rounded">
                        img{index + 1}
                      </div>
                    </div>
                  ))}
                  {/* Fill remaining slots if less than 4 images */}
                  {[...Array(Math.max(0, 4 - (product.images?.length || 0)))].map((_, index) => (
                    <div
                      key={`empty-${index}`}
                      className="h-20 bg-gray-100 rounded border border-gray-200 flex items-center justify-center"
                    >
                      <span className="text-gray-400 text-xs">img{(product.images?.length || 0) + index + 1}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Features Section */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h2 className="text-lg font-bold text-gray-900 mb-4">FEATURES:</h2>
              <div className="space-y-3">
                {product.highlights && product.highlights.length > 0 ? (
                  product.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="text-blue-500 mt-1">▷</div>
                      <span className="text-gray-700 text-sm">{highlight}</span>
                    </div>
                  ))
                ) : (
                  // Default features from wireframe
                  <>
                    <div className="flex items-start gap-3">
                      <div className="text-blue-500 mt-1">▷</div>
                      <span className="text-gray-700 text-sm">Mounting : Suspended</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="text-blue-500 mt-1">▷</div>
                      <span className="text-gray-700 text-sm">Housing : Pressure die cast aluminium</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="text-blue-500 mt-1">▷</div>
                      <span className="text-gray-700 text-sm">Finishes : Anodized Aluminium</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="text-blue-500 mt-1">▷</div>
                      <span className="text-gray-700 text-sm">Installation Holder : Stainless Steel</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="text-blue-500 mt-1">▷</div>
                      <span className="text-gray-700 text-sm">Best in class power LEDs</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="text-blue-500 mt-1">▷</div>
                      <span className="text-gray-700 text-sm">Standard Body Colour : White & Other option available</span>
                    </div>
                  </>
                )}
              </div>

              {/* Product Info */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="flex items-center justify-between mb-4">
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
                
                <div className="flex gap-4 mb-4">
                  <button className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
                    <ShoppingCart size={20} />
                    Add to Cart
                  </button>
                  <button className="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-300 transition-colors">
                    <Star size={20} />
                  </button>
                </div>

                {product.description && (
                  <div className="mt-4">
                    <h3 className="text-sm font-semibold text-gray-800 mb-2">Description</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{product.description}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Attributes Section as Table */}
        {product.attributes && Array.isArray(product.attributes) && product.attributes.length > 0 && (
          <div className="max-w-full overflow-x-auto bg-white rounded-lg border border-gray-200 p-6 mt-6">
            <h2 className="text-lg font-bold text-gray-900 mb-4">SPECIFICATION</h2>
            <table className="min-w-max w-full border-collapse">
              <thead>
                <tr>
                  {product.attributes.map((attribute, idx) => (
                    <th key={attribute._id || idx} className="px-4 py-2 border-b border-gray-200 text-left font-semibold text-gray-800 capitalize bg-gray-50">
                      {attribute.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {/* Find max number of variants among all attributes */}
                {(() => {
                  const maxVariants = Math.max(...product.attributes.map(attr => attr.varients?.length || 0));
                  return Array.from({ length: maxVariants }).map((_, rowIdx) => (
                    <tr key={rowIdx}>
                      {product.attributes.map((attribute, colIdx) => {
                        const variant = attribute.varients && attribute.varients[rowIdx];
                        return (
                          <td key={colIdx} className="px-4 py-2 border-b border-gray-100 text-sm text-gray-700">
                            {variant ? (
                              <div className="flex flex-row gap-5">
                                <span>{variant.name || `Variant ${rowIdx + 1}`}</span>
                                <span className={`text-[10px] px-2 py-1 rounded-full font-medium w-fit ${variant.enabled ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                                  {variant.enabled ? 'Available' : 'Unavailable'}
                                </span>
                              </div>
                            ) : (
                              <span className="text-gray-400 italic">-</span>
                            )}
                          </td>
                        );
                      })}
                    </tr>
                  ));
                })()}
              </tbody>
            </table>
          </div>
        )}

        {/* Related Products */}
        {product.relatedProducts && product.relatedProducts.length > 0 && (
          <div className="bg-white rounded-lg border border-gray-200 p-6 mt-6">
            <h2 className="text-lg font-bold text-gray-900 mb-4">RELATED PRODUCTS</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {product.relatedProducts.map((relatedProduct, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                >
                  <div className="relative h-24 bg-gray-100 rounded-md mb-3">
                    {relatedProduct.image ? (
                      <Image
                        src={relatedProduct.image}
                        alt={relatedProduct.name}
                        fill
                        className="object-cover rounded-md"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <span className="text-gray-400 text-xl">📷</span>
                      </div>
                    )}
                  </div>
                  <h4 className="font-medium text-gray-800 mb-1 text-sm">{relatedProduct.name}</h4>
                  <p className="text-blue-600 font-bold text-sm">{formatPrice(relatedProduct.price)}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}