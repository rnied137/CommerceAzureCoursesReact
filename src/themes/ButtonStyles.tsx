import { mode, darken, whiten } from "@chakra-ui/theme-tools";

interface IProps {

}

export const ButtonStyles = {
    sizes: {},
    baseStyles: {},
    variants: {
        primary: (props: IProps) =>({
        bg: "primary",
        color: "white",
        transition: 'all 200ms ease',
        _hover: {
            bg: mode(whiten("primary", 30), darken("secondary", 30)),
            boxShadow: "md",
            transform: "scale(1.1)",
            },
        }),
    secondary: (props: IProps) => ({
        bg: "blue",
        color: "black"
        }),
    },
    defaultProps: {
    },
};