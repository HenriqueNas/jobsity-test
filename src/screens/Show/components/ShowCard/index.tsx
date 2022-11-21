import React from "react";
import { ShowModel } from "../../../../models/show";
import { getYearFromString } from "../../../../utils/data";
import { Title, Subtitle } from "../../../components/Text";
import { StarsRating } from "../StarsRating";

import { ShowCardContainer, GradientCover } from "./styles";

export function ShowCard({ show }: { show: ShowModel }) {
  return (
    <ShowCardContainer
      source={{
        uri: show?.image?.medium || show?.image?.original || "",
      }}
    >
      <GradientCover>
        <Title>{show?.name}</Title>
        <Subtitle>
          {getYearFromString(show?.premiered)} | {show?.genres?.join(", ")}
        </Subtitle>

        <StarsRating stars={show?.rating?.average} />
      </GradientCover>
    </ShowCardContainer>
  );
}
