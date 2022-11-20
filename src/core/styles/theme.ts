import { RFValue } from "react-native-responsive-fontsize";

type colors = typeof theme.colors;
type fonts = typeof theme.fonts;

export type ColorType = keyof colors;
export type FontsType = keyof fonts;

const theme = {
  colors: {
    background_primary: "#09090F",
    background_secondary: "#51535E",
    shape: "#FFFFFF",
    shape_dark: "#17171D",

    on_background: "#FFFFFF",
    secondary_on_background: "#A0A0A0",

    primary: "#FF725E",
    secondary: "#91A0E2",
  },
  fonts: {
    family: {
      regular: "Poppins_400Regular",
      medium: "Poppins_500Medium",
      semi_bold: "Poppins_600SemiBold",
      bold: "Poppins_700Bold",
    },
    size: {
      sm: 16,
      md: 20,
      lg: 24,
      xl: 28,
      xxl: 32,
    },
  },
  spacing: {
    sm: RFValue(8),
    md: RFValue(16),
    lg: RFValue(24),
    xl: RFValue(32),
    xxl: RFValue(40),
  },
};

export default theme;
