import {
  Alert,
  BackHandler,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useCallback, useContext, useEffect } from "react";
import { WelcomeScreenProps } from "../types/NavigationTypes";
import { AuthContext } from "../context/authContext";
import { useFocusEffect } from "@react-navigation/native";
const Welcome: React.FC<WelcomeScreenProps> = ({ navigation }) => {
  const auth = useContext(AuthContext);
  useFocusEffect(
    useCallback(() => {
      const onBackPress = () => {
        Alert.alert("Exit App", "Are you sure you want to exit the app?", [
          {
            text: "Cancle",
            onPress: () => null,
          },
          {
            text: "Yes",
            onPress: () => BackHandler.exitApp(),
          },
        ]);
        return true;
      };
      const backHandler = BackHandler.addEventListener(
        "hardwareBackPress",
        onBackPress
      );
      return () => backHandler.remove();
    }, [])
  );
  return (
    <View style={styles.container}>
      <Text style={styles.headtxt}>welcome</Text>
      <TouchableOpacity style={styles.btn} onPress={() => auth?.signIn()}>
        <Text style={styles.btntxt}>lets go!</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
  },
  headtxt: {
    fontSize: 48,
    fontWeight: "bold",
    color: "#fff",
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
