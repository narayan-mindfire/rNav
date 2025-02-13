import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Doing = () => {
  return (
    <View style={styles.container}>
      <Text>Doing Page</Text>
    </View>
  );
};

export default Doing;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
