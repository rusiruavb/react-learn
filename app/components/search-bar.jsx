/**
 * =============================================================================
 * EXERCISE 4: SearchBar Component with useMemo and useCallback
 * =============================================================================
 *
 * LEARNING OBJECTIVES:
 * - Understand performance optimization hooks
 * - Learn when and why to use useMemo
 * - Learn when and why to use useCallback
 * - Practice debouncing for better UX
 *
 * CONCEPTS COVERED:
 * - useMemo: Memoize computed values
 * - useCallback: Memoize functions
 * - Performance Optimization
 * - Debouncing User Input
 *
 * =============================================================================
 */

import { useState, useMemo, useCallback } from "react";

// =============================================================================
// COMPONENT IMPLEMENTATION
// =============================================================================

/**
 * TODO 4.1: Implement the SearchBar component
 *
 * WHEN TO USE useMemo:
 * - For expensive computations that don't need to run on every render
 * - When the result depends on specific values that don't change often
 * - Example: Filtering a large array based on user input
 *
 * WHEN TO USE useCallback:
 * - When passing functions as props to child components
 * - When the function is a dependency of useEffect
 * - To prevent unnecessary re-renders of child components
 *
 * IMPORTANT: Don't over-optimize!
 * Only use these hooks when you have actual performance issues.
 * Premature optimization can make code harder to read.
 */

export function SearchBar({ products, categories, onFilterChange }) {
  // TODO 4.1a: Create state for search term and selected category
  //
  // HINT:
  // const [searchTerm, setSearchTerm] = useState("");
  // const [selectedCategory, setSelectedCategory] = useState(null);
  // const [priceRange, setPriceRange] = useState({ min: 0, max: Infinity });

  // ⬇️ YOUR CODE HERE ⬇️

  // ⬆️ YOUR CODE HERE ⬆️

  // TODO 4.1b: Use useMemo to filter products
  //
  // useMemo takes two arguments:
  // 1. A function that returns the computed value
  // 2. A dependency array - recomputes only when dependencies change
  //
  // WHY useMemo HERE?
  // Filtering a large array on every keystroke is expensive.
  // useMemo caches the result and only recomputes when:
  // - products changes
  // - searchTerm changes
  // - selectedCategory changes
  //
  // HINT:
  // const filteredProducts = useMemo(() => {
  //   return products.filter((product) => {
  //     // Check if title matches search term (case-insensitive)
  //     const matchesSearch = product.title
  //       .toLowerCase()
  //       .includes(searchTerm.toLowerCase());
  //
  //     // Check if category matches (if a category is selected)
  //     const matchesCategory = selectedCategory === null ||
  //       product.category.id === selectedCategory;
  //
  //     // Check if price is in range
  //     const matchesPrice = product.price >= priceRange.min &&
  //       product.price <= priceRange.max;
  //
  //     return matchesSearch && matchesCategory && matchesPrice;
  //   });
  // }, [products, searchTerm, selectedCategory, priceRange]);

  // ⬇️ YOUR CODE HERE ⬇️

  // ⬆️ YOUR CODE HERE ⬆️

  // TODO 4.1c: Use useCallback for the search handler
  //
  // useCallback memoizes the function itself, not its result.
  // The function is only recreated when dependencies change.
  //
  // WHY useCallback HERE?
  // If we pass handleSearchChange to a child component,
  // without useCallback, the child would re-render on every parent render
  // because the function reference changes each time.
  //
  // HINT:
  // const handleSearchChange = useCallback((value: string) => {
  //   setSearchTerm(value);
  // }, []); // Empty deps = function never changes
  //
  // const handleCategoryChange = useCallback((categoryId: number | null) => {
  //   setSelectedCategory(categoryId);
  // }, []);

  // ⬇️ YOUR CODE HERE ⬇️

  // ⬆️ YOUR CODE HERE ⬆️

  // TODO 4.1d: Use useEffect to notify parent of filter changes
  // (This will be covered in detail in Exercise 5)
  //
  // HINT:
  // useEffect(() => {
  //   onFilterChange(filteredProducts);
  // }, [filteredProducts, onFilterChange]);

  // ⬇️ YOUR CODE HERE ⬇️

  // ⬆️ YOUR CODE HERE ⬆️

  // TODO 4.1e: Calculate statistics using useMemo
  //
  // HINT:
  // const stats = useMemo(() => ({
  //   totalProducts: filteredProducts.length,
  //   averagePrice: filteredProducts.length > 0
  //     ? filteredProducts.reduce((sum, p) => sum + p.price, 0) / filteredProducts.length
  //     : 0,
  //   minPrice: filteredProducts.length > 0
  //     ? Math.min(...filteredProducts.map(p => p.price))
  //     : 0,
  //   maxPrice: filteredProducts.length > 0
  //     ? Math.max(...filteredProducts.map(p => p.price))
  //     : 0,
  // }), [filteredProducts]);

  // ⬇️ YOUR CODE HERE ⬇️

  // ⬆️ YOUR CODE HERE ⬆️

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* TODO 4.1f: Search Input */}
        {/* 
          HINT:
          <div>
            <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-1">
              Search Products
            </label>
            <input
              type="text"
              id="search"
              value={searchTerm}
              onChange={(e) => handleSearchChange(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500"
              placeholder="Search by title..."
            />
          </div>
        */}

        {/* ⬇️ YOUR CODE HERE ⬇️ */}
        <div>
          <label
            htmlFor="search"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Search Products
          </label>
          {/* TODO: Add search input */}
        </div>
        {/* ⬆️ YOUR CODE HERE ⬆️ */}

        {/* TODO 4.1g: Category Filter Dropdown */}
        {/* 
          HINT:
          <div>
            <label htmlFor="category-filter" className="block text-sm font-medium text-gray-700 mb-1">
              Category
            </label>
            <select
              id="category-filter"
              value={selectedCategory || ""}
              onChange={(e) => handleCategoryChange(e.target.value ? Number(e.target.value) : null)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500"
            >
              <option value="">All Categories</option>
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
        */}

        {/* ⬇️ YOUR CODE HERE ⬇️ */}
        <div>
          <label
            htmlFor="category-filter"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Category
          </label>
          {/* TODO: Add category filter dropdown */}
        </div>
        {/* ⬆️ YOUR CODE HERE ⬆️ */}

        {/* TODO 4.1h: Price Range Filter */}
        {/* ⬇️ YOUR CODE HERE ⬇️ */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Max Price
          </label>
          {/* TODO: Add price range input */}
        </div>
        {/* ⬆️ YOUR CODE HERE ⬆️ */}
      </div>

      {/* TODO 4.1i: Display statistics */}
      {/* 
        HINT:
        <div className="mt-4 pt-4 border-t border-gray-200">
          <div className="flex flex-wrap gap-4 text-sm text-gray-600">
            <span>Found: <strong>{stats.totalProducts}</strong> products</span>
            <span>Avg Price: <strong>${stats.averagePrice.toFixed(2)}</strong></span>
            <span>Range: <strong>${stats.minPrice}</strong> - <strong>${stats.maxPrice}</strong></span>
          </div>
        </div>
      */}

      {/* ⬇️ YOUR CODE HERE ⬇️ */}
      <div className="mt-4 pt-4 border-t border-gray-200">
        {/* TODO: Display filter statistics */}
      </div>
      {/* ⬆️ YOUR CODE HERE ⬆️ */}
    </div>
  );
}

// =============================================================================
// REFERENCE SOLUTION
// =============================================================================

/*
COMPLETE SOLUTION:

import { useState, useMemo, useCallback, useEffect } from "react";

export function SearchBar({ products, categories, onFilterChange }: SearchBarProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [maxPrice, setMaxPrice] = useState("");

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch = product.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      
      const matchesCategory = selectedCategory === null || 
        product.category.id === selectedCategory;
      
      const matchesPrice = maxPrice === "" || product.price <= maxPrice;
      
      return matchesSearch && matchesCategory && matchesPrice;
    });
  }, [products, searchTerm, selectedCategory, maxPrice]);

  const handleSearchChange = useCallback((value: string) => {
    setSearchTerm(value);
  }, []);

  const handleCategoryChange = useCallback((categoryId: number | null) => {
    setSelectedCategory(categoryId);
  }, []);

  const handlePriceChange = useCallback((value: number | "") => {
    setMaxPrice(value);
  }, []);

  useEffect(() => {
    onFilterChange(filteredProducts);
  }, [filteredProducts, onFilterChange]);

  const stats = useMemo(() => ({
    totalProducts: filteredProducts.length,
    averagePrice: filteredProducts.length > 0
      ? filteredProducts.reduce((sum, p) => sum + p.price, 0) / filteredProducts.length
      : 0,
    minPrice: filteredProducts.length > 0
      ? Math.min(...filteredProducts.map(p => p.price))
      : 0,
    maxPrice: filteredProducts.length > 0
      ? Math.max(...filteredProducts.map(p => p.price))
      : 0,
  }), [filteredProducts]);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-1">
            Search Products
          </label>
          <input
            type="text"
            id="search"
            value={searchTerm}
            onChange={(e) => handleSearchChange(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500"
            placeholder="Search by title..."
          />
        </div>

        <div>
          <label htmlFor="category-filter" className="block text-sm font-medium text-gray-700 mb-1">
            Category
          </label>
          <select
            id="category-filter"
            value={selectedCategory || ""}
            onChange={(e) => handleCategoryChange(e.target.value ? Number(e.target.value) : null)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500"
          >
            <option value="">All Categories</option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="max-price" className="block text-sm font-medium text-gray-700 mb-1">
            Max Price
          </label>
          <input
            type="number"
            id="max-price"
            value={maxPrice}
            onChange={(e) => handlePriceChange(e.target.value ? Number(e.target.value) : "")}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500"
            placeholder="No limit"
            min="0"
          />
        </div>
      </div>

      <div className="mt-4 pt-4 border-t border-gray-200">
        <div className="flex flex-wrap gap-4 text-sm text-gray-600">
          <span>Found: <strong className="text-gray-900">{stats.totalProducts}</strong> products</span>
          <span>Avg Price: <strong className="text-gray-900">${stats.averagePrice.toFixed(2)}</strong></span>
          <span>Range: <strong className="text-gray-900">${stats.minPrice}</strong> - <strong className="text-gray-900">${stats.maxPrice}</strong></span>
        </div>
      </div>
    </div>
  );
}
*/

export default SearchBar;
