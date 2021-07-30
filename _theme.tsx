import { createTheme } from "@material-ui/core/styles";

declare module "@material-ui/core/styles/createBreakpoints" {
    interface BreakpointOverrides {
        xs: false;
        sm: false;
        md: false;
        lg: false;
        xl: false;
        //
        small: true;
    }
}

// Create a theme instance.
export default createTheme({
    palette: {
        type: "dark",
        primary: {
            main: "#E50914",
        },
        secondary: {
            main: "#f50057",
        },
        background: {
            default: "#101011",
            paper: "#303030",
        },
        text: {
            primary: "#f2f2f2",
        },
    },
    breakpoints: {
        values: {
            small: 820,
        },
        keys: ["small"],
    },
});
