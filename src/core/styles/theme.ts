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
    on_background_secondary: "#A0A0A0",

    primary: "#FF725E",
    secondary: "#91A0E2",
  },
  fonts: {
    primary: {
      regular: "Poppins_400Regular",
      medium: "Poppins_500Medium",
      semi_bold: "Poppins_600SemiBold",
      bold: "Poppins_700Bold",
    },
  },
};

export default theme;
