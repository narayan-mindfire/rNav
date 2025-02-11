import { NativeStackScreenProps } from "@react-navigation/native-stack";
export type RootStackParamList = {
  Home: undefined;
  Explore: { message: String; times: number };
};

export type HomeScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "Home"
>;
export type ExploreScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "Explore"
>;
