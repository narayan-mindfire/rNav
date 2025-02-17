import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import { AuthContext } from "../context/authContext";

const SettingPage = () => {
  const navigation = useNavigation();
  const auth = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <Text>SettingPage</Text>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => {
          navigation.getParent()?.navigate("Profile");
        }}
      >
        <Text style={styles.btntxt}>Visit Profile</Text>
      </TouchableOpacity>
      <Text>
        The authentication status is :{" "}
        {auth?.token ? JSON.stringify(true) : JSON.stringify(false)}
      </Text>
      <TouchableOpacity style={styles.btn} onPress={() => auth?.signOut()}>
        <Text style={styles.btntxt}>Signout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SettingPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "#000",
  },
  btn: {
    height: 40,
    width: 100,
    borderRadius: 20,
    backgroundColor: "gray",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  btntxt: {
    color: "#fff",
    fontWeight: "bold",
  },
});
