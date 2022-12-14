import React, { useEffect } from "react";

import { ThemeProvider } from "styled-components";

import * as SplashScreen from "expo-splash-screen";

import theme from "./src/core/styles/theme";

import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";

import { Routes } from "./src/core/routes";
import { AuthProvider } from "./src//contexts/auth";
import { StatusBar } from "expo-status-bar";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });

  useEffect(() => {
    (async () => {
      if (fontsLoaded) await SplashScreen.hideAsync();
    })();
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <StatusBar translucent style="light" />
        <Routes />
      </ThemeProvider>
    </AuthProvider>
  );
}
