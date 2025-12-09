/**
 * =============================================================================
 * EXERCISE 6: React Router Configuration
 * =============================================================================
 *
 * LEARNING OBJECTIVES:
 * - Understand React Router route configuration
 * - Learn different route types (index, dynamic, nested)
 * - Master file-based routing conventions
 *
 * CONCEPTS COVERED:
 * - Route Configuration
 * - Index Routes
 * - Dynamic Routes (with parameters)
 * - Route Nesting
 *
 * =============================================================================
 */

import { index, route } from "@react-router/dev/routes";

/**
 * TODO 6.1: Configure application routes
 *
 * REACT ROUTER BASICS:
 * React Router allows you to define navigation between different views.
 *
 * ROUTE TYPES:
 * - index(): The default route for a path (like "/" or "/products")
 * - route(path, file): A route with a specific path
 * - Dynamic routes: Use $param in path for URL parameters (e.g., "product.$id.jsx")
 *
 * ROUTE FILE NAMING CONVENTIONS:
 * - index route: home.jsx or _index.jsx
 * - static route: products.jsx → /products
 * - dynamic route: product.$id.jsx → /product/:id
 * - nested route: products._index.jsx, products.$id.jsx
 *
 * TODO: Add the following routes:
 * 1. "/" - Home page (index route)
 * 2. "/products" - Products listing page
 * 3. "/product/:id" - Single product detail page
 * 4. "/login" - Login page
 * 5. "/products/new" - Create new product page
 */

export default [
  index("routes/home.jsx"),
  route("products", "routes/products.jsx"),
  route("product/:id", "routes/product.$id.jsx"),
  route("login", "routes/login.jsx"),
  route("products/new", "routes/product-new.jsx"),
];
