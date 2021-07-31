import { makeStyles } from "@material-ui/core";
export const useStyles = () =>
    makeStyles((theme) => ({
        root: {
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
        },
        wrapper: {
            width: "100%",
        },
        buttonContainer: {
            display: "none",
            textAlign: "center",
            marginTop: 40,
            [theme.breakpoints.up("small")]: {
                display: "block",
            },
        },
    }));
