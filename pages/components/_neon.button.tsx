import { FC } from "react";
import { Button, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    button: {
        boxShadow: `0 0 60px 4px ${theme.palette.primary.main}`,
    },
}));

const NeonButton: FC = ({ children }) => {
    const styles = useStyles();
    return (
        <Button
            className={styles.button}
            size="large"
            variant="contained"
            color="primary"
        >
            {children}
        </Button>
    );
};

export default NeonButton;
