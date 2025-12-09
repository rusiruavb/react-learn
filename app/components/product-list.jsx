/**
 * =============================================================================
 * EXERCISE 2: ProductList Component
 * =============================================================================
 *
 * LEARNING OBJECTIVES:
 * - Understand React state management with useState
 * - Learn to render lists of components
 * - Master the key prop for list rendering
 * - Practice conditional rendering
 *
 * CONCEPTS COVERED:
 * - useState Hook
 * - Rendering Arrays/Lists
 * - The key Prop
 * - Conditional Rendering
 * - Loading States
 *
 * =============================================================================
 */

import { useState } from "react";

import { ProductCard } from "./product-card";

// =============================================================================
// COMPONENT IMPLEMENTATION
// =============================================================================

/**
 * TODO 2.1: Implement the ProductList component
 *
 * This component should:
 * 1. Show a loading skeleton when isLoading is true
 * 2. Show an error message when error is provided
 * 3. Show "No products found" when products array is empty
 * 4. Render a grid of ProductCard components
 *
 * REQUIREMENTS:
 * - Use conditional rendering for different states
 * - Use Array.map() to render the product list
 * - Each ProductCard must have a unique 'key' prop
 * - Implement a responsive grid layout with Tailwind
 *
 * WHY DO WE NEED THE KEY PROP?
 * React uses keys to identify which items have changed, been added, or removed.
 * Keys help React optimize rendering by reusing existing DOM elements.
 * Always use a unique identifier (like id) as the key, not array index.
 */

export function ProductList({ products, isLoading, error, onViewDetails }) {
  // TODO 2.1a: Handle loading state
  // When isLoading is true, show a skeleton UI or loading indicator

  // ⬇️ YOUR CODE HERE ⬇️
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {/* TODO: Create skeleton loading cards */}
        {/* HINT: Use Array(8).fill(0).map((_, index) => ...) to create 8 skeleton cards */}
        {/* Example skeleton card:
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden animate-pulse">
            <div className="w-full h-48 bg-gray-200" />
            <div className="p-4">
              <div className="h-4 bg-gray-200 rounded w-3/4 mb-2" />
              <div className="h-3 bg-gray-200 rounded w-1/2 mb-4" />
              <div className="h-6 bg-gray-200 rounded w-1/3" />
            </div>
          </div>
        */}
      </div>
    );
  }
  // ⬆️ YOUR CODE HERE ⬆️

  // TODO 2.1b: Handle error state
  // When error is provided, show an error message with retry option

  // ⬇️ YOUR CODE HERE ⬇️
  if (error) {
    return (
      <div className="text-center py-12">
        {/* TODO: Show error message */}
        {/* HINT:
          <div className="text-red-500 mb-4">
            <p className="text-lg font-semibold">Error loading products</p>
            <p className="text-sm">{error}</p>
          </div>
        */}
      </div>
    );
  }
  // ⬆️ YOUR CODE HERE ⬆️

  // TODO 2.1c: Handle empty state
  // When products array is empty, show a "No products found" message

  // ⬇️ YOUR CODE HERE ⬇️
  if (products.length === 0) {
    return (
      <div className="text-center py-12">
        {/* TODO: Show empty state message */}
        {/* HINT:
          <p className="text-gray-500 text-lg">No products found</p>
          <p className="text-gray-400 text-sm mt-2">Try adjusting your search or filters</p>
        */}
      </div>
    );
  }
  // ⬆️ YOUR CODE HERE ⬆️

  // TODO 2.1d: Render the product grid
  // Map over products array and render ProductCard for each

  return (
    // ⬇️ YOUR CODE HERE ⬇️
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {/* TODO: Map over products and render ProductCard components */}
      {/* 
        HINT:
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onViewDetails={onViewDetails}
          />
        ))}
        
        IMPORTANT: The 'key' prop must be unique for each item!
        Using product.id is ideal because it's a unique identifier.
        
        ❌ BAD: key={index} - Don't use array index as key
        ✅ GOOD: key={product.id} - Use unique identifier
      */}
    </div>
    // ⬆️ YOUR CODE HERE ⬆️
  );
}

// =============================================================================
// BONUS EXERCISE: ProductListWithState
// =============================================================================

/**
 * TODO 2.2 (BONUS): Create a self-contained ProductList with internal state
 *
 * This exercise demonstrates useState for managing local component state.
 * The component will manage its own selected product state.
 *
 * REQUIREMENTS:
 * - Use useState to track which product is selected
 * - Clicking a product card selects it (highlights it)
 * - Clicking again deselects it
 */

export function ProductListWithSelection({ products }) {
  // TODO 2.2a: Create state for selected product ID
  // HINT: const [selectedId, setSelectedId] = useState(null);

  // ⬇️ YOUR CODE HERE ⬇️

  // ⬆️ YOUR CODE HERE ⬆️

  // TODO 2.2b: Create a toggle function
  // HINT: const toggleSelection = (id: number) => {
  //   setSelectedId(prev => prev === id ? null );
  // };

  // ⬇️ YOUR CODE HERE ⬇️

  // ⬆️ YOUR CODE HERE ⬆️

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {/* TODO 2.2c: Render products with selection state */}
      {/* 
        HINT: Add conditional styling based on selection
        className={`... ${selectedId === product.id ? 'ring-2 ring-emerald-500' : ''}`}
      */}
    </div>
  );
}

// =============================================================================
// REFERENCE SOLUTION
// =============================================================================

/*
COMPLETE SOLUTION:

export function ProductList({ products, isLoading, error, onViewDetails }: ProductListProps) {
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {Array(8).fill(0).map((_, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden animate-pulse">
            <div className="w-full h-48 bg-gray-200" />
            <div className="p-4">
              <div className="h-4 bg-gray-200 rounded w-3/4 mb-2" />
              <div className="h-3 bg-gray-200 rounded w-1/2 mb-4" />
              <div className="h-6 bg-gray-200 rounded w-1/3" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <div className="text-red-500 mb-4">
          <p className="text-lg font-semibold">Error loading products</p>
          <p className="text-sm">{error}</p>
        </div>
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 text-lg">No products found</p>
        <p className="text-gray-400 text-sm mt-2">Try adjusting your search or filters</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onViewDetails={onViewDetails}
        />
      ))}
    </div>
  );
}

// Bonus: Selection state
export function ProductListWithSelection({ products }: { products: Product[] }) {
  const [selectedId, setSelectedId] = useState(null);

  const toggleSelection = (id: number) => {
    setSelectedId(prev => prev === id ? null );
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((product) => (
        <div 
          key={product.id}
          onClick={() => toggleSelection(product.id)}
          className={`cursor-pointer rounded-lg transition-all ${
            selectedId === product.id ? 'ring-2 ring-emerald-500 scale-[1.02]' : ''
          }`}
        >
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
}
*/

export default ProductList;
