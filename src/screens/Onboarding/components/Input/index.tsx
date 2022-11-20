import React from "react";
import { TextInputProps } from "react-native";
import { Feather } from "@expo/vector-icons";

import { InputContainer, InputIcon, TextInput } from "./styles";

interface InputProps extends TextInputProps {
  icon?: React.ComponentProps<typeof Feather>["name"];
}

export function Input({ icon, ...rest }: InputProps) {
  return (
    <InputContainer>
      {icon && <InputIcon name={icon} />}
      <TextInput {...rest} />
    </InputContainer>
  );
}
