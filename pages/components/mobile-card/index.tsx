import { Typography, useMediaQuery, useTheme } from "@material-ui/core";

import { Poster, Rating } from "../ui";
import MovieInfo from "../movie-card/_movie-info";
import MovieGenres from "../movie-card/_movie-genres-list";
import Story from "../movie-card/_movie-story";

import { useMobileStyles, useDesktopStyles, useStyles } from "./styles";

const MobileMovieCard: React.FC<movieProps> = (props) => {
    const {
        title,
        poster_path,
        backdrop_path,
        genres,
        vote_average,
        overview,
    } = props;

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
                                {props.title || "salamixs"}
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

export default MobileMovieCard;
