import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";

import {
  CardImage,
  ShowTitle,
  ShowGenres,
  CarouselContainer,
  CarouselTitle,
  GradientCover,
  ShowList,
} from "./styles";

export function ShowCarousel({ title, showModelList }: ShowCarouselProps) {
  return (
    <CarouselContainer>
      {title && <CarouselTitle>{title}</CarouselTitle>}

      <ShowList
        data={showModelList}
        keyExtractor={(show) => show.id.toString()}
        renderItem={({ item: show }) => (
          <TouchableOpacity>
            <CardImage source={{ uri: show.image.medium }}>
              <GradientCover>
                <ShowTitle>{show.name}</ShowTitle>
                <ShowGenres>{show.genres.join(", ")}</ShowGenres>
              </GradientCover>
            </CardImage>
          </TouchableOpacity>
        )}
      />
    </CarouselContainer>
  );
}
