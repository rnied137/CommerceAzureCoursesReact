import { extendTheme, ThemeConfig  } from "@chakra-ui/react"

const config = {
    initialColorMode: "light",
    useSystemColorMode: true,
    colors:  {
        primary: "#6F52ED",
        secondary: "",
        dark: "",
        light: "",
        whiteFont:" #fff",
        blackFornt: "#00000",
        brand: {
        900: "#1a365d",
        800: "#153e75",
        700: "#2a69ac"
      },

    }
}


export const theme = extendTheme(config)
