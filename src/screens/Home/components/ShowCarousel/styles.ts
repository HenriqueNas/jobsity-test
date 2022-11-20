import { LinearGradient } from "expo-linear-gradient";
import { FlatList, FlatListProps } from "react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

import { ShowModel } from "../../../../models/show";

export const CarouselContainer = styled.View`
  width: 100%;

  margin: ${({ theme }) => theme.spacing.lg}px 0;
`;

export const CarouselTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.family.regular};
  font-size: ${({ theme }) => theme.fonts.size.xl}px;

  color: ${({ theme }) => theme.colors.on_background};

  margin: 0 ${({ theme }) => theme.spacing.xl}px;
  margin-bottom: ${({ theme }) => theme.spacing.md}px;
`;

export const ShowList = styled(
  FlatList as new (props: FlatListProps<ShowModel>) => FlatList<ShowModel>
).attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  bounces: false,
  snapToAlignment: "center",
  decelerationRate: "fast",
  snapToInterval: RFPercentage(30),
  contentContainerStyle: {
    alignItems: "center",
    paddingHorizontal: RFValue(32),
  },
})``;

export const ShowWrapper = styled.TouchableOpacity``;

export const CardImage = styled.ImageBackground.attrs({
  resizeMode: "cover",
})`
  width: ${RFPercentage(26)}px;
  height: ${RFPercentage(40)}px;
  margin-right: ${({ theme }) => theme.spacing.lg}px;

  overflow: hidden;
  border-radius: ${RFValue(16)}px;
`;

export const GradientCover = styled(LinearGradient).attrs({
  colors: ["transparent", "rgba(23, 23, 29, 0.6)", "rgba(23, 23, 29, 1)"],
  start: { x: 0.5, y: 0.4 },
})`
  flex: 1;
  align-items: flex-start;
  justify-content: flex-end;

  padding: ${({ theme }) => theme.spacing.md}px;
`;

export const ShowTitle = styled.Text.attrs({
  numberOfLines: 1,
})`
  font-family: ${({ theme }) => theme.fonts.family.regular};
  font-size: ${({ theme }) => theme.fonts.size.md}px;

  color: ${({ theme }) => theme.colors.on_background};
`;

export const ShowGenres = styled.Text.attrs({
  numberOfLines: 1,
})`
  font-family: ${({ theme }) => theme.fonts.family.regular};
  font-size: ${({ theme }) => theme.fonts.size.sm}px;

  color: ${({ theme }) => theme.colors.secondary_on_background};
`;
