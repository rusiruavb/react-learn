/**
 * =============================================================================
 * EXERCISE 12: Navbar Component - Context Consumer
 * =============================================================================
 *
 * LEARNING OBJECTIVES:
 * - Consume context in a component
 * - Implement conditional rendering based on auth state
 * - Create a responsive navigation component
 *
 * CONCEPTS COVERED:
 * - useContext / Custom Hooks
 * - Conditional Rendering
 * - Navigation with React Router
 *
 * =============================================================================
 */

import { Link, useLocation } from "react-router";
// import { useAuth } from "../context/auth-context";

// =============================================================================
// COMPONENT IMPLEMENTATION
// =============================================================================

/**
 * TODO 12.1: Implement the Navbar component
 *
 * The navbar should:
 * 1. Display the app logo/name
 * 2. Show navigation links
 * 3. Show login button or user info based on auth state
 * 4. Highlight the active route
 */

export function Navbar() {
  // TODO 12.1a: Get auth state from context
  // HINT: const { user, isAuthenticated, logout } = useAuth();

  // ⬇️ YOUR CODE HERE ⬇️

  // ⬆️ YOUR CODE HERE ⬆️

  // TODO 12.1b: Get current location for active link styling
  // HINT: const location = useLocation();

  // ⬇️ YOUR CODE HERE ⬇️

  // ⬆️ YOUR CODE HERE ⬆️

  // TODO 12.1c: Helper function to check if link is active
  //
  // HINT:
  // const isActive = (path: string) => location.pathname === path;
  //
  // const linkClass = (path: string) =>
  //   `px-4 py-2 rounded-md transition-colors ${
  //     isActive(path)
  //       ? "bg-emerald-100 text-emerald-700"
  //       : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
  //   }`;

  // ⬇️ YOUR CODE HERE ⬇️

  // ⬆️ YOUR CODE HERE ⬆️

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand */}
          <Link to="/" className="flex items-center gap-2">
            <span className="text-2xl">🛍️</span>
            <span className="font-bold text-xl text-gray-900">ProductApp</span>
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center gap-2">
            {/* TODO 12.1d: Add navigation links */}
            {/* 
              HINT:
              <Link to="/" className={linkClass("/")}>
                Home
              </Link>
              <Link to="/products" className={linkClass("/products")}>
                Products
              </Link>
            */}

            {/* ⬇️ YOUR CODE HERE ⬇️ */}
            <Link
              to="/"
              className="px-4 py-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
            >
              Home
            </Link>
            <Link
              to="/products"
              className="px-4 py-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
            >
              Products
            </Link>
            {/* ⬆️ YOUR CODE HERE ⬆️ */}

            {/* Divider */}
            <div className="h-6 w-px bg-gray-200 mx-2" />

            {/* TODO 12.1e: Conditional auth section */}
            {/* 
              Show different content based on auth state:
              - If authenticated: user avatar, name, and logout button
              - If not authenticated: login button
              
              HINT:
              {isAuthenticated ? (
                <div className="flex items-center gap-3">
                  <img 
                    src={user?.avatar || "https://via.placeholder.com/32"} 
                    alt={user?.name}
                    className="w-8 h-8 rounded-full"
                  />
                  <span className="text-sm font-medium text-gray-700">
                    {user?.name}
                  </span>
                  <button
                    onClick={logout}
                    className="px-4 py-2 text-sm text-red-600 hover:bg-red-50 rounded-md transition-colors"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <Link 
                  to="/login"
                  className="px-4 py-2 bg-emerald-500 text-white rounded-md hover:bg-emerald-600 transition-colors"
                >
                  Sign In
                </Link>
              )}
            */}

            {/* ⬇️ YOUR CODE HERE ⬇️ */}
            <Link
              to="/login"
              className="px-4 py-2 bg-emerald-500 text-white rounded-md hover:bg-emerald-600 transition-colors"
            >
              Sign In
            </Link>
            {/* ⬆️ YOUR CODE HERE ⬆️ */}
          </div>
        </div>
      </div>
    </nav>
  );
}

// =============================================================================
// REFERENCE SOLUTION
// =============================================================================

/*
COMPLETE SOLUTION:

import { Link, useLocation } from "react-router";
import { useAuth } from "../context/auth-context";

export function Navbar() {
  const { user, isAuthenticated, logout } = useAuth();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const linkClass = (path: string) =>
    `px-4 py-2 rounded-md transition-colors ${
      isActive(path)
        ? "bg-emerald-100 text-emerald-700"
        : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
    }`;

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-2xl">🛍️</span>
            <span className="font-bold text-xl text-gray-900">ProductApp</span>
          </Link>

          <div className="flex items-center gap-2">
            <Link to="/" className={linkClass("/")}>
              Home
            </Link>
            <Link to="/products" className={linkClass("/products")}>
              Products
            </Link>

            <div className="h-6 w-px bg-gray-200 mx-2" />

            {isAuthenticated ? (
              <div className="flex items-center gap-3">
                <img 
                  src={user?.avatar || "https://via.placeholder.com/32"} 
                  alt={user?.name}
                  className="w-8 h-8 rounded-full"
                />
                <span className="text-sm font-medium text-gray-700">
                  {user?.name}
                </span>
                <button
                  onClick={logout}
                  className="px-4 py-2 text-sm text-red-600 hover:bg-red-50 rounded-md transition-colors"
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link 
                to="/login"
                className="px-4 py-2 bg-emerald-500 text-white rounded-md hover:bg-emerald-600 transition-colors"
              >
                Sign In
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
*/

export default Navbar;
