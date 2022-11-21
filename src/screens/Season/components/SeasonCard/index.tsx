import React from "react";
import { SeasonModel } from "../../../../models/season";
import { ShowModel } from "../../../../models/show";
import { getYearFromString } from "../../../../utils/data";
import { Title, Subtitle } from "../../../components/Text";

import { SeasonCardContainer, GradientCover } from "./styles";

export function SeasonCard({
  show,
  season,
}: {
  show: ShowModel;
  season: SeasonModel;
}) {
  console.log(season?.image);

  return (
    <SeasonCardContainer
      source={{
        uri: season?.image?.medium || season?.image?.original || "",
      }}
    >
      <GradientCover>
        <Title>{show?.name}</Title>
        <Title>Season {season?.number}</Title>
        <Subtitle>
          {getYearFromString(show?.premiered)} | {show?.genres?.join(", ")}
        </Subtitle>
      </GradientCover>
    </SeasonCardContainer>
  );
}
