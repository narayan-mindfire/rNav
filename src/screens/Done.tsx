import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Done = () => {
  return (
    <View style={styles.container}>
      <Text>Done page</Text>
    </View>
  );
};

export default Done;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
  placebox: {
    height: 100,
    width: 100,
    backgroundColor: "red",
  },
});
