import { Typography } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";
import { Poster, Rating, SkeletonComponent } from "../ui";

import MovieGenres from "./_movie-genres-list";
import MovieInfo from "./_movie-info";
import Story from "./_movie-story";

import { useCardContainerStyles as useStyles } from "./styles";

interface MovieCardProps extends movieProps {
    isLoading: boolean;
}

const MovieCardProps: React.FC<MovieCardProps> = (props) => {
    const styles = useStyles()();
    const {
        isLoading,
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
                    <div className={styles.posterContainer}>
                        <Poster
                            poster_path={poster_path}
                            title={title}
                            size="w92"
                            isLoading={isLoading}
                        />
                    </div>
                    <div className={styles.movieData}>
                        <Typography variant="h5">
                            {isLoading ? (
                                <SkeletonComponent
                                    animation="wave"
                                    variant="text"
                                />
                            ) : (
                                title
                            )}
                        </Typography>
                        <div className={styles.movieInfo}>
                            <div className={styles.movieInfoWrapper}>
                                {isLoading ? (
                                    <>
                                        <SkeletonComponent
                                            animation="wave"
                                            width="80%"
                                        />
                                        <SkeletonComponent
                                            animation="wave"
                                            width="80%"
                                        />
                                    </>
                                ) : (
                                    <>
                                        <MovieInfo
                                            original_language={
                                                original_language
                                            }
                                            runtime={runtime}
                                            release_date={release_date}
                                        />
                                        <MovieGenres genres={genres} />
                                    </>
                                )}
                            </div>
                            <div>
                                {!isLoading && <Rating rating={vote_average} />}
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.storyWrapper}>
                    {isLoading ? (
                        <>
                            <SkeletonComponent animation="wave" />
                            <SkeletonComponent animation="wave" />
                            <SkeletonComponent animation="wave" width="75%" />
                        </>
                    ) : (
                        <Story overview={overview} />
                    )}
                </div>
            </div>
        </div>
    );
};

export default MovieCardProps;
