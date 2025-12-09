/**
 * =============================================================================
 * EXERCISE 8: Product Detail Page (Dynamic Route)
 * =============================================================================
 *
 * LEARNING OBJECTIVES:
 * - Understand dynamic routes with URL parameters
 * - Learn to use useParams hook
 * - Practice data fetching based on route parameters
 * - Implement loading and error states
 *
 * CONCEPTS COVERED:
 * - Dynamic Routes
 * - useParams Hook
 * - Route Parameters
 * - Conditional Rendering
 *
 * =============================================================================
 */

import { useParams, useNavigate, Link } from "react-router";
import { useState, useEffect } from "react";


import { productApi } from "../services/api";

// =============================================================================
// META FUNCTION
// =============================================================================

export function meta({ params }) {
  return [
    { title: `Product #${params.id} | Product App` },
    { name: "description", content: "View product details" },
  ];
}

// =============================================================================
// ROUTE COMPONENT
// =============================================================================

/**
 * TODO 8.1: Implement the Product Detail page
 *
 * DYNAMIC ROUTES:
 * The filename product.$id.tsx creates a dynamic route.
 * The $id part becomes a URL parameter.
 *
 * For URL "/product/123":
 * - useParams() returns { id: "123" }
 *
 * IMPORTANT:
 * - URL params are always strings! Convert to number if needed.
 * - Handle the case where product is not found
 * - Show loading state while fetching
 */

export default function ProductDetail() {
  // TODO 8.1a: Get the product ID from URL params
  //
  // useParams returns an object with all URL parameters.
  // For this route, it will have { id: string }
  //
  // HINT: const { id } = useParams();
  
  // ⬇️ YOUR CODE HERE ⬇️

  // ⬆️ YOUR CODE HERE ⬆️

  // TODO 8.1b: Create state for product, loading, and error
  //
  // HINT:
  // const [product, setProduct] = useState(null);
  // const [isLoading, setIsLoading] = useState(true);
  // const [error, setError] = useState(null);
  
  // ⬇️ YOUR CODE HERE ⬇️

  // ⬆️ YOUR CODE HERE ⬆️

  // TODO 8.1c: Get navigate function for back button
  // HINT: const navigate = useNavigate();
  
  // ⬇️ YOUR CODE HERE ⬇️

  // ⬆️ YOUR CODE HERE ⬆️

  // TODO 8.1d: Fetch product data when ID changes
  //
  // IMPORTANT: The dependency array includes 'id'
  // This means the effect runs whenever the ID in the URL changes.
  //
  // HINT:
  // useEffect(() => {
  //   const fetchProduct = async () => {
  //     if (!id) return;
  //     
  //     try {
  //       setIsLoading(true);
  //       setError(null);
  //       const data = await productApi.getById(Number(id));
  //       setProduct(data);
  //     } catch (err) {
  //       setError(err instanceof Error ? err.message : "Failed to load product");
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   };
  //   
  //   fetchProduct();
  // }, [id]);
  
  // ⬇️ YOUR CODE HERE ⬇️

  // ⬆️ YOUR CODE HERE ⬆️

  // TODO 8.1e: Handle loading state
  //
  // HINT:
  // if (isLoading) {
  //   return (
  //     <div className="min-h-screen bg-gray-50 flex items-center justify-center">
  //       <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-500" />
  //     </div>
  //   );
  // }
  
  // ⬇️ YOUR CODE HERE ⬇️

  // ⬆️ YOUR CODE HERE ⬆️

  // TODO 8.1f: Handle error state
  //
  // HINT:
  // if (error || !product) {
  //   return (
  //     <div className="min-h-screen bg-gray-50 flex items-center justify-center">
  //       <div className="text-center">
  //         <h1 className="text-2xl font-bold text-gray-900 mb-2">Product Not Found</h1>
  //         <p className="text-gray-500 mb-4">{error || "The product you're looking for doesn't exist."}</p>
  //         <Link to="/products" className="text-emerald-500 hover:underline">
  //           ← Back to Products
  //         </Link>
  //       </div>
  //     </div>
  //   );
  // }
  
  // ⬇️ YOUR CODE HERE ⬇️

  // ⬆️ YOUR CODE HERE ⬆️

  // TODO 8.1g: Render product details
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          {/* TODO: Add back button */}
          {/* 
            HINT:
            <button 
              onClick={() => navigate(-1)}
              className="text-gray-600 hover:text-gray-900 flex items-center gap-2"
            >
              ← Back
            </button>
          */}
          
          {/* ⬇️ YOUR CODE HERE ⬇️ */}
          <Link to="/products" className="text-gray-600 hover:text-gray-900">
            ← Back to Products
          </Link>
          {/* ⬆️ YOUR CODE HERE ⬆️ */}
        </div>
      </nav>

      {/* Product Details */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* TODO 8.1h: Display product details */}
        {/* 
          HINT:
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img 
                  src={product.images[0] || "https://via.placeholder.com/500"} 
                  alt={product.title}
                  className="w-full h-96 object-cover"
                />
              </div>
              <div className="p-8 md:w-1/2">
                <span className="bg-slate-100 text-slate-600 text-sm px-3 py-1 rounded-full">
                  {product.category.name}
                </span>
                <h1 className="text-3xl font-bold text-gray-900 mt-4">
                  {product.title}
                </h1>
                <p className="text-4xl font-bold text-emerald-600 mt-4">
                  ${product.price.toFixed(2)}
                </p>
                <p className="text-gray-600 mt-6 leading-relaxed">
                  {product.description}
                </p>
                <div className="mt-8 flex gap-4">
                  <button className="flex-1 bg-emerald-500 text-white py-3 rounded-md hover:bg-emerald-600 transition-colors">
                    Add to Cart
                  </button>
                  <button className="px-6 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
                    ♡
                  </button>
                </div>
              </div>
            </div>
          </div>
        */}
        
        {/* ⬇️ YOUR CODE HERE ⬇️ */}
        <div className="text-center py-12">
          <p className="text-gray-500">
            TODO: Implement product detail view here
          </p>
          <p className="text-sm text-gray-400 mt-2">
            Product ID from URL: {/* Display the id here */}
          </p>
          <p className="text-sm text-gray-400">
            See Exercise 8 in the worksheet
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

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      if (!id) return;
      
      try {
        setIsLoading(true);
        setError(null);
        const data = await productApi.getById(Number(id));
        setProduct(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to load product");
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchProduct();
  }, [id]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-500" />
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Product Not Found</h1>
          <p className="text-gray-500 mb-4">{error || "The product you're looking for doesn't exist."}</p>
          <Link to="/products" className="text-emerald-500 hover:underline">
            ← Back to Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <button 
            onClick={() => navigate(-1)}
            className="text-gray-600 hover:text-gray-900 flex items-center gap-2"
          >
            ← Back
          </button>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2">
              <img 
                src={product.images[0] || "https://via.placeholder.com/500"} 
                alt={product.title}
                className="w-full h-96 object-cover"
              />
            </div>
            <div className="p-8 md:w-1/2">
              <span className="bg-slate-100 text-slate-600 text-sm px-3 py-1 rounded-full">
                {product.category.name}
              </span>
              <h1 className="text-3xl font-bold text-gray-900 mt-4">
                {product.title}
              </h1>
              <p className="text-4xl font-bold text-emerald-600 mt-4">
                ${product.price.toFixed(2)}
              </p>
              <p className="text-gray-600 mt-6 leading-relaxed">
                {product.description}
              </p>
              <div className="mt-8 flex gap-4">
                <button className="flex-1 bg-emerald-500 text-white py-3 rounded-md hover:bg-emerald-600 transition-colors">
                  Add to Cart
                </button>
                <button className="px-6 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
                  ♡
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
*/

