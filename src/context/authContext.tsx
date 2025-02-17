import React, { createContext, FC, ReactNode, useState } from "react";

interface AuthContextType {
  user: { name: string } | null;
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
  const [user, setUser] = useState<{ name: string } | null>(null);
  const signIn = () => {
    console.log("signing in");
    setUser({ name: "narayan" });
  };
  const signOut = () => {
    console.log("signing out");
    setUser(null);
  };
  return (
    <AuthContext.Provider value={{ signIn, signOut, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
