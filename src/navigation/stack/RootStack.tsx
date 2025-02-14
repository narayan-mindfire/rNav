import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../types/NavigationTypes";
const Stack = createNativeStackNavigator<RootStackParamList>();
import Welcome from "../../screens/Welcome";
import TabNavigator from "../TabNavigator";
import ProfilePage from "../../screens/ProfilePage";
import { NavigationContainer } from "@react-navigation/native";
import DrawNav from "../Drawer";
const RootStack: React.FC<RootStackParamList> = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          statusBarBackgroundColor: "gray",
        }}
      >
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Draw" component={DrawNav} />
        <Stack.Screen name="Profile" component={ProfilePage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;
