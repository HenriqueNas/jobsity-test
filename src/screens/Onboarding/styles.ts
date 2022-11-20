import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

export const OnboardingContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;

  padding: ${({ theme }) => theme.spacing.xxl}px;

  background-color: ${(props) => props.theme.colors.background_primary};
`;

export const Header = styled.View`
  width: 100%;
`;

export const Title = styled.Text`
  font-family: ${(props) => props.theme.fonts.family.semi_bold};
  font-size: ${({ theme }) => theme.fonts.size.xl}px;
  color: ${({ theme }) => theme.colors.on_background};

  line-height: 60px;
`;

export const Subtitle = styled.Text`
  width: 80%;

  font-family: ${(props) => props.theme.fonts.family.regular};
  font-size: ${({ theme }) => theme.fonts.size.sm}px;
  color: ${({ theme }) => theme.colors.secondary_on_background};

  line-height: 24px;
`;

export const Form = styled.View`
  width: 100%;
  align-items: flex-end;

  padding: ${({ theme }) => theme.spacing.xxl * 2}px 0;
`;

export const SignInButton = styled(TouchableOpacity)`
  height: ${RFValue(50)}px;
  width: ${RFValue(50)}px;
  border-radius: ${RFValue(16)}px;

  position: relative;
  right: 0;

  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.colors.background_secondary};
  margin-bottom: ${({ theme }) => theme.spacing.sm}px;
`;

export const SignInIcon = styled(Feather).attrs({
  name: "arrow-right",
})`
  font-size: ${RFValue(24)}px;
  color: ${({ theme }) => theme.colors.on_background};
`;

export const Continue = styled.Text`
  text-align: center;

  font-family: ${(props) => props.theme.fonts.family.medium};
  font-size: ${({ theme }) => theme.fonts.size.md}px;
  color: ${({ theme }) => theme.colors.on_background};
`;
