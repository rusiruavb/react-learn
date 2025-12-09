/**
 * =============================================================================
 * ROOT LAYOUT - Application Shell
 * =============================================================================
 *
 * This is the root component that wraps all routes.
 * It's where you set up:
 * - Global providers (Context Providers)
 * - Shared layout components (Navbar, Footer)
 * - HTML document structure
 *
 * =============================================================================
 */

import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";


import "./app.css";

// TODO: Import context providers
// import { AuthProvider } from "./context/auth-context";
// import { ProductProvider } from "./context/product-context";

// =============================================================================
// LINKS FUNCTION
// =============================================================================

export const links = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

// =============================================================================
// LAYOUT COMPONENT
// =============================================================================

/**
 * The Layout component provides the HTML document structure.
 * It's rendered on both server and client.
 */
export function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="bg-gray-50 text-gray-900 antialiased">
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

// =============================================================================
// ROOT APP COMPONENT
// =============================================================================

/**
 * TODO: Wrap the Outlet with Context Providers
 *
 * Context providers should wrap the Outlet so all routes
 * have access to the context values.
 *
 * Provider Order (outer to inner):
 * 1. AuthProvider - Authentication state
 * 2. ProductProvider - Product state
 * 3. Outlet - Routes render here
 *
 * HINT:
 * export default function App() {
 *   return (
 *     <AuthProvider>
 *       <ProductProvider>
 *         <Outlet />
 *       </ProductProvider>
 *     </AuthProvider>
 *   );
 * }
 */

export default function App() {
  // ⬇️ YOUR CODE HERE ⬇️
  // TODO: Wrap Outlet with AuthProvider and ProductProvider
  return <Outlet />;
  // ⬆️ YOUR CODE HERE ⬆️
}

// =============================================================================
// ERROR BOUNDARY
// =============================================================================

/**
 * ErrorBoundary catches errors in the route tree and displays
 * a fallback UI instead of crashing the whole app.
 */
export function ErrorBoundary({ error }) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-md p-8 max-w-md w-full text-center">
        <div className="text-6xl mb-4">{message === "404" ? "🔍" : "⚠️"}</div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">{message}</h1>
        <p className="text-gray-600 mb-6">{details}</p>
        {stack && (
          <pre className="text-left bg-gray-100 p-4 rounded-md overflow-x-auto text-xs text-gray-700 mb-6">
            <code>{stack}</code>
          </pre>
        )}
        <a
          href="/"
          className="inline-block bg-emerald-500 text-white px-6 py-3 rounded-md hover:bg-emerald-600 transition-colors"
        >
          Go Home
        </a>
      </div>
    </main>
  );
}

// =============================================================================
// REFERENCE SOLUTION
// =============================================================================

/*
COMPLETE SOLUTION:

import { AuthProvider } from "./context/auth-context";
import { ProductProvider } from "./context/product-context";

export default function App() {
  return (
    <AuthProvider>
      <ProductProvider>
        <Outlet />
      </ProductProvider>
    </AuthProvider>
  );
}
*/
