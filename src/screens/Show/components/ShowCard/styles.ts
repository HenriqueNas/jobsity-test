import { LinearGradient } from "expo-linear-gradient";
import { RFPercentage } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const ShowCardContainer = styled.ImageBackground.attrs({
  resizeMode: "cover",
})`
  width: 100%;
  height: ${RFPercentage(50)}px;

  /* position: absolute;
  top: 0; */
`;

export const GradientCover = styled(LinearGradient).attrs({
  colors: [
    "transparent",
    "rgba(9, 9, 15, 0.3)",
    "rgba(9, 9, 15, 0.8)",
    "rgba(9, 9, 15, 0.9)",
    "rgba(9, 9, 15, 1)",
  ],
  start: { x: 0.5, y: 0.3 },
})`
  flex: 1;

  align-items: center;
  justify-content: flex-end;

  padding: ${({ theme }) => theme.spacing.md}px;
`;
