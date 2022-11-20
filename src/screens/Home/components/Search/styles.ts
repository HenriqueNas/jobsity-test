import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

import { Feather } from "@expo/vector-icons";

export const SearchContainer = styled.View`
  flex-direction: row;
  align-items: center;

  padding: ${({ theme }) => theme.spacing.md}px;
  margin: ${({ theme }) => theme.spacing.md}px
    ${({ theme }) => theme.spacing.xl}px;

  background: ${({ theme }) => theme.colors.shape_dark};
  border-radius: ${RFValue(16)}px;

  border: 1px solid ${({ theme }) => theme.colors.background_secondary};
`;

export const SearchInput = styled.TextInput.attrs(({ theme }) => ({
  placeholderTextColor: theme.colors.secondary_on_background,
}))`
  flex: 1;

  color: ${({ theme }) => theme.colors.on_background};
  font-size: ${({ theme }) => theme.fonts.size.sm}px;
  font-family: ${({ theme }) => theme.fonts.family.medium};
`;

export const SearchIcon = styled(Feather).attrs({
  name: "search",
})`
  color: ${({ theme }) => theme.colors.on_background};
  font-size: ${RFValue(16)}px;
  margin-right: ${({ theme }) => theme.spacing.md}px;
`;
