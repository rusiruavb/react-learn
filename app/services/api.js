import apiClient from "./api-client";

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
    const response = await apiClient.get("/products", { params: filters });
    return response.data;
  },

  /**
   * Fetch a single product by ID
   * GET /api/v1/products/:id
   */
  getById: async (id) => {
    const response = await apiClient.get(`/products/${id}`);
    return response.data;
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
    const response = await apiClient.post("/products", data);
    return response.data;
  },

  /**
   * Update an existing product
   * PUT /api/v1/products/:id
   */
  update: async (id, data) => {
    const response = await apiClient.put(`/products/${id}`, data);
    return response.data;
  },

  /**
   * Delete a product
   * DELETE /api/v1/products/:id
   */
  delete: async (id) => {
    const response = await apiClient.delete(`/products/${id}`);
    return response.data;
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
    const response = await apiClient.get("/categories");
    return response.data;
  },

  /**
   * Fetch a single category by ID
   * GET /api/v1/categories/:id
   */
  getById: async (id) => {
    const response = await apiClient.get(`/categories/${id}`);
    return response.data;
  },

  /**
   * Get products by category
   * GET /api/v1/categories/:id/products
   */
  getProducts: async (categoryId) => {
    const response = await apiClient.get(`/categories/${categoryId}/products`);
    return response.data;
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
    const response = await apiClient.post("/auth/login", credentials);
    return response.data;
  },

  /**
   * Get user profile with access token
   * GET /api/v1/auth/profile
   */
  getProfile: async (accessToken) => {
    const config = accessToken
      ? { headers: { Authorization: `Bearer ${accessToken}` } }
      : {};
    const response = await apiClient.get("/auth/profile", config);
    return response.data;
  },

  /**
   * Refresh access token
   * POST /api/v1/auth/refresh-token
   */
  refreshToken: async (refreshToken) => {
    const response = await apiClient.post("/auth/refresh-token", {
      refreshToken,
    });
    return response.data;
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
    const response = await apiClient.get("/users");
    return response.data;
  },

  /**
   * Fetch a single user by ID
   * GET /api/v1/users/:id
   */
  getById: async (id) => {
    const response = await apiClient.get(`/users/${id}`);
    return response.data;
  },
};
