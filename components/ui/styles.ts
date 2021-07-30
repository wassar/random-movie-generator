import { makeStyles } from "@material-ui/core";

export const usePosterStyles = () =>
    makeStyles((theme) => ({
        borderRadius: {
            borderRadius: theme.spacing(1),
        },
        root: {
            position: "relative",
            borderRadius: theme.spacing(1),
            overflow: "hidden",
            minHeight: 87,
        },
        overlay: {
            position: "absolute",
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            transform: "none",
        },
    }));

export const useRatingStyles = () =>
    makeStyles({
        root: {
            position: "relative",
            display: "inline-flex",
        },
        rating: {
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            position: "absolute",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
        },
    });
