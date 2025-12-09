/**
 * =============================================================================
 * EXERCISE 5: useProducts Custom Hook
 * =============================================================================
 *
 * LEARNING OBJECTIVES:
 * - Understand the useEffect hook for side effects
 * - Learn to create custom hooks
 * - Master data fetching patterns in React
 * - Handle loading and error states
 *
 * CONCEPTS COVERED:
 * - useEffect Hook
 * - Custom Hooks
 * - Data Fetching
 * - Cleanup Functions
 * - Dependency Arrays
 *
 * =============================================================================
 */

import { useState, useEffect, useCallback } from "react";
import { productApi } from "../services/api";

// =============================================================================
// CUSTOM HOOK IMPLEMENTATION
// =============================================================================

/**
 * TODO 5.1: Implement the useProducts custom hook
 *
 * WHAT IS useEffect?
 * useEffect lets you perform side effects in function components.
 * Side effects include: data fetching, subscriptions, DOM manipulation.
 *
 * useEffect takes two arguments:
 * 1. Effect function - runs after render
 * 2. Dependency array - controls when effect runs
 *
 * DEPENDENCY ARRAY BEHAVIORS:
 * - No array: runs after every render
 * - Empty array []: runs once after initial render
 * - With dependencies [a, b]: runs when a or b changes
 *
 * WHAT IS A CUSTOM HOOK?
 * A custom hook is a function that uses React hooks and starts with "use".
 * It allows you to extract and reuse stateful logic between components.
 */

export function useProducts(initialFilters) {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchProducts = useCallback(async (filters) => {
    try {
      setIsLoading(true);
      setError(null);

      const data = await productApi.getAll(filters);
      setProducts(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to fetch products");
    } finally {
      setIsLoading(false);
    }
  }, []);

  const getProduct = useCallback(async (id) => {
    try {
      const product = await productApi.getById(id);
      return product;
    } catch (err) {
      console.error("Failed to fetch product:", err);
      return null;
    }
  }, []);

  useEffect(() => {
    fetchProducts(initialFilters);
  }, [fetchProducts, initialFilters]);

  return {
    products,
    isLoading,
    error,
    refetch: fetchProducts,
    getProduct,
  };
}

// =============================================================================
// BONUS: useProduct (Single Product Hook)
// =============================================================================

/**
 * TODO 5.2 (BONUS): Create a hook for fetching a single product
 *
 * This hook demonstrates how to fetch data based on a parameter
 * that might change (like a product ID from URL params).
 */

export function useProduct(productId) {
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchProduct = useCallback(async () => {
    if (!productId) {
      setProduct(null);
      return;
    }

    try {
      setIsLoading(true);
      setError(null);
      const data = await productApi.getById(productId);
      setProduct(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to fetch product");
    } finally {
      setIsLoading(false);
    }
  }, [productId]);

  useEffect(() => {
    fetchProduct();
  }, [fetchProduct]);

  return {
    product,
    isLoading,
    error,
    refetch: fetchProduct,
  };
}

export default useProducts;
