import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Octicons } from "@expo/vector-icons";

import { Generic } from "../../modules/Generic";

import { AppTabsNavigation } from "./routes";
import { useTheme } from "styled-components";
import { View } from "react-native";
import { HomeStackRoutes } from "./stacks/Home/home.routes";

const { Navigator, Screen } = createBottomTabNavigator<AppTabsNavigation>();

export function AppTabsRoutes() {
  const theme = useTheme();

  return (
    <Navigator
      initialRouteName="HomeStackRoutes"
      // screenOptions={{
      //   headerShown: false,
      //   tabBarShowLabel: false,
      //   tabBarStyle: {
      //     position: "absolute",
      //     elevation: 0,
      //     backgroundColor: theme.colors.background_secondary,
      //     height: 70,
      //     marginHorizontal: 32,
      //     marginBottom: 24,
      //     borderRadius: 16,
      //     paddingBottom: 0,
      //     shadowColor: "#000",
      //     shadowOpacity: 0.5,
      //     shadowRadius: 10,
      //     shadowOffset: {
      //       width: 1,
      //       height: 1,
      //     },
      //   },
      //   tabBarInactiveTintColor: theme.colors.gray,
      //   tabBarActiveTintColor: theme.colors.primary,
      // }}
    >
      <Screen
        name="Profile"
        component={Generic}
        options={() => ({
          tabBarIcon: ({ color, size }) => (
            <Octicons name="person" color={color} size={size} />
          ),
        })}
      />
      <Screen
        name="HomeStackRoutes"
        component={HomeStackRoutes}
        options={() => ({
          tabBarIcon: ({ size }) => (
            <View
              style={{
                backgroundColor: theme.colors.primary,
                position: "relative",
                padding: 16,
                paddingHorizontal: 18,
                borderRadius: 50,
                top: -15,
              }}
            >
              <Octicons
                name="home"
                color={theme.colors.background_secondary}
                size={size}
              />
            </View>
          ),
        })}
      />
      <Screen
        name="Configs"
        component={Generic}
        options={() => ({
          tabBarIcon: ({ color, size }) => (
            <Octicons name="gear" color={color} size={size} />
          ),
        })}
      />
    </Navigator>
  );
}
