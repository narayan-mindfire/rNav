import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import { StyleSheet, View } from "react-native";
import TabNavigator from "./TabNavigator";
import SettingPage from "../screens/SettingPage";
import { Linking } from "react-native";
import { useContext } from "react";
import AuthContext from "../context/authContext";

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props: DrawerContentComponentProps) {
  const auth = useContext(AuthContext);
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
            onPress={() => auth?.signOut()}
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
        drawerActiveBackgroundColor: "#8E6CEF",
        drawerInactiveBackgroundColor: "#fff",
        drawerInactiveTintColor: "#8E6CEF",
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
