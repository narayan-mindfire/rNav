import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { NavigatorScreenParams } from "@react-navigation/native";
export type RootStackParamList = {
  // HomeTabs: undefined;
  Home: undefined;
  Explore: { message: String; times: number; headerName: string };
};

export type HomeScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "Home"
>;
export type ExploreScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "Explore"
>;

export type TabNavigationParamList = {
  Stack: NavigatorScreenParams<RootStackParamList>;
  Work: undefined;
  Settings: undefined;
};
