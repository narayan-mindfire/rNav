import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { ExploreScreenProps } from "../navigation/stack/NavigationTypes";
const ExplorePage = ({ navigation, route }: ExploreScreenProps) => {
  return (
    <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
      <Text>ExplorePage</Text>
      <Text style={styles.txtbd}>{route.params.message}</Text>
      <Text style={styles.txtbd}>
        current depth : {JSON.stringify(route.params.times)}
      </Text>
      <TouchableOpacity
        style={styles.btn}
        onPress={() =>
          navigation.push("Explore", {
            message:
              "this message says that you've reached explore page from another explore page in the screen stack",
            times: route.params.times + 1,
            headerName: "Explore" + JSON.stringify(route.params.times + 1),
          })
        }
      >
        <Text style={{ color: "#fff" }}>explore more</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.popToTop()}
      >
        <Text style={{ color: "#fff" }}>back to base</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ExplorePage;

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
  txtbd: {
    height: 100,
    width: 200,
    margin: 10,
  },
});
