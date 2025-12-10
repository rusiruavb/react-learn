/**
 * =============================================================================
 * EXERCISE 10: ProductContext - Product State Management
 * =============================================================================
 *
 * LEARNING OBJECTIVES:
 * - Reinforce Context API patterns
 * - Learn to manage complex state with context
 * - Practice CRUD operations in context
 * - Understand when to use context vs local state
 *
 * CONCEPTS COVERED:
 * - Context for Complex State
 * - CRUD Operations
 * - State Updates in Context
 * - Optimistic Updates Pattern
 *
 * =============================================================================
 */

import {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
} from "react";
import { productApi } from "../services/api";

// =============================================================================
// CONTEXT CREATION
// =============================================================================

/**
 * TODO 10.1: Create the ProductContext
 *
 * WHEN TO USE CONTEXT FOR STATE:
 * ✅ State needed by many components at different levels
 * ✅ State that changes infrequently
 * ✅ Data that represents "global" application state
 *
 * WHEN NOT TO USE CONTEXT:
 * ❌ State only needed by a single component (use useState)
 * ❌ State needed by parent-child only (use props)
 * ❌ Very frequently changing state (can cause performance issues)
 *
 * HINT: const ProductContext = createContext<ProductContextType | null>(null);
 */

// ⬇️ YOUR CODE HERE ⬇️

// ⬆️ YOUR CODE HERE ⬆️

// =============================================================================
// PROVIDER COMPONENT
// =============================================================================

/**
 * TODO 10.2: Create the ProductProvider component
 *
 * This provider manages all product-related state and operations:
 * - Fetching products
 * - Creating products
 * - Updating products
 * - Deleting products
 */

export function ProductProvider({ children }) {
  // TODO 10.2a: Create state for products, loading, and error
  //
  // HINT:
  // const [products, setProducts] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState(null);

  // ⬇️ YOUR CODE HERE ⬇️

  // ⬆️ YOUR CODE HERE ⬆️

  // TODO 10.2b: Implement fetchProducts function
  //
  // HINT:
  // const fetchProducts = useCallback(async (filters?: ProductFilters) => {
  //   try {
  //     setIsLoading(true);
  //     setError(null);
  //     const data = await productApi.getAll(filters);
  //     setProducts(data);
  //   } catch (err) {
  //     setError(err instanceof Error ? err.message : "Failed to fetch products");
  //   } finally {
  //     setIsLoading(false);
  //   }
  // }, []);

  // ⬇️ YOUR CODE HERE ⬇️

  // ⬆️ YOUR CODE HERE ⬆️

  // TODO 10.2c: Implement getProduct function
  //
  // HINT:
  // const getProduct = useCallback(async (id: number) => {
  //   try {
  //     const product = await productApi.getById(id);
  //     return product;
  //   } catch (err) {
  //     return null;
  //   }
  // }, []);

  // ⬇️ YOUR CODE HERE ⬇️

  // ⬆️ YOUR CODE HERE ⬆️

  // TODO 10.2d: Implement createProduct function
  //
  // After creating, add the new product to the state
  //
  // HINT:
  // const createProduct = useCallback(async (data: CreateProductData) => {
  //   try {
  //     const newProduct = await productApi.create(data);
  //     // Add to existing products
  //     setProducts(prev => [newProduct, ...prev]);
  //     return newProduct;
  //   } catch (err) {
  //     setError(err instanceof Error ? err.message : "Failed to create product");
  //     return null;
  //   }
  // }, []);

  // ⬇️ YOUR CODE HERE ⬇️

  // ⬆️ YOUR CODE HERE ⬆️

  // TODO 10.2e: Implement updateProduct function
  //
  // After updating, replace the old product in state
  //
  // HINT:
  // const updateProduct = useCallback(async (
  //   id: number,
  //   data: UpdateProductData
  // ) => {
  //   try {
  //     const updated = await productApi.update(id, data);
  //     // Replace in products array
  //     setProducts(prev => prev.map(p => p.id === id ? updated : p));
  //     return updated;
  //   } catch (err) {
  //     setError(err instanceof Error ? err.message : "Failed to update product");
  //     return null;
  //   }
  // }, []);

  // ⬇️ YOUR CODE HERE ⬇️

  // ⬆️ YOUR CODE HERE ⬆️

  // TODO 10.2f: Implement deleteProduct function
  //
  // After deleting, remove from state
  //
  // HINT:
  // const deleteProduct = useCallback(async (id: number) => {
  //   try {
  //     await productApi.delete(id);
  //     // Remove from products array
  //     setProducts(prev => prev.filter(p => p.id !== id));
  //     return true;
  //   } catch (err) {
  //     setError(err instanceof Error ? err.message : "Failed to delete product");
  //     return false;
  //   }
  // }, []);

  // ⬇️ YOUR CODE HERE ⬇️

  // ⬆️ YOUR CODE HERE ⬆️

  // TODO 10.2g: Fetch products on mount
  //
  // HINT:
  // useEffect(() => {
  //   fetchProducts();
  // }, [fetchProducts]);

  // ⬇️ YOUR CODE HERE ⬇️

  // ⬆️ YOUR CODE HERE ⬆️

  // TODO 10.2h: Create the context value
  //
  // HINT:
  // const value: ProductContextType = {
  //   products,
  //   isLoading,
  //   error,
  //   fetchProducts,
  //   getProduct,
  //   createProduct,
  //   updateProduct,
  //   deleteProduct,
  // };

  // ⬇️ YOUR CODE HERE ⬇️

  // ⬆️ YOUR CODE HERE ⬆️

  // TODO 10.2i: Return Provider
  //
  // HINT:
  // return (
  //   <ProductContext.Provider value={value}>
  //     {children}
  //   </ProductContext.Provider>
  // );

  // ⬇️ YOUR CODE HERE ⬇️
  return <>{children}</>;
  // ⬆️ YOUR CODE HERE ⬆️
}

// =============================================================================
// CUSTOM HOOK
// =============================================================================

/**
 * TODO 10.3: Create the useProducts hook
 *
 * HINT:
 * export function useProductContext(): ProductContextType {
 *   const context = useContext(ProductContext);
 *
 *   if (!context) {
 *     throw new Error("useProductContext must be used within a ProductProvider");
 *   }
 *
 *   return context;
 * }
 */

// ⬇️ YOUR CODE HERE ⬇️
export function useProductContext() {
  // TODO: Implement the hook
  // For now, return a placeholder
  return {
    products: [],
    isLoading: false,
    error: null,
    fetchProducts: async () => {},
    getProduct: async () => null,
    createProduct: async () => null,
    updateProduct: async () => null,
    deleteProduct: async () => false,
  };
}
// ⬆️ YOUR CODE HERE ⬆️

// =============================================================================
// REFERENCE SOLUTION
// =============================================================================

/*
COMPLETE SOLUTION:

const ProductContext = createContext<ProductContextType | null>(null);

export function ProductProvider({ children }: ProductProviderProps) {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchProducts = useCallback(async (filters?: ProductFilters) => {
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

  const getProduct = useCallback(async (id: number) => {
    try {
      const product = await productApi.getById(id);
      return product;
    } catch (err) {
      return null;
    }
  }, []);

  const createProduct = useCallback(async (data: CreateProductData) => {
    try {
      const newProduct = await productApi.create(data);
      setProducts(prev => [newProduct, ...prev]);
      return newProduct;
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to create product");
      return null;
    }
  }, []);

  const updateProduct = useCallback(async (
    id: number, 
    data: UpdateProductData
  ) => {
    try {
      const updated = await productApi.update(id, data);
      setProducts(prev => prev.map(p => p.id === id ? updated : p));
      return updated;
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to update product");
      return null;
    }
  }, []);

  const deleteProduct = useCallback(async (id: number) => {
    try {
      await productApi.delete(id);
      setProducts(prev => prev.filter(p => p.id !== id));
      return true;
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to delete product");
      return false;
    }
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const value: ProductContextType = {
    products,
    isLoading,
    error,
    fetchProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct,
  };

  return (
    <ProductContext.Provider value={value}>
      {children}
    </ProductContext.Provider>
  );
}

export function useProductContext(): ProductContextType {
  const context = useContext(ProductContext);
  
  if (!context) {
    throw new Error("useProductContext must be used within a ProductProvider");
  }
  
  return context;
}
*/

export default ProductProvider;
