import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Onboarding } from "../../screens/Onboarding";
import { AppStackParams } from "./routes";
import { AppTabsRoutes } from "./tabs.routes";

const { Navigator, Screen } = createNativeStackNavigator<AppStackParams>();

export function AppStackRoutes() {
  return (
    <Navigator
      initialRouteName="Onboarding"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="Onboarding" component={Onboarding} />
      <Screen
        name="Tabs"
        component={AppTabsRoutes}
        options={{
          gestureEnabled: false,
        }}
      />
    </Navigator>
  );
}
