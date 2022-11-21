import React from "react";
import { Text, View } from "react-native";

import { useAuth } from "../../contexts/auth";
import { useAppNavigation } from "../../services/navigation";

export function Profile() {
  const { signOut } = useAuth();
  const { navigate } = useAppNavigation();

  function handleSignOut() {
    signOut();
    navigate("Onboarding");
  }

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text onPress={handleSignOut}>logout</Text>
    </View>
  );
}
