'use client';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { getAllProductsByCategory } from '@/server/categoryServer';
import { useBreadcrumb } from '@/context/BreadcrumbContext';
import { useQuery } from "@/context/QueryContext";
import { Minus, Plus, Trash2 } from "lucide-react";
const ProductCategoryPage = ({ category }) => {
  const pathname = usePathname();
  const { setBreadcrumb } = useBreadcrumb();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { addToQuery, queryItems, updateQuantity, deleteQuery, checkQuery } =
    useQuery();
  useEffect(() => {
    if (category) {
      fetchProducts(category);
    }
  }, [category]);

  // Separate useEffect for breadcrumb to avoid dependency issues
  useEffect(() => {
    if (category) {
      setBreadcrumb(pathname, {
        name: formatCategoryName(category)
      });
    }
  }, [category, pathname]); // Only depend on category and pathname

  const fetchProducts = async (categoryName) => {
    try {
      const products = await getAllProductsByCategory(categoryName);
      setProducts(products);
    } catch (error) {
      setError('Failed to load products. Please try again.');
    } finally {
      setLoading(false);
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
    if (!categoryName) return '';
    const decoded = decodeURIComponent(categoryName);
    return decoded.charAt(0).toUpperCase() + decoded.slice(1);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 pt-[170px] py-[44px]">
        <div className="container mx-auto px-8 py-8">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-300 rounded w-1/4 mb-8"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="h-48 bg-gray-300"></div>
                  <div className="p-4">
                    <div className="h-4 bg-gray-300 rounded mb-2"></div>
                    <div className="h-4 bg-gray-300 rounded w-3/4 mb-4"></div>
                    <div className="h-6 bg-gray-300 rounded w-1/2"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 pt-[170px] flex items-center justify-center">
        <div className="text-center">
          <div className="text-red-500 text-xl mb-4">⚠️ Error</div>
          <p className="text-gray-600 mb-4">{error}</p>
          <button
            onClick={() => category && fetchProducts(category)}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-[170px]">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            {formatCategoryName(category)} Products
          </h1>
          <p className="text-gray-600">
            {products.length} {products.length === 1 ? "product" : "products"}{" "}
            found
          </p>
        </div>

        {/* Products Grid */}
        {products.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-gray-400 text-6xl mb-4">📦</div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              No products found
            </h3>
            <p className="text-gray-500">
              No products available in the "{formatCategoryName(category)}"
              category.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products
              .filter((product) => product.view)
              .map((product) => (
                <div
                  key={product._id}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 group"
                >
                  <div className="cursor-pointer">
                    <Link href={`/products/product/${product.slug}`}>
                      {/* Product Image */}
                      <div className="relative h-48 bg-gray-100 overflow-hidden">
                        {product.images && product.images.length > 0 ? (
                          <Image
                            src={product.images[0].url}
                            alt={product.name}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center bg-gray-200">
                            <span className="text-gray-400 text-4xl">📷</span>
                          </div>
                        )}
                      </div>

                      {/* Product Details */}
                      <div className="p-4">
                        {/* Category Badge */}
                        <div className="flex flex-wrap gap-1 mb-2">
                          {product.categoryName &&
                            product.categoryName.map((cat, index) => (
                              <span
                                key={index}
                                className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full font-medium"
                              >
                                {formatCategoryName(cat)}
                              </span>
                            ))}
                        </div>

                        {/* Product Name */}
                        <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
                          {formatCategoryName(product.name)}
                        </h3>

                        {/* Product description */}
                        <p className="text-sm text-gray-600 mb-2 line-clamp-2 ellipsis">
                          {product.productOverview}
                        </p>

                        {/* Price */}
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-xl font-bold text-gray-900">
                            {formatPrice(product.price)}
                          </span>
                        </div>
                      </div>
                    </Link>
                    {/* Add to Cart Button */}
                    <div className="w-full">
                      {product.stock > 0 ? (
                        <div className="flex gap-2">
                          {checkQuery(product._id) ? (
                            <div className="flex-1 flex items-center justify-between border bg-gray-200  border-gray-200 rounded-lg">
                              {/* Decrease Quantity */}
                              <button
                                className="px-3 py-2 text-gray-600 hover:text-orange-500 transition-colors"
                                onClick={() => {
                                  const item = queryItems.find(
                                    (item) => item.id === product._id
                                  );
                                  if (item && item.quantity > 1) {
                                    updateQuantity(
                                      product._id,
                                      item.quantity - 1
                                    );
                                  } else {
                                    deleteQuery(product._id);
                                  }
                                }}
                              >
                                <Minus className="w-5 h-5" />
                              </button>

                              {/* Quantity Display */}
                              <span className="text-gray-800 font-medium">
                                {queryItems.find(
                                  (item) => item.id === product._id
                                )?.quantity || 0}
                              </span>

                              {/* Increase Quantity */}
                              <button
                                className="px-3 py-2 text-gray-600 hover:text-orange-500 transition-colors"
                                onClick={() => {
                                  const item = queryItems.find(
                                    (item) => item.id === product._id
                                  );
                                  if (item) {
                                    updateQuantity(
                                      product._id,
                                      item.quantity + 1
                                    );
                                  }
                                }}
                              >
                                <Plus className="w-5 h-5" />
                              </button>

                              {/* Remove from Cart */}
                              <button
                                className="px-3 py-2 text-gray-600 hover:text-red-500 transition-colors"
                                onClick={() => deleteQuery(product._id)}
                              >
                                <Trash2 className="w-5 h-5" />
                              </button>
                            </div>
                          ) : (
                            <button
                              className="flex-1 cursor-pointer text-white py-2 px-4 rounded-lg font-semibold transition-colors duration-300 transform hover:scale-105"
                              style={{ backgroundColor: "#313841" }}
                              onMouseEnter={(e) =>
                                (e.target.style.backgroundColor = "#2a3038")
                              }
                              onMouseLeave={(e) =>
                                (e.target.style.backgroundColor = "#313841")
                              }
                              onClick={() => {
                                addToQuery({
                                  id: product._id,
                                  name: product.name,
                                  price: product.price,
                                  quantity: 1,
                                });
                              }}
                            >
                              Add to Cart
                            </button>
                          )}
                        </div>
                      ) : (
                        <button
                          disabled
                          className="w-full bg-gray-300 text-gray-500 py-2 px-4 rounded-md text-sm font-medium cursor-not-allowed"
                        >
                          Out of Stock
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCategoryPage;