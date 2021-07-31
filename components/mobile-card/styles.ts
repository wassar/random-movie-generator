import { makeStyles, alpha } from "@material-ui/core";
export const useMobileStyles = (backdrop: string) =>
    makeStyles((theme) => ({
        root: {
            margin: theme.spacing(2),
            //width: "100%",
            maxHeight: "95vh",
            overflow: "hidden",

            backgroundPosition: "top center",
            backgroundAttachment: "fixed",

            boxShadow: `0px 0px 150px -45px ${alpha(
                theme.palette.primary.light,
                0.7
            )}`,

            //
            borderRadius: theme.spacing(2),

            backgroundImage: `${backdrop && `url(/images/w780${backdrop})`}`,
            backgroundRepeat: "no-repeat",
            //
        },
        overlay: {
            height: 320,
            maxHeight: "45vh",
            background: `linear-gradient(to bottom, ${alpha(
                theme.palette.background.default,
                0.2
            )} 0%, ${theme.palette.background.default} 100%)`,
        },
        card: {
            //
            background: theme.palette.background.default,
            position: "relative",
            //
        },
        cardHeader: {
            //
            display: "flex",
            alignItems: "center",
            //
            padding: theme.spacing(0, 1),
            /** deletable */
            backgroundColor: theme.palette.background.default,
        },
        rating: {
            //
            position: "absolute",
            //
            top: theme.spacing(-3),
            right: theme.spacing(1),
        },

        cardHeaderContent: {
            //
            paddingLeft: theme.spacing(1),
            width: "100%",
            //
        },
        cardBody: {
            padding: theme.spacing(1),
        },
    }));

///
export const useDesktopStyles = (backdrop: string | null) =>
    makeStyles((theme) => ({
        root: {
            display: "flex",
            flexDirection: "row-reverse",

            width: 820,
            height: 420,
            maxWidth: "100%",

            backgroundPosition: "right center",

            boxShadow: `0px 0px 150px -45px ${alpha(
                theme.palette.primary.light,
                0.7
            )}`,

            //
            borderRadius: theme.spacing(2),

            backgroundImage: `${backdrop && `url(/images/w780${backdrop})`}`,
            backgroundRepeat: "no-repeat",
            //

            //--delitable
            margin: "auto",
        },
        overlay: {
            flexGrow: 1,
            background: `linear-gradient(to right, ${
                theme.palette.background.default
            } 0%, ${alpha(theme.palette.background.default, 0.2)} 100%)`,
        },
        card: {
            width: "42%",
            background: theme.palette.background.default,
            padding: theme.spacing(2, 1),
        },
        cardHeader: {
            //
            display: "flex",
            alignItems: "center",
            position: "relative",
        },
        rating: {
            //
            position: "absolute",
            //
            right: theme.spacing(-3),
        },
        cardHeaderContent: {
            //
            paddingLeft: theme.spacing(1),
            //
            flexGrow: 1,
        },
        cardBody: {
            marginTop: theme.spacing(1),
        },
    }));

export const useStyles = (isDesktop: boolean) =>
    isDesktop ? useDesktopStyles : useMobileStyles;
