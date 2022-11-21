import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const ShowContainer = styled.ScrollView.attrs({
  bounces: false,
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    alignItems: "center",
    justifyContent: "center",
  },
})`
  width: 100%;

  background-color: ${({ theme }) => theme.colors.background_primary};
`;

export const PlotWrapper = styled.View`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.xl}px;
`;

export const Plot = styled.Text`
  font-size: ${({ theme }) => theme.fonts.size.sm}px;
  font-family: ${({ theme }) => theme.fonts.family.regular};

  color: ${({ theme }) => theme.colors.secondary_on_background};
  line-height: 24px;
  text-align: justify;
`;
