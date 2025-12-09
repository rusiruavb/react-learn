/**
 * =============================================================================
 * API SERVICE - REFERENCE CODE (PROVIDED COMPLETE)
 * =============================================================================
 *
 * This file contains all API calls to the Platzi Fake Store API.
 * Students can use these functions in their components and hooks.
 *
 * API Base URL: https://api.escuelajs.co/api/v1
 * Documentation: https://fakeapi.platzi.com/en/about/introduction/
 * =============================================================================
 */

// =============================================================================
// CONFIGURATION
// =============================================================================

const API_BASE_URL = "https://api.escuelajs.co/api/v1";

/**
 * Helper function to build URL with query parameters
 */
function buildUrl(endpoint, params) {
  const url = new URL(`${API_BASE_URL}${endpoint}`);

  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined && value !== null && value !== "") {
        url.searchParams.append(key, String(value));
      }
    });
  }

  return url.toString();
}

/**
 * Helper function to handle API responses
 */
async function handleResponse(response) {
  if (!response.ok) {
    const error = await response
      .json()
      .catch(() => ({ message: "An error occurred" }));
    throw new Error(error.message || `HTTP error! status: ${response.status}`);
  }
  return response.json();
}

// =============================================================================
// PRODUCT API
// =============================================================================

/**
 * Fetch all products with optional filters
 * GET /api/v1/products
 *
 * @example
 * // Get all products
 * const products = await productApi.getAll();
 *
 * // Get products with filters
 * const filtered = await productApi.getAll({ categoryId: 1, price_min: 100 });
 *
 * // Get paginated products
 * const page = await productApi.getAll({ offset: 0, limit: 10 });
 */
export const productApi = {
  getAll: async (filters) => {
    const url = buildUrl("/products", filters);
    const response = await fetch(url);
    return handleResponse(response);
  },

  /**
   * Fetch a single product by ID
   * GET /api/v1/products/:id
   */
  getById: async (id) => {
    const response = await fetch(`${API_BASE_URL}/products/${id}`);
    return handleResponse(response);
  },

  /**
   * Create a new product
   * POST /api/v1/products
   *
   * @example
   * const newProduct = await productApi.create({
   *   title: "New Product",
   *   price: 100,
   *   description: "A great product",
   *   categoryId: 1,
   *   images: ["https://example.com/image.jpg"]
   * });
   */
  create: async (data) => {
    const response = await fetch(`${API_BASE_URL}/products`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return handleResponse(response);
  },

  /**
   * Update an existing product
   * PUT /api/v1/products/:id
   */
  update: async (id, data) => {
    const response = await fetch(`${API_BASE_URL}/products/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return handleResponse(response);
  },

  /**
   * Delete a product
   * DELETE /api/v1/products/:id
   */
  delete: async (id) => {
    const response = await fetch(`${API_BASE_URL}/products/${id}`, {
      method: "DELETE",
    });
    return handleResponse(response);
  },
};

// =============================================================================
// CATEGORY API
// =============================================================================

/**
 * Category API endpoints
 */
export const categoryApi = {
  /**
   * Fetch all categories
   * GET /api/v1/categories
   */
  getAll: async () => {
    const response = await fetch(`${API_BASE_URL}/categories`);
    return handleResponse(response);
  },

  /**
   * Fetch a single category by ID
   * GET /api/v1/categories/:id
   */
  getById: async (id) => {
    const response = await fetch(`${API_BASE_URL}/categories/${id}`);
    return handleResponse(response);
  },

  /**
   * Get products by category
   * GET /api/v1/categories/:id/products
   */
  getProducts: async (categoryId) => {
    const response = await fetch(
      `${API_BASE_URL}/categories/${categoryId}/products`
    );
    return handleResponse(response);
  },
};

// =============================================================================
// AUTH API
// =============================================================================

/**
 * Authentication API endpoints
 */
export const authApi = {
  /**
   * Login with email and password
   * POST /api/v1/auth/login
   *
   * @example
   * const tokens = await authApi.login({
   *   email: "john@mail.com",
   *   password: "changeme"
   * });
   *
   * Test credentials from the API:
   * - email: "john@mail.com", password: "changeme"
   */
  login: async (credentials) => {
    const response = await fetch(`${API_BASE_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    });
    return handleResponse(response);
  },

  /**
   * Get user profile with access token
   * GET /api/v1/auth/profile
   */
  getProfile: async (accessToken) => {
    const response = await fetch(`${API_BASE_URL}/auth/profile`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return handleResponse(response);
  },

  /**
   * Refresh access token
   * POST /api/v1/auth/refresh-token
   */
  refreshToken: async (refreshToken) => {
    const response = await fetch(`${API_BASE_URL}/auth/refresh-token`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ refreshToken }),
    });
    return handleResponse(response);
  },
};

// =============================================================================
// USER API
// =============================================================================

/**
 * User API endpoints (for reference/admin purposes)
 */
export const userApi = {
  /**
   * Fetch all users
   * GET /api/v1/users
   */
  getAll: async () => {
    const response = await fetch(`${API_BASE_URL}/users`);
    return handleResponse(response);
  },

  /**
   * Fetch a single user by ID
   * GET /api/v1/users/:id
   */
  getById: async (id) => {
    const response = await fetch(`${API_BASE_URL}/users/${id}`);
    return handleResponse(response);
  },
};
