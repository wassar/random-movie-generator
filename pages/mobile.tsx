import { Api } from "./core";
import { alpha, makeStyles, Typography } from "@material-ui/core";
import { Poster, Rating } from "./components/ui";
import MovieInfo from "./components/movie-card/_movie-info";
import MovieGenres from "./components/movie-card/_movie-genres-list";
import Story from "./components/movie-card/_movie-story";

export const getStaticProps = async () => {
    const initialMovie = await Api.getRandomMovie();
    return {
        props: initialMovie,
    };
};

const useStyles = (backdrop: string) =>
    makeStyles((theme) => ({
        root: {
            borderRadius: theme.spacing(2),
            margin: theme.spacing(2),
            overflow: "hidden",
            boxShadow: `0px 0px 150px -45px ${alpha(
                theme.palette.primary.light,
                0.7
            )}`,
        },
        card: {
            background: theme.palette.background.default,
        },
        overlay: {
            background: `linear-gradient(to bottom, ${alpha(
                theme.palette.background.default,
                0.2
            )} 0%, ${
                theme.palette.background.default
            } 100%), url(/images/w780${backdrop}) no-repeat 50% 50%`,
            height: 320,
        },
        cardHeader: {
            display: "flex",
            padding: theme.spacing(0, 1),
            alignItems: "center",
            backgroundColor: theme.palette.background.default,
        },
        rating: {
            position: "absolute",
            top: theme.spacing(-5),
            right: theme.spacing(1),
        },

        cardHeaderContent: {
            paddingLeft: theme.spacing(1),

            position: "relative",
        },
        cardBody: {
            padding: theme.spacing(1),
        },
    }));

const MobileMovieCard: React.FC<movieProps> = (props) => {
    const {
        title,
        poster_path,
        backdrop_path,
        genres,
        vote_average,
        overview,
    } = props;
    const styles = useStyles(backdrop_path)();

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
