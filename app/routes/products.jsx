/**
 * =============================================================================
 * EXERCISE 7: Products Page Route
 * =============================================================================
 *
 * LEARNING OBJECTIVES:
 * - Understand route components in React Router
 * - Learn to compose components together
 * - Practice using custom hooks in routes
 * - Implement navigation with Link component
 *
 * CONCEPTS COVERED:
 * - Route Components
 * - Component Composition
 * - Using Custom Hooks
 * - Navigation (Link, useNavigate)
 *
 * =============================================================================
 */

import { Link, useNavigate } from "react-router";

// import { useProducts } from "../hooks/use-products";
// import { ProductList } from "../components/product-list";
// import { SearchBar } from "../components/search-bar";

// =============================================================================
// META FUNCTION
// =============================================================================

/**
 * The meta function sets the page title and meta tags.
 * This is important for SEO and browser tab titles.
 */
export function meta({}) {
  return [
    { title: "Products | Product App" },
    { name: "description", content: "Browse our product catalog" },
  ];
}

// =============================================================================
// ROUTE COMPONENT
// =============================================================================

/**
 * TODO 7.1: Implement the Products page
 *
 * This page should:
 * 1. Use the useProducts hook to fetch products
 * 2. Display the SearchBar component
 * 3. Display the ProductList component
 * 4. Handle navigation to product details
 * 5. Show a button to add new products
 *
 * NAVIGATION IN REACT ROUTER:
 * - <Link to="/path">: For declarative navigation (like <a> tags)
 * - useNavigate(): For programmatic navigation
 *
 * Example:
 * const navigate = useNavigate();
 * navigate("/product/123"); // Navigate programmatically
 * navigate(-1); // Go back
 */

export default function Products() {
  // TODO 7.1a: Use useNavigate for programmatic navigation
  // HINT: const navigate = useNavigate();
  
  // ⬇️ YOUR CODE HERE ⬇️

  // ⬆️ YOUR CODE HERE ⬆️

  // TODO 7.1b: Use the useProducts hook to get products
  // HINT: const { products, isLoading, error, refetch } = useProducts();
  
  // ⬇️ YOUR CODE HERE ⬇️

  // ⬆️ YOUR CODE HERE ⬆️

  // TODO 7.1c: Create handler for viewing product details
  // HINT: const handleViewDetails = (productId: number) => {
  //   navigate(`/product/${productId}`);
  // };
  
  // ⬇️ YOUR CODE HERE ⬇️

  // ⬆️ YOUR CODE HERE ⬆️

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Products</h1>
              <p className="text-gray-500 mt-1">Browse our product catalog</p>
            </div>
            
            {/* TODO 7.1d: Add "New Product" button with Link */}
            {/* 
              HINT:
              <Link 
                to="/products/new"
                className="bg-emerald-500 text-white px-4 py-2 rounded-md hover:bg-emerald-600 transition-colors"
              >
                + Add Product
              </Link>
            */}
            
            {/* ⬇️ YOUR CODE HERE ⬇️ */}
            
            {/* ⬆️ YOUR CODE HERE ⬆️ */}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* TODO 7.1e: Add SearchBar component */}
        {/* 
          HINT:
          <SearchBar 
            products={products}
            categories={[]} // You can fetch categories separately
            onFilterChange={(filtered) => console.log(filtered)}
          />
        */}
        
        {/* ⬇️ YOUR CODE HERE ⬇️ */}
        
        {/* ⬆️ YOUR CODE HERE ⬆️ */}

        {/* TODO 7.1f: Add ProductList component */}
        {/* 
          HINT:
          <ProductList
            products={products}
            isLoading={isLoading}
            error={error}
            onViewDetails={handleViewDetails}
          />
        */}
        
        {/* ⬇️ YOUR CODE HERE ⬇️ */}
        <div className="text-center py-12">
          <p className="text-gray-500">
            TODO: Implement ProductList component here
          </p>
          <p className="text-sm text-gray-400 mt-2">
            See Exercise 7 in the worksheet
          </p>
        </div>
        {/* ⬆️ YOUR CODE HERE ⬆️ */}
      </main>
    </div>
  );
}

// =============================================================================
// REFERENCE SOLUTION
// =============================================================================

/*
COMPLETE SOLUTION:

import { Link, useNavigate } from "react-router";
import { useProducts } from "../hooks/use-products";
import { ProductList } from "../components/product-list";

export default function Products() {
  const navigate = useNavigate();
  const { products, isLoading, error } = useProducts();

  const handleViewDetails = (productId: number) => {
    navigate(`/product/${productId}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Products</h1>
              <p className="text-gray-500 mt-1">Browse our product catalog</p>
            </div>
            
            <Link 
              to="/products/new"
              className="bg-emerald-500 text-white px-4 py-2 rounded-md hover:bg-emerald-600 transition-colors"
            >
              + Add Product
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <ProductList
          products={products}
          isLoading={isLoading}
          error={error}
          onViewDetails={handleViewDetails}
        />
      </main>
    </div>
  );
}
*/

