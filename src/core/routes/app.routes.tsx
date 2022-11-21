import React from "react";

import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";

import { Onboarding } from "../../screens/Onboarding";
import { AppStackParams } from "./routes";
import { AppTabsRoutes } from "./tabs.routes";

const { Navigator, Screen } = createStackNavigator<AppStackParams>();

export function AppStackRoutes() {
  const screenOptions = {
    ...TransitionPresets.SlideFromRightIOS,
  };

  return (
    <Navigator
      initialRouteName="Onboarding"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen
        name="Onboarding"
        component={Onboarding}
        options={screenOptions}
      />
      <Screen
        name="Tabs"
        component={AppTabsRoutes}
        options={{
          gestureEnabled: false,
          ...screenOptions,
        }}
      />
    </Navigator>
  );
}
