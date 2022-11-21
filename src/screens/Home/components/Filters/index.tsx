import React from "react";
import { Alert } from "react-native";
import { filters } from "./filters";

import {
  FiltersContainer,
  Heading,
  FiltersWrapper,
  Filter,
  FilterIconWrapper,
  FilterIcon,
  FilterLabel,
} from "./styles";

export function Filters() {
  function handleFilterPress() {
    Alert.alert("Feature not implemented yet");
  }

  return (
    <FiltersContainer>
      <Heading>Filters</Heading>

      <FiltersWrapper>
        {filters.map((filter) => (
          <Filter key={filter.id} onPress={handleFilterPress}>
            <FilterIconWrapper>
              <FilterIcon name={filter.icon} />
            </FilterIconWrapper>
            <FilterLabel>{filter.label}</FilterLabel>
          </Filter>
        ))}
      </FiltersWrapper>
    </FiltersContainer>
  );
}
