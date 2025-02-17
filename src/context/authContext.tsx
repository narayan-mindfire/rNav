import React, { createContext, FC, ReactNode, useState } from "react";

interface AuthContextType {
  token: string | null;
  signIn: () => void;
  signOut: () => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

interface AuthProviderProps {
  children: ReactNode;
}
export const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  const [token, setToken] = useState<string | null>(null);
  const signIn = () => {
    console.log("signing in");
    setToken("demoauthtoken");
  };
  const signOut = () => {
    console.log("signing out");
    setToken(null);
  };
  return (
    <AuthContext.Provider value={{ signIn, signOut, token }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
