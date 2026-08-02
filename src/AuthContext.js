import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export function AuthProvider({ children }) {

  const [role, setRole] = useState("");

  const login = (userRole) => {
    setRole(userRole);
  };

  const logout = () => {
    setRole("");
  };

  return (
    <AuthContext.Provider value={{ role, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}