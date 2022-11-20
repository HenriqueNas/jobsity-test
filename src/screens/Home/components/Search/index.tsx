import React from "react";
import { SearchContainer, SearchIcon, SearchInput } from "./styles";

export function Search() {
  return (
    <SearchContainer>
      <SearchIcon />
      <SearchInput placeholder="search by keywords..." />
    </SearchContainer>
  );
}
