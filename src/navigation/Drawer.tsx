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
import { useTheme } from "@react-navigation/native";
import { Colors } from "react-native/Libraries/NewAppScreen";

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props: DrawerContentComponentProps) {
  const auth = useContext(AuthContext);
  const { colors } = useTheme();
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
            style={{ backgroundColor: colors.card, borderRadius: 20 }}
            label="LogOut"
            labelStyle={{ color: "red", fontWeight: "bold" }}
            onPress={() => auth?.signOut()}
          />
          <DrawerItem
            label="Help"
            labelStyle={{ color: colors.text }}
            style={{ backgroundColor: colors.card, borderRadius: 20 }}
            onPress={() => Linking.openURL("https://google.co.in")}
          />
        </View>
      </DrawerContentScrollView>
    </View>
  );
}

function MyDrawer() {
  const { dark, colors } = useTheme();
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        drawerStyle: {
          backgroundColor: colors.primary,
        },
        drawerItemStyle: {
          backgroundColor: colors.card,
          borderRadius: 10,
        },
        drawerActiveTintColor: colors.primary,
        // drawerActiveBackgroundColor: "#8E6CEF",
        drawerInactiveTintColor: dark ? "#000" : "#fff",
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
