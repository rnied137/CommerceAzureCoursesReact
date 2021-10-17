import { extendTheme  } from "@chakra-ui/react"
import { ButtonStyles as Button } from './ButtonStyles';


const config = {
    initialColorMode: "light",
    useSystemColorMode: true,
    colors:  {
        primary: "#6F52ED",
        secondary: "",
        dark: "",
        light: "",
        whiteFont:" #fff",
        blackFont: "#00000",
        brand: {
        900: "#1a365d",
        800: "#153e75",
        700: "#2a69ac"
      },

    },
    components: {
       Button,
    }
}


export const theme = extendTheme(config)



/*

const customTheme = extendTheme({
  colors: {
    purple: "#8966ff",
    brand: {
      50: "#ece4ff",
      100: "#c4b2ff",
      200: "#9d80ff",
      300: "#754dff",
      400: "#4f1bfe",
      500: "#3601e5",
      600: "#2900b3",
      700: "#1c0081",
      800: "#10004f",
      900: "#060020",
    },
  },
});



*/