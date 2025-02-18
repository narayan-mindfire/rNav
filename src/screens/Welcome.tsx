import {
  Alert,
  BackHandler,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  StatusBar,
} from "react-native";
import React, { useCallback, useContext, useEffect } from "react";
import { WelcomeScreenProps } from "../types/NavigationTypes";
import { AuthContext } from "../context/authContext";
import { useFocusEffect, useTheme } from "@react-navigation/native";
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
  const { dark, colors } = useTheme();

  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={colors.background}
        barStyle={dark ? "light-content" : "dark-content"}
      />
      <Text style={[styles.header, { color: colors.text }]}>Sign in</Text>
      <View style={styles.inpBox}>
        <TextInput
          style={[styles.inp, { backgroundColor: colors.card }]}
          placeholder="Email Address"
          placeholderTextColor={colors.text}
        />
        <TouchableOpacity
          style={[
            styles.btn,
            styles.btncnt,
            { backgroundColor: colors.primary },
          ]}
          onPress={() => auth?.signIn()}
        >
          <Text style={styles.btntxtcnt}>Continue</Text>
        </TouchableOpacity>
        <Text style={{ fontSize: 12, color: colors.text }}>
          Don't have an account ?{" "}
          <Text style={{ fontWeight: "700" }}>Create one</Text>
        </Text>
      </View>
      <View style={styles.inpBox}>
        <TouchableOpacity
          style={[styles.btn, styles.btnopt, { backgroundColor: colors.card }]}
        >
          <View>
            <Image
              style={styles.logo}
              source={require("../assets/images/Group.png")}
              resizeMode="contain"
              tintColor={colors.text}
            />
          </View>
          <View style={{ flex: 1, alignItems: "center" }}>
            <Text style={[styles.btntxtoth, { color: colors.text }]}>
              Continue With Apple
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.btn,
            styles.btnopt,
            ,
            { backgroundColor: colors.card },
          ]}
        >
          <Image
            style={styles.logo}
            source={require("../assets/images/Google.png")}
            resizeMode="contain"
          />
          <View style={{ flex: 1, alignItems: "center" }}>
            <Text style={[styles.btntxtoth, { color: colors.text }]}>
              Continue with Google
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.btn, styles.btnopt, { backgroundColor: colors.card }]}
        >
          <Image
            style={styles.logo}
            source={require("../assets/images/Facebook.png")}
            resizeMode="contain"
          />
          <View style={{ flex: 1, alignItems: "center" }}>
            <Text style={[styles.btntxtoth, { color: colors.text }]}>
              Continue with Facebook
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "#FFFFFF",
    display: "flex",
    width: "100%",
    padding: 20,
    paddingTop: 50,
    marginHorizontal: "auto",
    height: "100%",
  },
  header: {
    marginTop: 80,
    fontSize: 32,
    fontWeight: 700,
    fontFamily: "Circular Std",
    lineHeight: 34.5,
  },
  inpBox: {
    marginTop: 20,
    width: "100%",
    height: 201,
    marginHorizontal: "auto",
    flexDirection: "column",
  },
  inp: {
    height: 56,
    width: "100%",
    borderRadius: 7,
    padding: 20,
  },
  btn: {
    height: 49,
    flexDirection: "row",
    borderRadius: 20,
    alignItems: "center",
    paddingHorizontal: 25,
  },
  btncnt: {
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  btnopt: {
    justifyContent: "space-evenly",
    alignItems: "center",
    marginVertical: 5,
  },
  btntxtcnt: {
    color: "#FFFFFF",
    fontWeight: "500",
    fontSize: 16,
  },
  btntxtoth: {
    fontWeight: "500",
    fontSize: 16,
  },
  logo: {
    height: 20,
    width: 24.59,
  },
});
