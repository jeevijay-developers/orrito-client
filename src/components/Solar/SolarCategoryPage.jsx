'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { getAllSolarByID } from '@/server/solarServer';

const SolarCategoryPage = ({ id }) => {
  const [solarProducts, setSolarProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (id) {
      fetchSolarProducts(id);
    }
  }, [id]);

  const fetchSolarProducts = async (id) => {
    try {
      const products = await getAllSolarByID(id);
      setSolarProducts(Array.isArray(products) ? products : []);
    } catch (error) {
      setError('Failed to load solar products. Please try again.');
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
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-red-500 text-xl mb-4">⚠️ Error</div>
          <p className="text-gray-600 mb-4">{error}</p>
          <button
            onClick={() => category && fetchSolarProducts(category)}
            className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-md transition-colors"
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
            {formatCategoryName(category)} Solar Products
          </h1>
          <p className="text-gray-600">
            {solarProducts.length} {solarProducts.length === 1 ? 'product' : 'products'} found
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
              No solar products available in the "{formatCategoryName(category)}" category.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {solarProducts.map((product) => (
              <div
                key={product._id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 group"
              >
                <Link href={`/solar/${product.slug}`}>
                  <div className="cursor-pointer">
                    {/* Solar Product Image */}
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
                        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-yellow-100 to-orange-100">
                          <span className="text-yellow-500 text-4xl">☀️</span>
                        </div>
                      )}
                    </div>

                    {/* Solar Product Details */}
                    <div className="p-4">
                      {/* Category Badge */}
                      <div className="flex flex-wrap gap-1 mb-2">
                        {product.categoryName && product.categoryName.map((cat, index) => (
                          <span
                            key={index}
                            className="inline-block bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full font-medium"
                          >
                            {formatCategoryName(cat)}
                          </span>
                        ))}
                      </div>

                      {/* Product Name */}
                      <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-yellow-600 transition-colors">
                        {formatCategoryName(product.name)}
                      </h3>

                      {/* Description */}
                      <div className="text-gray-700 text-sm mb-2 line-clamp-2">
                        {product.description}
                      </div>

                      {/* Power & Status */}
                      <div className="flex items-center justify-between">
                        <div className="flex flex-col">
                          {product.power && (
                            <span className="text-yellow-600 text-sm font-medium">
                              {product.power}W
                            </span>
                          )}
                          <span className="text-yellow-600 text-sm font-medium">
                            {product.status || 'Available'}
                          </span>
                        </div>
                        <span className="text-gray-500 text-xs">
                          {product.updatedAt ? new Date(product.updatedAt).toLocaleDateString() : ''}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SolarCategoryPage;
