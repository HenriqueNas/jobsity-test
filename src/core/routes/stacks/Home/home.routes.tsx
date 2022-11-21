import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";

import { HomeStackNavigation } from "./routes";
import { Home } from "../../../../screens/Home";
import { Show } from "../../../../screens/Show";
import { Season } from "../../../../screens/Season";

const { Navigator, Screen } = createStackNavigator<HomeStackNavigation>();

export function HomeStackRoutes() {
  const screenOptions = {
    ...TransitionPresets.SlideFromRightIOS,
  };

  return (
    <Navigator
      initialRouteName="Home"
      defaultScreenOptions={screenOptions}
      screenOptions={{
        headerShown: false,
        gestureDirection: "horizontal",
      }}
    >
      <Screen name="Home" component={Home} />
      <Screen name="Show" component={Show} />
      <Screen name="Season" component={Season} />
    </Navigator>
  );
}
