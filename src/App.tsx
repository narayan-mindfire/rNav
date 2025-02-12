import * as React from "react";
import RootStack from "./navigation/stack/StackNavigator";
import TabNavigator from "./navigation/stack/TabNavigator";

export function App() {
  return <TabNavigator />;
  // return <RootStack />;
}
