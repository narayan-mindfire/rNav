import * as React from "react";
import RootStack from "./navigation/stack/RootStack";
import { NavigationContainer } from "@react-navigation/native";
export function App() {
  return (
    <NavigationContainer>
      <RootStack />;
    </NavigationContainer>
  );
}
