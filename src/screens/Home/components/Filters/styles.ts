import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";

export const FiltersContainer = styled.View`
  margin: ${({ theme }) => theme.spacing.sm}px
    ${({ theme }) => theme.spacing.xl}px;
`;

export const FiltersWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Heading = styled.Text`
  font-size: ${({ theme }) => theme.fonts.size.md}px;
  font-family: ${({ theme }) => theme.fonts.family.regular};

  color: ${({ theme }) => theme.colors.on_background};
  line-height: 32px;
  padding-bottom: ${({ theme }) => theme.spacing.sm}px;
`;

export const Filter = styled.TouchableOpacity`
  align-items: center;
`;

export const FilterIconWrapper = styled.View`
  height: ${RFValue(50)}px;
  width: ${RFValue(50)}px;
  border-radius: ${RFValue(16)}px;

  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.colors.shape_dark};
  margin-bottom: ${({ theme }) => theme.spacing.sm}px;
`;

export const FilterIcon = styled(Feather)`
  color: ${({ theme }) => theme.colors.on_background};
  font-size: ${RFValue(24)}px;
`;

export const FilterLabel = styled.Text`
  color: ${({ theme }) => theme.colors.secondary_on_background};
`;
