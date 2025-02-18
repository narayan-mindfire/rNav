import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Doing from "../screens/Doing";
import Done from "../screens/Done";
const Tab = createMaterialTopTabNavigator();

function WorkTopTab() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: {
          fontSize: 16,
          fontWeight: "bold",
        },
        tabBarStyle: {
          height: 100,
          backgroundColor: "#8E6CEF",
          justifyContent: "center",
        },
        tabBarActiveTintColor: "#000",
        tabBarInactiveTintColor: "#fff",
        tabBarItemStyle: {
          justifyContent: "center",
        },
        tabBarIndicatorStyle: {
          backgroundColor: "black",
          height: 10,
        },
      }}
    >
      <Tab.Screen name="Done" component={Done} />
      <Tab.Screen name="Doing" component={Doing} />
    </Tab.Navigator>
  );
}

export default WorkTopTab;
