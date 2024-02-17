import React, { createContext, useCallback, useState } from "react";

//로그인 여부에 createContext 사용

const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const clientLogin = useCallback((user) => {
    setUser(user);
  }, []);

  const clientLogout = useCallback(() => {
    setUser(null);
  }, []);

  return (
    <AuthContext.provider
      value={{
        user: user,
        clientLogin: clientLogin,
        clientLogout: clientLogout,
      }}
    >
      {childern}
    </AuthContext.provider>
  );
}
