import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Feather } from "@expo/vector-icons";

import { useTheme } from "styled-components";
import { Profile } from "../../screens/Profile";
import { AppTabsNavigation } from "./routes";
import { HomeStackRoutes } from "./stacks/Home/home.routes";

const { Navigator, Screen } = createBottomTabNavigator<AppTabsNavigation>();

export function AppTabsRoutes() {
  const theme = useTheme();

  return (
    <Navigator
      initialRouteName="HomeStackRoutes"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: theme.colors.background_primary,
          height: 90,
          borderTopWidth: 0,
        },
        tabBarInactiveTintColor: theme.colors.secondary_on_background,
        tabBarActiveTintColor: theme.colors.on_background,
      }}
    >
      <Screen
        name="HomeStackRoutes"
        component={HomeStackRoutes}
        options={() => ({
          tabBarIcon: ({ color, size }) => (
            <Feather name="home" color={color} size={size} />
          ),
        })}
      />
      <Screen
        name="Profile"
        component={Profile}
        options={() => ({
          tabBarIcon: ({ size, color }) => (
            <Feather name="user" color={color} size={size} />
          ),
        })}
      />
    </Navigator>
  );
}
