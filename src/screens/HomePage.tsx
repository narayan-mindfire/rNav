import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { HomeScreenProps } from "../navigation/stack/NavigationTypes";
const HomePage = ({ navigation }: HomeScreenProps) => {
  return (
    <View style={{ justifyContent: "center", flex: 1, alignItems: "center" }}>
      <Text>HomePage</Text>
      <TouchableOpacity
        style={styles.btn}
        onPress={() =>
          navigation.navigate("Explore", {
            message: "hello this is a message I'm passing via props",
            times: 1,
          })
        }
      >
        <Text style={{ color: "#fff" }}>explore</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  btn: {
    height: 40,
    width: 100,
    borderRadius: 20,
    backgroundColor: "gray",
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
  },
});
export default HomePage;
