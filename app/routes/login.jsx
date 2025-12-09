/**
 * =============================================================================
 * EXERCISE 11: Login Page - Authentication Implementation
 * =============================================================================
 *
 * LEARNING OBJECTIVES:
 * - Implement a complete authentication flow
 * - Use context for authentication state
 * - Handle form submission with API calls
 * - Implement redirect after login
 *
 * CONCEPTS COVERED:
 * - Form Handling
 * - Context Consumption
 * - Navigation after Action
 * - Error Handling in Forms
 *
 * =============================================================================
 */

import { useState } from "react";
import { Link, useNavigate } from "react-router";

// import { useAuth } from "../context/auth-context";

// =============================================================================
// META FUNCTION
// =============================================================================

export function meta({}) {
  return [
    { title: "Login | Product App" },
    { name: "description", content: "Sign in to your account" },
  ];
}

// =============================================================================
// ROUTE COMPONENT
// =============================================================================

/**
 * TODO 11.1: Implement the Login page
 *
 * TEST CREDENTIALS (from Platzi Fake Store API):
 * Email: john@mail.com
 * Password: changeme
 *
 * This page demonstrates:
 * 1. Controlled form inputs
 * 2. Using auth context
 * 3. Handling async operations
 * 4. Navigation after successful login
 */

export default function Login() {
  // TODO 11.1a: Get auth context
  // HINT: const { login, isAuthenticated } = useAuth();

  // ⬇️ YOUR CODE HERE ⬇️

  // ⬆️ YOUR CODE HERE ⬆️

  // TODO 11.1b: Get navigate function
  // HINT: const navigate = useNavigate();

  // ⬇️ YOUR CODE HERE ⬇️

  // ⬆️ YOUR CODE HERE ⬆️

  // TODO 11.1c: Create state for form fields
  //
  // HINT:
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [error, setError] = useState(null);
  // const [isSubmitting, setIsSubmitting] = useState(false);

  // ⬇️ YOUR CODE HERE ⬇️

  // ⬆️ YOUR CODE HERE ⬆️

  // TODO 11.1d: Redirect if already authenticated
  //
  // HINT:
  // useEffect(() => {
  //   if (isAuthenticated) {
  //     navigate("/products");
  //   }
  // }, [isAuthenticated, navigate]);

  // ⬇️ YOUR CODE HERE ⬇️

  // ⬆️ YOUR CODE HERE ⬆️

  // TODO 11.1e: Create submit handler
  //
  // HINT:
  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   setError(null);
  //   setIsSubmitting(true);
  //
  //   try {
  //     await login({ email, password });
  //     navigate("/products");
  //   } catch (err) {
  //     setError(err instanceof Error ? err.message : "Login failed");
  //   } finally {
  //     setIsSubmitting(false);
  //   }
  // };

  // ⬇️ YOUR CODE HERE ⬇️

  // ⬆️ YOUR CODE HERE ⬆️

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-8">
        {/* Logo/Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Welcome Back</h1>
          <p className="text-gray-500 mt-2">Sign in to your account</p>
        </div>

        {/* TODO 11.1f: Add error display */}
        {/* 
          HINT:
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md mb-6">
              {error}
            </div>
          )}
        */}

        {/* ⬇️ YOUR CODE HERE ⬇️ */}

        {/* ⬆️ YOUR CODE HERE ⬆️ */}

        {/* Login Form */}
        <form className="space-y-6">
          {/* TODO 11.1g: Email Input */}
          {/* 
            HINT:
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                placeholder="you@example.com"
                required
              />
            </div>
          */}

          {/* ⬇️ YOUR CODE HERE ⬇️ */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email Address
            </label>
            {/* TODO: Add email input */}
            <input
              type="email"
              id="email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              placeholder="you@example.com"
            />
          </div>
          {/* ⬆️ YOUR CODE HERE ⬆️ */}

          {/* TODO 11.1h: Password Input */}
          {/* 
            HINT:
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                placeholder="Enter your password"
                required
              />
            </div>
          */}

          {/* ⬇️ YOUR CODE HERE ⬇️ */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Password
            </label>
            {/* TODO: Add password input */}
            <input
              type="password"
              id="password"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              placeholder="Enter your password"
            />
          </div>
          {/* ⬆️ YOUR CODE HERE ⬆️ */}

          {/* TODO 11.1i: Submit Button */}
          {/* 
            HINT:
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-emerald-500 text-white py-3 rounded-lg font-medium hover:bg-emerald-600 
                         disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
            >
              {isSubmitting ? "Signing in..." : "Sign In"}
            </button>
          */}

          {/* ⬇️ YOUR CODE HERE ⬇️ */}
          <button
            type="submit"
            className="w-full bg-emerald-500 text-white py-3 rounded-lg font-medium hover:bg-emerald-600 transition-colors"
          >
            Sign In
          </button>
          {/* ⬆️ YOUR CODE HERE ⬆️ */}
        </form>

        {/* Test Credentials Hint */}
        <div className="mt-6 p-4 bg-gray-50 rounded-lg">
          <p className="text-sm text-gray-600 font-medium mb-2">
            Test Credentials:
          </p>
          <p className="text-xs text-gray-500">Email: john@mail.com</p>
          <p className="text-xs text-gray-500">Password: changeme</p>
        </div>

        {/* Back Link */}
        <div className="mt-6 text-center">
          <Link
            to="/"
            className="text-emerald-600 hover:text-emerald-700 text-sm"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

// =============================================================================
// REFERENCE SOLUTION
// =============================================================================

/*
COMPLETE SOLUTION:

import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router";
import { useAuth } from "../context/auth-context";

export default function Login() {
  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/products");
    }
  }, [isAuthenticated, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsSubmitting(true);
    
    try {
      await login({ email, password });
      navigate("/products");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Login failed");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Welcome Back</h1>
          <p className="text-gray-500 mt-2">Sign in to your account</p>
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md mb-6">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              placeholder="you@example.com"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              placeholder="Enter your password"
              required
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-emerald-500 text-white py-3 rounded-lg font-medium hover:bg-emerald-600 
                       disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
          >
            {isSubmitting ? "Signing in..." : "Sign In"}
          </button>
        </form>

        <div className="mt-6 p-4 bg-gray-50 rounded-lg">
          <p className="text-sm text-gray-600 font-medium mb-2">Test Credentials:</p>
          <p className="text-xs text-gray-500">Email: john@mail.com</p>
          <p className="text-xs text-gray-500">Password: changeme</p>
        </div>

        <div className="mt-6 text-center">
          <Link to="/" className="text-emerald-600 hover:text-emerald-700 text-sm">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
*/
