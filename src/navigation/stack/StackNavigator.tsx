import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../../screens/HomePage";
import Explore from "../../screens/ExplorePage";
import { RootStackParamList } from "../../types/NavigationTypes";
import Icon from "react-native-vector-icons/MaterialIcons";
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
        options={({ route, navigation }) => ({
          title: route.params.headerName,
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.popToTop()}>
              <Icon name="home" size={30} color="#000" />
            </TouchableOpacity>
          ),
        })}
      />
    </Stack.Navigator>
  );
}

const StackNavigator = () => {
  return <RootStack />;
};

export default StackNavigator;
