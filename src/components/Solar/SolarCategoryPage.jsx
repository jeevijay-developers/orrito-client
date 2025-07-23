"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { getAllSolarByID } from "@/server/solarServer";
import { useQuery } from "@/context/QueryContext";
import { Minus, Plus, Trash2 } from "lucide-react";
const SolarCategoryPage = ({ id }) => {
  const { addToQuery, queryItems, updateQuantity, deleteQuery, checkQuery } =
    useQuery();
  const [solarProducts, setSolarProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (id) {
      fetchSolarProducts(id);
    }
  }, [id]);

  const fetchSolarProducts = async (id) => {
    try {
      const products = await getAllSolarByID(id);
      localStorage.setItem("solarData", JSON.stringify(products));
      console.log("🚀 ~ fetchSolarProducts ~ products:", products);
      setSolarProducts(Array.isArray(products) ? products : []);
    } catch (error) {
      console.error("Error fetching solar products:", error);
      setError("Failed to load solar products. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const formatCategoryName = (categoryName) => {
    return categoryName.charAt(0).toUpperCase() + categoryName.slice(1);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-300 rounded w-1/4 mb-8"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="bg-white rounded-lg shadow-md overflow-hidden"
                >
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
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-red-500 text-xl mb-4">⚠️ Error</div>
          <p className="text-gray-600 mb-4">{error}</p>
          <button
            onClick={() => id && fetchSolarProducts(id)}
            className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-md transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Solar Products
          </h1>
          <p className="text-gray-600">
            {solarProducts.length}{" "}
            {solarProducts.length === 1 ? "product" : "products"} found
          </p>
        </div>

        {/* Solar Products Grid */}
        {solarProducts.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-yellow-400 text-6xl mb-4">☀️</div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              No solar products found
            </h3>
            <p className="text-gray-500">
              No solar products available in the "{formatCategoryName(category)}
              " category.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {solarProducts.map((product) => (
              <div
                key={product._id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 group flex flex-col h-[400px]"
              >
      
                  <div className="cursor-pointer flex flex-col flex-1">
                    {/* Solar Product Image */}
                    <Link href={`/solar/product/${product._id}`}>
                    <div className="relative h-48 bg-gray-100 overflow-hidden flex-shrink-0">
                      {product.images && product.images.length > 0 ? (
                        <Image
                          src={product.images[0].url}
                          alt={product.name}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-yellow-100 to-orange-100">
                          <span className="text-yellow-500 text-4xl">☀️</span>
                        </div>
                      )}
                    </div>

                    {/* Solar Product Details */}
                    <div className="p-4 flex-1 flex flex-col">
                      {/* Category Badge */}
                      <div className="flex flex-wrap gap-1 mb-2">
                        {product.categoryName &&
                          product.categoryName.map((cat, index) => (
                            <span
                              key={index}
                              className="inline-block bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full font-medium"
                            >
                              {formatCategoryName(cat)}
                            </span>
                          ))}
                      </div>

                      {/* Product Name */}
                      <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-gray-950 transition-colors flex-1">
                        {formatCategoryName(product.name)}
                      </h3>
                    </div>
                    </Link>
                    
                    {/* Add to Cart Section - Fixed Position */}
                    <div className="p-4 pt-0 mt-auto flex-shrink-0">
                      {product.stock > 0 ? (
                        checkQuery(product._id) ? (
                          <div className="flex items-center justify-between border border-gray-200 rounded-lg bg-gray-100 p-1">
                            {/* Decrease Quantity */}
                            <button
                              className="w-8 h-8 flex items-center justify-center text-gray-600 hover:text-orange-500 hover:bg-white rounded transition-colors"
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
                              <Minus className="w-4 h-4" />
                            </button>

                            {/* Quantity Display */}
                            <span className="text-gray-800 font-medium px-3">
                              {queryItems.find(
                                (item) => item.id === product._id
                              )?.quantity || 0}
                            </span>

                            {/* Increase Quantity */}
                            <button
                              className="w-8 h-8 flex items-center justify-center text-gray-600 hover:text-orange-500 hover:bg-white rounded transition-colors"
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
                              <Plus className="w-4 h-4" />
                            </button>

                            {/* Remove from Cart */}
                            <button
                              className="w-8 h-8 flex items-center justify-center text-gray-600 hover:text-red-500 hover:bg-red-50 rounded transition-colors ml-2"
                              onClick={() => deleteQuery(product._id)}
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        ) : (
                          <button
                            className="w-full cursor-pointer text-white py-2 px-4 rounded-lg font-semibold transition-colors duration-300 transform hover:scale-[1.02]"
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
                        )
                      ) : (
                        <button
                          disabled
                          className="w-full bg-gray-300 text-gray-500 py-2.5 px-4 rounded-lg text-sm font-medium cursor-not-allowed"
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

export default SolarCategoryPage;
