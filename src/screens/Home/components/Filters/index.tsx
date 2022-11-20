import React from "react";
import { filters } from "./filters";

import {
  FiltersContainer,
  FiltersTitle,
  FiltersWrapper,
  Filter,
  FilterIconWrapper,
  FilterIcon,
  FilterLabel,
} from "./styles";

export function Filters() {
  return (
    <FiltersContainer>
      <FiltersTitle>Filters</FiltersTitle>

      <FiltersWrapper>
        {filters.map((filter) => (
          <Filter key={filter.id}>
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
