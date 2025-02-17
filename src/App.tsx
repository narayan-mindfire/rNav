// import "./gesture-handler";
import React, { useState } from "react";
import RootStack from "./navigation/stack/RootStack";
import DrawNav from "./navigation/Drawer";
import { AuthProvider } from "./context/authContext";

export function App() {
  const [isAuth, setIsAuth] = useState(true);
  return (
    // <DrawNav />
    <AuthProvider>
      <RootStack Welcome={undefined} Draw={undefined} Profile={undefined} />
    </AuthProvider>
  );
}
