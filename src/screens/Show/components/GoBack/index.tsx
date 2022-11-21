import React from "react";

import { useHomeStackNavigation } from "../../../../services/navigation";

import { GoBackContainer, GoBackIcon } from "./styles";

export function GoBack() {
  const { goBack } = useHomeStackNavigation();

  return (
    <GoBackContainer onPress={goBack}>
      <GoBackIcon />
    </GoBackContainer>
  );
}
