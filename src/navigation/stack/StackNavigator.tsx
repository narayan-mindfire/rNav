import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../../screens/HomePage";
import Explore from "../../screens/ExplorePage";

type RootStackParamList = {
  Home: undefined;
  Explore: { message: String; times: number };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: "center",
        headerStyle: { backgroundColor: "gray" },
        headerTitleStyle: { fontWeight: "bold", color: "#fff" },
        statusBarBackgroundColor: "gray",
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Explore" component={Explore} />
    </Stack.Navigator>
  );
}

const StackNavigator = () => {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
};

export default StackNavigator;
