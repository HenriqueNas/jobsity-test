import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { AppStackParams } from "../../core/routes/routes";
import { HomeStackNavigation } from "../../core/routes/stacks/Home/routes";

export function useAppNavigation() {
  const navigation = useNavigation<NativeStackNavigationProp<AppStackParams>>();

  return navigation;
}

export function useHomeStackNavigation() {
  const navigation =
    useNavigation<NativeStackNavigationProp<HomeStackNavigation>>();

  return navigation;
}
