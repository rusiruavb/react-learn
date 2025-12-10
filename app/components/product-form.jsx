/**
 * =============================================================================
 * EXERCISE 3: ProductForm Component
 * =============================================================================
 *
 * LEARNING OBJECTIVES:
 * - Master controlled form components in React
 * - Understand form state management with useState
 * - Learn form validation patterns
 * - Practice event handling (onChange, onSubmit)
 *
 * CONCEPTS COVERED:
 * - Controlled Components
 * - Form Events (onChange, onSubmit)
 * - Multiple State Variables
 * - Form Validation
 * - Preventing Default Behavior
 *
 * =============================================================================
 */

import { useState } from "react";

// =============================================================================
// COMPONENT IMPLEMENTATION
// =============================================================================

/**
 * TODO 3.1: Implement the ProductForm component
 *
 * This form allows users to create or edit products.
 * It demonstrates controlled form components where React manages the form state.
 *
 * WHAT ARE CONTROLLED COMPONENTS?
 * In a controlled component, form data is handled by React state.
 * The input value is controlled by React, and changes are handled via onChange.
 *
 * <input value={state} onChange={(e) => setState(e.target.value)} />
 *
 * REQUIREMENTS:
 * 1. Create state for each form field (title, price, description, categoryId, images)
 * 2. Handle form submission
 * 3. Implement basic validation
 * 4. Show validation errors
 */

export function ProductForm({
  categories,
  onSubmit,
  initialValues,
  isSubmitting = false,
}) {
  // TODO 3.1a: Create state for form fields
  // Each form field needs its own state variable
  //
  // HINT:
  // const [title, setTitle] = useState(initialValues?.title || "");
  // const [price, setPrice] = useState(initialValues?.price || 0);
  // const [description, setDescription] = useState(initialValues?.description || "");
  // const [categoryId, setCategoryId] = useState(initialValues?.categoryId || 0);
  // const [imageUrl, setImageUrl] = useState(initialValues?.images?.[0] || "");

  // ⬇️ YOUR CODE HERE ⬇️

  // ⬆️ YOUR CODE HERE ⬆️

  // TODO 3.1b: Create state for validation errors
  // HINT: const [errors, setErrors] = useState>({});

  // ⬇️ YOUR CODE HERE ⬇️

  // ⬆️ YOUR CODE HERE ⬆️

  // TODO 3.1c: Create validation function
  // Returns true if form is valid, false otherwise
  //
  // HINT:
  // const validateForm = (): boolean => {
  //   const newErrors: Record<string, string> = {};
  //
  //   if (!title.trim()) {
  //     newErrors.title = "Title is required";
  //   }
  //   if (price <= 0) {
  //     newErrors.price = "Price must be greater than 0";
  //   }
  //   if (!description.trim()) {
  //     newErrors.description = "Description is required";
  //   }
  //   if (!categoryId) {
  //     newErrors.categoryId = "Please select a category";
  //   }
  //
  //   setErrors(newErrors);
  //   return Object.keys(newErrors).length === 0;
  // };

  // ⬇️ YOUR CODE HERE ⬇️

  // ⬆️ YOUR CODE HERE ⬆️

  // TODO 3.1d: Create form submit handler
  //
  // IMPORTANT: Always call e.preventDefault() to prevent page reload!
  //
  // HINT:
  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //
  //   if (!validateForm()) return;
  //
  //   onSubmit({
  //     title,
  //     price,
  //     description,
  //     categoryId,
  //     images: imageUrl ? [imageUrl] : ["https://via.placeholder.com/300"],
  //   });
  // };

  // ⬇️ YOUR CODE HERE ⬇️

  // ⬆️ YOUR CODE HERE ⬆️

  return (
    <form className="space-y-6 bg-white p-6 rounded-lg shadow-md">
      {/* TODO 3.1e: Title Input Field */}
      {/* 
        A controlled input has:
        - value: bound to state
        - onChange: updates state when user types
        
        HINT:
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
            Product Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-transparent ${
              errors.title ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Enter product title"
          />
          {errors.title && (
            <p className="text-red-500 text-sm mt-1">{errors.title}</p>
          )}
        </div>
      */}

      {/* ⬇️ YOUR CODE HERE ⬇️ */}
      <div>
        <label
          htmlFor="title"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Product Title
        </label>
        {/* TODO: Add controlled input for title */}
      </div>
      {/* ⬆️ YOUR CODE HERE ⬆️ */}

      {/* TODO 3.1f: Price Input Field */}
      {/* 
        For number inputs, convert string to number:
        onChange={(e) => setPrice(Number(e.target.value))}
        
        HINT:
        <div>
          <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-1">
            Price ($)
          </label>
          <input
            type="number"
            id="price"
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
            min="0"
            step="0.01"
            className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-emerald-500 ${
              errors.price ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="0.00"
          />
          {errors.price && (
            <p className="text-red-500 text-sm mt-1">{errors.price}</p>
          )}
        </div>
      */}

      {/* ⬇️ YOUR CODE HERE ⬇️ */}
      <div>
        <label
          htmlFor="price"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Price ($)
        </label>
        {/* TODO: Add controlled input for price */}
      </div>
      {/* ⬆️ YOUR CODE HERE ⬆️ */}

      {/* TODO 3.1g: Category Select Dropdown */}
      {/* 
        Select elements work similarly:
        <select value={categoryId} onChange={(e) => setCategoryId(Number(e.target.value))}>
        
        HINT:
        <div>
          <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
            Category
          </label>
          <select
            id="category"
            value={categoryId}
            onChange={(e) => setCategoryId(Number(e.target.value))}
            className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-emerald-500 ${
              errors.categoryId ? "border-red-500" : "border-gray-300"
            }`}
          >
            <option value={0}>Select a category</option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
          {errors.categoryId && (
            <p className="text-red-500 text-sm mt-1">{errors.categoryId}</p>
          )}
        </div>
      */}

      {/* ⬇️ YOUR CODE HERE ⬇️ */}
      <div>
        <label
          htmlFor="category"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Category
        </label>
        {/* TODO: Add controlled select for category */}
      </div>
      {/* ⬆️ YOUR CODE HERE ⬆️ */}

      {/* TODO 3.1h: Description Textarea */}
      {/* 
        Textareas work the same as inputs:
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
        
        HINT:
        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
            Description
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={4}
            className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-emerald-500 ${
              errors.description ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Enter product description"
          />
          {errors.description && (
            <p className="text-red-500 text-sm mt-1">{errors.description}</p>
          )}
        </div>
      */}

      {/* ⬇️ YOUR CODE HERE ⬇️ */}
      <div>
        <label
          htmlFor="description"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Description
        </label>
        {/* TODO: Add controlled textarea for description */}
      </div>
      {/* ⬆️ YOUR CODE HERE ⬆️ */}

      {/* TODO 3.1i: Image URL Input */}
      {/* ⬇️ YOUR CODE HERE ⬇️ */}
      <div>
        <label
          htmlFor="imageUrl"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Image URL
        </label>
        {/* TODO: Add controlled input for image URL */}
      </div>
      {/* ⬆️ YOUR CODE HERE ⬆️ */}

      {/* TODO 3.1j: Submit Button */}
      {/* 
        HINT:
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-emerald-500 text-white py-3 px-4 rounded-md hover:bg-emerald-600 
                     disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
        >
          {isSubmitting ? "Saving..." : "Save Product"}
        </button>
      */}

      {/* ⬇️ YOUR CODE HERE ⬇️ */}
      <button
        type="submit"
        className="w-full bg-emerald-500 text-white py-3 px-4 rounded-md hover:bg-emerald-600 transition-colors"
      >
        Save Product
      </button>
      {/* ⬆️ YOUR CODE HERE ⬆️ */}
    </form>
  );
}

// =============================================================================
// REFERENCE SOLUTION
// =============================================================================

/*
COMPLETE SOLUTION:

export function ProductForm({
  categories,
  onSubmit,
  initialValues,
  isSubmitting = false,
}: ProductFormProps) {
  const [title, setTitle] = useState(initialValues?.title || "");
  const [price, setPrice] = useState(initialValues?.price || 0);
  const [description, setDescription] = useState(initialValues?.description || "");
  const [categoryId, setCategoryId] = useState(initialValues?.categoryId || 0);
  const [imageUrl, setImageUrl] = useState(initialValues?.images?.[0] || "");
  const [errors, setErrors] = useState>({});

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};
    
    if (!title.trim()) {
      newErrors.title = "Title is required";
    }
    if (price <= 0) {
      newErrors.price = "Price must be greater than 0";
    }
    if (!description.trim()) {
      newErrors.description = "Description is required";
    }
    if (!categoryId) {
      newErrors.categoryId = "Please select a category";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    onSubmit({
      title,
      price,
      description,
      categoryId,
      images: imageUrl ? [imageUrl] : ["https://via.placeholder.com/300"],
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-lg shadow-md">
      <div>
        <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
          Product Title
        </label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-transparent ${
            errors.title ? "border-red-500" : "border-gray-300"
          }`}
          placeholder="Enter product title"
        />
        {errors.title && (
          <p className="text-red-500 text-sm mt-1">{errors.title}</p>
        )}
      </div>

      <div>
        <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-1">
          Price ($)
        </label>
        <input
          type="number"
          id="price"
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
          min="0"
          step="0.01"
          className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-emerald-500 ${
            errors.price ? "border-red-500" : "border-gray-300"
          }`}
          placeholder="0.00"
        />
        {errors.price && (
          <p className="text-red-500 text-sm mt-1">{errors.price}</p>
        )}
      </div>

      <div>
        <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
          Category
        </label>
        <select
          id="category"
          value={categoryId}
          onChange={(e) => setCategoryId(Number(e.target.value))}
          className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-emerald-500 ${
            errors.categoryId ? "border-red-500" : "border-gray-300"
          }`}
        >
          <option value={0}>Select a category</option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
        {errors.categoryId && (
          <p className="text-red-500 text-sm mt-1">{errors.categoryId}</p>
        )}
      </div>

      <div>
        <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
          Description
        </label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={4}
          className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-emerald-500 ${
            errors.description ? "border-red-500" : "border-gray-300"
          }`}
          placeholder="Enter product description"
        />
        {errors.description && (
          <p className="text-red-500 text-sm mt-1">{errors.description}</p>
        )}
      </div>

      <div>
        <label htmlFor="imageUrl" className="block text-sm font-medium text-gray-700 mb-1">
          Image URL
        </label>
        <input
          type="url"
          id="imageUrl"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500"
          placeholder="https://example.com/image.jpg"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-emerald-500 text-white py-3 px-4 rounded-md hover:bg-emerald-600 
                   disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
      >
        {isSubmitting ? "Saving..." : "Save Product"}
      </button>
    </form>
  );
}
*/

export default ProductForm;
