import { makeStyles } from "@material-ui/core";

export interface MobileMovieCardProps {}

const useStyles = (backdrop) =>
    makeStyles((theme) => ({
        root: {
            background: `url(/images/${backdrop}) no-repeat center top`,
        },
    }));

const MobileMovieCard: React.FC<movieProps> = (props) => {
    const styles = useStyles(props.backdrop_path)();
    return (
        <div className={styles.root}>
            <div></div>
        </div>
    );
};

export default MobileMovieCard;
