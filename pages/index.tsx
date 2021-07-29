import { Api } from "./core";
import axios from "axios";
import React, { useEffect, useState } from "react";

import { Button } from "@material-ui/core";
import { RefreshRounded as RefershIcon } from "@material-ui/icons";

import { MovieCard } from "./components";
import { ReloadingIcon } from "./components/ui";

import { useMovieCardStyles as useStyles } from "./components/movie-card/styles";

const Home: React.FC<{ initialMovie: movieProps }> = ({ initialMovie }) => {
    const [movie, setMovie] = useState(initialMovie);
    const [isLoading, setIsLoading] = useState(false);
    const styles = useStyles()();

    useEffect(() => {
        if (movie?.id) setIsLoading(false);
    }, [movie]);

    const handleRefrechMovie = (e: React.SyntheticEvent) => {
        e.preventDefault();
        setIsLoading(true);
        axios
            .get("/api/random-movie")
            .then(({ data }) => setMovie(data.movie))
            .catch((e) => console.log("Error Fetching Movie"));
    };

    return (
        <div className={styles.root}>
            <div>
                {movie && <MovieCard isLoading={isLoading} movie={movie} />}
                <div className={styles.refreshButtonContainer}>
                    <Button
                        size="large"
                        color="primary"
                        variant="contained"
                        startIcon={
                            isLoading ? <ReloadingIcon /> : <RefershIcon />
                        }
                        disabled={isLoading}
                        onClick={handleRefrechMovie}
                    >
                        Salamix
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Home;

export const getStaticProps = async () => {
    const initialMovie = await Api.getRandomMovie();
    return {
        props: {
            initialMovie,
        },
    };
};
