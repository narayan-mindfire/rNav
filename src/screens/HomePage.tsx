import React, { FC, useState } from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { HomeScreenProps } from "../navigation/stack/NavigationTypes";
const HomePage: FC<HomeScreenProps> = ({ navigation }) => {
  const [count, setCount] = useState(0);
  navigation.setOptions({
    headerRight: () => (
      <TouchableOpacity onPress={() => setCount((count: number) => count + 1)}>
        <Text>Update count</Text>
      </TouchableOpacity>
    ),
  });
  return (
    <View style={{ justifyContent: "center", flex: 1, alignItems: "center" }}>
      <Text>HomePage</Text>
      <Text style={{ margin: 30 }}>count : {count}</Text>
      <TouchableOpacity
        style={styles.btn}
        onPress={() =>
          navigation.navigate("Explore", {
            message: "hello this is a message I'm passing via props",
            times: 1,
            headerName: "Explore",
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
