import { TouchableOpacity } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomePage from "../../screens/HomePage";
import Explore from "../../screens/ExplorePage";
import { StackNavigatorParamList } from "../../types/NavigationTypes";
import Icon from "react-native-vector-icons/MaterialIcons";
const Stack = createNativeStackNavigator<StackNavigatorParamList>();

function StackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: "center",
        headerStyle: { backgroundColor: "#8E6CEF" },
        headerTitleStyle: { fontWeight: "bold", color: "#fff" },
        statusBarBackgroundColor: "#8E6CEF",
      }}
    >
      <Stack.Screen
        name="HomePage"
        component={HomePage}
        options={{ headerShown: false }}
      />
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

export default StackNavigator;
