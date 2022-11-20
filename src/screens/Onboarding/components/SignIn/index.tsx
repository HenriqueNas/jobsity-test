import React, { useEffect, useState } from "react";
import { Alert } from "react-native";
import { canUseLocalAuth, tryLocalAuth } from "../../../../services/local_auth";

import { useAuth } from "../../../../services/context/auth";
import { useAppNavigation } from "../../../../services/navigation";

import { Input } from "../Input";

import { Continue, Form, Header, Subtitle, Title } from "./styles";

export function SignIn() {
  const { navigate } = useAppNavigation();
  const { signInWithPin, signInWithLocalAuth, user, signOut } = useAuth();

  const [pin, setPin] = useState<string>(null);

  async function handleSignInWithPin() {
    if (!pin) return;

    const hasSuccessOnSignIn = await signInWithPin(pin);
    if (hasSuccessOnSignIn) {
      navigate("Tabs");
    } else {
      Alert.alert("Wrong PIN", "Please, try again");
    }
  }

  async function handleSignInWithLocalAuth() {
    try {
      const useLocalAuth = await canUseLocalAuth();

      if (useLocalAuth) {
        const localAuthResult = await tryLocalAuth();

        signInWithLocalAuth(localAuthResult.success);
        navigate("Tabs");
      }
    } catch (error) {
      return;
    }
  }

  async function signOutUser() {
    navigate("Onboarding");
    await signOut();
  }

  return (
    <>
      <Header>
        <Title>Hello {!!user && user.name}!</Title>
        <Subtitle>Nice to see you here...</Subtitle>
      </Header>

      <Form>
        <Input
          icon="key"
          secureTextEntry
          placeholder="enter your PIN"
          onChangeText={setPin}
          onEndEditing={handleSignInWithPin}
          onFocus={handleSignInWithLocalAuth}
        />
      </Form>

      <Continue onPress={signOutUser}>just logout</Continue>
    </>
  );
}
