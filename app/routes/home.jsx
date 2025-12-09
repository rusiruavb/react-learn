/**
 * =============================================================================
 * Home Page - Landing Page
 * =============================================================================
 *
 * This is the landing page for the Product App.
 * It demonstrates basic component structure and navigation.
 *
 * =============================================================================
 */

import { Link } from "react-router";


// =============================================================================
// META FUNCTION
// =============================================================================

export function meta({}) {
  return [
    { title: "Product App | React Workshop" },
    {
      name: "description",
      content: "Learn React by building a real product management app",
    },
  ];
}

// =============================================================================
// ROUTE COMPONENT
// =============================================================================

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-2 mb-8">
            <span className="text-emerald-400 text-sm font-medium">
              React Workshop
            </span>
          </div>

          {/* Title */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Learn React by
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
              Building Real Apps
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-12">
            Master React fundamentals, hooks, routing, and state management by
            building a complete product management application.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/products"
              className="inline-flex items-center justify-center px-8 py-4 bg-emerald-500 text-white font-semibold rounded-lg hover:bg-emerald-600 transition-colors"
            >
              View Products
              <span className="ml-2">→</span>
            </Link>
            <Link
              to="/login"
              className="inline-flex items-center justify-center px-8 py-4 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors border border-white/20"
            >
              Sign In
            </Link>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-20">
          {/* Card 1 */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
            <div className="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">⚛️</span>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">
              React Fundamentals
            </h3>
            <p className="text-slate-400">
              Components, JSX, Props, State - Learn the building blocks of React
              applications.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
            <div className="w-12 h-12 bg-teal-500/20 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">🪝</span>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">
              React Hooks
            </h3>
            <p className="text-slate-400">
              useState, useEffect, useMemo, useCallback - Master functional
              React patterns.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
            <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">🗺️</span>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">
              React Router
            </h3>
            <p className="text-slate-400">
              Navigation, dynamic routes, URL parameters - Build multi-page
              experiences.
            </p>
          </div>
        </div>

        {/* Topics List */}
        <div className="mt-20 text-center">
          <h2 className="text-2xl font-bold text-white mb-8">
            What You'll Learn
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Components",
              "JSX",
              "Props",
              "State",
              "useState",
              "useEffect",
              "useMemo",
              "useCallback",
              "React Router",
              "Context API",
              "Data Fetching",
              "CRUD Operations",
              "Authentication",
              "TypeScript",
            ].map((topic) => (
              <span
                key={topic}
                className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-slate-300 text-sm"
              >
                {topic}
              </span>
            ))}
          </div>
        </div>

        {/* API Info */}
        <div className="mt-20 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 text-center">
          <h3 className="text-xl font-semibold text-white mb-4">
            Powered by Platzi Fake Store API
          </h3>
          <p className="text-slate-400 mb-6">
            This workshop uses a real API for products, categories, and user
            authentication.
          </p>
          <a
            href="https://fakeapi.platzi.com/en/about/introduction/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-emerald-400 hover:text-emerald-300 transition-colors"
          >
            View API Documentation
            <span className="ml-2">↗</span>
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 mt-20">
        <div className="max-w-7xl mx-auto px-4 text-center text-slate-500 text-sm">
          <p>React Workshop - Built for learning purposes</p>
        </div>
      </footer>
    </div>
  );
}
