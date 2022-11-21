import styled from "styled-components/native";

import { LinearGradient } from "expo-linear-gradient";
import { FlatList, FlatListProps } from "react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

import { EpisodeModel } from "../../../../models/episode";

export const EpisodesContainer = styled.View`
  width: 100%;
`;

export const Heading = styled.Text`
  padding: ${({ theme }) => theme.spacing.md}px
    ${({ theme }) => theme.spacing.xl}px;

  font-size: ${({ theme }) => theme.fonts.size.lg}px;
  font-family: ${({ theme }) => theme.fonts.family.regular};
  color: ${({ theme }) => theme.colors.on_background};
`;

export const EpisodesList = styled(
  FlatList as new (props: FlatListProps<EpisodeModel>) => FlatList<EpisodeModel>
).attrs({
  horizontal: true,
  seasonsHorizontalScrollIndicator: false,
  contentContainerStyle: {
    alignItems: "center",
    paddingHorizontal: RFValue(32),
  },
})``;

export const EpisodeWrapper = styled.TouchableOpacity``;

export const CardImage = styled.ImageBackground.attrs({
  resizeMode: "cover",
})`
  width: ${RFPercentage(20)}px;
  height: ${RFPercentage(30)}px;
  margin-right: ${({ theme }) => theme.spacing.md}px;

  overflow: hidden;
  border-radius: ${RFValue(16)}px;
`;

export const GradientCover = styled(LinearGradient).attrs({
  colors: ["transparent", "rgba(23, 23, 29, 0.8)", "rgba(23, 23, 29, 1)"],
  start: { x: 0.5, y: 0.4 },
})`
  flex: 1;
  align-items: flex-start;
  justify-content: flex-end;

  padding: ${({ theme }) => theme.spacing.md}px;
`;

export const EpisodeNumber = styled.Text.attrs({
  numberOfLines: 1,
})`
  font-family: ${({ theme }) => theme.fonts.family.regular};
  font-size: ${({ theme }) => theme.fonts.size.md}px;

  color: ${({ theme }) => theme.colors.on_background};
`;

export const EpisodeYear = styled.Text.attrs({
  numberOfLines: 1,
})`
  font-family: ${({ theme }) => theme.fonts.family.regular};
  font-size: ${({ theme }) => theme.fonts.size.sm}px;

  color: ${({ theme }) => theme.colors.secondary_on_background};
`;
