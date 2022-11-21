import React from "react";

import {
  CardImage,
  EpisodeNumber,
  EpisodesContainer,
  EpisodesList,
  EpisodeWrapper,
  GradientCover,
  Heading,
} from "./styles";

export function EpisodesCarousel({ episodesModelList }: EpisodesCarouselProps) {
  return (
    <EpisodesContainer>
      {!!episodesModelList.length && <Heading>Episodes</Heading>}

      <EpisodesList
        data={episodesModelList}
        keyExtractor={(episode) => episode?.id.toString()}
        renderItem={({ item: episode }) => (
          <EpisodeWrapper onPress={() => {}}>
            <CardImage
              source={{
                uri: episode?.image?.medium || episode?.image?.original || "",
              }}
            >
              <GradientCover>
                <EpisodeNumber>Episode {episode?.number}</EpisodeNumber>
              </GradientCover>
            </CardImage>
          </EpisodeWrapper>
        )}
      />
    </EpisodesContainer>
  );
}
