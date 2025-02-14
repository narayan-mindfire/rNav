// import "./gesture-handler";
import * as React from "react";
import RootStack from "./navigation/stack/RootStack";
import DrawNav from "./navigation/Drawer";
export function App() {
  return (
    // <DrawNav />
    <RootStack Welcome={undefined} Draw={undefined} Profile={undefined} />
  );
}
