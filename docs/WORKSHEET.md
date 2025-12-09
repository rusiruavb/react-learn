# React Workshop: Building a Product Management App

Welcome to this hands-on React workshop! In this course, you'll learn React by building a complete product management application. By the end, you'll have practical experience with all major React concepts.

## Table of Contents

1. [Getting Started](#getting-started)
2. [Project Overview](#project-overview)
3. [Module 1: React Fundamentals](#module-1-react-fundamentals)
4. [Module 2: React Hooks Deep Dive](#module-2-react-hooks-deep-dive)
5. [Module 3: React Router](#module-3-react-router)
6. [Module 4: State Management with Context](#module-4-state-management-with-context)
7. [Module 5: Data Fetching & Integration](#module-5-data-fetching--integration)
8. [Challenge Exercises](#challenge-exercises)
9. [Resources](#resources)

---

## Getting Started

### Prerequisites

- Node.js 18+ installed
- Basic JavaScript knowledge
- A code editor (VS Code recommended)

### Setup

```bash
# Install dependencies
npm install

# Start the development server
npm run dev
```

The app will be available at `http://localhost:5173`

### API Information

This workshop uses the **Platzi Fake Store API**:
- Base URL: `https://api.escuelajs.co/api/v1`
- Documentation: https://fakeapi.platzi.com/en/about/introduction/

**Test Credentials for Authentication:**
- Email: `john@mail.com`
- Password: `changeme`

---

## Project Overview

### File Structure

```
app/
├── components/           # Reusable UI components
│   ├── product-card.tsx  # Exercise 1: Components, JSX, Props
│   ├── product-list.tsx  # Exercise 2: State, mapping arrays
│   ├── product-form.tsx  # Exercise 3: Forms, useState
│   ├── search-bar.tsx    # Exercise 4: useMemo, useCallback
│   └── navbar.tsx        # Exercise 12: Context consumption
├── context/
│   ├── auth-context.tsx  # Exercise 9: Authentication Context
│   └── product-context.tsx # Exercise 10: Product Context
├── hooks/
│   └── use-products.ts   # Exercise 5: Custom hooks, useEffect
├── routes/
│   ├── home.tsx          # Landing page
│   ├── products.tsx      # Exercise 7: Product listing route
│   ├── product.$id.tsx   # Exercise 8: Dynamic routes
│   ├── product-new.tsx   # Create product page
│   └── login.tsx         # Exercise 11: Login page
├── services/
│   └── api.ts            # API service (provided complete)
├── types/
│   └── index.ts          # TypeScript types (provided complete)
└── routes.ts             # Exercise 6: Route configuration
```

### How to Use This Worksheet

1. **Read the concept explanation** for each exercise
2. **Open the corresponding file** in your code editor
3. **Look for TODO comments** - they guide you through the implementation
4. **Fill in the code** where indicated by `// ⬇️ YOUR CODE HERE ⬇️`
5. **Check the reference solution** at the bottom of each file if stuck

---

## Module 1: React Fundamentals

### Learning Objectives
- Understand React components and JSX
- Master props for passing data between components
- Learn state management with useState
- Practice controlled form inputs

---

### Exercise 1: ProductCard Component

**File:** `app/components/product-card.tsx`

**Concepts:** Components, JSX, Props, TypeScript Interfaces

#### What You'll Learn

**Components** are the building blocks of React applications. They're reusable pieces of UI that can accept inputs (props) and return JSX.

**JSX** (JavaScript XML) is a syntax extension that looks like HTML but lets you embed JavaScript expressions using curly braces `{}`.

**Props** (properties) are how components receive data from their parent. Props are read-only - a component should never modify its own props.

#### Key Concepts

```tsx
// Defining props with TypeScript
interface ProductCardProps {
  product: Product;
  onViewDetails?: (id: number) => void;
}

// Using props in a component
function ProductCard({ product, onViewDetails }: ProductCardProps) {
  return (
    <div>
      {/* JSX expressions use curly braces */}
      <h3>{product.title}</h3>
      <p>${product.price.toFixed(2)}</p>
      
      {/* Event handlers */}
      <button onClick={() => onViewDetails?.(product.id)}>
        View Details
      </button>
    </div>
  );
}
```

#### Tasks

1. Define the `ProductCardProps` interface with product and callback props
2. Destructure props in the component function
3. Display product image, title, category, and price
4. Add View Details and Add to Cart buttons with click handlers

---

### Exercise 2: ProductList Component

**File:** `app/components/product-list.tsx`

**Concepts:** useState, Rendering Lists, The Key Prop, Conditional Rendering

#### What You'll Learn

**useState** is a React Hook that lets you add state to functional components. State is data that changes over time and triggers re-renders.

**Rendering Lists** in React uses JavaScript's `map()` function to transform arrays of data into arrays of elements.

**The Key Prop** helps React identify which items have changed, been added, or removed. Always use a unique identifier (like `id`) as the key.

#### Key Concepts

```tsx
// Using useState
const [selectedId, setSelectedId] = useState<number | null>(null);

// Rendering lists with map
{products.map((product) => (
  <ProductCard 
    key={product.id}  // IMPORTANT: Always provide a unique key!
    product={product}
  />
))}

// Conditional rendering
{isLoading ? (
  <LoadingSpinner />
) : error ? (
  <ErrorMessage error={error} />
) : (
  <ProductGrid products={products} />
)}
```

#### Tasks

1. Handle loading state with skeleton UI
2. Handle error state with error message
3. Handle empty state when no products
4. Map over products array and render ProductCard components
5. (Bonus) Implement selection state with useState

---

### Exercise 3: ProductForm Component

**File:** `app/components/product-form.tsx`

**Concepts:** Controlled Components, Form Events, Form Validation

#### What You'll Learn

**Controlled Components** are form inputs where React controls the value. The input's value is stored in state and updated via onChange.

**Form Events** like `onChange` and `onSubmit` let you handle user interactions with forms.

#### Key Concepts

```tsx
// Controlled input
const [title, setTitle] = useState("");

<input
  type="text"
  value={title}  // Value comes from state
  onChange={(e) => setTitle(e.target.value)}  // Updates state
/>

// Form submission
const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();  // IMPORTANT: Prevent page reload!
  
  // Validate and submit
  if (validateForm()) {
    onSubmit({ title, price, description });
  }
};

<form onSubmit={handleSubmit}>
  {/* form fields */}
  <button type="submit">Save</button>
</form>
```

#### Tasks

1. Create state for each form field (title, price, description, categoryId, imageUrl)
2. Create state for validation errors
3. Implement validation function
4. Implement submit handler with `e.preventDefault()`
5. Create controlled inputs for each field
6. Display validation errors

---

## Module 2: React Hooks Deep Dive

### Learning Objectives
- Master the useEffect hook for side effects
- Understand useMemo for memoizing values
- Learn useCallback for memoizing functions
- Create custom hooks for reusable logic

---

### Exercise 4: SearchBar with useMemo and useCallback

**File:** `app/components/search-bar.tsx`

**Concepts:** useMemo, useCallback, Performance Optimization

#### What You'll Learn

**useMemo** memoizes a computed value. It only recomputes when dependencies change, avoiding expensive calculations on every render.

**useCallback** memoizes a function. The function is only recreated when dependencies change, useful when passing callbacks to child components.

#### When to Use

- **useMemo**: For expensive calculations (filtering/sorting large arrays, complex computations)
- **useCallback**: When passing functions as props to optimized child components

#### Key Concepts

```tsx
// useMemo - memoize computed values
const filteredProducts = useMemo(() => {
  return products.filter((p) => 
    p.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
}, [products, searchTerm]);  // Only recompute when these change

// useCallback - memoize functions
const handleSearch = useCallback((value: string) => {
  setSearchTerm(value);
}, []);  // Empty deps = function never changes
```

#### Tasks

1. Create state for search term and category filter
2. Use useMemo to filter products based on search/category
3. Use useCallback for input change handlers
4. Calculate and display statistics using useMemo

---

### Exercise 5: useProducts Custom Hook

**File:** `app/hooks/use-products.ts`

**Concepts:** useEffect, Custom Hooks, Data Fetching

#### What You'll Learn

**useEffect** lets you perform side effects in components. Side effects include data fetching, subscriptions, and DOM manipulation.

**Custom Hooks** are functions that use React hooks and start with "use". They let you extract and reuse stateful logic.

#### useEffect Dependency Array

```tsx
// Runs after EVERY render
useEffect(() => { /* ... */ });

// Runs ONCE after initial render
useEffect(() => { /* ... */ }, []);

// Runs when 'id' changes
useEffect(() => { /* ... */ }, [id]);

// Cleanup function
useEffect(() => {
  const subscription = api.subscribe();
  
  return () => {
    subscription.unsubscribe();  // Cleanup!
  };
}, []);
```

#### Key Concepts

```tsx
// Custom hook pattern
function useProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchProducts = useCallback(async () => {
    try {
      setIsLoading(true);
      const data = await productApi.getAll();
      setProducts(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return { products, isLoading, error, refetch: fetchProducts };
}
```

#### Tasks

1. Create state for products, loading, and error
2. Create fetchProducts function with useCallback
3. Use useEffect to fetch on mount
4. Return all state and functions from the hook

---

## Module 3: React Router

### Learning Objectives
- Configure routes in a React application
- Implement navigation with Link and useNavigate
- Handle dynamic routes with URL parameters
- Use useParams to access route parameters

---

### Exercise 6: Route Configuration

**File:** `app/routes.ts`

**Concepts:** Route Configuration, Index Routes, Dynamic Routes

#### Key Concepts

```tsx
// Route configuration in React Router
export default [
  index("routes/home.tsx"),           // "/" - index route
  route("products", "routes/products.tsx"),  // "/products"
  route("product/:id", "routes/product.$id.tsx"), // "/product/123"
  route("login", "routes/login.tsx"),  // "/login"
] satisfies RouteConfig;
```

#### Tasks

1. Add route for products listing page
2. Add dynamic route for product details
3. Add route for login page
4. Add route for creating new products

---

### Exercise 7: Products Page

**File:** `app/routes/products.tsx`

**Concepts:** Route Components, Navigation, Component Composition

#### Key Concepts

```tsx
// Declarative navigation with Link
<Link to="/products">Products</Link>
<Link to={`/product/${id}`}>View Details</Link>

// Programmatic navigation with useNavigate
const navigate = useNavigate();

// Navigate to a path
navigate("/products");

// Navigate with state
navigate("/product/123", { state: { from: "list" } });

// Go back
navigate(-1);
```

#### Tasks

1. Use useNavigate for programmatic navigation
2. Use useProducts hook to fetch products
3. Create handler for viewing product details
4. Add Link to create new product
5. Render ProductList component

---

### Exercise 8: Product Detail Page

**File:** `app/routes/product.$id.tsx`

**Concepts:** Dynamic Routes, useParams

#### Key Concepts

```tsx
// Accessing URL parameters
const { id } = useParams();

// URL params are always strings!
const productId = Number(id);

// Fetch based on param
useEffect(() => {
  if (id) {
    fetchProduct(Number(id));
  }
}, [id]);  // Re-fetch when id changes
```

#### Tasks

1. Get product ID from URL params
2. Create state for product, loading, error
3. Fetch product when ID changes
4. Handle loading and error states
5. Display product details

---

## Module 4: State Management with Context

### Learning Objectives
- Understand the Context API
- Create and provide context
- Consume context with useContext
- Manage global state effectively

---

### Exercise 9: AuthContext

**File:** `app/context/auth-context.tsx`

**Concepts:** createContext, Context Provider, useContext

#### What is Context?

Context provides a way to pass data through the component tree without passing props manually at every level. It's ideal for:
- User authentication state
- Theme preferences
- Language settings
- Any "global" data

#### Key Concepts

```tsx
// 1. Create the context
const AuthContext = createContext<AuthContextType | null>(null);

// 2. Create the provider
function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  
  const login = async (credentials) => {
    const user = await authApi.login(credentials);
    setUser(user);
  };
  
  const logout = () => setUser(null);
  
  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// 3. Create a custom hook
function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
}
```

#### Tasks

1. Create AuthContext with createContext
2. Create state for user, tokens, loading
3. Implement login function with API call
4. Implement logout function
5. Restore session from localStorage on mount
6. Create useAuth hook

---

### Exercise 10: ProductContext

**File:** `app/context/product-context.tsx`

**Concepts:** CRUD Operations in Context, State Updates

#### When to Use Context vs Local State

| Use Context | Use Local State |
|-------------|-----------------|
| Data needed by many components | Data used by single component |
| Data that represents app state | UI state (open/closed, etc.) |
| Data that changes infrequently | Frequently changing data |

#### Tasks

1. Create ProductContext
2. Create state for products, loading, error
3. Implement fetchProducts function
4. Implement createProduct (add to state after API call)
5. Implement updateProduct (replace in state)
6. Implement deleteProduct (remove from state)
7. Create useProductContext hook

---

## Module 5: Data Fetching & Integration

### Learning Objectives
- Implement complete authentication flow
- Build forms that interact with APIs
- Handle async operations with loading/error states
- Integrate all concepts into a working application

---

### Exercise 11: Login Page

**File:** `app/routes/login.tsx`

**Concepts:** Form Handling, Context Consumption, Navigation After Action

#### Tasks

1. Get auth context with useAuth
2. Create form state (email, password, error, loading)
3. Redirect if already authenticated
4. Implement form submission with API call
5. Navigate to products page on success

---

### Exercise 12: Navbar Component

**File:** `app/components/navbar.tsx`

**Concepts:** Context Consumer, Conditional Rendering

#### Tasks

1. Get auth state from context
2. Get current location for active link styling
3. Show different UI based on auth state
4. Implement logout functionality

---

## Challenge Exercises

Once you've completed all exercises, try these challenges:

### Challenge 1: Edit Product
Create a page to edit existing products. Reuse the ProductForm component with initial values.

### Challenge 2: Product Categories
Add a categories page that lists all categories. Clicking a category shows products in that category.

### Challenge 3: Shopping Cart
Implement a shopping cart using Context. Allow adding/removing products and displaying cart total.

### Challenge 4: Pagination
Add pagination to the products list. Use the API's offset and limit parameters.

### Challenge 5: Protected Routes
Create a wrapper that redirects to login if user isn't authenticated.

---

## Resources

### React Documentation
- [React Docs](https://react.dev/)
- [React Hooks](https://react.dev/reference/react/hooks)
- [React Router](https://reactrouter.com/)

### API Documentation
- [Platzi Fake Store API](https://fakeapi.platzi.com/en/about/introduction/)

### TypeScript
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [React TypeScript Cheatsheet](https://react-typescript-cheatsheet.netlify.app/)

### Tailwind CSS
- [Tailwind Documentation](https://tailwindcss.com/docs)

---

## Quick Reference

### useState
```tsx
const [value, setValue] = useState<Type>(initialValue);
```

### useEffect
```tsx
useEffect(() => {
  // Effect code
  return () => { /* Cleanup */ };
}, [dependencies]);
```

### useMemo
```tsx
const memoizedValue = useMemo(() => computeValue(a, b), [a, b]);
```

### useCallback
```tsx
const memoizedFn = useCallback((arg) => doSomething(arg), [dep]);
```

### useContext
```tsx
const value = useContext(MyContext);
```

### useParams
```tsx
const { id } = useParams<{ id: string }>();
```

### useNavigate
```tsx
const navigate = useNavigate();
navigate("/path");
navigate(-1); // Go back
```

---

**Happy Learning!** 🚀

Remember: The best way to learn React is by building. Don't be afraid to experiment and make mistakes. Each error is a learning opportunity!

