import React from "react";
import { SeasonModel } from "../../../../models/season";
import { ShowModel } from "../../../../models/show";
import { useHomeStackNavigation } from "../../../../services/navigation";
import { getYearFromString } from "../../../../utils/data";

import {
  SeasonsContainer,
  Heading,
  SeasonList,
  SeasonWrapper,
  CardImage,
  GradientCover,
  SeasonNumber,
  SeasonYear,
} from "./styles";

export function SeasonsCarousel({
  show,
  seasonModelList,
}: SeasonCarouselProps) {
  const { navigate } = useHomeStackNavigation();

  function navigateToSeasonScreen(season: SeasonModel) {
    navigate("Season", {
      show,
      season,
    });
  }

  return (
    <SeasonsContainer>
      {!!seasonModelList.length && <Heading>Episodes</Heading>}

      <SeasonList
        data={seasonModelList}
        keyExtractor={(season) => season?.id.toString()}
        renderItem={({ item: season }) => (
          <SeasonWrapper onPress={() => navigateToSeasonScreen(season)}>
            <CardImage
              source={{
                uri: season?.image?.medium || season?.image?.original || "",
              }}
            >
              <GradientCover>
                <SeasonNumber>Season {season?.number}</SeasonNumber>
                <SeasonYear>
                  {getYearFromString(season?.premiereDate)}
                </SeasonYear>
              </GradientCover>
            </CardImage>
          </SeasonWrapper>
        )}
      />
    </SeasonsContainer>
  );
}
