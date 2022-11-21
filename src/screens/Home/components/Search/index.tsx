import React from "react";
import { ShowModel } from "../../../../models/show";
import { searchShowByTherm } from "../../../../services/api/shows";
import { debounce } from "../../../../utils/search";

import { SearchContainer, SearchIcon, SearchInput } from "./styles";

interface SearchProps {
  setSearchShow: (shows: ShowModel[]) => void;
}

export function Search({ setSearchShow }: SearchProps) {
  async function searchTherm(therm: string) {
    if (therm == "") {
      setSearchShow([]);
      return;
    }

    const result = await searchShowByTherm(therm);
    setSearchShow(result);
  }

  const debounceSearchTherm = debounce<typeof searchTherm>(searchTherm, 200);

  return (
    <SearchContainer>
      <SearchIcon />
      <SearchInput
        placeholder="search by keywords..."
        onChangeText={debounceSearchTherm}
      />
    </SearchContainer>
  );
}
