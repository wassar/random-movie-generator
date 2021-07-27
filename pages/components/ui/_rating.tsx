import { makeStyles, Typography, CircularProgress } from "@material-ui/core";

const useStyles = () =>
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

export interface MovieRatingProps {
    rating: number;
}

const MovieRating: React.FC<MovieRatingProps> = ({ rating }) => {
    const styles = useStyles()();

    return (
        <div aria-label="Rating" className={styles.root}>
            <CircularProgress
                variant="determinate"
                value={!rating ? 100 : rating * 10}
            />
            <div className={styles.rating}>
                <Typography variant="caption" component="div">
                    {rating || "N/A"}
                </Typography>
            </div>
        </div>
    );
};

export default MovieRating;
