import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useContext } from "react";
import { ProfileScreenProps } from "../types/NavigationTypes";
import AuthContext from "../context/authContext";

const ProfilePage: React.FC<ProfileScreenProps> = ({ navigation }) => {
  const auth = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <Text>ProfilePage</Text>
      <TouchableOpacity style={styles.btn} onPress={() => auth?.signOut()}>
        <Text style={styles.btntxt}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfilePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
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
    color: "red",
    fontWeight: "bold",
  },
});
