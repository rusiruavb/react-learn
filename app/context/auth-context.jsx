/**
 * =============================================================================
 * EXERCISE 9: AuthContext - Authentication State Management
 * =============================================================================
 *
 * LEARNING OBJECTIVES:
 * - Understand React Context API
 * - Learn to create and provide context
 * - Master context consumers (useContext)
 * - Practice global state management patterns
 *
 * CONCEPTS COVERED:
 * - createContext
 * - Context Provider
 * - useContext Hook
 * - Global State Management
 * - Authentication Patterns
 *
 * =============================================================================
 */

import {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
} from "react";

import { authApi } from "../services/api";

// =============================================================================
// CONTEXT CREATION
// =============================================================================

/**
 * TODO 9.1: Create the AuthContext
 *
 * WHAT IS CONTEXT?
 * Context provides a way to pass data through the component tree
 * without having to pass props manually at every level.
 *
 * It's perfect for:
 * - User authentication state
 * - Theme preferences
 * - Language/locale settings
 * - Any "global" data
 *
 * HOW CONTEXT WORKS:
 * 1. Create context with createContext()
 * 2. Wrap your app with Provider component
 * 3. Access values with useContext() hook
 *
 * HINT:
 * const AuthContext = createContext<AuthContextType | null>(null);
 *
 * We use null as default and check in the hook to ensure
 * context is used within a Provider.
 */

// ⬇️ YOUR CODE HERE ⬇️

// ⬆️ YOUR CODE HERE ⬆️

// =============================================================================
// PROVIDER COMPONENT
// =============================================================================

/**
 * TODO 9.2: Create the AuthProvider component
 *
 * The Provider component wraps parts of your app that need access
 * to the context values. It accepts a 'value' prop that becomes
 * available to all descendants.
 *
 * <AuthProvider>
 *   <App />  // Everything inside can use useAuth()
 * </AuthProvider>
 */

export function AuthProvider({ children }) {
  // TODO 9.2a: Create state for user, tokens, an`d loading
  //
  // HINT:
  // const [user, setUser] = useState(null);
  // const [tokens, setTokens] = useState(null);
  // const [isLoading, setIsLoading] = useState(true);

  // ⬇️ YOUR CODE HERE ⬇️

  // ⬆️ YOUR CODE HERE ⬆️

  // TODO 9.2b: Compute isAuthenticated from user state
  //
  // HINT: const isAuthenticated = !!user;

  // ⬇️ YOUR CODE HERE ⬇️

  // ⬆️ YOUR CODE HERE ⬆️

  // TODO 9.2c: Create login function
  //
  // This function:
  // 1. Calls the auth API with credentials
  // 2. Stores tokens (and optionally in localStorage)
  // 3. Fetches user profile
  // 4. Updates state
  //
  // HINT:
  // const login = useCallback(async (credentials: LoginCredentials) => {
  //   try {
  //     // Get tokens from API
  //     const authTokens = await authApi.login(credentials);
  //     setTokens(authTokens);
  //
  //     // Store in localStorage for persistence
  //     localStorage.setItem("auth_tokens", JSON.stringify(authTokens));
  //
  //     // Get user profile
  //     const profile = await authApi.getProfile(authTokens.access_token);
  //     setUser(profile);
  //   } catch (error) {
  //     throw error; // Re-throw so component can handle
  //   }
  // }, []);

  // ⬇️ YOUR CODE HERE ⬇️

  // ⬆️ YOUR CODE HERE ⬆️

  // TODO 9.2d: Create logout function
  //
  // HINT:
  // const logout = useCallback(() => {
  //   setUser(null);
  //   setTokens(null);
  //   localStorage.removeItem("auth_tokens");
  // }, []);

  // ⬇️ YOUR CODE HERE ⬇️

  // ⬆️ YOUR CODE HERE ⬆️

  // TODO 9.2e: Restore session on mount
  //
  // Check localStorage for existing tokens and restore session
  //
  // HINT:
  // useEffect(() => {
  //   const restoreSession = async () => {
  //     try {
  //       const storedTokens = localStorage.getItem("auth_tokens");
  //       if (storedTokens) {
  //         const authTokens: AuthTokens = JSON.parse(storedTokens);
  //         setTokens(authTokens);
  //
  //         const profile = await authApi.getProfile(authTokens.access_token);
  //         setUser(profile);
  //       }
  //     } catch (error) {
  //       // Token expired or invalid, clear storage
  //       localStorage.removeItem("auth_tokens");
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   };
  //
  //   restoreSession();
  // }, []);

  // ⬇️ YOUR CODE HERE ⬇️

  // ⬆️ YOUR CODE HERE ⬆️

  // TODO 9.2f: Create the context value object
  //
  // HINT:
  // const value: AuthContextType = {
  //   user,
  //   tokens,
  //   isAuthenticated,
  //   isLoading,
  //   login,
  //   logout,
  // };

  // ⬇️ YOUR CODE HERE ⬇️

  // ⬆️ YOUR CODE HERE ⬆️

  // TODO 9.2g: Return the Provider with value
  //
  // HINT:
  // return (
  //   <AuthContext.Provider value={value}>
  //     {children}
  //   </AuthContext.Provider>
  // );

  // ⬇️ YOUR CODE HERE ⬇️
  return <>{children}</>;
  // ⬆️ YOUR CODE HERE ⬆️
}

// =============================================================================
// CUSTOM HOOK
// =============================================================================

/**
 * TODO 9.3: Create the useAuth custom hook
 *
 * This hook makes it easy to access auth context in any component.
 * It also ensures context is used within a Provider.
 *
 * USAGE:
 * const { user, login, logout, isAuthenticated } = useAuth();
 *
 * HINT:
 * export function useAuth(): AuthContextType {
 *   const context = useContext(AuthContext);
 *
 *   if (!context) {
 *     throw new Error("useAuth must be used within an AuthProvider");
 *   }
 *
 *   return context;
 * }
 */

// ⬇️ YOUR CODE HERE ⬇️
export function useAuth() {
  // TODO: Implement the hook
  // For now, return a placeholder
  return {
    user: null,
    tokens: null,
    isAuthenticated: false,
    isLoading: false,
    login: async () => {},
    logout: () => {},
  };
}
// ⬆️ YOUR CODE HERE ⬆️

// =============================================================================
// REFERENCE SOLUTION
// =============================================================================

/*
COMPLETE SOLUTION:

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState(null);
  const [tokens, setTokens] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const isAuthenticated = !!user;

  const login = useCallback(async (credentials: LoginCredentials) => {
    const authTokens = await authApi.login(credentials);
    setTokens(authTokens);
    localStorage.setItem("auth_tokens", JSON.stringify(authTokens));
    
    const profile = await authApi.getProfile(authTokens.access_token);
    setUser(profile);
  }, []);

  const logout = useCallback(() => {
    setUser(null);
    setTokens(null);
    localStorage.removeItem("auth_tokens");
  }, []);

  useEffect(() => {
    const restoreSession = async () => {
      try {
        const storedTokens = localStorage.getItem("auth_tokens");
        if (storedTokens) {
          const authTokens: AuthTokens = JSON.parse(storedTokens);
          setTokens(authTokens);
          
          const profile = await authApi.getProfile(authTokens.access_token);
          setUser(profile);
        }
      } catch (error) {
        localStorage.removeItem("auth_tokens");
      } finally {
        setIsLoading(false);
      }
    };
    
    restoreSession();
  }, []);

  const value: AuthContextType = {
    user,
    tokens,
    isAuthenticated,
    isLoading,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth(): AuthContextType {
  const context = useContext(AuthContext);
  
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  
  return context;
}
*/

export default AuthProvider;
