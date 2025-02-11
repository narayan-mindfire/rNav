import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../../screens/HomePage";
import Explore from "../../screens/ExplorePage";
import { RootStackParamList } from "./NavigationTypes";
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
      <Stack.Screen
        name="Explore"
        component={Explore}
        options={({ route }) => ({
          title: route.params.headerName,
        })}
      />
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
