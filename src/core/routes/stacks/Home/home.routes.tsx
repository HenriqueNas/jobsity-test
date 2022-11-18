import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeStackNavigation } from "./routes";
import { Home } from "../../../../modules/Home";
import { Show } from "../../../../modules/Show";

const { Navigator, Screen } = createNativeStackNavigator<HomeStackNavigation>();

export function HomeStackRoutes() {
  return (
    <Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="Home" component={Home} />
      <Screen name="Show" component={Show} />
    </Navigator>
  );
}
