import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import { StyleSheet, View } from "react-native";
import TabNavigator from "./TabNavigator";
import ProfilePage from "../screens/ProfilePage";
import SettingPage from "../screens/SettingPage";
import { Linking } from "react-native";

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props: DrawerContentComponentProps) {
  return (
    <View style={styles.container}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{ flex: 1, gap: 10 }}
      >
        <View style={styles.grpa}>
          <DrawerItemList {...props} />
        </View>
        <View style={styles.grpb}>
          <DrawerItem
            style={{ backgroundColor: "white", borderRadius: 0 }}
            label="LogOut"
            labelStyle={{ color: "red", fontWeight: "bold" }}
            onPress={() => props.navigation.getParent()?.navigate("Welcome")}
          />
          <DrawerItem
            label="Help"
            style={{ backgroundColor: "white", borderRadius: 0 }}
            onPress={() => Linking.openURL("https://google.co.in")}
          />
        </View>
      </DrawerContentScrollView>
    </View>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 10,
    flexDirection: "column",
    justifyContent: "space-evenly",
  },
  grpa: { flexGrow: 1, gap: 5 },
  grpb: { gap: 5 },
});
