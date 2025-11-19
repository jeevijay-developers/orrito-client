"use client";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { FiShoppingCart, FiChevronDown } from "react-icons/fi";
import ProductDropdown from "./ProductDropdown";
import SolutionsDropdown from "./SolutionsDropdown";
import SolarDropdown from "./SolarDropdown";
import {
  productCategories as fetchProductCategories,
  solutionCategories as fetchSolutionCategories,
  solarCategories as fetchSolarCategories,
  getAllProducts,
} from "@/service/Data";
import { useQuery } from "@/context/QueryContext";


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductDropdownOpen, setIsProductDropdownOpen] = useState(false);
  const [isSolutionDropdownOpen, setIsSolutionDropdownOpen] = useState(false);
  const [isSolarDropdownOpen, setIsSolarDropdownOpen] = useState(false);
  const [isMobileProductDropdownOpen, setIsMobileProductDropdownOpen] =
    useState(false);
  const [isMobileSolutionDropdownOpen, setIsMobileSolutionDropdownOpen] =
    useState(false);
  const [isMobileSolarDropdownOpen, setIsMobileSolarDropdownOpen] =
    useState(false);
  const [productCategories, setProductCategories] = useState([]);
  const [solutionCategories, setSolutionCategories] = useState([]);
  const [solarCategories, setSolarCategories] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const dropdownRef = useRef(null);
  const productLinkRef = useRef(null);
  const solutionDropdownRef = useRef(null);
  const solutionLinkRef = useRef(null);
  const solarDropdownRef = useRef(null);
  const solarLinkRef = useRef(null);
  const { queryItems } = useQuery();
  const cartQuantity =
    queryItems?.reduce((acc, item) => acc + item.quantity, 0) || 0;

  useEffect(() => {
    async function fetchCategories() {
      try {
        const prod = await fetchProductCategories();
        setProductCategories(Array.isArray(prod) ? prod : []);
      } catch {
        setProductCategories([]);
      }
      try {
        const sol =
          typeof fetchSolutionCategories === "function"
            ? await fetchSolutionCategories()
            : fetchSolutionCategories;
        setSolutionCategories(Array.isArray(sol) ? sol : []);
      } catch {
        setSolutionCategories([]);
      }
      try {
        const solar =
          typeof fetchSolarCategories === "function"
            ? await fetchSolarCategories()
            : fetchSolarCategories;
        setSolarCategories(Array.isArray(solar) ? solar : []);
      } catch {
        setSolarCategories([]);
      }
      try {
        const products = await getAllProducts();
        setAllProducts(Array.isArray(products) ? products : []);
      } catch {
        setAllProducts([]);
      }
    }
    fetchCategories();
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleProductHover = () => {
    setIsProductDropdownOpen(true);
  };

  const handleProductLeave = () => {
    setIsProductDropdownOpen(false);
  };

  const handleSolutionHover = () => setIsSolutionDropdownOpen(true);
  const handleSolutionLeave = () => setIsSolutionDropdownOpen(false);
  const handleProductClick = () => setIsProductDropdownOpen((prev) => !prev);
  const handleSolutionClick = () => setIsSolutionDropdownOpen((prev) => !prev);
  const handleSolarHover = () => setIsSolarDropdownOpen(true);
  const handleSolarLeave = () => setIsSolarDropdownOpen(false);
  const handleSolarClick = () => setIsSolarDropdownOpen((prev) => !prev);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        productLinkRef.current &&
        !productLinkRef.current.contains(event.target)
      ) {
        setIsProductDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Close solution dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        solutionDropdownRef.current &&
        !solutionDropdownRef.current.contains(event.target) &&
        solutionLinkRef.current &&
        !solutionLinkRef.current.contains(event.target)
      ) {
        setIsSolutionDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close solar dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        solarDropdownRef.current &&
        !solarDropdownRef.current.contains(event.target) &&
        solarLinkRef.current &&
        !solarLinkRef.current.contains(event.target)
      ) {
        setIsSolarDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close search suggestions when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      const searchContainer = event.target.closest('.relative');
      if (!searchContainer || !searchContainer.querySelector('input[placeholder*="looking"]')) {
        setShowSuggestions(false);
      }
    };

    if (showSuggestions) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [showSuggestions]);

  // Handle search input
  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query.trim().length > 0) {
      const filtered = allProducts.filter((product) =>
        product.name.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredProducts(filtered);
      setShowSuggestions(true);
    } else {
      setShowSuggestions(false);
      setFilteredProducts([]);
    }
  };

  const handleProductSelect = (product) => {
    setSearchQuery(product.name);
    setShowSuggestions(false);
    // Navigate to product page
    window.location.href = `/products/product/${product.slug}`;
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setShowSuggestions(false);
    // Handle search submit logic here
  };

  return (
    <nav className="bg-gradient-to-r from-[#e7333e] to-[#ee6339] shadow-md w-full z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="flex justify-between items-center"
          style={{ height: "66px" }}
        >
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <img
                src="/img/logo/whitelogo.png"
                alt="Oritto Logo"
                className="h-12 w-auto object-contain"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-2">
            <Link
              href="/corporate"
              className="text-white  px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200"
            >
              Corporate
            </Link>

            {/* Product Dropdown */}
            <div
              className="relative mx-auto"
              onMouseEnter={handleProductHover}
              onMouseLeave={handleProductLeave}
            >
              <Link
                href="/products"
                ref={productLinkRef}
                className="cursor-pointer text-white   px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center mr-2"
              >
                <span>Product</span>
                <FiChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${isProductDropdownOpen ? "rotate-180" : ""
                    }`}
                />
              </Link>

              {/* Mega Menu Dropdown */}
              {isProductDropdownOpen && (
                <ProductDropdown
                  dropdownRef={dropdownRef}
                  handleProductHover={handleProductHover}
                  handleProductLeave={handleProductLeave}
                  setIsProductDropdownOpen={setIsProductDropdownOpen}
                />
              )}
            </div>

            {/* Solution Dropdown */}
            <div
              className="relative mx-auto"
              onMouseEnter={handleSolutionHover}
              onMouseLeave={handleSolutionLeave}
            >
              <Link
                href="/solutions"
                ref={solutionLinkRef}
                className="cursor-pointer text-white   px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center space-x-1 mr-2"
              >
                <span>Solution</span>
                <FiChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${isSolutionDropdownOpen ? "rotate-180" : ""
                    }`}
                />
              </Link>
              {isSolutionDropdownOpen && (
                <SolutionsDropdown
                  dropdownRef={solutionDropdownRef}
                  handleSolutionHover={handleSolutionHover}
                  handleSolutionLeave={handleSolutionLeave}
                  setIsSolutionDropdownOpen={setIsSolutionDropdownOpen}
                />
              )}
            </div>

            {/* Solar Dropdown */}
            <div
              className="relative mx-auto"
              onMouseEnter={handleSolarHover}
              onMouseLeave={handleSolarLeave}
            >
              <Link
                href="/solar"
                ref={solarLinkRef}
                className="cursor-pointer text-white   px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center space-x-1 mr-2"
              >
                <span>Solar</span>
                <FiChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${isSolarDropdownOpen ? "rotate-180" : ""
                    }`}
                />
              </Link>
              {isSolarDropdownOpen && (
                <SolarDropdown
                  dropdownRef={solarDropdownRef}
                  handleSolutionHover={handleSolarHover}
                  handleSolutionLeave={handleSolarLeave}
                  setIsSolutionDropdownOpen={setIsSolarDropdownOpen}
                />
              )}
            </div>

            <Link
              href="/offer"
              className="text-white  px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200"
            >
              Offer
            </Link>
            <Link
              href="/support"
              className="text-white  px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200"
            >
              Support
            </Link>
            <Link
              href="/distribution-enquiry"
              className="text-white  px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200"
            >
              Distribution Enquiry
            </Link>
          </div>

          {/* Search Bar and Shopping Cart Icon */}
          <div className="flex items-center space-x-4">
            {/* Desktop Search Bar */}
            <div className="hidden md:block relative">
              <form onSubmit={handleSearchSubmit}>
                <input
                  type="text"
                  placeholder="What are you looking for... ?"
                  className="w-64 px-4 py-2 pr-10 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-0 bg-white"
                  value={searchQuery}
                  onChange={handleSearchChange}
                  onFocus={() => searchQuery.length > 0 && setShowSuggestions(true)}
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
              </form>

              {/* Search Suggestions */}
              {showSuggestions && filteredProducts.length > 0 && (
                <div className="absolute top-full left-0 right-0 bg-white border border-gray-200 rounded-lg shadow-lg z-50 mt-1 max-h-80 overflow-hidden">
                  <div className="py-2">
                    <div className="px-3 py-2 text-xs text-gray-500 border-b border-gray-100">
                      Found {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''}
                    </div>
                    <div className="max-h-60 overflow-y-auto">
                      {filteredProducts.slice(0, 5).map((product, index) => (
                        <div
                          key={product._id || index}
                          className="flex items-center px-3 py-2 hover:bg-gray-50 cursor-pointer border-b border-gray-50 last:border-b-0"
                          onClick={() => handleProductSelect(product)}
                        >
                          {product.images && product.images.length > 0 ? (
                            <img
                              src={product.images[0].url}
                              alt={product.name}
                              className="w-10 h-10 object-cover rounded mr-3 flex-shrink-0"
                            />
                          ) : (
                            <div className="w-10 h-10 bg-gray-200 rounded mr-3 flex items-center justify-center flex-shrink-0">
                              <span className="text-gray-400 text-xs">📷</span>
                            </div>
                          )}
                          <div className="flex-1 min-w-0">
                            <div className="text-sm font-medium text-gray-900 truncate">
                              {product.name}
                            </div>
                            <div className="text-xs text-gray-500 truncate">
                              {product.categoryName && product.categoryName[0]}
                            </div>
                          </div>
                          {product.price && (
                            <div className="text-sm font-medium text-orange-600 ml-2">
                              ₹{product.price}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
            {/* Shopping Cart Icon */}
            <Link
              href="/cart"
              className="relative text-white  focus:outline-none"
            >
              <FiShoppingCart size={24} />
              {cartQuantity > 0 && (
                <span
                  className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-full"
                >
                  {cartQuantity}
                </span>
              )}
            </Link>

            {/* Mobile menu button */}
            <div className="lg:hidden flex items-center space-x-2">
              {/* Mobile Search Button */}
              <button className="text-white hover:text-orange-500 p-2 rounded transition-colors duration-200">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
              <button
                onClick={toggleMenu}
                className="text-white hover:text-orange-500 focus:outline-none p-2 rounded transition-colors duration-200"
                aria-label="Toggle menu"
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isMenuOpen ? (
                    <path d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-2 sm:px-3 bg-gray-50 rounded-lg mt-2 mb-4">
              {/* Mobile Search Bar */}
              <div className="px-3 py-2">
                <div className="relative">
                  <form onSubmit={handleSearchSubmit}>
                    <input
                      type="text"
                      placeholder="What are you looking for... ?"
                      className="w-full px-4 py-2 pr-10 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      value={searchQuery}
                      onChange={handleSearchChange}
                      onFocus={() => searchQuery.length > 0 && setShowSuggestions(true)}
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                      <svg
                        className="w-4 h-4 text-gray-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                      </svg>
                    </div>
                  </form>

                  {/* Mobile Search Suggestions */}
                  {showSuggestions && filteredProducts.length > 0 && (
                    <div className="absolute top-full left-0 right-0 bg-white border border-gray-200 rounded-lg shadow-lg z-50 mt-1 max-h-60 overflow-hidden">
                      <div className="py-2">
                        <div className="px-3 py-2 text-xs text-gray-500 border-b border-gray-100">
                          Found {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''}
                        </div>
                        <div className="max-h-48 overflow-y-auto">
                          {filteredProducts.slice(0, 5).map((product, index) => (
                            <div
                              key={product._id || index}
                              className="flex items-center px-3 py-2 hover:bg-gray-50 cursor-pointer border-b border-gray-50 last:border-b-0"
                              onClick={() => {
                                handleProductSelect(product);
                                setIsMenuOpen(false);
                              }}
                            >
                              {product.images && product.images.length > 0 ? (
                                <img
                                  src={product.images[0].url}
                                  alt={product.name}
                                  className="w-8 h-8 object-cover rounded mr-3 flex-shrink-0"
                                />
                              ) : (
                                <div className="w-8 h-8 bg-gray-200 rounded mr-3 flex items-center justify-center flex-shrink-0">
                                  <span className="text-gray-400 text-xs">📷</span>
                                </div>
                              )}
                              <div className="flex-1 min-w-0">
                                <div className="text-sm font-medium text-gray-900 truncate">
                                  {product.name}
                                </div>
                                <div className="text-xs text-gray-500 truncate">
                                  {product.categoryName && product.categoryName[0]}
                                </div>
                              </div>
                            </div>
                          ))}
                          {filteredProducts.length > 5 && (
                            <div className="px-3 py-2 text-center">
                              <button
                                className="text-orange-500 text-sm font-medium hover:text-orange-600"
                                onClick={() => {
                                  setShowSuggestions(false);
                                  setIsMenuOpen(false);
                                  window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`;
                                }}
                              >
                                View all {filteredProducts.length} results
                              </button>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <Link
                href="/corporate"
                className="text-gray-700 hover:text-orange-500 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 mx-3"
                onClick={() => setIsMenuOpen(false)}
              >
                Corporate
              </Link>

              {/* Mobile Product Menu */}
              <div className="mx-3">
                <div className="flex items-center">
                  <Link
                    href="/products"
                    className="flex-1 text-gray-700 hover:text-orange-500 px-3 py-2 rounded-l-md text-base font-medium transition-colors duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Product
                  </Link>
                  <button
                    onClick={() =>
                      setIsMobileProductDropdownOpen(
                        !isMobileProductDropdownOpen
                      )
                    }
                    className="text-gray-700 hover:text-orange-500 px-3 py-2 rounded-r-md text-base font-medium transition-colors duration-200 flex items-center"
                  >
                    <FiChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${isMobileProductDropdownOpen ? "rotate-180" : ""
                        }`}
                    />
                  </button>
                </div>
                {isMobileProductDropdownOpen && (
                  <div className="mt-2 ml-4 space-y-1 max-h-60 overflow-y-auto">
                    {productCategories.map((category, index) => (
                      <Link
                        key={index}
                        href={`/products/${category.name}`}
                        className="text-gray-600 hover:text-orange-500 block px-3 py-2 rounded-md text-sm transition-colors duration-200"
                        onClick={() => {
                          setIsMenuOpen(false);
                          setIsMobileProductDropdownOpen(false);
                        }}
                      >
                        {category.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile Solution Menu */}
              <div className="mx-3">
                <div className="flex items-center">
                  <Link
                    href="/solutions"
                    className="flex-1 text-gray-700 hover:text-orange-500 px-3 py-2 rounded-l-md text-base font-medium transition-colors duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Solution
                  </Link>
                  <button
                    onClick={() =>
                      setIsMobileSolutionDropdownOpen(
                        !isMobileSolutionDropdownOpen
                      )
                    }
                    className="text-gray-700 hover:text-orange-500 px-3 py-2 rounded-r-md text-base font-medium transition-colors duration-200 flex items-center"
                  >
                    <FiChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${isMobileSolutionDropdownOpen ? "rotate-180" : ""
                        }`}
                    />
                  </button>
                </div>
                {isMobileSolutionDropdownOpen && (
                  <div className="mt-2 ml-4 space-y-1 max-h-60 overflow-y-auto">
                    {solutionCategories.map((category, index) => (
                      <Link
                        key={index}
                        href={`/solutions/${category.name}`}
                        className="text-gray-600 hover:text-orange-500 block px-3 py-2 rounded-md text-sm transition-colors duration-200"
                        onClick={() => {
                          setIsMenuOpen(false);
                          setIsMobileSolutionDropdownOpen(false);
                        }}
                      >
                        {category.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile Solar Menu */}
              <div className="mx-3">
                <div className="flex items-center">
                  <Link
                    href="/solar"
                    className="flex-1 text-gray-700 hover:text-orange-500 px-3 py-2 rounded-l-md text-base font-medium transition-colors duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Solar
                  </Link>
                  <button
                    onClick={() =>
                      setIsMobileSolarDropdownOpen(!isMobileSolarDropdownOpen)
                    }
                    className="text-gray-700 hover:text-orange-500 px-3 py-2 rounded-r-md text-base font-medium transition-colors duration-200 flex items-center"
                  >
                    <FiChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${isMobileSolarDropdownOpen ? "rotate-180" : ""
                        }`}
                    />
                  </button>
                </div>
                {isMobileSolarDropdownOpen && (
                  <div className="mt-2 ml-4 space-y-1 max-h-60 overflow-y-auto">
                    {solarCategories.map((category, index) => (
                      <Link
                        key={index}
                        href={`/products/${category.name}`}
                        className="text-gray-600 hover:text-orange-500 block px-3 py-2 rounded-md text-sm transition-colors duration-200"
                        onClick={() => {
                          setIsMenuOpen(false);
                          setIsMobileSolarDropdownOpen(false);
                        }}
                      >
                        {category.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href="/offer"
                className="text-gray-700 hover:text-orange-500 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 mx-3"
                onClick={() => setIsMenuOpen(false)}
              >
                Offer
              </Link>
              <Link
                href="/support"
                className="text-gray-700 hover:text-orange-500 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 mx-3"
                onClick={() => setIsMenuOpen(false)}
              >
                Support
              </Link>

              {/* Mobile Distribution Enquiry Button */}
              <div className="pt-2 px-3">
                <Link
                  href="/distribution-enquiry"
                  className="text-gray-700 hover:text-orange-500 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 mx-3"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Distribution Enquiry
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
