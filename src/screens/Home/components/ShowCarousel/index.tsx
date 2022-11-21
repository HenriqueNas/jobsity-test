import React from "react";
import { useTheme } from "styled-components/native";

import { useHomeStackNavigation } from "../../../../services/navigation";

import { Title } from "../../../components/Text";

import {
  CarouselContainer,
  CardImage,
  ShowWrapper,
  GradientCover,
  ShowGenres,
  ShowList,
  ShowName,
} from "./styles";

export function ShowCarousel({ title, showModelList }: ShowCarouselProps) {
  const { spacing } = useTheme();
  const { navigate } = useHomeStackNavigation();

  function navigateToShow(id: number) {
    navigate("Show", { id });
  }

  return (
    <CarouselContainer>
      {title && (
        <Title style={{ paddingLeft: spacing.xl, paddingBottom: spacing.md }}>
          {title}
        </Title>
      )}

      <ShowList
        data={showModelList}
        keyExtractor={(show) => show?.id.toString()}
        renderItem={({ item: show }) => (
          <ShowWrapper onPress={() => navigateToShow(show.id)}>
            <CardImage
              source={{
                uri: show?.image?.medium || show?.image?.original || "",
              }}
            >
              <GradientCover>
                <ShowName>{show?.name}</ShowName>
                <ShowGenres>{show?.genres?.join(", ")}</ShowGenres>
              </GradientCover>
            </CardImage>
          </ShowWrapper>
        )}
      />
    </CarouselContainer>
  );
}
