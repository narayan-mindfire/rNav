import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import { View } from "react-native";
import TabNavigator from "./TabNavigator";
import ProfilePage from "../screens/ProfilePage";
import SettingPage from "../screens/SettingPage";

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props: DrawerContentComponentProps) {
  return (
    <DrawerContentScrollView
      {...props}
      contentContainerStyle={{ flex: 1, gap: 10 }}
    >
      <DrawerItemList {...props} />
      <View style={{ flex: 1 }} />
      <DrawerItem
        style={{ backgroundColor: "white", borderRadius: 0 }}
        label="LogOut"
        labelStyle={{ color: "red", fontWeight: "bold" }}
        onPress={() => props.navigation.getParent()?.navigate("Welcome")}
      />
    </DrawerContentScrollView>
  );
}

function MyDrawer() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        drawerStyle: {
          backgroundColor: "#000",
        },
        drawerItemStyle: {
          backgroundColor: "#fff",
          borderRadius: 0,
        },
        drawerActiveTintColor: "#000",
        drawerActiveBackgroundColor: "gray",
        drawerInactiveBackgroundColor: "#fff",
        drawerInactiveTintColor: "gray",
      }}
    >
      <Drawer.Screen
        name="DashBoard"
        options={{ title: "Dashboard" }}
        component={TabNavigator}
      />
      <Drawer.Screen
        name="Settings"
        options={{ title: "Settings" }}
        component={SettingPage}
      />
    </Drawer.Navigator>
  );
}

export default function DrawNav() {
  return <MyDrawer />;
}
