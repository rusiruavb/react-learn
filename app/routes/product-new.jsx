/**
 * =============================================================================
 * EXERCISE: Create New Product Page
 * =============================================================================
 *
 * This page combines concepts from multiple exercises:
 * - Route components (Exercise 6-8)
 * - ProductForm component (Exercise 3)
 * - Navigation (Exercise 7)
 * - Data fetching for categories
 *
 * =============================================================================
 */

import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router";


import { productApi, categoryApi } from "../services/api";
// import { ProductForm } from "../components/product-form";

// =============================================================================
// META FUNCTION
// =============================================================================

export function meta({}) {
  return [
    { title: "Create Product | Product App" },
    { name: "description", content: "Add a new product to the catalog" },
  ];
}

// =============================================================================
// ROUTE COMPONENT
// =============================================================================

export default function CreateProduct() {
  const navigate = useNavigate();
  
  // State for categories and submission
  const [categories, setCategories] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  // Fetch categories on mount
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await categoryApi.getAll();
        setCategories(data);
      } catch (err) {
        console.error("Failed to fetch categories:", err);
      }
    };
    
    fetchCategories();
  }, []);

  // Handle form submission
  const handleSubmit = async (data) => {
    try {
      setIsSubmitting(true);
      setError(null);
      
      const newProduct = await productApi.create(data);
      
      // Navigate to the new product's page
      navigate(`/product/${newProduct.id}`);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to create product");
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <Link to="/products" className="text-gray-600 hover:text-gray-900">
            ← Back to Products
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-2xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Create New Product</h1>
        
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md mb-6">
            {error}
          </div>
        )}

        {/* TODO: Use the ProductForm component here */}
        {/* 
          HINT:
          <ProductForm
            categories={categories}
            onSubmit={handleSubmit}
            isSubmitting={isSubmitting}
          />
        */}
        
        {/* ⬇️ YOUR CODE HERE ⬇️ */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="text-gray-500 text-center py-8">
            TODO: Add ProductForm component here
          </p>
          <p className="text-sm text-gray-400 text-center">
            See Exercise 3 for ProductForm implementation
          </p>
        </div>
        {/* ⬆️ YOUR CODE HERE ⬆️ */}
      </main>
    </div>
  );
}

