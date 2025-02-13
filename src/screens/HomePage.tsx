import React, { FC, useEffect, useState } from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { HomeScreenProps } from "../types/NavigationTypes";
const HomePage: FC<HomeScreenProps> = ({ navigation }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          onPress={() => setCount((count: number) => count + 1)}
          style={styles.btn}
        >
          <Text style={styles.btntxt}>Update count</Text>
        </TouchableOpacity>
      ),
      headerLeft: () => (
        <TouchableOpacity onPress={() => setCount(0)} style={styles.btn}>
          <Text style={styles.btntxt}>reset count</Text>
        </TouchableOpacity>
      ),
    });
  }, [navigation]);
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
        <Text style={styles.btntxt}>explore</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => {
          navigation.getParent()?.navigate("work", { screen: "doing" });
        }}
      >
        <Text style={styles.btntxt}>doing Page</Text>
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
    marginTop: 20,
  },
  btntxt: {
    color: "#fff",
    fontWeight: "bold",
  },
});
export default HomePage;
