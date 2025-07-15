"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getAllSolutionsByCategory } from "@/server/solutionServer";
import { useBreadcrumb } from "@/context/BreadcrumbContext";
import { useQuery } from "@/context/QueryContext";
import { Minus, Plus, Trash2 } from "lucide-react";
const SolutionCategoryPage = ({ solution }) => {
  
  const pathname = usePathname();
  const { setBreadcrumb } = useBreadcrumb();
  const [solutions, setSolutions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  // console.log('solution:', solution);
  const { addToQuery, queryItems, updateQuantity, deleteQuery, checkQuery } =
    useQuery();
  useEffect(() => {
    if (solution) {
      fetchSolutions(solution);
    }
  }, [solution]);

  // Separate useEffect for breadcrumb
  useEffect(() => {
    if (solution) {
      setBreadcrumb(pathname, {
        name: formatCategoryName(solution),
      });
    }
  }, [solution, pathname]);

  const fetchSolutions = async (categoryName) => {
    try {
      const solutions = await getAllSolutionsByCategory(categoryName);
      // console.log('Solutions fetched:', solutions);
      localStorage.setItem("solutionsByCategory", JSON.stringify(solutions));
      setSolutions(solutions.products || []);
      console.log("Solutions fetched:", solutions.products);
    } catch (error) {
      setError("Failed to load solutions. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const formatCategoryName = (categoryName) => {
    return categoryName.charAt(0).toUpperCase() + categoryName.slice(1);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 pt-[170px]">
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
      <div className="min-h-screen bg-gray-50 pt-[170px] flex items-center justify-center">
        <div className="text-center">
          <div className="text-red-500 text-xl mb-4">⚠️ Error</div>
          <p className="text-gray-600 mb-4">{error}</p>
          <button
            onClick={() => solution && fetchSolutions(solution)}
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
            {formatCategoryName(solution)} Solutions
          </h1>
          <p className="text-gray-600">
            {solutions.length}{" "}
            {solutions.length === 1 ? "solution" : "solutions"} found
          </p>
        </div>

        {/* Solutions Grid */}
        {solutions.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-gray-400 text-6xl mb-4">📦</div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              No solutions found
            </h3>
            <p className="text-gray-500">
              No solutions available in the "{formatCategoryName(solution)}"
              solution.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 group flex flex-col"
                style={{ minHeight: "100%" }}
              >
                <Link
                  href={`/solutions/product/${solution._id}`}
                  className="flex-1 flex flex-col"
                >
                  <div className="cursor-pointer flex-1 flex flex-col">
                    {/* Solution Image */}
                    <div className="relative h-48 bg-gray-100 overflow-hidden">
                      {solution.images && solution.images.length > 0 ? (
                        <Image
                          src={solution.images[0].url}
                          alt={solution.name}
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

                    {/* Solution Details */}
                    <div className="p-4 flex-1 flex flex-col">
                      {/* solution Badge */}
                      <div className="flex flex-wrap gap-1 mb-2">
                        {solution.categoryName &&
                          solution.categoryName.map((cat, index) => (
                            <span
                              key={index}
                              className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full font-medium"
                            >
                              {formatCategoryName(cat)}
                            </span>
                          ))}
                      </div>

                      {/* Solution Name */}
                      <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-green-600 transition-colors">
                        {formatCategoryName(solution.name)}
                      </h3>

                      {/* Description */}
                      <div className="text-gray-700 text-sm mb-2 line-clamp-2">
                        {solution.productOverview}
                      </div>
                    </div>
                  </div>
                </Link>
                {/* Add to Cart Button at bottom */}
                  <div className="w-full px-4 pb-4 mt-auto">
                    {solution.stock > 0 ? (
                      <div className="flex gap-2">
                        {checkQuery(solution._id) ? (
                          <div className="flex-1 flex items-center justify-between border bg-gray-200  border-gray-200 rounded-lg">
                            {/* Decrease Quantity */}
                            <button
                              className="px-3 py-2 text-gray-600 hover:text-orange-500 transition-colors"
                              onClick={() => {
                                const item = queryItems.find(
                                  (item) => item.id === solution._id
                                );
                                if (item && item.quantity > 1) {
                                  updateQuantity(
                                    solution._id,
                                    item.quantity - 1
                                  );
                                } else {
                                  deleteQuery(solution._id);
                                }
                              }}
                            >
                              <Minus className="w-5 h-5" />
                            </button>

                            {/* Quantity Display */}
                            <span className="text-gray-800 font-medium">
                              {queryItems.find(
                                (item) => item.id === solution._id
                              )?.quantity || 0}
                            </span>

                            {/* Increase Quantity */}
                            <button
                              className="px-3 py-2 text-gray-600 hover:text-orange-500 transition-colors"
                              onClick={() => {
                                const item = queryItems.find(
                                  (item) => item.id === solution._id
                                );
                                if (item) {
                                  updateQuantity(
                                    solution._id,
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
                              onClick={() => deleteQuery(solution._id)}
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
                                id: solution._id,
                                name: solution.name,
                                price: solution.price,
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
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SolutionCategoryPage;
