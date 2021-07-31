import PropTypes from "prop-types";
import { useContext } from "react";

import { Typography, CircularProgress } from "@material-ui/core";
import { LoadingContexnt, SkeletonComponent } from "..";

import { useRatingStyles as useStyles } from "./styles";

export interface MovieRatingProps {
    rating: number;
}

const MovieRating: React.FC<MovieRatingProps> = ({ rating }) => {
    const styles = useStyles()();

    const isLoading = useContext(LoadingContexnt);

    return (
        <>
            {isLoading ? (
                <SkeletonComponent
                    variant="circle"
                    style={{ width: 40, height: 40 }}
                />
            ) : (
                <div className={styles.root}>
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
            )}
        </>
    );
};

MovieRating.propTypes = {
    rating: PropTypes.number.isRequired,
};
export default MovieRating;
