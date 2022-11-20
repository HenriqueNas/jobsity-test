import React from "react";

import {
  CardImage,
  CarouselContainer,
  CarouselTitle,
  ShowWrapper,
  GradientCover,
  ShowGenres,
  ShowList,
  ShowTitle,
} from "./styles";

export function ShowCarousel({ title, showModelList }: ShowCarouselProps) {
  return (
    <CarouselContainer>
      {title && <CarouselTitle>{title}</CarouselTitle>}

      <ShowList
        data={showModelList}
        keyExtractor={(show) => show.id.toString()}
        renderItem={({ item: show }) => (
          <ShowWrapper>
            <CardImage source={{ uri: show.image.medium }}>
              <GradientCover>
                <ShowTitle>{show.name}</ShowTitle>
                <ShowGenres>{show.genres.join(", ")}</ShowGenres>
              </GradientCover>
            </CardImage>
          </ShowWrapper>
        )}
      />
    </CarouselContainer>
  );
}
