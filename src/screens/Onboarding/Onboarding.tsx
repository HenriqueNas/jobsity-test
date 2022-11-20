import React from "react";
import { useAuth } from "../../services/context/auth";

import { Register } from "./components/Register";
import { SignIn } from "./components/SignIn";

import { OnboardingContainer } from "./styles";

export function Onboarding() {
  const { isAuthenticated } = useAuth();

  return (
    <OnboardingContainer>
      {isAuthenticated ? <SignIn /> : <Register />}
    </OnboardingContainer>
  );
}
