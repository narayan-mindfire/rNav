import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SettingPage from "../../screens/SettingPage";
import WorkPage from "../../screens/WorkPage";
import { NavigationContainer } from "@react-navigation/native";
import RootStack from "./StackNavigator";
import { FC } from "react";
import Icon from "react-native-vector-icons/MaterialIcons";

const Tab = createBottomTabNavigator();

const TabNavigator: FC = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarLabelStyle: {
            marginTop: 10,
            fontSize: 16,
            fontFamily: "Georgia",
            fontWeight: "200",
          },
          tabBarStyle: {
            height: 80,
            backgroundColor: "gray",
            justifyContent: "center",
          },
          tabBarActiveTintColor: "#000",
          tabBarInactiveTintColor: "#fff",
        }}
      >
        <Tab.Screen
          name="Home"
          component={RootStack}
          options={{
            headerShown: false,
            tabBarBadge: 3,
            tabBarBadgeStyle: {
              backgroundColor: "#000",
              color: "#fff",
            },
            tabBarIcon: ({ focused }) => (
              <Icon name="home" size={30} color={focused ? "#000" : "#fff"} />
            ),
          }}
        />
        <Tab.Screen
          name="Work"
          component={WorkPage}
          options={{
            tabBarIcon: ({ focused }) => (
              <Icon name="work" size={30} color={focused ? "#000" : "#fff"} />
            ),
          }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingPage}
          options={{
            tabBarIcon: ({ focused }) => (
              <Icon
                name="settings"
                size={30}
                color={focused ? "#000" : "#fff"}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default TabNavigator;
