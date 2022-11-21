import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { Feather } from "@expo/vector-icons";

export const GoBackContainer = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;

  width: ${RFValue(36)}px;
  height: ${RFValue(36)}px;

  position: absolute;
  top: ${({ theme }) => theme.spacing.xl * 2}px;
  left: ${({ theme }) => theme.spacing.xl}px;
  z-index: 1;

  border-radius: 16px;
  background-color: rgba(23, 23, 29, 0.9);
`;

export const GoBackIcon = styled(Feather).attrs({
  name: "arrow-left",
})`
  font-size: ${RFValue(18)}px;
  color: ${({ theme }) => theme.colors.on_background};
`;
