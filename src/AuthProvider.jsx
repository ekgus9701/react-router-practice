import React, { createContext, useCallback, useState } from "react";

const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const clientLogin = (user) => {
    if (user.token) {
      setUser(user);
      sessionStorage("user", JSON.stringify(user));
    }
  };
  return (
    <AuthContext.provider value={{ user, clientLogin }}>
      {childern}
    </AuthContext.provider>
  );
}
