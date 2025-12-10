/**
 * =============================================================================
 * EXERCISE 1: ProductCard Component
 * =============================================================================
 *
 * LEARNING OBJECTIVES:
 * - Understand React functional components
 * - Learn JSX syntax and expressions
 * - Master props
 * - Practice component composition
 *
 * CONCEPTS COVERED:
 * - Functional Components
 * - JSX (JavaScript XML)
 * - Props (Properties)
 * - TypeScript with React
 *
 * =============================================================================
 */

// =============================================================================
// COMPONENT IMPLEMENTATION
// =============================================================================

/**
 * TODO 1.2: Implement the ProductCard component
 *
 * The component should display:
 * - Product image (first image from images array)
 * - Product title
 * - Product price (formatted as currency)
 * - Product category name
 * - "View Details" button (calls onViewDetails with product.id)
 * - "Add to Cart" button (calls onAddToCart with the product)
 *
 * REQUIREMENTS:
 * 1. Use destructuring to extract props
 * 2. Handle case where images array might be empty
 * 3. Format price with $ symbol and 2 decimal places
 * 4. Buttons should be disabled if callbacks are not provided
 *
 * JSX SYNTAX REMINDERS:
 * - Use {expression} to embed JavaScript in JSX
 * - Use className instead of class for CSS classes
 * - Event handlers use camelCase: onClick, onChange, etc.
 * - Conditional rendering: {condition && <Element />}
 * - Ternary: {condition ? <A /> : <B />}
 */

export function ProductCard(props) {
  // TODO 1.2a: Destructure props
  // Example: const { product, onViewDetails, onAddToCart } = props;

  // ⬇️ YOUR CODE HERE ⬇️

  // ⬆️ YOUR CODE HERE ⬆️

  // TODO 1.2b: Get the first image or use a placeholder
  // HINT: const imageUrl = product.images?.[0] || "https://via.placeholder.com/300";

  // ⬇️ YOUR CODE HERE ⬇️

  // ⬆️ YOUR CODE HERE ⬆️

  // TODO 1.2c: Format the price
  // HINT: const formattedPrice = `$${product.price.toFixed(2)}`;

  // ⬇️ YOUR CODE HERE ⬇️

  // ⬆️ YOUR CODE HERE ⬆️

  // TODO 1.2d: Return the JSX
  // Use Tailwind CSS classes for styling

  return (
    // ⬇️ YOUR CODE HERE ⬇️
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      {/* TODO: Add product image */}
      {/* HINT: <img src={imageUrl} alt={product.title} className="w-full h-48 object-cover" /> */}

      <div className="p-4">
        {/* TODO: Add product title */}
        {/* HINT: <h3 className="text-lg font-semibold text-gray-800 truncate">{product.title}</h3> */}

        {/* TODO: Add category badge */}
        {/* HINT: <span className="text-sm text-gray-500">{product.category.name}</span> */}

        {/* TODO: Add price */}
        {/* HINT: <p className="text-xl font-bold text-emerald-600 mt-2">{formattedPrice}</p> */}

        {/* TODO: Add action buttons */}
        <div className="flex gap-2 mt-4">
          {/* View Details Button */}
          {/* HINT: 
            <button 
              onClick={() => onViewDetails?.(product.id)}
              className="flex-1 bg-slate-100 text-slate-700 py-2 px-4 rounded-md hover:bg-slate-200"
            >
              View Details
            </button>
          */}

          {/* Add to Cart Button */}
          {/* HINT:
            <button 
              onClick={() => onAddToCart?.(product)}
              className="flex-1 bg-emerald-500 text-white py-2 px-4 rounded-md hover:bg-emerald-600"
            >
              Add to Cart
            </button>
          */}
        </div>
      </div>
    </div>
    // ⬆️ YOUR CODE HERE ⬆️
  );
}

// =============================================================================
// REFERENCE SOLUTION (For instructor use - remove before giving to students)
// =============================================================================

/*
COMPLETE SOLUTION:

export function ProductCard({ product, onViewDetails, onAddToCart }) {
  const imageUrl = product.images?.[0] || "https://via.placeholder.com/300";
  const formattedPrice = `$${product.price.toFixed(2)}`;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <img 
        src={imageUrl} 
        alt={product.title} 
        className="w-full h-48 object-cover"
      />
      
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 truncate">
          {product.title}
        </h3>
        
        <span className="inline-block bg-slate-100 text-slate-600 text-xs px-2 py-1 rounded mt-1">
          {product.category.name}
        </span>
        
        <p className="text-xl font-bold text-emerald-600 mt-2">
          {formattedPrice}
        </p>
        
        <div className="flex gap-2 mt-4">
          <button 
            onClick={() => onViewDetails?.(product.id)}
            className="flex-1 bg-slate-100 text-slate-700 py-2 px-4 rounded-md hover:bg-slate-200 transition-colors"
          >
            View Details
          </button>
          
          <button 
            onClick={() => onAddToCart?.(product)}
            className="flex-1 bg-emerald-500 text-white py-2 px-4 rounded-md hover:bg-emerald-600 transition-colors"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
*/

export default ProductCard;
