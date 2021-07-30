import { makeStyles, alpha } from "@material-ui/core";
export const useCardContainerStyles = () =>
    makeStyles((theme) => ({
        root: {
            position: "relative",
            minHeight: 370,
            width: 820,
            maxWidth: "100%",
            borderRadius: theme.spacing(2),
            background: theme.palette.background.default,
            backgroundRepeat: "no-repeat !important",
            backgroundPosition: "right center !important",
            boxShadow: `0px 0px 150px -45px ${alpha(
                theme.palette.primary.main,
                0.7
            )}`,
            transition: "400ms",
            "&:hover": {
                transform: "scale(1.1)",
            },
        },
        container: {
            padding: theme.spacing(1.5, 0, 0, 1.5),
            width: "40%",
        },
        content: {
            display: "flex",
        },
        movieData: {
            margin: theme.spacing(1, 0, 0, 1),
            width: "100%",
        },
        movieInfo: {
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
        },
        movieInfoWrapper: {
            width: "100%",
            marginRight: theme.spacing(1),
        },
        storyWrapper: {
            marginTop: theme.spacing(1),
        },
        posterContainer: {
            width: 70,
            height: "auto",
        },
    }));

export const useMovieCardStyles = () =>
    makeStyles((theme) => ({
        root: {
            display: "flex",
            minWidth: "100%",
            minHeight: "100vh",
            justifyContent: "center",
            alignItems: "center",
        },
        refreshButtonContainer: {
            marginTop: theme.spacing(9),
            textAlign: "center",
        },
    }));
