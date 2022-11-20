import styled from "styled-components/native";

export const HomeContainer = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})`
  flex: 1;
  padding-top: ${({ theme }) => theme.spacing.md}px;
  background-color: ${({ theme }) => theme.colors.background_primary};
`;

export const Header = styled.View`
  width: 100%;

  padding: ${({ theme }) => theme.spacing.md}px 0;
  margin: 0 ${({ theme }) => theme.spacing.xl}px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.on_background};
  font-size: ${({ theme }) => theme.fonts.size.xxl}px;
  font-family: ${({ theme }) => theme.fonts.family.regular};
  line-height: 32px;
`;

export const BoldTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.family.bold};
`;

export const Subtitle = styled.Text`
  color: ${({ theme }) => theme.colors.secondary_on_background};
  font-size: ${({ theme }) => theme.fonts.size.sm}px;
  line-height: 24px;
`;

export const Loading = styled.ActivityIndicator.attrs(({ theme }) => ({
  size: "large",
  color: theme.colors.secondary_on_background,
}))`
  margin-top: 100px;
`;
