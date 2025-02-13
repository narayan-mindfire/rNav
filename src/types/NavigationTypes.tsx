import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { NavigatorScreenParams } from "@react-navigation/native";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
export type StackNavigatorParamList = {
  HomePage: undefined;
  Explore: { message: string; times: number; headerName: string };
};

export type HomeScreenProps = NativeStackScreenProps<
  StackNavigatorParamList,
  "HomePage"
>;
export type ExploreScreenProps = NativeStackScreenProps<
  StackNavigatorParamList,
  "Explore"
>;

export type TabNavigationParamList = {
  Home: NavigatorScreenParams<StackNavigatorParamList>;
  Work: undefined;
  Settings: undefined;
};

export type RootStackParamList = {
  Welcome: undefined;
  Tab: NavigatorScreenParams<TabNavigationParamList>;
  Profile: undefined;
};

export type WelcomeScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "Welcome"
>;
export type SettingPageScreenProps = BottomTabScreenProps<
  TabNavigationParamList,
  "Settings"
>;
