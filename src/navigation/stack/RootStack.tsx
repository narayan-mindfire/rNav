import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../types/NavigationTypes";
const Stack = createNativeStackNavigator<RootStackParamList>();
import Welcome from "../../screens/Welcome";
import TabNavigator from "../TabNavigator";
import ProfilePage from "../../screens/ProfilePage";
const RootStack: React.FC<RootStackParamList> = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        statusBarBackgroundColor: "gray",
      }}
    >
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Tab" component={TabNavigator} />
      <Stack.Screen name="Profile" component={ProfilePage} />
    </Stack.Navigator>
  );
};

export default RootStack;
