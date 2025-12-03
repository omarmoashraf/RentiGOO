import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

// ------------------- CUSTOM HOOK -------------------
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

// ------------------- PROVIDER -------------------
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);      // Stores user object
  const [token, setToken] = useState(null);    // Stores JWT
  const [loading, setLoading] = useState(true);

  // Load saved login on app start
  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    const savedToken = localStorage.getItem("token");

    if (savedUser && savedToken) {
      setUser(JSON.parse(savedUser));
      setToken(savedToken);
    }

    setLoading(false);
  }, []);

  // ------------------- LOGIN -------------------
  const login = (token, userData) => {
    setUser(userData);
    setToken(token);

    localStorage.setItem("user", JSON.stringify(userData));
    localStorage.setItem("token", token);
  };

  // ------------------- LOGOUT -------------------
  const logout = () => {
    setUser(null);
    setToken(null);

    localStorage.removeItem("user");
    localStorage.removeItem("token");
  };

  // ------------------- CHECK ADMIN -------------------
  const isAdmin = () => user?.role === "admin";

  // ------------------- CHECK AUTH -------------------
  const isAuthenticated = !!token;

  const value = {
    user,
    token,
    login,
    logout,
    loading,
    isAdmin,
    isAuthenticated,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
