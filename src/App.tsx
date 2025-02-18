// import "./gesture-handler";
import React, { useState } from "react";
import RootStack from "./navigation/stack/RootStack";
import DrawNav from "./navigation/Drawer";
import { AuthProvider } from "./context/authContext";
import { ThemeProvider } from "./context/themeContext";
export function App() {
  return (
    // <DrawNav />
    <AuthProvider>
      <ThemeProvider>
        <RootStack Welcome={undefined} Draw={undefined} Profile={undefined} />
      </ThemeProvider>
    </AuthProvider>
    // <Home />
  );
}
