import React, { useContext } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../types/NavigationTypes";
const Stack = createNativeStackNavigator<RootStackParamList>();
import Welcome from "../../screens/Welcome";
import ProfilePage from "../../screens/ProfilePage";
import { NavigationContainer } from "@react-navigation/native";
import DrawNav from "../Drawer";
import { AuthContext } from "../../context/authContext";
import { ThemeContext } from "../../context/themeContext";

const RootStack: React.FC<RootStackParamList> = () => {
  const auth = useContext(AuthContext);
  const theme = useContext(ThemeContext);

  return (
    <NavigationContainer theme={theme?.appTheme}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        {!auth?.token ? (
          <Stack.Screen name="Welcome" component={Welcome} />
        ) : (
          <>
            <Stack.Screen name="Draw" component={DrawNav} />
            <Stack.Screen name="Profile" component={ProfilePage} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;
