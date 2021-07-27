import { makeStyles, alpha, Typography } from "@material-ui/core";
import { Poster, Rating } from "../ui";

import MovieGenres from "./_movie-genres-list";
import MovieInfo from "./_movie-info";
import Story from "./_movie-story";

const useStyles = () =>
    makeStyles((theme) => ({
        root: {
            position: "relative",
            minHeight: 370,
            width: 820,
            maxWidth: "100%",
            borderRadius: theme.spacing(2),
            boxShadow: `0px 0px 150px -45px ${alpha(
                theme.palette.primary.main,
                0.8
            )}`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right center",
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
            marginRight: theme.spacing(1),
        },
        storyWrapper: {
            marginTop: theme.spacing(1),
        },
    }));

const CardContainer: React.FC<movieProps> = (props) => {
    const styles = useStyles()();
    const {
        title,
        backdrop_path,
        poster_path,
        genres,
        runtime,
        release_date,
        original_language,
        vote_average,
        overview,
    } = props;
    return (
        <div
            className={styles.root}
            style={{
                background: `linear-gradient(to right, rgb(0,0,0) 30%, rgba(0,0,0,.2) 100%), url(/images/w780${backdrop_path})`,
            }}
        >
            <div className={styles.container}>
                <div className={styles.content}>
                    <Poster
                        poster_path={poster_path}
                        title={title}
                        size="w92"
                    />
                    <div className={styles.movieData}>
                        <Typography variant="h5">{title}</Typography>
                        <div className={styles.movieInfo}>
                            <div className={styles.movieInfoWrapper}>
                                <MovieInfo
                                    original_language={original_language}
                                    runtime={runtime}
                                    release_date={release_date}
                                />
                                <MovieGenres genres={genres} />
                            </div>
                            <div>
                                <Rating rating={vote_average} />
                            </div>
                        </div>
                    </div>
                </div>
                {overview && (
                    <div className={styles.storyWrapper}>
                        <Story overview={overview} />
                    </div>
                )}
            </div>
        </div>
    );
};

export default CardContainer;
