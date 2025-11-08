import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
} from "react";

interface AuthContextType {
  isAuthenticated: boolean;
  user: string | null;
  login: (username: string) => void;
  logout: () => void;
}

// Create the context with an undefined initial value
const AuthContext = createContext<AuthContextType | undefined>(undefined);

/**
 * Provides authentication state (isAuthenticated, user) and functions (login, logout)
 * to its children. Persists login state to localStorage.
 */
export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    // Check localStorage for persisted login state on initial load
    return localStorage.getItem("isAuthenticated") === "true";
  });
  const [user, setUser] = useState<string | null>(() => {
    return localStorage.getItem("user") || null;
  });

  // Update localStorage whenever auth state changes
  useEffect(() => {
    localStorage.setItem("isAuthenticated", String(isAuthenticated));
    if (user) {
      localStorage.setItem("user", user);
    } else {
      localStorage.removeItem("user");
    }
  }, [isAuthenticated, user]);

  const login = (username: string) => {
    setIsAuthenticated(true);
    setUser(username);
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

/**
 * Custom hook to easily access the AuthContext.
 * Throws an error if used outside of an AuthProvider.
 */
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};