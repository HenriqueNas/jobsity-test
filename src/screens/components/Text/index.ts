import styled from "styled-components/native";

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.fonts.size.xl}px;
  font-family: ${({ theme }) => theme.fonts.family.regular};

  color: ${({ theme }) => theme.colors.on_background};
  line-height: 32px;
`;

export const BoldTitle = styled.Text`
  font-size: ${({ theme }) => theme.fonts.size.xl}px;
  font-family: ${({ theme }) => theme.fonts.family.bold};

  color: ${({ theme }) => theme.colors.on_background};
  line-height: 32px;
`;

export const Subtitle = styled.Text`
  font-size: ${({ theme }) => theme.fonts.size.sm}px;
  font-family: ${({ theme }) => theme.fonts.family.regular};

  color: ${({ theme }) => theme.colors.secondary_on_background};
  line-height: 24px;
`;
