import React, { useState } from "react";

import { useAuth } from "../../../../contexts/auth";
import { useAppNavigation } from "../../../../services/navigation";
import { Title, Subtitle } from "../../../components/Text";

import { Input } from "../Input";

import { Header, Form, SignInButton, SignInIcon, Continue } from "./styles";

export function Register() {
  const { navigate } = useAppNavigation();
  const { register } = useAuth();

  const [name, setName] = useState<string>(null);
  const [pin, setPin] = useState<string>(null);

  async function handleRegisterNewUser() {
    if (!name || !pin) return;

    await register({
      name: name,
      pin: pin,
    });

    navigate("Tabs");
  }

  function navigateToHomePage() {
    navigate("Tabs");
  }

  return (
    <>
      <Header>
        <Title>Hello visitor!</Title>
        <Subtitle>What about to use the app with a name and a PIN?</Subtitle>
      </Header>

      <Form>
        <Input
          icon="user-plus"
          placeholder="your name"
          onChangeText={setName}
        />
        <Input
          icon="key"
          secureTextEntry
          placeholder="PIN"
          onChangeText={setPin}
          onEndEditing={handleRegisterNewUser}
        />

        <SignInButton onPress={handleRegisterNewUser}>
          <SignInIcon />
        </SignInButton>
      </Form>

      <Continue onPress={navigateToHomePage}>
        continue without register
      </Continue>
    </>
  );
}
