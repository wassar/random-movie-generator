import { useContext } from "react";
import { Typography, useMediaQuery, useTheme } from "@material-ui/core";

import {
    Poster,
    Rating,
    SkeletonComponent,
    MovieInfo,
    MovieGenres,
    Story,
    LoadingContexnt,
} from "../";

import { useStyles } from "./styles";

const MovieCard: React.FC<movieProps> = (props) => {
    const {
        title,
        poster_path,
        backdrop_path,
        genres,
        vote_average,
        overview,
    } = props;

    const isLoading = useContext(LoadingContexnt);

    const theme = useTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up("small"));

    const styles = useStyles(isDesktop)(backdrop_path)();

    return (
        <div className={styles.root}>
            <div className={styles.overlay} />
            <div className={styles.card}>
                <div className={styles.cardHeader}>
                    <Poster
                        poster_path={poster_path}
                        title={title}
                        size="w92"
                    />
                    <div className={styles.cardHeaderContent}>
                        <div className={styles.rating}>
                            <Rating rating={vote_average} />
                        </div>
                        <div>
                            <Typography variant="h4">
                                {isLoading ? (
                                    <SkeletonComponent
                                        animation="wave"
                                        width="90%"
                                    />
                                ) : (
                                    props.title
                                )}
                            </Typography>
                            <MovieInfo {...props} />
                            <MovieGenres genres={genres} />
                        </div>
                    </div>
                </div>
                <div className={styles.cardBody}>
                    <Story overview={overview} />
                </div>
            </div>
        </div>
    );
};

export default MovieCard;
